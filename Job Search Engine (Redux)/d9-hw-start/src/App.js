import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritesPage from './components/FavouritesPage';
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
