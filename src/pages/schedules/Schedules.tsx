import { useEffect, useState } from "react";
import ScheduleCard from "../../components/scheduleCard/ScheduleCard";
import axios from "axios"
import { Link } from "react-router-dom";

type ScheduleType = {
    id:number,
    name: string,
    email: string,
    service: string,
    date: string
}
export default function Schedules() {
    const [schedules, setSchedules] = useState<ScheduleType[]>([])
    async function handleGetSchedules() {
        await axios.get("https://precisiontech.onrender.com/schedules").then(data => {
            setSchedules(data.data)
        })
            .catch(err => console.log(err))

    }
    useEffect(() => {
        handleGetSchedules()
    }, [])
    return (
        <div className="min-h-[72vh] mt-10">
            <div className="mx-auto max-w-[1250px]">
                <div className="px-4 flex flex-col gap-3">
                    {
                        schedules.map((schedule, i) => (
                            <ScheduleCard schedule={schedule} key={i} />
                        ))
                    }
                </div>
                <div className="mt-2 p-4">
                    <Link className="py-2 px-4 text-white bg-blue-600 rounded-sm" to={"/agendamento"}>Agendar</Link>
                </div>
            </div>
        </div>
    )
}