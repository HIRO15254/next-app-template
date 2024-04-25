import React from 'react';

interface Props {
  children: React.ReactNode;
}

/**
 * アプリケーション内のページに共通するレイアウト
 */
const ApplicationLayout = async (props: Props) => {
  const {children} = props;

  return children;
};

export default ApplicationLayout;
