import { Container, Card, Typography } from '@material-ui/core'

const ContainerStyle = {
  maxWidt: '100%',
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'center'
}

const CardStyle = {
  padding: '20px 40px',
}

const ResStyle ={
  fontFamily: 'monospace',
  overflow: 'auto'
}


function Output({input, output}) {
  return (
    <Container style={ContainerStyle}>
      <Card style={CardStyle}>
        {
          input === '' ? (
            <Typography style={{ textAlign: 'center' }}>
              Digite um valor para realizar a conversão.
            </Typography>
          ) : (
            <div style={ResStyle}>
              <p>Input : {input}</p>
              <p>Output: {output}</p>
            </div>
          )
        }
      </Card>
    </Container>
  )
}

export default Output;
