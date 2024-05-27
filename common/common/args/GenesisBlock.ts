import { Account } from "./Account";
import { Witness } from "./Witness";

export class GenesisBlock {
        public static readonly DEFAULT_NUMBER = "0";
        public static readonly DEFAULT_TIMESTAMP = "0";
        public static readonly DEFAULT_PARENT_HASH = "0";
        private static readonly serialVersionUID: bigint = 3559533002594201715n;

        private _assets: Account[] = [];
        private _witnesses: Witness[] = [];
        private _timestamp: string = GenesisBlock.DEFAULT_TIMESTAMP;
        private _parentHash: string = GenesisBlock.DEFAULT_PARENT_HASH;
        private _number: string = GenesisBlock.DEFAULT_NUMBER;

        constructor() {}

        // Getter methods
        get assets(): Account[] {
                return this._assets;
        }

        get witnesses(): Witness[] {
                return this._witnesses;
        }

        get timestamp(): string {
                return this._timestamp;
        }

        get parentHash(): string {
                return this._parentHash;
        }

        get number(): string {
                return this._number;
        }

        // Setter methods
        setAssets(assets: Account[]) {
                this._assets = assets ?? [];
        }

        setWitnesses(witnesses: Witness[]) {
                this._witnesses = witnesses ?? [];
        }

        setTimestamp(timestamp: string) {
                timestamp = timestamp ?? GenesisBlock.DEFAULT_TIMESTAMP;

                const parsedTimestamp = BigInt(timestamp);

                if (typeof parsedTimestamp !== "bigint") {
                        throw new Error(`Timestamp(${timestamp}) must be bigint type.`);
                }

                if (parsedTimestamp < 0n) {
                        throw new Error(`Timestamp(${timestamp}) must be a valid non-negative number.`);
                }

                this._timestamp = timestamp;
        }

        setParentHash(parentHash: string) {
                this._parentHash = parentHash ?? GenesisBlock.DEFAULT_PARENT_HASH;
        }

        setNumber(number: string) {
                this._number = GenesisBlock.DEFAULT_NUMBER;
        }

        // Static method to return default genesis block
        public static getDefault(): GenesisBlock {
                const genesisBlock = new GenesisBlock();
                genesisBlock.setAssets([]);
                genesisBlock.setWitnesses([]);
                genesisBlock.setNumber(GenesisBlock.DEFAULT_NUMBER);
                genesisBlock.setTimestamp(GenesisBlock.DEFAULT_TIMESTAMP);
                genesisBlock.setParentHash(GenesisBlock.DEFAULT_PARENT_HASH);
                return genesisBlock;
        }
}
