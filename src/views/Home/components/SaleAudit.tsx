import React from 'react'
import { NavLink } from 'react-router-dom'
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
  background-image: url(/images/SaleAudit.svg);
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

const SaleAudit = () => {
  const { t } = useTranslation()
  const click = () => {
    window.open('https://hacken.io/wp-content/uploads/2021/10/Dxswap_08102021SCAudit_Report_2.pdf', '_blank').focus();
  }
  return (
    <StyledCakeStats>
      <StyledCardBody onClick={click}>
        <Heading scale="xl">{t('SALE')}</Heading>
        <Text fontSize="14px" color="textSubtle">
          {t('Smart contract Audit')}
        </Text>
        <StyledImg src="/images/SaleAuditText.svg" alt="Audit" />
        <Link
          small
          href="https://hacken.io/wp-content/uploads/2021/10/Dxswap_08102021SCAudit_Report_2.pdf"
          target="_blank"
          mr="16px"
        >
          www.hacken.io
        </Link>
      </StyledCardBody>
    </StyledCakeStats>
  )
}

export default SaleAudit
