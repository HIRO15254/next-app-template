'use client';

import { CacheProvider } from '@emotion/react';
import { Notifications } from '@mantine/notifications';
import { useEmotionCache, MantineProvider } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';

export const StyleProvider = ({ children }: { children: React.ReactNode }) => {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Notifications />
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}