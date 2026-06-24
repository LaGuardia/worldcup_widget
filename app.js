/**
 * ==========================================================================
 * FIFA 2026 World Cup Widget - Core Application Logic
 * ==========================================================================
 */

// 1. Core Match Data Definition
const MATCHES_DATA = [
  {
    id: 1,
    group: "Group K",
    teamA: { name: "Portugal", code: "pt", flag: "pt", ranking: 8 },
    teamB: { name: "Uzbekistan", code: "uz", flag: "uz", ranking: 64 },
    venue: "Houston Stadium",
    location: "Houston, TX",
    kickoffET: 13, // 1:00 PM ET = 13:00
    kickoffPST: 10, // 10:00 AM PST = 10:00
    duration: 95,   // 90 mins play + 5 mins half time & extra time
    lineups: {
      teamA: [
        { num: 99, name: "Diogo Costa", pos: "GK" },
        { num: 2, name: "Diogo Dalot", pos: "DF" },
        { num: 4, name: "Rúben Dias", pos: "DF" },
        { num: 14, name: "Gonçalo Inácio", pos: "DF" },
        { num: 20, name: "João Cancelo", pos: "DF" },
        { num: 6, name: "João Palhinha", pos: "MF" },
        { num: 8, name: "Bruno Fernandes", pos: "MF" },
        { num: 10, name: "Bernardo Silva", pos: "MF" },
        { num: 17, name: "Rafael Leão", pos: "FW" },
        { num: 7, name: "Cristiano Ronaldo", pos: "FW" },
        { num: 11, name: "João Félix", pos: "FW" }
      ],
      teamB: [
        { num: 1, name: "Utkir Yusupov", pos: "GK" },
        { num: 4, name: "Husniddin Aliqulov", pos: "DF" },
        { num: 5, name: "Rustam Ashurmatov", pos: "DF" },
        { num: 15, name: "Umar Eshmurodov", pos: "DF" },
        { num: 3, name: "Khojiakbar Alijonov", pos: "DF" },
        { num: 9, name: "Odiljon Hamrobekov", pos: "MF" },
        { num: 7, name: "Otabek Shukurov", pos: "MF" },
        { num: 10, name: "Jaloliddin Masharipov", pos: "MF" },
        { num: 22, name: "Abbosbek Fayzullaev", pos: "MF" },
        { num: 11, name: "Oston Urunov", pos: "FW" },
        { num: 14, name: "Eldor Shomurodov", pos: "FW" }
      ]
    },
    events: [
      { minute: 34, type: "goal", team: "teamA", player: "Cristiano Ronaldo", assist: "Bruno Fernandes", score: [1, 0] },
      { minute: 56, type: "yellow", team: "teamB", player: "O. Hamrobekov", detail: "Foul on Bernardo Silva" },
      { minute: 72, type: "goal", team: "teamA", player: "Rafael Leão", assist: "João Cancelo", score: [2, 0] },
      { minute: 85, type: "sub", team: "teamA", player: "Gonçalo Ramos for C. Ronaldo", detail: "Tactical Swap" }
    ],
    stats: {
      possession: [58, 42],
      shots: [14, 5],
      shotsOnTarget: [6, 2],
      fouls: [9, 14],
      corners: [7, 3]
    }
  },
  {
    id: 2,
    group: "Group L",
    teamA: { name: "England", code: "gb-eng", flag: "gb-eng", ranking: 4 },
    teamB: { name: "Ghana", code: "gh", flag: "gh", ranking: 59 },
    venue: "Boston Stadium",
    location: "Boston, MA",
    kickoffET: 16, // 4:00 PM ET = 16:00
    kickoffPST: 13, // 1:00 PM PST = 13:00
    duration: 95,
    lineups: {
      teamA: [
        { num: 1, name: "Jordan Pickford", pos: "GK" },
        { num: 2, name: "Kyle Walker", pos: "DF" },
        { num: 5, name: "John Stones", pos: "DF" },
        { num: 6, name: "Marc Guéhi", pos: "DF" },
        { num: 12, name: "Kieran Trippier", pos: "DF" },
        { num: 4, name: "Declan Rice", pos: "MF" },
        { num: 26, name: "Kobbie Mainoo", pos: "MF" },
        { num: 7, name: "Bukayo Saka", pos: "MF" },
        { num: 10, name: "Jude Bellingham", pos: "MF" },
        { num: 11, name: "Phil Foden", pos: "MF" },
        { num: 9, name: "Harry Kane", pos: "FW" }
      ],
      teamB: [
        { num: 1, name: "Lawrence Ati-Zigi", pos: "GK" },
        { num: 2, name: "Alidu Seidu", pos: "DF" },
        { num: 23, name: "Alexander Djiku", pos: "DF" },
        { num: 15, name: "Mohammed Salisu", pos: "DF" },
        { num: 14, name: "Gideon Mensah", pos: "DF" },
        { num: 21, name: "Salis Abdul Samed", pos: "MF" },
        { num: 5, name: "Thomas Partey", pos: "MF" },
        { num: 20, name: "Mohammed Kudus", pos: "MF" },
        { num: 10, name: "Jordan Ayew", pos: "MF" },
        { num: 19, name: "Iñaki Williams", pos: "FW" },
        { num: 25, name: "Antoine Semenyo", pos: "FW" }
      ]
    },
    events: [
      { minute: 12, type: "goal", team: "teamA", player: "Jude Bellingham", assist: "Bukayo Saka", score: [1, 0] },
      { minute: 28, type: "goal", team: "teamB", player: "Iñaki Williams", assist: "Mohammed Kudus", score: [1, 1] },
      { minute: 44, type: "yellow", team: "teamA", player: "Harry Kane", detail: "Unsporting behavior" },
      { minute: 68, type: "goal", team: "teamA", player: "Bukayo Saka", assist: "Phil Foden", score: [2, 1] },
      { minute: 81, type: "yellow", team: "teamB", player: "Thomas Partey", detail: "Foul on Jude Bellingham" },
      { minute: 88, type: "goal", team: "teamA", player: "Harry Kane (Penalty)", assist: "Won by Bukayo Saka", score: [3, 1] }
    ],
    stats: {
      possession: [62, 38],
      shots: [18, 8],
      shotsOnTarget: [8, 3],
      fouls: [11, 15],
      corners: [9, 4]
    }
  },
  {
    id: 3,
    group: "Group L",
    teamA: { name: "Panama", code: "pa", flag: "pa", ranking: 43 },
    teamB: { name: "Croatia", code: "hr", flag: "hr", ranking: 10 },
    venue: "Toronto Stadium",
    location: "Toronto, ON",
    kickoffET: 19, // 7:00 PM ET = 19:00
    kickoffPST: 16, // 4:00 PM PST = 16:00
    duration: 95,
    lineups: {
      teamA: [
        { num: 22, name: "Orlando Mosquera", pos: "GK" },
        { num: 2, name: "César Blackman", pos: "DF" },
        { num: 3, name: "José Córdoba", pos: "DF" },
        { num: 24, name: "Edgardo Fariña", pos: "DF" },
        { num: 15, name: "Eric Davis", pos: "DF" },
        { num: 8, name: "Adalberto Carrasquilla", pos: "MF" },
        { num: 6, name: "Cristian Martínez", pos: "MF" },
        { num: 10, name: "Édgar Bárcenas", pos: "MF" },
        { num: 17, name: "José Luis Rodríguez", pos: "MF" },
        { num: 11, name: "Ismael Díaz", pos: "FW" },
        { num: 9, name: "José Fajardo", pos: "FW" }
      ],
      teamB: [
        { num: 1, name: "Dominik Livaković", pos: "GK" },
        { num: 2, name: "Josip Stanišić", pos: "DF" },
        { num: 6, name: "Josip Šutalo", pos: "DF" },
        { num: 4, name: "Joško Gvardiol", pos: "DF" },
        { num: 3, name: "Borna Sosa", pos: "DF" },
        { num: 10, name: "Luka Modrić", pos: "MF" },
        { num: 8, name: "Mateo Kovačić", pos: "MF" },
        { num: 15, name: "Mario Pašalić", pos: "MF" },
        { num: 7, name: "Lovro Majer", pos: "MF" },
        { num: 9, name: "Andrej Kramarić", pos: "FW" },
        { num: 14, name: "Ivan Perišić", pos: "FW" }
      ]
    },
    events: [
      { minute: 19, type: "goal", team: "teamB", player: "Andrej Kramarić", assist: "Luka Modrić", score: [0, 1] },
      { minute: 41, type: "goal", team: "teamA", player: "José Fajardo", assist: "A. Carrasquilla", score: [1, 1] },
      { minute: 55, type: "yellow", team: "teamB", player: "Luka Modrić", detail: "Foul on A. Carrasquilla" },
      { minute: 62, type: "goal", team: "teamB", player: "Mateo Kovačić", assist: "Ivan Perišić", score: [1, 2] }
    ],
    stats: {
      possession: [40, 60],
      shots: [7, 13],
      shotsOnTarget: [3, 6],
      fouls: [16, 10],
      corners: [2, 6]
    }
  },
  {
    id: 4,
    group: "Group J",
    teamA: { name: "Colombia", code: "co", flag: "co", ranking: 12 },
    teamB: { name: "DR Congo", code: "cd", flag: "cd", ranking: 61 },
    venue: "Guadalajara Stadium",
    location: "Guadalajara, MX",
    kickoffET: 22, // 10:00 PM ET = 22:00
    kickoffPST: 19, // 7:00 PM PST = 19:00
    duration: 95,
    lineups: {
      teamA: [
        { num: 12, name: "Camilo Vargas", pos: "GK" },
        { num: 21, name: "Daniel Muñoz", pos: "DF" },
        { num: 23, name: "Davinson Sánchez", pos: "DF" },
        { num: 2, name: "Carlos Cuesta", pos: "DF" },
        { num: 17, name: "Johan Mojica", pos: "DF" },
        { num: 6, name: "Richard Ríos", pos: "MF" },
        { num: 16, name: "Jefferson Lerma", pos: "MF" },
        { num: 11, name: "Jhon Arias", pos: "MF" },
        { num: 10, name: "James Rodríguez", pos: "MF" },
        { num: 7, name: "Luis Díaz", pos: "FW" },
        { num: 9, name: "Jhon Córdoba", pos: "FW" }
      ],
      teamB: [
        { num: 1, name: "Dimitry Bertaud", pos: "GK" },
        { num: 2, name: "Gedeon Kalulu", pos: "DF" },
        { num: 22, name: "Chancel Mbemba", pos: "DF" },
        { num: 5, name: "Dylan Batubinsika", pos: "DF" },
        { num: 26, name: "Arthur Masuaku", pos: "DF" },
        { num: 8, name: "Samuel Moutoussamy", pos: "MF" },
        { num: 18, name: "Charles Pickel", pos: "MF" },
        { num: 10, name: "Theo Bongonda", pos: "MF" },
        { num: 14, name: "Gaël Kakuta", pos: "MF" },
        { num: 20, name: "Yoane Wissa", pos: "FW" },
        { num: 19, name: "Simon Banza", pos: "FW" }
      ]
    },
    events: [
      { minute: 25, type: "goal", team: "teamA", player: "Luis Díaz", assist: "James Rodríguez", score: [1, 0] },
      { minute: 39, type: "yellow", team: "teamB", player: "Chancel Mbemba", detail: "Foul on Jhon Córdoba" },
      { minute: 51, type: "goal", team: "teamB", player: "Yoane Wissa", assist: "Gaël Kakuta", score: [1, 1] },
      { minute: 78, type: "goal", team: "teamA", player: "James Rodríguez", assist: "Luis Díaz", score: [2, 1] },
      { minute: 83, type: "yellow", team: "teamA", player: "Luis Díaz", detail: "Time wasting" }
    ],
    stats: {
      possession: [55, 45],
      shots: [12, 9],
      shotsOnTarget: [5, 4],
      fouls: [12, 13],
      corners: [6, 4]
    }
  }
];

