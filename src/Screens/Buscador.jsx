import { HeaderComponent } from '../Components/HeaderComponent'
import { useState } from 'react'
import '../Styles/movieSearch.css'
import { Footer } from '../Components/Footer'

export const Buscador = () => {
    const apiKey = '45d7bfc50f80e5122d9d22192cc90321'

    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState([])

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }

    const fetchPeliculas = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${busqueda}`)
            const data = await response.json()
            setPeliculas(data.results)
        } catch (error) {
            console.error('Ha ocurrido un error: ', error)
        }
    }

    return (
        <div className="page-container">
            <HeaderComponent />
            <div className="container">
                <h1 className="title">Buscador Peliculas</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Escribe una pelicula"
                        value={busqueda}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="search-button">Buscar</button>
                </form>
                <div className="movie-list">
                    {peliculas.map((pelicula) => (
                        <div key={pelicula.id} className="movie-card">
                            <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title} />
                            <h2>{pelicula.title}</h2>
                            <p>{pelicula.overview}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
