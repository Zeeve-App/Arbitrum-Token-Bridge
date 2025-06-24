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
  736: {
    chainID: 736,
    name: 'AcadChain',
    explorerUrl: 'https://explorer-testnet.acadchain.xyz',
    tokenBridge: {
      l1CustomGateway: '0xE049f00c087c1922Bc84935b0261Ac8c8907909b',
      l1ERC20Gateway: '0x27e57b34946DA9B45D9Ff5722bB0410A45868c45',
      l1GatewayRouter: '0xF131b757D21052Fa9eBc85d1Eb45920A39347EC0',
      l1MultiCall: '0xce1CAd780c529e66e3aa6D952a1ED9A6447791c1',
      l1ProxyAdmin: '0x0000000000000000000000000000000000000000',
      l1Weth: '0x0000000000000000000000000000000000000000',
      l1WethGateway: '0x0000000000000000000000000000000000000000',
      l2CustomGateway: '0x473f57f135F24868A274622df50e09E4aC09d871',
      l2ERC20Gateway: '0x1613F7b8b7cfc6b41fA04cf2A1d47aed6fBA9803',
      l2GatewayRouter: '0x48a1c8d1B2691889ce8844D8CDE2E3CFb46c51A1',
      l2Multicall: '0xc8C03E81a63b1A4Cd1D3377Cea3AFd2afA3e253A',
      l2ProxyAdmin: '0x578Cb344Bf5EF8F66954f950D7C041C8CBF669D3',
      l2Weth: '0x0000000000000000000000000000000000000000',
      l2WethGateway: '0x0000000000000000000000000000000000000000'
    },
    ethBridge: {
      bridge: '0x13Dc612ED7E0aBE6EC03e8d2D997E651579428AF',
      inbox: '0x36060895B231CbFfdEb65aa09F61E1516248508A',
      outbox: '0x365701f3FD5b4B92E6b5e6B371b1e6EA82512811',
      rollup: '0xFE56f147e52b7e69ed6135aDE897FCd7C87D709a',
      sequencerInbox: '0xdf31333fF0B7328399875D88516831510f42b378'
    },
    isArbitrum: true,
    isCustom: true,
    partnerChainID: 421614,
    partnerChainIDs: [],
    retryableLifetimeSeconds: 604800,
    nitroGenesisBlock: 0,
    nitroGenesisL1Block: 0,
    depositTimeout: 900000,

    confirmPeriodBlocks: 150,
    blockTime: 0.25,
    nativeToken: '0x700f0539753926d65Da70dB03c7ddA2bAB0DB7d7',
    rpcUrl: 'https://rpc-testnet.acadchain.xyz',
    slug: 'PropFTX',
    bridgeUiConfig: {
      color: '#D59C8C',
      network: {
        name: 'PropFTX',
        logo: '/logo.svg',
        description: 'Testnet chain for Orbit deployment'
      },
      nativeTokenData: {
        name: 'FTX',
        symbol: 'FTX',
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
