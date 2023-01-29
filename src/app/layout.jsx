// import './globals.css'
import styles from './layout.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className={styles.header}>My First Next App</div>
        {children}
      </body>
    </html>
  )
}
