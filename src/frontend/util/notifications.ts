import {NotificationData, notifications} from '@mantine/notifications';

export const successNotification = (
  message: string,
  options?: NotificationData
) => {
  notifications.show({
    message,
    title: '成功',
    color: 'teal',
    ...options,
  });
};

export const errorNotification = (
  message: string | Error,
  options?: NotificationData
) => {
  if (message instanceof Error) {
    if (process.env.NODE_ENV === 'development') {
      message = message.message;
    } else {
      message = 'エラーが発生しました';
    }
  }
  notifications.show({
    message,
    title: '失敗',
    color: 'red',
    ...options,
  });
};