// 2. Global State Variables
let currentLayout = "horizontal"; // "horizontal" or "vertical"
let activeTimezone = "PST";        // "PST" or "ET"
let selectedMatchId = null;       // For the Details modal

let apiMatches = [];
let apiTeams = {};
const previousScores = {}; // To detect new goals: { matchId: { scoreA, scoreB } }
const seenGoals = new Set(); // To prevent double overlay triggers for the same goal
let fetchErrorOccurred = false;
let errorMessage = "";

// DOM Element Selections
const widgetContainer = document.getElementById("widget-container");
const matchesGrid = document.getElementById("matches-grid");
const toggleLayoutBtn = document.getElementById("toggle-layout-btn");
const toggleTimezoneBtn = document.getElementById("toggle-timezone-btn");
const widgetDateDisplay = document.getElementById("widget-date-display");

// Modal Elements
const modal = document.getElementById("match-details-modal");
const modalBodyContent = document.getElementById("modal-body-content");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalBackdrop = document.getElementById("modal-backdrop-blur");

const STADIUMS_MAP = {
  "1": { name: "Estadio Azteca", location: "Mexico City, MX" },
  "2": { name: "Estadio Akron", location: "Guadalajara, MX" },
  "3": { name: "Estadio BBVA", location: "Monterrey, MX" },
  "4": { name: "AT&T Stadium", location: "Dallas, TX" },
  "5": { name: "NRG Stadium", location: "Houston, TX" },
  "6": { name: "GEHA Field at Arrowhead Stadium", location: "Kansas City, MO" },
  "7": { name: "Mercedes-Benz Stadium", location: "Atlanta, GA" },
  "8": { name: "Hard Rock Stadium", location: "Miami, FL" },
  "9": { name: "Gillette Stadium", location: "Boston, MA" },
  "10": { name: "Lincoln Financial Field", location: "Philadelphia, PA" },
  "11": { name: "MetLife Stadium", location: "New York/New Jersey" },
  "12": { name: "BMO Field", location: "Toronto, ON" },
  "13": { name: "BC Place", location: "Vancouver, BC" },
  "14": { name: "Lumen Field", location: "Seattle, WA" },
  "15": { name: "Levi's Stadium", location: "San Francisco, CA" },
  "16": { name: "SoFi Stadium", location: "Los Angeles, CA" }
};

