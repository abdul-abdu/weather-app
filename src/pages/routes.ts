import { ComponentType, ElementType } from "react";
import { DefaultLayout } from "../layouts";
import Details from "./details";
import Home from "./home";

interface IRoute {
	path: string;
	exact: boolean;
	layout: ElementType;
	component: ComponentType;
}

const routers: IRoute[] = [
	{
		path: "/",
		exact: true,
		layout: DefaultLayout,
		component: Home,
	},
	{
		path: "/:day",
		exact: true,
		layout: DefaultLayout,
		component: Details,
	},
];

export default routers;
