import { useMemo } from "react";
import styles from "./Timeline.module.css"

export default function Timeline({timeline}) {
    const enrichedTimeline = useMemo(() => {
        const finale = (
            <>
            {timeline.map((v,i) => {
                const date = v.date.toLocaleDateString();
                const text = v.text;
                const link = v.link;
                const tag = v.tag;
                return <TimelineItem key={i} date={date} text={text} link={link} tag={tag}/>
            })}
            </>
        ) 
        return finale;
    }
    , [timeline]);
    return (
        <div className={styles.main}>
            {enrichedTimeline}
        </div>
    );
}

const TimelineItem = ({date, text, link, tag}) => {
    return (
        <div className={styles.itemContainer}>
            <span className={styles.circle} />
            <div className={styles.item}>
                <div className={styles.itemContent}>
                    <div className={styles.cardTop}>
                        <span className={styles.tag} style={{ background: tag.color }}>
                            {tag.title}
                        </span>
                        <time className={styles.date}>{date}</time>
                    </div>
                    <p className={styles.text}>{text}</p>
                    {link && (
                        <a
                            className={styles.link}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.text + "▶"}
                        </a>
                    )}
                    <span className="circle" />
                </div>
            </div>
        </div>
    );
}