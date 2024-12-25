import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: String) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
    // <div>
    //   <Alert>
    //     Hello <h1>Himanshu</h1>
    //   </Alert>
    // </div>
    <div>
      {alertVisible && (
        <Alert
          onClick={() => {
            setAlertVisibility(false);
          }}
        >
          My Alert
        </Alert>
      )}
      <Button
        color={"primary"}
        onClick={() => {
          // console.log("clicked");
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
