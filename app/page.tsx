import { Hero } from "@/components";
import Image from "next/image";
import { fetchCars } from "@/utils";
import { SearchBar, CustomFilter, CarCard } from "@/components";
import { error } from "console";

export default function Home() {
  const allCars = fetchCars();
  console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p> Explore the Cars</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>
        <div className="home__filter-container">
          <CustomFilter />
          <CustomFilter />
        </div>
      </div>
      {!isDataEmpty ? (
        <section>
          <div>
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl">Oops no Results</h2>
          <p></p>
        </div>
      )}
    </main>
  );
}
