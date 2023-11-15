import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack, Button } from "@mui/material";

export default function Form({ todos, setTodos }) {
  const [nameInput, setNameInput] = React.useState("");

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), name: nameInput }]);
    setNameInput("");
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      style={{ display: "flex" }}
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Name"
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
        />
      </FormControl>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="secondary" onClick={addTodo}>
          Success
        </Button>
      </Stack>
    </Box>
  );
}
