import { createHash, Hash } from "node:crypto";

export class ByteArrayWrapper {
        private static readonly serialVersionUID = BigInt("-8645797230368480951");

        private _hashCode: Hash;
        constructor(private _data: Uint8Array) {
                if (_data == null) throw new Error("Data must not be null");
                const hash = createHash("sha512");
                this._hashCode = hash.update(_data);
        }

        get hashCode() {
                return this._hashCode;
        }

        get data() {
                return this._data;
        }

        public equals(other: any) {
                if (!other || !(other instanceof ByteArrayWrapper)) {
                        return false;
                }
                return this.compareTo(other) == 0;
        }

        public compareTo(other: ByteArrayWrapper) {
                return Buffer.from(this._data).compare(Buffer.from(other.data));
        }

        public toString() {
                return Array.from(this._data)
                        .map((byte) => byte.toString(16).padStart(2, "0"))
                        .join("");
        }
}
