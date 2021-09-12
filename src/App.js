import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

//Layout
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

//Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Form from './pages/Form';

import ScrollToTop from './components/ScrollToTop';

function App() {

	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Switch>
				<Route path="/formulario" component={Form} />
				<Route path="/contacto" component={Contact} />
				<Route path="/ubicacion" component={Location} />
				<Route path="/somos-natural" component={AboutUs} />
				<Route path="/" component={Home} />
			</Switch>
			<Footer />
			<WhatsAppButton />
		</Router>
	);
}

export default App;
