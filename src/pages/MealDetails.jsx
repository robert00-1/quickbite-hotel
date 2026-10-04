
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function MealDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.meals ? data.meals[0] : null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Meal details error:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">
          Loading meal...
        </p>
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Meal not found
        </h2>

        <button
          onClick={() => navigate("/menu")}
          className="mt-5 bg-red-500 text-white px-6 py-3 rounded-lg"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  // Create an ingredients list
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        ingredient,
        measure,
      });
    }
  }

  // Temporary price
  const price = 850;

  const total = price * quantity;

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back button */}
        <button
          onClick={() => navigate("/menu")}
          className="mb-8 text-red-500 font-semibold hover:text-red-600"
        >
          ← Back to Menu
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Image */}
            <div>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-full min-h-[400px] object-cover"
              />
            </div>

            {/* Information */}
            <div className="p-8 lg:p-10">

              <p className="text-red-500 font-semibold uppercase tracking-wider">
                {meal.strCategory}
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                {meal.strMeal}
              </h1>

              <p className="text-gray-500 mt-2">
                {meal.strArea} cuisine
              </p>

              {/* Price */}
              <div className="mt-6">
                <span className="text-3xl font-bold text-gray-900">
                  KSh {price}
                </span>
              </div>

              {/* Ingredients */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Ingredients
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  {ingredients.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-3"
                    >
                      <p className="font-semibold text-gray-800">
                        {item.ingredient}
                      </p>

                      <p className="text-sm text-gray-500">
                        {item.measure}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  Quantity
                </h2>

                <div className="flex items-center gap-4">

                  <button
                    onClick={() =>
                      setQuantity((current) =>
                        Math.max(1, current - 1)
                      )
                    }
                    className="w-10 h-10 rounded-lg bg-gray-200 text-xl font-bold hover:bg-gray-300"
                  >
                    −
                  </button>

                  <span className="text-xl font-bold">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity((current) => current + 1)
                    }
                    className="w-10 h-10 rounded-lg bg-gray-200 text-xl font-bold hover:bg-gray-300"
                  >
                    +
                  </button>

                </div>
              </div>

              {/* Total */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-gray-600">
                  Total
                </span>

                <span className="text-2xl font-bold text-gray-900">
                  KSh {total}
                </span>
              </div>

              {/* Add to cart */}
              <button
               onClick={() => {
                addToCart(meal, price, quantity)
                navigate("/cart");
               }}
                className="mt-6 w-full bg-red-500 text-white py-4 rounded-xl
                font-bold text-lg hover:bg-red-600 transition"
              >
                Add to Cart
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MealDetails;

