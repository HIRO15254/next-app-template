import { getServerSession } from 'next-auth';
import React from 'react';

import { MainAppShell } from 'app/_components/MainAppShell';
import { authOptions } from 'lib/nextAuth';

interface Props {
  children: React.ReactNode
}

const RootLayout = async (props: Props) => {
  const { children } = props;
  const session = await getServerSession(authOptions);
  return (
    <MainAppShell noNavbar session={session ?? undefined}>
      {children}
    </MainAppShell>
  );
};

export default RootLayout;
