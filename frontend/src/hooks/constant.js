export const trimAddress = (addr) => {
  return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
};

//Launchpad Contract

export const contract = {
  56: {
    poolfactory: "0x2D818070A095Ab6146a66A2b9fe63043164e9b1A",
    poolmanager: "0x90CdF075023b51f9a13FF41c2262139489124c29",
    routeraddress: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    multicallAddress: "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb",
    lockAddress: "0xaB77FfcceFC151fe362c6D7BFcE4132dAb51f092",
    routername: "Pancakeswap",
    feeReceiver: "0x855618D23de37e8EaC965bb4Da9a2e5884835aF2",
    dividendTracker: "0xa461A00fC2F9F3B1c6b222bDB7E825bcC07D90bd",
  },
  default: {
    poolfactory: "0x2D818070A095Ab6146a66A2b9fe63043164e9b1A",
    poolmanager: "0x90CdF075023b51f9a13FF41c2262139489124c29",
    routeraddress: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    multicallAddress: "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb",
    lockAddress: "0xaB77FfcceFC151fe362c6D7BFcE4132dAb51f092",
    routername: "Pancakeswap",
    feeReceiver: "0x855618D23de37e8EaC965bb4Da9a2e5884835aF2",
    dividendTracker: "0xa461A00fC2F9F3B1c6b222bDB7E825bcC07D90bd",
  },
};
