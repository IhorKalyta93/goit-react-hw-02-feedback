import React from "react";
import './feeback.module.css'

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