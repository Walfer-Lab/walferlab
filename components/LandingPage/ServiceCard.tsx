import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link";

const ServiceCard = ({index, title, subtitle}:{index:number, title:string, subtitle:string}) => {
    return (
        <div className="flex flex-col justify-between rounded-4xl bg-linear-to-br from-zinc-900 to-zinc-800 min-w-64 h-full p-4">
            <p className="text-9xl font-black font-general text-white/15 px-4">{index}</p>
            <div className="px-2 space-y-4 pb-2">
            <div className="space-y-2">
                <p className="text-xl font-general font-medium text-white/80">{title}</p>
                <p className="text-sm font-general font-medium text-white/55">{subtitle}</p>
            </div>
            <Link href="/#contact" className="rounded-full w-full px-4 py-1.5 text-white/70 font-general font-medium flex flex-row items-center justify-center gap-2 text-lg border-2 border-white/50 cursor-pointer hover:bg-white/90 hover:text-black transition-colors duration-200">
                Get started
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={24} />
            </Link>
            </div>
        </div>
    )
}
export default ServiceCard;