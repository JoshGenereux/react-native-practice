import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = () => {
  return (
    <View style={styles.goalContainer}>
      <TextInput placeholder="Your course goal" />
      <Button title="Add Goal" />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  goalContainer: {
    display: 'flex',
    flex: 1,
  },
});
