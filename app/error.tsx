"use client";

function error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="grid place-items-center h-screen bg-gray-900">
      <div className="text-center">
        <p className="text-4xl font-bold text-white mb-2">{error.message}</p>
        <button
          className="px-4 py-2 bg-slate-400 hover:bg-slate-500 rounded-sm transition-colors duration-100"
          onClick={reset}
        >
          try again
        </button>
      </div>
    </div>
  );
}

export default error;
