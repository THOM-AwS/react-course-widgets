import React, { useState } from 'react';
import Accordion from './components/accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const item = [
    {
        title: 'What is React?',
        content: 'React is a front end framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'how do you use React?',
        content: 'You use React by creating components.'
    }
];

const options = [
    {   
        label: 'The colour Red',
        value: 'red'
    },
    {
        label: 'The colour Green',
        value: 'green'
    },
    {
        label: 'The colour Blue',
        value: 'Blue'
    }
];

export default () => {
    const [ selected, setSelected ] = useState(options[0]);

    return (
      <div>
            <Dropdown 
            selected={ selected } 
            options={ options }
            onSelectedChange={ setSelected }
            />
      </div>  
    );
}