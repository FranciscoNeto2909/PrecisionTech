export default function Message({ msg }: { msg: string }) {
    return (
        <div className="bg-transparent fixed top-[75px] w-full text-center mx-auto z-10 text-lg text-blue-950 font-bold">
            {msg}
        </div>
    )
}