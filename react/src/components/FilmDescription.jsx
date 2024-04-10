import { Link } from "react-router-dom";

function FilmDescription() {
  return (
    <div className="container">
  
      <div className="film-card">
        <div className="card lg:card-side bg-base-100 shadow-xl rounded-none">
          <figure>
            <img src="../assets/images/postermigas.png" alt="Album" />
          </figure>
          <div className="card-body flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center lg:items-start">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="card-title-1 mb-4">Migas de pan</h2>
              <h2 className="card-title">Año</h2>
              <p className="mb-2">2016</p>
              <h2 className="card-title">Duración</h2>
              <p className="mb-2">109 min.</p>
              <h2 className="card-title">Género</h2>
              <p className="mb-2">
                Drama | Basado en hechos reales. Dictadura uruguaya
              </p>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="card-title">Nacionalidad</h2>
              <p className="mb-2">Uruguay, España</p>
              <h2 className="card-title">Producido por</h2>
              <p className="mb-2">RCI producciones, Xamalú Filmes</p>
              <h2 className="card-title">Dirigida por</h2>
              <p className="mb-2">Manane Rodríguez</p>
              <h2 className="card-title">Escrita por</h2>
              <p className="mb-2">Xavier Bermúdez y Manane Rodríguez</p>
            </div>
          </div>
        </div>
      </div>

      <div className="other-info text-center">
  <div className="trailer leading-5">
    <p>
      Candidata al Oscar por Uruguay y con Cecilia Roth como protagonista,
      "Migas de Pan" es un poderoso relato denuncia que visibiliza los horrores
      y abusos que la dictadura uruguaya infingió en miles de mujeres. Al
      enterarse de que es abuela, Liliana Pereira regresa a su país, Uruguay.
      Allí tendrá que enfrentarse a un pasado conflictivo que le costó
      persecución, años de presidio bajo una dictadura militar, así como la
      pérdida de la custodia de su único hijo. Víctima junto con otras mujeres
      de una agresión sistemática y despiadada, es del apoyo mutuo entre ellas,
      de su solidaridad no calculada pero tenaz, de donde sigue sacando
      fuerzas para continuar luchando.
    </p>
  </div>
</div>

<div>
<button className="btn-other-links">Enlace de interés</button>
</div>

<div className="other-info">
        <div className="trailer w-full">
          <iframe
            width="1200"
            height="500"
            src="https://www.dailymotion.com/embed/video/x7tzhua?"
            title="Migas de pan video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>


     

      
    </div>
  );
}

export default FilmDescription;
