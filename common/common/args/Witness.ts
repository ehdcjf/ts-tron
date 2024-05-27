import type { ByteSource } from "google-protobuf";
import { DecodeUtil } from "../utils/DecodeUtil";
import { StringUtil } from "../utils/StringUtil";

export class Witness {
        private static readonly serialVersionUID = BigInt(`-7446501098542377380`);
        private _address: Uint8Array = Uint8Array.from([]);
        private _url: string = "";
        private _voteCount = BigInt(0);

        get address(): Uint8Array {
                return this._address;
        }

        setAddress(address: Uint8Array) {
                if (!DecodeUtil.addressValid(address)) {
                        throw new Error(`The address(${StringUtil.createReadableString(address)}) must be 21 bytes.`);
                }
                this._address = address;
        }

        get url() {
                return this._url;
        }

        setUrl(url: string) {
                if (!url) {
                        throw new Error(`The url(${url}) format error.`);
                }
                this._url = url;
        }

        get voteCount() {
                return this._voteCount;
        }

        set voteCount(value: bigint) {
                this._voteCount = value;
        }
}
