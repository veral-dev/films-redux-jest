import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import Search from "../components/ui/Search"

describe("<Search>", () => {
    let wrapper;

    beforeAll(() => {
        const props = {
            search: jest.fn(),
            filmSearched: '',
            handleChangeSearch: jest.fn(),
            store: {
                getState: jest.fn(),
                subscribe: jest.fn(),
                dispatch: jest.fn(),
            }
        }

        wrapper = shallow(
            <Provider store={props.store}>
                <Search {...props} />
            </Provider>
        )
    })

    it("Film renderiza correctamente el componente", () => {
        expect(wrapper).toBeDefined()
    })
})