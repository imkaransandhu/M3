const express = require("express");
const server = express();
server.use(express.json());
const env = require("dotenv");
env.config();

const PORT = process.env.PORT || "3002";

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});

const teams = [
  { name: "Netherlands", group: "A" },
  { name: "Ecuador", group: "A" },
  { name: "Senegal", group: "B" },
  { name: "Qatar", group: "B" },
];

server.get("/fifa", (req, res) => {
  res.send("Welcome to the FIFA Api");
});

server.get("/fifa/teams", (req, res) => {
  res.send(teams);
});

server.post("/fifa/teams", (req, res) => {
  const teamName = req.body.name;
  const teamGroup = req.body.group;
  teams.push({ name: teamName, group: teamGroup });
  res.send("Team added Successfully!");
});

server.get("/fifa/teams/group/:groupname", (req, res) => {
  const groupName = req.params.groupname;
  const groupTeam = teams.filter((team) => team.group === groupName);
  res.send(groupTeam);
});
