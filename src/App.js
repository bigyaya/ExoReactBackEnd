import './App.css';
import AdminTest from './components/AdminTest';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
import NameList from './components/NameList';
import UserGreeting from './components/UserGreeting';
// import Inline from './components/Inline';
import Stylesheets from './components/Stylesheets';
import Formulaire from './components/Formulaire';
import Newsletter from './components/Newsletter';
import DataFetchingOne from './components/DataFetchingOne';
// import Greet from './components/Greet';
// import Hero from './components/Hero';
// import Message from './components/Message';
// import Welcome from './components/Welcome';
import MovieSearch from './components/MovieSearch';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome /> */}

      {/* <Greet name="Thomas" age= "30 ans">
        Thomas est super !
      </Greet>
      <Greet name="Toto" age= "90 ans" />
      <Greet name="John" age= "23 ans" />

      <Hero name="Bruce" hero="Batman" >
        This is children props
      </Hero>
      <Hero name="Clark" hero="Superman" />
      <Hero name="Diane" hero="Wonder Woman" /> */}

      {/* <Welcome name="Thomas" age="24 ans">
          ceci est un test !
      </Welcome>
      <Welcome name="Titi" age="74 ans" />
      <Welcome name="Vincent" age="12 ans" /> */}

      {/* <Message />

      <Greet name="Thomas" age="24 ans" />
      <Greet name="Titi" age="68 ans" />
      <Greet name="Titi" age="68 ans">
        texte enfant 
      </Greet> */}

      {/* <FunctionClick />
      <ClassClick />
      <UserGreeting /> */}

      {/* <AdminTest /> */}
        {/* <NameList /> */}
      {/* <Inline /> */}
        {/* <Stylesheets primary = {true} /> */}
        {/* <Formulaire/> */}
        <Newsletter/>
        <DataFetchingOne/>
      <MovieSearch />



    </div>
  );
}

export default App;
