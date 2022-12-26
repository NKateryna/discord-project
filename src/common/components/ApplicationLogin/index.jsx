import styles from './index.module.css';
import { BackgroundIcon } from './../icons/index';

function ApplicationLogin({ children, title, subtitle, helpText, link }) {
  return (
    <>
      <div className={styles.container}>
        <BackgroundIcon />
        <section className={styles.box}>
          <header>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </header>
          <form>{children}</form>
          <div>
            <span className={styles.helpText}>{helpText}</span>
            {link}
          </div>
        </section>
      </div>
    </>
  );
}

export default ApplicationLogin;
