import { useState } from "react"

"https://api.weatherapi.com/v1/current.json?key=3347e686981b4d00b4810106242009&q=London&aqi=no"
const Form = (props) => {
    
    
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="都市" value={props.city} onChange={e => 
                props.setCity(e.target.value)
            }/>
            
            <button type="submit">Get Weather</button>
        </form>
    )

}
export default Form