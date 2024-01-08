import { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <GoalInput />
      <GoalItem />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
  },
});
