import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDrug, setSelectedDrug] = useState("");

  useEffect(() => {
    if (query.length < 1) {
      setSuggestions([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      let brandResults = [];
      let genericResults = [];
      let activeIngredientResults = [];

      try {
        const brandResponse = await axios.get(
          `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${query}*&limit=10`
        );
        brandResults = brandResponse.data.results?.map(
          (item) => item.openfda.brand_name?.[0] || "Unknown"
        ) || [];
      } catch (error) {
        console.error("Error fetching brand data:", error);
      }

      try {
        const genericResponse = await axios.get(
          `https://api.fda.gov/drug/label.json?search=openfda.generic_name:${query}*&limit=10`
        );
        genericResults = genericResponse.data.results?.map(
          (item) => item.openfda.generic_name?.[0] || "Unknown"
        ) || [];
      } catch (error) {
        console.error("Error fetching generic data:", error);
      }

      try {
        const activeIngredientResponse = await axios.get(
          `https://api.fda.gov/drug/label.json?search=active_ingredient:${query}*&limit=10`
        );
        activeIngredientResults = activeIngredientResponse.data.results?.map(
          (item) => item.active_ingredient?.[0] || "Unknown"
        ) || [];
      } catch (error) {
        console.error("Error fetching active ingredient data:", error);
      }

      const combinedResults = [
        ...brandResults,
        ...genericResults,
        ...activeIngredientResults,
      ];
      const uniqueResults = Array.from(new Set(combinedResults));

      setSuggestions(uniqueResults);
      setLoading(false);
    };

    const delayDebounce = setTimeout(fetchData, 500);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="App ">
      <h2 class="text-3xl mb-2 underline underline-offset-2">Drug Search</h2>
      <div className="search-bar">
      <div className="search-container">
        <input
          type="text" class="rounded-lg py-3 px-2 shadow-2xl border-2 border-black"
          placeholder="Search for a drug..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
      </div>
      {loading && <div className="loading">Loading...</div>}
      {suggestions.length > 0 ? (
        <ul className="suggestions" class="rounded-lg py-3 px-2 shadow-2xl w-50 border-2 border-black mt-2">
          {suggestions.map((drug, index) => (
            <li key={index} onClick={() => setSelectedDrug(drug)}>
              {truncateText(
                drug
                  .replace(/^(ACTIVE INGREDIENTS: |Active ingredients|Active ingredient|Active Ingrédient):?/i, "")
                  .trim(),
                25
              ).charAt(0).toUpperCase() +
                truncateText(
                  drug
                    .replace(/^(Active ingredient|Active Ingrédient|Active Ingredients: ):?/i, "")
                    .trim(),
                  25
                ).slice(1).toLowerCase()}
            </li>
          ))}
        </ul>
      ) : (
        query.length >= 1 && !loading && <div className="no-results">No results found</div>
      )}
    </div>
      {selectedDrug && <h3>Selected Drug: {selectedDrug}</h3>}
    </div>
  );
};

export default SearchBar;
