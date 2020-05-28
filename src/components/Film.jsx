import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Swal from 'sweetalert2'

import { IconEdit, IconDelete } from './styleComponent/Icon'
import { Button } from './styleComponent/Button'
import { Actions } from './styleComponent/Table'
import { BoxTags } from './styleComponent/Tags'



//Redux
import { useDispatch } from 'react-redux'
import { deleteFilmAction, editFilmAction } from '../actions/filmActions'

const Film = ({ film, setLoading }) => {
    const dispatch = useDispatch()

    const { name, genre, id, watched } = film
    const [actualFilm, setActualFilm] = useState({
        name: name,
        genre: genre,
        watched: watched,
        id: id
    })

    const handleChangeCheckbox = () => {
        setActualFilm({ ...actualFilm, watched: !watched })
        dispatch(editFilmAction({ ...actualFilm, watched: !watched }))
    };

    //Confirmar si desea eliminar
    const confirmDeleteFilm = id => {

        //Preguntar al usuario
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
        }).then((result) => {
            if (result.value) {
                //Pasarlo al action
                setLoading(true)
                setTimeout(() => {
                    dispatch(deleteFilmAction(id))
                    setLoading(false)
                }, 3000);

            }
        })
    }

    const submitFilmAction = () => {
        dispatch(editFilmAction(actualFilm))
        setEditAction(!editAction)
    }
    const [editAction, setEditAction] = useState(false)


    const onChangeForm = e => {
        setActualFilm({
            ...actualFilm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <tr>
            <td className="text-center">
                <input
                    type="checkbox"
                    checked={watched}
                    onChange={handleChangeCheckbox}
                />
            </td>
            <td className="capitalize" id="filmNames">
                {editAction ? <input type="text" className="form-control" placeholder="Nombre Película"
                    name="name" value={actualFilm.name} onChange={onChangeForm} /> : actualFilm.name}
            </td>
            <td>{actualFilm.genre.map(elm =>
                <BoxTags
                    key={elm}
                    className="capitalize"
                >{elm}</BoxTags>)}</td>
            <Actions className="flex justify-content">
                {editAction ? <Button onClick={submitFilmAction}>Guardar</Button>
                    : <> <IconEdit id="edit" onClick={() => setEditAction(!editAction)}><EditIcon /></IconEdit>
                        <IconDelete onClick={() => confirmDeleteFilm(id)}><DeleteForeverIcon /></IconDelete></>}
            </Actions>
        </tr>
    );
}

export default Film;