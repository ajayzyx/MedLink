export const Features = () => {
return (
<div className="w-full bg-[#FFFFFF]">
    <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
        <h3 className="p-8 text-5xl font-semibold">
        Key Features That Bridge the Gaps
        </h3>
        <p className="w-[720px] text-[#737373] text-center">
        Explore powerful features that close the gaps in healthcare management. Seamlessly connect patients, providers, and services for a unified experience.
        </p>
    </div>
    <div class="grid grid-rows-4 p-8 gap-16 drop-shadow-md">
        <div className="bg-[#FFF8EB] rounded-lg mx-36 h-[512px]">
            <div classname="flex w-[396px]">
                <a className="bg-[#FFFFFF] rounded-md font-bold">
                    01
                </a>
                <h5>
                Unified Appointment Scheduling  
                </h5>
                <p>
                Patients can book appointments effortlessly by filtering doctors based on expertise and availability. Admins and staff manage schedules and send reminders, ensuring streamlined consultations without conflicts.
                </p>
            </div>
        </div>
        <div className="bg-[#F8FBEE] rounded-lg mx-36 h-[512px]">
        <div>
            <div>
                <a className="bg-[#FFFFFF] rounded-md font-bold">
                    02
                </a>
                <h5>
                Smart Prescription Management
                </h5>
                <p>
                Patients can access prescriptions directly through the app, while staff monitor inventory and orders. Admins oversee and ensure smooth prescription workflows for better treatment adherence.
                </p>
                </div>
            </div>
        </div>
        <div className="bg-[#F0EEFC] rounded-lg mx-36 h-[512px]">
        <div>
            <div>
                <a className="bg-[#FFFFFF] rounded-md font-bold">
                    03
                </a>
                <h5>
                Pharmacy and Lab Integration
                </h5>
                <p>
                Patients can order medications from hospital pharmacies and schedule lab tests with real-time stock availability. Staff process orders and results, while admins maintain oversight for operational efficiency.
                </p>
            </div>
            </div>
        </div>
    </div>
</div>
)
}
