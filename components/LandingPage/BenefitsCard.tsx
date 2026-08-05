import Image from "next/image";

const BenefitsCard = ({imgsrc, BCIndex, BCtitle, BCsubtitle}:any)=> {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 py-6 items-center">
            
            <div className="relative flex w-full sm:w-64 h-auto aspect-5/3 rounded-2xl bg-gray-200 overflow-hidden">
              <Image 
                src={imgsrc} 
                alt={BCtitle}
                loading="lazy" 
                fill
                className="object-cover object-center" 
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 p-2">
              <p className="hidden sm:block text-2xl sm:text-3xl text-black/95">{BCIndex}</p>
              <p className="flex flex-col gap-2 text-sm text-black/65">
                <span className="text-black/95 text-3xl tracking-tight">{BCtitle}</span>
                {BCsubtitle}
              </p>
            </div>
        </div>
    )
}
export default BenefitsCard;