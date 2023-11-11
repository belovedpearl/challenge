import css from './App.module.css';
import SideBar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <SideBar/> */}
      {/* <NavBarSimple/> */}
      <NavBarForm/>
    </div>
  );
}

export default App;