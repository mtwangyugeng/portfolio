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

        this.navLinks = this.props.navLinks.map((v,i)=>{
            return <a key={i} className={styles.navLink} href={v.id}><span className={styles.projectCode}>{'<'}</span>{v.name}<span className={styles.projectCode}>{'/>'}</span></a>
        })
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
        // this one is for navbar on top of the page
        // const neo = Math.floor((window.scrollY + window.innerHeight) / document.body.clientHeight * 100);

        // this one is for navbar is after the intro screen.
        const neo = Math.max(0, Math.floor((window.scrollY - window.innerHeight) / (document.body.clientHeight - window.innerHeight * 2) * 100) );
        this.setState({progress: neo + "%"})
    }
    render() {
        return (
            <div ref = {this.myRef} className = {styles.main + " "  + this.state.stick}>
                <nav className = {styles.navContainer}>
                    <div className={styles.logo}>
                        <img className={styles.headerImg} alt="Personal logo" src="https://raw.githubusercontent.com/mtwangyugeng/web/main/public/logo_Simon.ico"/>
                        <div className={styles.name}>Yu Geng Wang (Simon)</div>
                    </div>
                    <div className={styles.navbarWrapper}>
                        {/* <a className={styles.navLink} href="#About"><span className={styles.projectCode}>{'<'}</span>About<span className={styles.projectCode}>{'/>'}</span></a>
                        <a className={styles.navLink} href="#Résumé">Résumé</a>
                        <a className={styles.navLink} href="#contact">Contact</a> */}
                        {this.navLinks}
                    </div>
                </nav>
                <div className = {styles.progressBarContainer}>
                    <div style = {{width: this.state.progress}} className = {styles.progressBar}></div>
                </div>
            </div>
        )
    }
}