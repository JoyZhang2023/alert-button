import React from 'react';
import AlertButton from './AlertButton';

function Toolbar() {
    return (
        <div>
            <h2>Toolbar</h2>
            <AlertButton message="Button 1 clicked!">First button</AlertButton>
            <AlertButton message="Button 2 clicked!">Second button</AlertButton>
        </div>
            
    );
};

export default Toolbar;