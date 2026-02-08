import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsCards from './components/StatsCards'
import JobGrid from './components/JobGrid'
import Footer from './components/Footer'
import { jobs } from './data/jobs'
import './App.css'

function App() {
  const [filteredJobs, setFilteredJobs] = useState(jobs)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    location: '',
    salary: '',
    experience: '',
    remote: false
  })

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    applyFilters(term, filters)
  }

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
    applyFilters(searchTerm, newFilters)
  }

  const applyFilters = (term: string, currentFilters: typeof filters) => {
    let filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(term.toLowerCase()) ||
      job.company.toLowerCase().includes(term.toLowerCase())
    )

    if (currentFilters.location) {
      filtered = filtered.filter(job => job.location.toLowerCase().includes(currentFilters.location.toLowerCase()))
    }
    if (currentFilters.salary) {
      // Simple salary filter, assuming format like "$80,000 - $100,000"
      // In real app, parse properly
      filtered = filtered.filter(job => job.salary.includes(currentFilters.salary))
    }
    if (currentFilters.experience) {
      filtered = filtered.filter(job => job.experience === currentFilters.experience)
    }
    if (currentFilters.remote) {
      filtered = filtered.filter(job => job.remote)
    }

    setFilteredJobs(filtered)
  }

  return (
    <div className="app">
      <Header />
      <Hero onSearch={handleSearch} />
      <StatsCards />
      <JobGrid jobs={filteredJobs} onFilterChange={handleFilterChange} />
      <Footer />
    </div>
  )
}

export default App
