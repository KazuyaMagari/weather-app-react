import styled from 'styled-components'

const Heading1 = styled.h1`
    text-align: center;
    color: darkblue;
`
const Title = () => {
    return (
        <Heading1 style={{fontSize: "60px"}}>Weather App</Heading1>
    )
}
export default Title