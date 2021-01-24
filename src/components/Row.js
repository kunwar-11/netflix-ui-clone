import React from 'react'
import '../styles/Row.css'
const base_url = 'https://image.tmdb.org/t/p/original/'
function Row({title , genre}) {
    console.log(genre)
    return (
        <div className = 'rows'>
            <h2 className = 'rows__title'>{title}</h2>
            <div className="rows__image">
                { 
                    genre.map( data => {
                        return (
                            <img className = 'rows__image__poster' key = {data.id} src={`${base_url}${data.poster_path}`} alt={data.name}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Row
