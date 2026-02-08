import { useState, useEffect } from 'react'
import JobCard from './JobCard'
import FilterPanel from './FilterPanel'
import QuickApplyModal from './QuickApplyModal'
import LoadingSkeleton from './LoadingSkeleton'
import styles from './JobGrid.module.css'
import type { Job } from '../data/jobs'

interface JobGridProps {
  jobs: Job[]
  onFilterChange: (filters: {
    location: string
    salary: string
    experience: string
    remote: boolean
  }) => void
}

const JobGrid = ({ jobs, onFilterChange }: JobGridProps) => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleApply = (job: Job) => {
    setSelectedJob(job)
  }

  const closeModal = () => {
    setSelectedJob(null)
  }

  return (
    <section className={styles.jobGrid}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <FilterPanel onFilterChange={onFilterChange} />
        </div>
        <div className={styles.main}>
          <h2>Latest Jobs</h2>
          <div className={styles.grid}>
            {isLoading
              ? Array.from({ length: 6 }, (_, i) => (
                  <LoadingSkeleton key={i} />
                ))
              : jobs.map((job) => (
                  <JobCard key={job.id} job={job} onApply={handleApply} />
                ))
            }
          </div>
        </div>
      </div>
      {selectedJob && (
        <QuickApplyModal job={selectedJob} onClose={closeModal} />
      )}
    </section>
  )
}

export default JobGrid
