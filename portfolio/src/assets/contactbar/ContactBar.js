import styles from './ContactBar.module.css'
import LinkedIn from './LinkedIn.svg'
import GitHub from './GitHub.svg'
import Gmail from './Gmail.svg'


export default function ContactBar ({linkedIn, gitHub, email})  {
    return (
        <div className={styles.container}>
            <img src = {LinkedIn} alt="The website owner's LinkedIn profile." className = {styles.icons + " " + styles.linkedIn} onClick = {goLink(linkedIn)}></img>
            <img src = {Gmail} alt="Email the website owner." className = {styles.icons + " " + styles.email} onClick = {goLink("mailto:" + email)}></img>
            <img src = {GitHub} alt="The website owner's GitHub profile." className = {styles.icons + " " + styles.gitHub} onClick = {goLink(gitHub)}></img>
        </div>
    )
}

function goLink(link) {
    return () => window.open(link);
}
