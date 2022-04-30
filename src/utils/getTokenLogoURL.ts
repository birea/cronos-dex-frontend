const getTokenLogoURL = (address: string) =>
  // `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`
 `${window.location.origin}/images/tokens/${address}.png`

export default getTokenLogoURL
