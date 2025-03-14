import Image from "next/image";

export const Header = () => {
    return (
        <div className={"flex gap-6 items-center"}>
            <div>
                <Image src={'/assets/images/profile.jpg'} alt={'profile-picture'} className={"rounded-full"} width={112} height={112} />
            </div>
            <div>
                <h1 className={"text-2xl"}>Aroma Plakolli</h1>
                <h3 className={"text-sm text-zinc-400"}>Full-Stack Developer</h3>
            </div>
        </div>
    )
}