import React from 'react'
import { Card, CardBody, Heading, Link, Text } from 'toolkit/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const StyledImg = styled.img`
  margin: 10px 0;
`

const StyledCardBody = styled(CardBody)`
  background-image: url(/images/LeosAudit.svg);
  background-repeat: no-repeat;
  background-position: center right 24px;
  background-size: 100px;
  ${({ theme }) => theme.mediaQueries.sm} {
    background-size: 120px;
  }
  :hover {
    cursor: pointer;
  }
`

const LeosAudit = () => {
  const { t } = useTranslation()
  const click = () => {
    window.open('https://www.certik.org/projects/dxswap', '_blank').focus();
  }
  return (
    <StyledCakeStats>
      <StyledCardBody onClick={click}>
        <Heading scale="xl">{t('LEOS')}</Heading>
        <Text fontSize="14px" color="textSubtle">
          {t('Smart contract Audit')}
        </Text>
        <StyledImg src="/images/LeosAuditText.svg" alt="Audit" />
        <Link small href="https://www.certik.org/projects/dxswap" target='_blank' mr="16px">
          www.certik.org
        </Link>
      </StyledCardBody>
    </StyledCakeStats>
  )
}

export default LeosAudit
