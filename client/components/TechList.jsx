import React from 'react';
import TechListItem from './TechListItem';
import './TechList.css';

const TechList = () => {
  return (
    <div className='tech-list-container'>
      <TechListItem
        image=''
        title='JavaScript'
        description='A programming language used to create interactive web pages and web applications'
        />
    </div>
  );
};

export default TechList;
