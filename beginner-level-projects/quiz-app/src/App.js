import './App.css';
import {useState} from "react";

function App() {
  // states
  const [score, setScore] = useState(0)
  const [question, setQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)

  // questions
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  // styles
  const styles = {
    quizContainer: {
      backgroundColor: "#2d2d2e",
      maxWidth: "450px",
      minWidth: "200px",
      minHeight: "250px",
      padding: "5px",
      display: "flex",
      flexDirection: "row",
      borderRadius: "15px",
      maxHeight: "250px",
    },
    textContainer: {
      width: "50%",
      height: "100%",
      padding: "4px",
    },
    answerContainer: {
      width: "50%",
      height: "100%",
      padding: "4px",
    },
    listContainer: {
      padding: "5px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    list: {
      listStyleType: "none",
      padding: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid darkgray",
      marginBottom: ".9rem",
      borderRadius: "5%",
      outlineColor: "darkblue",
      cursor: "pointer",
    },
    showScore: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  }

  //functins
  const clickHandler = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1)
    }
    setQuestion(question + 1)
    if (question + 2 > questions.length){
      setShowScore(true)
    }
  }

  return (
    <div style={styles.quizContainer}>
      {
        showScore ? <h2>You scored {score} out of {questions.length}</h2> :
        <>
          <div style={styles.textContainer}>
            <h3 style={{display: "inline"}}>Question {question + 1}</h3><span>/{questions.length}</span>
            <p>{questions[question].questionText}</p>
          </div>
          <div style={styles.answerContainer}>
            <ul style={styles.listContainer}>
              {
                questions[question].answerOptions.map((val) => {
                  return(
                    <li style={styles.list} onClick={() => clickHandler(val.isCorrect)}>{val.answerText}</li>
                    )
                  })
                }
            </ul>
          </div>
        </>
      }
    </div>
  );
}

export default App;
