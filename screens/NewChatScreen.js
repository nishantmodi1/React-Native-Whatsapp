import react, { use, useEffect } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton';
import PageContainer from '../components/PageContainer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '../constants/colors';
import { useState } from 'react';
import commonStyles from '../constants/commonStyles';

const NewChatScreen = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState();
  const [noResultFound, setNoResultFound] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title='Close'
          // iconName="close-sharp"
          onPress={() => props.navigation.goBack()} />
        </HeaderButtons>
      },
      headerTitle: 'New Chat',
      headerTitleStyle: {
        color: 'white',
      },
      headerTitleAlign: 'center' 
    })
  }, [])

  useEffect(() => {
    const deleaySearch = setTimeout(() => {
      if(searchTerm || searchTerm === ''){
        setUsers();
        setNoResultFound(false);
        return;
      }
      setIsLoading(true);
      // setUsers({})
      // setNoResultFound(true);
      setIsLoading(false);
    }, 500);
    return clearTimeout(deleaySearch)
    console.log('hii')
      
  }, [searchTerm])

  return (
    <PageContainer>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={24} color={colors.lightGrey} />
        <TextInput placeholder='search here...' style={styles.searchBox} onChangeText={(text) => setSearchTerm(text)} />
      </View>

      {
        !isLoading && noResultFound && (
          <View style={commonStyles.center}>
            <FontAwesome name="question" size={55} color={colors.lightGrey} style={styles.noResultsIcon} />
            <Text style={styles.noResultText} >No users </Text>
          </View>
        )
      }
      {
        !isLoading && !users && (
          <View style={commonStyles.center}>
            <FontAwesome name="users" size={55} color={colors.lightGrey} style={styles.noResultsIcon} />
            <Text style={styles.noResultText} >Enter a name to search for a users</Text>
          </View>
        )
      }
    </PageContainer>
  )
}

export default NewChatScreen;

const styles = StyleSheet.create({
  searchContainer:{
    // flex:1,
    flexDirection:'row',
    backgroundColor: colors.extraLightGray,
    height: 30,
    marginVertical: 8,
    paddingVertical: 5,
    borderRadius: 5,
    // justifyContent:'center',
    // alignItems: 'center', 
  },
  searchBox:{
    marginLeft: 10,
    fontSize: 15,
    width: '100%',
  },
  noResultsIcon:{
    marginBottom: 20,
  },
  noResultText:{
    color: colors.textColor,
    fontFamily: 'regular',
    letterSpacing: 0.3,
  }
})