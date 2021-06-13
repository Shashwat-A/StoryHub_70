import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import db from '../config';
import firebase from 'firebase'
import SearchBar from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';

export default class ReadStory extends React.Component {
    constructor () {
        super()

        this.state = {
            isSearched: false,
            searchStoryNm: '',
            searchAuthorNm: '',
            allStories: [],
            searchedStory: [],
        }
    }

    searchStory = async()=> {
        var storyNmSearched = await db.collection("story").where("storyTitle", "==", this.state.searchStoryNm).get()
        var authorNmSearched = await db.collection("story").where("storyAuthor", "==", this.state.searchAuthorNm).get()

        storyNmSearched.docs.map(doc => {
            this.setState({
                searchedStory: [...this.state.searchedStory, doc.data()]
            })
        })

        authorNmSearched.docs.map(doc => {
            this.setState({
                searchedStory: [...this.state.searchedStory, doc.data()]
            })
        })

        
        
    }

    componentDidMount= async() => {
        var  allStories = await db.collection("story").get()
        allStories.docs.map(doc => {
            this.setState({
                allStories: [...this.state.allStories, doc.data()]
            })
        })
        
    }

    render() {
        return(
            
            <View style={styles.container}>
                <View>
                <TextInput
                    placeholder= "Search Story"
                    style={{width: '80%', fontSize: 20, justifyContent: 'center', borderWidth: 4, margin: '8%'}}
                    onChangeText={(text)=> {
                        this.setState({
                            searchStoryNm: text,
                            isSearched: true
                        })
                    }}
                />

                <TextInput
                    placeholder= "Search Author"
                    style={{width: '80%', fontSize: 20, justifyContent: 'center', borderWidth: 4, margin:'8%', marginTop: 0}}
                    onChangeText={(text)=> {
                        this.setState({
                            searchAuthorNm: text,
                            isSearched: true
                        })
                    }}
                />
                </View>

                <TouchableOpacity 
                style={{borderWidth: 4, width: '30%', padding: 13, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: 'yellow'}}
                onPress={()=>{
                    this.searchStory()
                }}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Search</Text>
                </TouchableOpacity>

                <FlatList
                    data={this.state.isSearched ? this.state.searchedStory : this.state.allStories}
                    renderItem={({item}) => (
                        <View style={{justifyContent: 'flex-start', alignItems: 'center', borderWidth: 1.5}}>
                            <Text style={{fontSize: 25}}>{"StoryName: " + item.storyTitle}</Text>
                            <Text style={{fontSize: 25}}>{"StoryAuthor: " + item.storyAuthor}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6ccff',
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
  });