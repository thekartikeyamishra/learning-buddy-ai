import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { scheduleNotification, requestNotificationPermission } from '../utils/notifications';

const Reminder = () => {
  const [message, setMessage] = useState('');
  const [time, setTime] = useState('');

  const handleSetReminder = async () => {
    const granted = await requestNotificationPermission();
    if (!granted) {
      alert('Notification permissions not granted');
      return;
    }

    const seconds = parseInt(time) || 5;
    scheduleNotification('Reminder Set!', message, seconds);
    alert(`Reminder set for ${seconds} seconds`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set a Reminder</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter reminder message"
        value={message}
        onChangeText={setMessage}
      />
      <TextInput
        style={styles.input}
        placeholder="Time in seconds"
        keyboardType="numeric"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Set Reminder" onPress={handleSetReminder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { width: '80%', padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 10, borderRadius: 5 },
});

export default Reminder;
