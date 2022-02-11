import {PureComponent} from 'react';
import styles from './StringAnimation.module.css';

export default class StringAnimation extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            currstring: 0, // current slide
            content: "",
            da: false, // deleting = true, adding = false
        }

        this.strings = this.props.strings;
        this.accessbleStrings = this.strings.join(", ");
        this.tick = null
    }

    render() {
        return(
        <>
            <div aria-hidden="true">
                {this.state.content + "_"}
            </div>
            <div className={styles.accessableContent}>
                {this.accessbleStrings}
            </div>
        </>
        )
    }

    componentDidMount () {
        this.tick = setInterval(this.handletick, 125)
    }
    
    handletick = () => {
        this.setState(prevState =>{
            if(prevState.da){
                if (prevState.content === ""){
                    return {da: false, currstring: (prevState.currstring + 1) % this.strings.length}
                }else{
                    return {content: prevState.content.slice(0,-1)}
                }
            }else{
                if (prevState.content === this.strings[prevState.currstring]){   
                    clearInterval(this.tick)
                    setTimeout(() => {
                        // In case of sommething funny happens.
                        clearInterval(this.tick)
                        this.tick = setInterval(this.handletick, 125)
                    }, 2000);
                    return {da: true}
                }else{
                    return {content: prevState.content + this.strings[prevState.currstring][prevState.content.length]}
                }
            }
        });
    }


}