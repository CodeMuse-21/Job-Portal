import { motion } from 'framer-motion'
import styles from './JobCard.module.css'
import type { Job } from '../data/jobs'

interface JobCardProps {
  job: Job
  onApply: (job: Job) => void
}

const JobCard = ({ job, onApply }: JobCardProps) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.header}>
        <img src={job.logo} alt={`${job.company} logo`} className={styles.logo} />
        <div className={styles.jobInfo}>
          <h3 className={styles.title}>{job.title}</h3>
          <p className={styles.company}>{job.company}</p>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.location}>
          <span>📍</span> {job.location}
        </div>
        <div className={styles.salary}>
          <span>💰</span> {job.salary}
        </div>
        <div className={styles.experience}>
          <span>📅</span> {job.experience}
        </div>
        {job.remote && (
          <div className={styles.remote}>
            <span>🏠</span> Remote
          </div>
        )}
      </div>
      <p className={styles.description}>{job.description}</p>
      <button className={styles.applyBtn} onClick={() => onApply(job)}>
        Apply Now
      </button>
    </motion.div>
  )
}

export default JobCard
