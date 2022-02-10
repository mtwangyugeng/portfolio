import React from 'react';
import ADHDScreen from './adhdscreen/ADHDScreen';
import styles from './IAccess.module.css';

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
            delexsia: false,
        }
        this.state = {...this.defaultState}
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
                console.log(window.innerHeight)
            } else {
                document.querySelector(".App").style.filter = "saturate(50%)";
                console.log(window.innerHeight);

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

    handleDelexsiaChange = () => {
        this.setState(prevState=>{
            if(prevState.delexsia) {
                this.recurRmClass(document.querySelector("body"), styles.delexsiaFont);
            } else {
                // document.querySelector("body").style.fontFamily = "OpenDyslexicMonoRegular";
                this.recurAddClass(document.querySelector("body"), styles.delexsiaFont);
            }

            return {
                delexsia: !prevState.delexsia
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
                what
                
            </div>
            {this.state.opened &&
                <div className = {styles.options}>
                    <div onClick={this.handleADHDChange}>ADHD</div>
                    <div onClick={this.handleEpilepsyChange}>epilepsy</div>
                    <div onClick={this.handleDelexsiaChange}>delexsia</div>
                </div>
            }
            </>
        );
    }
}