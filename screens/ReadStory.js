import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStory extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>ReadStory</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
  });