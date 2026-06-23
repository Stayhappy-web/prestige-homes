function PropertySearch() {
  return (
    <section className="search-section">

      <h2>Find Your Perfect Property</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="Location"
        />

        <select>
          <option>Property Type</option>
          <option>Villa</option>
          <option>Apartment</option>
          <option>Penthouse</option>
          <option>Commercial</option>
        </select>

        <select>
          <option>Budget</option>
          <option>$500k+</option>
          <option>$1M+</option>
          <option>$2M+</option>
          <option>$5M+</option>
        </select>

        <button
  onClick={() =>
    document
      .getElementById("properties")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
>
  Search
</button>

      </div>

    </section>
  );
}

export default PropertySearch;