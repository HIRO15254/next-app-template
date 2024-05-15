import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import React, {ReactNode} from 'react';

import {ColorSchemeScript} from '@mantine/core';

import {CustomAppShell} from '~/frontend/components/CustomAppShell';
import {PwaHeader} from '~/frontend/lib/PwaHeader';
import {StyleProvider} from '~/frontend/lib/StyleProvider';
import {GqlProvider} from '~/frontend/lib/apollo/GqlProvider';
import {getLoginUserData} from '~/frontend/util/getLoginUserData';

export const metadata = {
  title: 'Next.js application Template',
  description: 'my favorite Next.js application template',
};

export default async function RootLayout({children}: {children: ReactNode}) {
  const userData = await getLoginUserData();
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
        <PwaHeader />
        <meta
          charSet="utf-8"
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <GqlProvider>
          <StyleProvider>
            <CustomAppShell userData={userData ?? undefined}>
              {children}
            </CustomAppShell>
          </StyleProvider>
        </GqlProvider>
      </body>
    </html>
  );
}
