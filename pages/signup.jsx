import Head from 'next/head';
import SignupForm from '@/app/components/organisims/signupForm';

function signup() {
  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>
      <SignupForm />
    </>
  );
}

export default signup;
