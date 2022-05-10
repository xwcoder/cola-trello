import React from 'react';
import Board from './components/Board';

export default function App() {
  return (
    <div className="h-[100%] bg-sky-700 overflow-hidden flex flex-col">
      <div className="h-44px text-light-300">
        I am menu
      </div>
      <div className="flex-1 relative">
        <Board />
      </div>
    </div>
  );
}
