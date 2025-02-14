import img1 from './Assets/1.jpg'
import './custom.css'
import './api';
export default function Weather() {
return (
<>
    <div className="weather bg-linear-to-br from-blue-300 to-white h-[100vh]">
        <p className='text-center text-3xl font-bold text-black font-sans'> Weather of <span id='yyy'> None</span> </p>
        <div className="cards flex md:flex-nowrap flex-wrap gap-1 xl:gap-15 px-5 py-5">

            <div className="card bg-black text-white rounded-md">
                <div className="temp font-bold">
                    <p className='text-center my-3 text-2xl'>Temperature</p>
                    <div className="grid grid-flow-col grid-rows-1 mb-2">
                        <p className='text-xl text-center' id='temp_c'></p>
                        <p className='text-xl text-center' id='temp_f'></p>
                    </div>
                    <hr aria-setsize={5} />
                </div>

                <div className="info flex justify-between lg:text-xl lg:mx-5 mx-2 my-5">
                    <div className="flex flex-col flex-1 gap-3 md:items-start items-center">
                        <p className='text-blue-300 font-bold'>Condition</p>
                        <p className='text-blue-300 font-bold'>Humidity</p>
                        <p className='text-blue-300 font-bold '>Pressure(mb)</p>
                    </div>
                    <div className="flex flex-col flex-1 gap-3 items-center">
                        <p id='condition' className='ms-3'></p>
                        <p id='humidity' className='ms-3'></p>
                        <p id='pressure' className='ms-3'></p>
                    </div>
                </div>
            </div>

            <div className="card bg-black text-white rounded-md">
                <div className="temp font-bold">
                    <p className='text-center my-3 text-2xl'>Wind</p>
                    <div className="grid grid-flow-col grid-rows-1 mb-2">
                    <p className='text-xl text-center' id='wind_kph'></p>
                    <p className='text-xl text-center' id='wind_degree'></p>
                    </div>
                    <hr aria-setsize={5} />
                </div>

                <div className="info flex justify-between lg:text-xl lg:mx-5 mx-2 my-5">
                    <div className="flex flex-col flex-1 gap-3 md:items-start items-center">
                        <p className='text-blue-300 font-bold'>Sunrise</p>
                        <p className='text-blue-300 font-bold'>Sunset</p>
                        <p className='text-blue-300 font-bold'>Moon</p>
                    </div>
                    <div className="flex flex-col flex-1 gap-3 items-center">
                        <p id='sunrise' className='ms-3'></p>
                        <p id='sunset' className='ms-3'></p>
                        <p id='moon' className='ms-3 text-center'></p>
                    </div>
                </div>
            </div>

            <div className="card bg-black text-white rounded-md">
                <div className="temp font-bold">
                    <p className='text-center my-3 text-2xl'>Location</p>
                    <div className="grid grid-flow-col grid-rows-1 mb-2">
                        <p className='text-xl text-center' id='xxx'></p>
                        <p className='text-xl text-center' id='region'></p>
                    </div>
                    <hr aria-setsize={5} />
                </div>

                <div className="info flex justify-between lg:text-xl lg:mx-5 mx-2 my-5">
                    <div className="flex flex-col flex-1 gap-3 md:items-start items-center">
                        <p className='text-blue-300 font-bold'>Latitude</p>
                        <p className='text-blue-300 font-bold'>Longitude</p>
                        <p className='text-blue-300 font-bold'>Time</p>
                    </div>
                    <div className="flex flex-col flex-1 content-center gap-3 items-center">
                        <p id='latitude' className='ms-3'></p>
                        <p id='longitude' className='ms-3'></p>
                        <p id='localtime' className='ms-3 text-center'></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}