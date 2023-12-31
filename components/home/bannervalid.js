import Image from 'next/image'
import styles from  '../../styles/sass/banner.module.sass'

import { gsap } from "gsap"

export default function Banner() {
     return (
          <>
               <div className={styles.boxBanner2}>
                    <Image  src="/assets/introv3.png" priority={true} className={styles.banner} width="390" height="427" alt='Verificacion de edad' />
                    <Image  src="/assets/triangulo.png" className={styles.triangulo} width="247" height="375" alt='triangulo' />
                    <Image  src="/assets/triangulo.png" className={styles.triangulo2} width="247" height="375" alt='triangulo' />
                    <div className={styles.boxImgLogo}>
                         <Image  src="/assets/logoIntro.svg" width="247" height="375" alt='Maestros del Sabor el Festival' />
                    </div>
               </div>
               <div className={styles.boxCabeceraPC}>
                    <Image  src="/assets/cabeceraPC.png" priority={true} className={styles.banner} width="1440" height="606" alt='Verificacion de edad' />
                    <div className={styles.boxImgLogo}>
                         <Image  src="/assets/logoIntro.svg" width="360" height="180" alt='Maestros del Sabor el Festival' />
                    </div>
               </div>
          </>
     )
}
