const axios = require("axios");
const fs = require('fs');
const githubID = "70551889";

axios.get('https://api.github.com/user/'+githubID).then(({ data }) => {
    fs.writeFileSync(`${__dirname}/../src/assets/json/profile.json`, JSON.stringify(data));
}).catch((e) => {
    console.error('Failed to fetch github profile data', e)
});

axios.get('https://api.github.com/user/'+githubID+'/repos').then(({ data }) => {
    fs.writeFileSync(`${__dirname}/../src/assets/json/repos.json`, JSON.stringify(data));
}).catch((e) => {
    console.error('Failed to fetch github profile data', e)
});