import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ResultsList from './MoviesListComponent'
import { useSelector } from 'react-redux'
import {key} from '../../key/key'

const SearchBar = props => {
    const [search, setSearch] = React.useState('')
    const [results, setResults] = React.useState([])
    const lang= useSelector( state => state.lang)
    const [open, setOpen] = React.useState(true)
    const connect = async (e) => {
                e.preventDefault();

                const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=${lang}&query=${search}&page=1&include_adult=false`;
                
                try {
                    const res = await fetch(url);
                    const data  = await res.json();
                    setResults(data.results)
                    
                }catch(err){
                    console.error(err);
                }
            }
    return (
        <>
            
            <form onSubmit={connect} style={{ marginTop: '2vh'  }}>
                <TextField
                    id="outlined-full-width"
                    label="Search"
                    style={{ margin: 8 }}
                    placeholder="Look for a movie!"
                    fullWidth
                    margin="normal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => setSearch(e.target.value)}
                    name={search}
                />
            </form>
            {results ? 
                (results.map( movie => 
                    <ResultsList key={movie.id} movie={movie}/>
                )) : 
                (<>
                    {lang === 'en-US' && 'Ops! There arent any results for your search. Try again!'}
                    {lang === 'es-ES' && 'Vaya! Parece que tu búsqueda no ha dadao resultado. ¡Intentalo de nuevo!'}
                    {lang === 'pt-BR' && 'Vaya! Parece que tu búsqueda no ha dadao resultado. ¡Intentalo de nuevo!'}
                </>)
            }
        </>
    )
}


export default SearchBar
