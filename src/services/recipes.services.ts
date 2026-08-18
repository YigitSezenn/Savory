import { IAddToFavourite } from "@/types/recipes.types";
import { convertKeysToCamelCase } from "@/utils/app.utils";
import { BASE_URL } from "@/utils/constants";

const fetchAllRecipes = async () => {
  try {
    const url = `${BASE_URL}/all-recipes`;
    const response = await fetch(url);
    const data = await response.json();
    const pardesRecipes = convertKeysToCamelCase(data);
    return pardesRecipes;
  } catch (error) {
    console.log("Tarifler Çekilirken hata oluştu");
  }
};

const fetchAddtoFavourites = async (requestPayload: IAddToFavourite) => {
  try {
    const url = `${BASE_URL}/add-to-favourites`;
    const { userId, recipeId, title, image, cookTime, servings, description } =
      requestPayload || {};
    const payload = {
      userId,
      recipeId,
      title,
      image,
      cookTime,
      servings,
      description,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch {
    console.log("Favorilere Eklerken Hata Oluştu");
  }
};
const fetchUserAddtoFavourites = async (userId: string) => {
  try {
    const url = `${BASE_URL}/favourites/${userId}`;
    const response = await fetch(url);
    const data = await response.json();
    const parsedRecipes = convertKeysToCamelCase(data);
    return parsedRecipes;
  } catch {
    console.log("Favorilere Eklerken Hata Oluştu");
  }
};

const fetchRecipeDetails = async (recipeId: number) => {
  try {
    const url = `${BASE_URL}/detail/${recipeId}`;
    const response = await fetch(url);
    const data = await response.json();
    const parsedRecipes = convertKeysToCamelCase(data);
    return parsedRecipes;
  } catch {
    console.log("Tarif Detayı Çekilirken Hata Oluştu");
  }
};
export {
  fetchAddtoFavourites,
  fetchAllRecipes,
  fetchRecipeDetails,
  fetchUserAddtoFavourites
};
