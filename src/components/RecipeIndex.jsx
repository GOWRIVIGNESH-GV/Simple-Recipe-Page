import React from "react";
import Banner from "../assets/image-omelette.jpeg";

const RecipeIndex = () => {
  return (
    <div className="bg-[#F3E5D8] min-h-screen md:grid md:place-items-center font-outfit">
      <div className="bg-white md:max-w-2xl md:rounded-2xl shadow-md p-6 md:mt-5">
        <img className="rounded-xl mb-6 w-full" src={Banner} alt="Banner" />
        <h1 className="font-bold text-3xl mb-5 font-young-Serif text-[#302d2c]">Simple Omelette Recipe</h1>
        <p className="text-[16px] mb-5 text-[#302d2c] text-justify">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="bg-[#fff5fa] rounded-xl mb-5 p-6">
          <h3 className="text-[#7b284f] font-semibold mb-2">
            Preparation time
          </h3>
          <ul className="list-disc text-[#302D2C] text-sm pl-5 space-y-2">
            <li className="pl-2">
              <b>Total:</b> Approximately 10 minutes
            </li>
            <li className="pl-2">
              <b>Preparation:</b> 5 minutes
            </li>
            <li className="pl-2">
              <b>Cooking:</b> 5 minutes
            </li>
          </ul>
        </div>

        <h2 className="sub-heading  mb-6">Ingredients</h2>
        <ul className="list-disc space-y-2  text-[#302d2c] pl-6 mb-5 custom-marker">
          <li className="pl-2">2-3 large eggs</li>
          <li className="pl-2">Salt, to taste</li>
          <li className="pl-2">Pepper, to taste</li>
          <li className="pl-2">1 tablespoon of butter or oil</li>
          <li className="pl-2">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>

        <hr className="text-gray-200 mb-5" />
        <h2 className="sub-heading  mb-6">Instructions</h2>
        <ol className="list-decimal text-[#302D2C] pl-6 space-y-2 text-sm custom-marker mb-5">
          <li className="pl-2 ">
            <b>Beat the eggs:</b>In a bowl, beat the eggs with a pinch of salt
            and pepper until they are well mixed. You can add a tablespoon of
            water or milk for a fluffier texture.
          </li>
          <li className="pl-2">
            <b>Heat the pan:</b> Place a non-stick frying pan over medium heat
            and add butter or oil.
          </li>
          <li className="pl-2">
            <b>Cook the omelette:</b> Once the butter is melted and bubbling,
            pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
            surface.
          </li>
          <li className="pl-2">
            <b>Add fillings (optional):</b> When the eggs begin to set at the
            edges but are still slightly runny in the middle, sprinkle your
            chosen fillings over one half of the omelette.
          </li>
          <li className="pl-2">
            <b>Fold and serve:</b> As the omelette continues to cook, carefully
            lift one edge and fold it over the fillings. Let it cook for another
            minute, then slide it onto a plate.
          </li>
          <li className="pl-2">
            <b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.
          </li>
        </ol>
        <hr className="text-gray-200 mb-5" />
        <h2 className="sub-heading mb-6">Nutrition</h2>
        <p className="text-sm text-[#302D2C] mb-4">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <div className="grid grid-cols-2 text-sm text-[#302D2C] ">
          <p className="py-2 border-b  border-b-gray-400">Calories</p>
          <p className="py-2 border-b  border-b-gray-400 text-[#854632] font-bold">
            277kcal
          </p>

          <p className="py-2 border-b  border-b-gray-400">Carbs</p>
          <p className="py-2 border-b  border-b-gray-400 text-[#854632] font-bold">
            0g
          </p>

          <p className="py-2 border-b border-b-gray-400">Protein</p>
          <p className="py-2 border-b  border-b-gray-400 text-[#854632] font-bold">
            20g
          </p>

          <p className="py-2 ">Fat</p>
          <p className="py-2 font-bold text-[#854632]">22g</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeIndex;
