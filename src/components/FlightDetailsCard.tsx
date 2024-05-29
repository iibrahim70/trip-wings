import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const FlightDetailsCard = () => {
  return (
    <section className="lg:w-3/4">
      {/* static breadcrumbs */}
      <div className="cursor-pointer flex items-center gap-1.5 pb-3 text-gray-500">
        <p>Home</p>
        <IoIosArrowForward />
        <p>Booking History</p>
        <IoIosArrowForward />
        <p>Flight</p>
        <IoIosArrowForward />
        <p className="text-blue-500 font-semibold">STFL17121182045413</p>
      </div>

      {/* flight details card  */}
      <div className="shadow rounded-md p-5 space-y-5 border">
        {/* serial num and destination */}
        <div className="flex flex-wrap items-center justify-between gap-5 xl:gap-10">
          <div className="flex items-center gap-5">
            {/* serial number */}
            <div>
              <span className="bg-blue-500 text-white size-7 rounded-full flex items-center justify-center">
                1
              </span>
            </div>

            {/* destination information*/}
            <div>
              <h3 className="text-xl font-bold">DAC → JFK</h3>

              <div className="flex flex-wrap items-center gap-2.5">
                <p>Round Trip</p>
                <div className="size-2 bg-gray-400 rounded-full" />
                <p>25 Mar - 4 Apr 2023</p>
                <div className="size-2 bg-gray-400 rounded-full" />
                <p>1 Stop</p>
              </div>
            </div>
          </div>

          {/* time duration */}
          <div className="bg-blue-100 text-blue-500 font-semibold px-2.5 py-1 rounded-full">
            33h 20m
          </div>
        </div>

        {/* depature information */}
        <div className="flex items-center justify-between gap-5 xl:gap-10">
          <div className="flex items-center gap-5 xl:gap-10">
            <FaLocationDot className="size-5 text-gray-500" />
            <p className="font-semibold">Departure from Dhaka</p>
          </div>

          <p className="text-gray-500">
            <span className="font-semibold">Terminal 1:</span> Hazrat Shahjalal
            International Airport
          </p>
        </div>

        {/* depature details */}
        <div className="md:w-[85%] flex flex-wrap items-center justify-between gap-5 xl:gap-10">
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold">DAC - DXB</h3>
              <p>12 hr 20 min</p>
            </div>

            <div className="text-gray-500">
              <p className="font-semibold">Turkish Airlines</p>
              <p>Flight No: TUR467</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold">7:30 PM</h3>
              <p>28 Mar, Friday</p>
            </div>

            <div className="text-gray-500">
              <p>Airbus Industrie 737-800-738</p>
              <p>
                Class: <span className="font-semibold">ECONOMY-Y (O)</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">8:50 AM</h3>
            <p>29 Mar, Saturday</p>
          </div>
        </div>

        {/* aleart information */}
        <div className="bg-orange-100 p-2.5 rounded-md flex items-center gap-3">
          <div>
            <span className="bg-orange-500 text-white size-5 rounded-full flex items-center justify-center">
              !
            </span>
          </div>

          <p>
            Technical stoppage at Malpensa International Airport (Milano).
            Before booking this flight please check your visa requirements as
            per your nationality.
          </p>
        </div>

        {/* layover information */}
        <div className="flex items-center gap-5 xl:gap-10">
          <FaLocationDot className="size-5 text-gray-500" />

          <div className="bg-blue-100 flex items-center justify-between gap-5 xl:gap-10 p-2.5 rounded-md w-full">
            <p className="font-semibold">Layover at Dubai: 12 hr 20 min </p>
            <p className="text-gray-500">Dubai International Airport</p>
          </div>
        </div>

        {/* depature details */}
        <div className="md:w-[85%] flex flex-wrap items-center justify-between gap-5 xl:gap-10">
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold">DAC - DXB</h3>
              <p>12 hr 20 min</p>
            </div>

            <div className="text-gray-500">
              <p className="font-semibold">Turkish Airlines</p>
              <p>Flight No: TUR467</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold">7:30 PM</h3>
              <p>28 Mar, Friday</p>
            </div>

            <div className="text-gray-500">
              <p>Airbus Industrie 737-800-738</p>
              <p>
                Class: <span className="font-semibold">ECONOMY-Y (O)</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">8:50 AM</h3>
            <p>29 Mar, Saturday</p>
          </div>
        </div>

        {/* destination information */}
        <div className="flex items-center justify-between gap-5 xl:gap-10">
          <div className="flex items-center gap-5 xl:gap-10">
            <FaLocationDot className="size-5 text-gray-500" />
            <p className="font-semibold">Destination at New York</p>
          </div>

          <p className="text-gray-500">
            <span className="font-semibold">Terminal 4:</span> John F Kennedy
            International Airport
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlightDetailsCard;
