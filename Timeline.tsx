import React from 'react';
import { TIMELINE_EVENTS } from '../constants';
import { TimelineEvent } from '../types';

const EventCard: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-indigo-500 shadow-xl w-8 h-8 rounded-full border-4 border-slate-900">
        <div className="mx-auto font-semibold text-lg text-white"></div>
      </div>
      <div className="order-1 bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-xl w-5/12 px-6 py-4 border border-slate-700 hover:border-indigo-500/50 transition-colors duration-300">
        <h3 className="mb-1 font-bold text-white text-xl flex items-center gap-2">
          <span className="text-indigo-400">{event.year}</span>
          <span>{event.title}</span>
        </h3>
        <p className="text-sm leading-snug tracking-wide text-slate-300 text-opacity-100">
          {event.description}
        </p>
        <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full bg-opacity-20 
          ${event.category === 'winter' ? 'bg-blue-500 text-blue-300' : 
            event.category === 'boom' ? 'bg-green-500 text-green-300' : 
            event.category === 'modern' ? 'bg-purple-500 text-purple-300' : 
            'bg-slate-500 text-slate-300'}`}>
          {event.category.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export const Timeline: React.FC = () => {
  return (
    <div className="py-16 bg-slate-950" id="timeline">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Хронология событий</h2>
        <div className="relative wrap overflow-hidden p-4 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-indigo-500 h-full border" style={{ left: '50%' }}></div>
          {TIMELINE_EVENTS.map((event, index) => (
            <EventCard key={event.year} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
