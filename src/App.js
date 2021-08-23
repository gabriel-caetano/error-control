import { useState } from 'react';
import { Container } from '@material-ui/core';
import InputHamming from './components/InputHamming';
import InputBiDimensional from './components/InputBiDimensional';
import Output from './components/Output';
import hamming from './utils/hamming';
import bidimensional from './utils/bidimensional';
const AppStyle = {
  backgroundColor: '#CCC',
  maxWidth: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

function App() {
  const [hammingEncodedData, setHammingEncodedData] = useState({ input: '', output: '' });
  const [biDimensionalEncodedData, setBiDimensionalEncodedData] = useState({ input: '', output: '' });

  const updateHamingData = async (data) => {
    const newData = await hamming(data);
    setHammingEncodedData(newData);
  };
  const updateBiDimensionalData = async (data, chunk) => {
    const newData = await bidimensional(data, chunk);
    setBiDimensionalEncodedData(newData)
  };

  return (
    <Container style={AppStyle}>
      <InputHamming submit={updateHamingData} />
      <Output input={hammingEncodedData.input} output={hammingEncodedData.output} />
      <InputBiDimensional submit={updateBiDimensionalData} />
      <Output input={biDimensionalEncodedData.input} output={biDimensionalEncodedData.output} />
    </Container>
  );
}

export default App;
