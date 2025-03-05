import styled from "styled-components";
const Resulting = styled.div`
    text-align: center;
    margin-top: 2em;
`
const Result = ({results}) => {
    return (
        <Resulting className="mb-5">
            {results.country ? <div> {results.country}</div> : <div>country</div>}
            {results.cityName ? <div> {results.cityName}</div> : <div>cityName</div>} 
            {results.icon ? <div><img src={results.icon}></img></div> : <div>icon</div>}
            {results.temperature ? <div>{results.temperature}</div> : <div>temperature</div>}
        </Resulting>
        


    )
}

export default Result;