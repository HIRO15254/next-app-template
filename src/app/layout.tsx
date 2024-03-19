import {ColorSchemeScript} from '@mantine/core';
import {AuthProvider} from 'providers/AuthProvider';
import {GqlProvider} from 'providers/GqlProvider';
import {HotKeysProvider} from 'providers/HotKeysProvider';
import {PwaHeader} from 'providers/PwaHeader';
import {StyleProvider} from 'providers/StyleProvider';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import 'styles/globalColor.css';
import React from 'react';

// TODO: タイトルと説明を変更
export const metadata = {
  title: 'next-app-template',
  description: 'template for next.js app',
};

interface Props {
  children: React.ReactNode;
}

/**
 * 全ページに共通する部分のレイアウト
 */
const RootLayout: React.FC<Props> = props => {
  const {children} = props;

  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <PwaHeader />
        <ColorSchemeScript />
      </head>
      <body>
        <GqlProvider>
          <AuthProvider>
            <StyleProvider>
              <HotKeysProvider>{children}</HotKeysProvider>
            </StyleProvider>
          </AuthProvider>
        </GqlProvider>
      </body>
    </html>
  );
};

export default RootLayout;
