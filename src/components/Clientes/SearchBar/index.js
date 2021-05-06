import {
    TextField,
    IconButton,
    InputAdornment,
} from "@material-ui/core";

import {
    Search as SearchIcon
} from "@material-ui/icons";

const SearchBar = (props) => {

    const { label, value, onChange, onSubmit } = props;

    return (
	<TextField autoFocus
		   label={label}
		   value={value}
		   onChange={onChange}
		   InputProps={{
		       endAdornment: (
			   <InputAdornment>
			       <IconButton onClick={onSubmit}>
				   <SearchIcon/>
			       </IconButton>
			   </InputAdornment>
		       ),
		   }}
		   fullWidth
		   variant="outlined"/>
    );
}

export default SearchBar;
