import HeroIMG from '../assets/images/HeroIMG.png'
import HeroPhone from '../assets/images/HeroPhone.png'

export const Hero = () => {
return (
<div className='w-full '>
    <div className="pt-6 md:mt-28 lg:mt-32 md:mx-10 mx-4 mt-24 bg-[#EEEEEE] rounded-2xl ">
        <div className="flex items-center justify-center w-full bg-[#EEEEEE]">
            <div className="inline-flex flex-col items-center justify-center md:p-12 p-4 bg-[#EEEEEE]">
                <h3 className=" font-bold text-center font-oakes md:text-5xl lg:text-7xl text-2xl gap-y-1">
                    One Window, One Step <br /> <span className="text-[#0065FB]">Total Health Solution</span>
                </h3>
                <div className='md:pt-10 pt-6'>
                    <p className="max-w-[264px] md:max-w-[420px] text-center font-oakes font-normal text-sm tracking-tight text-[#737373]">
                        The website will act as a hub to connect the MedLinkPro app with hospital systems,
                        making it easier for patients, doctors, and hospitals to share and access healthcare
                        data.
                    </p>
                </div>
            </div>
        </div>
        <div className ="flex items-center justify-center">
            <button
                className ="bg-[#0065FB] shadow-lg shadow-blue-500/50 py-4 px-6  text-[#EEEEEE] font-sofia font-semibold rounded-xl">
                Request a Demo
            </button>
            <button className="py-4 px-6 rounded-lg text-[#000000] font-sofia font-semibold bg-white ml-4">
                Contact Sales
            </button>
        </div>
        <div className="relative h-[744px] w-full ">
            <div className="absolute bottom-0 left-14">
                <div className="inline-flex items-center justify-center">
                    <img className="w-[1296px] style={{ boxShadow: '0px 12px 48px 0px rgba(161, 161, 161, 0.25)' }}" src={HeroIMG} alt="Hero" />
                </div>
            </div>

            <div className="absolute bottom-0 right-16">
                <div className="inline-flex items-center justify-center">
                    <img className="h-auto w-[316px]" src={HeroPhone} />
                </div>
            </div>
            <div className="absolute z-40 bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-50 to-transparent">
            </div>
        </div>
       </div>
   </div>
)
}
