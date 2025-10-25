import "./App.css";
import Clicker from "./components/Clicker";
import Counter from "./components/Counter";
import DashBoard from "./components/DashBoard";
import Greetings from "./components/Greetings";
import Header from "./components/Header";
import Inputer from "./components/Inputer";
import NameForm from "./components/NameForm";
import Notifications from "./components/Notifications";
import ToggleTheme from "./components/ToggleTheme";
import UncontroledInput from "./components/UncontroledInput";
import UserList from "./components/UserList";
import WelcomeMassage from "./components/WelcomeMassage";
import CounterDisplay from "./components/CounterDisplay";
import CounterButtons from "./components/CounterButtons";



function App() {
  return (
    <>
      <CounterDisplay />
      <CounterButtons />
      <UncontroledInput />
      <NameForm />
      <Notifications unread={true} />
      <Notifications unread={false} />
      <DashBoard isLogedIn={true} />
      <WelcomeMassage isLogedIn={true} />
      <WelcomeMassage isLogedIn={false} />
      <Inputer />
      <Clicker />
      <ToggleTheme IsOnline={true} />
      <ToggleTheme IsOnline={false} />

      <Greetings name="Hinda" surname="Mohamoud" />
      <Header />
      <Counter />
      <UserList />
    </>
  );
}

export default App;
