import { useState } from 'react'
import './styles.css'

export function Searchbar(props) {
    const [movieName, setMovieName] = useState('')

    function searchMovie(e) {
        e.preventDefault()
        console.log(movieName)
        props.searchMovie(movieName)
    }


    function changeVar(e) {
        setMovieName(e.target.value)

    }
    return (
        <div className="searchbar">
            <form>
                <input value={movieName} onChange={changeVar} className="search" type="text" placeholder="Type here"></input>
                <button className="button" onClick={searchMovie}>Go!</button>
                <button className='delete-button'>Erase</button>
            </form>
        </div>


    )

}