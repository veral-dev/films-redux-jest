import React from 'react';
import { shallow } from "enzyme"
import Header from "../components/Header"
import { NavList, HeaderNav } from "../components/styleComponent/HeaderNav"

describe("<Header>", () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Header />)
    })

    it("Header renderiza correctamente el componente", () => {
        expect(wrapper).toBeDefined()
    })

    it("Renderiza bien la lista", () => {
        expect(wrapper.find(NavList))
    })

    it("Renderiza bien el header", () => {
        expect(wrapper.find(HeaderNav))
    })
})