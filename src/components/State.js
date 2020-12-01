import React from 'react'
import City from './City'
function State({name, cities, index }) {
    const [clicked, setClicked] = useState(false);
    return (
        <div>
            <h3 id={'state'+(index+1)} onClick={()=>setClicked(!clicked)}>{name}</h3>
            {clicked ? (
                cities.map(item=>{
                    <City name={item.name} towns={item.towns} index={cities.indexOf(name)} />
                })     
            ):null}
        </div>
    )
}
export default State