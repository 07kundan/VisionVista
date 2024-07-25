import "./App.css";

function App() {
  return (
    <div className="h-screen flex items-center justify-center text-2xl text-emerald-600 font-bold">
      <div className="inline-flex items-end gap-2">
        <span className="">Under Progress </span>
        <div class="loading-dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
