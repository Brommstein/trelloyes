import Card from './Card.js';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';

it ('file rendered correctly', () => {
    const tree = renderer
    .create(<Card title="Card title" content="asd" />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it ('should render card', () => {
    const div = document.createElement('div');

    ReactDom.render(<Card />, div);

    ReactDom.unmountComponentAtNode(div);
})