import {Link} from 'react-scroll'

const Navbar = () => {
    return (
        <>  
    <nav className="navbar navbar-expand-lg navbar-light  ">
  <Link className="navbar-brand" to="/"><img src="https://www.pngkit.com/png/full/377-3772287_sass-peress-blog-sp.png" 
  alt="logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto " >
      <Link className="nav-link active" to="/" spy={true} smooth={true}>Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-link" to="about" spy={true} smooth={true}>About</Link>
      <Link className="nav-link" to="work" spy={true} smooth={true}>Work</Link>
      <Link className="nav-link" to="experience" spy={true} smooth={true}>Experience</Link>
      <Link className="nav-link" to="contact" spy={true} smooth={true}>Contact</Link>
    </div>
  </div>
</nav>  
</>
)
}
export default Navbar
