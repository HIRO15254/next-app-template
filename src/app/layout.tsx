import React from 'react';

import { AuthProvider } from 'components/providers/AuthProvider';
import { GqlProvider } from 'components/providers/GqlProvider';
import { StyleProvider } from 'components/providers/Style';
import useColorSchemeCookie from 'hooks/useColorSchemeCookie';

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'next-app-template',
  description: 'template for next.js app',
};

const RootLayout = async(props: Props) => {
  const { children } = props;
  const { colorScheme, setColorScheme } = useColorSchemeCookie();

  return (
    <html lang="ja">

      <body>
        <GqlProvider>
          <AuthProvider>
            <StyleProvider colorScheme={colorScheme} setColorScheme={setColorScheme} >
              {children}
            </StyleProvider>
          </AuthProvider>
        </GqlProvider>
      </body>
    </html>
  );
};

export default RootLayout;
