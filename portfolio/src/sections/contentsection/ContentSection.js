import {PureComponent} from 'react';
import styles from './ContentSection.module.css'

export default class ContentSection extends PureComponent {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.content = props.content;

        this.id = this.props.id;
    }

    render() {
        return (
            <div className={styles.main} id={this.id}>
                <h2 className={styles.title}>{this.title}</h2>
                <div className={styles.content}>
                    {this.content}
                </div>
            </div>
        );
    }
}