import './App.css';
import {useState} from "react";

function App() {
  const [temp, setTemp] = useState(0)

  const conditionColor = () => {
    if (temp <= 9){
      return "#54b7f0"
    }
    if (temp > 9 && temp <= 18){
      return "#c47704"
    }
    if (temp > 18){
      return "#c91e04"
    }
  }

  const styles = {
    App: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#151b40",
    },
    tempContainer: {
      width: "15%",
      height: "40%",
      border: "1px solid gray",
      borderRadius: "20px",
      position: "relative",
      backgroundColor: "#202336",
    },
    tempValueContainer: {
      position: "absolute",
      width: "8em",
      height: "8em",
      top: "2em",
      left: "3.5em",
      right: "4em",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "1em",
      backgroundColor: conditionColor()
    },
    buttonContainer: {
      position: "absolute",
      bottom: "2em",
      right: "2em",
      left: "2em",
      display: "flex",
      justifyContent: "space-between",
    },
    button: {
      width: "5em",
      height: "5em",
      borderRadius: "50%",
      color: "white",
      border: "2px solid white",
      fontSize: "1em",
      backgroundColor: "#30344d",
    }
  }
  const increase = () => {
    setTemp(temp + 1)
  }
  const decrease = () => {
    setTemp(temp - 1)
  }

  return (
    <div style={styles.App}>
      <div style={styles.tempContainer}>
        <div style={styles.tempValueContainer}>{temp}°C</div>
        <div style={styles.buttonContainer}>
          <button onClick={increase} style={styles.button}>+ 1</button>
          <button onClick={decrease} style={styles.button}>- 1</button>
        </div>
      </div>
    </div>
  );
}

export default App;
