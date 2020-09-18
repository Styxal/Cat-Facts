import React, { useState, useEffect } from 'react';
import { View, Alert, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from './src/styles/home'
import { CatFacts } from "./src/catFactsIndex";

export default function App() {
    const [ catFact, setCatFact ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);

    const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&verified=true';

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
            // saving error
        }
    }

    function requestCatFact() {
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

    useEffect(() => {
        requestCatFact();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loader}> awaiting cat fact... </Text>
            </View>
        );
    } else {
        return <View style={styles.container}>
            <CatFacts catFact={catFact.text} />
            <View style={styles.rowContainer}>
                <TouchableOpacity
                    onPressIn={()=>requestCatFact()}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Get a cat fact!
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPressIn={()=>{
                        Alert.alert(catFact._id)
                        storeData(catFact._id)
                    }}
                >
                    <Icon style={styles.buttonText} name={"heart"}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    View Favourites
                </Text>
            </TouchableOpacity>
        </View>
    }


};


