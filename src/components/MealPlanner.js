import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import MealList from "./MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=76c05f85483a4b7f86ce4c6c746467b6&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight="700" sx={{
        fontSize: { lg: '44px', xs: '30px'}}}
        mb="50px" textAlign="center"
      >
        Delicious Recipies You <br />
        Should Try
      </Typography>
      <Box id="mealplanner" position="relative" mb="72px">
        <TextField 
          sx={{
            input: {
                fontWeight: "700",
                border: "none",
                borderRadius: "4px"},
                width: { lg: "800px", xs: "350px"},
                backgroundColor: "#fff",
                borderRadius: "40px"
            }}
            height="76px"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange}
            type='number'
        />
        <Button className="search-btn"
          sx={{
            bgcolor: "#E08B28",
            color: "#000000",
            textTransform: "none",
            width: { lg: "175px", xs: "80px"},
            fontSize: { lg: "20px", xs: "14px"},
            height: "56px",
            position: "absolute",
            right: "0"
          }}
            onClick={getMealData}
        >
            Search
        </Button>
      </Box>
      <Box sx={{
            position: "relative",
            width: "100%",
            p: "20px"
        }}>
          {mealData && <MealList mealData={mealData} />}
        </Box>
    </Stack>
  );
}

export default App;
