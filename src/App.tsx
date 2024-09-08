import ReadDocs from "./components/ReadDocs/ReadDocs";
import Topnav from "./components/Topnav/Topnav";

// src/App.tsx
function App() {
  return (
    <>
      <Topnav name="Chris" />
      <ReadDocs message="Click on the Vite and React logos to learn more.......... " />
    </>
  );
}

export default App;
