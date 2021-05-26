import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { MuiThemeProvider } from "material-ui/styles";

import "./App.css";
import UserForm from "./components/UserForm";
import Search from "./pixabayApi/search/Search";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <div style={{ marginLeft: "auto" }}>
            <Link
              to="/pixabay"
              className="link"
              style={{ marginRight: "10px" }}
            >
              Pixabay
            </Link>
            <Link to="/form" className="link">
              Form
            </Link>
          </div>
          {/* <Button color="inherit" style={{ marginLeft: "auto" }}>
            <Link to="/pixabay">Pixabay</Link>
          </Button>
          <Button color="inherit" style={{ marginLeft: "auto" }}>
            <Link to="/form">Form</Link>
          </Button> */}
        </Toolbar>
      </AppBar>

      {/* <nav>
        <ul>
          <li>
            <Link to="/pixabay">Pixabay</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>*/}
      <Switch>
        <Route path="/form">
          <div className="App">
            <UserForm />
          </div>
        </Route>
        <Route path="/pixabay">
          <MuiThemeProvider>
            <Search />
          </MuiThemeProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
