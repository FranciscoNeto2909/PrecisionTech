import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { schedules } from "../../data/schedules";
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR);

type ScheduleType = {
    name: string,
    email: string,
    service: string,
    date: Date | null
}

type DateType = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
}

export default function Scheduling() {
    const emailRegex = new RegExp("^[_a-z0-9-]+([_a-z0-9-]+)*@[a-z0-9-]+([a-z0-9-]+).([a-z]{2,3})$")

    const [errorMsg, setErrorMsg] = useState("")
    const [terms, setTerms] = useState(false)
    const [scheduleDate, setScheduleDate] = useState<ScheduleType>({
        name: "",
        email: "",
        service: "",
        date: null,
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        service: false,
        date: false,
        terms: false
    })

    const schedulesDays = schedules.map((schedule) => schedule.date.slice(0, 2));
    const schedulesMonths = schedules.map((schedule) => schedule.date.slice(3, 5));

    const excludeDates = schedulesDays.map((day, i) => {
        const year = new Date().getFullYear();
        const month = parseInt(schedulesMonths[i], 10) - 1;
        return new Date(year, month, parseInt(day, 10));
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const { name, email, service, date } = scheduleDate
        const dateFormat: DateType = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const formatedDate = new Intl.DateTimeFormat('pt-BR', dateFormat);
        if (terms === false) {
            setErrors({ ...errors, terms: true })
            setTimeout(() => {
                setErrors({ ...errors, terms: false })
            }, 2000);
        } else if (scheduleDate.name === "") {
            setErrors({ ...errors, name: true })
            setErrorMsg("Campo obrigatório!")
            setTimeout(() => {
                setErrors({ ...errors, name: false })
                setErrorMsg("")
            }, 2000);
        } else if (scheduleDate.email === "") {
            setErrors({ ...errors, email: true })
            setErrorMsg("Campo obrigatório!")
            setTimeout(() => {
                setErrors({ ...errors, email: false })
                setErrorMsg("")
            }, 2000);
        } else if (!emailRegex.test(scheduleDate.email)) {
            setErrors({ ...errors, email: true })
            setErrorMsg("Digite um email válido!")
            setTimeout(() => {
                setErrors({ ...errors, email: false })
                setErrorMsg("")
            }, 2000);
        } else if (scheduleDate.service === "") {
            setErrors({ ...errors, service: true })
            setErrorMsg("Selecione um tipo de serviço")
            setTimeout(() => {
                setErrors({ ...errors, service: false })
                setErrorMsg("")
            }, 2000);
        } else if (scheduleDate.date === null) {
            setErrors({ ...errors, date: true })
            setErrorMsg("Selecione uma data")
            setTimeout(() => {
                setErrors({ ...errors, date: false })
                setErrorMsg("")
            }, 2000);
        }
        else {
            console.log({
                name,
                email,
                service,
                date: `${formatedDate.format(date as Date)}`
            })
        }
    }

    return (
        <div className="" onSubmit={handleSubmit}>
            <div className="my-6 flex flex-col items-center mx-auto max-w-[1250px] py-4 px-1 lg:px-6">
                <h2 className="text-2xl mb-6 lg:text-3xl">Faça já seu agendamento</h2>
                <form
                    action=""
                    className="bg-zinc-200 rounded-md flex flex-col gap-3 card-shadow py-8 px-2 w-full md:w-[600px] md:px-4 md:flex-row lg:w-[800px]"
                >
                    <div className="bg-zinc-200 flex-1 flex flex-col gap-3">
                        <div className="bg-zinc-200">
                            <input
                                autoComplete="none"
                                value={scheduleDate.name}
                                onChange={e => setScheduleDate({ ...scheduleDate, name: e.target.value })}
                                type="text"
                                placeholder="Enter your Name"
                                className={`capitalize bg-white p-2 w-full rounded-sm outline-none border ${errors.name && "border-red-500"}`}
                            />
                            {errors.name &&
                                <p className="bg-zinc-200 text-xs mt-1 ms-1 text-red-500">{errorMsg}</p>
                            }
                        </div>
                        <div className="bg-zinc-200">
                            <input
                                value={scheduleDate.email}
                                onChange={e => setScheduleDate({ ...scheduleDate, email: e.target.value })}
                                type="email"
                                placeholder="Enter your Email"
                                className={`bg-white p-2 w-full rounded-sm outline-none border ${errors.email && "border-red-500"}`}
                            />
                            {errors.email &&
                                <p className="bg-zinc-200 text-xs mt-1 ms-1 text-red-500">{errorMsg}</p>
                            }
                        </div>
                        <div className="bg-zinc-200">
                            <select name="servicesSelect" title="Selecione" id="services" className={`outline-none bg-white py-2 border rounded-sm w-full ${errors.service && "border-red-500"}`} value={scheduleDate.service} onChange={e => setScheduleDate({ ...scheduleDate, service: e.target.value })}>
                                <option value="" key="0">
                                    Selecione
                                </option>
                                <option value="Torneamento CNC" key="1">
                                    Torneamento CNC
                                </option>
                                <option value="Retífica Cilíndrica" key="2">
                                    Retífica Cilíndrica
                                </option>
                                <option value="Prototipagem Rápida" key="3">
                                    Prototipagem Rápida
                                </option>
                                <option value="Montagem e Inspeção" key="4">
                                    Montagem e Inspeção
                                </option>
                                <option value="Consultoria Técnica" key="5">
                                    Consultoria Técnica
                                </option>
                            </select>
                            {errors.service &&
                                <p className="bg-zinc-200 text-xs mt-1 ms-1 text-red-500">{errorMsg}</p>
                            }
                        </div>
                        <div className="bg-zinc-200">
                            <input id='terms' onClick={() => setTerms(!terms)} type="checkbox" className="me-4" />
                            <label htmlFor="terms" className={`bg-zinc-200 text-blue-500 ${errors.terms && "text-red-500"}`}>Aceito os termos e condições</label>
                        </div>
                    </div>
                    <div className="self-center flex flex-col bg-transparent ps-2 datepicker-container">
                        <div className="relative">
                            <DatePicker
                                inline
                                locale="pt-BR"
                                minDate={new Date()}
                                selected={scheduleDate.date}
                                excludeDates={excludeDates}
                                onChange={(dt) => setScheduleDate({ ...scheduleDate, date: dt })}
                            />
                            {errors.date &&
                                <p className="absolute bottom-[-10px] start-0 bg-zinc-200 text-xs mt-1 ms-1 text-red-500">{errorMsg}</p>
                            }
                        </div>
                        <button className={`w-full mt-4 py-2 px-6 self-start rounded-sm text-white ${terms === false ? "bg-blue-300" : "bg-blue-600 "}`}>Agendar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
