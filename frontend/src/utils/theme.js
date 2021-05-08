import {
    createMuiTheme,
    responsiveFontSizes
} from "@material-ui/core/styles";

const theme = {
    props: {
	MuiPaper: {
	    elevation: 2,
	}
    }
};

export default responsiveFontSizes(createMuiTheme(theme));
