import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className='z-10' data-aos="fade-up" data-aos-duration="3000">
            Home
        </div >
    )
}