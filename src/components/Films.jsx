import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'


import Film from './Film'
import NewFilm from './NewFilm'

import FilterFilms from './ui/filterFilms'
import Search from './ui/search'
import Spinner from './ui/Spinner'
import { Table } from './styleComponent/Table'


//Action de redux
import { getFilmsAction } from '../actions/filmActions'

const Films = () => {

    const location = useLocation()
    const [query, setQuery] = useState(undefined)

    const dispatch = useDispatch()
    const [newFilm, setNewFilm] = useState(false)

    useEffect(() => {

        if (location.search) setQuery(queryString.parse(location.search))
        else setQuery(undefined)
        //Consultar la API
        const getFilms = () => dispatch(getFilmsAction())
        getFilms()

        if (newFilm) {
            setLoading(true)
            setTimeout(() => {
                setNewFilm(false)
                setLoading(false)
            }, 3000);
        }
        //eslint-disable-next-line
    }, [newFilm, location])

    //Obtener películas del state
    const bbddfilms = useSelector(state => state.films.films)
    const error = useSelector(state => state.films.error)
    const [loading, setLoading] = useState(useSelector(state => state.films.loading))
    const [films, setFilms] = useState([])
    const [reset, setReset] = useState(false)
    useEffect(() => {
        bbddfilms.sort(function (a, b) {
            if (a.id > b.id) return 1
            if (a.id < b.id) return -1
            return 0
        })
        bbddfilms.sort(function (a, b) {
            if (!a.watched) return -100
            return 0
        })
        setFilms(bbddfilms)
        if (query) {
            setLoading(true)
            if (query === queryString.parse(location.search)) {
                setTimeout(() => {
                    filterFilms(query.genre)
                    setLoading(false)
                }, 3000);
            } else {
                filterFilms(query.genre)
                setLoading(false)
            }

        }
        setReset(false)
        //eslint-disable-next-line
    }, [bbddfilms, reset, newFilm])


    const filterFilms = filterName => {
        setFilms(bbddfilms.filter(elm => elm.genre.includes(filterName)))
    }

    // Buscador peliculas
    const [filmSearched, setFilmSearched] = useState('')
    const handleChangeSearch = e => setFilmSearched(e.target.value)

    const search = e => {
        e.preventDefault()
        const busqueda = filmSearched.toLowerCase();
        const filtro = films.filter(film => film.name.toLowerCase().includes(busqueda))

        if (filmSearched) {
            setLoading(true)
            setTimeout(() => {
                setFilms(filtro)
                setLoading(false)
            }, 3000);
        }
        else {
            setLoading(true)
            setTimeout(() => {
                setFilms(bbddfilms)
                setLoading(false)
            }, 3000);
        }
    }

    return (
        <>
            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
            {query ? null : <>
                <NewFilm setNewFilm={setNewFilm} />
                <FilterFilms filterFilms={filterFilms} setReset={setReset} />
                <Search filmSearched={filmSearched} search={search} handleChangeSearch={handleChangeSearch} />
            </>
            }
            {loading ? <Spinner /> :
                <Table>
                    <thead>
                        <tr>
                            <th className="text-center">¿Visto?</th>
                            <th>Nombre</th>
                            <th>Géneros</th>
                            <th className="text-center">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {films.length === 0 ? <tr><td>No hay películas</td></tr> : (
                            films.map(film => <Film key={film.id} film={film} setLoading={setLoading} />))
                        }</tbody>
                </Table>}
        </>
    );
}

export default Films;