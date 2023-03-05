import { useEffect } from "react";
import createConnection from "./Chat";

function App() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    //react will call the cleanup function before the Effect runs again and when the component unmounts (gets removed)
    return () => {
      connection.disconnect();
    };
  }, []);

  return (
    <>
      <h1>Welcome to mushroom chat!</h1>
    </>
  );
}

export default App;
