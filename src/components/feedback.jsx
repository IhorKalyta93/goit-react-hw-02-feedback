import React from "react";
import styled from './Feedback.module.css'
export
class Feedback extends React.Component {

    constructor() {
        super()
        this.state = {
            value: 0,
        }
}
handleIncrement =() =>{}
    render() {
        return (
            <div>
                <span>Значение</span>
                <div><button type="button" onClick={this.handleIncrement}>Добавить</button></div>
            </div>
        )
    }
    
}