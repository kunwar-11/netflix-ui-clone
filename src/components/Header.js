import React , {useState , useEffect} from 'react'
import result from '../result'
import '../styles/Header.css'
const base_url = 'https://api.themoviedb.org/3' 
function Header() {
    const [header , setHeader] = useState([])
    useEffect(() => {
        fetch(`${base_url}${result.netflix_originals}`)
        .then(res => res.json())
        .then(data => setHeader(data.results[Math.floor(Math.random()*(data.results.length-1))]))
    },[])
    
    console.log(header)
    return (
        <header className = 'header' style = {{backgroundSize : 'cover' , backgroundImage : `url("https://image.tmdb.org/t/p/original/${header?.backdrop_path}")` , backgroundPosition : 'center center' , backgroundRepeat : 'no-repeat'}}>
            <div className="header__content">
                <h1 className = 'header__title'>
                    {header?.title || header?.name || header?.original_name}
                </h1>
                <div className="header__buttons">
                    <button className="header__button">Play</button>
                    <button className="header__button">My List</button>
                </div>
                <h1 className="header__description">
                    {header?.overview}
                </h1>
            </div>
            <div className="header__fadebottom" />
        </header>
    )
}

export default Header
