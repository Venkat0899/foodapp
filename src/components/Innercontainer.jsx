import styles from './innercontainer.module.css'
export default function Innercontaainer({children})
{
    return(
        <div className={styles.innercontainer}>
        {children}
        </div>
    )
}