import FlightDetailsCard from "../FlightDetailsCard";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <main>
      <Navbar />

      <section className="section-wrapper min-h-[calc(100dvh-56px)] py-5 flex justify-between gap-10">
        {/* left side navigation */}
        <aside className="w-3/12 shadow border" />

        {/* content details  */}
        <FlightDetailsCard />
      </section>
    </main>
  );
};

export default MainLayout;
