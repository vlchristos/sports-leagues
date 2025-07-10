import "./App.css";
import { useGetLeaguesQuery } from "./services/api";

function App() {
  const { data, error, isLoading } = useGetLeaguesQuery();
  console.log("data,error,isLoading", data, error, isLoading);
  return <h1 className="text-3xl font-bold">Hello world!</h1>;
}

export default App;
