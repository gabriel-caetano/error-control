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

  const handleBinaryInput = (e) => {
    const nonBinary = /[^0-1]+/g;
    const binary = /[01]*/g;
    const fail = nonBinary.test(e.target.value);
    const clean = e.target.value.match(binary);
    if (!fail) submit(clean[0]);
    setData(clean[0]);
  };
  return (
    <Container style={ContainerStyle}>
      <Card style={CardStyle}>
        <CardContent>
          <Typography style={{ fontSize: 16 }} color="textPrimary">
            Código de Hamming
          </Typography>
          <FormControl style={{ margin: 0, width: "100%" }}>
            <TextField
              value={data}
              onChange={handleBinaryInput}
              style={InputStyle}
              label="Sinal de entrada"
            />
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Input;
