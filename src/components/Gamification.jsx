import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Gamification = () => {
  const [points, setPoints] = useState(0);

  const earnPoints = () => {
    setPoints(points + 10);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Gamification</Text>
      <Text style={styles.points}>Points: {points}</Text>
      <Button title="Earn Points" onPress={earnPoints} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  points: { fontSize: 18, marginBottom: 20 },
});

export default Gamification;
