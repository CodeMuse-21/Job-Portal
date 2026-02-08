import { useState } from 'react'
import styles from './Hero.module.css'

interface HeroProps {
  onSearch: (term: string) => void
}

const Hero = ({ onSearch }: HeroProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Find Your Dream Job Today</h1>
        <p className={styles.subtitle}>Discover thousands of opportunities from top companies</p>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search 10K+ jobs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchBtn}>
            Search
          </button>
        </form>
      </div>
    </section>
  )
}

export default Hero
