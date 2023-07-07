import { ColorScheme } from '@mantine/core';
import { cookies } from 'next/headers';
import React from 'react';

import { AuthProvider } from 'components/providers/AuthProvider';
import { GqlProvider } from 'components/providers/GqlProvider';
import { StyleProvider } from 'components/providers/Style';

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'next-app-template',
  description: 'template for next.js app',
};

const RootLayout = async(props: Props) => {
  const { children } = props;
  let colorScheme = cookies().get('mantine-color-scheme')?.value || "";
  if (colorScheme !== 'dark' && colorScheme !== 'light') {
    colorScheme = 'light';
  }
  return (
    <html lang="ja">

      <body>
        <GqlProvider>
          <AuthProvider>
            <StyleProvider colorScheme={colorScheme as ColorScheme} >
              {children}
            </StyleProvider>
          </AuthProvider>
        </GqlProvider>
      </body>
    </html>
  );
};

export default RootLayout;
