import Newsletter from './components/Newsletter';
import ThankYou from './components/ThankYou';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Newsletter />} />
      <Route path='thankyou' element={<ThankYou />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
