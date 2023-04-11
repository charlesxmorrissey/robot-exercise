import { ReactComponent as Robot12 } from 'assets/svg/robot-12.svg'
import RobotsList from 'components/Robots/List'
import { AppProvider } from 'components/AppProvider'

import styles from './App.module.css'

const App = () => (
  <AppProvider>
    <main className={styles.appWrapper}>
      <header className={styles.appHeaderWrapper}>
        <div className={styles.appHeaderContainer}>
          <h1 className={styles.appHeaderTitle}>
            <Robot12 className={styles.appHeaderIcon} />
            My Robot Collection
          </h1>
        </div>
      </header>

      <div className={styles.appContainer}>
        <div className={styles.appContent}>
          <RobotsList />
        </div>
      </div>

      <footer className={styles.appFooterWrapper}>
        <div className={styles.appFooterWrapper}>Robot Exercise - Take Home Test {new Date().getFullYear()}</div>
      </footer>
    </main>
  </AppProvider>
)

export default App
