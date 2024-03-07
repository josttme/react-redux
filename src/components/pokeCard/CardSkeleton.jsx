import { SvgPokeBall } from '../icons'

export function CardSkeleton() {
	return (
		<div className=" bg-blue-primary grid h-[28rem] cursor-pointer gap-4 self-end  rounded-3xl border border-transparent pb-3 ">
			<div className="mx-auto  -mb-5 -mt-28 grid h-80 w-full place-content-center ">
				<SvgPokeBall className="w-full animate-pulse self-center " />
			</div>
			<span className="cardSkeleton bg-blue-secondary h-10 w-44 justify-self-center rounded-2xl"></span>

			<div className="flex justify-center gap-5">
				<span className="cardSkeleton bg-blue-secondary h-10 w-28 rounded-2xl"></span>
				<span className="cardSkeleton bg-blue-secondary h-10 w-28 rounded-2xl"></span>
			</div>
			<div className="flex justify-around px-5 text-center  ">
				<div className="grid w-28 ">
					<span className="cardSkeleton bg-blue-secondary h-[4.5rem] w-28 rounded-2xl"></span>
				</div>
				<div className="cardSkeleton bg-blue-secondary h-3/4 w-[1px] self-center rounded-full opacity-30 "></div>
				<div className="grid w-28">
					<span className="cardSkeleton bg-blue-secondary h-[4.5rem] w-28 rounded-2xl"></span>
				</div>
			</div>
		</div>
	)
}
