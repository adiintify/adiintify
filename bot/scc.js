// Matrix background effect (no changes here)
var canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var letters =
  "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
letters = letters.split("");
var fontSize = 10,
  columns = canvas.width / fontSize;
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, .1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = "#0f0";
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}
setInterval(draw, 33);
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = canvas.width / fontSize;
  drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }
});

// Keep track of how many times each option was clicked
let selectionCount = {
  passwordGenerator: 0,
  contact: 0,
  work: 0,
  skills: 0,
  certifications: 0,
  projects: 0,
  education: 0,
  community: 0,
  github: 0,
  linkedin: 0,
  medium: 0,
  credly: 0,
  holopin: 0,
  twitter: 0,
};

function reply(option) {
  selectionCount[option]++;

  let message = "";
  switch (option) {
    case "passwordGenerator":
      message = `
        <p>🔐 Redirecting you to the world’s strongest, most unpredictable passwords…</p>
        <p><i>Remember: a password is like toothpaste—once it’s out, you can’t stuff it back in the tube.</i></p>
      `;
      setTimeout(function () {
        window.location.href = "../password_generator/";
      }, 1200);
      break;

    case "contact":
      message = `
        <ul>
          <li>Email: <i>complex@duck.com</i> (PGP key available upon request.)</li>
          <li>Phone: <i>+91-9876543210</i> (Only open to secure networked calls, naturally.)</li>
        </ul>
        <p><i>Pro Tip: If you get a weird email from “me” asking for your SSH keys… it’s not me! Stay suspicious. 🕵️‍♂️</i></p>
      `;
      if (selectionCount.contact > 1) {
        message += `
          <p><i>Security Tip #${selectionCount.contact}:</i> Even I can't find my own backup of that phone number. Be careful who you trust!</p>
        `;
      }
      break;

    case "work":
      message = `
        <p><b>Nykaa - Senior Security Engineer <i>(Dec 2022 – Jul 2024)</i></b></p>
        <ul>
          <li><i>Built and deployed WAF rules to block malicious bots—like “if your user-agent is suspicious, I will see you later.”</i></li>
          <li><i>Set up DDoS protection so strong, the bots now fear me. They call me “DDoS Slayer.”</i></li>
          <li><i>Automated Cloud Custodian policies—think of them as “cloud bouncers” that check IDs before anything can enter.🚪</i></li>
          <li><i>Integrated AWS Security Hub so thoroughly, hackers now send me thank-you cookies… ironically.</i></li>
        </ul>
        <p><b>Great Learning - Senior Security Operations Engineer <i>(Jan 2021 – Dec 2022)</i></b></p>
        <ul>
          <li><i>Built detection pipelines that flagged suspicious logins—yes, I once blocked myself by mistake trying to log in from a different coffee shop. ☕️🔒</i></li>
          <li><i>Created automated phishing simulators. My coworkers hated me—until they realized they were outsmarting my fake emails! </i></li>
          <li><i>Deployed AWS WAF rules that prevented bad inputs—SQLi, XSS, you name it; now the webapp is practically bulletproof. (Well… as bulletproof as JavaScript allows.)</i></li>
          <li><i>Designed incident response flows that ran in less than 5 minutes—“We Got Pwned?” Not on my watch. 🕒</i></li>
        </ul>
        <p><b>eSec Forte Technologies - InfoSec Consultant <i>(Jan 2019 – Dec 2020)</i></b></p>
        <ul>
          <li><i>Conducted dynamic grey-box testing on clients’ apps; once I found a critical bug in a shopping cart—turns out the cart could subtract money from the customer’s account! 😱</i></li>
          <li><i>Helped triage and fix OWASP Top 10 issues—yes, that includes “why is your login form still vulnerable to brute force?”</i></li>
          <li><i>Built secure CI/CD pipelines that refused to merge any code with “password123” in it—everyone cried, then learned to code better. </i></li>
        </ul>
      `;
      break;

    case "skills":
      message = `
        <ul>
          <li>Programming: <i>TypeScript, JavaScript, Python, SQL</i> (I can script a quick pentest in under 5 seconds.)</li>
          <li>Security Tools: <i>Burp Suite, SQLmap, Nessus, Wireshark, Metasploit, Nmap</i> (My Kali VM is my BFF.)</li>
          <li>Cloud Security: <i>AWS IAM, WAF, GuardDuty, CloudCustodian</i> (I binge-watch AWS logs for fun.)</li>
          <li>Infra: <i>Terraform, Docker, Linux</i> (If it’s got “sudo” I’m in.)</li>
          <li>Scripting & Automation: <i>Bash, PowerShell, AWS CLI</i> (Yes, I once automated a toaster—security is for everything.)</li>
        </ul>
      `;
      break;

    case "certifications":
      message = `
        <ul>
          <li>AWS Certified Cloud Practitioner <i>(Jan 2022 – Jan 2025)</i> <b>✓</b></li>
          <li>AWS Certified Security – Specialty <i>(Sep 2023 – Sep 2026)</i> <b>✓</b></li>
          <li>Offensive Security Certified Professional (OSCP) <i>(coming soon… or is it?)</i></li>
        </ul>
        <p><i>Fun Fact: When you type “certificate” in a terminal, it’s pronounced “certify or die trying.”</i></p>
      `;
      break;

    case "projects":
      message = `
        <ul>
          <li><b>Session Monitor on Raspberry Pi:</b> Hijacked my own locked Windows 7 machine’s internet traffic—ethical purposes only, I swear! 🤖🔌</li>
          <li><b>USB Intruder:</b> Raspberry Pi + Arduino device that looks like a flash drive. Can deliver payloads, capture creds… but let’s not do that without permission, okay? 🖥️💾</li>
          <li><b>Secure Text Transfer with Diffie-Hellman:</b> Built a little chat app that never sees your plaintext. If someone online intercepts, they get nothing but gibberish.🔒📡</li>
          <li><b>Aditya’s AI Bot Scanner:</b> Proof of concept that runs a Burp-like spider on suspicious domains—basically my “neo-Matrix” for URL reconnaissance. 💀🕷️</li>
        </ul>
      `;
      break;

    case "education":
      message = `
        <ul>
          <li><i>B.Tech. in Computer Science & Engineering</i><br />(NITRA Technical Campus, Dr. A.P.J. Abdul Kalam Technical Univ.)</li>
          <li><i>Online: SANS SEC560 – Network Penetration Testing & Ethical Hacking</i></li>
          <li><i>Coursera: Cryptography I & II (Stanford Univ.)</i></li>
        </ul>
        <p><i>Note: I once tried to “hack” my own diploma to say “Master of Secrets”—the registrar was not amused. 🎓🔍</i></p>
      `;
      break;

    case "community":
      message = `
        <ul>
          <li>AWS Community Builder <i>(Mar 2023 – Present)</i> (I teach AWS to anyone who will listen—and secretly lecture my toaster.)</li>
          <li>DEF CON Delhi Group DC 9111: <i>Core Team – Video Editor (Jun 2020 – Present)</i> (I edited a talk on “Lockpicking for Hackers,” and yes, I got busted by airport security.)</li>
          <li>NULLCON & BSides Delhi: <i>Volunteer</i> (If you saw me wearing a black hoodie, I was definitely not hacking you. Maybe.)</li>
          <li>Rotaract Club of Capital City New Delhi: <i>Treasurer (Jul 2018 – Jul 2019)</i> (I kept our books so secure, not even I could find them later.)</li>
        </ul>
      `;
      break;

    case "github":
      message = `
        <p>
          👀 Check out my GitHub (fork at your own risk):<br />
          <a href="https://github.com/adiintify" target="_blank"
            >https://github.com/adiintify</a
          >
        </p>
        <p><i>Pro Tip: Don’t clone any repo without verifying the author’s PGP signature. 🧑‍💻🔐</i></p>
      `;
      break;

    case "linkedin":
      message = `
        <p>
          🔗 Connect over LinkedIn (I promise not to HR-stalk you)—<br />
          <a href="https://www.linkedin.com/in/adiintify/" target="_blank"
            >https://www.linkedin.com/in/adiintify/</a
          >
        </p>
        <p><i>Security Tip: Never give out your LinkedIn password to recruiters. They only need your profile link. 😉</i></p>
      `;
      break;

    case "medium":
      message = `
        <p>
          ✍️ Read my infosec articles on Medium:<br />
          <a href="https://spoofing.medium.com/" target="_blank"
            >https://spoofing.medium.com/</a
          >
        </p>
        <p><i>My latest post: “How to Build a Bot That Scares Hackers… and Maybe Yourself.”</i></p>
      `;
      break;

    case "credly":
      message = `
        <p>
          📜 See my badges on Credly—<br />
          <a href="https://www.credly.com/users/adiintify/badges" target="_blank"
            >https://www.credly.com/users/adiintify/badges</a
          >
        </p>
        <p><i>All my badges are stored in an encrypted vault… until you click that link. 😁</i></p>
      `;
      break;

    case "holopin":
      message = `
        <p>
          🎫 Explore my Holopin security badges—<br />
          <a href="https://www.holopin.io/@adiintify#badges" target="_blank"
            >https://www.holopin.io/@adiintify#badges</a
          >
        </p>
        <p><i>Who needs physical flair when you have digital badges that blink? ✨</i></p>
      `;
      break;

    case "twitter":
      message = `
        <p>
          🐦 Follow my security rants on Twitter—<br />
          <a href="https://twitter.com/adiintify" target="_blank"
            >https://twitter.com/adiintify</a
          >
        </p>
        <p><i>Warning: I live-tweet my pen tests. You’ve been warned. 🔥</i></p>
      `;
      break;

    default:
      message = `<p><i>🤖 I have no idea what “${option}” means. Are you trying to exploit me?</i></p>`;
      break;
  }

  // Add extra humor if user clicks the same option repeatedly
  if (selectionCount[option] > 1 && option !== "passwordGenerator") {
    message += `
      <p><i>🔁 You’ve asked for <b>${option}</b> ${selectionCount[option]} times. 
         Are you running automated queries on me? Well, nice try—but I’m watching!</i></p>
    `;
  }

  displayMessage(message);
}

function displayMessage(message) {
  const container = document.createElement("div");
  container.classList.add("chatbot-message");
  container.innerHTML = message;
  const chatLog = document.getElementById("chatbotMessages");
  chatLog.appendChild(container);
  chatLog.scrollTop = chatLog.scrollHeight;
}
