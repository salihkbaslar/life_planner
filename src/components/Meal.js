import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=76c05f85483a4b7f86ce4c6c746467b6&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <Typography>Preparation time: {meal.readyInMinutes} minutes</Typography>
        <Typography>Number of servings: {meal.servings}</Typography>
      </ul>
      <Button
        className="search-btn"
        sx={{
          bgcolor: "#FF2526",
          color: "#fff",
          textTransform: "none",
          width: { lg: "175px", xs: "80px"},
          fontSize: { lg: "20px", xs: "14px"},
          height: "56px",
        }}
        href={meal.sourceUrl}
        >
            Go to Recipe
      </Button>
    </article>
  );
}