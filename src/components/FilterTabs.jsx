function FilterTabs({ filter,setFilter }) { 
  return (
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-md font-medium transition ${
          filter === "all"
            ? "bg-teal-500 text-white shadow"
            : "bg-gray-300 text-gray-700 hover:bg-gray-400"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-4 py-2 rounded-md font-medium transition ${
          filter === "pending"
            ? "bg-teal-500 text-white shadow"
            : "bg-gray-300 text-gray-700 hover:bg-gray-400"
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 rounded-md font-medium transition ${
          filter === "completed"
            ? "bg-teal-500 text-white shadow"
            : "bg-gray-300 text-gray-700 hover:bg-gray-400"
        }`}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterTabs;
