import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import Film from "../components/Film"

describe("<Film>", () => {
    let wrapper;

    beforeAll(() => {
        const props = {
            film: '',
            setLoading: jest.fn(),
            store: {
                getState: jest.fn(),
                subscribe: jest.fn(),
                dispatch: jest.fn(),
            }
        }

        wrapper = shallow(
            <Provider store={props.store}>
                <Film {...props} />
            </Provider>
        )
    })

    it("Film renderiza correctamente el componente", () => {
        expect(wrapper).toBeDefined()
    })

    it("Renderiza bien el boton", () => {
        expect(wrapper.find('button'))
    })

})