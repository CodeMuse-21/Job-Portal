import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>JobFinder Pro</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#jobs">Jobs</a>
          <a href="#companies">Companies</a>
          <a href="#about">About</a>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signupBtn}>Sign Up</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
