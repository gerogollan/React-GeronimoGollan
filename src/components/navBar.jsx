import LOGO from '../sources/BLACKLOGO.png';
import ButtonComponent from './ButtonComponent.jsx';
import CartWidget from './CartWidget.jsx';
import './NavBar.css';


export default function NavBar(){

    return(
        <header>
<img src={LOGO} alt="Vanguard-Logo" className='logo'></img>

  <nav>
    <ButtonComponent className="firstButton" text="PRODUCTOS"/>
    <ButtonComponent text="SERVICIOS"/>
    <ButtonComponent text="CONTACTO"/>
  </nav>
  
  <div className="cartWidgetContainer">
  <CartWidget className="cartWidget"/>
  </div>


    </header>

)
}
