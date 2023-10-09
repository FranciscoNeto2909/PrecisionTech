import { useState } from "react";
import axios from "axios";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { schedules } from "../../data/schedules";
import ptBR from 'date-fns/locale/pt-BR';
import { useNavigate } from "react-router-dom";
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

type Props = {
    setMessage: (e: string) => void
}

export default function Scheduling({ setMessage }: Props) {
    const emailRegex = new RegExp("^[_a-z0-9-]+([_a-z0-9-]+)*@[a-z0-9-]+([a-z0-9-]+).([a-z]{2,3})$")
    const navigate = useNavigate()

    const [step, setStep] = useState(1)
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

    function handleFirstStep() {
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
        }
        else {
            setStep(step + 1)
        }
    }

    async function handleSubmit() {
        const { name, email, service, date } = scheduleDate
        const dateFormat: DateType = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const formatedDate = new Intl.DateTimeFormat('pt-BR', dateFormat);

        if (scheduleDate.date === null) {
            setErrors({ ...errors, date: true })
            setErrorMsg("Selecione uma data")
            setTimeout(() => {
                setErrors({ ...errors, date: false })
                setErrorMsg("")
            }, 2000);
        }
        else {
            setMessage("Seu agendamento foi confirmado!")
            localStorage.setItem("client", name)
            axios.post("https://precisiontech.onrender.com/schedules", {
                name,
                date: `${formatedDate.format(date as Date)}`,
                email,
                service
            })
                .then(res => console.log(res))
            navigate("/")
        }
    }

    return (
        <div className="mb-6 lg:min-h-[74vh]">
            <div className="flex flex-col items-center mx-auto max-w-[1250px] py-4 px-1 lg:px-6">
                <h2 className="text-2xl mb-6 lg:text-3xl">Agendamento fácil e rápido</h2>
                <div className="w-full flex flex-col items-center bg-blue-100 p-6 card-shadow md:w-auto lg:rounded-md lg:py-2">
                    {step === 2 && <div className="w-[300px] mx-auto mb-6 bg-blue-100 text-blue-950 font-bold md:mb-8">
                        <button className="ps-[2px]" onClick={() => setStep(1)}>&larr;</button>
                    </div>}
                    {step === 1 &&
                        <form
                            action=""
                            className="bg-blue-100 flex flex-col gap-3 mb-4  w-full md:w-[600px] md:flex-row">
                            <div className="bg-blue-100 flex-1 flex flex-col gap-3">
                                <div className="bg-blue-100 self-center">
                                    <p className="bg-blue-100 text-blue-950 text-xl"></p>
                                </div>
                                <div className="bg-blue-100">
                                    <label htmlFor="name" className="bg-blue-100 text-blue-950 font-bold">Nome</label>
                                    <input
                                        id="name"
                                        autoComplete="none"
                                        value={scheduleDate.name}
                                        onChange={e => setScheduleDate({ ...scheduleDate, name: e.target.value })}
                                        type="text"
                                        placeholder="user"
                                        className={`capitalize bg-white p-2 w-full rounded-md outline-none border ${errors.name && "border-red-500"}`}
                                    />
                                    {errors.name &&
                                        <p className="bg-blue-100 text-xs mt-1 ms-1 text-red-500">{errorMsg}</p>
                                    }
                                </div>
                                <div className="bg-blue-100">
                                    <label htmlFor="email" className="bg-blue-100 text-blue-950 font-bold">Email</label>
                                    <input
                                        id="email"
                                        value={scheduleDate.email}
                                        onChange={e => setScheduleDate({ ...scheduleDate, email: e.target.value })}
                                        type="email"
                                        placeholder="user@gmail.com"
                                        className={`bg-white p-2 w-full rounded-md outline-none border ${errors.email && "border-red-500"}`}
                                    />
                                    {errors.email &&
                                        <p className="bg-blue-100 text-xs mt-1 ms-1 text-red-500">{errorMsg}</p>
                                    }
                                </div>
                                <div className="bg-blue-100">
                                    <label htmlFor="services" className="bg-blue-100 text-blue-950 font-bold">Tipo de serviço</label>
                                    <select name="servicesSelect" title="Selecione" id="services" className={`outline-none bg-white py-2 border rounded-md w-full ${errors.service && "border-red-500"}`} value={scheduleDate.service} onChange={e => setScheduleDate({ ...scheduleDate, service: e.target.value })}>
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
                                        <p className="bg-blue-100 text-xs mt-1 ms-1 text-red-500">{errorMsg}</p>
                                    }
                                </div>
                                <div className="bg-blue-100">
                                    <input id='terms' checked={terms} onClick={() => setTerms(!terms)} type="checkbox" className="me-4" readOnly />
                                    <label htmlFor="terms" className={`bg-blue-100 text-blue-500 ${errors.terms && "text-red-500"}`}>Aceito os termos e condições</label>
                                </div>
                            </div>
                        </form>}
                    {step === 2 &&
                        <div className="self-center flex flex-col items-center bg-transparent ps-2 datepicker-container my-4">
                            <div className="relative bg-blue-100 mb-4 scale-125">
                                <DatePicker
                                    inline
                                    locale="pt-BR"
                                    minDate={new Date()}
                                    selected={scheduleDate.date}
                                    excludeDates={excludeDates}
                                    onChange={(dt) => setScheduleDate({ ...scheduleDate, date: dt })}
                                />
                                {errors.date &&
                                    <p className="absolute bottom-[-12px] end-0 bg-blue-100 text-xs text-red-500">{errorMsg}</p>
                                }
                            </div>
                        </div>}
                    <div className={`bg-blue-100 self-start ps-[2px] mt-1 ${step === 2 && "w-[300px] mx-auto"}`}>
                        <button onClick={step === 1 ? handleFirstStep : handleSubmit} className={`py-2 px-6 self-start rounded-sm text-white ${terms === false ? "bg-blue-300" : "bg-blue-600 "}`}>{step === 1 ? "Avançar" : "Agendar"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
