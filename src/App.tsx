import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="right-content">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
