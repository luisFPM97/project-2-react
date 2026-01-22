const Loading = () => {
    return (
      <div className="container_loading">
          <div className="loading-content">
              <div className="loading"></div>
              <h2 className="loading-text">Cargando datos del clima...</h2>
              <div className="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
      </div>
    )
  }
  
  export default Loading