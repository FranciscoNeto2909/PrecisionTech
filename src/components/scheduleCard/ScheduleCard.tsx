type Schedule = {
    client: string,
    date: string,
    service: string
}

type ScheduleProps = {
    schedule: Schedule
}
export default function ScheduleCard({ schedule }: ScheduleProps) {
    return (
        <div className="p-2 py-4 rounded-sm w-full flex card-shadow lg:text-lg">
            <div className="flex-1 text-blue-950">{schedule.client}</div>
            <div className="text-center flex-1 text-blue-600">{schedule.service}</div>
            <div className="text-end flex-1 text-sm lg:text-sm">{schedule.date}</div>
        </div>
    )
}