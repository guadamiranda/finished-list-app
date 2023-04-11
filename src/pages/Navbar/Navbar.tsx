import navbarStyle from './navbar.module.scss'
import { MdOutlineVideogameAsset } from 'react-icons/md'

export default function Navbar() {
    return(
        <div className={navbarStyle.navbar}>
            <div className={navbarStyle.navbar__left}><div className={navbarStyle.navbar__hide}>My</div> <MdOutlineVideogameAsset className={navbarStyle.navbar__iconLogo}/> <div className={navbarStyle.navbar__hide}>List</div></div>
            <div className={navbarStyle.navbar__center}>
            </div>
            <div className={navbarStyle.navbar__right}>tal</div>
        </div>
    )
}