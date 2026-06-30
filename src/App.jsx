import {
  RouterProvider,
} from "react-router-dom";
import router from './routes'

function App() {
  const name = "Masoud";



  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
