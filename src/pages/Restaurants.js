import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch} from "react-redux"

import {RestaurantItem} from '../components';

const Restaurants = (props) => {
  const [list, setList] = useState([]);
  const dispatch=useDispatch()
  const fetchData = () => {
    axios
      .get('https://opentable.herokuapp.com/api/restaurants', {
        params: {state: 'IL'},
      })
      .then((response) => setList(response.data.restaurants))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderList = ({item}) => {
      return(
          <RestaurantItem 
            item={item} 
            onSelectRestaurant={() =>dispatch({type:"ADD_FAVORIT", payLoad:{selectedrestaurant:item}})} 
        />
      )
  }


  return (
    <View>
      <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>
        Restaurants
      </Text>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={renderList}
        ItemSeparatorComponent={() => (
          <View style={{borderWidth: 1, borderColor: 'gray'}} />
        )}
      />
    </View>
  );
};

export {Restaurants};

// axios
//       .post(
//         'https://worldwide-restaurants.p.rapidapi.com/search',
//         {
//           "limit": '30',
//           "language": 'en_US',
//           "location_id": '297704',
//           "currency": 'USD',
//         },
//         {
//           headers: {
//             'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
//             'x-rapidapi-key':
//               '94588c0f9fmshc237ba64e9f96abp130ff1jsnd15e896c0ee5',
//             'content-type': 'application/json',
//           },
//         },
//       )
