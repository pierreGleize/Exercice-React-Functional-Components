import { useState, useEffect, useDebugValue} from "react";

const useFetch = (fetchUrl) => {

   
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // A utiliser pour tester l'appli avec react-dev-tool (mode dev)
    useDebugValue(data, (val) => {
        alert('usedebugvalue lancé')
        return JSON.stringify(val) })

    //Fetch

    useEffect(() => {

        fetch(fetchUrl)
        .then(response => response.json())
        .then(json => {
            setData(json)
            setIsLoading(false)

        })
        .catch(error => console.log(error.message))
    }, [fetchUrl])

    // async / await

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(fetchUrl)

    //         if (!response.ok){
    //             throw Error('Pas de data')
    //         }
    //         const fetchedData = await response.json()
    //         setData(fetchedData)
    //         setIsLoading(false)

    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [fetchUrl])

    //Return

    return {data, isLoading}
}

export default useFetch;