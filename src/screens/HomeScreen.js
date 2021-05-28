import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {decrementCount, incrementCount} from '../store/actions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const {counter} = useSelector(({HomeReducer}) => HomeReducer);
  console.log(counter);
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{counter}</Text>

      <Button
        onPress={() => {
          dispatch(incrementCount());
        }}
        title="increment"
        color="#841584"
      />

      <Button
        onPress={() => {
          dispatch(decrementCount());
        }}
        disabled={counter === 0}
        title="decrement"
        color="#841504"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },

  count: {
    textAlign: 'center',
    margin: 20,
  },
});
