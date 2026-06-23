"use client";

import { useState, useEffect, useRef } from "react";
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
import { Calendar } from "@phosphor-icons/react";

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

  // Infinite Scroll / Lazy Load states
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const { fixtures } = fixturesData;

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
          }, 700);
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
      {/* Disclaimer Banner */}
      <div className="w-full bg-zinc-900/80 border-b border-zinc-800 py-2.5 px-4 text-center">
        <p className="text-[11px] text-zinc-400 font-medium tracking-wide">
          <span className="font-extrabold text-orange-500 uppercase mr-1.5">Aviso Legal:</span>
          Este site é um projeto demonstrativo de portfólio para fins de estudo de design e desenvolvimento. Todos os direitos sobre as marcas da CazéTV pertencem à CazéTV, e sobre o torneio pertencem à FIFA. Este projeto não possui vínculos comerciais ou oficiais com nenhuma das entidades.
        </p>
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
              onClick={() => setActiveTab("jogos")}
              className={`pb-4 text-sm font-black uppercase tracking-wider transition duration-200 border-b-2 ${
                activeTab === "jogos"
                  ? "border-orange-500 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Calendário de Jogos
            </button>
            <button
              onClick={() => setActiveTab("grupos")}
              className={`pb-4 text-sm font-black uppercase tracking-wider transition duration-200 border-b-2 ${
                activeTab === "grupos"
                  ? "border-orange-500 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Tabela de Grupos
            </button>
            <button
              onClick={() => setActiveTab("chaveamento")}
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
            <Bracket fixtures={fixtures} teamIsoCodes={teamIsoCodes} />
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
