"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Timer, MapPin } from "@phosphor-icons/react";

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

interface BrazilWidgetProps {
  fixtures: Fixture[];
  teamIsoCodes: Record<string, string>;
  onShowDetails: (matchNumber: number) => void;
}

export default function BrazilWidget({ fixtures, teamIsoCodes, onShowDetails }: BrazilWidgetProps) {
  const [nextMatch, setNextMatch] = useState<Fixture | null>(null);
  const [isUpcoming, setIsUpcoming] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Find Brazil matches
    const brazilMatches = fixtures.filter(
      (f) => f.homeTeam === "Brasil" || f.awayTeam === "Brasil"
    );

    // Try to find the next upcoming match (no score yet or kickoff is in the future)
    const now = new Date();
    const upcoming = brazilMatches
      .filter((f) => f.homeScore === null || f.awayScore === null || new Date(f.kickoffUtc) > now)
      .sort((a, b) => new Date(a.kickoffUtc).getTime() - new Date(b.kickoffUtc).getTime());

    if (upcoming.length > 0) {
      setNextMatch(upcoming[0]);
      setIsUpcoming(true);
    } else {
      setNextMatch(null);
      setIsUpcoming(false);
    }
  }, [fixtures]);

  useEffect(() => {
    if (!nextMatch || !isUpcoming) return;

    const updateTimer = () => {
      const target = new Date(nextMatch.kickoffUtc).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        // If the game started less than 2.5 hours ago and score is still null, it is live
        const isGameStillGoing = now < (target + 2.5 * 60 * 60 * 1000) && nextMatch.homeScore === null;
        if (isGameStillGoing) {
          setIsLive(true);
        } else {
          setIsLive(false);
        }
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsLive(false);
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setCountdown({ days: d, hours: h, minutes: m, seconds: s });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [nextMatch, isUpcoming]);

  if (!nextMatch) return null;

  const renderFlag = (teamName: string) => {
    const isoCode = teamIsoCodes[teamName];
    if (isoCode) {
      return (
        <div className="relative w-8 h-5 sm:w-10 sm:h-6 overflow-hidden rounded-md shrink-0 border border-zinc-800 bg-zinc-900">
          <Image
            src={`https://flagcdn.com/${isoCode.toLowerCase()}.svg`}
            alt={teamName}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      );
    }
    return (
      <div className="relative w-8 h-5 sm:w-10 sm:h-6 overflow-hidden rounded-md bg-zinc-900 shrink-0 border border-zinc-800">
        <Image src="/utils/placeholder.svg" alt="" fill className="object-cover opacity-30" />
      </div>
    );
  };

  const formatMatchDate = (utcString: string) => {
    try {
      const dateObj = new Date(utcString);
      return dateObj.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo"
      }) + " (Brasília)";
    } catch {
      return utcString;
    }
  };

  return (
    <div className="w-full rounded-3xl border border-zinc-900 bg-zinc-950/40 p-6 md:p-8 shadow-2xl relative overflow-hidden group select-none mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
        {/* Left Side Info */}
        <div className="flex flex-col gap-3 min-w-0">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-green-400">
              {isUpcoming ? "Próximo Confronto da Seleção" : "Última Partida da Seleção"}
            </span>
          </div>

          <div className="flex items-center gap-4 py-2">
            {/* Home Team */}
            <div className="flex items-center gap-2.5">
              {renderFlag(nextMatch.homeTeam)}
              <span className="text-sm sm:text-base font-black text-white">{nextMatch.homeTeam}</span>
            </div>
            
            {/* Score or VS */}
            <div className="font-mono text-lg sm:text-2xl font-black text-zinc-400 px-3 py-1 bg-zinc-900/60 rounded-xl border border-zinc-900">
              {typeof nextMatch.homeScore === "number" && typeof nextMatch.awayScore === "number" ? (
                <span className="text-white">
                  {nextMatch.homeScore} : {nextMatch.awayScore}
                </span>
              ) : (
                <span className="text-xs uppercase tracking-wider font-sans text-zinc-500 px-1">VS</span>
              )}
            </div>

            {/* Away Team */}
            <div className="flex items-center gap-2.5">
              <span className="text-sm sm:text-base font-black text-white">{nextMatch.awayTeam}</span>
              {renderFlag(nextMatch.awayTeam)}
            </div>
          </div>

          {/* Details Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-1.5 gap-x-4 text-xs text-zinc-400 mt-1">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-white" />
              <span className="capitalize">{formatMatchDate(nextMatch.kickoffUtc)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-white" />
              <span>{nextMatch.stadium} • {nextMatch.hostCity.replace("-", " ").toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Countdown Timer or Details Button */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between sm:justify-start lg:justify-center gap-4 shrink-0 border-t lg:border-t-0 lg:border-l border-zinc-900 pt-6 lg:pt-0 lg:pl-8 w-full sm:w-auto">
          {isLive ? (
            <div className="flex flex-col gap-1.5 lg:items-end">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-[9px] font-black uppercase tracking-widest text-red-500 animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                Partida Ao Vivo
              </span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                Acompanhe a transmissão
              </span>
            </div>
          ) : isUpcoming ? (
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-550 flex items-center gap-1 lg:justify-end">
                <Timer size={12} className="text-yellow-500 animate-spin-slow" />
                Contagem Regressiva
              </span>
              <div className="flex items-center gap-2.5 font-mono text-xl sm:text-2xl font-black text-white">
                <div className="flex flex-col items-center">
                  <span>{String(countdown.days).padStart(2, "0")}</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-500 font-sans mt-0.5">Dias</span>
                </div>
                <span className="text-zinc-800 text-base mb-3">:</span>
                <div className="flex flex-col items-center">
                  <span>{String(countdown.hours).padStart(2, "0")}</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-500 font-sans mt-0.5">Horas</span>
                </div>
                <span className="text-zinc-800 text-base mb-3">:</span>
                <div className="flex flex-col items-center">
                  <span>{String(countdown.minutes).padStart(2, "0")}</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-500 font-sans mt-0.5">Min</span>
                </div>
                <span className="text-zinc-800 text-base mb-3">:</span>
                <div className="flex flex-col items-center">
                  <span>{String(countdown.seconds).padStart(2, "0")}</span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-500 font-sans mt-0.5">Seg</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Participação Finalizada
            </div>
          )}

          {isLive ? (
            <Link
              href={nextMatch.matchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition duration-200 shadow-md shadow-red-950/20 border-0 outline-none select-none w-full sm:w-auto cursor-pointer text-center animate-pulse"
            >
              Assistir na CazéTV
            </Link>
          ) : (
            <button
              onClick={() => onShowDetails(nextMatch.matchNumber)}
              className="rounded-xl bg-green-600 hover:bg-green-500 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition duration-200 shadow-md shadow-green-950/20 border-0 outline-none select-none w-full sm:w-auto cursor-pointer"
            >
              Ver Detalhes do Jogo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
