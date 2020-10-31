import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const RestaurantItem = (props) => {
  return (
    
      <TouchableOpacity 
        style={styles.container}
        onPress={() =>props.onSelectRestaurant(props.item)}
     >
        <Icon name={'fire'} size={20} color={"red"} />
        <Text style={styles.text}>{props.item.name}</Text>
      </TouchableOpacity>
    
  );
};

export {RestaurantItem};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection:"row",
    justifyContent:"flex-start"
  },
  text: {
    fontSize: 18,
    marginLeft:10
  },
});

