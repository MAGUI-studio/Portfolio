import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import { Calendar, MapPin } from "@phosphor-icons/react";

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
  const stageLabel = stageTranslations[fixture.stage] || fixture.stage;
  
  // Format DateTime to pt-BR in America/Sao_Paulo timezone
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
    if (!teamName) return <span className="text-xl">⚽</span>;
    const isoCode = teamIsoCodes[teamName];
    if (isoCode) {
      return (
        <ReactCountryFlag
          countryCode={isoCode}
          svg
          style={{
            width: "36px",
            height: "24px",
            objectFit: "cover",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.4)"
          }}
          title={teamName}
        />
      );
    }
    return (
      <div className="flex h-[24px] w-[36px] items-center justify-center rounded bg-zinc-800 border border-zinc-700 text-xs shadow-sm">
        🏆
      </div>
    );
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-xl bg-zinc-900/50 border border-zinc-850 p-5 hover:border-orange-500/40 hover:bg-zinc-900 transition-all duration-300">
      {/* Top Meta info */}
      <div className="flex items-center justify-between text-xs border-b border-zinc-800/80 pb-3 mb-4">
        <span className="rounded bg-zinc-850 px-2 py-0.5 font-mono text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
          Jogo {fixture.matchNumber}
        </span>
        <span className="font-extrabold uppercase tracking-wider text-orange-500/90 text-[10px]">
          {stageLabel} {fixture.group ? `• Grupo ${fixture.group}` : ""}
        </span>
      </div>

      {/* Match core layout */}
      <div className="flex items-center justify-between gap-4 py-3">
        {/* Home Team */}
        <div className="flex flex-1 flex-col items-center text-center gap-2.5">
          {renderFlag(fixture.homeTeam)}
          <span className="text-sm font-black text-white group-hover:text-orange-400 transition duration-200 line-clamp-1">
            {fixture.homeTeam || "A Definir"}
          </span>
        </div>

        {/* Versus Divider */}
        <div className="flex flex-col items-center">
          <span className="rounded bg-zinc-950 px-3 py-1.5 text-[10px] font-black tracking-wider text-zinc-500 border border-zinc-850">
            VS
          </span>
        </div>

        {/* Away Team */}
        <div className="flex flex-1 flex-col items-center text-center gap-2.5">
          {renderFlag(fixture.awayTeam)}
          <span className="text-sm font-black text-white group-hover:text-orange-400 transition duration-200 line-clamp-1">
            {fixture.awayTeam || "A Definir"}
          </span>
        </div>
      </div>

      {/* Bottom Info Details */}
      <div className="mt-4 border-t border-zinc-800/85 pt-3">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Calendar size={14} className="text-zinc-500" />
          <span className="font-semibold text-zinc-300">{formatMatchDateTime(fixture.kickoffUtc)}</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
          <MapPin size={14} className="text-zinc-500" />
          <span className="truncate text-zinc-450 font-medium">
            {fixture.stadium}, {fixture.hostCity.replace("-", " ")}
          </span>
        </div>

        {fixture.matchUrl && (
          <Link
            href={fixture.matchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded bg-zinc-950 py-2 text-xs font-bold text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition duration-200"
          >
            Ver Detalhes do Jogo
          </Link>
        )}
      </div>
    </div>
  );
}