// 3. Time Helper Functions
function formatTimeFromMinutes(minutes, tz) {
  let h = Math.floor(minutes / 60) % 24;
  let m = Math.floor(minutes % 60);
  
  if (tz === "ET") {
    h = (h + 3) % 24;
  }
  
  const suffix = h >= 12 ? "PM" : "AM";
  const displayHour = h % 12 === 0 ? 12 : h % 12;
  const displayMin = m < 10 ? `0${m}` : m;
  return `${displayHour}:${displayMin} ${suffix} ${tz}`;
}

function getKickoffMinutes(localDateStr, stadiumId, targetTz) {
  if (!localDateStr) return 0;
  const parts = localDateStr.split(' ');
  if (parts.length < 2) return 0;
  const timeParts = parts[1].split(':');
  const h = parseInt(timeParts[0], 10) || 0;
  const m = parseInt(timeParts[1], 10) || 0;
  
  const localMinutes = h * 60 + m;
  
  let stadiumUtcOffset = -4; // Default to Eastern
  const sid = String(stadiumId);
  if (['13', '14', '15', '16'].includes(sid)) {
    stadiumUtcOffset = -7;
  } else if (['4', '5', '6'].includes(sid)) {
    stadiumUtcOffset = -5;
  } else if (['1', '2', '3'].includes(sid)) {
    stadiumUtcOffset = -6; // Mexico Central (UTC-6)
  } else {
    stadiumUtcOffset = -4; // Eastern
  }
  
  const targetOffset = targetTz === 'PST' ? -7 : -4;
  let targetMinutes = localMinutes - (stadiumUtcOffset * 60) + (targetOffset * 60);
  targetMinutes = (targetMinutes + 1440) % 1440;
  return targetMinutes;
}

