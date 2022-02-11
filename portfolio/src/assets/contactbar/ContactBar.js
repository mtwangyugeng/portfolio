import styles from './ContactBar.module.css'

const gitIcon = 
    <svg role="link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>The website owner's GitHub profile.</title>
        <path fill="white" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>

const linkedInIcon = 
    <svg role="link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>The website owner's LinkedIn profile.</title>
        <path fill="#0e76a8" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>

const gmailIcon = 
    <svg role="link" xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
        <title>Email the website owner.</title>
        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
        <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
        <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
        <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
    </svg>

export default function ContactBar ({linkedIn, gitHub, email})  {
    return (
        <div className={styles.container}>
            <div className = {styles.icons + " " + styles.gitHub}  onClick = {goLink(gitHub)}> {gitIcon} </div>
            <div className = {styles.icons + " " + styles.email} onClick = {goLink("mailto:" + email)}> {gmailIcon} </div>
            <div className = {styles.icons + " " + styles.linkedIn} onClick = {goLink(linkedIn)}> {linkedInIcon} </div>
        </div>
    )
}

function goLink(link) {
    return () => window.open(link);
}
