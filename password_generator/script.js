// DOM elements
const passwordDisplay = document.getElementById("passwordDisplay");
const copyBtn = document.getElementById("copyBtn");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const resetBtn = document.getElementById("resetBtn");

const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const includeSpaces = document.getElementById("includeSpaces");
const customCharacterSet = document.getElementById("customCharacterSet");

const excludeSimilarCharacters = document.getElementById(
  "excludeSimilarCharacters"
);
const excludeAmbiguousCharacters = document.getElementById(
  "excludeAmbiguousCharacters"
);
const includeLeetSpeak = document.getElementById("includeLeetSpeak");
const randomizeLength = document.getElementById("randomizeLength");
const noRepeatCharacters = document.getElementById("noRepeatCharacters");

const camelCase = document.getElementById("camelCase");
const kebabCase = document.getElementById("kebabCase");

const form = document.getElementById("passwordGeneratorForm");

// Similar and ambiguous sets
const similarChars = "il1Lo0O";
const ambiguousChars = "{}[]/\\'\"`~,;:.<>";

// Default settings
const defaults = {
  length: 10,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,
  includeSpaces: true,
  customSet: "",
  excludeSimilar: true,
  excludeAmbiguous: true,
  includeLeet: false,
  randomize: false,
  noRepeat: false,
  camel: false,
  kebab: false,
};

// Update length display on slider change
lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

// Disable/enable other options when custom set exists
customCharacterSet.addEventListener("input", () => {
  const hasCustom = customCharacterSet.value.trim().length > 0;
  const disables = [
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    includeSpaces,
    excludeSimilarCharacters,
    excludeAmbiguousCharacters,
    includeLeetSpeak,
  ];
  disables.forEach((el) => {
    if (hasCustom) {
      el.checked = false;
      el.disabled = true;
    } else {
      el.disabled = false;
    }
  });
});

// Reset to default settings
resetBtn.addEventListener("click", () => {
  lengthSlider.value = defaults.length;
  lengthValue.textContent = defaults.length;

  includeUppercase.checked = defaults.includeUppercase;
  includeLowercase.checked = defaults.includeLowercase;
  includeNumbers.checked = defaults.includeNumbers;
  includeSymbols.checked = defaults.includeSymbols;
  includeSpaces.checked = defaults.includeSpaces;
  customCharacterSet.value = defaults.customSet;

  excludeSimilarCharacters.checked = defaults.excludeSimilar;
  excludeAmbiguousCharacters.checked = defaults.excludeAmbiguous;
  includeLeetSpeak.checked = defaults.includeLeet;
  randomizeLength.checked = defaults.randomize;
  noRepeatCharacters.checked = defaults.noRepeat;

  camelCase.checked = defaults.camel;
  kebabCase.checked = defaults.kebab;

  // Re-enable if they were disabled
  [
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    includeSpaces,
    excludeSimilarCharacters,
    excludeAmbiguousCharacters,
    includeLeetSpeak,
  ].forEach((el) => (el.disabled = false));

  generateAndDisplayPassword();
});

// Generate + display on form submit or on load
form.addEventListener("submit", generateAndDisplayPassword);
window.addEventListener("load", generateAndDisplayPassword);

// Copy to clipboard (with textarea fallback for very long strings)
copyBtn.addEventListener("click", () => {
  const pwd = passwordDisplay.textContent;
  if (!pwd || pwd.includes("*")) return; // nothing to copy yet

  // First, try the modern Clipboard API:
  navigator.clipboard
    .writeText(pwd)
    .then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1000);
    })
    .catch(() => {
      // Fallback: use a hidden textarea if Clipboard API fails
      const tmp = document.createElement("textarea");
      tmp.value = pwd;
      // Place it offscreen:
      tmp.style.position = "fixed";
      tmp.style.top = "-9999px";
      document.body.appendChild(tmp);
      tmp.select();
      try {
        document.execCommand("copy");
        copyBtn.textContent = "Copied!";
      } catch {
        copyBtn.textContent = "Failed";
      }
      document.body.removeChild(tmp);
      setTimeout(() => (copyBtn.textContent = "Copy"), 1000);
    });
});

function generateAndDisplayPassword(e) {
  if (e) e.preventDefault();

  // Determine length
  let length = parseInt(lengthSlider.value, 10);
  if (randomizeLength.checked) {
    length = Math.floor(Math.random() * (64 - 4 + 1)) + 4;
    lengthSlider.value = length;
    lengthValue.textContent = length;
  }

  // Build charset
  let charset = "";
  const customSetVal = customCharacterSet.value.trim();
  if (customSetVal.length > 0) {
    charset = customSetVal;
  } else {
    if (includeUppercase.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase.checked) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers.checked) charset += "0123456789";
    if (includeSymbols.checked) charset += "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
    if (includeSpaces.checked) charset += " ";
  }

  // Exclude similar or ambiguous
  if (excludeSimilarCharacters.checked) {
    charset = Array.from(charset)
      .filter((c) => !similarChars.includes(c))
      .join("");
  }
  if (excludeAmbiguousCharacters.checked) {
    charset = Array.from(charset)
      .filter((c) => !ambiguousChars.includes(c))
      .join("");
  }

  // If charset is empty, fallback to lowercase
  if (charset.length === 0) {
    charset = "abcdefghijklmnopqrstuvwxyz";
  }

  // Generate password (no repeat if chosen)
  let pwd = "";
  if (noRepeatCharacters.checked && length <= charset.length) {
    // shuffle and take first `length`
    const shuffled = shuffleArray(Array.from(charset));
    pwd = shuffled.slice(0, length).join("");
  } else {
    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * charset.length);
      pwd += charset[idx];
    }
  }

  // Leet speak transformation
  if (includeLeetSpeak.checked) {
    pwd = toLeet(pwd);
  }

  // Case formatting (camel/kebab)
  if (camelCase.checked) {
    pwd = pwd
      .split(/[\s_-]+/)
      .map((word, i) => {
        if (i === 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  } else if (kebabCase.checked) {
    pwd = pwd.replace(/\s+/g, "-").toLowerCase();
  }

  // Update display
  passwordDisplay.textContent = pwd;
}

// Utility: shuffle array (Fisher–Yates)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Utility: simple Leet substitutions
function toLeet(text) {
  const map = {
    a: "4",
    A: "4",
    e: "3",
    E: "3",
    i: "1",
    I: "1",
    o: "0",
    O: "0",
    s: "5",
    S: "5",
    t: "7",
    T: "7",
  };
  return text.replace(/[AEIOSTaeiost]/g, (c) => map[c] || c);
}
