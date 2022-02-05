import {PureComponent} from 'react';
import styles from './LandingSection.module.css';

export default class LandingSection extends PureComponent {
    constructor(props) {
        super(props);
        this.fullName = this.props.fullName;
        this.subTitle = this.props.subTitle;
    }

    render() {
        console.log(this.fullName);
        return (
            <header id = "test" className={styles.main}>
                <h1>{this.fullName}</h1>
                <h2>{this.subTitle}</h2>
            </header>
        )
    }
}