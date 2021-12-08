import Image from 'next/image';
import styles from '../../styles/relatedCard.module.css'
import getData from '../../helpers/relatedCardHelper'

function Card({q}) {
  const info = getData({q})
  return(
  <>
    <div className={styles.Card}>
      <div className={styles.Img}>
        <Image alt="" src={info.image_src} height="150px" width="150px" objectFit='contain'/>
      </div>
      <div className={styles.Border}></div>
      <div className={styles.Content}>
        <h4 className={styles.Title}> {info.title}</h4>
        <p>
          {info.description}
        </p>
      </div>
    </div>
  </>
  )
}

export default Card;
