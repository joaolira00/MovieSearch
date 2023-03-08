import './styles.css'

export function CardPoster(props) {
        return (
                <div className="poster" >
                        <div className='infos'>
                                <h1>{props.title}</h1>
                                <h2>Plot </h2><p>{props.plot}</p>
                                <h2>Genre</h2><p>{props.genre}</p>
                                <h2>Actors</h2><p>{props.actors}</p>
                        </div>
                        <div className='movieposter'>
                                <img src={props.poster} ></img>
                        </div>

                </div>
        )
}