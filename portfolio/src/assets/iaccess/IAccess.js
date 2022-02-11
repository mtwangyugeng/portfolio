import React from 'react';
import ADHDScreen from './adhdscreen/ADHDScreen';
import styles from './IAccess.module.css';

const accessibilityIcon = 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
        <title>accessibility</title>
        <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm-.39,74.18L52.1,98.91a4.94,4.94,0,0,1-2.58,2.83A5,5,0,0,1,42.7,95.5l6.24-17.28a26.3,26.3,0,0,0,1.17-4,40.64,40.64,0,0,0,.54-4.18c.24-2.53.41-5.27.54-7.9s.22-5.18.29-7.29c.09-2.63-.62-2.8-2.73-3.3l-.44-.1-18-3.39A5,5,0,0,1,27.08,46a5,5,0,0,1,5.05-7.74l19.34,3.63c.77.07,1.52.16,2.31.25a57.64,57.64,0,0,0,7.18.53A81.13,81.13,0,0,0,69.9,42c.9-.1,1.75-.21,2.6-.29l18.25-3.42A5,5,0,0,1,94.5,39a5,5,0,0,1,1.3,7,5,5,0,0,1-3.21,2.09L75.15,51.37c-.58.13-1.1.22-1.56.29-1.82.31-2.72.47-2.61,3.06.08,1.89.31,4.15.61,6.51.35,2.77.81,5.71,1.29,8.4.31,1.77.6,3.19,1,4.55s.79,2.75,1.39,4.42l6.11,16.9a5,5,0,0,1-6.82,6.24,4.94,4.94,0,0,1-2.58-2.83L63,74.23,62,72.4l-1,1.78Zm.39-53.52a8.83,8.83,0,1,1-6.24,2.59,8.79,8.79,0,0,1,6.24-2.59Zm36.35,4.43a51.42,51.42,0,1,0,15,36.35,51.27,51.27,0,0,0-15-36.35Z"/>
    </svg>

export default class IAccess extends React.PureComponent {
    /**
     * IMPORTANT: 
     * This feature is design on the premise that the html
     * has no in-line styles, and does not use CSS fixed positions;
     */
    constructor(props) {
        super(props);
        this.defaultState = {
            opened: false,
            
            ADHD: false,
            epilepsy: false,
            dyslexia: false,
        }
        this.state = JSON.parse(window.localStorage.getItem('IAccess')) || {...this.defaultState}
        // this.state = {...this.defaultState}
    }

    componentDidMount() {
        if(this.state.epilepsy){
            document.querySelector(".App").style.filter = "saturate(50%)";
        }
        if(this.state.dyslexia) {
            // document.querySelector("body").style.fontFamily = "OpenDyslexicMonoRegular";
            this.recurAddClass(document.querySelector("body"), styles.dyslexiaFont);
        }
    }

    setState(callback) {
        const neo = (prevState) => {
            const t = callback(prevState);
            const newObj = (Object.assign ( {...prevState}, t ));
            const neoString = JSON.stringify(newObj);
            console.log(t, neoString);
            window.localStorage.setItem('IAccess', neoString);
            return t;
        }
        super.setState(neo);
      }

    reset = () => {
        this.setState(...this.defaultState)
    }

    handleADHDChange = () => {
        this.setState(prevState=>{
            return {
                ADHD: !prevState.ADHD
            };
        });
    }

    handleEpilepsyChange = () =>{
        this.setState(prevState=>{
            if(prevState.epilepsy) {
                console.log('epilepsy');
                document.querySelector(".App").style.filter = "none";
            } else {
                document.querySelector(".App").style.filter = "saturate(50%)";

                return {
                    ADHD: false,
                    epilepsy: true
                };
            }

            return {
                epilepsy: !prevState.epilepsy
            };
        });
    }

    handledyslexiaChange = () => {
        this.setState(prevState=>{
            if(prevState.dyslexia) {
                this.recurRmClass(document.querySelector("body"), styles.dyslexiaFont);
            } else {
                // document.querySelector("body").style.fontFamily = "OpenDyslexicMonoRegular";
                this.recurAddClass(document.querySelector("body"), styles.dyslexiaFont);
            }

            return {
                dyslexia: !prevState.dyslexia
            };
        });
    }

    recurAddClass = (element, cN) => {
        element.classList.add(cN);
        for(let child of element.children) {
            this.recurAddClass(child, cN);
        }
    }
    recurRmClass = (element, cN) => {
        element.classList.remove(cN);
        for(let child of element.children) {
            this.recurRmClass(child, cN);
        }
    }

    handleOpen = () => {
        this.setState(prevState=>{
            return {opened: !prevState.opened}
        })
    }

    render() {
        
        return (
            <>
            {this.state.ADHD ? <ADHDScreen /> : ''}
            <div className = {styles.main} onClick={this.handleOpen}>
                {accessibilityIcon}
            </div>
            {this.state.opened &&
                <div className = {styles.options}>
                    <div onClick={this.handleADHDChange}>ADHD</div>
                    <div onClick={this.handleEpilepsyChange}>epilepsy</div>
                    <div onClick={this.handledyslexiaChange}>dyslexia</div>
                </div>
            }
            </>
        );
    }
}