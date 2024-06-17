import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button"
import Container from '../Container';

const Navbar = () => {

  return (
    <nav className='h-[10vh] py-3 '>
      <Container className="flex justify-between items-center">
        <a href="/">
          {/* Text or image can go here */}
          <h1 className="text-2xl italic font-bold text-primary">JD</h1>
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