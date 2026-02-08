import { useState } from 'react'
import styles from './FilterPanel.module.css'

interface FilterPanelProps {
  onFilterChange: (filters: {
    location: string
    salary: string
    experience: string
    remote: boolean
  }) => void
}

const FilterPanel = ({ onFilterChange }: FilterPanelProps) => {
  const [filters, setFilters] = useState({
    location: '',
    salary: '',
    experience: '',
    remote: false
  })

  const handleChange = (key: string, value: string | boolean) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className={styles.filterPanel}>
      <h3>Filters</h3>
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label>Location</label>
          <input
            type="text"
            placeholder="e.g. New York"
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
          />
        </div>
        <div className={styles.filterGroup}>
          <label>Salary</label>
          <select
            value={filters.salary}
            onChange={(e) => handleChange('salary', e.target.value)}
          >
            <option value="">Any</option>
            <option value="$50,000">$50,000+</option>
            <option value="$80,000">$80,000+</option>
            <option value="$100,000">$100,000+</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Experience</label>
          <select
            value={filters.experience}
            onChange={(e) => handleChange('experience', e.target.value)}
          >
            <option value="">Any</option>
            <option value="1-2 years">1-2 years</option>
            <option value="2-4 years">2-4 years</option>
            <option value="4-6 years">4-6 years</option>
            <option value="5+ years">5+ years</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>
            <input
              type="checkbox"
              checked={filters.remote}
              onChange={(e) => handleChange('remote', e.target.checked)}
            />
            Remote only
          </label>
        </div>
      </div>
    </div>
  )
}

export default FilterPanel
