// src/App.tsx
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <h1
          style={{
            flex: 1,
          }}
        >
          Chris
        </h1>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            /* flex: 1; */
            listStyle: "none",
            alignItems: "center",
          }}
        >
          <li style={{padding: "0 2em"}}>About</li>
          <li style={{padding: "0 2em"}}>Resume</li>
          <li style={{padding: "0 2em"}}>Projects</li>
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
