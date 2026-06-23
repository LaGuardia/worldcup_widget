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

// 3. Time Helper Functions
function formatTimeFromMinutes(minutes, tz) {
  let h = Math.floor(minutes / 60) % 24;
  let m = Math.floor(minutes % 60);
  
  if (tz === "ET") {
    // Add 3 hours for ET conversion
    h = (h + 3) % 24;
  }
  
  const suffix = h >= 12 ? "PM" : "AM";
  const displayHour = h % 12 === 0 ? 12 : h % 12;
  const displayMin = m < 10 ? `0${m}` : m;
  return `${displayHour}:${displayMin} ${suffix} ${tz}`;
}

function convertKickoffToMinutes(kickoffHourPST) {
  return kickoffHourPST * 60;
}

function getPSTTimeMinutes() {
  const now = new Date();
  const pstString = now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  const pstDate = new Date(pstString);
  return pstDate.getHours() * 60 + pstDate.getMinutes();
}

function getCurrentTimeMinutes() {
  return getPSTTimeMinutes();
}

// Check the state of a match based on current real-time clock
function getMatchState(match) {
  const simulationTime = getCurrentTimeMinutes();
  const kickoff = convertKickoffToMinutes(match.kickoffPST);
  const end = kickoff + match.duration;
  
  if (simulationTime < kickoff) {
    return { state: "UPCOMING", kickoffMinutes: kickoff };
  } else if (simulationTime >= kickoff && simulationTime < end) {
    return { state: "LIVE", elapsed: Math.floor(simulationTime - kickoff) };
  } else {
    return { state: "FINISHED" };
  }
}

// Get dynamic match scores & current live minute based on simulation time
function getMatchLiveState(match) {
  const { state, elapsed } = getMatchState(match);
  
  if (state === "UPCOMING") {
    return { scoreA: 0, scoreB: 0, timeDisplay: "Upcoming", details: [] };
  }
  
  let scoreA = 0;
  let scoreB = 0;
  const occurredEvents = [];
  
  // Calculate score by counting goals that occurred at or before the elapsed match minute
  const matchMinute = state === "FINISHED" ? 999 : elapsed; // Use 999 for finished to match all events
  
  // Live matches transition:
  // Minute 0 to 45: First Half
  // Minute 45 to 50: Halftime (5 mins)
  // Minute 50 to 95: Second Half (represents match minutes 46 to 90)
  let displayMinute = "";
  let isHalftime = false;
  
  if (state === "LIVE") {
    if (matchMinute < 45) {
      displayMinute = `${matchMinute + 1}'`;
    } else if (matchMinute >= 45 && matchMinute < 50) {
      displayMinute = "HT";
      isHalftime = true;
    } else {
      // Map sim minute to soccer minute: (elapsed - 5)
      displayMinute = `${Math.min(90, matchMinute - 4)}'`;
    }
  } else {
    displayMinute = "FT";
  }
  
  // Filter events that have happened
  match.events.forEach(evt => {
    // Check if the event minute has passed in match time
    // First Half events (<= 45') happen when elapsed <= 45
    // Second Half events (> 45') happen when elapsed > 45 + halftime_buffer
    let eventSimMinute = evt.minute;
    if (evt.minute > 45) {
      eventSimMinute = evt.minute + 4; // Shifted due to HT buffer
    }
    
    if (matchMinute >= eventSimMinute) {
      occurredEvents.push(evt);
      if (evt.type === "goal") {
        scoreA = evt.score[0];
        scoreB = evt.score[1];
      }
    }
  });
  
  return {
    scoreA,
    scoreB,
    timeDisplay: displayMinute,
    isHalftime,
    eventsOccurred: occurredEvents,
    simMatchMinute: matchMinute
  };
}

