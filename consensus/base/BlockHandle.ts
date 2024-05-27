import type { State } from "./State";
import type { Param } from "./Param";
export interface BlockHandle {
        getState(): State;

        getLock(): Record<string, any>;

        produce(miner: Param.Miner, blockTime: BigInt, timeout: BigInt): BlockCapsule;

        setBlockWaitLock(flag: boolean): void;
}
