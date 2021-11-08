import React from 'react'

function Select({ data, onchang }) {
    return (
        <select onChange={onchang}>
            {
                data.map(obj => (
                    <option key={obj.id} value={obj.id}>{obj.name}</option>
                ))
            }
        </select>
    )
}

export default Select
