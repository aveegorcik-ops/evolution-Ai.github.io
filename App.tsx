import React from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { StatsChart } from './components/StatsChart';
import { ChatWidget } from './components/ChatWidget';
import { Terminal, Github } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-lg border-b border-slate-800 bg-slate-950/80">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-indigo-400">
            <Terminal className="w-6 h-6" />
            <span>AI History</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#timeline" className="hover:text-indigo-400 transition-colors">Хронология</a>
            <a href="#stats" className="hover:text-indigo-400 transition-colors">Статистика</a>
          </nav>
          <div className="flex items-center gap-4">
             {/* Optional: Add external link or secondary action */}
             <div className="text-xs text-slate-500 bg-slate-900 py-1 px-3 rounded-full border border-slate-800">
               v1.0.0
             </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <Timeline />
        <div id="stats">
            <StatsChart />
        </div>
        
        {/* Info Section */}
        <section className="py-20 bg-slate-950 border-t border-slate-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-white mb-6">Будущее уже здесь</h2>
                <p className="max-w-2xl mx-auto text-slate-400">
                    История искусственного интеллекта пишется прямо сейчас. 
                    Каждый день появляются новые модели, алгоритмы и применения. 
                    Используйте нашего AI-ассистента (справа внизу), чтобы узнать последние новости 
                    или уточнить детали исторических событий.
                </p>
            </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Эволюция Разума. Создано с помощью React & Gemini.</p>
          <div className="flex gap-4 mt-4 md:mt-0 items-center">
            <span className="hover:text-slate-300 cursor-pointer">О проекте</span>
            <Github className="w-4 h-4 hover:text-slate-300 cursor-pointer" />
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;
