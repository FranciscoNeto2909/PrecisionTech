import ScheduleCard from "../../components/scheduleCard/ScheduleCard";
import { schedules } from "../../data/schedules";

export default function Schedules() {
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
            </div>
        </div>
    )
}