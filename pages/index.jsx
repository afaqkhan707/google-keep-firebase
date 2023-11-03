import MainSection from '@/app/components/organisims/MainSection';
import Navbar from '@/app/components/organisims/Navbar';
import '../src/app/globals.css';
import '../src/app/components/organisims/MainSection.css';
import UsersStore from '@/app/controllers/UsersStore';
import GetNotes from '@/app/controllers/getNotes';

export default function Home() {
  return (
    <UsersStore>
      <nav className='header'>
        <Navbar />
        <MainSection />
      </nav>
    </UsersStore>
  );
}
