import { Text, ScrollView } from "react-native";
import { styles } from "../styles/home";
import React, { useContext } from 'react';

export const CatFacts =  () => {
    const { catFact } = useContext();

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
