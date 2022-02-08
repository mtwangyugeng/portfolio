import styles from './NameCard.module.css';

export default function NameCard({name, location, about, picURL}) {
    return (
        <div className = {styles.main}>
            <img className = {styles.profilepic} alt = 'Profile pic' src = {picURL}/>
            <div className = {styles.rightcol}>
                <h3>{name}</h3>
                <p>{location}</p>
                <div className = {styles.bio}>{about}</div>
            </div>
        </div>
    );
}