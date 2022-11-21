import { createContext, useState, useEffect } from "react";
import axios from 'axios'
export const ShowsContext = createContext([])

export const ShowsProvider = ({ children }) => {
    const [shows, setShows] = useState({})
    // const [searchShows, setSearchShows] = useState()

    useEffect(() => {
        fetch('https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-config')
            .then((res) => res.json())
            .then((data) => {
                async function getJson() {
                    const response = await axios.get(data.configJsonData)
                    console.log('the json =>', response.data)
                    setShows(response.data)
                    console.log("this my show=>", shows)
                }
                getJson()

            })
            .catch((err) => console.log(err.message))
    }, [])

    const payload = {
        shows,
        setShows
    }

    return (
        <ShowsContext.Provider value={payload}>
            {children}
        </ShowsContext.Provider>
    )
}

export default ShowsProvider





