import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    min-width: 280px;
    max-width: 100%;
    width: 100%;
    margin: 0px;
    margin-bottom: 16px;
    ${({ theme }) => theme.mediaQueries.md} {
      margin: 0 5px 16px;
      max-width: 31.5%;
    }
  }
`

export default FlexLayout
