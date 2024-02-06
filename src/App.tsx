import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/logic/Footer/Footer';
import Navbar from './components/logic/Navbar/Navbar';
import AppRouter from './router/AppRouter';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<AppRouter />
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
