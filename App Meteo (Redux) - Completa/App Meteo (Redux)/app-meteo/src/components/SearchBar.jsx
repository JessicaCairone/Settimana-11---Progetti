import { useState} from "react";
import Button from 'react-bootstrap/Button';
import './SearchBar.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchCity } from "../actions/weatherActions";

const SearchBar = () => {
const navigate = useNavigate();
// DEFINIZIONE DEGLI STATI REACT ATTRAVERSO L'HOOK USESTATE

const cityName = useSelector((state) => state.search.searchCity)

const dispatch = useDispatch();

// FUNZIONE CHIAMATA DAL BOTTONE DI RICERCA
    const handleSearch = () => {
     //AZIONE CHE TRIGGERA IL RELATIVO REDUCER "SEARCHREDUCER" AFFINCHE' AGGIORNI GLI STATI "CITIES" E "SEARCH" 
 
     dispatch(setSearchCity(cityName))
    // LA FUNZIONE REINDIRIZZA ALLA PAGINA "RESULTSPAGE" PASSANDO LA QUERY DI RICERCA COME PARAMETRO NELL'URL
     navigate('/ResultsPage?cerca=' + cityName)

    }
    
    return (
<>
<h2 className="titolo text-dark text-center">Controlla il meteo nella tua città</h2>
<div className="container-fluid d-flex justify-content-center align-items-center mt-5">
    <div>
        {/* CAMPO DI INPUT PER LA RICERCA; IL VALORE DEL CAMPO E' LEGATO ALLO STATO "SEARCH"*/}
<input type='text' name='search' value = {cityName} onChange= {(e) => dispatch(setSearchCity(e.target.value))} className='me-3 bar' ></input>
</div>
<div>
    {/* BOTTONE CHE AL CLICK CHIAMA LA FUNZIONE "HANDLESEARCH" */}
<Button onClick={handleSearch} variant="outline-light">Cerca</Button>
</div>
</div>
</>
    )
}

export default SearchBar; 