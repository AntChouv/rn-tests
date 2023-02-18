import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ImageDetails = (props) => {
    console.log(props)
    return <Text>{props.title}</Text>
}
const styles = StyleSheet.create({});

export default ImageDetails;