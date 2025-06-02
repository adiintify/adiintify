// Matrix background effect
var canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters =
  "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
letters = letters.split("");

// Setting up the columns
var fontSize = 10,
  columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
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

// Loop the animation
setInterval(draw, 33);

// Adjust canvas size on window resize
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = canvas.width / fontSize;
  drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }
});

let selectionCount = {
  about: 0,
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
    case "contact":
      message = `
          <ul>
            <li>Email: <i>complex@duck.com</i></li>
            <li>Phone: <i>+91-9876543210</i></li>
          </ul>
          <p><i>This is a fake mobile number, nice try! But don’t worry, the email is legit—unless my evil twin set this up.</i></p>`;
      if (selectionCount.contact > 1) {
        message += `<p><i>Security Tip: Always watch your back. I could be tracking you... just kidding! Or am I?</i></p>`;
      }
      break;
    case "work":
      message = `
            <p><b>Nykaa - Senior Security Engineer <i>(Dec 2022- July 2024)</i></b></p>
            <ul>
            <li><i>Configuring and managing Cloudflare for various web applications, monitoring and analyzing traffic patterns to identify potential security threats or performance issues, implementing firewall rules, DDoS protection, and other security measures.</i></li>
            <li><i>Designing and implementing cloud custodian policies to enforce compliance and governance requirements across cloud resources and automating cloud resource provisioning and deprovisioning workflows.</i></li>
            <li><i>Configuring and managing AWS security controls, including IAM, organizations, SSO, VPC, S3, EC2, RDS, ELB, CloudTrail, Config, Inspector, GuardDuty, WAF, and more.</i></li>
            <li><i>Collaborating with cross-functional teams, including DevOps and network engineers, to design and implement secure cloud architectures.</i></li>
            <li><i>Developing and maintaining security incident response plans and procedures to effectively respond to security incidents and breaches.</i></li>
          </ul>
            <p><b>Great Learning - Senior Security Operations Engineer <i>(Jan 2021- December 2022)</i></b></p>
            <ul>
            <li><i>Security implementation from the ground up.</i></li>
            <li><i>Helped team in reproducing, triaging, and addressing application security vulnerabilities.</i></li>
            <li><i>Wrote comprehensive reports including assessment-based findings, outcomes, and propositions for further system security enhancement.</i></li>
            <li><i>Developed technical solutions and new security tools to help mitigate security vulnerabilities and automate repeatable tasks.</i></li>
            <li><i>Built complex application stacks from the scratch utilizing Infrastructure as Code with the AWS Cloud Development Kit to minimize human error, future proofing, and enable quick deployment for disaster recovery.</i></li>
            <li><i>Deployed Incident Response and Alerting with AWS CloudWatch, AWS CloudTrail, AWS Config, Amazon Inspector, Amazon GuardDuty, and AWS Security Hub.</i></li>
            <li><i>Deployment and maintenance of AWS WAF for all apps, as well as designing WAF rules to counter risks like the OWASP Top 10, known bad inputs, and bot control.</i></li>
            <li><i>Deployment and maintenance of security awareness trainings to reduce human risks for our organization.</i></li>
            <li><i>Designed and integrated endpoint protection solutions into the organization's infrastructure based on the business requirements.</i></li>
            <li><i>Evaluated internal controls based on various security standards (ISO 270001, SOC 2, NIST Cybersecurity Framework).</i></li>
          </ul>
            <p><b>eSec Forte® Technologies - Information Security Consultant <i>(Jan 2019- Dec 2020)</i></b></p>
            <ul>            
            <li><i>Performed manual and automated dynamic grey-box security testing and remediation testing on a wide range of web and native mobile-based applications hosted in multiple pre-prod environments.</i></li>
            <li><i>Provided approval for applications to be released into a production environment based on the severity of open vulnerabilities in the application environment and the intended remediation date.</i></li>
            <li><i>Finding the root cause of security vulnerabilities in the source code, prioritized the critical issues, and provided detailed guidance on how to fix them so developers can resolve issues in less time with the help of Micro Focus Fortify Static Code Analyzer.</i></li>
            <li><i>Built mechanisms to ensure that all services, applications, and tools are secure throughout the software development lifecycle.</i></li>
            <li><i>Managed Security Scorecard and BitSight Security ratings to monitor the integrity of the infrastructure by keeping tabs on the configuration of outdated browsers, operating systems, expired FTP services, and weak or expired certificates.</i></li>
          </ul>`;
      break;
    case "skills":
      message = `
          <ul>
            <li>Programming: <i>TypeScript, JavaScript, Python, SQL</i></li>
            <li>Security Tools: <i>Burpsuite, SQLmap, Nexpose, Nessus, Wireshark, Metasploit, Nmap</i></li>
            <li>Security Solutions: <i>IBM QRadar, ARCOS, F-Secure/Trend Micro, Forti DB</i></li>
            <li>Operating Systems: <i>Windows, Linux, Macintosh</i></li>
            <li>Adobe Creative Suite: <i>Photoshop, Lightroom, Premiere Pro, After Effects, Illustrator</i></li>
          </ul>`;
      break;
    case "certifications":
      message = `
          <ul>
            <li>AWS Certified Cloud Practitioner <i>(Jan 2022 - Jan 2025)</i></li>
            <li>AWS Certified Security – Specialty <i>(Sep 2023 - Sep 2026)</i></li>
          </ul>`;
      break;
    case "projects":
      message = `
          <ul>
            <li>Session Monitor using Raspberry Pi <i>- This project involves using a Raspberry Pi Zero to monitor the internet traffic of a locked Windows machine running version 7 or below. The Raspberry Pi emulates an Ethernet device over USB and hijacks all internet traffic from the locked machine.</i></li>
            <li>USB Intruder <i>- This device is Arduino-based and can be used for offensive security goals such as installing backdoors, stealing documents, and capturing credentials.</i></li>
            <li>Secure Text Transfer using Diffie-Hellman Key Exchange <i>- This project involves using the Diffie-Hellman key exchange algorithm to securely transfer text between two parties over a cloud-based platform. The Diffie-Hellman key exchange algorithm is a cryptographic protocol that allows two parties to establish a shared secret over an insecure communication channel.</i></li>
          </ul>`;
      break;
    case "education":
      message = `
          <ul>
            <li><i>Bachelor of Technology in </i>Computer Science and Engineering <i>from </i>NITRA Technical Campus, Dr. A.P.J. Abdul Kalam Technical University</li>
          </ul>`;
      break;
    case "community":
      message = `
          <ul>
            <li>AWS Community Builder <i>(Mar 2023 - Present)</i></li>
            <li>BBWIC Foundation: <i>Community and Development Board Coordinator (Mar 2024 - Present)</i></li>
            <li>DEF CON Delhi Group DC 9111: <i>Core Team - Video Editor (Jun 2020 - Present)</i></li>
            <li>NULLCON & BSIDES DELHI: <i>Volunteer</i></li>
            <li>Rotaract Club of Capital City New Delhi: <i>Treasurer (Jul 2018-19)</i></li>
          </ul>`;
      break;
    case "github":
      message = `<p>Check out my GitHub: <a href="https://github.com/adiintify" target="_blank">https://github.com/adiintify</a></p>`;
      break;
    case "linkedin":
      message = `<p>Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/adiintify/" target="_blank">https://www.linkedin.com/in/adiintify/</a></p>`;
      break;
    case "medium":
      message = `<p>Read my articles on Medium: <a href="https://spoofing.medium.com/" target="_blank">https://spoofing.medium.com/</a></p>`;
      break;
    case "credly":
      message = `<p>View my certifications on Credly: <a href="https://www.credly.com/users/adiintify/badges" target="_blank">https://www.credly.com/users/adiintify/badges</a></p>`;
      break;
    case "holopin":
      message = `<p>Explore my badges on Holopin: <a href="https://www.holopin.io/@adiintify#badges" target="_blank">https://www.holopin.io/@adiintify#badges</a></p>`;
      break;
    case "twitter":
      message = `<p>Follow me on Twitter: <a href="https://twitter.com/adiintify" target="_blank">https://twitter.com/adiintify</a></p>`;
      break;
    case "passwordGenerator":
      message = "<p>Redirecting you to the Password Generator...</p>";
      setTimeout(function () {
        window.location.href = "password_generator/";
      }, 1000); // Redirect after 2 seconds
      break;

    default:
      message = "<p>I am not sure about that.</p>";
  }

  // Adding humor for repeated selections
  if (selectionCount[option] > 1 && option !== "contact") {
    message += `<p><i>Are you trying to hack me? You've already asked about ${option} ${selectionCount[option]} times!</i></p>`;
  }

  displayMessage(message);
}

function displayMessage(message) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("chatbot-message");
  messageContainer.innerHTML = message;
  document.getElementById("chatbotMessages").appendChild(messageContainer);
  document.getElementById("chatbotMessages").scrollTop =
    document.getElementById("chatbotMessages").scrollHeight;
}
