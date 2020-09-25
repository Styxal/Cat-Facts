import React, { useState, useEffect } from 'react';
import { View, Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './src/styles/home'
import {CatFactsHome} from "./src/pages/CatFactsHome";
import {requestCatFact} from "./src/utils/catFactApiUtil";

export default function App() {
    const [ catFact, setCatFact ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);

    const Stack = createStackNavigator();

    const storeData = (value) => {
        try {
            AsyncStorage.setItem('@storage_Key', value);
        } catch (e) {
            Alert.alert("error");
        }
    }

    const Context = React.createContext({catFact, setCatFact, isLoading, setIsLoading, requestCatFact, storeData });

    useEffect(() => {
        requestCatFact();
    }, []);

    let Favourites = ({navigation}) => {
        return (
            <View style={styles.container}>
                <Text>
                    Favourites
                </Text>
            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={styles.container}>
                <Text style={styles.loader}> awaiting cat fact... </Text>
            </View>
        );
    } else {
        return (
            <Context.Provider value={{ catFact, setCatFact, isLoading, setIsLoading, requestCatFact, storeData }}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={CatFactsHome} />
                        <Stack.Screen name="Favourites" component={Favourites} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Context.Provider>
        )
    }
};


