import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import "./AvailableMeals.css";
import { useEffect, useState } from "react";

/**
 *
 */
/*const DUMMY_MEALS = [
 {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];*/

/**
 *
 */
const availableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const mealsFromUrl = async () => {
      const swUrl =
        "https://react-http-e1ca7-default-rtdb.firebaseio.com/meals.json";
      const resp = await fetch(swUrl);
      const json = await resp.json();

      const loadedMeals = [];

      for (const key in json) {
        loadedMeals.push({
          id: key,
          name: json[key].name,
          description: json[key].description,
          price: json[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    mealsFromUrl();
  }, []);

  return (
    <section className="meals">
      <Card>
        <ul>
          {isLoading ? (
            <section className="loadingMeals">
              <p>Loading...</p>
            </section>
          ) : (
            meals.map((meal) => (
              <MealItem
                id={meal.id}
                price={meal.price}
                name={meal.name}
                description={meal.description}
                key={meal.id}
              />
            ))
          )}
        </ul>
      </Card>
    </section>
  );
};

export default availableMeals;
