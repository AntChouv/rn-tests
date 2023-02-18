import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Text>Buttons</Text>

        <Button // Very simple component for showing a button and detecting a press
            title="Go to Components Demo"
            onPress={() => navigation.navigate('Components')}
        />

        <Button
            title="Go to List Demo"
            onPress={() => navigation.navigate('List')}
        />

        <Button
            title="Go to Images Demo"
            onPress={() => navigation.navigate('Images')}
        />

        <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
            <Text>Go to List Demo</Text>          
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
