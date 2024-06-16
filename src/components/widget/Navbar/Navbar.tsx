import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button"
import Container from '../Container';

const Navbar = () => {

  const logo: string = import.meta.env.BLOG_LOGO;
  
  console.log("logo", logo);

  return (
    <nav className='h-[10vh] py-3 '>
      <Container className="flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="blog logo" />
        </a>

        <div className="flex items-center space-x-2">
          <ModeToggle />

          <a href="/blog">
            <Button variant="default">
              Blog
            </Button>
          </a>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar