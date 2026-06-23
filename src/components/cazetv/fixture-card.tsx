"use client";

import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowSquareOut } from "@phosphor-icons/react";

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

interface FixtureCardProps {
  fixture: Fixture;
  stageTranslations: Record<string, string>;
  teamIsoCodes: Record<string, string>;
}

export default function FixtureCard({
  fixture,
  stageTranslations,
  teamIsoCodes
}: FixtureCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const stageLabel = stageTranslations[fixture.stage] || fixture.stage;
  
  const formatMatchDateTime = (utcString: string) => {
    try {
      const dateObj = new Date(utcString);
      return dateObj.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo"
      }) + " (Brasília)";
    } catch {
      return utcString;
    }
  };

  const renderFlag = (teamName: string) => {
    if (teamName === "Inglaterra") {
      return (
        <div className="relative w-20 h-12 md:w-24 md:h-16 overflow-hidden rounded-xl shrink-0 border border-zinc-800 bg-zinc-900">
          <Image
            src="https://flagcdn.com/gb-eng.svg"
            alt="Inglaterra"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      );
    }
    if (teamName === "Escócia") {
      return (
        <div className="relative w-20 h-12 md:w-24 md:h-16 overflow-hidden rounded-xl shrink-0 border border-zinc-800 bg-zinc-900">
          <Image
            src="https://flagcdn.com/gb-sct.svg"
            alt="Escócia"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      );
    }

    const isoCode = teamIsoCodes[teamName];
    if (isoCode) {
      return (
        <div className="relative w-20 h-12 md:w-24 md:h-16 overflow-hidden rounded-xl shrink-0 border border-zinc-800 bg-zinc-900">
          <ReactCountryFlag
            countryCode={isoCode}
            svg
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
            title={teamName}
          />
        </div>
      );
    }
    return (
      <div className="relative w-20 h-12 md:w-24 md:h-16 overflow-hidden rounded-xl bg-zinc-900 shrink-0 border border-zinc-800">
        <Image
          src="/utils/placeholder.svg"
          alt="Indefinido"
          fill
          sizes="96px"
          className="object-cover opacity-60"
        />
      </div>
    );
  };

  const hasScore = typeof fixture.homeScore === "number" && typeof fixture.awayScore === "number";

  // Check if the match is live now
  const now = new Date();
  const kickoff = new Date(fixture.kickoffUtc);
  const endTime = new Date(kickoff.getTime() + 2 * 60 * 60 * 1000); // 2 hours duration
  const isLiveNow = now >= kickoff && now <= endTime;

  const renderDetailsContent = (isLiveMatch = false, showButton = true) => (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs text-zinc-450 flex-grow min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <Calendar size={13} className="text-zinc-500 shrink-0" />
            <span className="font-semibold">{formatMatchDateTime(fixture.kickoffUtc)}</span>
          </div>
          <span className="text-zinc-800 shrink-0">•</span>
          <div className="flex items-center gap-1.5 text-zinc-500 min-w-0">
            <MapPin size={13} className="text-zinc-650 shrink-0" />
            <span className="truncate">
              {fixture.stadium} • {fixture.hostCity.replace("-", " ")}
            </span>
          </div>
        </div>

        {showButton && fixture.matchUrl && (
          <Link
            href={fixture.matchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn inline-flex items-center justify-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-black uppercase tracking-wider text-white transition-colors duration-200 w-full sm:w-auto shrink-0 ${
              isLiveMatch ? "bg-orange-600 hover:bg-orange-500" : "bg-zinc-950/80 border border-zinc-900 hover:bg-zinc-900"
            }`}
          >
            {isLiveMatch ? "Assistir" : "Ver partida"}
            <ArrowSquareOut size={13} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        )}
      </div>

      {fixture.events && fixture.events.length > 0 && (
        <div className="mt-2 pt-3 border-t border-zinc-900/60 flex flex-col gap-2.5 text-xs text-zinc-400">
          {fixture.events.map((event, idx) => {
            const isHome = event.time === "casa";
            return (
              <div key={idx} className={`flex items-center gap-2 ${isHome ? "justify-start text-left" : "justify-end text-right"}`}>
                {isHome && (
                  <>
                    {event.tipo === "gol" && <span className="text-sm">⚽</span>}
                    {event.tipo === "gol_contra" && <span className="text-sm text-red-500">⚽</span>}
                    {event.tipo === "cartao_amarelo" && <span className="text-xs text-yellow-500">🟨</span>}
                    {event.tipo === "cartao_vermelho" && <span className="text-xs text-red-500">🟥</span>}
                    <span className="text-zinc-300 font-semibold">
                      {event.autor} <span className="text-zinc-500 text-[10px]">({event.minuto}){event.tipo === "gol_contra" && " (GC)"}</span>
                    </span>
                  </>
                )}
                {!isHome && (
                  <>
                    <span className="text-zinc-300 font-semibold">
                      {event.autor} <span className="text-zinc-550 text-[10px]">({event.minuto}){event.tipo === "gol_contra" && " (GC)"}</span>
                    </span>
                    {event.tipo === "gol" && <span className="text-sm">⚽</span>}
                    {event.tipo === "gol_contra" && <span className="text-sm text-red-500">⚽</span>}
                    {event.tipo === "cartao_amarelo" && <span className="text-xs text-yellow-500">🟨</span>}
                    {event.tipo === "cartao_vermelho" && <span className="text-xs text-red-500">🟥</span>}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-zinc-900/20 p-5 hover:bg-zinc-900/30 transition duration-300">
      {/* Top Meta info */}
      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-zinc-500 mb-5">
        <span>Jogo {fixture.matchNumber}</span>
        <div className="flex items-center gap-2">
          {isLiveNow ? (
            <span className="rounded bg-red-900/20 border border-red-900/30 px-2 py-0.5 text-[9px] font-extrabold text-red-500 uppercase tracking-widest animate-pulse">
              Ao Vivo
            </span>
          ) : hasScore ? (
            <span className="rounded bg-zinc-900/60 px-2 py-0.5 text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest">
              Finalizado
            </span>
          ) : null}
          <span className="text-orange-600">
            {stageLabel} {fixture.group ? `• Grupo ${fixture.group}` : ""}
          </span>
        </div>
      </div>

      {/* Match core layout (Vertical columns) */}
      <div className="grid grid-cols-3 items-center gap-2 py-3">
        {/* Home Team */}
        <div className="flex flex-col items-center text-center gap-2">
          {renderFlag(fixture.homeTeam)}
          <span className="text-xs md:text-sm font-black text-white line-clamp-2 leading-tight">
            {fixture.homeTeam || "A Definir"}
          </span>
        </div>

        {/* Versus or Scoreboard Divider */}
        <div className="flex flex-col items-center justify-center">
          {hasScore ? (
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 font-mono text-3xl md:text-5xl font-black text-white shrink-0 select-none tracking-tighter">
                <span>{fixture.homeScore}</span>
                <span className="text-zinc-800 text-2xl md:text-3xl">:</span>
                <span>{fixture.awayScore}</span>
              </div>
              {isLiveNow && (
                <div className="mt-2.5 flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
                    Ao Vivo
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center w-full">
              <div className="text-[10px] font-black tracking-[0.2em] text-zinc-500 px-4 py-2 bg-zinc-950/80 rounded-xl shrink-0">
                VS
              </div>
              {isLiveNow && (
                <div className="mt-2.5 flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
                    Ao Vivo
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Away Team */}
        <div className="flex flex-col items-center text-center gap-2">
          {renderFlag(fixture.awayTeam)}
          <span className="text-xs md:text-sm font-black text-white line-clamp-2 leading-tight">
            {fixture.awayTeam || "A Definir"}
          </span>
        </div>
      </div>

      {/* Collapsible area with transition */}
      {isLiveNow ? (
        <div className="overflow-hidden mt-5 pt-4">
          {renderDetailsContent(true, true)}
        </div>
      ) : hasScore ? (
        <>
          <div
            className={`overflow-hidden transition-all duration-[400ms] ease-in-out ${
              showDetails ? "max-h-[250px] opacity-100 mt-5 pt-4" : "max-h-0 opacity-0"
            }`}
          >
            {renderDetailsContent(false, true)}
          </div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-4 text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:text-zinc-350 transition duration-200 w-full text-center py-1.5"
          >
            {showDetails ? "Ocultar Detalhes ↑" : "Exibir Detalhes ↓"}
          </button>
        </>
      ) : (
        <div className="overflow-hidden mt-5 pt-4">
          {renderDetailsContent(false, false)}
        </div>
      )}
    </div>
  );
}
