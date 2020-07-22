import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ResultsList from './ResultList'
import {key} from '../../key/key'


const SearchBar = props => {
    const [search, setSearch] = React.useState('')
    const [results, setResults] = React.useState([])
    const [adult, setAdult] = React.useState(false)
    let lang= 'pt-BR'
    const [show, toggleShow] = React.useState(false)
    
    const connect = async (e) => {
                e.preventDefault();

                const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=${lang}&query=${search}&page=1&include_adult=${adult}`;
                
                try {
                    const res = await fetch(url);
                    const data  = await res.json();
                    setResults(data.results)
                    
                }catch(err){
                    console.error(err);
                }
            }
            console.log(results)
    return (
        <>
            <form onSubmit={connect}>
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
            {results.map( movie => 
                <ResultsList key={movie.id} movie={movie}/>
            )}
        </>
    )
}


export default SearchBar
