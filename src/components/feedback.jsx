import React from "react";
import styled from './Feedback.module.css'
export
class Feedback extends React.Component {

    state = {
        value: 5
    }
handleIncrement =() =>{
    this.setState({value:10})
}
    render() {
        return (
            <div className={styled.mainDiv}>
                <span>{this.state.value}</span>
                <div><button type="button" onClick={this.handleIncrement}>Добавить</button></div>
            </div>
        )
    }
    
};
;
export default Feedback;