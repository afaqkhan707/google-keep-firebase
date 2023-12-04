import Head from 'next/head';
import SigninForm from '@/app/components/organisims/signinForm';

function signin() {
  return (
    <>
      <Head>
        <title>SignIn</title>
      </Head>
      <SigninForm />
    </>
  );
}

export default signin;
