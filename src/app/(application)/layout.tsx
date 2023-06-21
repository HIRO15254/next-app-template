import { MainAppShell } from 'app/_components/MainAppShell'
import { getServerSession } from 'next-auth';
import { redirect, usePathname } from 'next/navigation';
import { headers } from 'next/headers';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

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
  )
}

export default RootLayout;
