import React, { Component } from 'react';
import Balls from './Balls';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }
    state = {
        nums: Array.from({length: this.props.maxBalls})
    }
    generate = () => {
        this.setState(cur => ({
            nums: cur.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }));
    }
    handleClick = () => {
        this.generate();
    }

    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                {this.state.nums.map((n) => {
                    return <Balls num={n}/>
                })}
                <button onClick={this.handleClick}>Generate</button>
            </section>
        )
    }
}

export default Lottery