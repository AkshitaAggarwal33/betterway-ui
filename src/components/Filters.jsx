const Filters = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
  clearFilters
}) => {
  return (
    <div className="flex gap-4 flex-wrap mb-6">
      <input
        className="border p-2 rounded"
        placeholder="Search product"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select
        className="border p-2 rounded"
        value={sort}
        onChange={e => setSort(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <button
        onClick={clearFilters}
        className="border px-4 rounded bg-gray-200"
      >
        Clear
      </button>
    </div>
  );
};

export default Filters;
