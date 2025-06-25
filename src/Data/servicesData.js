// images for services
import receipeAnalusisImg from "../assets/recipe-analysis.jpg";
import mealPlanning from "../assets/meal-planning.jpg";
import ShopableReceipes from "../assets/shoppable-recipes.jpg";
import receipeMangmentImg from "../assets/recipe-management.jpg";
// data services
export let Data = [
  {
    title: "Special Diets/Intolerances",
    content: `We automatically analyze recipes to check for ingredients that
contain common allergens, such as wheat, dairy, eggs, soy, nuts,
etc. We also determine whether a recipe is vegan, vegetarian,
Paleo friendly, Whole30 compliant, and more.`,
    img: `${receipeAnalusisImg}`,
  },
  {
    title: "Search & Organize",
    content: `We provide a recipe search - and not just any recipe search. Our semantic search is fast, accurate, and pretty darn smart. "Gluten free nut free dessert without apples"?Easy as pie, It's all possible.`,
    img: `${receipeMangmentImg}`,
  },
  {
    title: "Plan your meals",
    content: `plan your meals for the week using our recipes. The daily nutritional information is calculated automatically.

`,
    img: `${mealPlanning}`,
  },
  {
    title: "Shoppable Recipes",
    content:
      "Finally! An all-in-one solution for cooking at home. You can pick your recipes and order all the ingredients from an online grocer to have everything delivered or ready for pickup",
    img: `${ShopableReceipes}`,
  },
];
