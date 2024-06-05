import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button"


const Navbar = () => {

  const logo: string = import.meta.env.BLOG_LOGO;
  const title: string = import.meta.env.BLOG_TITLE;

  console.log("title", title);
  console.log("logo", logo);
  
  return (
    <nav className='flex items-center justify-between'>
      <div>
        <img src={logo} alt="blog logo" />
      </div>

      <div>
        <ModeToggle/>
      </div>

      <Button>
        here
      </Button>
    </nav>
  )
}

export default Navbar