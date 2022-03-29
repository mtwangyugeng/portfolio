import React from 'react';
import './ProgressBar.css';

export default class ProgressBar extends React.Component{
    render(){
        return (
            <div className="ProgressBar">
                {Array.from({length: 11}).map(
                    (_, i) => {
                        if(i < this.props.progress)
                            if(i>=9)
                                return <div className="ProgressBar-square ProgressBar-square-red"></div>
                            else
                                return <div className="ProgressBar-square ProgressBar-square-blue"></div>
                        else
                            return <div className="ProgressBar-square ProgressBar-square-empty"></div>
                    })}
            </div>
        );
    }
}