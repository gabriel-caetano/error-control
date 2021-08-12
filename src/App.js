import { useState } from 'react';
import { Container } from '@material-ui/core';
import Input from './components/Input';
import Output from './components/Output';
import converter, { convertions } from './utils/converter';
const AppStyle = {
  backgroundColor: '#CCC',
  maxWidth: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

function App() {
  const [encodedData, setEncodedData] = useState({
    originalValue: '',
    originalPoints: [],
    convertedPoints: [],
    typeName: null,
  });

  const updateData = async (data) => {
    const newData = await converter(data);
    setEncodedData(newData);
  };
  return (
    <Container style={AppStyle}>
      <Input submit={updateData} options={Object.keys(convertions)} />
      <Output data={encodedData} />
    </Container>
  );
}

export default App;
