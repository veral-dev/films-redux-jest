import React from 'react'
import { Button } from '../styleComponent/Button'
import { ContainerSmall } from '../styleComponent/Container'



const Search = ({ search, filmSearched, handleChangeSearch }) => {
    return (
        <ContainerSmall>
            <form className="flex" onSubmit={search}>
                <input className="form-control margin-right"
                    value={filmSearched}
                    type="search"
                    name="search"
                    placeholder="Buscar"
                    onChange={handleChangeSearch} />
                <Button type="submit" variant="contained" color="secondary" >Buscar</Button>
            </form>
        </ContainerSmall>
    );
}

export default Search;