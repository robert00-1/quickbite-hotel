
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  // Fetch categories
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.meals || []);
      })
      .catch((error) => {
        console.error("Category error:", error);
      });
  }, []);

  // Fetch meals
  useEffect(() => {
    setLoading(true);

    let url =
      "https://www.themealdb.com/api/json/v1/1/search.php?s=";

    if (selectedCategory !== "All") {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
    } else if (search.trim() !== "") {
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    } else {
      url =
        "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Meal error:", error);
        setMeals([]);
        setLoading(false);
      });
  }, [selectedCategory, search]);

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-red-500 font-semibold uppercase tracking-wider">
            QuickBite Hotel
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Our Delicious Menu
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our selection of delicious meals and find
            something perfect for you.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search for a meal..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedCategory("All");
            }}
            className="w-full px-5 py-3 rounded-xl border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-10 justify-start md:justify-center">

          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearch("");
            }}
            className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition ${
              selectedCategory === "All"
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700 hover:bg-red-100"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.strCategory}
              onClick={() => {
                setSelectedCategory(category.strCategory);
                setSearch("");
              }}
              className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                selectedCategory === category.strCategory
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-red-100"
              }`}
            >
              {category.strCategory}
            </button>
          ))}

        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600">
              Loading delicious meals...
            </p>
          </div>
        )}

        {/* No meals */}
        {!loading && meals.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl font-semibold text-gray-700">
              No meals found.
            </p>

            <p className="text-gray-500 mt-2">
              Try another search or category.
            </p>
          </div>
        )}

        {/* Meals */}
        {!loading && meals.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white rounded-2xl overflow-hidden shadow-md
                hover:shadow-xl transition duration-300"
              >

                {/* Image */}
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-6">

                  <h2 className="text-xl font-bold text-gray-900">
                    {meal.strMeal}
                  </h2>

                  {meal.strCategory && (
                    <p className="text-sm text-red-500 mt-2">
                      {meal.strCategory}
                    </p>
                  )}

                  {meal.strArea && (
                    <p className="text-gray-500 text-sm mt-1">
                      {meal.strArea} cuisine
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-5">

                    <span className="text-lg font-bold text-gray-900">
                      KSh {Math.floor(Math.random() * 1000) + 300}
                    </span>

                    <button
                    onClick={() => navigate(`/meal/${meal.idMeal}`)}
                      className="bg-red-500 text-white px-4 py-2
                      rounded-lg font-semibold hover:bg-red-600 transition"
                    >
                      View Details
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default Menu;


