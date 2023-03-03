import styles from "./Landing.module.css"

function Landing() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.left_half}></div> */}
      {/* <div className={styles.right_half}></div> */}
      <header className={styles.header}>
        <p>DEVEESH</p>
        <p>SHETTY</p>
      </header>
    </div>
  )
}

export default Landing
