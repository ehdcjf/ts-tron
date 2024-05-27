// import { ByteString } from "some-protobuf-library"; // ByteString 타입을 제공하는 라이브러리를 사용하십시오.
// import { GenesisBlock } from "./GenesisBlock"; // GenesisBlock 클래스를 적절한 경로로 가져오십시오.

import type { ByteSource } from "google-protobuf";
import type { BlockHandle } from "./BlockHandle";
import { GenesisBlock } from "../../common/common/args/GenesisBlock";
class Param {
        private static instance: Param;

        private _enable: boolean = false;
        private _needSyncCheck: boolean = false;
        private _minParticipationRate = 0;
        private _blockProduceTimeoutPercent = 0;
        private _genesisBlock = GenesisBlock.getDefault();
        private _miners: Param.Miner[] = [];
        private _blockHandle?: BlockHandle;
        private _agreeNodeCount = 0;
        private _pbftInterface?: any; // PbftInterface 타입을 적절히 정의하십시오.

        private constructor() {}

        public static getInstance(): Param {
                if (!Param.instance) {
                        Param.instance = new Param();
                }
                return Param.instance;
        }

        get enable(): boolean {
                return this._enable!;
        }

        set enable(value: boolean) {
                this._enable = value;
        }

        get needSyncCheck(): boolean {
                return this._needSyncCheck;
        }

        set needSyncCheck(value: boolean) {
                this._needSyncCheck = value;
        }

        get minParticipationRate() {
                return this._minParticipationRate;
        }

        set minParticipationRate(value: number) {
                this._minParticipationRate = value;
        }

        get blockProduceTimeoutPercent(): number {
                return this._blockProduceTimeoutPercent;
        }

        set blockProduceTimeoutPercent(value: number) {
                this._blockProduceTimeoutPercent = value;
        }

        get genesisBlock(): GenesisBlock {
                return this._genesisBlock;
        }

        set genesisBlock(value: GenesisBlock) {
                this._genesisBlock = value;
        }

        get miners(): Param.Miner[] {
                return this._miners;
        }

        set miners(value: Param.Miner[]) {
                this._miners = value;
        }

        get blockHandle(): any {
                return this._blockHandle;
        }

        set blockHandle(value: any) {
                this._blockHandle = value;
        }

        get agreeNodeCount(): number {
                return this._agreeNodeCount;
        }

        set agreeNodeCount(value: number) {
                this._agreeNodeCount = value;
        }

        get pbftInterface(): any {
                return this._pbftInterface;
        }

        set pbftInterface(value: any) {
                this._pbftInterface = value;
        }

        public getMiner(): Param.Miner {
                return this._miners[0];
        }
}

namespace Param {
        export class Miner {
                constructor(
                        private _privateKey: Uint8Array,
                        private _privateKeyAddress: ByteSource,
                        private _witnessAddress: ByteSource,
                ) {}

                get privateKey(): Uint8Array {
                        return this._privateKey;
                }

                set privateKey(value: Uint8Array) {
                        this._privateKey = value;
                }

                get privateKeyAddress(): ByteSource {
                        return this._privateKeyAddress;
                }

                set privateKeyAddress(value: ByteSource) {
                        this._privateKeyAddress = value;
                }

                get witnessAddress(): ByteSource {
                        return this._witnessAddress;
                }

                set witnessAddress(value: ByteSource) {
                        this._witnessAddress = value;
                }
        }
}

export { Param };
