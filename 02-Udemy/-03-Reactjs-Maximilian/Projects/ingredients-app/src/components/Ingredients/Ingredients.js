import React, { useState, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch(
      "https://react-hooks-update-a69c8-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "aplication/json" },
      }
    )
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((data) => {
        setIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: data.name, ...ingredient },
        ]);
      });
  };

  const filteredIngredientsHandler = useCallback((filterIngredients) => {
    setIngredients(filterIngredients);
  }, []);

  const removeItemHandler = (itemId) => {
    setIsLoading(true);
    fetch(
      `https://react-hooks-update-a69c8-default-rtdb.firebaseio.com/ingredients/${itemId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        setIsLoading(false);
        setIngredients((prevIngredients) =>
          prevIngredients.filter((ing) => ing.id !== itemId)
        );
      })
      .catch((error) => {
        setError("Something went wrong!");
        setIsLoading(false);
      });
  };

  const clearError = () => {
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeItemHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
