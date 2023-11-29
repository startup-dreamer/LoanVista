const AssetLibrary = {
    assets: [
        {
            id: 0,
            symbol: 'KLAY',
            name: 'Klaytn',
            shortName: 'Klaytn',
            image: 'klay',
            type: 'native',
            address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            maxDecimal: 8,
            faucetAmount: '0',
            minLendOffer: 160,
            maxLendOffer: 32000,
            minBorrowOffer: 160,
            maxBorrowOffer: 16000
        },
        {
            id: 1,
            symbol: 'KSP',
            name: 'KlaySwap Protocol',
            shortName: 'KlaySwap',
            image: 'ksp',
            type: 'native',
            address: '0xBcEdBF29D6dff33fCf5CA6c1816CcA886fd6F5C4',
            maxDecimal: 18,
            faucetAmount: '10000000000000000000',
            minLendOffer: 0.008,
            maxLendOffer: 0.6,
            minBorrowOffer: 0.008,
            maxBorrowOffer: 0.3
        }, {
            id: 2,
            symbol: 'WKLAY',
            name: 'Wrapped Klay',
            shortName: 'Klay',
            image: 'wklay',
            type: 'native',
            address: '0x2b42D1149f3427044acd6B310F6721c5d87c652e',
            maxDecimal: 5,
            faucetAmount: '50000000000000000000',
            minLendOffer: 0.08,
            maxLendOffer: 10,
            minBorrowOffer: 0.08,
            maxBorrowOffer: 5
        }, {
            id: 3,
            symbol: 'oUSDT',
            name: 'Orbit Bridge Klaytn USD Tether',
            shortName: 'USDT',
            image: 'ousdt',
            type: 'stable',
            address: '0x114Eb0218066A32d072bDe9F1C396D0F0C5F5180',
            maxDecimal: 6,
            faucetAmount: '40000000000000000000000',
            minLendOffer: 80,
            maxLendOffer: 20000,
            minBorrowOffer: 80,
            maxBorrowOffer: 10000
        }, {
            id: 4,
            symbol: 'oUSDC',
            name: 'Orbit Bridge Klaytn USD Coin',
            shortName: 'USDC',
            image: 'ousdc',
            type: 'stable',
            address: '0x81733e12b6C9c5F4Dd6459F3766dFDB2DC1f89f8',
            maxDecimal: 2,
            faucetAmount: '40000000000000000000000',
            minLendOffer: 80,
            maxLendOffer: 20000,
            minBorrowOffer: 80,
            maxBorrowOffer: 10000
        }, {
            id: 5,
            symbol: 'KDAI',
            name: 'KDAI',
            shortName: 'DAI',
            image: 'dai',
            type: 'stable',
            address: '0xBE6FdBafBD486733601cA35300Cc1dbb763d6edB',
            maxDecimal: 18,
            faucetAmount: '40000000000000000000000',
            minLendOffer: 80,
            maxLendOffer: 20000,
            minBorrowOffer: 80,
            maxBorrowOffer: 10000
        },
    ],
    findAsset: function(address) {
        return this.assets.find(asset => asset.address.toLowerCase() == address.toLowerCase())
    },
    otherAssets: function(address) {
        return this.assets.filter(asset => asset.address.toLowerCase() != address.toLowerCase())
    },
    findConjugates: function(type, except = null) {
        return this.assets.filter(asset => asset.type != type && asset.address != except)
    }
}

export default AssetLibrary