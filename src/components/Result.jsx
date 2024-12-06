const Result = ({results}) => {
    return (
        <div>
            {results.country && <div> {results.country}</div>}
            {results.cityName && <div> {results.cityName}</div>}
            
        </div>
        


    )
}

export default Result;