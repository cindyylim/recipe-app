import { Search } from "lucide-react";
import RecipeCard from "../RecipeCard";

const HomePage = () => {
  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label htmlFor="search" className="mb-2 block">
            Search for recipes
          </label>
          <div className="flex items-center gap-2 border-[1px] border-[#E5E7EB] rounded-lg p-2">
            <Search
              size="20"
            />
            <input
              type="text"
              id="search"
              placeholder="Search for recipes"
              className="w-full p-2 pl-10 focus:outline-none focus:border-blue-500"
            />
          </div>
        </form>
        <h1 className="font-bold text-3cl md:text-5xl mt-4">Recommended Recipes</h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Popular choices</p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
