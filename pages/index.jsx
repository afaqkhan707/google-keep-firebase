import MainSection from '@/app/components/organisims/MainSection';
import Navbar from '@/app/components/organisims/Navbar';
import '../src/app/components/organisims/MainSection.css';
import UsersStore from '@/app/controllers/UsersStore';
import Head from 'next/head';
import ContextKeepProvider from '@/app/context/ContextKeep';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='home'>
        <ContextKeepProvider>
          <UsersStore>
            <Navbar />
            <MainSection />
          </UsersStore>
        </ContextKeepProvider>
      </div>
    </>
  );
}
