import {BrowserRouter as Router , Route ,Switch} from "react-router-dom";
import Home from "./Component/Home";
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
import CalendarComponent from "./Component/Calender";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/calendar" component={CalendarComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
