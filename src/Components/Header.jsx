import './Header.css';
import Logo from '../img/men-beer.png';

const Header = () => {
    return (
        <div className='Header'>
            <img id='logo' src={Logo} />
            <h1 id='title'>Men's Beer</h1>
            <nav class="menu">
                <li class="menu-item">
                    <a id="menu-home" href="#home">Home</a>
                </li>
                <li class="menu-item">
                    <a id="menu-post" href="#post">Post</a>
                </li>
                <li class="menu-item">
                    <a id="menu-sobre" href="#sobre">Sobre</a>
                </li>
            </nav>
            <div className='social-links'>
                <a target="_blank" href="#">
                    <i class="bi bi-instagram"></i>
                </a>
                <a target="_blank" href="#">
                    <i class="bi bi-facebook"></i>
                </a>
                <a target="_blank" href="#">
                    <i class="bi bi-youtube"></i>
                </a>

            </div>
        </div>


    );
};

export default Header;