"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cazetvDisplay, cazetvText } from "../cazetv/fonts";
import fixturesData from "../cazetv/world-cup-2026-fixtures.json";

// Import modular components
import CurtainLoader from "../cazetv/curtain-loader";
import Header from "../cazetv/header";
import HeroSection from "../cazetv/hero-section";
import FixturesFilter from "../cazetv/fixtures-filter";
import FixtureCard from "../cazetv/fixture-card";
import GroupTables from "../cazetv/group-tables";
import Bracket from "../cazetv/bracket";
import Footer from "../cazetv/footer";
import { Calendar, X, ArrowSquareOut, Warning } from "@phosphor-icons/react";

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

// Mapeamento das seleções para seus respectivos códigos ISO de 2 letras
const teamIsoCodes: Record<string, string> = {
  "Argélia": "DZ",
  "Argentina": "AR",
  "Austrália": "AU",
  "Áustria": "AT",
  "Bélgica": "BE",
  "Bósnia e Herzegovina": "BA",
  "Brasil": "BR",
  "Cabo Verde": "CV",
  "Canadá": "CA",
  "Colômbia": "CO",
  "RD Congo": "CD",
  "Costa do Marfim": "CI",
  "Croácia": "HR",
  "Curaçao": "CW",
  "Tchéquia": "CZ",
  "Equador": "EC",
  "Egito": "EG",
  "Inglaterra": "GB",
  "França": "FR",
  "Alemanha": "DE",
  "Gana": "GH",
  "Haiti": "HT",
  "Irã": "IR",
  "Iraque": "IQ",
  "Japão": "JP",
  "Jordânia": "JO",
  "Coreia do Sul": "KR",
  "México": "MX",
  "Marrocos": "MA",
  "Holanda": "NL",
  "Nova Zelândia": "NZ",
  "Noruega": "NO",
  "Panamá": "PA",
  "Paraguai": "PY",
  "Portugal": "PT",
  "Catar": "QA",
  "Arábia Saudita": "SA",
  "Escócia": "GB",
  "Senegal": "SN",
  "África do Sul": "ZA",
  "Espanha": "ES",
  "Suécia": "SE",
  "Suíça": "CH",
  "Tunísia": "TN",
  "Turquia": "TR",
  "Estados Unidos": "US",
  "Uruguai": "UY",
  "Uzbequistão": "UZ"
};

// Tradução amigável das fases do torneio
const stageTranslations: Record<string, string> = {
  "group-stage": "Fase de Grupos",
  "round-of-32": "Dezesseis-avos de Final",
  "round-of-16": "Oitavas de Final",
  "quarter-finals": "Quartas de Final",
  "semi-finals": "Semifinais",
  "third-place": "Disputa de 3º Lugar",
  "final": "Grande Final"
};

