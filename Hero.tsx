import React from 'react';
import { BrainCircuit, Cpu, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32 bg-slate-900">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] opacity-10 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-950"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-indigo-400 ring-1 ring-white/10 hover:ring-white/20">
              От Тьюринга до Gemini <span className="font-semibold text-indigo-400">#AIHistory</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
            Эволюция Разума
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Исследуйте захватывающий путь развития искусственного интеллекта: от первых теоретических концепций до сверхмощных генеративных моделей, меняющих наш мир сегодня.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <div className="flex gap-4">
                <BrainCircuit className="w-8 h-8 text-indigo-500" />
                <Cpu className="w-8 h-8 text-purple-500" />
                <Sparkles className="w-8 h-8 text-teal-500" />
              </div>
              <span className="text-xs uppercase tracking-widest mt-2">Технологии будущего</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
