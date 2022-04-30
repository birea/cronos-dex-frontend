import { MenuEntry } from 'toolkit/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/home',
  },
  // {
  //   label: t('Single Staking'),
  //   icon: 'StakingIcon',
  //   href: 'https://www.leosstaking.com',
  // },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      }
    ],
  },
  // {
  //   label: t('Farms'),
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: t('Pools'),
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: t('Prediction'),
  //   icon: 'PredictionsIcon',
  //   href: '/prediction',
  // },
  // {
  //   label: t('Lottery'),
  //   icon: 'TrophyIcon',
  //   href: '/lottery',
  //   status: {
  //     text: t('Win').toLocaleUpperCase(),
  //     color: 'success',
  //   },
  // },
  // {
  //   label: t('NFT'),
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: t('Team Battle'),
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: t('Prides & Profile'),
  //    icon: 'GroupsIcon',
  //    items: [
  //      {
  //        label: t('Leaderboard'),
  //        href: '/teams',
  //      },
  //      {
  //        label: t('Task Center'),
  //        href: '/tasks',
  //      },
   //     {
  //        label: t('Your Profile'),
  //        href: '/profile',
  //      },
  //    ],
  //  },
  // {
  //   label: t('Info'),
  //   icon: 'InfoIcon',
  //   href: '/info',
  // },
  // {
  //   label: t('IFO'),
  //   icon: 'IfoIcon',
  //   href: '/ijo',
  // },
  // {
  //   label: t('More'),
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: t('Contact'),
  //       href: '/contact',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/Dxswap',
  //     },
  //     {
  //       label: t('Docs'),
  //       href: '/docs',
  //     },
  //   ],
  // },
]

export default config
