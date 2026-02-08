import styles from './StatsCards.module.css'

const StatsCards = () => {
  const stats = [
    { number: '500', label: 'Jobs' },
    { number: '100', label: 'Companies' },
    { number: '50K', label: 'Applicants' },
    { number: '24h', label: 'Updates' }
  ]

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.number}>{stat.number}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsCards
