import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Location from './pages/Location';
import Contact from './pages/Contact';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/contacto" component={Contact} />
				<Route path="/ubicacion" component={Location} />
				<Route path="/somos-natural" component={AboutUs} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
