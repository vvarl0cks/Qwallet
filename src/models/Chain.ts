export type Chain = {
    chainId: string;
    name: string;
    blockExplorerUrl: string;
    rpcUrl: string;
  };
  
export const sepolia: Chain = {
    chainId: '11155111',
    name: 'Sepolia',
    blockExplorerUrl: 'https://sepolia.etherscan.io',
    rpcUrl: 'https://sepolia.infura.io/v3/a5fb683ca8414c0ab348725b7f5fcea8',
};

export const mainnet: Chain = {
    chainId: '1',
    name: 'Ethereum',
    blockExplorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://mainnet.infura.io/v3/a5fb683ca8414c0ab348725b7f5fcea8',
};

export const CHAINS_CONFIG = {
    [sepolia.chainId]: sepolia,
    [mainnet.chainId]: mainnet,
};