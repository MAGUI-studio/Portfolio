import { MagnifyingGlass, X, CaretDown } from "@phosphor-icons/react";

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
    <div className="rounded-2xl bg-zinc-900/40 border border-zinc-900 p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        {/* Search Input */}
        <div className="relative flex-grow">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-zinc-500">
            <MagnifyingGlass size={16} />
          </div>
          <input
            type="text"
            placeholder="Buscar por seleção, estádio ou cidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl bg-zinc-950/90 py-2.5 pl-10 pr-4 text-sm text-zinc-200 placeholder-zinc-500 border border-zinc-900 focus:border-zinc-800 focus:outline-none transition duration-200"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap gap-2.5">
          {/* Stage Dropdown */}
          <div className="relative flex items-center rounded-xl bg-zinc-950/90 border border-zinc-900 pr-8 pl-3 py-2.5">
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="appearance-none bg-transparent text-xs font-black uppercase tracking-wider text-zinc-400 outline-none cursor-pointer focus:outline-none pr-2"
            >
              <option value="all" className="bg-zinc-950">Todas as Fases</option>
              {Object.entries(stageTranslations).map(([key, label]) => (
                <option key={key} value={key} className="bg-zinc-950 text-zinc-300 font-sans normal-case font-normal">
                  {label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 inset-y-0 flex items-center text-zinc-500">
              <CaretDown size={12} weight="bold" />
            </div>
          </div>

          {/* Group Dropdown */}
          <div className="relative flex items-center rounded-xl bg-zinc-950/90 border border-zinc-900 pr-8 pl-3 py-2.5">
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="appearance-none bg-transparent text-xs font-black uppercase tracking-wider text-zinc-400 outline-none cursor-pointer focus:outline-none pr-2"
            >
              <option value="all" className="bg-zinc-950">Todos os Grupos</option>
              {groups.map((group) => (
                <option key={group} value={group} className="bg-zinc-950 text-zinc-300 font-sans normal-case font-normal">
                  Grupo {group}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 inset-y-0 flex items-center text-zinc-500">
              <CaretDown size={12} weight="bold" />
            </div>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="flex items-center gap-1.5 rounded-xl bg-zinc-900/60 px-3.5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-orange-550 border border-zinc-850 hover:bg-zinc-900 transition duration-200"
            >
              <X size={13} />
              Limpar Filtros
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
