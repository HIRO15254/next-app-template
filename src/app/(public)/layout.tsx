import {CustomAppShell} from 'components/CustomAppShell';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

/**
 * 公開ページの共通レイアウト
 */
const PublicLayout = async (props: Props) => {
  const {children} = props;
  return <CustomAppShell>{children}</CustomAppShell>;
};

export default PublicLayout;
