import './App.css';
// import HeaderHomepage from './components/HeaderHomepage';
// import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Profile from './components/Profile';
// import ShowFilms from './components/ShowFilms';

function App() {
  return (
    <>
     <MyNav profilePage="true" />
     {/* <HeaderHomepage />
     <ShowFilms search="Harry Potter" />
     <ShowFilms search="Star Wars" />
     <ShowFilms search="Indiana Jones" />
     <MyFooter /> */}
     <Profile />
    </>
  );
}

export default App;
