import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className="border-t h-20">
            <div className="mx-auto max-w-[1250px] text-center px-4 pt-8 flex flex-col items-center gap-8 py-4 justify-between md:flex-row">
                <div className='text-sm lg:text-base'>Copyright PrecisionTech 2023</div>
                <div>
                    <ul className="flex gap-2 text-sm lg:text-base lg:gap-6">
                        <li><Link to="#">Privacy</Link></li>
                        <li><Link to="#">Terms and Conditions</Link></li>
                        <li><Link to="#">Status</Link></li>
                        <li><Link to="#">Security</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex gap-8 md:gap-4 lg:gap-8'>
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