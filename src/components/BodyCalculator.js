import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function BodyFatCalculator () {
  const [neck, setNeck] = useState();
  const [waist, setWaist] = useState();
  const [hip, setHip] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [bodyFatPercentage, setBodyFatPercentage] = useState();
  const [BMI, setBMI] = useState();
  const [activityLevel, setActivityLevel] = useState();
  const [BMR, setBMR] = useState();

  const calculateBodyFatPercentage = () => {
    let bodyFat = 0;
    if (gender === "male") {
      bodyFat =
        (495 / (1.0324-0.19077*(Math.log10(parseFloat(waist)-parseFloat(neck)))+0.15456*(Math.log10(height)))-450);
    } else {
      bodyFat =
        (495 / (1.29579-0.35004*(Math.log10(parseFloat(waist)+(parseFloat(hip)-parseFloat(neck))))+0.22100*(Math.log10(height)))-450);
    }
  
    setBodyFatPercentage(bodyFat.toFixed(2));
  };

  const calculateBMI = () => {
    let bmi = 0;
    let heightM = height / 100;
    bmi = weight/(heightM*heightM);

    setBMI(bmi.toFixed(2));
  };

  const calculateBMR = () => {
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    const calories = bmr * activityLevel;
    setBMR(calories.toFixed(2));
  };
  

  return (
    <Box  alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography variant="h2" fontWeight="700" sx={{
        fontSize: { lg: '44px', xs: '30px'}}}
        mb="50px" textAlign="center">BFP - BMI - BMR <br /> Calculator</Typography>
        <Stack direction="row">
        <Typography variant="p" mb="50px" p="10px" textAlign="center" width="33%">
          <b>BFP</b> stands for Body Fat Percentage, which is a measure of the proportion of fat tissue in the body compared to lean tissue such as muscle, bone, and organs. BFP can be measured using various methods such as skinfold calipers, bioelectrical impedance, or dual-energy x-ray absorptiometry (DEXA). BFP is often used as a more accurate indicator of health and fitness compared to BMI, as it takes into account the distribution of fat in the body.
        </Typography>
        <Typography variant="p" mb="50px" p="10px" textAlign="center" width="33%">
          <b>BMI</b> stands for Body Mass Index, which is a measure of body fat based on a person's weight and height. It is calculated by dividing a person's weight in kilograms by the square of their height in meters. BMI is often used as an indicator of overall health and is used to categorize individuals as underweight, normal weight, overweight, or obese.
        </Typography>
        <Typography variant="p" mb="50px" p="10px" textAlign="center" width="33%">
          <b>BMR</b> stands for Basal Metabolic Rate, which is the minimum amount of energy or calories that your body needs to carry out basic functions such as breathing, circulation, and maintaining organ function while at rest. It is influenced by various factors such as age, gender, body composition, and genetics.
        </Typography>
        </Stack>
      <Stack direction="row" spacing={10} alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Stack direction="column" spacing={2}>
      <Typography>Gender:
          <Stack  direction="row" spacing={1}>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            <label htmlFor="male">Male</label>
          </Stack>
          <Stack  direction="row" spacing={1}>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            <label htmlFor="female">Female</label>
          </Stack>
        </Typography>
        <Typography>Activity Level:
          <Stack direction="row" spacing={1}>
            <input
              type="radio"
              id="sedentary"
              name="activityLevel"
              value="1.2"
              checked={activityLevel === 1.2}
              onChange={() => setActivityLevel(1.2)}
            />
          <label htmlFor="sedentary">Sedentary</label>
          </Stack>
          <Stack direction="row" spacing={1}>
            <input
              type="radio"
              id="lightlyActive"
              name="activityLevel"
              value="1.375"
              checked={activityLevel === 1.375}
              onChange={() => setActivityLevel(1.375)}
            />
            <label htmlFor="lightlyActive">Lightly Active</label>
          </Stack>
          <Stack direction="row" spacing={1}>
            <input
              type="radio"
              id="moderatelyActive"
              name="activityLevel"
              value="1.55"
              checked={activityLevel === 1.55}
              onChange={() => setActivityLevel(1.55)}
            />
            <label htmlFor="moderatelyActive">Moderately Active</label>
          </Stack>
          <Stack direction="row" spacing={1}>
            <input
              type="radio"
              id="veryActive"
              name="activityLevel"
              value="1.725"
              checked={activityLevel === 1.725}
              onChange={() => setActivityLevel(1.725)}
            />
            <label htmlFor="veryActive">Very Active</label>
          </Stack>
          <Stack direction="row" spacing={1}>
            <input 
              type="radio" 
              id="extremelyActive" 
              name="activityLevel" 
              value="1.9" 
              checked={activityLevel === 1.9} 
              onChange={() => setActivityLevel(1.9)} 
            />
            <label for="extremelyActive">Extremely Active</label>
          </Stack>
        </Typography>
      </Stack>
        <Typography>Measurements
          <Stack direction="column" spacing={1.65}>
          <Stack direction="row" spacing={5}>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Stack>
          <Stack direction="row" spacing={4}>
            <label htmlFor="neck">Neck: </label>
            <input
              type="number"
              id="neck"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
            />
          </Stack>
          <Stack direction="row" spacing={3.6}>
            <label htmlFor="waist">Waist: </label>
            <input
              type="number"
              id="waist"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
            />
          </Stack>
          <Stack direction="row" spacing={5.6}>
            <label htmlFor="hip">Hip: </label>
            <input
              type="number"
              id="hip"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
            />
          </Stack>
          <Stack direction="row" spacing={2.4}>
            <label htmlFor="weight">Weight: </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Stack>
          <Stack direction="row" spacing={2.8}>
            <label htmlFor="height">Height: </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Stack>
          </Stack>
        </Typography>
      </Stack>
      <Stack direction="row" spacing={5} alignItems="center" mt="37px"
    justifyContent="center" p="20px">
        <Box>
        <Button className="search-btn"
            sx={{
              bgcolor: "#E08B28",
              color: "#000000",
              textTransform: "none",
              width: { lg: "175px", xs: "80px"},
              fontSize: { lg: "20px", xs: "14px"},
              height: "56px",
            }}
            onClick={calculateBodyFatPercentage}
          >
              Calculate BFP
          </Button>
          <TextField 
            sx={{
              input: {
                  fontWeight: "700",
                  border: "none",
                  borderRadius: "4px"},
                  width: { lg: "200px", xs: "85px"},
                  backgroundColor: "#fff",
                  justifyItems:"center"
              }}
              height="76px"
              type=""
              id="bodyFatPercentage"
              value={bodyFatPercentage}
              readOnly
          />
          </Box>
          <Box>
        <Button className="search-btn"
            sx={{
              bgcolor: "#E08B28",
              color: "#000000",
              textTransform: "none",
              width: { lg: "175px", xs: "80px"},
              fontSize: { lg: "20px", xs: "14px"},
              height: "56px",
            }}
            onClick={calculateBMI}
          >
              Calculate BMI
          </Button>
          <TextField 
            sx={{
              input: {
                  fontWeight: "700",
                  border: "none",
                  borderRadius: "4px"},
                  width: { lg: "200px", xs: "85px"},
                  backgroundColor: "#fff",
                  justifyItems:"center"
              }}
              height="76px"
              type=""
              id="BMI"
              value={BMI}
              readOnly
          />
          </Box>
          <Box>
        <Button className="search-btn"
            sx={{
              bgcolor: "#E08B28",
              color: "#000000",
              textTransform: "none",
              width: { lg: "175px", xs: "80px"},
              fontSize: { lg: "20px", xs: "14px"},
              height: "56px",
            }}
            onClick={calculateBMR}
          >
              Calculate BMR
          </Button>
          <TextField 
            sx={{
              input: {
                  fontWeight: "700",
                  border: "none",
                  borderRadius: "4px"},
                  width: { lg: "200px", xs: "85px"},
                  backgroundColor: "#fff",
                  justifyItems:"center"
              }}
              height="76px"
              type=""
              id="BMR"
              value={BMR}
              readOnly
          />
          </Box>
      </Stack>
      
      
    </Box>
  );
};

export default BodyFatCalculator;
