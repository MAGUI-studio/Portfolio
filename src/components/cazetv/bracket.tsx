"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { resolvePlaceholder } from "./groups-data";
import { Warning, Trophy } from "@phosphor-icons/react";

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
  onShowDetails: (matchNumber: number) => void;
}

export default function Bracket({ fixtures, teamIsoCodes, onShowDetails }: BracketProps) {
  const [activeMobileRound, setActiveMobileRound] = useState<string>("round-of-32");
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);

  // Drag-to-scroll bracket hook
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftVal, setScrollLeftVal] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftVal(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Ajuste de velocidade do scroll
    scrollRef.current.scrollLeft = scrollLeftVal - walk;
  };

  // Custom stage translations
  const stageTitles: Record<string, string> = {
    "round-of-32": "Dezesseis-avos (1/16)",
    "round-of-16": "Oitavas de Final (1/8)",
    "quarter-finals": "Quartas de Final (1/4)",
    "semi-finals": "Semifinais",
    "final-stages": "Final e 3º Lugar"
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

  // Symmetrical bracket lists based on matchNumbers (J73 to J104)
  const roundOf32LeftNumbers = [74, 77, 73, 75, 83, 84, 81, 82];
  const roundOf32RightNumbers = [76, 78, 79, 80, 86, 88, 85, 87];
  
  const roundOf16LeftNumbers = [89, 90, 93, 94];
  const roundOf16RightNumbers = [91, 92, 95, 96];

  const quartersLeftNumbers = [97, 98];
  const quartersRightNumbers = [99, 100];

  const semisLeftNumbers = [101];
  const semisRightNumbers = [102];

  // Helper to map and sort fixtures by a specific number sequence
  const mapFixturesByNumbers = (nums: number[]) => {
    return nums
      .map((num) => fixtures.find((f) => f.matchNumber === num))
      .filter((f): f is Fixture => !!f);
  };

  const r32Left = mapFixturesByNumbers(roundOf32LeftNumbers);
  const r32Right = mapFixturesByNumbers(roundOf32RightNumbers);
  const r16Left = mapFixturesByNumbers(roundOf16LeftNumbers);
  const r16Right = mapFixturesByNumbers(roundOf16RightNumbers);
  const qLeft = mapFixturesByNumbers(quartersLeftNumbers);
  const qRight = mapFixturesByNumbers(quartersRightNumbers);
  const sLeft = mapFixturesByNumbers(semisLeftNumbers);
  const sRight = mapFixturesByNumbers(semisRightNumbers);

  const finalMatch = fixtures.find((f) => f.stage === "final");
  const thirdPlaceMatch = fixtures.find((f) => f.stage === "third-place");

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

  const renderMatchNode = (match: Fixture, isCompact = false, isFeatured = false) => {
    const homeResolved = resolvePlaceholder(match.homeTeam);
    const awayResolved = resolvePlaceholder(match.awayTeam);
    const hasScore = typeof match.homeScore === "number" && typeof match.awayScore === "number";

    const isHomeHovered = hoveredTeam && homeResolved === hoveredTeam;
    const isAwayHovered = hoveredTeam && awayResolved === hoveredTeam;
    const isMatchHighlighted = isHomeHovered || isAwayHovered;

    const renderConnectors = () => {
      if (isCompact || isFeatured) return null;
      const num = match.matchNumber;

      const leftTops = [74, 73, 83, 81, 89, 93, 97];
      const leftBottoms = [77, 75, 84, 82, 90, 94, 98];
      const rightTops = [76, 79, 86, 85, 91, 95, 99];
      const rightBottoms = [78, 80, 88, 87, 92, 96, 100];

      const leftInputs = [89, 90, 93, 94, 97, 98, 101];
      const rightInputs = [91, 92, 95, 96, 99, 100, 102];

      let vHeight = "0px";
      if ([73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88].includes(num)) {
        vHeight = "58px";
      } else if ([89, 90, 91, 92, 93, 94, 95, 96].includes(num)) {
        vHeight = "116px";
      } else if ([97, 98, 99, 100].includes(num)) {
        vHeight = "232px";
      }

      return (
        <>
          {leftTops.includes(num) && (
            <div className="absolute left-full top-1/2 w-4 border-r-2 border-t-2 border-zinc-800 pointer-events-none" style={{ height: vHeight }} />
          )}
          {leftBottoms.includes(num) && (
            <div className="absolute left-full bottom-1/2 w-4 border-r-2 border-b-2 border-zinc-800 pointer-events-none" style={{ height: vHeight }} />
          )}
          {rightTops.includes(num) && (
            <div className="absolute right-full top-1/2 w-4 border-l-2 border-t-2 border-zinc-800 pointer-events-none" style={{ height: vHeight }} />
          )}
          {rightBottoms.includes(num) && (
            <div className="absolute right-full bottom-1/2 w-4 border-l-2 border-b-2 border-zinc-800 pointer-events-none" style={{ height: vHeight }} />
          )}
          {leftInputs.includes(num) && (
            <div className="absolute right-full top-1/2 w-4 h-0 border-t-2 border-zinc-800 pointer-events-none" style={{ transform: 'translateY(-50%)' }} />
          )}
          {rightInputs.includes(num) && (
            <div className="absolute left-full top-1/2 w-4 h-0 border-t-2 border-zinc-800 pointer-events-none" style={{ transform: 'translateY(-50%)' }} />
          )}
        </>
      );
    };

    return (
      <button
        key={match.matchNumber}
        onClick={() => onShowDetails(match.matchNumber)}
        className={`group relative text-left rounded-xl border select-none transition-all duration-300 focus:outline-none cursor-pointer ${
          isFeatured 
            ? "border-orange-500 bg-zinc-950/90 shadow-2xl scale-[1.03] hover:scale-[1.05] p-5" 
            : isMatchHighlighted 
              ? "border-orange-500 bg-orange-500/5 shadow-[0_0_15px_rgba(249,115,22,0.15)] scale-[1.02] z-10 p-3" 
              : "border-zinc-900 bg-zinc-950/60 hover:border-orange-500/60 hover:bg-zinc-900/30 p-3"
        } ${
          isCompact ? "w-full" : isFeatured ? "w-72" : "w-60"
        }`}
      >
        {renderConnectors()}
        {/* Match Header */}
        <div className={`flex items-center justify-between font-black uppercase tracking-wider text-zinc-500 ${isFeatured ? "text-[10px] mb-3" : "text-[8px] mb-2"}`}>
          <span>Jogo {match.matchNumber}</span>
          <span className="truncate max-w-[120px]">{match.hostCity.replace("-", " ")}</span>
        </div>

        {/* Teams List */}
        <div className={`flex flex-col ${isFeatured ? "gap-2.5" : "gap-1.5"}`}>
          {/* Home */}
          <div 
            className={`flex items-center justify-between gap-2 py-0.5 transition duration-200 ${
              isHomeHovered ? "text-orange-400" : ""
            }`}
            onMouseEnter={() => homeResolved && !homeResolved.startsWith("1º") && !homeResolved.startsWith("2º") && !homeResolved.startsWith("3º") && setHoveredTeam(homeResolved)}
            onMouseLeave={() => setHoveredTeam(null)}
          >
            <div className="flex items-center gap-2 min-w-0">
              {renderFlag(match.homeTeam)}
              <span className={`font-bold truncate transition duration-200 ${
                isFeatured ? "text-[13px]" : "text-[11px]"
              } ${
                isHomeHovered 
                  ? "text-orange-500 font-extrabold" 
                  : hasScore && match.homeScore! < match.awayScore! 
                    ? "text-zinc-500" 
                    : "text-white"
              }`}>
                {homeResolved || match.homeTeam}
              </span>
            </div>
            {hasScore && (
              <span className={`font-black transition duration-200 ${
                isFeatured ? "text-sm" : "text-xs"
              } ${
                isHomeHovered
                  ? "text-orange-500"
                  : match.homeScore! < match.awayScore! 
                    ? "text-zinc-500" 
                    : "text-orange-500"
              }`}>
                {match.homeScore}
              </span>
            )}
          </div>

          {/* Away */}
          <div 
            className={`flex items-center justify-between gap-2 py-0.5 transition duration-200 ${
              isAwayHovered ? "text-orange-400" : ""
            }`}
            onMouseEnter={() => awayResolved && !awayResolved.startsWith("1º") && !awayResolved.startsWith("2º") && !awayResolved.startsWith("3º") && setHoveredTeam(awayResolved)}
            onMouseLeave={() => setHoveredTeam(null)}
          >
            <div className="flex items-center gap-2 min-w-0">
              {renderFlag(match.awayTeam)}
              <span className={`font-bold truncate transition duration-200 ${
                isFeatured ? "text-[13px]" : "text-[11px]"
              } ${
                isAwayHovered 
                  ? "text-orange-500 font-extrabold" 
                  : hasScore && match.awayScore! < match.homeScore! 
                    ? "text-zinc-500" 
                    : "text-white"
              }`}>
                {awayResolved || match.awayTeam}
              </span>
            </div>
            {hasScore && (
              <span className={`font-black transition duration-200 ${
                isFeatured ? "text-sm" : "text-xs"
              } ${
                isAwayHovered
                  ? "text-orange-500"
                  : match.awayScore! < match.homeScore! 
                    ? "text-zinc-500" 
                    : "text-orange-500"
              }`}>
                {match.awayScore}
              </span>
            )}
          </div>
        </div>
      </button>
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

      {/* Symmetrical tree view for both mobile and desktop (scrollable horizontally) */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`w-full overflow-x-auto overflow-y-hidden py-6 px-4 border border-zinc-900/60 bg-zinc-950/20 rounded-2xl caze-bracket-scroll select-none ${
          isMouseDown ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <div className="min-w-[2300px] flex items-stretch justify-between gap-8 py-2 px-8 h-[1000px]">
          {/* LADO ESQUERDO: Segundas de final */}
          <div className="flex flex-col justify-between py-4 h-full">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4 shrink-0">Segundas de final</h4>
            <div className="flex-grow flex flex-col justify-between gap-2">
              {r32Left.map((match) => renderMatchNode(match))}
            </div>
          </div>

          {/* LADO ESQUERDO: Oitavas de final */}
          <div className="flex flex-col justify-around py-4 h-full">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4 shrink-0">Oitavas de final</h4>
            <div className="flex-grow flex flex-col justify-around">
              {r16Left.map((match) => renderMatchNode(match))}
            </div>
          </div>

          {/* LADO ESQUERDO: Quartas de final */}
          <div className="flex flex-col justify-around py-4 h-full">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4 shrink-0">Quartas de final</h4>
            <div className="flex-grow flex flex-col justify-around">
              {qLeft.map((match) => renderMatchNode(match))}
            </div>
          </div>

          {/* LADO ESQUERDO: Semifinal */}
          <div className="flex flex-col justify-around py-4 h-full">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4 shrink-0">Semifinal</h4>
            <div className="flex-grow flex flex-col justify-around">
              {sLeft.map((match) => renderMatchNode(match))}
            </div>
          </div>

          {/* CENTRO: Finais (Final + 3º Lugar) */}
          <div className="flex flex-col justify-center gap-16 py-4 h-full w-72">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4 shrink-0">Finais</h4>
            
            <div className="flex flex-col justify-center gap-24 flex-grow">
              {/* Grande Final */}
              {finalMatch && (
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-black text-center uppercase tracking-widest text-orange-500 animate-pulse flex items-center justify-center gap-1">
                    Grande Final <Trophy size={11} className="text-orange-500 shrink-0 inline-block align-middle" />
                  </span>
                  {renderMatchNode(finalMatch, false, true)}
                </div>
              )}

              {/* Decisão do 3º Lugar */}
              {thirdPlaceMatch && (
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-black text-center uppercase tracking-widest text-zinc-400 flex items-center justify-center gap-1">
                    Decisão do 3º lugar
                  </span>
                  {renderMatchNode(thirdPlaceMatch)}
                </div>
              )}
            </div>
          </div>

          {/* LADO DIREITO: Semifinal */}
          <div className="flex flex-col justify-around py-4 h-full">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4 shrink-0">Semifinal</h4>
            <div className="flex-grow flex flex-col justify-around">
              {sRight.map((match) => renderMatchNode(match))}
            </div>
          </div>

          {/* LADO DIREITO: Quartas de final */}
          <div className="flex flex-col justify-around py-4 h-full">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4 shrink-0">Quartas de final</h4>
            <div className="flex-grow flex flex-col justify-around">
              {qRight.map((match) => renderMatchNode(match))}
            </div>
          </div>

          {/* LADO DIREITO: Oitavas de final */}
          <div className="flex flex-col justify-around py-4 h-full">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4 shrink-0">Oitavas de final</h4>
            <div className="flex-grow flex flex-col justify-around">
              {r16Right.map((match) => renderMatchNode(match))}
            </div>
          </div>

          {/* LADO DIREITO: Segundas de final */}
          <div className="flex flex-col justify-between py-4 h-full">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4 shrink-0">Segundas de final</h4>
            <div className="flex-grow flex flex-col justify-between gap-2">
              {r32Right.map((match) => renderMatchNode(match))}
            </div>
          </div>
          {/* Spacer to prevent right gluing during scroll */}
          <div className="w-12 shrink-0" />
        </div>

        {/* Custom scrollbar styling */}
        <style dangerouslySetInnerHTML={{__html: `
          .caze-bracket-scroll::-webkit-scrollbar {
            height: 6px;
          }
          .caze-bracket-scroll::-webkit-scrollbar-track {
            background: rgba(24, 24, 27, 0.4);
            border-radius: 8px;
          }
          .caze-bracket-scroll::-webkit-scrollbar-thumb {
            background: rgba(63, 63, 70, 0.8);
            border-radius: 8px;
            border: 1px solid rgba(24, 24, 27, 0.4);
          }
          .caze-bracket-scroll::-webkit-scrollbar-thumb:hover {
            background: #ea580c;
          }
        `}} />
      </div>
    </div>
  );
}
