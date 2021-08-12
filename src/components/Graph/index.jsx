import { VictoryLine, VictoryTheme, VictoryAxis, VictoryLabel } from 'victory'
import { Container } from '@material-ui/core'

const ContainerStyle = {
  maxWidth: '100%',
  overflow: 'auto',
}

const SvgStyle = {
  border: '1px solid black',
}

function Graph({input, points}) {
  const length = input.length ? input.length+1 : 6
  const width = length*15 + 120 
  const header = input.split('').map((char, idx) => 
    char
  )

  const tick = [1, 2, 3, 4, 5]
  for (let i = 6; i <= input.length; i++) {
    tick.push(i)
  }
  if (!tick.length) tick.push()

  return (
    <Container style={ContainerStyle}>
      <svg width={width} height={170} style={SvgStyle}>
        {header.map((char, index) => {
          return (
            <VictoryLine
            
            width={width}
            height={170}
            domain={{x: [0, length], y:[-2, 2]}}
            style={{
              data: { strokeWidth: 0 }
            }}
            data={[{x: index+0.5, y: 2}, {x: index+0.5, y: 2}]}
            labels={header.length ? `${char}` : ''}
            labelComponent={<VictoryLabel y={72} />}
            standalone={false}
            />
          )
        })}
        <VictoryAxis crossAxis
          width={width}
          height={170}
          tickValues={tick}
          style={{
            grid : {
              stroke: '#999',
            },
            axis: {
              stroke: '#999'
            },
            tickLabels: {
              fill: 'transparent'
            }
          }}
          domain={{x: [0, length], y:[-2, 2]}}
          theme={VictoryTheme.material}
          y={0}
          standalone={false}
          />
        <VictoryAxis dependentAxis crossAxis
          width={width}
          height={170}
          style={{
            axis: {
              stroke: '#999'
            },
            ticks: {
              stroke: '#999'
            },
            grid: {
              stroke: 'transparent'
            },
            tickLabels: {
              fill: 'transparent'
            }
          }}
          tickValues={[-1,0,1]}
          domain={{x: [0, length], y:[-2, 2]}}
          theme={VictoryTheme.material}
          x={0}
          standalone={false}
        />
        <VictoryLine
          standalone={false}
          width={width}
          height={170}
          domain={{x: [0, length], y:[-2, 2]}}
          style={{
            data: { stroke: "red" },
          }}
          data={ points.length ? points : [{ x: 0, y: 0 }] }
        />
      </svg>
    </Container>
  )
}

export default Graph;
