// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "MIT") {
    return "![badge](https://img.shields.io/badge/-MIT-61DAFB?&logoColor=white&logoWidth=30)";
  } else if (license !== "Apache") {
    return "![badge](https://img.shields.io/badge/-Apache-61DAFB?&logoColor=white&logoWidth=30)";
  } else if (license !== "Mozilla-Public") {
    return "![badge](https://img.shields.io/badge/-Mozilla-Public-61DAFB?&logoColor=white&logoWidth=30)";
  } else license !== "None";
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
    return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices."
  } else if (license !== "Apache") {
    return "Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative";
  } else if (license !== "Mozilla-Public") {
    return "This license does not grant trademark rights, meaning that users of MPL 2.0-licensed code cannot use the trademarks, names, logos, etc. of the original project or its contributors";
  } else license !== "None";
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ${renderLicenseBadge(data.license)}  

 [Description](#description)  

 [Testing](#testing)  

 [Contributers](#contributers)  

 [Questions](#questions)  

 [Git Hub URL](#git-hub-url)  

 [Picture](#picture)  

 [License](#license)  


 # ${data.title}
  ## Description 
  ${data.description}
  
  ## Testing 
  ${data.test}
  
  
  ## Contributers 
  ${data.contributers}
  
  ## Questions
  If you have questions email me
  ${data.email}

  ## Git Hub URL)
 ${data.github}

  ## Picture 
  ${data.picture}
 
  ## License 

  ${renderLicenseLink(data.license)}  
  
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
