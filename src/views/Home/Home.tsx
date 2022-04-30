import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'toolkit/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import LeosAudit from 'views/Home/components/LeosAudit'
import SaleAudit from 'views/Home/components/SaleAudit'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import PredictionPromotionCard from 'views/Home/components/PredictionPromotionCard'
import LotteryPromotionCard from 'views/Home/components/LotteryPromotionCard'
import LotteryBanner from 'views/Home/components/LotteryBanner'
import LeosstakingBanner from 'views/Home/components/LeosstakingBanner'
import useFetchLotteryForPromos from 'views/Home/hooks/useFetchLotteryForPromos'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;

`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <LeosstakingBanner />
      <Page>
        <Hero>
          <Heading as="h1" scale="xl" mb="24px" color="primary">
            {t('DxSwap')}
          </Heading>
          <Text color="textSubtle">{t('Next generation AMM and yield farm with deflationary token model on Binance Smart Chain.')}</Text>
        </Hero>
        {/* <div> */}
          {/* <Cards> */}
            {/* <FarmStakingCard /> */}
            {/* <TotalValueLockedCard /> */}
          {/* </Cards> */}
          {/* <Cards> */}
          {/* <CTACards> */}
            {/* <EarnAPRCard /> */}
            {/* <EarnAssetCard /> */}
            {/* <LotteryPromotionCard currentLotteryPrize={currentLotteryPrize} /> */}
          {/* </CTACards> */}
          {/* </Cards> */}
          {/* <Cards> */}
            {/* <LeosAudit /> */}
            {/* <SaleAudit /> */}
          {/* </Cards> */}
        {/* </div> */}
      </Page>
    </>
  )
}

export default Home
