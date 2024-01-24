import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { setDailyForecast, setWeekForecast } from '../actions/weatherActions';
import { useDispatch, useSelector } from "react-redux";


const ResultsPage = () => {

    const [search, setSearch] = useState('');
    const [cities, setCities] = useState([]) ;
    const location = useLocation();
    const searchTerms = new URLSearchParams(location.search).get('cerca');
    console.log(useSelector(state => state))
    const cityName = useSelector(state => state.search.searchCity) || ''
   
    const dispatch = useDispatch()
    const [weekWeather, setWeekWeather] = useState();

    const getCities = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerms}&appid=bac2106e5482387dba84ee5d617c21ec`;
        const res = await fetch(url);
        const data = await res.json();
        setCities(data);   
        dispatch(setDailyForecast(data)) 
        console.log(data)
    }

    const getWeekWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerms}&appid=bac2106e5482387dba84ee5d617c21ec&units=metric`)
            if(response.ok) {
            const data = await response.json();
            dispatch(setWeekForecast(data));
            setWeekWeather(data);
            console.log(data);
          }
      }

    useEffect(() => {
        if (searchTerms?.length > 2 && search?.length > 2) 
       setSearch(searchTerms)
       getCities()
       getWeekWeather();
     }, [search])
    

    return (
    <div className="d-flex justify-content-center">
     
        {cities && (
         <Link to={`/CityWeather/${searchTerms}`} style={{textDecoration:'none', marginTop:'10%'}}>
         <Card style={{ width: '13rem', height:'18rem'}} className="border-primary">
               <Card.Img variant="top" src="../src/assets/meteo.png" />
               <Card.Body>
                 <Card.Title className="fw-bold">{cityName}</Card.Title>
             {/* <Card.Text className="fw-bold"> Paese: {cities.sys.country}</Card.Text> */}
               </Card.Body>
             </Card>
             </Link>
        )
        }
        
    
        </div>

    )
}

export default ResultsPage;
