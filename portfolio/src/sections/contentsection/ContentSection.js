import {PureComponent} from 'react';
import styles from './ContentSection.module.css'

export default class ContentSection extends PureComponent {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.content = props.content;
    }

    render() {
        return (
            <div className={styles.main}>
                <h2 className={styles.title}>{this.title}</h2>
                <div className={styles.content}>
                    {this.content}
                </div>
            </div>
        );
    }
}