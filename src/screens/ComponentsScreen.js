import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const name = 'Antonios';

    return ( 
        <View>
            <Text style={styles.textStyleTitle}>Getting started with React native!</Text>
            <Text style={styles.textStyleIntro}>My name is { name }</Text>
        </View> 
    //return <Text style={{ fontSize: 30 }}>Components Screen</Text>; ---on-line styling
    );
};

const styles = StyleSheet.create({
    textStyleTitle: {
        fontSize:45
    },
    textStyleIntro:{
        fontSize:20
    }
});

export default ComponentsScreen;