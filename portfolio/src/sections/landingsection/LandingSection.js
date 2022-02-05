import {PureComponent} from 'react';
import styles from './LandingSection.module.css';

import DoubleDownArrows from './DoubleDownArrows.svg'

export default class LandingSection extends PureComponent {
    constructor(props) {
        super(props);
        this.fullName = this.props.fullName;
        this.subTitle = this.props.subTitle;
        this.contacts = this.props.contacts;
    }

    render() {
        console.log(this.fullName);
        return (
            <header id = "test" className={styles.container}>
                <div className={styles.main}>
                    <div>
                        <h1 className={styles.fullName}>{this.fullName}</h1>
                        <h2 className={styles.subTitle}>{this.subTitle}</h2>
                    </div>
                    <div className={styles.contact}>
                        {this.contacts}
                    </div>
                </div>
                <img src={DoubleDownArrows} alt="Go to the next section." className={styles.DoubleDownArrows} onClick = {this.moveDown}/>
            </header>
        )
    }

    moveDown = () =>{
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
          })
    }
}

