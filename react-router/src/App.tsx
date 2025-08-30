import { Link, Route, Routes } from "react-router-dom";
import AllItems from "./pages/AllItems";
import Search from "./pages/Search";
import { ItemsProvider } from "./ItemsContext";

function App() {
  return (
    <ItemsProvider>
      <header>
        <h1>router denemesi</h1>
        <ul>
          <li>
            <Link to="/all">Tüm itemler</Link>
          </li>
          <li>
            <Link to="/search">Ara</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/all" element={<AllItems />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </ItemsProvider>
  );
}

export default App;
