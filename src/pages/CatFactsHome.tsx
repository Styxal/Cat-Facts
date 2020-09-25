import React, { useState, useEffect, useContext } from 'react';
import { View, Alert, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from "../styles/home";
import {CatFacts} from "../catFactsIndex";

export const CatFactsHome = ({ navigation }) => {
    const { catFact, requestCatFact, storeData } = useContext();

    return(
        <View style={styles.container}>
            <CatFacts />
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
            <TouchableOpacity
                style={styles.button}
                onPressIn={()=>{
                    navigation.navigate('Favourites')
                }}
            >
                <Text style={styles.buttonText}>
                    View Favourites
                </Text>
            </TouchableOpacity>
        </View>
    )
}
