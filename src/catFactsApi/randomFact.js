import {Alert, Text} from 'react-native';
import React from "react";


export const randomFact = () => {
    const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat';
    let req = new Request(
        url
    )

    let showAlert = ({jsonData}) => {
        Alert.alert("Cat Fact", jsonData.text, [
                {text: "Close"},
                {text: "Favourite"}
        ]);
    }

    // Alert.alert("Cat Fact", "This Is A Cat Fact", [
    //     {text: "Close"},
    //     {text: "Favourite"}
    // ])



    fetch(req)
        .then((response) => response.json())
        .then((jsonData) => showAlert({jsonData}))
    //     .then(console.log(response))
        .catch((error) => console.log(error))

}
