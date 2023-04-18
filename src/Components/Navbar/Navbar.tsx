import Link from 'next/link';
import navbarStyle from './navbar.module.scss'
import { MdOutlineVideogameAsset } from 'react-icons/md'
import { IoPersonCircleOutline } from 'react-icons/io5'

export default function Navbar() {
    return(
        <div className={navbarStyle.navbar}>
            <Link href='/' className={navbarStyle.navbar__left}><div className={navbarStyle.navbar__hide}>My</div> <MdOutlineVideogameAsset className={navbarStyle.navbar__iconLogo}/> <div className={navbarStyle.navbar__hide}>List</div></Link>
            <div className={navbarStyle.navbar__center}>
            </div>
            <div className={navbarStyle.navbar__right}><IoPersonCircleOutline className={navbarStyle.navbar__iconUser}/></div>
        </div>
    )
}