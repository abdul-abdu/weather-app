import React from "react";
import renderer from "react-test-renderer";
import { WeatherIcon } from "./components";
import App from "./App";
import ReactDOM from "react-dom";

it("renders correctly", () => {
	const root = document.createElement("div");
	ReactDOM.render(<App />, root);

	expect(root.querySelector("h4")?.textContent).toBe("Weather Forecast");
});

test("testing", () => {
	expect(true).toBeTruthy();
});
