import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Flex, Skeleton, Heading, Box, Text } from 'toolkit/uikit'
import { useTranslation } from 'contexts/Localization'
import { LotteryRound } from 'state/types'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useGetLotteryGraphDataById } from 'state/lottery/hooks'
import { formatNumber, getBalanceNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import RewardBrackets from '../RewardBrackets'

const NextDrawWrapper = styled(Flex)`
  background: ${({ theme }) => theme.colors.background};
  padding: 24px;
  flex-direction: column;
  background-color: #efefef;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const PreviousRoundCardFooter: React.FC<{ lotteryData: LotteryRound; lotteryId: string }> = ({
  lotteryData,
  lotteryId,
}) => {
  const { t } = useTranslation()
  const lotteryGraphData = useGetLotteryGraphDataById(lotteryId)
  const cakePriceBusd = usePriceCakeBusd()

  let prizeInBusd = new BigNumber(NaN)
  if (lotteryData) {
    const { amountCollectedInCake } = lotteryData
    prizeInBusd = amountCollectedInCake.times(cakePriceBusd)
  }

  const getPrizeBalances = () => {
    return (
      <>
        {prizeInBusd.isNaN() ? (
          <Skeleton my="7px" height={40} width={200} />
        ) : (
          <Heading scale="xl" lineHeight="1" color="primary">
            ~${formatNumber(getBalanceNumber(prizeInBusd), 0, 0)}
          </Heading>
        )}
        {prizeInBusd.isNaN() ? (
          <Skeleton my="2px" height={14} width={90} />
        ) : (
          <Balance
            fontSize="14px"
            color="textSubtle"
            unit=" SALE"
            value={getBalanceNumber(lotteryData?.amountCollectedInCake)}
            decimals={0}
          />
        )}
      </>
    )
  }

  return (
    <NextDrawWrapper>
      <Flex mr="24px" flexDirection="column" justifyContent="space-between">
        <Box>
          <Heading color="background">{t('Prize pot')}</Heading>
          {getPrizeBalances()}
        </Box>
        {/* <Box mb="24px">
          <Flex>
            <Text fontSize="14px" display="inline" color='textSubtle'>
              {t('Total players this round')}:{' '}
              {lotteryData && lotteryGraphData.totalUsers ? (
                lotteryGraphData.totalUsers.toLocaleString()
              ) : (
                <Skeleton height={14} width={31} />
              )}
            </Text>
          </Flex>
        </Box> */}
      </Flex>
      <RewardBrackets lotteryData={lotteryData} isHistoricRound />
    </NextDrawWrapper>
  )
}

export default PreviousRoundCardFooter
