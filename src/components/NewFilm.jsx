import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FilmsTags from './ui/filmsTags'
import { Button } from './styleComponent/Button'
import { FormBox } from './styleComponent/NewFilmForm'
import { ContainerSmall } from './styleComponent/Container'
import { ChipTags, BoxTags } from './styleComponent/Tags'
import { Alert } from './styleComponent/Alert'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

//Action de redux
import { CreateNewFilmAction } from '../actions/filmActions'
import { showAlert, hideAlertAction } from '../actions/alertActions'

const NewFilm = ({ setNewFilm }) => {

    //State del componente
    const [name, setName] = useState('')
    const [genre, setGenre] = useState([])


    //Utilizar usedistpatch y te crea una funcion
    const dispatch = useDispatch()

    //Acceder al state del store
    const error = useSelector(state => state.films.error)
    const alert = useSelector(state => state.alert.alert)

    //Mandar llamar el action de filmAction
    const addFilm = film => dispatch(CreateNewFilmAction(film))

    const submitNewFilm = e => {
        e.preventDefault()
        //validar formulario
        if (name.trim() === '') {
            const alert = {
                msg: 'Ambos campos son obligatorios',
            }
            dispatch(showAlert(alert))
            return
        }
        //Si no hay errores
        dispatch(hideAlertAction())
        //Crear nueva película
        addFilm({
            name,
            genre,
            watched: false,
        })
        setNewFilm(true)
        setName('')
        setGenre([])
    }

    const handleDelete = (genreToDelete) => {
        console.log('Delete')
        setGenre((genres) => genres.filter((genre) => genre !== genreToDelete));
    };

    return (

        <ContainerSmall>
            <FormBox>
                <div>
                    <input type="text" className="form-control" placeholder="Nombre Película" name="name" value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <FilmsTags setGenre={setGenre} genre={genre} />
                </div>
            </FormBox>
            <ChipTags>
                {genre.map((elm) => {
                    return (
                        <li key={elm}>
                            <BoxTags
                                onClick={() => handleDelete(elm)}
                                className="capitalize"
                            >{elm}<HighlightOffIcon /></BoxTags>
                        </li>
                    );
                })}
            </ChipTags>

            <Button onClick={submitNewFilm}>
                Agregar nueva película
            </Button>
            {error ? <Alert>Hubo un error</Alert> : null}
            {alert ? <Alert>{alert.msg}</Alert> : null}

        </ContainerSmall>
    );
}

export default NewFilm;