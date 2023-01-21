import "./Header.css";
import im1 from './john_cena_mao2.png'
import im2 from './john_cena_mao1.png'

export default function Header() {
  return (
    <div className="flex1">
      
      <div className="img1">
        <img src= {im1} width="120" />
      </div>

      <div className="header" >
        <h1> JOHN CENA SNAKE GAME </h1>
      </div>

      <div className="img2">
        <img src= {im2} width="120"/>
      </div>
    </div>
  );
}
