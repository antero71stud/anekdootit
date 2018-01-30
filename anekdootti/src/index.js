import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return <button onClick={props.next}>{props.arvo}</button>
}


const DisplayVotes = ({ counter }) => {

    return (
      <div>{counter}</div>
    )
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



mostVotes = () => {

    let maxValue = Math.max(...this.state.pisteet)

    let indeksi

    for(var i = 0; i < this.state.pisteet.length; i++){
        if(this.state.pisteet[i]===maxValue){
            indeksi = i
        }
    }

    console.log('maxValue',maxValue,' on indeksissa ',indeksi)
    return (
        <p><h1>Anecdote with most votes:</h1>
        {this.props.anecdotes[indeksi]}
        <br />
        has {maxValue} votes
        </p>
    )

    
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
    let mostVotes = this.mostVotes()
    console.log('mostVotes, renderissa ',mostVotes)
    console.log('aanet ',aanet)
    return (
      <div>
        <br />
        {this.props.anecdotes[this.state.selected]}
        <br />
        <br />
        <div>Has {aanet} votes</div>
        <br />
        
             <Button next={this.vote()} arvo={"Vote"} />
          
             <Button next={this.randomNextAnecdote()} arvo={"Next anecdote"} />
        {this.mostVotes()}
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