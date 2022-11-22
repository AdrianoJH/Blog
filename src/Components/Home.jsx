import './Home.css'
import Logo from '../img/men-beer.png'

const Home = () => {
    return (
        <div id='home' className='Home'>
            <img  id='img-home' src = {Logo}  />
            <h1 id='title-home'>Bem Vindo ao Men's Beer</h1>
            <h3 id='txt'>Aqui você encontra tudo sobre as melhores cervejas do mundo! </h3>
            <p id='txt2'>E ainda você fica por dentro de todas as novidades sobre o mundo da cerveja.</p>

        </div>
    )
};

export default Home;