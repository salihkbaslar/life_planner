import React from "react";
import Meal from "./Meal";
import { Box, Stack, Typography } from "@mui/material";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;
  
  return (
    <Box
      sx={{mt: { lg:"110px" }}}
      mt="50px"
      p="20px"
    >
      <Typography className="nutrients" fontWeight="700" sx={{
        fontSize: { lg: '44px', xs: '30px'}}}
        mb="50px" textAlign="center">
        Macros
      </Typography>
      <Typography>
        <Stack direction="row" spacing={20} mb="50px" alignItems="center" justifyContent="center">
          <Typography 
            sx={{
              fontSize: { lg: '32px', xs: '20px'}}}>
              Calories: {nutrients.calories.toFixed(0)}
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: '32px', xs: '20px'}}}>
              Carbohydrates: {nutrients.carbohydrates.toFixed(0)}
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: '32px', xs: '20px'}}}>
              Fat: {nutrients.fat.toFixed(0)}
              </Typography>
          <Typography
            sx={{
              fontSize: { lg: '32px', xs: '20px'}}}>
              Protein: {nutrients.protein.toFixed(0)}
              </Typography>
        </Stack>
      </Typography>

      <Stack className="meals" 
      direction="row" 
      sx={{ gap: { lg: "110px", xs: "50px"}}}
      flexWrap="wrap" justifyContent="center">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </Stack>
    </Box>
  );
}
