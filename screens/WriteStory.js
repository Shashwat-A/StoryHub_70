import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class WriteStory extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder= "Story Title"
                    style={styles.namBx}
                />

                <TextInput
                    placeholder= "Author"
                    style={styles.authBx}
                />

                <TextInput
                    placeholder= "Write your Story"  Y
                    multiline= {true}
                    style={styles.writeBx}
                />

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
    },

    namBx : {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 24,
        width : '80%',
        margin: 30,
        borderWidth: 2,
        height: '20%',
    },

    authBx : {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 24,
        width : '80%',
        margin: 50,
        borderWidth: 2,
        height: '20%',
    },

    writeBx : {
        justifyContent: 'center',
        textAlign: 'left',
        alignItems: 'center',
        fontSize: 24,
        width : '80%',
        margin: 30,
        borderWidth: 2,
        height: '50%',
    }
  });