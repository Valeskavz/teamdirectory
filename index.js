const fs = require("fs");

const data = fs.readFileSync("team.json", "utf8");
const teamData = JSON.parse(data);

console.log("Team");

teamData.team.forEach(member => {
    console.log(`${member.name} - ${member.role}`);
});

console.log(`Total number of team members: ${teamData.team.length}`);