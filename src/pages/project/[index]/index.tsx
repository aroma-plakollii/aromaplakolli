import {projectDetails} from "@/db/project-details";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

const Project = () => {
    const router = useRouter();
    const { index } = router.query;

    const i = index ? +index : null;

    if (!i || isNaN(i)) {
        return <p className="text-center text-red-500">Invalid project.</p>;
    }

    return (
        <div className={"w-11/12 md:w-6/12 mx-auto mt-8 mb-20"}>
            <Link href={'/'} className={'inline-flex rounded-full p-[6px] text-cyan-500 bg-cyan-800/40'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
            </Link>
            <h1 className={'text-2xl text-center mt-5 font-semibold'}>{projectDetails[i - 1].name}</h1>
            <Image width={760} height={500} alt={"project image"} src={projectDetails[i - 1].img}/>
            <div className={'mt-10'}>
                <h3 className={'text-lg mb-4'}>Project Overview</h3>
                <p style={{whiteSpace: "pre-line"}} className={'text-sm text-gray-400'}>{projectDetails[i - 1].description}</p>
            </div>
            <div className={'mt-10'}>
                <h3 className={'text-lg mb-4'}>Tools Used</h3>
                <ul>
                    {projectDetails[i - 1].tools.map((tool: string, index: number) => {
                        return (
                            <li className={'text-base bg-cyan-800/40 text-cyan-500 rounded-full px-6 py-1.5 inline-flex mr-3 mb-4'}
                                key={index}>
                                {tool}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={'mt-7'}>
                <h3 className={'text-lg mb-4'}>See Live</h3>
                <a href={`${projectDetails[i - 1].link}`} target="_blank" className={"text-[15px] flex text-gray-400 group"}>
                    <span className="mr-2 group-hover:underline">{projectDetails[i - 1].name}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Project;