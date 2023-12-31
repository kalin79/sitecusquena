import React from 'react'

import Image from 'next/image'
import styles from  '../../styles/sass/banner.module.sass'

const Banner = ({data}) => {
    const createMarkup =  () => {
        return {__html: data[0]}
    }
    return (
        <>
            <div className={styles.boxBanner}>
                <Image  src="/assets/banner2.png" priority={true} className={styles.banner} width="390" height="427" alt='Verificacion de edad' />
                <Image  src="/assets/triangulo.png" className={styles.triangulo} width="247" height="375" alt='triangulo' />
                <Image  src="/assets/triangulo.png" className={styles.triangulo2} width="247" height="375" alt='triangulo' />
                {/* <div className={styles.boxImgLogo2}>
                    <Image  src="/assets/logoIntro.svg" width="247" height="375" alt='Maestros del Sabor el Festival' />
                </div> */}
            </div>
            <div className={`${styles.boxCabeceraPC} ${styles.large}`}>
                {/* <div className={`iconRombo claro small ${styles.pos1}`}></div>
                <div className={`iconRombo claro ${styles.pos2}`}></div> */}
                <Image  src="/assets/cabeceraPC.png" priority={true} className={styles.banner} width="1440" height="606" alt='Verificacion de edad' />
            </div>
            <div className={styles.iconsRombo}>
                
                <div className={`boxContenidoRombo ${styles.posRombo} romboBannerCabecera`}>
                    <div className={`iconRombo claro small ${styles.pos1}`}></div>
                    <div className={`iconRombo claro ${styles.pos2}`}></div>
                    <div className='romboPrincipal'>
                        <div className='boxInfo'>
                            <div className={`boxIcon ${data[6]}`}>
                                <Image src={`/assets/${data[1]}`} width={data[2]} height={data[3]} alt={data[0]}  />
                            </div>
                            <h2 dangerouslySetInnerHTML={ createMarkup() }></h2>
                            <h4>{ data[5] }</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
