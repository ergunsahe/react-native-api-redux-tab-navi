import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from "react-redux"



const Favorites = (props) => {
    const list=useSelector(state =>state.favoriList)

    const renderList=({item}) =>{
      return(
        <View style={{margin:15, backgroundColor:"#e0e0e0", padding:10, borderRadius:10}}>
          <Text style={{fontSize:18, color:"#455a64"}}>{item.name} </Text>
          <Text style={{fontSize:18, color:"#8d6e63"}}>{item.address} </Text>
          <Text style={{fontSize:18, color:"#8d6e63"}}>{item.city} </Text>
          <Text style={{fontSize:18, color:"#8d6e63"}}>{item.country} </Text>
        </View>
      )
    }
  return (
    <View style={{flex:1,}}>
      <Text style={{margin:15, fontWeight:"bold", fontSize:30}}>Favorites</Text>
      <FlatList
        keyExtractor={(_, index) =>index.toString()}
        data={list}
        renderItem={renderList}
        ListEmptyComponent={() => <Text>Nothing on fav..</Text>}
      
      />
    </View>
  );
};

export {Favorites};
