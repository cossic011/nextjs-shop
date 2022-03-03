import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

function CheckoutWizard({ activeStep = 0 }) {
  return (
    <Stepper
      style={{ marginTop: "20px" }}
      color="secondary"
      activeStep={activeStep}
      alternativeLabel
    >
      {["Login", "Shipping Address", "Payment Method", "Place Order"].map(
        (step) => (
          <Step
            key={step}
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: "secondary.dark", // circle color (COMPLETED)
              },
              "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                {
                  color: "grey.500", // Just text label (COMPLETED)
                },
              "& .MuiStepLabel-root .Mui-active": {
                color: "secondary.main", // circle color (ACTIVE)
              },
              "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                {
                  color: "grey.500", // Just text label (ACTIVE)
                },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "white", // circle's number (ACTIVE)
              },
            }}
          >
            <StepLabel color="secondary">{step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}

export default CheckoutWizard;
