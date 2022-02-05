import {PureComponent} from 'react';
import styles from './NameFormater.module.css';

export default class NameFormater extends PureComponent {
    constructor(props) {
        super(props);
        this.pairs = this.props.pairs;
        this.englishName = this.props.englishName;

        this.pairHTML = this.pairs.map((v,i) => <div key={i} hovered = {v[1]} className={styles.tooltip}>{v[0] + " "}</div>)
    }

    render() {
        return (
            <div className={styles.main}>
                {this.pairHTML}
                ({this.englishName})
            </div>
        )
    }
}