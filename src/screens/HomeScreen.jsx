import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AppStyles';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/home-animation.json')} autoPlay loop style={styles.animation} />
      <Text style={styles.heading}>📚 Welcome to Learning Buddy</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttonText}>🎯 Start AI Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
