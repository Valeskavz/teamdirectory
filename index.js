console.log("Team");

const fs = require("fs");

const data = fs.readFileSync("team.json", "utf8");
const teamData = JSON.parse(data);
console.log(teamData);