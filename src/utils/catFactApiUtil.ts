import { useContext } from 'react';
import { Alert } from 'react-native';

export const requestCatFact = ()=>{
    const { setCatFact, setIsLoading } = useContext();
    const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&verified=true';

    setIsLoading(true);
    fetch(url, {method: "GET"})
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            setIsLoading(false);
            setCatFact(jsonData);

        })
        .catch((error) => Alert.alert(error))
}