// 4. Render Interface
function renderWidget() {
  matchesGrid.innerHTML = "";
  
  MATCHES_DATA.forEach(match => {
    const { state } = getMatchState(match);
    const { scoreA, scoreB, timeDisplay } = getMatchLiveState(match);
    const kickoffMinutes = convertKickoffToMinutes(match.kickoffPST);
    
    // Create card
    const card = document.createElement("article");
    card.className = `match-card state-${state.toLowerCase()}`;
    card.id = `match-card-${match.id}`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${match.teamA.name} versus ${match.teamB.name}, Status: ${state}`);
    
    // Local Time conversion
    const kickoffTimeStr = formatTimeFromMinutes(kickoffMinutes, activeTimezone);
    
    // Header
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
              <img class="flag-img" src="https://flagcdn.com/w80/${match.teamA.flag}.png" alt="${match.teamA.name} Flag" loading="lazy" />
            </div>
            <span class="team-name">${match.teamA.name}</span>
          </div>
          <span class="team-score ${state !== "UPCOMING" ? "active-score" : ""}" id="score-a-${match.id}">${state !== "UPCOMING" ? scoreA : "-"}</span>
        </div>
        
        <div class="team-row">
          <div class="team-info">
            <div class="flag-container">
              <img class="flag-img" src="https://flagcdn.com/w80/${match.teamB.flag}.png" alt="${match.teamB.name} Flag" loading="lazy" />
            </div>
            <span class="team-name">${match.teamB.name}</span>
          </div>
          <span class="team-score ${state !== "UPCOMING" ? "active-score" : ""}" id="score-b-${match.id}">${state !== "UPCOMING" ? scoreB : "-"}</span>
        </div>
      </div>
      
      <div class="card-footer">
        <div class="match-venue" title="${match.venue}, ${match.location}">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          ${match.venue}
        </div>
        <div class="match-time">${kickoffTimeStr.replace(` ${activeTimezone}`, "")} <span style="font-size: 0.65rem; color: var(--text-dark);">${activeTimezone}</span></div>
      </div>
    `;
    
    // Add Click listener to open modal
    card.addEventListener("click", () => {
      openMatchDetails(match.id);
    });
    
    // Keyboard support
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMatchDetails(match.id);
      }
    });

    matchesGrid.appendChild(card);
  });
}

// 5. Goal alert trigger system
function checkForGoalAlerts(time) {
  MATCHES_DATA.forEach(match => {
    const kickoff = convertKickoffToMinutes(match.kickoffPST);
    const end = kickoff + match.duration;
    
    if (time >= kickoff && time < end) {
      const elapsed = Math.floor(time - kickoff);
      
      match.events.forEach(evt => {
        if (evt.type === "goal") {
          let eventSimMinute = evt.minute;
          if (evt.minute > 45) {
            eventSimMinute = evt.minute + 4; // Shifted HT buffer
          }
          
          const uniqueGoalId = `${match.id}-${evt.minute}-${evt.player}`;
          
          // Trigger alert if the time matches the event minute, and we haven't shown it yet
          if (elapsed === eventSimMinute && !seenGoals.has(uniqueGoalId)) {
            seenGoals.add(uniqueGoalId);
            triggerGoalOverlay(match, evt);
          }
        }
      });
    }
  });
}

