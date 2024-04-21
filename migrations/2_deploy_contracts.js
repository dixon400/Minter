const Minter = artifacts.require("Minter");

module.exports = function(deployer) {
  const initialSupply = 105000;  
  deployer.deploy(Minter, initialSupply);
};

