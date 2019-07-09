import React from "react";
import Enzyme, { mount } from "enzyme";
import LoadingIndicator from "./LoadingIndicator";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

describe("LoadingIndicator",() => {
	describe("Cuando isloading es falso",() => {
		it("Deberia renderizar los hijos",() =>{
			const wrapper = mount(
				<LoadingIndicator isLoading={false}>
				<div>Hola</div>
				</LoadingIndicator>
				);
			expect(wrapper.html()).toEqual("<div>Hola</div>");
		});
	});
}) ;