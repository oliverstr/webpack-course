import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
    it('renders properly', () => {
        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
    })
})