import {projects} from "@/db/projects";
import Link from "next/link";
import Image from "next/image";

export const Projects = () => {
    return (
        <div className={'mt-8'}>
            <h3 className={'mb-3'}>Projects</h3>
            {projects.map((project, index) => {
                return (
                    <div key={index} className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-2 mb-4 pb-9 border-b border-cyan-400`}>
                        <Image width={600}
                               height={400}
                               src={project.img} alt={'project image'} className={"!w-full lg:!w-[60%]"}/>
                        <div className={"text-center mt-0"}>
                            <h2 className={"text-lg mb-2"}>{project.name}</h2>
                            <p className={"text-sm text-gray-400 mb-8"}>{project.description}</p>
                            <Link href={`/project/${index + 1}`} className={"bg-cyan-500 text-white rounded-sm py-2.5 px-6 text-[15px] cursor-pointer hover:bg-cyan-600"}>
                                View
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}