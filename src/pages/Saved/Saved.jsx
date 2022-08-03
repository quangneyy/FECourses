import React from 'react';
import Card from '../../Components/Card/Card';

const Saved = () => {
    return (
        <div className='saved'>
            <div className="saved__cover">
        <div className="title">
            <h1>
            Your saved <span>Courses.</span>
            </h1>
          </div>
          <div className="saved__content">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          </div>
        </div>
    );
};

export default Saved;