import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="m-auto flex flex-col items-center gap-4">
        <button
          className="z-1 text-center inline-block rounded-4xl bg-gray-100 px-4 py-2 text-sm/6 font-semibold text-black hover:bg-gray-100/80"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
