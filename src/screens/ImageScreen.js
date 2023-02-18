import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetails title="Cordoba"/>
            <ImageDetails title="Granada"/>
            <ImageDetails title="Sevilla"/>
            <ImageDetails/>
        </View>
    ) 
}
const styles = StyleSheet.create({});

export default ImageScreen;