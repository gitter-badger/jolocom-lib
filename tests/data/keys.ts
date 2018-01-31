import * as bitcoin from 'bitcoinjs-lib'
import * as bip39 from 'bip39'

export default {
  testSeedPhrase: 'resist excess act expire rib edit loud repeat silly popular mirror cotton',
  testSeed: bip39.mnemonicToSeed(this.testSeedPhrase),
  testMasterKeyPairString: '{"keyPair":{"d":{"0":4652314,"1":24622878,"2":14371277,"3":23265288,"4":18435007,"5":11471886,"6":31197291,"7":30103680,"8":42439871,"9":2108438,"10":0,"t":10,"s":0},"compressed":true,"network":{"messagePrefix":"\\u0018Bitcoin Signed Message:\\n","bech32":"bc","bip32":{"public":76067358,"private":76066276},"pubKeyHash":0,"scriptHash":5,"wif":128}},"chainCode":{"type":"Buffer","data":[84,201,16,35,26,199,126,86,84,8,166,54,90,231,145,124,209,111,221,50,100,135,111,19,69,225,189,182,63,48,187,151]},"depth":0,"index":0,"parentFingerprint":0}',
  testMasterKeyPairWIF: 'L1Xs8xNygctCDgry2UsYCPywgC1WUckEePZ9NGdZswTzhjoAooNu',
  testGenericKeyPairString: '{"keyPair":{"d":{"0":29420278,"1":48403266,"2":32085146,"3":39027795,"4":56679644,"5":37054444,"6":34166252,"7":27070958,"8":8576908,"9":4007242,"10":0,"t":10,"s":0},"compressed":true,"network":{"messagePrefix":"\\u0018Bitcoin Signed Message:\\n","bech32":"bc","bip32":{"public":76067358,"private":76066276},"pubKeyHash":0,"scriptHash":5,"wif":128}},"chainCode":{"type":"Buffer","data":[79,83,158,85,219,181,148,72,160,10,6,60,177,234,246,132,223,16,204,117,236,7,56,25,47,211,161,129,194,30,157,82]},"depth":3,"index":2147483648,"parentFingerprint":1206978215}',
  testGenericKeyPairWIF:'L5R9WkSXoQr6HshxTyPdz24rwHwjqTBTJcTM7zPEQzzbptdprJdt',
  testEthereumKeyPairString: '{"keyPair":{"d":{"0":34429630,"1":29843365,"2":50470156,"3":55799221,"4":8282470,"5":47268858,"6":58968987,"7":16414218,"8":66677574,"9":2817547,"10":0,"t":10,"s":0},"compressed":true,"network":{"messagePrefix":"\\u0018Bitcoin Signed Message:\\n","bech32":"bc","bip32":{"public":76067358,"private":76066276},"pubKeyHash":0,"scriptHash":5,"wif":128}},"chainCode":{"type":"Buffer","data":[91,187,73,205,247,91,60,73,235,223,80,179,76,148,177,39,125,183,96,24,245,65,243,229,174,144,181,82,147,164,91,23]},"depth":5,"index":0,"parentFingerprint":3464247385}',
  testEthereumKeyPairWIF:'L2yznSPTTv5yoB8mDDtzNnEtTunvsUJnRCbzzupV4tMZ4uWUPRrB'
}
