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
            address: '0xc6a2ad8cc6e4a7e08fc37cc5954be07d499e7654',
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
            address: '0x19aac5f612f524b754ca7e7c41cbfa2e981a4432',
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
            address: '0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167',
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
            address: '0x754288077d0ff82af7a5317c7cb8c444d421d103',
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
            address: '0x5c74070fdea071359b86082bd9f9b3deaafbe32b',
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