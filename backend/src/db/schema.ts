import {
    decimal,
    integer,
    jsonb,
    pgTable,
    serial,
    text,
    timestamp,
} from "drizzle-orm/pg-core";

export const favouritesTable = pgTable("favourites", {
  created_at: timestamp("created_at").defaultNow(),
  id: serial("id").primaryKey(),
  recipe_id: integer("recipe_id").notNull(),
  user_id: text("user_id").notNull(),
  title: text("title").notNull(),
  image: text("image"),
  cookTime: integer("cook_time"),
  servings: text("servings"),
  description: text("description"),
});

export const recipesTable = pgTable("recipes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  ingredients: jsonb("ingredients").$type<string[]>().notNull(),
  short_description: text("short_description").notNull(),
  rating: decimal("rating", { precision: 2, scale: 1 }),
  prep_time_minutes: integer("prep_time_minutes"),
  servings: integer("servings"),
  calorie: integer("calorie"),
  protein: integer("protein"),
  carbs: integer("carbs"),
  fats: integer("fats"),
  thumbnail: text("thumbnail"),
  instructions: jsonb("instructions").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});
