import { IoIosArrowForward } from "react-icons/io";

const FlightDetailsCard = () => {
  return (
    <section className="w-3/4">
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

      <div className="shadow rounded-md p-5 border">FlightDetailsCard</div>
    </section>
  );
};

export default FlightDetailsCard;
