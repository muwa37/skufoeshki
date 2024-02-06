import { Navigate, Route, Routes } from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
	return (
		<Routes>
			{routes.map(route => (
				<Route path={route.path} element={route.element} key={route.path} />
			))}
			<Route path='*' element={<Navigate replace to='/home' />} />
		</Routes>
	);
};

export default AppRouter;
