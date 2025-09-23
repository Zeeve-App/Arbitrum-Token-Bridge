import { NativeCurrencyBase } from '../hooks/useNativeCurrency'
import { ChainWithRpcUrl } from './networks'

export type NetworkType =
  | 'Ethereum'
  | 'Rollup'
  | 'AnyTrust'
  | 'Ethereum Testnet'
  | 'Arbitrum Testnet'

export type BridgeUiConfig = {
  color: `#${string}`
  network: {
    name: string
    logo: string
    description?: string
  }
  nativeTokenData?: NativeCurrencyBase
}

type OrbitChainConfig = ChainWithRpcUrl & { bridgeUiConfig: BridgeUiConfig }

export const orbitMainnets: {
  [key: number]: OrbitChainConfig
} = {}

export const orbitTestnets: { [key in number]: OrbitChainConfig } = {
  1885: {
    chainID: 1885,
    name: 'Rayls Bullet Testnet',
    explorerUrl: 'https://testnet-rayls-explorer.zeeve.net',
    tokenBridge: {
      l1CustomGateway: '0x6579Fbac2122CfdF921C89FB1c8a8Ae3712dC821',
      l1ERC20Gateway: '0x3371b7ED1D4ED815B1d620B12f23Ea0da60982b2',
      l1GatewayRouter: '0x294DB6A914f240b1d1b3949dA8B605B4520B8A00',
      l1MultiCall: '0x73465577E9FD7Cd585E4270F23A9eBa99B92b6eD',
      l1ProxyAdmin: '0x0000000000000000000000000000000000000000',
      l1Weth: '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9',
      l1WethGateway: '0x4F3E174a3A2Ebbc773D070DAa430d6c44190BDF2',
      l2CustomGateway: '0x828C6Eb846a39890667B42367E9a826F24228Ede',
      l2ERC20Gateway: '0xaEeAcdd00bb6696F66747e707eFEb2287d401688',
      l2GatewayRouter: '0x70f04a3Fdf713FE94D82866F7C3a1a29d81fF822',
      l2Multicall: '0x26589D301858F256Ff04e60B5C520a8b4E124eE3',
      l2ProxyAdmin: '0x3C982F8d2E02cF5Bb2Eb6FAea41c8a070E051a33',
      l2Weth: '0x0E7f0Eeba0fd81fB0446105b356A6B99cFa110D9',
      l2WethGateway: '0x61dDe4596E28D973378190179615Eb4a02FA35a6'
    },
    ethBridge: {
      bridge: '0x01c5a32d594F1966333f31fcf49cFDD07F61E848',
      inbox: '0xb19efAd785683b9C23BA55F6CF0c57ceC305E345',
      outbox: '0x978C82dA8f9ec99Bc31706eC0A9332da10aa16A8',
      rollup: '0x81CB8e2520B7f7A0fCD142385689c9Bb8a958764',
      sequencerInbox: '0xeb0EA89e464C1C66946C87Aa3D30a3d2F5b1a316'
    },
    isArbitrum: true,
    isCustom: true,
    partnerChainID: 11155111,
    partnerChainIDs: [],
    retryableLifetimeSeconds: 604800,
    nitroGenesisBlock: 0,
    nitroGenesisL1Block: 0,
    depositTimeout: 900000,
    confirmPeriodBlocks: 600,
    blockTime: 0.25,
    rpcUrl: 'https://testnet-rayls-rpc-node.zeeve.net',
    slug: 'ETH',
    bridgeUiConfig: {
      color: '#49bcfc',
      network: {
        name: 'Rayls Bullet Testnet',
        logo: '/logo.svg',
        description: 'Testnet chain for Orbit deployment'
      },
      nativeTokenData: {
        name: 'Sepolia ETH',
        symbol: 'ETH',
        decimals: 18,
        logoUrl: '/logo.svg'
      }
    }
  }
}

export const orbitChains = { ...orbitMainnets, ...orbitTestnets }

export function getOrbitChains(
  {
    mainnet,
    testnet
  }: {
    mainnet: boolean
    testnet: boolean
  } = { mainnet: true, testnet: true }
): OrbitChainConfig[] {
  const mainnetChains = mainnet ? Object.values(orbitMainnets) : []
  const testnetChains = testnet ? Object.values(orbitTestnets) : []

  return [...mainnetChains, ...testnetChains]
}
