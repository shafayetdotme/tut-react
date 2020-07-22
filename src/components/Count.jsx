import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    add() {
        // setState(object:updater, [callback])
        // OR 
        // setState((state, props) => (stateChange), [callback])
        this.setState({
            count: this.state.count + 1,
        },
            () => { console.log(this.state.count) }
        )
    }

    substract() {
        this.setState({
            count: this.state.count - 1
        },
            () => { console.log(this.state.count) }
        )
    }

    addFive() {
        this.setState((prevState, props) => (
            {
                count: prevState.count + (props.num * 5)
            }
        ), () => {
            console.log(this.state.count);
        })
    }


    render() {
        return (
            <div>
                <h1>COUNT : {this.state.count}</h1>

                <button onClick={() => this.add()}>+</button>
                <button onClick={() => this.substract()}>-</button>
                <button onClick={() => this.addFive()}>Add 5</button>
            </div>
        )
    }
}

export default Count
