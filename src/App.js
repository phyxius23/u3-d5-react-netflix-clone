import './App.css';
import MyNav from './components/MyNav';
// import Profile from './components/AccountPage';
import HeaderHomepage from './components/HeaderHomepage';
import ShowFilms from './components/ShowFilms';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
     {/* 
       Per visualizzare la pagina profilo in modo corretto devo:
       1 - alla props di MyNav devo cambiare il valore in true
       2 - decommentare il Profile sia tra gli import che nei componenti sotto
       3 - commentare HeaderHomepage, ShowFilms e MyFooter sia negli import che nei component sotto
     */}
     <MyNav accountPage="false" />
     {/* <Profile /> */}
     <HeaderHomepage />
     <ShowFilms search="Harry Potter" />
     <ShowFilms search="Star Wars" />
     <ShowFilms search="Indiana Jones" />
     <MyFooter />
    </>
  );
}

export default App;
