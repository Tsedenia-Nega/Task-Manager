function FilterTabs({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-0.5 mb-6">
      <button
        onClick={() => setFilter("all")}
        className={`w-28 px-4 py-2 rounded-l-md font-medium transition ${
          filter === "all"
            ? "bg-teal-500 text-white shadow"
            : "bg-gray-300 text-gray-700 hover:bg-gray-300"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`w-28 px-4 py-2  font-medium transition ${
          filter === "pending"
            ? "bg-teal-500 text-white shadow"
            : "bg-gray-300 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`w-28 px-4 py-2 rounded-r-md font-medium transition ${
          filter === "completed"
            ? "bg-teal-500 text-white shadow"
            : "bg-gray-300 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterTabs;
