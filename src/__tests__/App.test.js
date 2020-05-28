import React from 'react';
import { mount } from "enzyme"
import App from "../App"
import { jssPreset } from '@material-ui/core';

describe("<App>", () => {
    let wrapper;

    beforeAll(() => {
        const props = {
            store: {
                getState: jest.fn(),
                subscribe: jest.fn(),
                dispatch: jest.fn(),
            }
        }
        wrapper = mount(<App {...props} />)
    })

    it("App renderiza correctamente", () => {
        expect(wrapper).toBeDefined()
    })
})