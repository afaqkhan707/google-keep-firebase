import Navbar from './components/organisims/Navbar';
import MainSection from './components/organisims/MainSection';
import TodoStore from './controllers/TodoListStore.jsx';

export default function Home() {
  return (
    <TodoStore>
      <nav className='header'>
        <Navbar />
        <MainSection />
      </nav>
    </TodoStore>
  );
}
