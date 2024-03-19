import React from 'react';

import {CustomAppShell} from '../../components/CustomAppShell';

interface Props {
  children: React.ReactNode;
}

/**
 * アプリケーション内のページに共通するレイアウト
 */
const ApplicationLayout = async (props: Props) => {
  const {children} = props;

  return <CustomAppShell hasNavbar>{children}</CustomAppShell>;
};

export default ApplicationLayout;
