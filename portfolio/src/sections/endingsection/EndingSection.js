import {PureComponent} from 'react';
import styles from './EndingSection.module.css';

import DoubleUpArrows from './DoubleUpArrows.svg'

export default class EndingSection extends PureComponent {
    constructor(props) {
        super(props);
        this.author = this.props.author;
        this.year = this.props.year;
        //[{text, url}]
        this.contacts = this.props.contacts;
    }
    render() {
        return (
            <div className={styles.main} id ="contact">
                <img src={DoubleUpArrows} alt="Go to the top of the page." className={styles.DoubleUpArrows} onClick = {this.moveUp}/>
                <ContactSection contacts={this.contacts}/>

                <Footer author={this.author} year={this.year}/>
            </div>
        );
    }

    moveUp = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    }
}

const ContactSection = ({contacts}) => (
    <section className={styles.ContactSection}>
        <h2 className={styles.contactMe}>Let's have a chat.</h2>
        <div className={styles.ContactContainer}>
        {contacts && 
            contacts.map((v,i) => {
                return <a id={i} className={styles.contact} target="_blank" href={v.url} rel="noopener noreferrer">
                    {v.text}
                </a>
            })
        }
        </div>
    </section>
)

const Footer = ({author, year}) => (
    <footer className={styles.Footer}>
        <div>&copy; {year+ " " +author}. All Rights Reserved</div>
        <div> License: MIT</div>
    </footer>
)