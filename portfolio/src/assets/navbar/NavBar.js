import {PureComponent, createRef} from 'react';

import styles from "./NavBar.module.css"

export default class NavBar extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            stick: "",
            appear: "appear",
            progress: "0%"
        }
        this.myRef = createRef();
        this.originalOffsetTop = null;
    }

    componentDidMount() {
        this.originalOffsetTop = this.myRef.current.offsetTop;
        window.addEventListener('resize', this.resizeHandler);
        window.addEventListener('scroll', this.stick_it);
        window.addEventListener('scroll', this.handlescroll);
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.resizeHandler);
        window.removeEventListener('scroll', this.stick_it);
    }

    resizeHandler = () => {
        this.setState({
            stick: ""
        })
        this.originalOffsetTop = this.myRef.current.offsetTop;
        if(window.pageYOffset > this.originalOffsetTop) 
            this.setState({
                stick: styles.sticky
            })
    }

    stick_it = () =>{
        if(window.pageYOffset > this.originalOffsetTop) 
            this.setState({
                stick: styles.sticky
            })
        else
            this.setState({
                stick: ""
            })
    }

    goTo = (y) => {
        return () => window.scrollTo({
            top: y - this.myRef.current.offsetHeight,
            left: 0,
            behavior: 'smooth'
        })
    }

    handlescroll = () => {
        const neo = Math.floor((window.scrollY + window.innerHeight) / document.body.clientHeight * 100);
        console.log(window.scrollY);
        this.setState({progress: neo + "%"})
    }
    render() {
        return (
            <div ref = {this.myRef} className = {styles.main + " "  + this.state.stick}>
                <div style = {{width: this.state.progress}} className = {styles.progressBar}></div>
            </div>
        )
    }
}