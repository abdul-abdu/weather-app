import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	form: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},

	paper: {
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			padding: theme.spacing(4),
		},
		textAlign: "center",
	},

	iconWrapper: {
		width: 55,
		transition: "all 0.4s ease-in-out",
		margin: "0 auto",
		display: "flex",
	},
}));

export default useStyles;
