import React from 'react'
import { useEffect, useState, useRef} from 'react'

import Layout from '../components/layout'
import BannerPrincial from '../components/itinerario/banner'
import Detalle from '../components/itinerario/detalle'

export default function Itinerario({itinerarios}){
    console.log(itinerarios)
    return (
        <div>
            <div className='overflowHidden'>
                <Layout
                    title={'Itinerario :: Cusqueña, Maestros del Sabor'}
                    description={'Itinerario :: Cusqueña, Maestros del Sabor'}
                >
                    <BannerPrincial data={ ['Itinerario <br />del evento','ubicacion.svg', '40', '43','itinerario','Descubre los horarios de cada experiencia gastronómica, nuestras clases maestras y las mejores bandas nacionales e internacionales del festival.',''] } />
                    <Detalle />
                </Layout>
            </div>
        </div>
    )
}


// export async function getStaticProps(){
//     const respuesta = await fetch(`${process.env.API_URL}/v1/eventos`)
//     const {data: itinerarios } = await respuesta.json()
//     return {
//         props: {
//             itinerarios
//         }
//     }
// }

export async function getServerSideProps(){
   
    console.log(`${process.env.API_URL}/v1/eventos`)
    const respuesta = await fetch(`${process.env.API_URL}/v1/eventos`)
    const {data: itinerarios } = await respuesta.json() 
    return {
        props: {
            itinerarios
        }
    }
}
