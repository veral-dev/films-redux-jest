import React from 'react';
import { FormFilter } from '../styleComponent/FormFilter'
import { Icon } from '../styleComponent/Icon'


import RotateLeftIcon from '@material-ui/icons/RotateLeft';


export default function FilterFilms({ filterFilms, setReset }) {

    const handleChange = (event) => {
        filterFilms(event.target.value);
    };

    return (
        <FormFilter>
            <label>Filtrar por género</label>
            <div>
                <input type="radio" value="horror" name="genre" onChange={handleChange} />
                <label htmlFor="horror">Horror</label>

                <input type="radio" value="romance" name="genre" onChange={handleChange} />
                <label htmlFor="romance">Romance</label>

                <input type="radio" value="comedy" name="genre" onChange={handleChange} />
                <label htmlFor="comedy">Comedy</label>
                <Icon onClick={() => setReset(true)}>
                    <RotateLeftIcon />
                    Borrar filtro
                </Icon>

            </div>
        </FormFilter>
    );
}
