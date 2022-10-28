// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `https://img.shields.io/badge/icq_new-black?style=for-the-badge&logo=icq&logolColor=42F425`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description /n${data.description}
  ## Usage ${data.usage}
  ## Testing ${data.tests}
  ## Contributers ${data.contributers}
  ## URL ${data.url}
  ## Picture ${data.picture}


${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
