import Title from "./components/Title"
import Form from "./components/Form"
import Result from "./components/Result"
import {useState} from "react"
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
        fetch(`http://api.weatherapi.com/v1/current.json?key=991c75caef90400a86812232242210&q=${city}&aqi=no`)
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
    <Title/>
    <Form setCity={setCity} getWeather={getWeather}/>

    <Result results={results}/>
  </div>)
}
export default App