import HeroIMG from '../assets/images/HeroIMG.png'

export const Hero = () => {
return (
<>
    <div className="pt-6 mt-10 mx-10 bg-[#EEEEEE] rounded-2xl overflow-hidden ">
        <div className="flex items-center justify-center w-full  bg-[#EEEEEE]">
            <div className="inline-flex flex-col items-center justify-center p-12 bg-[#EEEEEE]">
                <h3 className="mx-auto text-6xl font-bold text-center Oakes Grotesk">
                    One Window, One Step <br /> <span className="text-[#0065FB]">Total Health Solution</span>
                </h3>
                <div className='pt-10'>
                    <p className="max-w-[480px] text-center Oakes Grotesk text-[#737373]">
                        The website will act as a hub to connect the MedLinkPro app with hospital systems,
                        making it easier for patients, doctors, and hospitals to share and access healthcare
                        data.
                    </p>
                </div>
            </div>
        </div>
        <div className ="flex items-center justify-center">
            <button
                className ="bg-[#0065FB] shadow-lg shadow-blue-500/50 py-4 px-6  text-[#EEEEEE] Sofia Pro font-semibold rounded-xl">
                Request a Demo
            </button>
            <button className="py-4 px-6 rounded-lg text-[#000000] Sofia Pro font-semibold bg-white ml-4">
                Contact Sales
            </button>
        </div>
        <div className="relative mt-16 h-[800px] w-full ">
            <div className="absolute bottom-0 -translate-x-1/2 left-1/2">
                <div className="inline-flex items-center justify-center w-[1420px] left-6 ">
                    <img className="" src={HeroIMG} alt="Hero" />
                    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-50 to-transparent">
                    </div>
                </div>
            </div>
            {/* another container for the second image */}
            {/* <div className="absolute bottom-0 right-4">
                <div className="inline-flex items-center justify-center">
                    <img className="h-auto w-80" src="iPhone1.png" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-50 to-transparent">
                </div>
            </div> */}
        </div>
    </div>
</>
)
}
