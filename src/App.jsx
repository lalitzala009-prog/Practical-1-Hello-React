function App() {
  return (
    <div className="page">
      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>

      <main className="card">
        <div className="emoji">🚀</div>

        <p className="tag">MY FIRST REACT PROJECT</p>

        <h1>
          Hello <span>React!</span>
        </h1>

        <h2>Welcome to My First React Application</h2>

        <p className="description">
          I am learning React and building my first interactive
          user interface using JSX and functional components.
        </p>

        <div className="topics">
          <span>⚛️ React</span>
          <span>💻 JSX</span>
          <span>🎨 CSS</span>
          <span>🧩 Components</span>
        </div>

        <button
          className="welcome-button"
          onClick={() => alert("Congratulations! Your React app is working! 🎉")}
        >
          Let's Get Started ✨
        </button>
        </main>
    </div>
  );
}

export default App;

