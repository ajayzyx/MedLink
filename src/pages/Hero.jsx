import HeroIMG from '../assets/images/HeroIMG.png'
import HeroPhone from '../assets/images/HeroPhone.png'

export const Hero = () => {
return (
<div id='Home' className='w-full overflow-hidden'>
    <div className="pt-6 md:mt-28 lg:mt-32 md:mx-10 mx-4 mt-[102px] bg-[#EEEEEE] rounded-2xl ">
        <div className="flex items-center justify-center w-full bg-[#EEEEEE]">
            <div className="inline-flex flex-col items-center justify-center sm:px-12 sm:pt-12 sm:pb-8 px-4 pt-6 pb-8 bg-[#EEEEEE]">
                <h3 className=" font-bold text-center font-oakes sm:text-4xl md:text-5xl lg:text-7xl text-[28px] gap-y-1">
                    One Window, One Step <br /> <span className="text-[#0065FB]">Total Health Solution</span>
                </h3>
                <div className='md:pt-12 pt-10'>
                    <p className="max-w-[282px] md:max-w-[420px] text-center font-oakes font-normal sm:text-xs md:text-sm text-[#737373]">
                        The website will act as a hub to connect the MedLinkPro app with hospital systems,
                        making it easier for patients, doctors, and hospitals to share and access healthcare
                        data.
                    </p>
                </div>
            </div>
        </div>
        <div className ="flex items-center justify-center md:gap-4 gap-2 mb-2">
            <button
                className ="bg-[#0065FB] md:py-4 md:px-6 px-4 py-2 text-[#EEEEEE] font-sofia font-semibold rounded-lg md:rounded-xl text-sm" style={{ boxShadow: '0px 12px 48px 0px rgba(1, 107, 252, 0.32)'}}>
                Join With Us
            </button>
            <button className="md:py-4 md:px-6 md:rounded-lg px-3 py-2 rounded-md text-[#000000] font-sofia font-semibold bg-white text-sm">
                Contact Sales
            </button>
        </div>
        <div className="relative h-[256px] sm:h-[400px] md: lg:h-[744px] w-full ">
            <div className="absolute bottom-0 lg:left-14">
                <div className="inline-flex items-center justify-center">
                    <img className="lg:w-[1296px] style={{ boxShadow: '0px 12px 48px 0px rgba(161, 161, 161, 0.25)' }}" src={HeroIMG} alt="Hero" />
                </div>
            </div>

            <div className="absolute bottom-0 right-16">
                <div className="inline-flex items-center justify-center">
                    <img className="h-auto lg:w-[316px] hidden lg:block" src={HeroPhone} />
                </div>
            </div>
            <div className="absolute z-30 bottom-0 left-0 right-0 sm:h-64 h-32 bg-gradient-to-t from-gray-50 to-transparent">
            </div>
        </div>
       </div>
   </div>
)
}
