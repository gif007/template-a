import React from 'react'
import styles from '../styles/layout.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Header</h1>
            </header>
            <div className={utilStyles.row}>
                <aside className={styles.aside}>
                    <h3>Nav menu</h3>
                    <nav>
                        <div>Link 1</div>
                        <div>Link 2</div>
                    </nav>
                </aside>
                <main className={styles.main}>{children}</main>
            </div>
            <footer className={styles.footer}>
                <h4>Footer</h4>
            </footer>
        </div>
    )
}