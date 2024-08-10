import React from 'react';

const Quote: React.FC = () => {
  return (
    <div className="bg-slate-800 text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <blockquote className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
          "Blogging isn't just writing. It's igniting conversations that can change the world."
        </blockquote>
        <div className="flex items-center">
          <div className="w-16 h-1 bg-slate-300 mr-4"></div>
          <div>
            <p className="font-bold text-xl">Alex Chen</p>
            <p className="text-sm uppercase tracking-wide text-slate-300">Thought Leader | Digital Frontiers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;