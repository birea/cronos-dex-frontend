import React from 'react'
import { Menu as UikitMenu } from 'toolkit/uikit'
import { useWeb3React } from '@web3-react/core'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceCakeBusd, usePriceLeosBusd } from 'state/farms/hooks'
import { useProfile } from 'state/profile/hooks'
import config from './config'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const leosPriceUsd = usePriceLeosBusd()
  // const { profile } = useProfile()
  const { currentLanguage, setLanguage, t } = useTranslation()

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      leosPriceUsd={leosPriceUsd.toNumber()}
      links={config(t)}
      profile={{
        username: '',
        image: undefined,
        profileLink: '/profile',
        noProfileLink: '/home',
        showPip: 'username',
      }}
      // profile={{
      //   username: profile?.username,
      //   image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
      //   profileLink: '/profile',
      //   noProfileLink: '/home',
      //   showPip: !profile?.username,
      // }}
      {...props}
    />
  )
}

export default Menu
