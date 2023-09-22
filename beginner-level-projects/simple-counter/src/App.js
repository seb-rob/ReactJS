import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0)

  const styles = {
    App: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1b211c",
      color: "white",
    },
    container: {
      width: "25%",
      height: "35%", 
      border: "5px solid cyan",
      borderRadius: "8px",
      backgroundColor: "black",
      position: "relative",
      padding: "20px",
    }, 
    countContainer: {
      fontSize: "3.9rem",
      position: "absolute",
      top: "20%",
      left: "45%",
      right: "45%",
    },
    actionContainer: {
      position: "absolute",
      left: "0",
      right: "0",
      bottom: "0",
      height: "20%",
      dispaly: "flex",
    },
    buttonContainer: {
      display: "inline",
      width: "75%",
    },
    resetContaiiner: {
      display: "inline",
      width: "25%"
    }, 
    buttonStyle: {
      backgroundColor: "transparent",
      border: '2px solid cyan',
      borderRadius: "2em",
      color: "white",
      padding: "5px 10px 5px 10px",
      margin: "0 1.5em 0 1.5em",
      fontWeight: "bold",
      textTransform: "capitalize"
    }
  }

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <div style={styles.App}>
      <div style={styles.container}>
        <div style={styles.countContainer}>{count}</div>
        <div style={styles.actionContainer}>
          <div style={styles.buttonContainer}>
            <button style={styles.buttonStyle} onClick={increase}>increase</button>
            <button style={styles.buttonStyle} onClick={decrease}>decrease</button>
          </div>
          <div style={styles.resetContaiiner}>
            <button style={styles.buttonStyle} onClick={reset}>reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;