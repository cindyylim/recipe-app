import { Heart, Video } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
      <a href="#" className="relative h-32">
        <img
          src={recipe.strMealThumb}
          alt="recipe img"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Heart size={16} className="hover:fill-red-500 hover:text-red-500" />
        </div>
      </a>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.strMeal}</p>
      </div>
      <p className="my-2">{recipe.strArea}</p>
      {recipe.strSource && (
        <div className="flex flex-col gap-2 mt-auto">
          <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
            <a
              className="text-sm tracking-tighter font-semibold"
              href={recipe.strSource}
            >
              {recipe.strSource}
            </a>
          </div>
        </div>
      )}
      {recipe.strYoutube && (
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
          <a
            className="text-sm tracking-tighter font-semibold"
            href={recipe.strYoutube}
          >
            <Video size={16} />
            {recipe.strYoutube}
          </a>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
