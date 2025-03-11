import {Button} from "react-bootstrap"
import styled from 'styled-components'
const Div = styled.div`
    text-align: center;
`
"https://api.weatherapi.com/v1/current.json?key=3347e686981b4d00b4810106242009&q=London&aqi=no"
const Form = (props) => {
    
    
    return (
        <Div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="Enter Any City" value={props.city} onChange={e => 
                props.setCity(e.target.value)
            } className="me-2"/>
            
            <Button variant="primary" type="submit" className="me-2">Submit</Button>
        </form>
        </Div>
    )

}
export default Form