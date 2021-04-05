import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView , FlatList, TouchableOpacity, StyleSheet , Image} from 'react-native'
import { SearchBar } from 'react-native-elements';

import firebase from 'firebase';
require('firebase/firestore');

export default function Search(props) {
    const [users, setUsers] = useState([])

    const fetchUsers = (search) => {
        firebase.firestore()
            .collection('users')
            .where('name', '>=', search)
            .get()
            .then((snapshot) => {
                let users = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                });
                setUsers(users);
            })
    }
    return (
      <ScrollView>
        <View >
            <TextInput
                style={styles.text1} 
                placeholder="Type Here..."
                onChangeText={(search) => fetchUsers(search)} />

            <FlatList
            style={styles.flat} 
                numColumns={1}
                horizontal={false}
                data={users}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("Profile", {uid: item.id})}>
                        <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                        <Text style={styles.text} >{item.name}</Text>
                    </TouchableOpacity>

                )}
            />
        </View>
          </ScrollView>
    )
}

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 80,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
  },
  text: {
    width: 100,
    height: 40,
    alignSelf:'center',
    marginRight: 160
  },
  text: {
    marginTop: 800,
    paddingTop: 1000,
    color: 'black'
  },
  flat: {
    width: 300,
    height: 200,
  }
});