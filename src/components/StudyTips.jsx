import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles/AppStyles';

const StudyTips = ({ studyGuide }) => {
  return (
    <ScrollView contentContainerStyle={styles.tipsContainer}>
      <Text style={styles.tipsHeading}>📖 AI Study Guide</Text>
      <Text style={styles.tipsText}>{studyGuide}</Text>
    </ScrollView>
  );
};

export default StudyTips;
