import { MagnifyingGlassPlus } from '@phosphor-icons/react';

export function CreatAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient mt-8 self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu duo
          </strong>
          <span className="text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <button className="px-4 py-3 bg-violet-500 hover:bg-violet-600 hover:transition-colors text-white rounded-md flex items-center justify-center gap-3">
          <MagnifyingGlassPlus size={24} /> Publicar anúncio
        </button>
      </div>
    </div>
  );
}
