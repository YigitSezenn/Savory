import "dotenv/config";
import { eq } from "drizzle-orm";
import express from "express";
import { db } from "./db/client";
import { favouritesTable, recipesTable } from "./db/schema";
const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.json());
app.get("/api/health", (req, res) => {
  return res.status(200).json({ succes: true });
});

// all repices -fetch all the repices from the database
app.get("/api/all-recipes", async (req, res) => {
  try {
    const allRecipes = await db.select().from(recipesTable);
    return res.status(200).json({ all_recipes: allRecipes });
  } catch (error) {
    console.log("Tarifler alınırken hata oluştu", error);
    return res.status(500).json({ success: false, error });
  }
});
//favoruites
// add-to-favoruites
app.post("/api/add-to-favourites", async (req, res) => {
  try {
    const { userId, recipeId, title, image, cookTime, servings, description } =
      req.body || {};
    if (!userId || !userId || !title) {
      return res
        .status(400)
        .json({ success: false, message: "User Id ve Title zorunludur" });
    }
    const newFavoruites = await db
      .insert(favouritesTable)
      .values({
        user_id: userId,
        recipe_id: Number(recipeId),
        title,
        image,
        cookTime,
        servings,
        description,
      })
      .returning();
    return res.status(200).json(newFavoruites[0]);
  } catch (error) {
    console.log("Tarifler eklenirken hata oluştu", error);
    return res.status(500).json({ success: false, error });
  }
});
app.get("/api/favourites/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const userFavouritest = await db
      .select()
      .from(favouritesTable)
      .where(eq(favouritesTable.user_id, userId));
    return res.status(200).json({ userFavouritest });
  } catch (error) {
    console.log("Tarifler alınırken hata oluştu", error);
    return res.status(500).json({ success: false, error });
  }
});
//api/detail/:recipeId -Get
app.get("/api/detail/:recipeId", async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await db
      .select()
      .from(recipesTable)
      .where(eq(recipesTable.id, Number(recipeId)));
    return res.status(200).json({ recipe_detail: recipe });
  } catch (error) {
    console.log("Tarif detayları alınırken hata oluştu", error);
    return res.status(500).json({ success: false, error });
  }
});
app.delete("/api/favourites/:userId/:recipeId", async (req, res) => {
  try {
    const { userId, recipeId } = req.params;
    await db
      .delete(favouritesTable)
      .where(
        eq(favouritesTable.user_id, userId) &&
          eq(favouritesTable.recipe_id, Number(recipeId)),
      );
    return res
      .status(200)
      .json({ success: true, message: "Favori Tarifler Silindi" });
  } catch (error) {
    console.log("Tarif silinirken hata oluştu", error);
    return res.status(500).json({ success: false, error });
  }
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
