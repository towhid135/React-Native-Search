import React from "react";
import {View,StyleSheet,Text} from 'react-native';

const SearchResultComp = props =>{
    return(
        <View style = {styles.container}>
            <View style={styles.card}>
                <Text>First Name: {props.firstName}</Text>
                <Text>Last Name: {props.lastName}</Text>
                <Text>Email: {props.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        marginBottom: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius: 8,
        elevation: 5,
        
        backgroundColor: 'white',
        marginTop: 10,
    },
    card:{
        padding: 10,
    }
})

export default SearchResultComp;