import React from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

import { ListItem, Icon } from 'react-native-elements'


const TrackListScreen = ({ navigation }) => {

  const list = [
    {
      title: 'Appointments',
      icon: 'av-timer'
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff'
    },
  
  ]

  
  return (
    <>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }

    </>
  );
};


const styles = StyleSheet.create({});

export default TrackListScreen;
