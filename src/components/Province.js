import React,{useState} from 'react'
import City from './City'
function Province ({name, cities, index }) {
    const [clicked, setClicked] = useState(false);
    function handleClick(){
        setClicked(!clicked)
    }

    return (
        <div>
            <h3 id={'state'+(index +1)} onClick={handleClick}>{name}</h3>
            {clicked ? (
                cities.map(item=>(
                    <City 
                    name={item.name} 
                    towns={item.towns} 
                    index={cities.indexOf(item)} />
                ))     
            ):null}
        </div>
    )
}
export default Province