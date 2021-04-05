import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Avatar = ({ onPressAvatar }) => (
    <TouchableOpacity onPress={() => onPressAvatar()}>
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png' }} />
            <Text style={styles.text}>Edit Photo</Text>
        </View>
    </TouchableOpacity>
)

var styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 100,
        borderRadius: 50,
        width: 100,
        marginBottom: 5
    },
    text: {
        fontWeight: 'bold'
    }
});

export default Avatar;