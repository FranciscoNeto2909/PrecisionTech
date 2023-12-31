import { TeamType } from "../../data/team";

type propsType = {
    person: TeamType
}

export default function TeamCard({ person }: propsType) {
    return (
        <div className='bg-white h-48 flex-1 min-w-[300px] flex justify-between items-center card-shadow p-2 rounded-md overflow-hidden sm:px-4 md:min-w-[400px] sm:mx-auto lg:max-w-none lg:h-[178px]'>
            <div className='bg-white w-2/3 flex flex-col justify-between'>
                <div className="bg-white">
                    <h3 className='bg-white text-xl font-bold text-blue-950'>{person.name}</h3>
                    <h5 className="bg-white font-bold text-xs mb-2 text-[#47718b]">
                        {person.position}
                    </h5>
                </div>
                <p className="max-h-[100px] text-xs overflow-hidden text-[#47718b] bg-white lg:text-sm">
                    <span className="bg-white text-sm font-bold block text-blue-950">Qualificações:</span>
                    {person.qualifications}
                </p>
            </div>
            <div className='bg-white'>
                <img className='bg-transparent h-36 w-36 ms-1 rounded-md xl:h-40 xl:w-40 xl:ms-7 xl:mt-0' src={person.image} alt="" />
            </div>
        </div>
    )
}