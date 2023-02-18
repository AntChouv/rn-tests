import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age : 20, key: '1' },// Whenever i work with an array of data, always use "keys", so that if, for example
                              // a value get deleted from the array, the array will not get deleted and contructed from scratch.
                              // If an array is implemented without keys, the way of the react native, if an element from the list
                              // gets deleted, will be to delete the whole array and construct it from scratch
        { name: 'Friend #2', age : 21, key: '2' },
        { name: 'Friend #3', age : 15, key: '3' },
        { name: 'Friend #4', age : 27, key: '4' },//THE KEY HAS TO BE A STRING
        { name: 'Friend #5', age : 20, key: '5' },
        { name: 'Friend #6', age : 35, key: '6' }
    ];
    return (
        <FlatList 
            //keyExtractor={(friend) => friend.name} //If we have not assigned keys on the array, with that way we assign keys on runtime
                                                     //In this situation we use the attribute name because in unique for all the elements
            //horizontal={true} ---> Horizontal list
            //showHorizontalScrollIndicator={false} // does exactly what it says
            data={ friends } 
            renderItem={({ item }) => {
                //item === { name: 'Friend #1' }
            //renderItem={(element) => {    
                // element === { item: { name: 'Friend #1'}, index=0}
                return (
                    <Text style = {styles.listTextStyle}>{ item.name } - Age { item.age }</Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    listTextStyle: {
        marginVertical: 80,
        //marginHorizontal:50
    }
});

export default ListScreen;