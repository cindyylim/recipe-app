import { useFavorites } from "../../context/FavoritesContext";
import RecipeCard from "../RecipeCard";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const bgColors = ["bg-[#ecf7d4]", "bg-[#f7e4d4]", "bg-[#d4e4f7]"];

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl">Favorite Recipes</h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Your saved recipes
        </p>
        {favorites.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No favorite recipes yet</p>
        ) : (
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((recipe, index) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                bgColor={bgColors[index % bgColors.length]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;