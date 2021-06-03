/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useReducer} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useSelector, useDispatch } from 'react-redux';


// son funciones puras no hacemos referencias a referencias externas
// recibe dos argumentos
// primer argumento es estado
// segundo argumento es action es un objeto que debe tener una propiedad type
// el type es un string que define un accion
// regresamos el nuevo estado
// count = 0 -> 2 ese es el nuevo estado
const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREASE_COUNTER':
     return {
       ...state,
       counter: state.counter + action.payload
      };
    case 'DECREASE_COUNTER':
     return {
      ...state,
      counter: state.counter - action.payload
     };
    case 'FETCH_BOOKS':
      return {
        ...state,
        books: action.payload
      }
    default:
      // MULTIPLY_COUNTER
      return state;
  }
}

/* {
  counter: 0,
  books: []
} */

const App = () => {
  // react use reducer
  const [state, dispatchReact] = useReducer(reducer, {
    counter: 0,
    books: []
  });
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
 /*  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://bookreviews-api.herokuapp.com/api/Books?access_token=hqBWSkkTS2ZENqstHMK3giIZk5raawkC0y0fohl6aI2IX3UaZiW7isCMWvBNe4B5');
      console.log(await response.json());
    }
    fetchData();
  }, []); */
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{'Hello world'}</Text>
        <View style={[styles.component, {backgroundColor: 'red', flex: 2}]}>
          <Text style={styles.counter}>{state.counter}</Text>
          <Text style={styles.counter}>{JSON.stringify(state.books[0])}</Text>
        </View>
        <ScrollView
          style={[
            styles.component,
            {backgroundColor: 'lightgreen', flex: 1},
          ]}>
            {books.map(v => {
              return (
                <Text key={v.id}>{v.title}</Text>
              );
            })}
          </ScrollView>
        <View style={[styles.component, {backgroundColor: 'gray', flex: 1}]}>
          <Button
            title="INCREASE"
            onPress={() => {
              dispatchReact({
                type: 'INCREASE_COUNTER',
                payload: 1
              });
            }}></Button>
            <Button
            title="Load bookss"
            onPress={() => {
              dispatch({
                type: 'LOAD_BOOKS'
              })
            }}></Button>
            
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'lightblue',
  },
  container: {
    height: '50%',
  },
  title: {
    color: 'green',
    fontSize: 50,
  },
  component: {
    height: 50,
    width: '100%',
  },
  counter: {
    fontSize: 100,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
