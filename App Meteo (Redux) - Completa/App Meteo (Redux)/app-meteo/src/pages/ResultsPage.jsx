import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { setDailyForecast, setWeekForecast } from '../actions/weatherActions';
import { useDispatch, useSelector } from "react-redux";


const ResultsPage = () => {

//SALVATAGGIO NELLA COSTANTE "CITYNAME" DI UNA PORZIONE DELLO STATO DELLO STORE REDUX CHE, IN QUESTO CASO,
//EQUIVALE AL NOME DELLA CITTA' CERCATA
    const cityName = useSelector(state => state.search.searchCity)
    const dailyForecast = useSelector((state) => state.DailyForecast.dailyWeatherData)
    
    const dispatch = useDispatch()
    
  //FETCH PER OTTENERE LE INFORMAZIONI SUL METEO GIORNALIERO NELL CITTA' SCELTA IMPLEMENTATA IN REDUX
    const getCities = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bac2106e5482387dba84ee5d617c21ec&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
    
        //AZIONE CHE TRIGGERA IL RELATIVO REDUCER RICEVENTE COME PARAMETRO I DATI DELLE PREVISIONI SETTIMANALI IN MODO DA SETTARLI
        //NELLO STATO REDUX AGGIORNANDOLO
        dispatch(setDailyForecast(data)) 
        console.log(data)
    }
//FETCH PER OTTENERE LE INFORMAZIONI SUL METEO SETTIMANALE NELLA CITTA' SCELTA IMPLEMENTATA IN REDUX
    const getWeekWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=bac2106e5482387dba84ee5d617c21ec&units=metric`)
            if(response.ok) {
            const data = await response.json();
            dispatch(setWeekForecast(data.list));
            console.log(data);
          }
      }
//ALL'AGGIORNARSI DELLA QUERY DI RICERCA O DELLA CITTA' NELLO STORE L'HOOK USEEFFECT CHIAMA LE FUNZIONI PER OTTENERE I DATI SULLE PREVISIONI METEO
    useEffect(() => {
        if (cityName?.length > 2)     
       getCities()
       getWeekWeather();
     }, [cityName])
    
//RENDERIZZAZIONE DELLA CARD DI UNA SINGOLA CITTA'; CLICCANDO SULLA CARD SI VIENE REINDIRIZZATI ALLA PAGINA "CITYWEATHER" 
//IN CUI VENGONO MOSTRATE TUTTE LE INFORMAZIONI RIGUARDO IL METEO GIORNALIERO E SETTIMANALE
    return (
   <>
      { dailyForecast && (
              <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', width:'100%' }}>
              { dailyForecast && (
                <div className="col-2 col-xs-2 col-md-2 col-lg-2">
                  <Link to={`/CityWeather/${cityName}`} style={{ textDecoration: 'none' }}>
                    <Card className="border-light mb-4" style={{ width: '13rem', height:'18rem'}}>
                      <Card.Img variant="top" src="../src/assets/meteo.png" />
                      <Card.Body>
                        <Card.Title className="fw-bold text-center">{cityName}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              )}
            </div>        
        )
        }
       
    </>
    )
}

export default ResultsPage;
