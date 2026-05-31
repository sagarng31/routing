import { useSearchParams } from "react-router-dom";

const Articles = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const sortBy = searchParam.get("sortBy");
  const category = searchParam.get("category");

  const handleSearch = () => {
    setSearchParam({ sortBy: "city", category });
  };
  return (
    <div>
      <h2>
        Articles
        <p>
          SortBy: {sortBy} Category: {category}{" "}
        </p>
      </h2>
      <button onClick={handleSearch}>Sort by City</button>
    </div>
  );
};

export default Articles;
