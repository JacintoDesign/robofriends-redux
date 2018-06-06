import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';
// enzyme shallow
it('expect to render Card component', () => {
  expect(shallow(<Card />).length).toEqual(1)
})
// snapshot
it('expect to render Card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
})