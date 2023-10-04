import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer className="border-t h-[70px]">
            <div className="mx-auto max-w-[1250px] text-center px-4 pt-6 flex flex-col items-center gap-6 py-4 justify-between md:flex-row">
                <div className='w-full max-w-[335px] text-[15px] flex justify-between md:w-auto md:block lg:text-base'>
                    <span className='inline-block'>Copyright PrecisionTech</span>
                    <span className='inline-block md:ms-2'>2023</span>
                </div>
                <div>
                    <ul className="flex gap-2 text-[15px] lg:gap-6">
                        <li><Link className='hover:text-blue-500' to="#">Privacy</Link></li>
                        <li><Link className='hover:text-blue-500' to="#">Terms and Conditions</Link></li>
                        <li><Link className='hover:text-blue-500' to="#">Status</Link></li>
                        <li><Link className='hover:text-blue-500' to="#">Security</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex gap-[46px] md:gap-4 lg:gap-8'>
                        <li>
                            <Link to="#">
                                <BsTwitter size={22} className="hover:fill-blue-600" />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsFacebook size={22} className="hover:fill-blue-600" />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsInstagram size={22} className="hover:fill-blue-600" />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsLinkedin size={22} className="hover:fill-blue-600" />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsYoutube size={22} className="hover:fill-blue-600" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}