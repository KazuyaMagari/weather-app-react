import { useState } from "react"
import styled from 'styled-components'
const Div = styled.div`
    text-align: center;
`
"https://api.weatherapi.com/v1/current.json?key=3347e686981b4d00b4810106242009&q=London&aqi=no"
const Form = (props) => {
    
    
    return (
        <Div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="都市" value={props.city} onChange={e => 
                props.setCity(e.target.value)
            }/>
            
            <button type="submit">Get Weather</button>
        </form>
        </Div>
    )

}
export default Form