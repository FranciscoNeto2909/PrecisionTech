import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className="border-t h-16">
            <div className="mx-auto max-w-[1250px] text-center px-4 pt-5 flex flex-col items-center gap-6 py-4 justify-between md:flex-row">
                <div className='w-full max-w-[335px] text-[15px] flex justify-between md:w-auto md:block lg:text-base'>
                    <span className='inline-block'>Copyright PrecisionTech</span>
                    <span className='inline-block md:ms-2'>2023</span>
                </div>
                <div>
                    <ul className="flex gap-2 text-[15px] lg:gap-6">
                        <li><Link to="#">Privacy</Link></li>
                        <li><Link to="#" className=''>Terms and Conditions</Link></li>
                        <li><Link to="#">Status</Link></li>
                        <li><Link to="#">Security</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex gap-[46px] md:gap-4 lg:gap-8'>
                        <li>
                            <Link to="#">
                                <BsTwitter size={22} />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsFacebook size={22} />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsInstagram size={22} />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsLinkedin size={22} />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsYoutube size={22} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}