import { parseEther } from "ethers";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy, diamond, read, execute } = deployments;
    const { deployer, deployer2 } = await getNamedAccounts();

    await diamond.deploy("A", {
        from: deployer,
        owner: deployer,
        facets: ["A1", "A2", "A3"],
        log: true,
    });
    await execute("A", { from: deployer }, "up");
    await execute("A", { from: deployer }, "up");
    await execute("A", { from: deployer }, "up");
    console.log(await read("A", "get"));
    await execute("A", { from: deployer }, "down");
    console.log(await read("A", "get"));
};

deploy.tags = ["A"];
export default deploy;
