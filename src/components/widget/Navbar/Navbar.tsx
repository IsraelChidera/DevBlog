import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button"
import Container from '../Container';

const Navbar = () => {

  const logo: string = import.meta.env.BLOG_LOGO;
  const title: string = import.meta.env.BLOG_TITLE;

  console.log("title", title);
  console.log("logo", logo);

  return (
    <nav className='h-[10vh] py-3 '>
      <Container className="flex justify-between items-center">
        <div>
          <img src={logo} alt="blog logo" />
        </div>

        <div className="flex items-center space-x-2">
          <ModeToggle />

          <Button variant="default">
            Blog
          </Button>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar