import AuthRoutes from "./routes/AuthRoutes";
import GestRoutes from "./routes/GestRoutes";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <GestRoutes />
      <AuthRoutes />
       <Toaster />
    </>
  );
}

export default App;