// 4. API Fetching and Data Processing
async function fetchWorldCupData() {
  try {
    fetchErrorOccurred = false;
    errorMessage = "";
    
    // Fetch teams first if they aren't loaded yet
    if (Object.keys(apiTeams).length === 0) {
      const teamsRes = await fetch("https://worldcup26.ir/get/teams");
      if (!teamsRes.ok) throw new Error("Failed to fetch teams metadata");
      const teamsData = await teamsRes.json();
      if (teamsData && teamsData.teams) {
        teamsData.teams.forEach(t => {
          apiTeams[t.id] = t;
        });
      }
    }
    
    // Fetch games
    const gamesRes = await fetch("https://worldcup26.ir/get/games");
    if (!gamesRes.ok) throw new Error("Failed to retrieve live scores");
    const gamesData = await gamesRes.json();
    if (gamesData && gamesData.games) {
      apiMatches = gamesData.games;
    }
    
    // Process score changes and trigger overlays
    detectNewGoals();
    
  } catch (error) {
    console.error("API Fetch Error:", error);
    fetchErrorOccurred = true;
    errorMessage = error.message || "Failed to load live match center data. Please check your network connection.";
  }
}

function getTodayDateString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();
  return `${month}/${day}/${year}`;
}

function getTodaysMatches() {
  const todayStr = getTodayDateString();
  return apiMatches.filter(m => m.local_date && m.local_date.startsWith(todayStr));
}

function getApiMatchState(match) {
  if (match.finished === "TRUE" || match.time_elapsed === "finished" || match.time_elapsed === "Finished") {
    return "FINISHED";
  }
  if (match.time_elapsed === "live" || match.time_elapsed === "HT" || (match.time_elapsed && match.time_elapsed.includes("'"))) {
    return "LIVE";
  }
  return "UPCOMING";
}

