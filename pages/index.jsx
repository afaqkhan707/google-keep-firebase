import MainSection from '@/app/components/organisims/MainSection';
import Navbar from '@/app/components/organisims/Navbar';
import '../src/app/components/organisims/MainSection.css';
import UsersStore from '@/app/controllers/UsersStore';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='home'>
        <UsersStore>
          <Navbar />
          <MainSection />
        </UsersStore>
      </div>
    </>
  );
}
