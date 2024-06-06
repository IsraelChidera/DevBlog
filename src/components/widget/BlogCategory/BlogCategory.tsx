import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
            <TabsList className="w-fit flex items-center space-x-3">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="password2">Password2</TabsTrigger>
              <TabsTrigger value="password3">Password3</TabsTrigger>
              <TabsTrigger value="password4">Password4</TabsTrigger>
              <TabsTrigger value="password5">Password5</TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-16 mb-20 grid grid-cols-2">
            <div className="border border-primary">
              <img src="/featured-img.png" alt="blog post image" />
            </div>

            <div className="border border-primary px-6 py-2 flex flex-col justify-between ">
              <p>
                <Badge>Secondary</Badge>
              </p>

              <div className=" space-y-2">
                <h2>
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

              <Button className="w-fit space-x-2">
                <span>Read more</span> {" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="black">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Button>
            </div>
          </div>

          <TabsContent value="account">
            <div className="grid grid-cols-3">
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