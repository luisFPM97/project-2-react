import { useState } from 'react'
import WeatherMap from './WeatherMap'

const WeatherCart = ({weather, temp, setInputValueCountry}) => {
    const [isCelsius, setIsCelsius] = useState(true);

    const handleClickTemp = ()=>{
        setIsCelsius(!isCelsius)   
    }
    const handleSubmit = e => {
        e.preventDefault();
        setInputValueCountry(e.target.inputValueCountry.value.trim());   
    }

    // Función para formatear hora desde timestamp
    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    }

  return (
    <>
        <div className="content__input">
            <form onSubmit={handleSubmit} className='content__form'>
                <input type="text" id='inputValueCountry' className='input' placeholder='Buscar ciudad...'/>            
                <button className='form__btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </button>
            </form>
        </div>
        
        <article className='container__weather'>
            <header className='weather__header'>
                <div className="header-top">
                    <h1 className='weather__title'>
                        <svg className="weather-icon-title" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.93 4.93 1.41 1.41"></path>
                            <path d="m17.66 17.66 1.41 1.41"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.34 17.66-1.41 1.41"></path>
                            <path d="m19.07 4.93-1.41 1.41"></path>
                            <circle cx="12" cy="12" r="4"></circle>
                        </svg>
                        Clima Actual
                    </h1>
                </div>
                <h2 className='weather__subtitle'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {weather?.name}, {weather?.sys.country}
                </h2>
            </header>   
            
            {/* Temperatura Principal */}
            <section className='weather__main-temp'>
                <div className='main-temp-content'>
                    <img 
                        className="weather-icon-main"
                        src={weather ? `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png` : ""} 
                        alt="Clima" 
                    />
                    <div className='temp-display'>
                        <h2 className='weather__temp'>
                            { isCelsius ? `${(weather?.main.temp-273.15).toFixed(1)}°` : `${(((weather?.main.temp-273.15)*9)/5 + 32).toFixed(1)}°`}
                        </h2>
                        <div className='temp-unit-toggle'>
                            <button 
                                className={`unit-btn ${isCelsius ? 'active' : ''}`} 
                                onClick={handleClickTemp}
                            >
                                °C
                            </button>
                            <button 
                                className={`unit-btn ${!isCelsius ? 'active' : ''}`} 
                                onClick={handleClickTemp}
                            >
                                °F
                            </button>
                        </div>
                    </div>
                </div>
                <h3 className='weather__description'>{weather?.weather[0].description}</h3>
                <p className='feels-like'>
                    Sensación térmica: {isCelsius ? `${(weather?.main.feels_like-273.15).toFixed(1)}°C` : `${(((weather?.main.feels_like-273.15)*9)/5 + 32).toFixed(1)}°F`}
                </p>
            </section>

            {/* Grid de información */}
            <section className='weather__info-grid'>
                <div className='info-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <div className='info-card-content'>
                        <span className='info-label'>Viento</span>
                        <span className='info-value'>{weather?.wind.speed} m/s</span>
                    </div>
                </div>

                <div className='info-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                    </svg>
                    <div className='info-card-content'>
                        <span className='info-label'>Nubes</span>
                        <span className='info-value'>{weather?.clouds.all}%</span>
                    </div>
                </div>

                <div className='info-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                        <path d="M5 3v4"></path>
                        <path d="M19 17v4"></path>
                        <path d="M3 5h4"></path>
                        <path d="M17 19h4"></path>
                    </svg>
                    <div className='info-card-content'>
                        <span className='info-label'>Presión</span>
                        <span className='info-value'>{weather?.main.pressure} hPa</span>
                    </div>
                </div>

                <div className='info-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                    </svg>
                    <div className='info-card-content'>
                        <span className='info-label'>Humedad</span>
                        <span className='info-value'>{weather?.main.humidity}%</span>
                    </div>
                </div>

                <div className='info-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <div className='info-card-content'>
                        <span className='info-label'>Visibilidad</span>
                        <span className='info-value'>{(weather?.visibility / 1000).toFixed(1)} km</span>
                    </div>
                </div>

                <div className='info-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="12" y1="18" x2="12" y2="12"></line>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                    <div className='info-card-content'>
                        <span className='info-label'>Temp. Max</span>
                        <span className='info-value'>
                            {isCelsius ? `${(weather?.main.temp_max-273.15).toFixed(1)}°C` : `${(((weather?.main.temp_max-273.15)*9)/5 + 32).toFixed(1)}°F`}
                        </span>
                    </div>
                </div>

                <div className='info-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                    <div className='info-card-content'>
                        <span className='info-label'>Temp. Min</span>
                        <span className='info-value'>
                            {isCelsius ? `${(weather?.main.temp_min-273.15).toFixed(1)}°C` : `${(((weather?.main.temp_min-273.15)*9)/5 + 32).toFixed(1)}°F`}
                        </span>
                    </div>
                </div>

                <div className='info-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                    <div className='info-card-content'>
                        <span className='info-label'>Amanecer</span>
                        <span className='info-value'>{formatTime(weather?.sys.sunrise)}</span>
                    </div>
                </div>

                <div className='info-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                    <div className='info-card-content'>
                        <span className='info-label'>Atardecer</span>
                        <span className='info-value'>{formatTime(weather?.sys.sunset)}</span>
                    </div>
                </div>
            </section>

            {/* Mapa */}
            <section className='weather__map-section'>
                <h3 className='map-title'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                        <line x1="9" y1="3" x2="9" y2="18"></line>
                        <line x1="15" y1="6" x2="15" y2="21"></line>
                    </svg>
                    Ubicación
                </h3>
                <WeatherMap 
                    lat={weather?.coord.lat} 
                    lon={weather?.coord.lon}
                    cityName={weather?.name}
                    country={weather?.sys.country}
                />
            </section>
        </article>  
    </>
  )
}

export default WeatherCart