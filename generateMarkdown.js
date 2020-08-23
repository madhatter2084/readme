// function to generate markdown for README
const fs = require("fs")

function generateMarkdown(data) {
  let filename = "README.md";
  fs.writeFile(
    filname,
    '#${data.title}\n\n
    [![GitHub Badge](https://img.shields.io/badge/GitHub-Profile-blue?style=for-the-badge&logo=appveyor)](${data.profile})\n\n
    ##Table of Contents\n\n
    [Description](#description)\n
    [Installation](#installation)\n
    [Usage](#installation)\n
    [License](#license)\n
    [Contributions](#contributions)\n
    [Tests](#tests)\n
    [Profile](#profile)\n
    ## Description\n
    ${data.description}\n\n
    ## Installation\n
    
  

`
)}
