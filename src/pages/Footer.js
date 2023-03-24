import { Info } from '../data/lnfo';

const Footer = () => {
  return (
    <div>
        {Info.company}
        <address>{Info.address}</address>
    
    </div>
  )
}

export default Footer;