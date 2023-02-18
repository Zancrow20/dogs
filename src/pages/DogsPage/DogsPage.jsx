import { useEffect, useState, createContext } from "react";
import { DogsFlexContainer } from "../../containers/DogsFlexContainer/DogsFlexContainer";

export const DogsPage = () => {
    
    const [dogData, setData] = useState([]);

    useEffect(()=>{
        

        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json",
            "x-api-key": "live_jUcAOLwK4hVR6hvJC44knUGmKnuuCwQlnd1aT0ygIwN9m86PufrGhrxDmVJmBHnA" 
        },
    };

    fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0", requestOptions)
        .then(response => response.json())
        .then(dogData => setData(dogData));
    }, [])

    return(<DogsFlexContainer dogData={dogData} />);
} 