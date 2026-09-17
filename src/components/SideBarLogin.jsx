import { useState } from 'react'

function SideBar({subtitulo, minititulo, systemInfos, divHidden, divHiddenTwo, steps, hrHidden, setLoading}){
    const [passedElement, setPassedElement] = useState(false)

    return (
        <div className="bg-[#1E3A5F] flex flex-col h-screen w-1/5 p-[48px] justify-between">
            <div>
                <h1 className="text-[white] text-[24px]"><b>HelpTrack</b></h1>
                <p className="text-[#5A738E] text-[12px] font-mono">{subtitulo}</p>
            </div>

            <div>

                {!divHidden && (
                    <p className="text-[12px] text-[#5A738E] font-mono">{minititulo}</p>
                )}

                {!divHidden && (
                    <div className="flex justify-between my-[15px] text-[14px]">
                        <p className="text-[#8A9EB5]">{systemInfos[0].titulo}</p>
                        <p className="text-white">{systemInfos[0].info}</p>
                    </div>
                )}

                {!hrHidden && (
                    <hr className="text-[#2A4B75]"></hr>
                )}
                
                {!divHidden && (
                    <div className="flex justify-between my-[15px] text-[14px]">
                        <p className="text-[#8A9EB5]">{systemInfos[1].titulo}</p>
                        <p className="text-white">{systemInfos[1].info}</p>
                    </div>
                )}

                {!hrHidden && (
                    <hr className="text-[#2A4B75]"></hr>
                )}

                {!divHidden && (
                    <div className="flex justify-between my-[15px] text-[14px]">
                        <p className="text-[#8A9EB5]">{systemInfos[2].titulo}</p>
                        <p className="text-white">{systemInfos[2].info}</p>
                    </div>
                )}

                {!hrHidden && (
                    <hr className="text-[#2A4B75]"></hr>
                )} 

                {!divHiddenTwo && (
                    <div className="flex flex-col items-start justify-center gap-5 ">
                        <div className="flex items-center justify-center gap-5">
                            <span className="font-mono text-[14px] inline-flex justify-center items-center p-[15px] text-white bg-[#1E3A5F] border-[2px] border-white rounded-full w-5 h-5 items-center">{steps[0].position}</span>
                            <p className="text-white font-mono text-[14px]">{steps[0].titulo}</p>
                        </div>

                        <div className="flex items-center justify-center gap-5">
                            <span className="font-mono text-[14px] inline-flex justify-center items-center p-[15px] text-gray-400 border-gray-400 bg-[#1E3A5F] border-[2px] rounded-full w-5 h-5 items-center">{steps[1].position}</span>
                            <p className=" font-mono text-gray-400 text-[14px] whitespace-nowrap">{steps[1].titulo}</p>
                        </div>
                    </div>
                )}

            </div>

            <p className="text-[#5A738E] text-[12px] font-mono">© 2026 HelpTrack</p>
        </div>
    )
}

export default SideBar