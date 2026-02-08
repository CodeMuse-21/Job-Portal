import styles from './LoadingSkeleton.module.css'

const LoadingSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.header}>
        <div className={styles.logo}></div>
        <div className={styles.jobInfo}>
          <div className={styles.title}></div>
          <div className={styles.company}></div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.location}></div>
        <div className={styles.salary}></div>
        <div className={styles.experience}></div>
        <div className={styles.remote}></div>
      </div>
      <div className={styles.description}></div>
      <div className={styles.button}></div>
    </div>
  )
}

export default LoadingSkeleton
