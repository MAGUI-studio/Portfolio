import { MagnifyingGlass, Funnel, Trophy, X } from "@phosphor-icons/react";

interface FixturesFilterProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  selectedStage: string;
  setSelectedStage: (val: string) => void;
  selectedGroup: string;
  setSelectedGroup: (val: string) => void;
  groups: string[];
  stageTranslations: Record<string, string>;
  handleClearFilters: () => void;
}

export default function FixturesFilter({
  searchTerm,
  setSearchTerm,
  selectedStage,
  setSelectedStage,
  selectedGroup,
  setSelectedGroup,
  groups,
  stageTranslations,
  handleClearFilters,
}: FixturesFilterProps) {
  const hasActiveFilters = searchTerm !== "" || selectedStage !== "all" || selectedGroup !== "all";

  return (
    <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search Input */}
        <div className="relative flex-grow">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
            <MagnifyingGlass size={18} />
          </div>
          <input
            type="text"
            placeholder="Busque por seleção, estádio ou cidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg bg-zinc-950 py-2.5 pl-10 pr-4 text-zinc-200 placeholder-zinc-500 border border-zinc-800 focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/10 transition"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap gap-3">
          {/* Stage Dropdown */}
          <div className="flex items-center gap-2 rounded-lg bg-zinc-950 px-3 py-1.5 border border-zinc-800">
            <Funnel size={16} className="text-orange-500" />
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="bg-transparent text-sm text-zinc-200 outline-none cursor-pointer focus:outline-none"
            >
              <option value="all" className="bg-zinc-900">Todas as Fases</option>
              {Object.entries(stageTranslations).map(([key, label]) => (
                <option key={key} value={key} className="bg-zinc-900">
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Group Dropdown */}
          <div className="flex items-center gap-2 rounded-lg bg-zinc-950 px-3 py-1.5 border border-zinc-800">
            <Trophy size={16} className="text-orange-500" />
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="bg-transparent text-sm text-zinc-200 outline-none cursor-pointer focus:outline-none"
            >
              <option value="all" className="bg-zinc-900">Todos os Grupos</option>
              {groups.map((group) => (
                <option key={group} value={group} className="bg-zinc-900">
                  Grupo {group}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="flex items-center gap-1.5 rounded-lg bg-zinc-800/80 px-3 py-1.5 text-xs font-bold text-orange-500 border border-orange-500/20 hover:bg-zinc-800 transition"
            >
              <X size={14} />
              Limpar Filtros
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
