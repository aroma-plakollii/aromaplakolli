export const Links = () => {
    return (
        <div className={'mt-8'}>
            <h3 className={'mb-4'}>Links</h3>
            <div>
                <div className={"flex justify-between md:w-4/12 mb-3 group"}>
                    <p className={"text-[15px] text-zinc-400"}>Github</p>
                    <a href={"https://github.com/aroma-plakollii"}  target="_blank"  className={"text-[15px] flex"}>
                        <span className="mr-2 group-hover:underline">@aroma-plakollii</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </div>
                <div className={"flex justify-between md:w-4/12 group"}>
                    <p className={"text-[15px] text-zinc-400"}>LinkedIn</p>
                    <a href={"www.linkedin.com/in/aroma-plakolli-62a4a225a"} target="_blank"  className={"text-[15px] flex"}>
                        <span className="mr-2 group-hover:underline">Aroma Plakolli</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}