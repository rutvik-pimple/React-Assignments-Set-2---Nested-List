import React from 'react'
import Town from './Town'

function City({name,towns,index}) {
    const [clicked, setClicked] = useState(false);
    return (
        <div>
            <h4 id={'city'+(index+1)} onClick={()=>setClicked(!clicked)}>{name}</h4>
            {clicked ? (
                towns.map(item=>{
                    <Town 
                    name={item.name} 
                    index={towns.indexOf(name)} />
                })     
            ):null}
        </div>
    )
}

export default City
