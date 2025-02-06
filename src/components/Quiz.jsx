import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles/AppStyles';

const Quiz = ({ quizData }) => {
  return (
    <ScrollView contentContainerStyle={styles.quizContainer}>
      <Text style={styles.quizHeading}>📝 AI-Generated Quiz</Text>
      <Text style={styles.quizText}>{quizData}</Text>
    </ScrollView>
  );
};

export default Quiz;
