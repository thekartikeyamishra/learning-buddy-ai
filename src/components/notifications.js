import * as Notifications from 'expo-notifications';

export const scheduleStudyReminder = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "📖 Study Time!",
      body: "Don't forget to revise your topics today! 🚀",
    },
    trigger: { seconds: 5 }, // Sends in 5 seconds (for testing)
  });
};
