const t=[{inputs:[{internalType:"address",name:"_contractRegistry",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[],name:"CrowdsaleFinalized",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"prevClosingTime",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newClosingTime",type:"uint256"}],name:"TimedCrowdsaleExtended",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"purchaser",type:"address"},{indexed:!0,internalType:"address",name:"beneficiary",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensPurchased",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"}],name:"WhitelistedAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"}],name:"WhitelistedRemoved",type:"event"},{constant:!0,inputs:[],name:"DAY_LENGTH_IN_SECONDS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"HOUR_LENGTH_IN_SECONDS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"INTEREST_RATE_SCALING_FACTOR_PERCENT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MINUTE_LENGTH_IN_SECONDS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ONE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"PURCHASE_PRICE_SCALING_FACTOR",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"RATE_SCALING_FACTOR",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"YEAR_LENGTH_IN_DAYS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"YEAR_LENGTH_IN_SECONDS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"currencyAmount",type:"uint256"}],name:"_getTokenAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"accounts",type:"address[]"}],name:"addBatchWhitelisted",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"additionalCap",type:"uint256"}],name:"addFunding",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"account",type:"address"}],name:"addWhitelisted",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"payee",type:"address"},{internalType:"address",name:"beneficiary",type:"address"},{internalType:"uint256",name:"currencyAmount",type:"uint256"}],name:"buyTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint16",name:"",type:"uint16"}],name:"cap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"capReached",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint16",name:"",type:"uint16"},{internalType:"address",name:"",type:"address"}],name:"caps",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint16",name:"",type:"uint16"}],name:"closingTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"contractRegistry",outputs:[{internalType:"contract ContractRegistry",name:"_contractRegistry",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint16",name:"",type:"uint16"},{internalType:"address",name:"",type:"address"}],name:"contributions",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"currency",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"currencyRaised",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"currencyRaisedByInvestor",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint16",name:"",type:"uint16"}],name:"currencyRaisedPerRound",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"currentRound",outputs:[{internalType:"uint16",name:"",type:"uint16"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"newClosingTime",type:"uint256"}],name:"extendTime",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bool",name:"claimRemainToken",type:"bool"},{internalType:"address",name:"remainTokenRecipient",type:"address"}],name:"finalize",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"finalized",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getContractRegistryAddress",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getCurrencyRemainAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"currencyAmount",type:"uint256"}],name:"getLongSaleTokenAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"timestamp",type:"uint256"}],name:"getLongSaleTokenPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"_interestRate",type:"uint256"},{internalType:"uint256",name:"_yield",type:"uint256"},{internalType:"uint256",name:"_durationLengthInSec",type:"uint256"},{internalType:"uint256",name:"_termLengthInSeconds",type:"uint256"}],name:"getPurchasePrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!0,inputs:[],name:"getTimeStartEarningInterest",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"currencyAmount",type:"uint256"}],name:"getTokenAmountFromDaiAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getTokenRemainAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"hasClosed",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_pool",type:"address"},{internalType:"address",name:"_wallet",type:"address"},{internalType:"address",name:"_token",type:"address"},{internalType:"address",name:"_currency",type:"address"}],name:"initialize",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_pool",type:"address"},{internalType:"address",name:"_wallet",type:"address"},{internalType:"address",name:"_token",type:"address"},{internalType:"address",name:"_currency",type:"address"},{internalType:"bool",name:"_longSale",type:"bool"}],name:"initialize",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"interestRate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isDistributedFully",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isEnableCap",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isEnableIndividualCap",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isEnableTimeLimit",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isEnableTotalCap",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isLongSale",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isMintedCrowdSale",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!0,inputs:[],name:"isOpen",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"sender",type:"address"}],name:"isOwner",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"beneficiary",type:"address"},{internalType:"uint256",name:"currencyAmount",type:"uint256"},{internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"isUnderCap",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"currencyAmount",type:"uint256"},{internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"isUnderCurrentCap",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"currencyAmount",type:"uint256"},{internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"isUnderTotalCap",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isWhiteListEnable",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"isWhitelisted",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint16",name:"round",type:"uint16"},{internalType:"address",name:"account",type:"address"}],name:"isWhitelisted",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"longSale",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"newOpeningTime",type:"uint256"},{internalType:"uint256",name:"newClosingTime",type:"uint256"}],name:"newSaleRoundTime",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint16",name:"",type:"uint16"}],name:"openingTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"_owner",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"pool",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"rate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"accounts",type:"address[]"}],name:"removeBatchWhitelisted",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"account",type:"address"}],name:"removeWhitelisted",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceWhitelisted",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"_beneficiaries",type:"address[]"},{internalType:"uint256[]",name:"_caps",type:"uint256[]"}],name:"setBatchCap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"beneficiary",type:"address"},{internalType:"uint256",name:"cap",type:"uint256"}],name:"setCap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"registry",type:"address"}],name:"setContractRegistry",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bool",name:"usingCap",type:"bool"}],name:"setUsingCap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bool",name:"usingIndividualCap",type:"bool"}],name:"setUsingIndividualCap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bool",name:"usingTimeLimit",type:"bool"}],name:"setUsingTimeLimit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bool",name:"usingCap",type:"bool"}],name:"setUsingTotalCap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bool",name:"usingWhiteList",type:"bool"}],name:"setUsingWhiteList",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"_yield",type:"uint256"}],name:"setYield",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"_interestRate",type:"uint256"},{internalType:"uint256",name:"_termLengthInSeconds",type:"uint256"},{internalType:"uint256",name:"_timeStartEarningInterest",type:"uint256"}],name:"setupLongSale",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"openingTime",type:"uint256"},{internalType:"uint256",name:"closingTime",type:"uint256"},{internalType:"uint256",name:"rate",type:"uint256"},{internalType:"uint256",name:"cap",type:"uint256"},{internalType:"address[]",name:"whitelists",type:"address[]"},{internalType:"uint256[]",name:"individualCaps",type:"uint256[]"}],name:"startNewRoundSale",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"termLengthInSeconds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"timeStartEarningInterest",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"token",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenRaised",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint16",name:"",type:"uint16"}],name:"tokenRaisedPerRound",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalCap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalCapReached",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"wallet",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"yield",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}];export{t as abi};
