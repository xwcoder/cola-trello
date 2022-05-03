import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <React.StrictMode>
      <div
        className="text-center"
      >
        <header
          className="m-4"
        >
          <p>
            Hello Vite + React!
          </p>
          <p>
            <button
              type="button"
              className="border border-gray-400 rounded px-2 py-2 mt-4 hover:(bg-teal-400 border-teal-400)"
              onClick={() => setCount(count + 1)}
            >
              count is:
              {count}
            </button>
          </p>
        </header>
      </div>
    </React.StrictMode>
  );
}
