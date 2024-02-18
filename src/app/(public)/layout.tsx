import React from 'react';

import {PublicAppShell} from './_components/PublicAppShell';

interface Props {
  children: React.ReactNode;
}

/**
 * 非ログイン必須ページのレイアウト
 */
const RootLayout = async (props: Props) => {
  const {children} = props;
  return <PublicAppShell>{children}</PublicAppShell>;
};

export default RootLayout;
