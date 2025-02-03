import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDrug, setSelectedDrug] = useState("");
  const [manname,setManname]=useState("")
  const [route,setRoute]=useState("")

  useEffect(() => {
    if (query.length < 1) {
      setSuggestions([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      let brandResults = [];
      let genericResults = [];

      try {
        const brandResponse = await axios.get(
          `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${query}*&limit=5`
        );
        console.log(brandResponse.data)
        setManname(brandResponse.data.results[0].openfda.manufacturer_name)
        setRoute(brandResponse.data.results[0].openfda.route)
        brandResults = brandResponse.data.results?.map(
          (item) => item.openfda.brand_name?.[0] || "Unknown"
        ) || [];
      } catch (error) {
        console.error("Error fetching brand data:", error);
      }

      try {
        const genericResponse = await axios.get(
          `https://api.fda.gov/drug/label.json?search=openfda.generic_name:${query}*&limit=1`
        );
        genericResults = genericResponse.data.results?.map(
          (item) => item.openfda.generic_name?.[0] || "Unknown"
        ) || [];
      } catch (error) {
        console.error("Error fetching generic data:", error);
      }

      const combinedResults = [
        ...brandResults,
        ...genericResults,
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
    <div className="App flex ">
      <div>
      <h2 class="text-5xl  mb-4 text-slate-700">Drug Search</h2>
      <div className="search-bar">
      <div className="search-container">
        <input
          type="text" class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none "
          placeholder="Search for a drug..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
      </div>
      {loading && <div className="loading" class=" mt-2">Loading...</div>}
      {suggestions.length > 0 ? (
        <ul className="suggestions" class="ml- border-2 border-gray-300 w-63 mt-4 rounded-lg bg-gray-200 ">
          {suggestions.map((drug, index) => (
            <li key={index} class="text-black ml-4 mt-2 hover:cursor-pointer hover:bg-slate-300 mr-2 rounded-lg px-2 py-3" onClick={() => setSelectedDrug(drug)}>
              {truncateText(drug,25).charAt(0).toUpperCase() +truncateText(drug,25).slice(1).toLowerCase()}
            </li>
          ))}
        </ul>
      ) : (
        query.length >= 1 && !loading && <div className="no-results">No results found</div>
      )}
    </div >
    </div>
      <div class=" flex flex-col ml-60  w-200 border-2 border-gray-200 mt-28 text-center  items-center rounded-lg space-y-4 bg-gray-100">
      {selectedDrug && <h3 class="text-3xl text-gray-700 mt-2"><b>Drug Name: </b>{selectedDrug}</h3>}
      {selectedDrug && <h3 class="text-2xl text-gray-700 mt-8"><b>Route: </b>{route}</h3>}
      {selectedDrug && <h3 class="text-2xl text-gray-700 mt-8"><b>Manufacturer Name:</b> {manname}</h3>}
      {selectedDrug&&<h3 class="text-2xl text-gray-700 mt-8"><b>Prescribed Dosage For Adults:</b> 650 mg</h3>}
      {selectedDrug&&<h3 class="text-2xl text-gray-700 mt-8"><b>Prescribed Dosage For Children:</b> 350 mg</h3>}
      </div>
    </div>
  );
};

export default SearchBar;
