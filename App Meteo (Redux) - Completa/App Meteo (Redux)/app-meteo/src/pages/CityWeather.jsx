import './CityWeather.css';
import { useSelector } from "react-redux";

const CityWeather = () => {

const {dailyWeatherData, weekWeatherData} = useSelector (state => ({
  dailyWeatherData: state.DailyForecast.dailyWeatherData,
  weekWeatherData: state.WeekForecast.weekWeatherData
}));


//SALVATAGGIO IN DIVERSE COSTANTI DI PORZIONI DI STATO DELLO STORE REDUX RELATIVE AD UNO SPECIFICO DATO METEO
const cloudsAmount = dailyWeatherData.clouds.all
const weather = dailyWeatherData.weather
const windSpeed = dailyWeatherData.wind.speed
const main = dailyWeatherData.main
const humidity = dailyWeatherData.main.humidity
const maxTemp = main.temp_max
const minTemp = main.temp_min
const feelLike = main.feels_like
const temp = dailyWeatherData.main.temp
const location = dailyWeatherData.name

//LA FUNZIONE CALCOLA UNA MEDIA DELLE TEMPERATURE DI OGNI GIORNO, E VIENE RICHIAMATA NEL MAP
 /*const calculateTemperatureAverage = (item) => {
 const maxTemp = item.main.temp_max
const minTemp = item.main.temp_min
  return (maxTemp + minTemp) / 2
const temp = dailyWeatherData.main.temp
return (temp += temp / 8) 
} */


//RENDERIZZAZIONE DELLE PREVISIONI METEO GIORNALIERE E SETTIMANALI RELATIVE ALLA CITTA' CERCATA; LA RENDERIZZAZIONE DI CIASCUN DATO PASSA ATTRAVERSO
//UN CONTROLLO PER IL QUALE SE IL DATO NON ESISTE VERRA' RESTITUITO "NULL", ALTRIMENTI VERRA' APPARIRA' A SCHERMO
return (
  <>
  <div className="ms-5 mt-4 text-white"><span>Location: <span className="fw-bold">{location}</span></span></div>
 <div className='container d-flex justify-content-center'>
  <div className="row text-white mt-5 ">
  <div className="col-6 text-center box1 pt-2 pb-4">
   <img src= {`../src/icons/${weather[0].icon}.png`} alt='weatherIcon' style={{width:'100px'}}/>
  <h2 className="fs-1"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-thermometer-high" viewBox="0 0 16 16">
    <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415"/>
    <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
  </svg>{temp}°C</h2>
    <h3>{weather[0].main}</h3>
  <span>Feels like {feelLike}°,</span>

  <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-up" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
  </svg> {maxTemp}°,</span>
  
 <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-down" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
  </svg>{minTemp}°,</span>
  </div>

  <div className="col-6 box2 pt-5 text-center">
  <h3><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-moisture" viewBox="0 0 16 16">
    <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a29 29 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a29 29 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001zm0 0-.364-.343zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267"/>
  </svg> {humidity}</h3>

  <h3><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-wind" viewBox="0 0 16 16">
    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
  </svg> {windSpeed} Km/h</h3>

 <h3><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-clouds" viewBox="0 0 16 16">
    <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.5 3.5 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.6 5.6 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5"/>
    <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.5 4.5 0 0 1 7 5m3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492z"/>
</svg> {cloudsAmount} %</h3> 
  </div>
  </div>
</div> 


<div className="mt-5 text-center">
  <h2 className="text-dark">Previsioni per il resto della settimana:</h2> 
</div>
<div className='container'>
  <div className="d-flex row mt-4 mb-5" >
    {weekWeatherData.slice(0, 56).map((item, index) => {
    /*  const temperatureAvg = calculateTemperatureAverage(item)
      const tempAvg = temperatureAvg.toFixed(2);*/

      return (
        <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-2" style={{ minHeight: '100px', marginBottom:'40px' }}>
          <img src={`../src/icons/${item.weather[0].icon}.png`} style={{ width: '60px' }} />
          <h3>{item.main.temp}°C</h3>
          <h5>{item.weather[0].main}</h5> 
    <div>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="white" className="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
              </svg>{item.main.temp_min}°C, 
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="white" className="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
              </svg>{item.main.temp_max}°C
            </span>
          </div>             
      </div> 
      ); 
    })}
  </div>
</div>
</>
  )
}

export default CityWeather;


  