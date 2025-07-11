import { Box, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

export const ImageLink = () => {
  const colors = ["red", "yellow", "green"];
  const [selected, setSelected] = useState(null);
  const [newLight, setNewLight] = useState(null);

  const purpleBox = () => {
    return (
      <Box
        //onClick={() => setNewLight(purpleBox)}
        sx={{
          borderRadius: "50%",
          bgcolor: "secondary.main",
          width: "5rem",
          height: "5rem",
        }}
        //className={newLight == purpleBox ? "purple" : ""}
      ></Box>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100px",
          height: newLight ? "400px" : "300px",
          borderRadius: "16px",
          bgcolor: "text.primary",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          onClick={() => colors[setSelected(0)]}
          sx={{
            borderRadius: "50%",
            bgcolor: "error.main",
            width: "5rem",
            height: "5rem",
          }}
          className={selected == 0 ? "red" : ""}
        ></Box>
        <Box
          onClick={() => colors[setSelected(1)]}
          sx={{
            borderRadius: "50%",
            bgcolor: "warning.main",
            width: "5rem",
            height: "5rem",
            my: "8px",
          }}
          className={selected == 1 ? "yellow" : ""}
        ></Box>
        <Box
          onClick={() => colors[setSelected(2)]}
          sx={{
            borderRadius: "50%",
            bgcolor: "success.main",
            width: "5rem",
            height: "5rem",
            mb: "8px",
          }}
          className={selected == 2 ? "green" : ""}
        ></Box>
        {newLight}
      </Box>

      <Box sx={{ mt: "15px" }}>
        <ButtonGroup variant="contained" size="large" orientation="vertical">
          <Button
            onClick={() => {
              setSelected(0);
              setInterval(() => {
                setSelected((prev) => prev + 1);
              }, 1000 * 2);
            }}
          >
            Light
          </Button>
          <Button
            onClick={() => {
              setNewLight(purpleBox);
            }}
          >
            Purple
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
