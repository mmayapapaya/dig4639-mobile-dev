import React from 'react'
import {StyleSheet} from 'react-native'
import {Text, View} from 'react-native'
import {Card, Button} from 'react-native-elements'
import questions from './questions.json'

const TIME_LIMIT = 30
const TITLE_STATE = 0
const QUESTION_STATE = 1


export default class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      currentState: TITLE_STATE,
      counter: 0,
      currentQuestion: 0,
    }
  }

  nextQuestion(t) {
    //clearInterval(this.timer)
    //this.setState({
      //titleText:"You're Speedy!",
      //currentState: TITLE_STATE
    //})
    if (t.correct){
      this.setState({counter: this.state.currentQuestion + 1})
    }
      this.setState({currentQuestion: this.state.currentQuestion + 1})

  }

  start() {
    this.setState({counter:0})
    this.setState({currentState: QUESTION_STATE})
    this.timer = setInterval(() => {
    this.setState({counter : this.state.counter+1})
    if(this.state.counter < this.timeLimit) {
    this.setState({titleText:"Start Quiz" + this.state.counter})
} else {
  this.setState({titleText:"Time's Up."})
  clearInterval(this.timer)
}
}, 3000);
}

  render () {
    return (
      <Card style={styles.container}>
        {(this.state.currentState === TITLE_STATE) ? 

          <>
            <Text style={styles.text}>Personality Quiz for Lab Six</Text>
            <Button 
              title="Begin Quiz" 
              buttonStyle={styles.button} 
              onPress={ () => this.setState({ currentState: QUESTION_STATE })}
            />
          </>

          : (this.state.currentQuestion < questions.length) ? 
            <>
              <Text style={styles.question}>{questions[this.state.currentQuestion].question}</Text>
              <View>
                {questions[this.state.currentQuestion].answers.map((ans, i) => {
                  return <Button title={ans.text} key={i} buttonStyle={styles.button} onPress={() => this.nextQuestion(ans)} />
                })}
              </View>
            </>

          : 
            
            <>
              <Text style={styles.question}>Finished!</Text>
              <Text style={styles.score}>Your Score: {this.state.score}/{questions.length}</Text>
              <Button title="Start Over" buttonStyle={styles.button} onPress={() => this.setState({ currentState: TITLE_STATE, currentQuestion: 0, score: 0 })}/>
            </>
        }
      </Card>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
    text: {
    fontSize: 18,
    color: 'navy',
  }
});