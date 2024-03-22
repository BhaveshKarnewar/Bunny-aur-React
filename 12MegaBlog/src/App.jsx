import "./App.css";
import authService from "./appwrite/auth";
function App() {
  // console.log("bhabehs");
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(authService);

  return (
    <>
      <h2>Blog with appwrite</h2>
    </>
  );
}

export default App;
