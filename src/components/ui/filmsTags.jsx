import React, { useState } from 'react';

export default function FilmsTags({ genre, setGenre }) {
    const [genreToAdd, setGenreToAdd] = useState('')

    const addNewGenre = (e) => {
        e.preventDefault()
        if (genreToAdd && !genre.includes(genreToAdd.toLowerCase())) {
            setGenre([...genre, genreToAdd.toLowerCase()])
            setGenreToAdd('')
        }
    }

    return (
        <form onSubmit={addNewGenre}>
            <input type="text" className="form-control" placeholder="Género" name="genre" value={genreToAdd}
                onChange={e => setGenreToAdd(e.target.value)} />
        </form>
    );
}