export default function CazeTVLanding() {
  const [activeTab, setActiveTab] = useState<"jogos" | "grupos" | "chaveamento">("jogos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStage, setSelectedStage] = useState("all");
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [selectedMatchNumber, setSelectedMatchNumber] = useState<number | null>(null);

  // States for smooth modal opening/closing animations
  const [renderedMatch, setRenderedMatch] = useState<Fixture | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Scroll / Lazy Load states
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const { fixtures } = fixturesData;

  // Sync state with URL query parameters on load & popstate changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      const matchParam = params.get("match");
      
      if (tabParam === "jogos" || tabParam === "grupos" || tabParam === "chaveamento") {
        setActiveTab(tabParam);
      }
      if (matchParam) {
        const mNum = parseInt(matchParam);
        if (!isNaN(mNum)) {
          const match = fixtures.find((f) => f.matchNumber === mNum);
          if (match) {
            setRenderedMatch(match);
            setIsModalOpen(true);
            setSelectedMatchNumber(mNum);
          }
        }
      }

      const handlePopState = () => {
        const currentParams = new URLSearchParams(window.location.search);
        const currentTab = currentParams.get("tab");
        const currentMatchId = currentParams.get("match");

        if (currentTab === "jogos" || currentTab === "grupos" || currentTab === "chaveamento") {
          setActiveTab(currentTab);
        }

        if (currentMatchId) {
          const mNum = parseInt(currentMatchId);
          if (!isNaN(mNum)) {
            const match = fixtures.find((f) => f.matchNumber === mNum);
            if (match) {
              setRenderedMatch(match);
              setIsModalOpen(true);
              setSelectedMatchNumber(mNum);
            }
          }
        } else {
          setIsModalOpen(false);
          setTimeout(() => {
            setSelectedMatchNumber(null);
            setRenderedMatch(null);
          }, 200);
        }
      };

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [fixtures]);

  const handleTabChange = (newTab: "jogos" | "grupos" | "chaveamento") => {
    setActiveTab(newTab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", newTab);
      window.history.pushState({}, "", url.toString());
    }
  };

  const handleShowDetails = (matchNumber: number) => {
    const match = fixtures.find((f) => f.matchNumber === matchNumber);
    if (match) {
      setRenderedMatch(match);
      setIsModalOpen(true);
      setSelectedMatchNumber(matchNumber);
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        url.searchParams.set("match", matchNumber.toString());
        window.history.pushState({}, "", url.toString());
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("match");
      window.history.pushState({}, "", url.toString());
    }
    // Wait for the transition out animation to finish before clearing state
    setTimeout(() => {
      setSelectedMatchNumber(null);
      setRenderedMatch(null);
    }, 200);
  };

  // Extrair todos os grupos únicos presentes na fase de grupos
  const groups = Array.from(
    new Set(
      fixtures
        .filter((f) => f.group)
        .map((f) => f.group)
    )
  ).sort() as string[];

  // Filtrar os jogos de acordo com os estados do filtro
  const filteredFixtures = fixtures.filter((fixture) => {
    const home = fixture.homeTeam || "";
    const away = fixture.awayTeam || "";
    const matchesSearch =
      home.toLowerCase().includes(searchTerm.toLowerCase()) ||
      away.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (fixture.stadium && fixture.stadium.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (fixture.hostCity && fixture.hostCity.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStage = selectedStage === "all" || fixture.stage === selectedStage;
    const matchesGroup = selectedGroup === "all" || fixture.group === selectedGroup;

    return matchesSearch && matchesStage && matchesGroup;
  });

  // Group matches by date to break visual repetition
  const fixturesByDate: Record<string, typeof fixtures> = {};
  filteredFixtures.slice(0, visibleCount).forEach((fixture) => {
    const d = fixture.date;
    if (!fixturesByDate[d]) {
      fixturesByDate[d] = [];
    }
    fixturesByDate[d].push(fixture);
  });

  const formatGroupHeaderDate = (dateStr: string) => {
    try {
      const parts = dateStr.split("-");
      const date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      };
      const formatted = date.toLocaleDateString("pt-BR", options);
      // Capitalize first letter
      return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    } catch {
      return dateStr;
    }
  };

  // Reset pagination count on search/filter changes
  useEffect(() => {
    setVisibleCount(12);
  }, [searchTerm, selectedStage, selectedGroup]);

  // Observer intersection to trigger show more
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && visibleCount < filteredFixtures.length && !isLoadingMore && activeTab === "jogos") {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + 12);
            setIsLoadingMore(false);
          }, 150);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [visibleCount, filteredFixtures.length, isLoadingMore, activeTab]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedStage("all");
    setSelectedGroup("all");
  };

  return (
    <main
      className={`${cazetvText.className} ${cazetvText.variable} ${cazetvDisplay.variable} min-h-screen bg-neutral-950 text-zinc-100 flex flex-col`}
      style={{ fontFamily: "var(--font-cazetv-text), sans-serif" }}
    >
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://flagcdn.com" crossOrigin="anonymous" />
      {/* Disclaimer Banner */}
      <div className="w-full bg-orange-950/10 border-b border-orange-900/20 py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-orange-400">
          <div className="flex items-center gap-2">
            <Warning size={16} className="shrink-0 text-orange-500 animate-pulse" />
            <strong className="uppercase font-black text-orange-500 tracking-wider whitespace-nowrap">
              Aviso de Portfólio / Não-Oficial:
            </strong>
          </div>
          <p className="font-medium tracking-wide text-center sm:text-left text-zinc-300">
            Este site é um projeto demonstrativo de portfólio acadêmico para fins de estudo de design e tecnologia. Não possui vínculos oficiais ou comerciais com a CazéTV (Live Mode) ou com a FIFA. Marcas e direitos de imagem pertencem aos seus respectivos titulares.
          </p>
        </div>
      </div>

      {/* Curtain Loading Animation */}
      <CurtainLoader />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection
        fixtures={fixtures}
        stageTranslations={stageTranslations}
        teamIsoCodes={teamIsoCodes}
      />

      {/* Navigation Tabs */}
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center justify-center border-b border-zinc-900">
          <div className="flex gap-8">
            <button
              onClick={() => handleTabChange("jogos")}
              className={`pb-4 text-sm font-black uppercase tracking-wider transition duration-200 border-b-2 ${
                activeTab === "jogos"
                  ? "border-orange-500 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Calendário de Jogos
            </button>
            <button
              onClick={() => handleTabChange("grupos")}
              className={`pb-4 text-sm font-black uppercase tracking-wider transition duration-200 border-b-2 ${
                activeTab === "grupos"
                  ? "border-orange-500 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Tabela de Grupos
            </button>
            <button
              onClick={() => handleTabChange("chaveamento")}
              className={`pb-4 text-sm font-black uppercase tracking-wider transition duration-200 border-b-2 ${
                activeTab === "chaveamento"
                  ? "border-orange-500 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Chaveamento Mata-Mata
            </button>
          </div>
        </div>
      </div>

      {/* Main Content & Filters */}
      <section className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8 flex-grow">
        {activeTab === "jogos" ? (
          <>
            {/* Filters */}
            <FixturesFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedStage={selectedStage}
              setSelectedStage={setSelectedStage}
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
              groups={groups}
              stageTranslations={stageTranslations}
              handleClearFilters={handleClearFilters}
            />

            {/* Match Fixtures List */}
            <div className="mt-8">
              {filteredFixtures.length === 0 ? (
                <div className="mt-12 text-center rounded-xl border border-dashed border-zinc-800 py-16 px-4">
                  <span className="text-3xl">📭</span>
                  <h3 className="mt-4 text-lg font-bold text-white">Nenhum confronto correspondente</h3>
                  <p className="mt-2 text-sm text-zinc-400">Experimente alterar as opções de filtros ou a busca.</p>
                  <button
                    onClick={handleClearFilters}
                    className="mt-6 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500"
                  >
                    Limpar Todos os Filtros
                  </button>
                </div>
              ) : (
                <>
                  <div className="mt-6 flex flex-col gap-1">
                    {Object.entries(fixturesByDate).map(([dateStr, matchesForDate]) => (
                      <div key={dateStr} className="mb-10 last:mb-0">
                        <div className="flex items-center gap-2 mb-5 border-b border-zinc-900 pb-3">
                          <Calendar size={14} className="text-orange-500 shadow-[0_0_8px_rgba(234,88,12,0.4)] shrink-0 animate-pulse" />
                          <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-400">
                            {formatGroupHeaderDate(dateStr)}
                          </h3>
                          <span className="text-[9px] font-bold text-zinc-600 uppercase ml-auto">
                            {matchesForDate.length} {matchesForDate.length === 1 ? "partida" : "partidas"}
                          </span>
                        </div>
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                          {matchesForDate.map((fixture) => (
                            <FixtureCard
                              key={fixture.matchNumber}
                              fixture={fixture}
                              stageTranslations={stageTranslations}
                              teamIsoCodes={teamIsoCodes}
                              onShowDetails={handleShowDetails}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Lazy Loading Trigger element */}
                  {visibleCount < filteredFixtures.length && (
                    <div ref={loaderRef} className="flex flex-col items-center justify-center py-12 mt-6">
                      {isLoadingMore ? (
                        <div className="flex flex-col items-center gap-3">
                          <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-800 border-t-orange-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                            Carregando mais partidas...
                          </span>
                        </div>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                          Carregando mais...
                        </span>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        ) : activeTab === "grupos" ? (
          <div className="mt-4">
            <GroupTables teamIsoCodes={teamIsoCodes} />
          </div>
        ) : (
          <div className="mt-4">
            <Bracket fixtures={fixtures} teamIsoCodes={teamIsoCodes} onShowDetails={handleShowDetails} />
          </div>
        )}

        {/* Dynamic Details Modal */}
        {(() => {
          if (!renderedMatch) return null;
          const selectedMatch = renderedMatch;

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

          const renderModalFlag = (teamName: string) => {
            if (!teamName || teamName.startsWith("Vencedor") || teamName.startsWith("Perdedor") || teamName.startsWith("1º") || teamName.startsWith("2º") || teamName.startsWith("3º")) {
              return (
                <div className="relative w-16 h-10 bg-zinc-900 rounded-lg shrink-0 overflow-hidden border border-zinc-800">
                  <Image src="/placeholder.svg" alt="" fill className="object-cover opacity-30" />
                </div>
              );
            }
            
            let flagUrl = "";
            if (teamName === "Inglaterra") {
              flagUrl = "https://flagcdn.com/gb-eng.svg";
            } else if (teamName === "Escócia") {
              flagUrl = "https://flagcdn.com/gb-sct.svg";
            } else {
              const iso = teamIsoCodes[teamName];
              if (iso) {
                flagUrl = `https://flagcdn.com/${iso.toLowerCase()}.svg`;
              }
            }

            if (flagUrl) {
              return (
                <div className="relative w-16 h-10 rounded-lg shrink-0 overflow-hidden border border-zinc-800 bg-zinc-900 shadow-md">
                  <Image
                    src={flagUrl}
                    alt={teamName}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              );
            }

            return (
              <div className="relative w-16 h-10 bg-zinc-900 rounded-lg shrink-0 overflow-hidden border border-zinc-800">
                <Image src="/placeholder.svg" alt="" fill className="object-cover opacity-30" />
              </div>
            );
          };

          const homeResolved = selectedMatch.homeTeam;
          const awayResolved = selectedMatch.awayTeam;
          const hasScore = typeof selectedMatch.homeScore === "number" && typeof selectedMatch.awayScore === "number";

          return (
            <div 
              onClick={handleCloseModal}
              className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto transition-all duration-200 ease-out ${
                isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-lg rounded-3xl bg-zinc-950 border border-zinc-900 p-6 md:p-8 shadow-2xl text-zinc-100 my-auto transition-all duration-200 ease-out ${
                  isModalOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
                }`}
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 rounded-full p-2 text-zinc-500 hover:text-white hover:bg-zinc-900 transition duration-200 border-0 outline-none cursor-pointer"
                >
                  <X size={18} />
                </button>

                {/* Match info header */}
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
                  <span>Jogo {selectedMatch.matchNumber}</span>
                  <span>•</span>
                  <span className="text-orange-500">
                    {stageTranslations[selectedMatch.stage]} {selectedMatch.group ? `• Grupo ${selectedMatch.group}` : ""}
                  </span>
                </div>

                {/* Core Match Row */}
                <div className="grid grid-cols-3 items-center gap-2 py-4 border-b border-zinc-900/60 pb-6 mb-6">
                  <div className="flex flex-col items-center text-center gap-2">
                    {renderModalFlag(selectedMatch.homeTeam)}
                    <span className="text-xs font-black text-white">{homeResolved || "A Definir"}</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="font-mono text-3xl md:text-4xl font-black text-white tracking-tighter">
                      {hasScore ? (
                        <>
                          <span>{selectedMatch.homeScore}</span>
                          <span className="text-zinc-800 text-xl mx-1.5">:</span>
                          <span>{selectedMatch.awayScore}</span>
                        </>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 px-3 py-1.5 bg-zinc-900/80 rounded-xl">VS</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center gap-2">
                    {renderModalFlag(selectedMatch.awayTeam)}
                    <span className="text-xs font-black text-white">{awayResolved || "A Definir"}</span>
                  </div>
                </div>

                {/* Events Timeline */}
                {selectedMatch.events && selectedMatch.events.length > 0 && (
                  <div className="mb-6 flex flex-col gap-2.5">
                    <h4 className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-1">Acontecimentos</h4>
                    {selectedMatch.events.map((event, idx) => {
                      const isHome = event.time === "casa";
                      return (
                        <div key={idx} className={`flex items-center gap-2 text-xs ${isHome ? "justify-start text-left" : "justify-end text-right"}`}>
                          {isHome && (
                            <>
                              {event.tipo === "gol" && <span className="text-sm">⚽</span>}
                              {event.tipo === "gol_contra" && <span className="text-sm text-red-500">⚽</span>}
                              {event.tipo === "cartao_amarelo" && <span className="text-xs text-yellow-500">🟨</span>}
                              {event.tipo === "cartao_vermelho" && <span className="text-xs text-red-500">🟥</span>}
                              <span className="text-zinc-300 font-semibold">
                                {event.autor} <span className="text-zinc-550 text-[10px]">({event.minuto}){event.tipo === "gol_contra" && " (GC)"}</span>
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

                {/* Match Details Extra info */}
                <div className="flex flex-col gap-2.5 text-xs text-zinc-400 border-t border-zinc-900/60 pt-6">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-zinc-500 font-medium">Horário da Partida</span>
                    <span className="font-bold text-zinc-200">{formatMatchDateTime(selectedMatch.kickoffUtc)}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-zinc-500 font-medium">Estádio</span>
                    <span className="font-bold text-zinc-200">{selectedMatch.stadium}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-zinc-500 font-medium">Cidade Sede</span>
                    <span className="font-bold text-zinc-200 uppercase tracking-wide text-[10px]">{selectedMatch.hostCity.replace("-", " ")}</span>
                  </div>
                </div>

                {/* Watch CTA Button */}
                {selectedMatch.matchUrl && (
                  <div className="mt-8">
                    <Link
                      href={selectedMatch.matchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex w-full items-center justify-center gap-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-white transition-colors duration-200 outline-none border-0 select-none text-center"
                    >
                      Assistir Transmissão Oficial
                      <ArrowSquareOut size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
