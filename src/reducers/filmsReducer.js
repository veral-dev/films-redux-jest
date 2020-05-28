import {
    ADD_FILM, ADD_FILM_OK, ADD_FILM_ERROR,
    START_DOWNLOAD_FILMS, DOWNLOAD_FILMS_OK, DOWNLOAD_FILMS_ERROR,
    GET_FILM_REMOVED, FILM_REMOVED_OK, FILM_REMOVED_ERROR,
    GET_FILM_EDIT, FILM_EDITED_OK, FILM_EDITED_ERROR
} from '../types'

//Cada reducer tiene su propio state
const initialState = {
    films: [],
    error: null,
    loading: false,
    filmRemoved: null,
    filmEdit: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case START_DOWNLOAD_FILMS:
        case ADD_FILM:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_FILM_OK:
            return {
                ...state,
                loading: false,
                films: [...state.films, action.payload]
            }
        case DOWNLOAD_FILMS_ERROR:
        case ADD_FILM_ERROR:
        case FILM_REMOVED_ERROR:
        case FILM_EDITED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DOWNLOAD_FILMS_OK:
            return {
                ...state,
                loading: false,
                error: null,
                films: action.payload
            }
        case GET_FILM_REMOVED:
            return {
                ...state,
                filmRemoved: action.payload
            }
        case FILM_REMOVED_OK:
            return {
                ...state,
                films: state.films.filter(film => film.id !== state.filmRemoved),
                filmRemoved: null
            }
        case GET_FILM_EDIT:
            return {
                ...state,
                filmEdit: action.payload
            }
        case FILM_EDITED_OK:
            return {
                ...state,
                filmEdit: null,
                films: state.films.map(film =>
                    film.id === action.payload.id ? film = action.payload : film
                )
            }
        default:
            return state;
    }
}
