import {PureComponent, createRef} from 'react';
import styles from './SceneTitle.module.css';

export default class SceneTitle extends PureComponent{
    constructor({title}) {
        super();
        this.title = title;

        this.pos = createRef()
        this.state = {show: false}
    }

    render() {
        return(
        <div className={styles.main}>
            <div ref = {this.pos} className={styles.title}>{this.title}</div>
            <div className = {styles.underline + " " + (this.state.show ? styles.underlineShow:"")}/>
        </div>
        )
    }

    componentDidMount(){
        this.handlevisible()
        window.addEventListener('scroll', this.handlevisible);
    } 
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handlevisible);
    }    

    handlevisible = () => {
        if(!this.show && (this.pos.current.offsetTop + this.pos.current.offsetHeight) < (window.scrollY + window.innerHeight) && this.pos.current.offsetTop + this.pos.current.offsetHeight > window.scrollY)
            this.setState({show: true})
        else
            this.setState({show: false})
    }

}