import List from './List.js';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';

it ('file rendered correctly', () => {
    const tree = renderer
    .create(<List header="List header" cards={['a']} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it ('should render group', () => {
    const section = document.createElement('section');

    ReactDom.render(<List cards = {[]}/>, section);

    ReactDom.unmountComponentAtNode(section);
})
