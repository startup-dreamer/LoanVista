// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./libraries/Errors.sol";

import "./interfaces/IPriceFeed.sol";

import "@openzeppelin/contracts/access/Ownable2Step.sol";
import "witnet-solidity-bridge/contracts/interfaces/IWitnetPriceRouter.sol";

contract PriceFeed is Ownable2Step, IPriceFeed {
    mapping(address => address) feedAddresses;
    IWitnetPriceRouter public immutable witnetPriceRouter;

    address private USD;

    event PriceFeedAdded(
        uint256 timestamp,
        address indexed token,
        address indexed priceFeed
    );

    /*
     * Network: Klaytn Baobab
     * WitnetPriceRouter: 0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0
     **/
    constructor() Ownable2Step() {
        witnetPriceRouter = IWitnetPriceRouter(0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0);

    }

    function addUSDFeed(address usd_) external onlyOwner {
        USD = usd_;
        feedAddresses[usd_] = usd_;
    }

    /// @dev function for owner to add more price feeds
    function addPriceFeed(address _tokenAddress, address _chainlinkPriceFeed)
        external
        onlyOwner
    {
        feedAddresses[_tokenAddress] = _chainlinkPriceFeed;
        emit PriceFeedAdded(
            block.timestamp,
            _tokenAddress,
            _chainlinkPriceFeed
        );
    }

    /* Returns the latest price */
    function getLatestPriceUSD(address _tokenAddress)
        public
        view
        override
        returns (uint256, uint8)
    {
        require(
            feedAddresses[_tokenAddress] != address(0),
            "ERR_TOKEN_ADDRESS"
        );

        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            feedAddresses[_tokenAddress]
        );

        (, int256 answer, , , uint80 decimal) = priceFeed.latestRoundData();
        require(answer > 0, "ERR_ZERO_ANSWER");

        return (uint256(answer), uint8(decimal));
    }

    function amountInUSD(address _tokenAddress, uint256 _amount)
        public
        view
        override
        returns (uint256)
    {
        return exchangeRate(_tokenAddress, USD, _amount);
    }

    function exchangeRate(
        address _base,
        address _quote,
        uint256 _amount
    ) public view override returns (uint256) {
        (uint256 basePrice, ) = getLatestPriceUSD(_base);
        (uint256 quotePrice, ) = getLatestPriceUSD(_quote);

        return (basePrice * _amount) / quotePrice;
    }
}
