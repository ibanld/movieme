import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const SearchBar = props => {
    const [search, setSearch] = React.useState('')
    const [show, toggleShow] = React.useState(false)

    const handleChange = e =>{
        setSearch(e.target.value)
    }

    if (search.length > 4) {
        console.log(search);
        toggleShow(true)
    }

    

    return (
        <div>
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
                onChange={(e) => handleChange(e)}
                name={search}
            />
        </div>
    )
}


export default SearchBar
