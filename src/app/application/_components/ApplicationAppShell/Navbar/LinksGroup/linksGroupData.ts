import {IconSquareRoundedLetterQ, IconHome} from '@tabler/icons-react';
import {APPLICATION_TOP_URL} from 'const/urls';

export const linksGroupData = [
  {label: 'ダッシュボード', icon: IconHome, link: APPLICATION_TOP_URL},
  {
    label: '折り畳み',
    icon: IconSquareRoundedLetterQ,
    initiallyOpened: true,
    link: [
      {label: 'リンク1', link: '/application/not-found'},
      {label: 'リンク2', link: '/application'},
    ],
  },
];
