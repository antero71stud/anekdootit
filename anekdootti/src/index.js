import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return <button onClick={props.next}>{props.arvo}</button>
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0, 0, 0, 0, 0, 0]
    }
  }

  randomNextAnecdote = () => {
    console.log('randomNextAnecdote')
    return () => {
        this.setState({
            selected: Math.floor((Math.random() * anecdotes.length))
        })
    }
}

displayVotes = () => {
    console.log('displayVotes')
    return () => {
        (this.pisteet[this.selected])
    }
}

vote = () => {
    return () => {
    const kopio = this.state.pisteet
    console.log('kopio ',kopio)
    kopio[this.state.selected]=kopio[this.state.selected]+1
    console.log('vote, selected', this.state.selected)
    console.log('vote ',kopio[this.state.selected])
 
       this.setState({
            pisteet: kopio
       })
    }
  }

  render() {
    console.log('selected is ',this.state.selected)
    let aanet = 0
    if (this.state.pisteet[this.state.selected]) {
        aanet = this.state.pisteet[this.state.selected]
    }
    return (
        
      <div>
        <br />
        {this.props.anecdotes[this.state.selected]}
        <br />
        <div>Saatuja ääniä votes {aanet}</div>
        <br />
        <tr>
          <td>
             <Button next={this.vote()} arvo={"Vote"} />
          </td>
          <td>
             <Button next={this.randomNextAnecdote()} arvo={"Next anecdote"} />
          </td>
        </tr>
     </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)