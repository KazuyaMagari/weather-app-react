import styled from "styled-components";
const Resulting = styled.div`
    text-align: center;
    margin-top: 2em;
`
const Result = ({results}) => {
    return (
        <Resulting>
            {results.country && <div> {results.country}</div>}
            {results.cityName && <div> {results.cityName}</div>}
            {results.icon && <div><img src={results.icon}></img></div>}
            {results.temperature && <div>{results.temperature}</div>}
        </Resulting>
        


    )
}

export default Result;