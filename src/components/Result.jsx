const Result = ({results}) => {
    return (
        <div>
            {results.country && <div> {results.country}</div>}
            {results.cityName && <div> {results.cityName}</div>}
            {results.icon && <div><img src={results.icon}></img></div>}
        </div>
        


    )
}

export default Result;