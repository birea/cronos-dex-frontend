import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Text, Flex, Heading, Subheading, Box, Button, ArrowForwardIcon } from 'toolkit/uikit'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import { NavLink } from 'react-router-dom'
import Balance from 'components/Balance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getBalanceNumber } from 'utils/formatBalance'

const CustomFlex = styled(Flex)`
  position: relative;
  height: 256px;
  width: 100%;
  //background-image: url('/images/pools/coin-top.svg');
  //background-position: top right;
  //background-repeat: no-repeat;
`
const TopImage = styled.img`
  position: absolute;
  top: 0;
  right: 15%;
  width: 200px;

  ${({ theme }) => theme.mediaQueries.md} {
    right: 20%;
    width: 350px;
  }
`
const RightImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
    width: 250px;
  }
`
const RightMdImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 180px;
  display: block;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`
const NoWrapper = styled.span`
  white-space: nowrap;
`
const TextWrapper = styled.div`
  padding-left: 10px;
  max-width: 50%;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 100%;
  }
`

const Outer = styled(Box)<{ background?: string }>`
  background: ${({ theme, background }) => background || theme.colors.gradients.bubblegum};
`

const Inner = styled(Container)``

const PageHeader: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

const LeosstakingBanner: React.FC = () => {
  const { t } = useTranslation()
  const click = () => {
    window.open('https://www.leosstaking.com/', '_blank').focus();
  }
  return (
    <PageHeader>
      <CustomFlex justifyContent="center" flexDirection="column" px="8px">
        <TopImage src="/images/banner/top.png" />
        <RightImage src="/images/banner/right-lg.png" />
        <RightMdImage src="/images/banner/right-lg.png" />
        <TextWrapper>
          <Heading scale="xl" my="10px">
            {/* LEOS <NoWrapper>{t('ONE-CLICK')}</NoWrapper>{t(' STAKING')} */}
            DXSWAP
          </Heading>
          <Subheading scale="md" mb="10px" color="text">
            {t('Simplicity meets great returns!')}
          </Subheading>
          {/* <Button onClick={click}>
            <Text color="white" bold fontSize="16px" mr="4px">
              {t('Stake Now')}
            </Text>
            <ArrowForwardIcon color="white" />
          </Button> */}
        </TextWrapper>
      </CustomFlex>
    </PageHeader>
  )
}

export default LeosstakingBanner
