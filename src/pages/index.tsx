import React from "react";
import { Route, Switch } from "react-router";
import NotFound from "./home";
import routers from "./routes";

const Pages = () => (
	<React.Fragment>
		<Switch>
			{routers.map((router, index) => (
				<Route
					key={index}
					path={router.path}
					exact={router.exact}
					render={() => (
						<router.layout>
							<router.component />
						</router.layout>
					)}
				/>
			))}

			<NotFound />
		</Switch>
	</React.Fragment>
);

export default Pages;
