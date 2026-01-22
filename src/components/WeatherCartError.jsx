const WeatherCartError = ({error}) => {
    return (
      <div className="content__error">
          <div className="error-card">
              <div className="error-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
              </div>
              <h1 className="error-title">¡Ups! Algo salió mal</h1>
              <p className="error-message">{error}</p>
              <p className="error-subtitle">Por favor, permite el acceso a tu ubicación o intenta recargar la página</p>
              <button className="error-button" onClick={() => window.location.reload()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 2v6h-6"></path>
                      <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                      <path d="M3 22v-6h6"></path>
                      <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                  </svg>
                  Reintentar
              </button>
          </div>
      </div>
    )
  }
  
  export default WeatherCartError