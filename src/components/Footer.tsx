import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>JobFinder Pro</h3>
            <p>Find your dream job with thousands of opportunities from top companies.</p>
          </div>
          <div className={styles.section}>
            <h4>For Job Seekers</h4>
            <ul>
              <li><a href="#browse">Browse Jobs</a></li>
              <li><a href="#companies">Companies</a></li>
              <li><a href="#career">Career Advice</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4>For Employers</h4>
            <ul>
              <li><a href="#post">Post a Job</a></li>
              <li><a href="#recruit">Recruiting Solutions</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2024 JobFinder Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
