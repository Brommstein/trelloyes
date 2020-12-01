import App from './App.js';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import store from './store.js';

it ('file rendered correctly', () => {
    const tree = renderer
    .create(<App store={store} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it ('should render document', () => {
    const main = document.createElement('main');

    ReactDom.render(<App />, main);

    ReactDom.unmountComponentAtNode(main);
})
