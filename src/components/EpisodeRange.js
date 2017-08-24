import React, { Component } from 'react';
import { currentStepChange } from '../reducers/timeActions'

export default class EpisodeRange extends Component {
    constructor(){
        super()
        this.onSliderChange = this.onSliderChange.bind(this)
    }

    onSliderChange(evt){
        console.log("change", evt.target.value)
        currentStepChange(evt.target.value)
    }

    render () {
        return (
            <input type="range" min="7000" max="7999" onChange={this.onSliderChange}/>
        );
    }
}