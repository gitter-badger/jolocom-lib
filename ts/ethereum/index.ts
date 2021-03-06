import EthereumResolver from 'jolocom-registry-contract'
import {
  IEthereumResolverConfig,
  IEthereumConnector,
  IEthereumResolverUpdateDIDArgs
} from './types'

export class EthResolver implements IEthereumConnector {
  private ethResolver: any

  constructor(config: IEthereumResolverConfig) {
    this.ethResolver = new EthereumResolver(config.contractAddress, config.providerUrl)
  }

  public async resolveDID(did: string): Promise<string> {
    return this.ethResolver.resolveDID(did)
  }

  public async updateDIDRecord({ ethereumKey, did, newHash }: IEthereumResolverUpdateDIDArgs): Promise<void> {
    return this.ethResolver.updateDIDRecord(ethereumKey, did, newHash)
  }
}
