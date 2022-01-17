import React,{useState} from "react";
import {
    View,
    TextInput,
    Text,
    FlatList,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { person } from "../Data/dummyData";
import stringSimilarity from 'string-similarity';
import SearchResultComp from "./SearchResultComp";

const SearchComp = props =>{
    const [searchText,setSearchText] = useState('');
    const [searchResult,setSearchResult] = useState([]);

    const onSearchTextChange = text =>{
        let listOfResults;
        setSearchText(text);
        listOfResults = compareString(text);
        setSearchResult([...listOfResults]);
        //console.log(searchText);
    }

    const renderSearchItem = itemData =>{
        return (
        <SearchResultComp
         firstName = {person[itemData.item.arrayIndex].firstName}
         lastName = {person[itemData.item.arrayIndex].lastName}
         email = {person[itemData.item.arrayIndex].email}
        />
        )
    }
    return (
        <View>
            <View style={styles.textInputView}>
                <TextInput
                placeholder="Search user name"
                value={searchText}
                style={styles.textInput}
                onChangeText={onSearchTextChange}
                />
            </View>
            <View>
                <FlatList 
                 data={searchResult}
                 keyExtractor={(item,index) => item.id}
                 renderItem={renderSearchItem}
                />
            </View>
        </View>
    )
}

const compareString = textToSearch =>{
    let KeepSimilarityValue = [];
    for(let indx=0; indx < person.length; indx++){
        let id = person[indx].id;
        let fullName = person[indx].firstName+" "+person[indx].lastName;
        let value = stringSimilarity.compareTwoStrings(fullName.toLowerCase(),textToSearch.toLowerCase());
        //let value = Similarity(fullName.toLowerCase(),textToSearch.toLowerCase());

        if(value >= 0.4){
        KeepSimilarityValue.push({
            fullName: fullName,
            rating: value,
            id: id, 
            arrayIndex: indx,
        })
      }
    }
    KeepSimilarityValue = KeepSimilarityValue.sort((a,b)=> b.rating - a.rating);
    KeepSimilarityValue = KeepSimilarityValue
    let finalResultList = [];
    if(KeepSimilarityValue.length > 10){
        for(var i=0; i< 10; i++){
            finalResultList.push(KeepSimilarityValue[i]);
        }
        KeepSimilarityValue = [];
    }
    else{
        finalResultList = [...KeepSimilarityValue];
        KeepSimilarityValue = [];
    }
    //console.log(finalResultList);
    return finalResultList;
}

const styles = StyleSheet.create({
    textInput:{
        width: '100%',
        borderWidth: 1,
        borderColor: 'blue',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
    },
    textInputView:{
        marginTop: 20,
        padding: 10,
    }
})

export default SearchComp;