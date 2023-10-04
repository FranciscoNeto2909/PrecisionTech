type Comment = {
    client: string,
    comment: string,
    date: string,
    service: string,
    image: string
}
type CommentProps = {
    windowWidth: number,
    comment: Comment
}


export default function BlogCard({ comment, windowWidth }: CommentProps) {
    return (
        <div data-aos={windowWidth < 400 ? "fade-up" : "fade-in"} data-aos-duration="2000" className="p-2 flex flex-col w-full max-w-[400px] card-shadow rounded-md lg:max-w-[48%]">
            <div className="flex items-center">
                <div>
                    <img src={comment.image} className="h-8 w-8 mb-3 me-4 lg:h-10 lg:w-10" alt="comment" />
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-baseline">
                        <h4 className="text-blue-950 font-bold text-lg">{comment.client}</h4>
                        <span className="text-[10px]">{comment.date}</span>
                    </div>
                    <div className="text-xs text-blue-500 mb-2">
                        {comment.service}
                    </div>
                </div>
            </div>
            <div className="text-[11px] lg:text-sm">
                {comment.comment}
            </div>
        </div>
    )
}