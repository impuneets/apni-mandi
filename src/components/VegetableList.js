// VegetableList.js

import React from 'react';
import '../styles/VegetableList.css'

const vegetablesData = [
    { id: 1, name: 'Carrot', price: '1.99', image: 'carrot.jpg' },
    { id: 2, name: 'Tomato', price: '2.49', image: 'tomato.jpeg' },
    { id: 3, name: 'Broccoli', price: '1.79', image: 'broccoli.jpg' },
    { id: 4, name: 'Spinach', price: '2.29', image: 'spinach.jpeg' },
    // Add more vegetables as needed
];

const Vegetable = ({ vegetable,location}) => {
    return (
        <div className="vegetable">
            <img src={require(`../images/${vegetable.image}`)} alt={vegetable.name} />
            <div className="vegetable-info">
                <h3>{vegetable.name}</h3>
                <p>${parseInt(location*vegetable.price,0)}</p>
            </div>
        </div>
    );
}

const VegetableList = ({selectedLocation}) => {
    return (
        <div className="vegetable-list">
            {vegetablesData.map(vegetable => (
                <Vegetable location={selectedLocation} key={vegetable.id} vegetable={vegetable} />
            ))}
        </div>
    );
}

export default VegetableList;
