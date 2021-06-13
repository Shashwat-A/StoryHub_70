import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View , KeyboardAvoidingView , ToastAndroid} from 'react-native';
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
        db.collection("story").add({
            'storyTitle' : this.state.storyName,
            'storyAuthor': this.state.storyAuthor,
            'story' : this.state.story
        })

        this.setState({
            story: '',
            storyAuthor: "",
            storyName:'',
        })

        ToastAndroid.show("Your Story Has Been Submitted", ToastAndroid.SHORT)
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.container}>
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

            </KeyboardAvoidingView>
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
        backgroundColor: 'yellow',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 15,
        textAlign: 'center',
    },

    namBx : {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 24,
        margin: 30,
        borderWidth: 2,
        width: '80%'
    },

    authBx : {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 24,
        margin: 50,
        borderWidth: 2,
        width: '80%'
    },

    writeBx : {
        justifyContent: 'center',
        textAlign: 'left',
        alignItems: 'center',
        fontSize: 24,
        margin: 30,
        borderWidth: 2,
        width: '80%'
    }
  });