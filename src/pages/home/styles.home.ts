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
	changeBtn: {
		position: "absolute",
		top: "50%",
		right: 0,
		transform: "translateY(-50%)",
		borderRadius: 0,
	},
}));

export default useStyles;
