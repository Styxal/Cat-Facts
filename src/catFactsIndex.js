import {Alert, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles/home";
import React from "react";
import {randomFact} from "./catFactsApi/randomFact";

export const CatFacts = () => {
    const onPress = () => randomFact();

    return(
        <>
            <Text style={styles.title}>
                Cat Facts
            </Text>

            <TouchableOpacity
                onPressIn={onPress}
                style={styles.button}
                // title={"Hi"}
            >
                <Text style={styles.buttonText}>
                    Get a cat fact!
                </Text>
            </TouchableOpacity>
        </>
    );
}
