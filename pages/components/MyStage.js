import { Stage } from '@inlet/react-pixi'
import Rectangle from './Rectangle'

export default () => (
  <Stage>
    <Rectangle x={100}
               y={100}
               width={500}
               heigth={300}
               fill={0xff0000} />
  </Stage>
)
