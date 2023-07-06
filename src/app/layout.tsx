import React from 'react';

import { AuthProvider } from 'components/providers/AuthProvider';
import { GqlProvider } from 'components/providers/GqlProvider';
import { StyleProvider } from 'components/providers/Style';


interface Props {
  children: React.ReactNode
}

const RootLayout = async(props: Props) => {
  const { children } = props;
  return (
    <html lang="ja">

      <body>
        <GqlProvider>
          <AuthProvider>
            <StyleProvider>
              {children}
            </StyleProvider>
          </AuthProvider>
        </GqlProvider>
      </body>
    </html>
  );
};

export default RootLayout;
