import Sidebar from "./components/Sidebar";
import HomePage from "./components/pages/HomePage";
import FavoritesPage from "./components/pages/FavoritesPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </div>
  );
}
export default App;
