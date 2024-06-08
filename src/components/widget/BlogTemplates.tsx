import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BlogTemplates = () => {
    return (
        <section>
            <Card className="space-y-2">
                <img src="/blog-post-1.png" className="w-full" alt="blog post img" />
                <div>
                    <CardHeader>
                        <CardDescription className="flex items-center space-x-2">
                            <Badge className="text-xs w-fit">Secondary</Badge>
                            <span className="text-xs block"> 5 min read </span>
                        </CardDescription>
                        <CardTitle className="mt-2 text-2xl">Blog post title</CardTitle>
                    </CardHeader>

                    <CardContent>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Temporibus, quia.
                    </CardContent>

                    <CardFooter>
                        <Button variant="outline" className="space-x-2 flex items-center">
                            <span>Read more</span>                            
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        </section>
    )
}

export default BlogTemplates