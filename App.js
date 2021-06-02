/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 1000) 
  }, []);
  return (
    <>
    <Text style={styles.title}>{'Hello world'}</Text>
    <View
      style={styles.mainContainer}
    >
      <View
        style={styles.container} 
        >
        <View style={[styles.component, {backgroundColor: 'red', flex: 2}]}>
          <Text style={styles.counter}>{count}</Text>
        </View>
        <View style={[styles.component, {backgroundColor: 'lightgreen', flex: 1}]}></View>
        <View style={[styles.component, {backgroundColor: 'gray', flex: 1}]}>
          <Button
            title='Press me' 
            onPress={() => {
              // BAD
              // setCount(count + 1);
              // GOOD
              setCount((prevCount) => {
                return prevCount + 1;
              });
            }}></Button>
        </View>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
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
  }
});

export default App;
