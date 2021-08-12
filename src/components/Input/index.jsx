// import './index.css'
import { Container, TextField, Select, Card, MenuItem, InputLabel, FormControl, CardContent, Typography } from '@material-ui/core'
import { useState } from 'react'

const ContainerStyle = {
  padding: '1rem 0 0',
  display: 'flex',
  justifyContent: 'center'
}

const CardStyle = {
  width: '260px',
  padding: '0 40px 0',
  textAlign: 'center'
}

const InputStyle = {
  marginBottom: '15px',
  maxWidth: '100%',
  minWidth: '80px',
  width: '100%',
  verticalAlign: 'text-bottom'
}

function Input({submit, options}) {
  const [data, setData] = useState('')
  const [type, setType] = useState('')
 
  const handleBinaryInput = (e) => {
    const nonBinary = /[^0-1]+/g
    const binary = /[01]*/g
    const fail = nonBinary.test(e.target.value)
    const clean = e.target.value.match(binary)
    if (!fail)
      submit({data: clean[0], type})
      setData(clean[0])
  }
  return (
    <Container style={ContainerStyle}>
      <Card style={CardStyle}>
        <CardContent>
          <Typography style={{ fontSize: 16 }} color="textPrimary">
            Conversor de códigos de linha
          </Typography>
          <Typography style={{ fontSize: 14 }} color="textSecondary">
            Preencha as informações abaixo para utilizar o conversor.
          </Typography>
        
          <FormControl style={{ margin: 0, width: '100%'}}>
            <InputLabel id='oi'>Código de linha</InputLabel>
            <Select
              labelId='oi'
              id="select"
              value={type}
              style={InputStyle}
              onChange={(event) => {
                const newType = event.target.value
                setType(newType)
                if (data !== '')
                  submit({data, type: newType})
              }}
            >
              <MenuItem value="" key='a'>
                <em>None</em>
              </MenuItem>
              {
                options.map((option, idx) => (
                  <MenuItem value={option} key={idx}>{option}</MenuItem>
                ))
              }
            </Select>
            <TextField value={data} onChange={handleBinaryInput} style={InputStyle} label="Sinal de entrada" />
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Input;
