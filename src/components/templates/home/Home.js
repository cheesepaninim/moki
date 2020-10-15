import React from 'react';
import Counter from '../../modules/counter/Counter';
import Editor from '../../modules/editor/Editor';

function Home() {
    return (
        <div>
            HOME
            <Counter />
            Editor
            <Editor placeholder="Write something..." />
        </div>
    );
}

export default Home;
