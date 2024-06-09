import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Container from '../Container';
import { Badge } from "@/components/ui/badge";
import BlogTemplates from "../BlogTemplates";



const BlogCategory = () => {


  return (
    <div className="pb-28">
      <Container>
        <Tabs defaultValue="account" className="">

          <div className="flex items-center justify-center">
            <TabsList className="lg:w-fit w-full flex lg:items-center space-x-3 flex-wrap ">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="password2">Password2</TabsTrigger>
              <TabsTrigger value="password3">Password3</TabsTrigger>
              <TabsTrigger value="password4">Password4</TabsTrigger>
              <TabsTrigger value="password5">Password5</TabsTrigger>
            </TabsList>
          </div>

          {/* featured post section  */}
          <div className="mt-16 mb-20 lg:grid grid-cols-2">
            <div className="border border-primary">
              <img src="/featured-img.png" alt="blog post image" />
            </div>

            <div className="lg:space-y-0 space-y-4 border border-primary px-6 py-3 lg:py-2 flex flex-col justify-between ">
              <p>
                <Badge>Secondary</Badge>
              </p>

              <div className="space-y-3 lg:space-y-2">
                <h2 className="text-xl font-bold">
                  Featured blog post title goes here
                </h2>

                <p>
                  If you've read this far and you're wondering what
                  “web3” is exactly, this is one of those need-to-knows,
                  and it's pretty simple. We'll explain more below, but
                  in short web3 is the next era of the internet in which
                  blockchain technology will play a central role.
                </p>
              </div>

              <a href="/posts/post1">
                <Button className="w-fit space-x-2">
                  <span>Read more</span> {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="orange">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>

          <TabsContent value="account">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-4 gap-x-0 sm:gap-y-10 gap-y-10">
              <BlogTemplates />
              <BlogTemplates />
              <BlogTemplates />
              <BlogTemplates />
            </div>
          </TabsContent>

          <TabsContent value="password">
            <p>Password</p>
          </TabsContent>

          <TabsContent value="password2">
            <p>Password</p>
          </TabsContent>

          <TabsContent value="password3">
            <p>Password</p>
          </TabsContent>

          <TabsContent value="password4">
            <p>Password</p>
          </TabsContent>

          <TabsContent value="password5">
            <p>Password</p>
          </TabsContent>

        </Tabs>
      </Container>
    </div>
  )
}

export default BlogCategory