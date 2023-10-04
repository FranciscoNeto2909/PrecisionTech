import BlogCard from "../../components/blogCard/BlogCard"
import { blog } from "../../data/blog"

type Props = {
    windowWidth: number
}

export default function Blog({ windowWidth }: Props) {
    return (
        <div className="mt-20">
            <div className="mx-auto max-w-[1250px] lg:px-6">
                <div className="px-1 flex justify-center flex-wrap gap-4 md:px-0 lg:mt-8">
                    {
                        blog.map((comment, i) => (
                            <BlogCard key={i} comment={comment} windowWidth={windowWidth} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}