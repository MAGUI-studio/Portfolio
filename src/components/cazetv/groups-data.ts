export interface GroupStandingTeam {
  rank: number;
  team: string;
  teamDisplay?: string;
  points: string | number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  lastFive: ("V" | "E" | "D" | "N")[]; // V = Vitória, E = Empate, D = Derrota, N = Não jogou
  qualifies: boolean;
}

export interface GroupData {
  groupName: string;
  teams: GroupStandingTeam[];
}

export const groupsStandings: GroupData[] = [
  {
    groupName: "Grupo A",
    teams: [
      { rank: 1, team: "México", points: 6, played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 0, goalDifference: 3, lastFive: ["V", "V", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Coreia do Sul", points: 3, played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, lastFive: ["V", "D", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "Tchéquia", points: 1, played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 3, goalDifference: -1, lastFive: ["D", "E", "N", "N", "N"], qualifies: true },
      { rank: 4, team: "África do Sul", points: 1, played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 3, goalDifference: -2, lastFive: ["D", "E", "N", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo B",
    teams: [
      { rank: 1, team: "Canadá", points: 4, played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 1, goalDifference: 6, lastFive: ["E", "V", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Suíça", points: 4, played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 2, goalDifference: 3, lastFive: ["E", "V", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "Bósnia e Herzegovina", points: 1, played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 5, goalDifference: -3, lastFive: ["E", "D", "N", "N", "N"], qualifies: false },
      { rank: 4, team: "Catar", points: 1, played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 7, goalDifference: -6, lastFive: ["E", "D", "N", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo C",
    teams: [
      { rank: 1, team: "Brasil", points: 4, played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 1, goalDifference: 3, lastFive: ["E", "V", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Marrocos", points: 4, played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 2, goalsAgainst: 1, goalDifference: 1, lastFive: ["E", "V", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "Escócia", points: 3, played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 1, goalDifference: 0, lastFive: ["V", "D", "N", "N", "N"], qualifies: true },
      { rank: 4, team: "Haiti", points: 0, played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 0, goalsAgainst: 4, goalDifference: -4, lastFive: ["D", "D", "N", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo D",
    teams: [
      { rank: 1, team: "Estados Unidos", points: 6, played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 1, goalDifference: 5, lastFive: ["V", "V", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Austrália", points: 3, played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, lastFive: ["V", "D", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "Paraguai", points: 3, played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 4, goalDifference: -2, lastFive: ["D", "V", "N", "N", "N"], qualifies: true },
      { rank: 4, team: "Turquia", points: 0, played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 0, goalsAgainst: 3, goalDifference: -3, lastFive: ["D", "D", "N", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo E",
    teams: [
      { rank: 1, team: "Alemanha", points: 6, played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 9, goalsAgainst: 2, goalDifference: 7, lastFive: ["V", "V", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Costa do Marfim", points: 3, played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, lastFive: ["V", "D", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "Equador", points: 1, played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 0, goalsAgainst: 1, goalDifference: -1, lastFive: ["D", "E", "N", "N", "N"], qualifies: false },
      { rank: 4, team: "Curaçao", points: 1, played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 7, goalDifference: -6, lastFive: ["D", "E", "N", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo F",
    teams: [
      { rank: 1, team: "Holanda", teamDisplay: "Países Baixos", points: 4, played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 3, goalDifference: 4, lastFive: ["E", "V", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Japão", points: 4, played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 2, goalDifference: 4, lastFive: ["E", "V", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "Suécia", points: 3, played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 6, goalDifference: 0, lastFive: ["V", "D", "N", "N", "N"], qualifies: true },
      { rank: 4, team: "Tunísia", points: 0, played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 9, goalDifference: -8, lastFive: ["D", "D", "N", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo G",
    teams: [
      { rank: 1, team: "Egito", points: 4, played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 2, goalDifference: 2, lastFive: ["E", "V", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Irã", points: 2, played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, lastFive: ["E", "E", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "Bélgica", points: 2, played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 1, goalsAgainst: 1, goalDifference: 0, lastFive: ["E", "E", "N", "N", "N"], qualifies: true },
      { rank: 4, team: "Nova Zelândia", points: 1, played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 5, goalDifference: -2, lastFive: ["E", "D", "N", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo H",
    teams: [
      { rank: 1, team: "Espanha", points: 4, played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 0, goalDifference: 4, lastFive: ["E", "V", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Uruguai", points: 2, played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 3, goalsAgainst: 3, goalDifference: 0, lastFive: ["E", "E", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "Cabo Verde", points: 2, played: 2, won: 0, drawn: 2, lost: 0, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, lastFive: ["E", "E", "N", "N", "N"], qualifies: true },
      { rank: 4, team: "Arábia Saudita", points: 1, played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 5, goalDifference: -4, lastFive: ["E", "D", "N", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo I",
    teams: [
      { rank: 1, team: "França", points: 6, played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 1, goalDifference: 5, lastFive: ["V", "V", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Noruega", points: 6, played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 7, goalsAgainst: 3, goalDifference: 4, lastFive: ["V", "V", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "Senegal", points: 0, played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 6, goalDifference: -3, lastFive: ["D", "D", "N", "N", "N"], qualifies: false },
      { rank: 4, team: "Iraque", points: 0, played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 7, goalDifference: -6, lastFive: ["D", "D", "N", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo J",
    teams: [
      { rank: 1, team: "Argentina", points: 6, played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 0, goalDifference: 5, lastFive: ["V", "V", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Áustria", points: 3, played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 3, goalDifference: 0, lastFive: ["V", "D", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "Argélia", points: 3, played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 4, goalDifference: -2, lastFive: ["D", "V", "N", "N", "N"], qualifies: true },
      { rank: 4, team: "Jordânia", points: 0, played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 5, goalDifference: -3, lastFive: ["D", "D", "N", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo K",
    teams: [
      { rank: 1, team: "Colômbia", points: 6, played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 4, goalsAgainst: 1, goalDifference: 3, lastFive: ["V", "V", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Portugal", points: 4, played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 1, goalDifference: 5, lastFive: ["E", "V", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "RD Congo", points: 1, played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 2, goalDifference: -1, lastFive: ["E", "D", "N", "N", "N"], qualifies: false },
      { rank: 4, team: "Uzbequistão", points: 0, played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 8, goalDifference: -7, lastFive: ["D", "D", "N", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo L",
    teams: [
      { rank: 1, team: "Inglaterra", points: 4, played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 2, goalDifference: 2, lastFive: ["V", "E", "N", "N", "N"], qualifies: true },
      { rank: 2, team: "Gana", points: 4, played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 1, goalsAgainst: 0, goalDifference: 1, lastFive: ["V", "E", "N", "N", "N"], qualifies: true },
      { rank: 3, team: "Croácia", points: 3, played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 4, goalDifference: -1, lastFive: ["D", "V", "N", "N", "N"], qualifies: true },
      { rank: 4, team: "Panamá", points: 0, played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 0, goalsAgainst: 2, goalDifference: -2, lastFive: ["D", "D", "N", "N", "N"], qualifies: false }
    ]
  }
];

export const resolvePlaceholder = (teamName: string): string => {
  if (!teamName) return "";
  
  // Format: "1º do Grupo A" or "2º do Grupo K"
  const match = teamName.match(/^(\d+)º do Grupo ([A-L])$/);
  if (match) {
    const rank = parseInt(match[1]);
    const groupLetter = match[2];
    const groupName = `Grupo ${groupLetter}`;
    const group = groupsStandings.find((g) => g.groupName === groupName);
    if (group) {
      const teamObj = group.teams.find((t) => t.rank === rank);
      if (teamObj) {
        return teamObj.team;
      }
    }
  }

  // Handle 3º do Grupo wildcards
  if (teamName.startsWith("3º do Grupo")) {
    if (teamName.includes("A/B/C/D/F")) return "Tchéquia";
    if (teamName.includes("C/D/F/G/H")) return "Escócia";
    if (teamName.includes("C/E/F/H/I")) return "Suécia";
    if (teamName.includes("E/H/I/J/K")) return "Paraguai";
    if (teamName.includes("D/E/G/I/J")) return "Argélia";
    if (teamName.includes("A/B/D/G/I")) return "Bélgica";
    if (teamName.includes("B/C/E/F/I")) return "Cabo Verde";
    if (teamName.includes("B/F/G/J/L")) return "Bósnia e Herzegovina";
  }

  return teamName;
};
