export const Benefits = () => {
return (
<>
    <div className="h-[800px] w-full bg-[#FFFFFF] overflow-hidden py-40">
        <div className="bg-[#FFFFFF] m-8 flex flex-col items-center justify-center">
            <h3 className="p-8 text-5xl font-semibold ">
                Revolutionizing Healthcare Integration
            </h3>
            <p className="w-[720px] text-[#737373] text-center">
                MedLinkPro transforms disconnected systems into a cohesive network, streamlining care and communication
                across the healthcare spectrum.
            </p>
        </div>
        <div>
            <div className="grid grid-cols-3 m-6 gap-x-4 h-80">
                <><div className="m-4 rounded-lg shadow-md">
                    <div className="flex justify-center w-12 h-12 rounded-lg item center bg-[#FFFFFF] m-4">
                        <img src="\src\assets\Benefits1.svg" alt="" className="" />
                    </div>
                    <h5 className="flex pl-4 mt-12 text-xl font-medium">
                        Smarter Healthcare Solutions
                    </h5>
                    <p className="text-[#737373] p-4 text-left">
                        Simplify hospital workflows with HMS-integrated features like appointment scheduling, error-free prescriptions, and real-time patient data management.
                    </p>
                </div>
                </>
                <><div className="m-4 rounded-lg shadow-md">
                    <div className="flex justify-center w-12 h-12 rounded-lg item center bg-[#FFFFFF] m-4">
                        <img src="\src\assets\Benefits2.svg" alt="" className="w-8 h-8 m-2" />
                    </div>
                    <h5  className="flex pl-4 mt-12 text-xl font-medium">
                    Transforming Healthcare
                    </h5>
                    <p className="text-[#737373] p-4 text-left">
                        Simplify hospital workflows with HMS-integrated features like appointment scheduling, error-free prescriptions, and real-time patient data management.
                    </p>
                </div>
                </>
                <div className="m-4 border rounded-lg shadow-md">
                    <div className="flex justify-center w-12 h-12 rounded-lg item center bg-[#FFFFFF] m-4">
                        <img src="\src\assets\Benefits3.svg" alt="" className="w-8 h-8 m-2" />
                    </div>
                    <h5  className="flex pl-4 mt-12 text-xl font-medium">
                    Streamlined Health Management
                    </h5>
                    <p className="text-[#737373] p-4 text-left">
                        Simplify hospital workflows with HMS-integrated features like appointment scheduling, error-free prescriptions, and real-time patient data management.
                    </p>
                </div>
            </div>
        </div>
    </div>
</>
)
}