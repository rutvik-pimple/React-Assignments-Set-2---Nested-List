import React from 'react'

function Town({name,index}) {
    return (
        <div>
            <h5 id={'town'+(index+1)} >{name}</h5>
        </div>
    )
}

export default Town
