import './header.css'
import rampa from '../../assets/rampa.png'
import SOL from '../../assets/SOL.svg'
import FACEBOOK from '../../assets/FACEBOOK.svg'
import TWITTER from '../../assets/TWITTER.svg'
import TIKTOK from '../../assets/TIKTOK.svg'
import INSTAGRAM from '../../assets/INSTAGRAM.svg'

export default function Header (){
  const pages = [
    { name: "INICIO", url: "/" },
    { name: "NOSOTROS", url: "/us" },
    { name: "SERVICIOS", url: "/services" },
    { name: "GALERIA", url: "/gallery" },
    { name: "CONTACTO", url: "/contact" },
  ];
  return (
    <>
    <div className='headerRampa'>
      <img className="logo" src={rampa} alt='logo' />
    </div> 
    <div className="headerWeb">
      <div className='left'>
        <img className="logoWeb" src={rampa} alt='logo' />
        <div className="pages">
          {pages.map((page, index) => (
            <a key={index} href={page.url} className="title_page">
              {page.name}
            </a>
          ))}
        </div>
      </div>
      <div className='right'>
        <div className='circle'>EN</div>
        <div className='temperature'>
          <img src={SOL}/>
          <span>32°</span>
        </div>
        <div className='social_networks'>
          <img src={FACEBOOK} alt=''/>
          <img src={INSTAGRAM} alt='' />
          <img src={TWITTER} alt='' />
          <img className='tiktok' src={TIKTOK} alt='' />
        </div>
      </div>
    </div>
    </>

  )
}