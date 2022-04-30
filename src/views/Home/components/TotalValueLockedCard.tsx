import React, { useCallback, useState, useEffect } from 'react'
import sum from 'lodash/sum'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, ArrowForwardIcon, Text, Flex, Button, Link, Skeleton } from 'toolkit/uikit'
import { useTranslation } from 'contexts/Localization'
import { useTotalTvl } from 'state/onestaking/hooks'
import { Farm } from 'state/types'
import { useAppDispatch } from 'state'
import { useFarms, usePollFarmsData, usePriceCakeBusd, usePriceLeosBusd } from 'state/farms/hooks'
import { fetchFarmsPublicDataAsync, nonArchivedFarms } from 'state/farms'

import useIntersectionObserver from 'hooks/useIntersectionObserver'
// import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import Balance from '../../../components/Balance'

const StyledTotalValueLockedCard = styled(Card)`
  // background-image: url(/images/TVL.png);
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 100%;
  min-height: 376px;
  ${({ theme }) => theme.mediaQueries.sm} {
    background-size: 45%;
  }
  position: relative;
  ${({ theme }) => theme.mediaQueries.md} {
    background-size: 50%;
  }
`

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Title = styled(Text)`
  font-size: 28px;
  line-height: 1.1;
  font-weight: 600;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 40px;
  }
`

const TotalBalance = styled(Balance)`
  font-size: 36px;
  line-height: 1.1;
  font-weight: 600;
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 50px;
  }
`

const PredictionTryNow = styled(Flex)`
  align-items: center;
  max-width: 120px;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: none;
  }
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  usePollFarmsData(true)
  const cakePrice = usePriceCakeBusd()
  const leosPrice = usePriceLeosBusd()
  const { data: farmsLP } = useFarms()
  const [isFetchingFarmData, setIsFetchingFarmData] = useState(true)
  const { totalTVL } = useTotalTvl()
  const dispatch = useAppDispatch()
  const { observerRef, isIntersecting } = useIntersectionObserver()

  // useEffect(() => {
  //   const fetchFarmData = async () => {
  //     try {
  //       await dispatch(fetchFarmsPublicDataAsync(nonArchivedFarms.map((nonArchivedFarm) => nonArchivedFarm.pid)))
  //     } finally {
  //       setIsFetchingFarmData(false)
  //     }
  //   }

  //   if (isIntersecting) {
  //     fetchFarmData()
  //   }
  // }, [dispatch, setIsFetchingFarmData, isIntersecting])

  const farmsList = useCallback(
    (farmsToDisplay: Farm[]): number => {
      const farmsToTotalLiquidity: number[] = farmsToDisplay.map((farm) => {
        if (!farm.lpTotalInQuoteToken || !farm.quoteToken.busdPrice) {
          return 0
        }
        if (farm.pid === 0 || farm.pid === 1) {
          return farm.pid === 1
            ? Number(new BigNumber(farm.lpTotalInQuoteToken).times(leosPrice))
            : farm.pid === 0
            ? Number(new BigNumber(farm.lpTotalInQuoteToken).times(cakePrice))
            : Number(new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)) || 0
        }
        return Number(new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice))
      })
      farmsToTotalLiquidity.push((Number(leosPrice) * totalTVL) / 10 ** 8 || 0)
      return sum(farmsToTotalLiquidity)
    },
    [cakePrice, leosPrice, totalTVL],
  )

  const totalLiquidity = farmsList(farmsLP)

  return (
    <StyledTotalValueLockedCard>
      <StyledCardBody>
        <div>
          <Title mb="24px">{t('Total Value Locked (TVL)')}</Title>
          {totalLiquidity && isFetchingFarmData ? (
            <TotalBalance mb="24px" color="primary" bold prefix="$" decimals={2} value={totalLiquidity} />
          ) : (
            <>
              <Skeleton animation="pulse" variant="rect" height="44px" />
              <div ref={observerRef} />
            </>
          )}

          <Text color="textSubtle" mb="24px">
            {t('Across all LPs and Syrup Pools')}
          </Text>
        </div>
        <NavLink exact activeClassName="active" to="/farms" id="pool-cta">
          <Button px={['14px', null, null, null, '20px']}>
            <PredictionTryNow>
              <Text color="white" bold fontSize="16px">
                {t('Stake Now')}
              </Text>
              <ArrowForwardIcon color="white" />
            </PredictionTryNow>
          </Button>
        </NavLink>
      </StyledCardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
