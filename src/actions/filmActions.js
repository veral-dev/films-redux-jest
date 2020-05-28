import {
    ADD_FILM, ADD_FILM_OK, ADD_FILM_ERROR,
    START_DOWNLOAD_FILMS, DOWNLOAD_FILMS_OK, DOWNLOAD_FILMS_ERROR,
    GET_FILM_REMOVED, FILM_REMOVED_OK, FILM_REMOVED_ERROR,
    GET_FILM_EDIT, START_FILM_EDITION, FILM_EDITED_OK, FILM_EDITED_ERROR
} from '../types'

import clientAxios from '../config/axios'
import Swal from 'sweetalert2'

//Crear nuevos películas
export function CreateNewFilmAction(film) {
    return async (dispatch) => {
        dispatch(addFilm())

        try {
            //Insertar en la API
            await clientAxios.post('/films', film)

            //Si todo sale bien, actualizar el state
            dispatch(addFilmOk(film))
            //Alerta
            Swal.fire(
                'Correcto',
                'La película se agregó correctamente',
                'success'
            )
        } catch (error) {
            //Actualiza el state del error
            dispatch(addFilmError(true))
            //Alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            }
            )
        }
    }
}

const addFilm = () => ({
    type: ADD_FILM,
    payload: true
})

//Si la película se guarda en la base de datos
const addFilmOk = film => ({
    type: ADD_FILM_OK,
    payload: film
})

//Si hubo un error
const addFilmError = errorState => ({
    type: ADD_FILM_ERROR,
    payload: errorState
})

//Descarga las películas de la bbdd
export function getFilmsAction() {
    return async (dispatch) => {
        dispatch(dowloadFilms())
        try {
            const response = await clientAxios.get('/films')
            dispatch(dowloadFilmsOk(response.data))
        } catch (error) {
            dispatch(dowloadFilmsError())
        }
    }
}

const dowloadFilms = () => ({
    type: START_DOWNLOAD_FILMS,
    payload: true
})

const dowloadFilmsOk = films => ({
    type: DOWNLOAD_FILMS_OK,
    payload: films
})
const dowloadFilmsError = () => ({
    type: DOWNLOAD_FILMS_ERROR,
    payload: true
})

//Selecciona y elimina película
export function deleteFilmAction(id) {
    return async (dispatch) => {
        dispatch(getFilmDeleted(id))
        try {
            await clientAxios.delete(`/films/${id}`)
            dispatch(deleteFilmOk())
            //Si elimina, mostrar alerta
            Swal.fire(
                '¡Borrado!',
                'Tu película ha sido borrada correctamente.',
                'success')
        } catch (error) {
            dispatch(deleteFilmError())
        }
    }
}

const getFilmDeleted = id => ({
    type: GET_FILM_REMOVED,
    payload: id
})

const deleteFilmOk = () => ({
    type: FILM_REMOVED_OK,
})

const deleteFilmError = () => ({
    type: FILM_REMOVED_ERROR,
    payload: true
})

//Colocar pelicula en edición
export function getFilmEdit(film) {
    return (dispatch) => {
        dispatch(getFilmEditAction(film))
    }
}

const getFilmEditAction = film => ({
    type: GET_FILM_EDIT,
    payload: film
})

//Edita un registro en la api y state
export function editFilmAction(film) {
    return async (dispatch) => {
        dispatch(editFilm(film))
        try {
            await clientAxios.put(`/films/${film.id}`, film)
            dispatch(editFilmOk(film))
        } catch (error) {
            console.log(error)
            dispatch(editFilmError())
        }
    }
}

const editFilm = () => ({
    type: START_FILM_EDITION,
})

const editFilmOk = film => ({
    type: FILM_EDITED_OK,
    payload: film
})

const editFilmError = () => ({
    type: FILM_EDITED_ERROR,
    payload: true
})