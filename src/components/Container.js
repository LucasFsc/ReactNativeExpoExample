import { View } from 'react-native'
import styled from 'styled-components'
import {
  background,
  border,
  compose,
  color,
  flexbox,
  layout,
  space
} from 'styled-system'

export default styled(View)(
  compose(background, border, color, flexbox, layout, space)
)
