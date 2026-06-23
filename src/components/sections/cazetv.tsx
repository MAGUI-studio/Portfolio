"use client";

import { useState } from "react";
import { X } from "@phosphor-icons/react";
import { cazetvDisplay, cazetvText } from "../cazetv/fonts";
import fixturesData from "../cazetv/world-cup-2026-fixtures.json";

// Import modular components
import CurtainLoader from "../cazetv/curtain-loader";
import Header from "../cazetv/header";
import HeroSection from "../cazetv/hero-section";
import FixturesFilter from "../cazetv/fixtures-filter";
import FixtureCard from "../cazetv/fixture-card";
import Footer from "../cazetv/footer";

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
  "Países Baixos": "NL",
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
  "third-place-playoff": "Disputa de 3º Lugar",
  "final": "Grande Final"
};

export default function CazeTVLanding() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStage, setSelectedStage] = useState("all");
  const [selectedGroup, setSelectedGroup] = useState("all");

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

      {/* Main Content & Filters */}
      <section className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8 flex-grow">
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
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">
              Confrontos Encontrados ({filteredFixtures.length})
            </h2>
          </div>

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
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredFixtures.map((fixture) => (
                <FixtureCard
                  key={fixture.matchNumber}
                  fixture={fixture}
                  stageTranslations={stageTranslations}
                  teamIsoCodes={teamIsoCodes}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
