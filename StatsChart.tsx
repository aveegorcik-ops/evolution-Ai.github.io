import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PARAMETER_GROWTH } from '../constants';

export const StatsChart: React.FC = () => {
  return (
    <div className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Рост Вычислительной Сложности</h2>
          <p className="text-slate-400">Условный рост количества параметров в моделях ИИ (логарифмическая шкала)</p>
        </div>
        
        <div className="h-[400px] w-full bg-slate-800/30 p-4 rounded-xl border border-slate-700">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={PARAMETER_GROWTH}
              margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis 
                hide={false} 
                scale="log" 
                domain={['auto', 'auto']} 
                stroke="#94a3b8"
                tickFormatter={(value) => value.toExponential(0)}
                width={60}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#f1f5f9' }}
                itemStyle={{ color: '#818cf8' }}
                formatter={(value: number) => [value > 1000 ? `${(value/1000).toFixed(0)}K+` : value, "Усл. ед. сложности"]}
                labelFormatter={(label) => `Год: ${label}`}
              />
              <Area type="monotone" dataKey="value" stroke="#818cf8" fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-xs text-center text-slate-500 italic">
          *График демонстрирует общую тенденцию роста сложности нейросетей. Реальные значения параметров могут варьироваться.
        </p>
      </div>
    </div>
  );
};