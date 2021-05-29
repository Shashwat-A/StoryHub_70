import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class WriteStory extends Component {
    constructor() {
        super();

        this.state = {
            storyName : '',
            storyAuthor: '',
            story: '',
        }
    }

    updateStory = async() => {
        console.log('adding story')

        db.collection("story").add({
            'storyTitle' : this.state.storyName,
            'storyAuthor': this.state.storyAuthor,
            'story' : this.state.story
        })

        console.log('story added')
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder= "Story Title"
                    style={styles.namBx}
                    onChangeText= {(text)=> {
                        this.setState({
                            storyName: text
                        })
                    }}
                />

                <TextInput
                    placeholder= "Author"
                    style={styles.authBx}
                    onChangeText= {(text)=> {
                        this.setState({
                            storyAuthor: text
                        })
                    }}
                />

                <TextInput
                    placeholder= "Write your Story"  
                    multiline= {true}
                    style={styles.writeBx}
                    onChangeText= {(text)=> {
                        this.setState({
                            story: text
                        })
                    }}
                />

                <TouchableOpacity style = {styles.bn} 
                onPress={async () => {
                            this.updateStory()
                        }}>
                    <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>

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

    bn: {
        width: '20%',
        height: '10%',
        backgroundColor: 'yellow',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 15,
        textAlign: 'center',
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