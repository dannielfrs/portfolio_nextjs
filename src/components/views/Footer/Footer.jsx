import Link from 'next/link'
import styles from './styles.module.scss'
import { BsPhone, BsEnvelope } from 'react-icons/bs'
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_content}>
          <h3 className={styles.website_logo}>Daniel Frias Rosales</h3>
          <div className={styles.footer_info}>
            <BsPhone />
            <span>3314468468</span>
          </div>
          <div className={styles.footer_info}>
            <BsEnvelope />
            <span>dannielfrs@gmail.com</span>
          </div>
        </div>
        <div className={styles.footer_content}>
          <span className={styles.menu_title}>links</span>
          <div className={styles.social}>
            <Link href='https://www.facebook.com/daniel.frias.9674/' target='_blank' rel='noopener noreferrer' className={styles.social_link}><FaFacebookSquare /></Link>
            <Link href='https://github.com/dannielfrs' target='_blank' rel='noopener noreferrer' className={styles.social_link}><FaGithub /></Link>
            <Link href='https://www.linkedin.com/in/daniel-frias-339492bb/' target='_blank' rel='noopener noreferrer' className={styles.social_link}><FaLinkedin /></Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright_container}>
        <span className={styles.copyright}>&copy;2023, portfolio.com</span>
      </div>
    </footer>
  )
}

export default Footer
