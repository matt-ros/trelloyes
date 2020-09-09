import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';
import List from './List';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header="test header" cards={[
            {id: "test-key", title: "test title", content: "test content"}
            ]}
        />,
        div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List header="test header" cards={[
                {id: "test-key-1", title: "test title 1", content: "test content 1"},
                {id: "test-key-2", title: "test title 2", content: "test content 2"}
            ]}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});