// Flash banner and trigger confetti animations on goal
function triggerGoalOverlay(match, event) {
  goalTeamInfo.textContent = `${match.teamA.name.toUpperCase()} ${event.score[0]} - ${event.score[1]} ${match.teamB.name.toUpperCase()}`;
  goalScorer.textContent = `${event.player} (${event.minute}')`;
  
  // Highlight score flash on card if it's rendered
  const teamScored = event.team === "teamA" ? "a" : "b";
  const scoreElem = document.getElementById(`score-${teamScored}-${match.id}`);
  if (scoreElem) {
    scoreElem.classList.add("score-flash");
    setTimeout(() => scoreElem.classList.remove("score-flash"), 3000);
  }

  // Visual feedback: Screen Shake on main container
  widgetContainer.classList.add("shake");
  setTimeout(() => widgetContainer.classList.remove("shake"), 800);
  
  // Show Banner
  goalOverlay.classList.remove("hidden");
  goalOverlay.setAttribute("aria-hidden", "false");
  
  // Confetti effect
  spawnConfetti();
  
  // Auto-dismiss after 3.5 seconds
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
    
    // Random styles
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
    
    // Cleanup piece
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
  
  const match = MATCHES_DATA.find(m => m.id === selectedMatchId);
  if (!match) return;
  
  const { state } = getMatchState(match);
  const { scoreA, scoreB, timeDisplay, eventsOccurred, isHalftime } = getMatchLiveState(match);
  
  // Keep track of active tab in modal (default to stats, or events if live)
  let activeTab = document.querySelector(".modal-tab-btn.active")?.dataset.tab || "stats";
  
  // Render structure
  modalBodyContent.innerHTML = `
    <!-- Header info -->
    <div class="modal-header-section">
      <div class="modal-group-info">${match.group} • ${match.venue}</div>
      <div class="modal-scoreboard">
        <div class="modal-team">
          <div class="modal-flag">
            <img class="flag-img" src="https://flagcdn.com/w160/${match.teamA.flag}.png" alt="${match.teamA.name}" />
          </div>
          <div class="modal-team-name">${match.teamA.name}</div>
        </div>
        
        <div class="modal-scores">
          <div class="modal-score-digit ${state !== "UPCOMING" ? "live-glow" : ""}">${state !== "UPCOMING" ? scoreA : "-"}</div>
          <div class="modal-score-separator">:</div>
          <div class="modal-score-digit ${state !== "UPCOMING" ? "live-glow" : ""}">${state !== "UPCOMING" ? scoreB : "-"}</div>
        </div>
        
        <div class="modal-team">
          <div class="modal-flag">
            <img class="flag-img" src="https://flagcdn.com/w160/${match.teamB.flag}.png" alt="${match.teamB.name}" />
          </div>
          <div class="modal-team-name">${match.teamB.name}</div>
        </div>
      </div>
      
      <div class="modal-status-text state-${state.toLowerCase()}">
        ${state === "LIVE" ? '<span class="live-dot"></span>' : ''}
        ${state === "UPCOMING" ? `Upcoming • Kickoff at ${formatTimeFromMinutes(match.kickoffPST * 60, activeTimezone)}` : ""}
        ${state === "LIVE" ? `LIVE • ${isHalftime ? "Halftime" : timeDisplay}` : ""}
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
        ${renderStatRow("Shots (Total)", state !== "UPCOMING" ? Math.min(match.stats.shots[0], Math.ceil(match.stats.shots[0] * getProgressRatio(match))) : 0, state !== "UPCOMING" ? Math.min(match.stats.shots[1], Math.ceil(match.stats.shots[1] * getProgressRatio(match))) : 0)}
        ${renderStatRow("Shots on Target", state !== "UPCOMING" ? Math.min(match.stats.shotsOnTarget[0], Math.ceil(match.stats.shotsOnTarget[0] * getProgressRatio(match))) : 0, state !== "UPCOMING" ? Math.min(match.stats.shotsOnTarget[1], Math.ceil(match.stats.shotsOnTarget[1] * getProgressRatio(match))) : 0)}
        ${renderStatRow("Fouls Committed", state !== "UPCOMING" ? Math.min(match.stats.fouls[0], Math.ceil(match.stats.fouls[0] * getProgressRatio(match))) : 0, state !== "UPCOMING" ? Math.min(match.stats.fouls[1], Math.ceil(match.stats.fouls[1] * getProgressRatio(match))) : 0)}
        ${renderStatRow("Corner Kicks", state !== "UPCOMING" ? Math.min(match.stats.corners[0], Math.ceil(match.stats.corners[0] * getProgressRatio(match))) : 0, state !== "UPCOMING" ? Math.min(match.stats.corners[1], Math.ceil(match.stats.corners[1] * getProgressRatio(match))) : 0)}
      </div>
    </div>
    
    <!-- Tab 2: Lineups -->
    <div class="tab-content ${activeTab === "lineups" ? "active" : ""}" id="tab-lineups">
      <div class="lineups-container">
        <div class="lineup-team">
          <div class="lineup-team-title">${match.teamA.name}</div>
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
          <div class="lineup-team-title team-b">${match.teamB.name}</div>
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
        ` : eventsOccurred.length === 0 ? `
          <div class="no-events">
            <p>Kickoff! The match is underway with no significant events yet.</p>
          </div>
        ` : eventsOccurred.map(evt => `
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
  
  // Attach Tab listeners inside modal
  const tabs = modalBodyContent.querySelectorAll(".modal-tab-btn");
  tabs.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const selectedTab = e.target.dataset.tab;
      
      // Update buttons active class
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      e.target.classList.add("active");
      e.target.setAttribute("aria-selected", "true");
      
      // Update contents active class
      modalBodyContent.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      modalBodyContent.querySelector(`#tab-${selectedTab}`).classList.add("active");
    });
  });
}

function getProgressRatio(match) {
  const { state, elapsed } = getMatchState(match);
  if (state === "UPCOMING") return 0;
  if (state === "FINISHED") return 1;
  return Math.min(1, elapsed / match.duration);
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
  // Substitution icon
  return `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 3 21 3 21 8"/>
            <line x1="4" y1="20" x2="21" y2="3"/>
            <polyline points="8 21 3 21 3 16"/>
          </svg>`;
}

// 7. Widget Update and Binding Engine
function updateWidget() {
  // Render grid matches updates
  renderWidget();
  
  // Modal details sync if open
  if (modal.open) {
    updateModalContent();
  }
}

// 8. Event Subscriptions & Actions Binding
function initEvents() {
  // Layout switch toggle
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
    
    // Notify Electron to resize window
    if (window.electronAPI) {
      window.electronAPI.toggleLayout(currentLayout);
    }
  });

  // Timezone toggle
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

  // Close modal dialogs
  modalCloseBtn.addEventListener("click", () => {
    modal.close();
    selectedMatchId = null;
  });

  modalBackdrop.addEventListener("click", () => {
    modal.close();
    selectedMatchId = null;
  });
  
  // ESC key accessibility
  modal.addEventListener("cancel", () => {
    selectedMatchId = null;
  });
}

// 9. Bootstrap App
function initApp() {
  initEvents();
  updateWidget();
  
  // Update Widget state every 10 seconds to detect real-time game state updates
  setInterval(updateWidget, 10000);
}

// Run application on load
document.addEventListener("DOMContentLoaded", initApp);
