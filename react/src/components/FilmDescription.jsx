import "../css/FilmDetails.css";

function FilmDescription() {
  return (
    <div className="container">
      <div className="film-card">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="src/assets/images/postermigas.png" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Título</h2>
            <p>Migas de pan</p>
            <h2 className="card-title">Dirección</h2>
            <p>Manane Rodríguez</p>
            <h2 className="card-title">Intérpretes</h2>
            <p>
              Cecilia Roth, Ernesto Chao, Andrea Davidovics, Quique Fernández,
              Justina Bustos
            </p>
            <h2 className="card-title">Duración</h2>
            <p>109 minutos</p>
          </div>
        </div>
        </div>

        <div className="other-info">
            <h2>Sinopsis</h2>
          <div className="trailer">
            <p>Al enterarse de que ha sido abuela, Liliana Pereira vuelve a su país para enfrentarse a su pasado. Un pasado conflictivo que le ha costado persecución, secuestro, torturas, violación y años de presidio bajo una dictadura militar, así como la pérdida de la custodia de su único hijo. Víctima junto con otras mujeres de una agresión sistemática y despiadada, es del apoyo mutuo entre ellas, de su solidaridad no calculada pero tenaz, de donde sigue sacando fuerzas para continuar luchando. Ahora Liliana se ve abocada a elegir entre lo que le pide su corazón y lo que le dicta su conciencia.</p>
          </div>
        </div>

        <div className="other-info">
            <h2>Trailer</h2>
          <div className="trailer">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BdHoxYyKeT0?si=7lRqvgCsWxgFiFbZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
   
  );
}

export default FilmDescription;
