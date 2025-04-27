import { Search } from "lucide-react";
import RecipeCard from "../RecipeCard";
import { useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await res.json();
      console.log(data);
      setRecipes(data.meals);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const bgColors = ["bg-[#ecf7d4]", "bg-[#f7e4d4]", "bg-[#d4e4f7]"];

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label htmlFor="search" className="mb-2 block">
            Search for recipes
          </label>
          <div className="flex items-center gap-2 border-[1px] border-[#E5E7EB] rounded-lg p-2">
            <Search size="20" />
            <input
              type="text"
              id="search"
              placeholder="Search for recipes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  fetchRecipes(searchQuery);
                }
              }}
              className="w-full p-2 pl-10 focus:outline-none focus:border-blue-500"
            />
          </div>
        </form>
        <h1 className="font-bold text-3cl md:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular choices
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading && <div className="col-span-full">Loading...</div>}
          {error && <div className="col-span-full text-red-500">{error}</div>}
          {!loading && recipes.length === 0 && (
            <div className="col-span-full">No recipes found</div>
          )}
          {!loading &&
            recipes.map((recipe, index) =>
              recipe.strYoutube || recipe.strSource ? (
                <RecipeCard key={recipe.idMeal} recipe={recipe} bgColor={bgColors[index % bgColors.length]} />
              ) : null
            )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
