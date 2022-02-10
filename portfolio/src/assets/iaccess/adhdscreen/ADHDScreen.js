import React from 'react';
import styles from './ADHDScreen.module.css';

export default class ADHDScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            uppperHeight: 0,
            lowerHeight: 0
        }
    }

    handleMouseMove = (e) => {
        const uppperHeight = e.clientY - 30;
        const lowerHeight = window.innerHeight - e.clientY - 50;
        this.setState({uppperHeight: uppperHeight, lowerHeight: lowerHeight})
    }
    
    componentDidMount() {
        document.addEventListener("mousemove", this.handleMouseMove);
    }
    componentWillUnmount() {
        document.removeEventListener("mousemove", this.handleMouseMove);
    }

    render() {
        return (
            <>
                <div className={styles.upperSquare} style={{height: this.state.uppperHeight + "px"}}/>
                <div className={styles.lowerSquare} style={{height: this.state.lowerHeight + "px"}}/>
            </>
        );
    }
}