import * as Notifications from 'expo-notifications';

/**
 * Schedule a push notification
 * @param {string} title - Title of the notification
 * @param {string} body - Body message
 * @param {number} seconds - Delay in seconds before showing notification
 */
export async function scheduleNotification(title, body, seconds = 5) {
  await Notifications.scheduleNotificationAsync({
    content: { title, body, sound: true },
    trigger: { seconds },
  });
}

/**
 * Request permission for notifications
 */
export async function requestNotificationPermission() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}
