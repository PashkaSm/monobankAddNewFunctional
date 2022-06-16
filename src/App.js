import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/Header"
import Sidebar from "./components/layout/sidebarMain/Sidebar"
import Main from "./pages/Main";
import Forbidden from "./pages/Forbidden";

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          {/* Компонента хедера */}
          <Header /> 
          {/* Компенента сайтбара */}
          <Sidebar />
          {/* Контейнер в якому буде мінятися контент коли адреса https://monobank/ буде рендерити 
            компонента Main, а решта адрес буде рендееретися компонента Forbidden
          */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/*" element={<Forbidden />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
