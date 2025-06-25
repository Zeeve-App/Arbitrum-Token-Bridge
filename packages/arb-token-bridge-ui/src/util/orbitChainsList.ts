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
  202500: {
    chainID: 202500,
    name: 'Propulence',
    explorerUrl: 'https://explorer.testnet.thepropulence.com',
    tokenBridge: {
      l1CustomGateway: '0xD29BFDd9A96DF24f2856D45384BC7F1Cbd01EA00',
      l1ERC20Gateway: '0x8DEB7f280f206A84c43C78a5e708f024B9282D0a',
      l1GatewayRouter: '0x0907cd7712A3935637d22e6D9E30cccf2AEf13A0',
      l1MultiCall: '0xce1CAd780c529e66e3aa6D952a1ED9A6447791c1',
      l1ProxyAdmin: '0x0000000000000000000000000000000000000000',
      l1Weth: '0x0000000000000000000000000000000000000000',
      l1WethGateway: '0x0000000000000000000000000000000000000000',
      l2CustomGateway: '0x8A5d2b733fabf32db2E700C58DA6478632C8A507',
      l2ERC20Gateway: '0x0D9074a70A570c3814C7397Ce3484ec99ee6E11C',
      l2GatewayRouter: '0x57FC0f61645Cc42E5Aabb6E2b009c35eEFD7153D',
      l2Multicall: '0x9E025C53B0A6946A88b48261131ce5C152179b72',
      l2ProxyAdmin: '0x84C7c069E811b9ECA08d60a974019163F3b32d65',
      l2Weth: '0x0000000000000000000000000000000000000000',
      l2WethGateway: '0x0000000000000000000000000000000000000000'
    },
    ethBridge: {
      bridge: '0x3f2B0E2A7f3Dc9929F1C9A981E0Cb4fAEf5165AE',
      inbox: '0x8C64E4627772Efd8cB429283588462e51DF6e8a2',
      outbox: '0x94Ea3d055C7A7713dc36E219EB327BD8225D1A7A',
      rollup: '0xDBF34bF986dFd614B8420D08d2EA21F483E8D30a',
      sequencerInbox: '0xC53b9B9a6C851E308a9465a51E12F28f0bb7DC56'
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
    nativeToken: '0x1Fe93621798C4A58e858F6829d881E87A985eE95',
    rpcUrl: 'https://rpc.testnet.thepropulence.com',
    slug: 'PROPX',
    bridgeUiConfig: {
      color: '#D59C8C',
      network: {
        name: 'Propulence',
        logo: '/logo.svg',
        description: 'Testnet chain for Orbit deployment'
      },
      nativeTokenData: {
        name: 'PROPX',
        symbol: 'PROPX',
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
