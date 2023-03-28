import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <h1>TRACEY TURNER - DEVELOPER PORTFOLIO</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/"><a>Projects</a></Link>
      <Link href="/contact/"><a>Contact</a></Link>
    </nav>
  );
}
 
export default Navbar;