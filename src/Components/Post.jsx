import './Post.css';
import Mens from '../img/beer-mens.jpg'
import Oktober from '../img/oktoberfest.png'


const Post = () => {
    return (
        <div id='post' className='Post'>
           <img id='img-post' src = {Mens}  />
           <p id='txt-post'>“A cerveja, se bebida com moderação, torna a pessoa mais dócil, alegra o espírito e promove a saúde”</p>
           <div className='Post2'>
           <img id='img-post2' src = {Oktober}  />
           <p id='txt-post2'>Se o blog é sobre cerveja então não poderia ficar de fora essa festa tradicionalíssima alemã, que ocorrerá em outubro
           trazendo várias cervejarias para fazer a alegria de todo amante de cerveja.</p>
           </div>
        </div>

    );
};

export default Post;