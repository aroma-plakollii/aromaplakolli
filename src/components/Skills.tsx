import {skills} from "@/db/skills";

export const Skills = () => {

    return (
        <div className={'mt-8'}>
            <h3 className={'mb-3'}>Skills</h3>
            <div>
                <ul>
                    {skills.map((skill: string, index: number) => {
                        return (
                            <li className={'text-sm bg-cyan-800/40 text-cyan-500 rounded-full px-4 py-1 inline-flex mr-3 mb-4'} key={index}>
                                {skill}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}