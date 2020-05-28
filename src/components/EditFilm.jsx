import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { editFilmAction } from '../actions/filmActions.js'
import { useHistory } from 'react-router-dom'

const EditFilm = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    //Nuevo state de película
    const [film, setFilm] = useState({
        name: '',
        genre: [],
        watched: null
    })

    //Película a editar
    const editFilm = useSelector(state => state.films.filmEdit)

    useEffect(() => {
        setFilm(editFilm)
    }, [editFilm])

    const onChangeForm = e => {
        setFilm({
            ...film,
            [e.target.name]: e.target.value
        })
    }

    const { name, genre } = film

    const submitEditFilm = e => {
        e.preventDefault()
        dispatch(editFilmAction(film))
        history.push('/')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Película
                        </h2>
                        <form onSubmit={submitEditFilm}>
                            <div className="form-group">
                                <label>Nombre Película</label>
                                <input type="text" className="form-control" placeholder="Nombre Película" name="name"
                                    value={name} onChange={onChangeForm} />
                            </div>
                            <div className="form-group">
                                <label>Precio Película</label>
                                <input type="text" className="form-control" placeholder="Género" name="genre"
                                    value={genre} onChange={onChangeForm} />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditFilm;