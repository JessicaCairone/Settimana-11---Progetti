import { useState} from "react";
import Button from 'react-bootstrap/Button';
import './SearchBar.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSearchCity } from "../actions/weatherActions";

const SearchBar = () => {
const navigate = useNavigate();
const [search, setSearch] = useState('')
const [cities, setCities] = useState('') 
const dispatch = useDispatch();

    const handleSearch = () => {
     dispatch(setSearchCity(cities))
     dispatch(setSearchCity(search))
     navigate('/ResultsPage?cerca=' + search)

    }
    
    return (
<>
<h2 className="titolo text-dark text-center">Controlla il meteo nella tua città</h2>
<div className="searchBar">
<input type='text' name='search' value = {search} onChange= {(e) => (setSearch(e.target.value))} className='me-3 bar' ></input>
<Button onClick={handleSearch} variant="outline-light">Cerca</Button>
</div>
</>
    )
}

export default SearchBar; 