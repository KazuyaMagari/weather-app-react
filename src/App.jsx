import Title from "./components/Title"
import Form from "./components/Form"
import Result from "./components/Result"
import {useState} from "react"
import { createGlobalStyle } from 'styled-components'
import IMG from './assets/flat-design-monsoon-season-clouds-illustration_23-2149424294.jpeg'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${IMG});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
  }
`
const App = () =>{
  const [city, setCity] =useState("")
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })
  const getWeather = (e) => {
        e.preventDefault()
        fetch(`
http://api.weatherapi.com/v1/current.json?key=1056435816a1487ab09224739242312&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(data => {
          setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text ,
          icon: data.current.condition.icon 
          })
        })
    }
  return (
  <div>
    <GlobalStyle/>
    <Title/>
    <Form setCity={setCity} getWeather={getWeather}/>

    <Result results={results}/>
  </div>)
}
export default App