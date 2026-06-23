"use client";

import { useState } from "react";
import Image from "next/image";

interface MatchEvent {
  tipo: string;
  minuto: string;
  autor: string;
  time: string;
}

interface Fixture {
  matchNumber: number;
  date: string;
  kickoffUtc: string;
  stage: string;
  group: string | null;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
  hostCity: string;
  matchUrl: string;
  homeScore?: number | null;
  awayScore?: number | null;
  events?: MatchEvent[];
}

interface BracketProps {
  fixtures: Fixture[];
  teamIsoCodes: Record<string, string>;
}

export default function Bracket({ fixtures, teamIsoCodes }: BracketProps) {
  const [activeMobileRound, setActiveMobileRound] = useState<string>("round-of-32");

  // Custom stage translations
  const stageTitles: Record<string, string> = {
    "round-of-32": "Dezesseis-avos (1/16)",
    "round-of-16": "Oitavas de Final (1/8)",
    "quarter-finals": "Quartas de Final (1/4)",
    "semi-finals": "Semifinais",
    "final-stages": "Final e 3º Lugar"
  };

  // Group standings resolver for placeholders
  const resolvePlaceholder = (teamName: string): string => {
    if (!teamName) return "";

    const mappings: Record<string, string> = {
      "1º do Grupo A": "México",
      "2º do Grupo A": "Coreia do Sul",
      "3º do Grupo A": "Tchéquia",
      "1º do Grupo B": "Canadá",
      "2º do Grupo B": "Suíça",
      "3º do Grupo B": "Bósnia e Herzegovina",
      "1º do Grupo C": "Brasil",
      "2º do Grupo C": "Marrocos",
      "3º do Grupo C": "Escócia",
      "1º do Grupo D": "Estados Unidos",
      "2º do Grupo D": "Austrália",
      "3º do Grupo D": "Paraguai",
      "1º do Grupo E": "Alemanha",
      "2º do Grupo E": "Costa do Marfim",
      "3º do Grupo E": "Equador",
      "1º do Grupo F": "Holanda",
      "2º do Grupo F": "Japão",
      "3º do Grupo F": "Suécia",
      "1º do Grupo G": "Egito",
      "2º do Grupo G": "Irã",
      "3º do Grupo G": "Bélgica",
      "1º do Grupo H": "Espanha",
      "2º do Grupo H": "Uruguai",
      "3º do Grupo H": "Cabo Verde",
      "1º do Grupo I": "França",
      "2º do Grupo I": "Noruega",
      "3º do Grupo I": "Senegal",
      "1º do Grupo J": "Argentina",
      "2º do Grupo J": "Áustria",
      "3º do Grupo J": "Argélia",
      "1º do Grupo K": "Portugal",
      "2º do Grupo K": "Colômbia",
      "3º do Grupo K": "RD Congo",
      "1º do Grupo L": "Inglaterra",
      "2º do Grupo L": "Gana",
      "3º do Grupo L": "Panamá"
    };

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

    return mappings[teamName] || teamName;
  };

  // Check if there are still pending games in the group stage
  const hasPendingGroupMatches = fixtures.some(
    (f) => f.stage === "group-stage" && (f.homeScore === null || f.awayScore === null)
  );

  // Filter fixtures for bracket stages
  const roundOf32 = fixtures.filter((f) => f.stage === "round-of-32");
  const roundOf16 = fixtures.filter((f) => f.stage === "round-of-16");
  const quarters = fixtures.filter((f) => f.stage === "quarter-finals");
  const semis = fixtures.filter((f) => f.stage === "semi-finals");
  const finals = fixtures.filter((f) => f.stage === "final" || f.stage === "third-place").sort((a, b) => b.matchNumber - a.matchNumber); // Final first, then 3rd Place

  const renderFlag = (teamName: string) => {
    const resolvedName = resolvePlaceholder(teamName);
    if (!resolvedName || resolvedName.startsWith("Vencedor") || resolvedName.startsWith("Perdedor") || resolvedName.startsWith("1º") || resolvedName.startsWith("2º") || resolvedName.startsWith("3º")) {
      return (
        <div className="relative w-6 h-4 bg-zinc-900 rounded shrink-0 overflow-hidden">
          <Image src="/utils/placeholder.svg" alt="" fill className="object-cover opacity-30" />
        </div>
      );
    }
    
    let flagUrl = "";
    if (resolvedName === "Inglaterra") {
      flagUrl = "https://flagcdn.com/gb-eng.svg";
    } else if (resolvedName === "Escócia") {
      flagUrl = "https://flagcdn.com/gb-sct.svg";
    } else {
      const iso = teamIsoCodes[resolvedName];
      if (iso) {
        flagUrl = `https://flagcdn.com/${iso.toLowerCase()}.svg`;
      }
    }

    if (flagUrl) {
      return (
        <div className="relative w-6 h-4 rounded shrink-0 overflow-hidden border border-zinc-800 bg-zinc-900">
          <Image
            src={flagUrl}
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      );
    }

    return (
      <div className="relative w-6 h-4 bg-zinc-900 rounded shrink-0 overflow-hidden">
        <Image src="/utils/placeholder.svg" alt="" fill className="object-cover opacity-30" />
      </div>
    );
  };

  const renderMatchNode = (match: Fixture, isCompact = false) => {
    const homeResolved = resolvePlaceholder(match.homeTeam);
    const awayResolved = resolvePlaceholder(match.awayTeam);
    const hasScore = typeof match.homeScore === "number" && typeof match.awayScore === "number";

    return (
      <div
        key={match.matchNumber}
        className={`group relative rounded-xl border border-zinc-900 bg-zinc-950/60 p-3 shadow-lg select-none hover:border-zinc-800 transition duration-200 ${
          isCompact ? "w-full" : "w-60"
        }`}
      >
        {/* Match Header */}
        <div className="flex items-center justify-between text-[8px] font-black uppercase tracking-wider text-zinc-500 mb-2">
          <span>Jogo {match.matchNumber}</span>
          <span className="truncate max-w-[100px]">{match.hostCity.replace("-", " ")}</span>
        </div>

        {/* Teams List */}
        <div className="flex flex-col gap-1.5">
          {/* Home */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              {renderFlag(match.homeTeam)}
              <span className={`text-[11px] font-bold truncate ${hasScore && match.homeScore! < match.awayScore! ? "text-zinc-500" : "text-white"}`}>
                {homeResolved || match.homeTeam}
              </span>
            </div>
            {hasScore && (
              <span className={`text-xs font-black ${match.homeScore! < match.awayScore! ? "text-zinc-500" : "text-orange-500"}`}>
                {match.homeScore}
              </span>
            )}
          </div>

          {/* Away */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              {renderFlag(match.awayTeam)}
              <span className={`text-[11px] font-bold truncate ${hasScore && match.awayScore! < match.homeScore! ? "text-zinc-500" : "text-white"}`}>
                {awayResolved || match.awayTeam}
              </span>
            </div>
            {hasScore && (
              <span className={`text-xs font-black ${match.awayScore! < match.homeScore! ? "text-zinc-500" : "text-orange-500"}`}>
                {match.awayScore}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  const getActiveMobileFixtures = () => {
    switch (activeMobileRound) {
      case "round-of-32":
        return roundOf32;
      case "round-of-16":
        return roundOf16;
      case "quarter-finals":
        return quarters;
      case "semi-finals":
        return semis;
      case "final-stages":
        return finals;
      default:
        return [];
    }
  };

  return (
    <div className="w-full">
      {/* Pending Matches Warning Banner */}
      {hasPendingGroupMatches && (
        <div className="mb-6 rounded-xl bg-orange-950/20 border border-orange-900/30 p-4 text-xs font-semibold text-orange-400 flex items-start gap-3">
          <span className="text-sm shrink-0">⚠️</span>
          <span>
            <strong className="uppercase mr-1">Previsão Parcial:</strong> Esta é uma simulação baseada na classificação atual dos grupos. Os confrontos finais das fases eliminatórias serão oficialmente consolidados assim que todos os jogos da Fase de Grupos forem finalizados.
          </span>
        </div>
      )}

      {/* Mobile Rounds Switcher */}
      <div className="flex lg:hidden overflow-x-auto gap-2 pb-4 scrollbar-none select-none">
        {Object.entries(stageTitles).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveMobileRound(key)}
            className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition duration-200 ${
              activeMobileRound === key
                ? "bg-orange-600 text-white shadow-lg shadow-orange-900/10"
                : "bg-zinc-900/40 text-zinc-400 hover:text-zinc-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile Match List View */}
      <div className="flex lg:hidden flex-col gap-4 mt-2">
        {getActiveMobileFixtures().map((match) => renderMatchNode(match, true))}
      </div>

      {/* Desktop Tree Bracket View (Only horizontally scrollable, vertical flows naturally) */}
      <div className="hidden lg:block w-full overflow-x-auto pb-8 border border-zinc-900/60 bg-zinc-950/20 rounded-2xl p-6 scrollbar-thin">
        <div className="min-w-[1240px] flex items-stretch justify-between gap-6 py-2 px-2">
          {/* Round of 32 */}
          <div className="flex flex-col justify-around py-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4">1/16 Final</h4>
            <div className="flex-grow flex flex-col justify-between gap-4">
              {roundOf32.map((match) => renderMatchNode(match))}
            </div>
          </div>

          {/* Round of 16 */}
          <div className="flex flex-col justify-around py-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4">Oitavas de Final</h4>
            <div className="flex-grow flex flex-col justify-around">
              {roundOf16.map((match) => renderMatchNode(match))}
            </div>
          </div>

          {/* Quarter Finals */}
          <div className="flex flex-col justify-around py-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4">Quartas de Final</h4>
            <div className="flex-grow flex flex-col justify-around">
              {quarters.map((match) => renderMatchNode(match))}
            </div>
          </div>

          {/* Semi Finals */}
          <div className="flex flex-col justify-around py-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4">Semifinais</h4>
            <div className="flex-grow flex flex-col justify-around">
              {semis.map((match) => renderMatchNode(match))}
            </div>
          </div>

          {/* Finals (Grand Final + 3rd Place) */}
          <div className="flex flex-col justify-around py-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4">Final & 3º Lugar</h4>
            <div className="flex-grow flex flex-col justify-center gap-12">
              {finals.map((match) => (
                <div key={match.matchNumber} className="flex flex-col gap-2">
                  <span className="text-[9px] font-black text-center uppercase tracking-widest text-orange-500 animate-pulse">
                    {match.stage === "final" ? "Grande Final 🏆" : "Disputa de 3º Lugar"}
                  </span>
                  {renderMatchNode(match)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
