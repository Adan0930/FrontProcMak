import ComRoutes from './routes';
import './App.css';
import {NextUIProvider} from "@nextui-org/react";


function App() {
  return (
   <NextUIProvider>
       <ComRoutes></ComRoutes>
   </NextUIProvider>

  );
}

export default App;
