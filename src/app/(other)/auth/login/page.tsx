import LoginForm from './_components/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Login = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const callback = searchParams.callbackUrl?.toString();

  const session = await getServerSession()
  // ログイン済みなら戻す
  if (session) {
    console.log(session)
    redirect(callback ?? "/");
  }
  return (
    <LoginForm callbackUrl={callback} />
  )
}

export default Login;