function parseScorers(scorersStr) {
  if (!scorersStr || scorersStr === 'null' || scorersStr === 'undefined') return [];
  try {
    let normalized = scorersStr.replace(/“/g, '"').replace(/”/g, '"');
    if (normalized.startsWith('{')) {
      normalized = '[' + normalized.slice(1, -1) + ']';
    }
    if (normalized.startsWith('[')) {
      return JSON.parse(normalized);
    }
    // Check if it's a comma-separated list
    return normalized.split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
  } catch (e) {
    console.error('Error parsing scorers:', e);
    return scorersStr.replace(/[{}]/g, '').split(',').map(s => s.trim().replace(/^["'“]|["'”]$/g, ''));
  }
}

function detectNewGoals() {
  apiMatches.forEach(match => {
    const state = getApiMatchState(match);
    if (state !== "LIVE") return;
    
    const id = match.id;
    const scoreA = parseInt(match.home_score, 10) || 0;
    const scoreB = parseInt(match.away_score, 10) || 0;
    
    const prev = previousScores[id];
    if (prev) {
      const diffA = scoreA - prev.scoreA;
      const diffB = scoreB - prev.scoreB;
      
      if (diffA > 0 || diffB > 0) {
        // Goal scored!
        const homeName = match.home_team_name_en;
        const awayName = match.away_team_name_en;
        
        let scorerName = "Goal!";
        let scorerMinute = "Live";
        
        const scorersArrayA = parseScorers(match.home_scorers);
        const scorersArrayB = parseScorers(match.away_scorers);
        
        if (diffA > 0 && scorersArrayA.length > 0) {
          const lastScorer = scorersArrayA[scorersArrayA.length - 1];
          const parsed = /(.+?)\s+(\d+)'/.exec(lastScorer);
          if (parsed) {
            scorerName = parsed[1];
            scorerMinute = parsed[2];
          } else {
            scorerName = lastScorer;
          }
        } else if (diffB > 0 && scorersArrayB.length > 0) {
          const lastScorer = scorersArrayB[scorersArrayB.length - 1];
          const parsed = /(.+?)\s+(\d+)'/.exec(lastScorer);
          if (parsed) {
            scorerName = parsed[1];
            scorerMinute = parsed[2];
          } else {
            scorerName = lastScorer;
          }
        }
        
        const goalEvent = {
          player: scorerName,
          minute: scorerMinute,
          team: diffA > 0 ? "teamA" : "teamB",
          score: [scoreA, scoreB]
        };
        
        const mappedMatch = {
          id: match.id,
          teamA: { name: homeName },
          teamB: { name: awayName }
        };
        
        triggerGoalOverlay(mappedMatch, goalEvent);
      }
    }
    
    previousScores[id] = { scoreA, scoreB };
  });
}

function getMatchDetails(apiMatch) {
  const localMatch = MATCHES_DATA.find(lm => 
    (lm.teamA.name.toLowerCase() === apiMatch.home_team_name_en.toLowerCase() &&
     lm.teamB.name.toLowerCase() === apiMatch.away_team_name_en.toLowerCase()) ||
    (lm.teamA.name.toLowerCase() === apiMatch.away_team_name_en.toLowerCase() &&
     lm.teamB.name.toLowerCase() === apiMatch.home_team_name_en.toLowerCase())
  );
  
  const state = getApiMatchState(apiMatch);
  const scoreA = parseInt(apiMatch.home_score, 10) || 0;
  const scoreB = parseInt(apiMatch.away_score, 10) || 0;
  
  const homeTeam = apiTeams[apiMatch.home_team_id] || { name_en: apiMatch.home_team_name_en, flag: "" };
  const awayTeam = apiTeams[apiMatch.away_team_id] || { name_en: apiMatch.away_team_name_en, flag: "" };
  const stadium = STADIUMS_MAP[apiMatch.stadium_id] || { name: "World Cup Stadium", location: "North America" };
  
  const details = {
    id: apiMatch.id,
    group: `Group ${apiMatch.group}`,
    venue: stadium.name,
    location: stadium.location,
    teamA: {
      name: apiMatch.home_team_name_en,
      flagUrl: homeTeam.flag || `https://flagcdn.com/w80/${(homeTeam.iso2 || "").toLowerCase()}.png`
    },
    teamB: {
      name: apiMatch.away_team_name_en,
      flagUrl: awayTeam.flag || `https://flagcdn.com/w80/${(awayTeam.iso2 || "").toLowerCase()}.png`
    },
    scoreA,
    scoreB,
    state,
    timeDisplay: state === "LIVE" ? (apiMatch.time_elapsed === "live" ? "Live" : apiMatch.time_elapsed) : (state === "FINISHED" ? "FT" : "Upcoming")
  };

  // Build events list
  const parsedEvents = [];
  const scorersA = parseScorers(apiMatch.home_scorers);
  const scorersB = parseScorers(apiMatch.away_scorers);
  
  let currentScoreA = 0;
  let currentScoreB = 0;
  
  const allScoreEvents = [];
  scorersA.forEach(s => {
    const match = /(.+?)\s+(\d+)'/.exec(s);
    if (match) {
      allScoreEvents.push({ minute: parseInt(match[2], 10), team: "teamA", player: match[1] });
    } else {
      allScoreEvents.push({ minute: 45, team: "teamA", player: s });
    }
  });
  scorersB.forEach(s => {
    const match = /(.+?)\s+(\d+)'/.exec(s);
    if (match) {
      allScoreEvents.push({ minute: parseInt(match[2], 10), team: "teamB", player: match[1] });
    } else {
      allScoreEvents.push({ minute: 45, team: "teamB", player: s });
    }
  });
  
  allScoreEvents.sort((a, b) => a.minute - b.minute);
  allScoreEvents.forEach(e => {
    if (e.team === "teamA") currentScoreA++;
    else currentScoreB++;
    parsedEvents.push({
      minute: e.minute,
      type: "goal",
      team: e.team,
      player: e.player,
      assist: "None",
      score: [currentScoreA, currentScoreB]
    });
  });

  if (localMatch) {
    details.lineups = localMatch.lineups;
    details.stats = localMatch.stats;
    const localEventsNonGoals = localMatch.events.filter(e => e.type !== "goal");
    details.events = [...parsedEvents, ...localEventsNonGoals].sort((a, b) => a.minute - b.minute);
  } else {
    details.lineups = generateMockLineups(details.teamA.name, details.teamB.name);
    details.stats = generateMockStats(state, scoreA, scoreB);
    details.events = parsedEvents;
  }
  
  return details;
}

function generateMockLineups(teamAName, teamBName) {
  const positions = ["GK", "DF", "DF", "DF", "DF", "MF", "MF", "MF", "FW", "FW", "FW"];
  const getPlayers = (teamName) => {
    return positions.map((pos, idx) => ({
      num: idx + 1,
      name: `${teamName.substring(0, 3).toUpperCase()} Player ${idx + 1}`,
      pos
    }));
  };
  return {
    teamA: getPlayers(teamAName),
    teamB: getPlayers(teamBName)
  };
}

function generateMockStats(state, scoreA, scoreB) {
  if (state === "UPCOMING") {
    return {
      possession: [50, 50],
      shots: [0, 0],
      shotsOnTarget: [0, 0],
      fouls: [0, 0],
      corners: [0, 0]
    };
  }
  const possessionA = 40 + Math.floor(Math.random() * 21);
  const possessionB = 100 - possessionA;
  const shotsA = scoreA * 3 + Math.floor(Math.random() * 5) + 3;
  const shotsB = scoreB * 3 + Math.floor(Math.random() * 5) + 3;
  const targetA = scoreA + Math.floor(Math.random() * 3) + 1;
  const targetB = scoreB + Math.floor(Math.random() * 3) + 1;
  const foulsA = 8 + Math.floor(Math.random() * 8);
  const foulsB = 8 + Math.floor(Math.random() * 8);
  const cornersA = 2 + Math.floor(Math.random() * 6);
  const cornersB = 2 + Math.floor(Math.random() * 6);
  
  return {
    possession: [possessionA, possessionB],
    shots: [shotsA, shotsB],
    shotsOnTarget: [targetA, targetB],
    fouls: [foulsA, foulsB],
    corners: [cornersA, cornersB]
  };
}

// 5. Render Interface
function renderWidget() {
  matchesGrid.innerHTML = "";
  
  if (fetchErrorOccurred) {
    matchesGrid.innerHTML = `
      <div class="error-state" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; text-align: center; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.3); color: var(--text-light);">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--accent-red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px; filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.5));">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; font-weight: 600; margin-bottom: 8px;">404 Error: Failed to Retrieve Live Scores</h3>
        <p style="font-size: 0.9rem; color: var(--text-dark); max-width: 400px; margin-bottom: 20px;">
          ${errorMessage}
        </p>
        <button id="retry-btn" class="icon-btn" style="padding: 8px 20px; font-size: 0.9rem; border-radius: 8px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 8px; background: var(--accent-blue); color: var(--bg-dark); border: none;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
          </svg>
          Retry Connection
        </button>
      </div>
    `;
    
    const retryBtn = document.getElementById("retry-btn");
    if (retryBtn) {
      retryBtn.addEventListener("click", async () => {
        matchesGrid.innerHTML = `
          <div class="loading-state" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; color: var(--text-light);">
            <div class="spinner" style="width: 40px; height: 40px; border: 4px solid rgba(255,255,255,0.1); border-top-color: var(--accent-blue); border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 16px;"></div>
            <p>Retrying connection to live match center...</p>
          </div>
        `;
        await fetchWorldCupData();
        renderWidget();
      });
    }
    return;
  }
  
  const todaysMatches = getTodaysMatches();
  
  if (todaysMatches.length === 0) {
    matchesGrid.innerHTML = `
      <div class="no-matches-state" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; text-align: center; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); color: var(--text-light);">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--text-dark)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px;">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; font-weight: 600; margin-bottom: 8px;">No Matches Today</h3>
        <p style="font-size: 0.9rem; color: var(--text-dark); max-width: 400px;">
          There are no World Cup matches scheduled for today (${getTodayDateString()}).
        </p>
      </div>
    `;
    return;
  }
  
  todaysMatches.forEach(apiMatch => {
    const match = getMatchDetails(apiMatch);
    const { state, scoreA, scoreB, timeDisplay, teamA, teamB, venue } = match;
    
    const card = document.createElement("article");
    card.className = `match-card state-${state.toLowerCase()}`;
    card.id = `match-card-${match.id}`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${teamA.name} versus ${teamB.name}, Status: ${state}`);
    
    const targetMinutes = getKickoffMinutes(apiMatch.local_date, apiMatch.stadium_id, activeTimezone);
    const kickoffTimeStr = formatTimeFromMinutes(targetMinutes, activeTimezone);
    
    let statusPillContent = "";
    if (state === "UPCOMING") {
      statusPillContent = `
        <span class="status-pill status-upcoming">Upcoming</span>
        <span class="countdown-timer">${kickoffTimeStr.replace(` ${activeTimezone}`, "")}</span>
      `;
    } else if (state === "LIVE") {
      statusPillContent = `
        <span class="status-pill status-live">
          <span class="live-dot"></span>
          Live
        </span>
        <span class="countdown-timer" style="color: var(--accent-red);">${timeDisplay}</span>
      `;
    } else {
      statusPillContent = `
        <span class="status-pill status-finished">FT</span>
        <span class="countdown-timer" style="color: var(--text-dark);">Finished</span>
      `;
    }
    
    card.innerHTML = `
      <div class="card-header">
        <span class="group-badge">${match.group}</span>
        <div style="display: flex; align-items: center; gap: 8px;">
          ${statusPillContent}
        </div>
      </div>
      
      <div class="card-teams">
        <div class="team-row">
          <div class="team-info">
            <div class="flag-container">
              <img class="flag-img" src="${teamA.flagUrl}" onerror="this.src='https://flagcdn.com/w80/un.png';" alt="${teamA.name} Flag" loading="lazy" />
            </div>
            <span class="team-name">${teamA.name}</span>
          </div>
          <span class="team-score ${state !== "UPCOMING" ? "active-score" : ""}" id="score-a-${match.id}">${state !== "UPCOMING" ? scoreA : "-"}</span>
        </div>
        
        <div class="team-row">
          <div class="team-info">
            <div class="flag-container">
              <img class="flag-img" src="${teamB.flagUrl}" onerror="this.src='https://flagcdn.com/w80/un.png';" alt="${teamB.name} Flag" loading="lazy" />
            </div>
            <span class="team-name">${teamB.name}</span>
          </div>
          <span class="team-score ${state !== "UPCOMING" ? "active-score" : ""}" id="score-b-${match.id}">${state !== "UPCOMING" ? scoreB : "-"}</span>
        </div>
      </div>
      
      <div class="card-footer">
        <div class="match-venue" title="${venue}, ${match.location}">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          ${venue}
        </div>
        <div class="match-time">${kickoffTimeStr.replace(` ${activeTimezone}`, "")} <span style="font-size: 0.65rem; color: var(--text-dark);">${activeTimezone}</span></div>
      </div>
    `;
    
    card.addEventListener("click", () => {
      openMatchDetails(match.id);
    });
    
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMatchDetails(match.id);
      }
    });

    matchesGrid.appendChild(card);
  });
}

// Flash banner and trigger confetti animations on goal
function triggerGoalOverlay(match, event) {
  goalTeamInfo.textContent = `${match.teamA.name.toUpperCase()} ${event.score[0]} - ${event.score[1]} ${match.teamB.name.toUpperCase()}`;
  goalScorer.textContent = `${event.player} (${event.minute}')`;
  
  const teamScored = event.team === "teamA" ? "a" : "b";
  const scoreElem = document.getElementById(`score-${teamScored}-${match.id}`);
  if (scoreElem) {
    scoreElem.classList.add("score-flash");
    setTimeout(() => scoreElem.classList.remove("score-flash"), 3000);
  }

  widgetContainer.classList.add("shake");
  setTimeout(() => widgetContainer.classList.remove("shake"), 800);
  
  goalOverlay.classList.remove("hidden");
  goalOverlay.setAttribute("aria-hidden", "false");
  
  spawnConfetti();
  
  setTimeout(() => {
    goalOverlay.classList.add("hidden");
    goalOverlay.setAttribute("aria-hidden", "true");
  }, 3500);
}

// Lightweight HTML Confetti Generator (CSS-only animations)
function spawnConfetti() {
  const container = goalOverlay;
  const colors = ["#00f2fe", "#9d4edd", "#10b981", "#facc15", "#ef4444", "#ffffff"];
  
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 8 + 6;
    const left = Math.random() * 100;
    const animDelay = Math.random() * 0.5;
    const animDuration = Math.random() * 2 + 1.5;
    const rotation = Math.random() * 360;
    
    piece.style.cssText = `
      position: absolute;
      top: -10px;
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      background-color: ${color};
      border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
      transform: rotate(${rotation}deg);
      opacity: ${Math.random() * 0.6 + 0.4};
      z-index: 210;
      pointer-events: none;
      animation: fall-confetti ${animDuration}s linear ${animDelay}s forwards;
    `;
    
    container.appendChild(piece);
    
    setTimeout(() => {
      piece.remove();
    }, (animDuration + animDelay) * 1000);
  }
}

// Fall animation CSS injected dynamically
const styleEl = document.createElement("style");
styleEl.innerHTML = `
  @keyframes fall-confetti {
    0% {
      top: -10px;
      transform: translateY(0) rotate(0deg) translateX(0);
    }
    100% {
      top: 100vh;
      transform: translateY(100vh) rotate(720deg) translateX(${Math.random() * 100 - 50}px);
    }
  }
`;
document.head.appendChild(styleEl);

// 6. Match Details Modal Handling
function openMatchDetails(matchId) {
  selectedMatchId = matchId;
  updateModalContent();
  modal.showModal();
}

function updateModalContent() {
  if (!selectedMatchId) return;
  
  const apiMatch = apiMatches.find(m => m.id === selectedMatchId);
  if (!apiMatch) return;
  
  const match = getMatchDetails(apiMatch);
  const { state, scoreA, scoreB, timeDisplay, teamA, teamB, venue } = match;
  
  let activeTab = document.querySelector(".modal-tab-btn.active")?.dataset.tab || "stats";
  
  modalBodyContent.innerHTML = `
    <!-- Header info -->
    <div class="modal-header-section">
      <div class="modal-group-info">${match.group} • ${venue}</div>
      <div class="modal-scoreboard">
        <div class="modal-team">
          <div class="modal-flag">
            <img class="flag-img" src="${teamA.flagUrl}" onerror="this.src='https://flagcdn.com/w80/un.png';" alt="${teamA.name}" />
          </div>
          <div class="modal-team-name">${teamA.name}</div>
        </div>
        
        <div class="modal-scores">
          <div class="modal-score-digit ${state !== "UPCOMING" ? "live-glow" : ""}">${state !== "UPCOMING" ? scoreA : "-"}</div>
          <div class="modal-score-separator">:</div>
          <div class="modal-score-digit ${state !== "UPCOMING" ? "live-glow" : ""}">${state !== "UPCOMING" ? scoreB : "-"}</div>
        </div>
        
        <div class="modal-team">
          <div class="modal-flag">
            <img class="flag-img" src="${teamB.flagUrl}" onerror="this.src='https://flagcdn.com/w80/un.png';" alt="${teamB.name}" />
          </div>
          <div class="modal-team-name">${teamB.name}</div>
        </div>
      </div>
      
      <div class="modal-status-text state-${state.toLowerCase()}">
        ${state === "LIVE" ? '<span class="live-dot"></span>' : ''}
        ${state === "UPCOMING" ? `Upcoming • Kickoff at ${formatTimeFromMinutes(getKickoffMinutes(apiMatch.local_date, apiMatch.stadium_id, activeTimezone), activeTimezone)}` : ""}
        ${state === "LIVE" ? `LIVE • ${timeDisplay}` : ""}
        ${state === "FINISHED" ? "Full Time" : ""}
      </div>
      
      <div class="modal-venue-info">${match.location}</div>
    </div>
    
    <!-- Navigation Tabs -->
    <div class="modal-tabs" role="tablist">
      <button class="modal-tab-btn ${activeTab === "stats" ? "active" : ""}" data-tab="stats" role="tab" aria-selected="${activeTab === "stats"}">Match Stats</button>
      <button class="modal-tab-btn ${activeTab === "lineups" ? "active" : ""}" data-tab="lineups" role="tab" aria-selected="${activeTab === "lineups"}">Lineups</button>
      <button class="modal-tab-btn ${activeTab === "events" ? "active" : ""}" data-tab="events" role="tab" aria-selected="${activeTab === "events"}">Match Timeline</button>
    </div>
    
    <!-- Tab contents -->
    <!-- Tab 1: Stats -->
    <div class="tab-content ${activeTab === "stats" ? "active" : ""}" id="tab-stats">
      <div class="stats-container">
        ${renderStatRow("Possession", state !== "UPCOMING" ? match.stats.possession[0] : 50, state !== "UPCOMING" ? match.stats.possession[1] : 50, "%")}
        ${renderStatRow("Shots (Total)", match.stats.shots[0], match.stats.shots[1])}
        ${renderStatRow("Shots on Target", match.stats.shotsOnTarget[0], match.stats.shotsOnTarget[1])}
        ${renderStatRow("Fouls Committed", match.stats.fouls[0], match.stats.fouls[1])}
        ${renderStatRow("Corner Kicks", match.stats.corners[0], match.stats.corners[1])}
      </div>
    </div>
    
    <!-- Tab 2: Lineups -->
    <div class="tab-content ${activeTab === "lineups" ? "active" : ""}" id="tab-lineups">
      <div class="lineups-container">
        <div class="lineup-team">
          <div class="lineup-team-title">${teamA.name}</div>
          <ul class="players-list">
            ${match.lineups.teamA.map(p => `
              <li class="player-item">
                <span class="player-number">${p.num}</span>
                <span class="player-name">${p.name}</span>
                <span class="player-pos">${p.pos}</span>
              </li>
            `).join("")}
          </ul>
        </div>
        
        <div class="lineup-team">
          <div class="lineup-team-title team-b">${teamB.name}</div>
          <ul class="players-list">
            ${match.lineups.teamB.map(p => `
              <li class="player-item">
                <span class="player-number">${p.num}</span>
                <span class="player-name">${p.name}</span>
                <span class="player-pos">${p.pos}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Tab 3: Events -->
    <div class="tab-content ${activeTab === "events" ? "active" : ""}" id="tab-events">
      <div class="events-timeline">
        ${state === "UPCOMING" ? `
          <div class="no-events">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <p>Pre-match lineups and statistics are locked in. The timeline updates as the match starts.</p>
          </div>
        ` : match.events.length === 0 ? `
          <div class="no-events">
            <p>Kickoff! The match is underway with no significant events yet.</p>
          </div>
        ` : match.events.map(evt => `
          <div class="timeline-item ${getEventClass(evt.type)}">
            <div class="event-minute">${evt.minute}'</div>
            <div class="event-icon-circle">
              ${getEventIcon(evt.type)}
            </div>
            <div class="event-details">
              <div class="event-title">
                ${evt.player} ${evt.type === 'goal' ? `(${evt.score[0]} - ${evt.score[1]})` : ''}
              </div>
              <div class="event-subtitle">
                ${evt.type === 'goal' ? `Assist: ${evt.assist}` : evt.detail}
              </div>
            </div>
          </div>
        `).reverse().join("")}
      </div>
    </div>
  `;
  
  const tabs = modalBodyContent.querySelectorAll(".modal-tab-btn");
  tabs.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const selectedTab = e.target.dataset.tab;
      
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      e.target.classList.add("active");
      e.target.setAttribute("aria-selected", "true");
      
      modalBodyContent.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      modalBodyContent.querySelector(`#tab-${selectedTab}`).classList.add("active");
    });
  });
}

function renderStatRow(name, valA, valB, suffix = "") {
  const total = valA + valB;
  const pctA = total === 0 ? 50 : Math.round((valA / total) * 100);
  const pctB = 100 - pctA;
  
  return `
    <div class="stat-row">
      <div class="stat-label-group">
        <span class="stat-val-left">${valA}${suffix}</span>
        <span class="stat-name">${name}</span>
        <span class="stat-val-right">${valB}${suffix}</span>
      </div>
      <div class="stat-bar-container">
        <div class="stat-bar-left" style="width: ${pctA}%"></div>
        <div class="stat-bar-right" style="width: ${pctB}%"></div>
      </div>
    </div>
  `;
}

function getEventClass(type) {
  if (type === "goal") return "goal-event";
  if (type === "yellow") return "card-yellow-event";
  if (type === "red") return "card-red-event";
  return "sub-event";
}

function getEventIcon(type) {
  if (type === "goal") {
    return `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93h2c0 2.76 2.24 5 5 5v2.93zm0-4.93c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-8c-2.76 0-5 2.24-5 5H4c0-4.08 3.05-7.44 7-7.93V7z"/>
            </svg>`;
  }
  if (type === "yellow") {
    return `<div style="width: 10px; height: 14px; background-color: var(--accent-yellow); border-radius: 2px; box-shadow: 0 0 5px rgba(250, 204, 21, 0.5);"></div>`;
  }
  if (type === "red") {
    return `<div style="width: 10px; height: 14px; background-color: var(--accent-red); border-radius: 2px; box-shadow: 0 0 5px rgba(239, 68, 68, 0.5);"></div>`;
  }
  return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 3 21 3 21 8"/>
            <line x1="4" y1="20" x2="21" y2="3"/>
            <polyline points="8 21 3 21 3 16"/>
          </svg>`;
}

// 7. Widget Update and Binding Engine
function updateWidget() {
  renderWidget();
  
  if (modal.open) {
    updateModalContent();
  }
}

// 8. Event Subscriptions & Actions Binding
function initEvents() {
  toggleLayoutBtn.addEventListener("click", () => {
    if (currentLayout === "horizontal") {
      currentLayout = "vertical";
      widgetContainer.className = "widget-container layout-vertical";
      toggleLayoutBtn.classList.add("active");
    } else {
      currentLayout = "horizontal";
      widgetContainer.className = "widget-container layout-horizontal";
      toggleLayoutBtn.classList.remove("active");
    }
    
    if (window.electronAPI) {
      window.electronAPI.toggleLayout(currentLayout);
    }
  });

  toggleTimezoneBtn.addEventListener("click", () => {
    if (activeTimezone === "PST") {
      activeTimezone = "ET";
      toggleTimezoneBtn.innerHTML = '<span class="inactive-tz">PST</span><span class="tz-slash">/</span><span class="active-tz">ET</span>';
    } else {
      activeTimezone = "PST";
      toggleTimezoneBtn.innerHTML = '<span class="active-tz">PST</span><span class="tz-slash">/</span><span class="inactive-tz">ET</span>';
    }
    updateWidget();
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.close();
    selectedMatchId = null;
  });

  modalBackdrop.addEventListener("click", () => {
    modal.close();
    selectedMatchId = null;
  });
  
  modal.addEventListener("cancel", () => {
    selectedMatchId = null;
  });
}

function updateWidgetDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  widgetDateDisplay.textContent = now.toLocaleDateString('en-US', options);
}

// 9. Bootstrap App
async function initApp() {
  initEvents();
  updateWidgetDate();
  
  // Show initial loading state in UI
  matchesGrid.innerHTML = `
    <div class="loading-state" style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; color: var(--text-light);">
      <div class="spinner" style="width: 40px; height: 40px; border: 4px solid rgba(255,255,255,0.1); border-top-color: var(--accent-blue); border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 16px;"></div>
      <p>Connecting to live World Cup match center...</p>
    </div>
  `;
  
  await fetchWorldCupData();
  updateWidget();
  
  // Update state every 30 seconds
  setInterval(async () => {
    await fetchWorldCupData();
    updateWidget();
  }, 30000);
}

document.addEventListener("DOMContentLoaded", initApp);
