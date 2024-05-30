import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header className="flex flex-col bg-dark-50 py-6 lg:py-16 px-6 items-center">
        <h1 className="font-space text-brand text-4xl mb-12 font-inter">
          Code<span className="text-dark-10 font-bold">Lab</span>
        </h1>
        <div className="relative w-full  lg:max-w-5xl">
          <button>
            <FaSearch className="text-brand absolute left-5 top-6 text-xl" />
          </button>
          <input
            className="bg-dark-40 pl-12 py-5 w-full rounded-xl text-dark-10 placeholder:text-dark-10/50"
            type="search"
            name="searchInput"
            id="searchInput"
            placeholder="Pesquise no Blog"
          />
        </div>
      </header>
    </>
  );
}
