import { useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import styles from './QuickApplyModal.module.css'
import type { Job } from '../data/jobs'

// Set up PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

interface QuickApplyModalProps {
  job: Job
  onClose: () => void
}

const QuickApplyModal = ({ job, onClose }: QuickApplyModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Application submitted:', formData)
    onClose()
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null

    if (file && file.type === 'application/pdf') {
      try {
        // Validate PDF by loading it with PDF.js
        const arrayBuffer = await file.arrayBuffer()
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

        // Check if PDF has at least one page
        if (pdf.numPages > 0) {
          setFormData({ ...formData, resume: file })
          console.log('Valid PDF uploaded:', file.name, 'Pages:', pdf.numPages)
        } else {
          alert('Invalid PDF: The file appears to be empty.')
          e.target.value = ''
        }
      } catch (error) {
        console.error('Error validating PDF:', error)
        alert('Invalid PDF file. Please upload a valid PDF.')
        e.target.value = ''
      }
    } else if (file) {
      alert('Please upload a PDF file.')
      e.target.value = ''
    } else {
      setFormData({ ...formData, resume: null })
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Apply for {job.title}</h2>
          <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        </div>
        <div className={styles.content}>
          <div className={styles.jobInfo}>
            <h3>{job.company}</h3>
            <p>{job.location} • {job.salary}</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label>Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label>Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label>Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label>Resume (PDF)</label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default QuickApplyModal
