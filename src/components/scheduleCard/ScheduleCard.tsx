import { AiOutlineDelete } from "react-icons/ai"
import axios from "axios"
type Schedule = {
    id: number,
    name: string,
    date: string,
    service: string
    email: string
}

type ScheduleProps = {
    schedule: Schedule
}

export default function ScheduleCard({ schedule }: ScheduleProps) {
    const client = localStorage.getItem("client")

    async function handleDelete() {
        await axios.delete(`https://precisiontech.onrender.com/schedules/${schedule.id}`)
            .then(data => {
                console.log(data)
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="px-2 py-4 rounded-sm w-full justify-between flex items-end card-shadow relative md:px-4">
            <div className="w-28 text-sm text-blue-950 md:text-base">{schedule.name}</div>
            <div className="text-center text-sm flex-1 text-blue-600 md:text-base">
                {schedule.service}
            </div>
            <div className="mt-2 w-6 flex justify-end md:ms-4">
                {schedule.name === client &&
                    <AiOutlineDelete onClick={handleDelete} className="cursor-pointer fill-red-500" size={22} />
                }
            </div>
            <div className="bg-transparent absolute top-1 end-5 text-[8px]">
                {schedule.date}
            </div>
        </div>
    )
}