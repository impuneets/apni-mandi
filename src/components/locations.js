import React from 'react'

function Locations({onLocationChange,selectedLocation}) {

  return (
    <div>
        <select value={selectedLocation} onChange={onLocationChange} name='Find Mandi'>
            <option value={1}>NRI Circle</option>
            <option value={2}>Jagatpura Railway Crossing</option>
            <option value={3}>Shyopur, Pratap Nagar</option>
            <option value={4}>Muhana Mandi</option>
            <option value={5}>Patrakar Colony</option>

        </select>

    </div>
  )
}

export default Locations