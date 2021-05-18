import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { ReactElement } from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "rgba(225, 223, 223, 0.18)",
	},
}));

function GridLayout({ children, style }: any): ReactElement {
	const classes = useStyles();

	return (
		<div className={classes.root} style={style}>
			<Grid container spacing={3}>
				{children}
			</Grid>
		</div>
	);
}

export default GridLayout;
