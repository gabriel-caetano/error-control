import { useState } from 'react';
import { Container } from '@material-ui/core';
import Input from './components/Input';
import Output from './components/Output';
import hamming from './utils/hamming';
const AppStyle = {
  backgroundColor: '#CCC',
  maxWidth: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

function App() {
  const [encodedData, setEncodedData] = useState({ input: '', output: '' });

  const updateData = async (data) => {
    const newData = await hamming(data);
    setEncodedData(newData);
  };
  return (
    <Container style={AppStyle}>
      <Input submit={updateData} />
      <Output input={encodedData.input} output={encodedData.output} />
    </Container>
  );
}

export default App;
