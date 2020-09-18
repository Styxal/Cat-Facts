import { Text, ScrollView } from "react-native";
import { styles } from "./styles/home";
import React from 'react';

interface CatFactsIndexProps {
    catFact: string;
}

export const CatFacts =  ({catFact}) => {
    return(
        <>
            <Text style={styles.title}>
                Cat Facts
            </Text>

            <ScrollView>
                <Text style={styles.factBox}>
                    {catFact}
                </Text>
            </ScrollView>
        </>
    );
}
