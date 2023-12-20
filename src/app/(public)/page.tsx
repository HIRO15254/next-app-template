import React from 'react';

import { MainPageContents } from './_components/MainPageContents';

export const metadata = {
  title: 'next-app-template',
  description: 'オレオレNext.jsフルスタック環境',
};

const MainPage: React.FC = () => (
  <MainPageContents />
);

export default MainPage;
