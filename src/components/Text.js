import { Text } from "react-native"
import styled from "styled-components"
import { compose, flexbox, layout, typography } from "styled-system"

export default styled(Text)(compose(flexbox, layout, typography))
