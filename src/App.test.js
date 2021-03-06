import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  }

test('renders without error', () => {
    const wrapper = shallow(<App />)
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
  });
