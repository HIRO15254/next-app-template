export enum SettingsPageRoutes {
  User = 'user',
  Avatar = 'avatar',
  Appearance = 'appearance',
}

export type RoutingData = {
  url: string;
  label: string;
};

export const SettingsPageRoutingData: {[key: string]: RoutingData} = {
  [SettingsPageRoutes.User]: {
    url: '/application/settings/user',
    label: 'ユーザー設定',
  },
  [SettingsPageRoutes.Avatar]: {
    url: '/application/settings/avatar',
    label: 'アイコン設定',
  },
  [SettingsPageRoutes.Appearance]: {
    url: '/application/settings/appearance',
    label: '外観設定',
  },
};
