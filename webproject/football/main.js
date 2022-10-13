"use strict"


let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
   ];




   window.onload = function() {
    loadTeamsDropdown();
};

function loadTeamsDropdown() {
    let teamsList = document.getElementById("teamsList");
    teams.sort(function(a, b) {  
        if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
       });
    
    for ( const team of teams ) {
        let option = new Option(team.name, team.code);
    teamsList.appendChild(option);
    }}

    function displayTeams(event) {
        event.preventDefault
        const teamsList = document.getElementById("teamsList");
        const teamCode = teamsList.value;

        for (let index = 0; index < teams.length; index++) {
            const team = teams[index];
            console.log(team.play);
            console.log(team.code);
            if (team.code == teamCode) {
                console.log(`You have selected ${team.name} from ${team.plays} ${team.code}`);
        }
    }}
    
    function handleChange() {
        console.log(`Changed`);
    }