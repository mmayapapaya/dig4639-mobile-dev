import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
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

  nextQuestion(q) {
    //clearInterval(this.timer)
    //this.setState({
      //titleText:"You're Speedy!",
      //currentState: TITLE_STATE
    //})
    if (q.correct){
      this.setState({counter: this.state.counter + 1})
    }
      this.setState({currentQuestion: this.state.currentQuestion + 1})
    }


  render () {
    return (
      <View style={styles.container}>
        {(this.state.currentState === TITLE_STATE) ? 

          <>
            <Text style={styles.text}>Personality Quiz for Lab Six</Text>
            <Button 
              style={styles.button}
              title="Start Quiz!" 
              onPress={ () => this.setState({ currentState: QUESTION_STATE })}
            />
          </>

          : (this.state.currentQuestion < questions.length) ? 
            <>
              <Text style={styles.text}>{questions[this.state.currentQuestion].question}</Text>
              <View>
                {questions[this.state.currentQuestion].answers.map((ans, i) => {
                  return <Button style={styles.button} title={ans.text} key={i} onPress={() => this.nextQuestion(ans)} />
                })}
              </View>
            </>

          : 
            
            <>
              <Text style={styles.text}>Finished!</Text>
              <Text style={styles.text}>Your Score: {this.state.counter}/{questions.length}</Text>
              <Button style={styles.button} title="Start Over" onPress={() => this.setState({ currentState: TITLE_STATE, currentQuestion: 0, counter: 0 })}/>
            </>
        }
      </View>
    )
  }
}
 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#AFEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    padding: 10,
  },

    text: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: "bold",
    color: '#4682B4'
  }

})