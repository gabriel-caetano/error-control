// import './index.css'
import {
  Container,
  TextField,
  Card,
  FormControl,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const ContainerStyle = {
  padding: "1rem 0 0",
  display: "flex",
  justifyContent: "center",
};

const CardStyle = {
  width: "260px",
  padding: "0 40px 0",
  textAlign: "center",
};

const InputStyle = {
  marginBottom: "15px",
  maxWidth: "100%",
  minWidth: "80px",
  width: "100%",
  verticalAlign: "text-bottom",
};

function Input({ submit }) {
  const [data, setData] = useState("");
  const [chunk, setChunk] = useState(1);

  const handleBinaryInput = (e) => {
    const nonBinary = /[^0-1]+/g;
    const binary = /[01]*/g;
    const fail = nonBinary.test(e.target.value);
    const clean = e.target.value.match(binary);
    if (!fail) submit(clean[0], chunk);
    setData(clean[0]);
  };
  return (
    <Container style={ContainerStyle}>
      <Card style={CardStyle}>
        <CardContent>
          <Typography style={{ fontSize: 16 }} color="textPrimary">
            Paridade Bi-Dimensional
          </Typography>
          <FormControl style={{ margin: 0, width: "100%" }}>
            <TextField
              value={data}
              onChange={handleBinaryInput}
              style={InputStyle}
              label="Sinal de entrada"
            />
            <TextField
              value={chunk}
              onChange={(event) => {
                const value = event.target.value;
                setChunk(value);
                submit(data, value);
              }}
              type="number"
              InputProps={{ inputProps: { min: 1, max: 16 } }}
              style={{
                ...InputStyle,
                maxWidth: "60%",
                margin: "auto",
              }}
              label="Tamanho do bloco"
            />
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Input;
