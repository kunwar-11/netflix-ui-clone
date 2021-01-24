import React , {useState , useEffect} from 'react'
import '../styles/Navbar.css'
function Navbar() {
    const [isNavbar , setNavbar] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll' , () => {
            if(window.scrollY > 100) {
                setNavbar(true)
            }
            else {
                setNavbar(false)
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    },[])
    return (
        <div className = {`navbar ${isNavbar ? 'navbar-black' : ''}`}>
            <img className = "navbar__logo"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="netflix-logo"/>
            <img className = "navbar__icon" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user_icon"/>
        </div>
    )
}

export default Navbar
