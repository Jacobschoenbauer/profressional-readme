// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "Greatest Badge ever";
  } else if (license === "Apache") {
    return "Another amazing badge";
  } else if (license === "Mozilla-Public") {
    return "Yes another amazing badge";
  } else license === "None";
  return "";

  /* switch (license) {
    case "MIT":
      return "The coolest badge ever made";
    case "Apache":
      return "The coolest badge ever made";
    case "Mozilla-Public":
      return "The coolest badge ever made";
    case "None":
      return "No license needed";
    default:
      return "";
  }*/
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "MIT") {
    return "MIT Link https://opensource.org/licenses/MIT ";
  } else if (license !== "Apache") {
    return "Apache Link https://www.apache.org/licenses/LICENSE-2.0 ";
  } else if (license !== "Mozilla-Public") {
    return "Mozilla-Public Link https://www.mozilla.org/en-US/MPL/2.0/ ";
  } else license !== "None";
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "MIT") {
    return "About Mit";
  } else if (license !== "Apache") {
    return "About Apache";
  } else if (license !== "Mozilla-Public") {
    return "About Mozilla-Public";
  } else license !== "None";
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
  ${data.description}
  
  ## Usage 
  ${data.usage}
  
  ## Testing 
  ${data.tests}
  
  ## Contributers 
  ${data.contributers}
  
  ## URL 
  ${data.url}
 
  ## Picture 
  ${data.picture}
 
  ##License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
