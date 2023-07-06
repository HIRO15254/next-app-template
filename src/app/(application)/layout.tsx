import { getServerSession } from 'next-auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

import { MainAppShell } from 'app/_components/MainAppShell';

interface Props {
  children: React.ReactNode
}

const RootLayout = async (props: Props) => {
  const { children } = props;
  const url = headers().get('referer') ?? "";
  const session = await getServerSession();

  if (!session) { 
    redirect(`/auth/login?callbackUrl=${url}`);
  }
  return (
    <MainAppShell session={session}>
      {children}
    </MainAppShell>
  );
};

export default RootLayout;
