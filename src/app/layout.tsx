import '@mantine/core/styles.css';
import React, {ReactNode} from 'react';

import {ColorSchemeScript} from '@mantine/core';

import {CustomAppShell} from '~/frontend/components/CustomAppShell';
import {PwaHeader} from '~/frontend/lib/PwaHeader';
import {StyleProvider} from '~/frontend/lib/StyleProvider';
import {auth} from '~/lib/nextAuth';
import {GqlProvider} from "~/frontend/lib/apollo/GqlProvider";

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default async function RootLayout({children}: {children: ReactNode}) {
  const session = await auth();
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
            <CustomAppShell hasNavbar={session !== null}>
              {children}
            </CustomAppShell>
          </StyleProvider>
        </GqlProvider>
      </body>
    </html>
  );
}
