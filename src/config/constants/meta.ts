import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Dx',
  description:
    'The #1 AMM and yied farm with deflationary token model on Bianace Smart Chain.',
  image: 'https://animalfactguide.com/wp-content/uploads/2013/01/lion.jpg',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    // case '/':
    //   return {
    //     title: `${t('Home')} | ${t('DxSwap')}`,
    //   }
    // case '/competition':
    //   return {
    //     title: `${t('Trading Battle')} | ${t('DxSwap')}`,
    //   }
    // case '/prediction':
    //   return {
    //     title: `${t('Prediction')} | ${t('DxSwap')}`,
    //   }
    // case '/farms':
    //   return {
    //     title: `${t('Farms')} | ${t('DxSwap')}`,
    //   }
    // case '/pools':
    //   return {
    //     title: `${t('Pools')} | ${t('DxSwap')}`,
    //   }
    // case '/lottery':
    //   return {
    //     title: `${t('Lottery')} | ${t('DxSwap')}`,
    //   }
    // case '/collectibles':
    //   return {
    //     title: `${t('Collectibles')} | ${t('DxSwap')}`,
    //   }
    // case '/ifo':
    //   return {
    //     title: `${t('Initial Farm Offering')} | ${t('DxSwap')}`,
    //   }
    // case '/teams':
    //   return {
    //     title: `${t('Leaderboard')} | ${t('DxSwap')}`,
    //   }
    // case '/profile/tasks':
    //   return {
    //     title: `${t('Task Center')} | ${t('DxSwap')}`,
    //   }
    // case '/profile':
    //   return {
    //     title: `${t('Your Profile')} | ${t('DxSwap')}`,
    //   }
    default:
      return {
        title: `${t('Dx')}`,
      }
  }
}
