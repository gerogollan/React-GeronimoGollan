import LOGO from '../sources/BLACKLOGO.png';
import ButtonComponent from './buttonComponent.jsx';
import CartWidget from './cartWidget.jsx';
import './navBar.css';


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
