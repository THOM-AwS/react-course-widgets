import React from 'react';
import Accordion from './components/accordion';
import Search from './components/Search';

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

export default () => {
    return (
      <div>
        <Search />
      </div>  
    );
}