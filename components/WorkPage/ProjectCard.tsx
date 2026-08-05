import Image from "next/image";

interface ProjectCardProps {
  imgsrc: string;
  title: string;
}

const ProjectCard = ({ imgsrc, title }: ProjectCardProps) => {
    return (
        <div className="group flex flex-col w-full cursor-pointer">
            
            {/* Image Container */}
            <div className="relative w-full aspect-4/3 rounded-xl bg-gray-100 overflow-hidden border border-black/5 mb-4">
                <Image 
                    src={imgsrc} 
                    alt={title} 
                    fill 
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" 
                />
            </div>
            
            {/* Minimalist Text Container */}
            <div className="px-1">
                <p className="text-black/80 font-general font-medium text-md leading-snug tracking-tight transition-colors duration-300 group-hover:text-black">
                    {title}
                </p>
            </div>
            
        </div>
    );
};

export default ProjectCard;