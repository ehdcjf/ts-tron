import { protocol } from "../../../protos/core/Tron";
import type { ByteSource } from "google-protobuf";
import { DecodeUtil } from "../utils/DecodeUtil";
import { StringUtil } from "../utils/StringUtil";

// implements Serializable
class Account {
        private static readonly serialVersionUID = 2674206490063656846n;

        private static readonly ACCOUNT_TYPE_NORMAL = "NORMAL";
        private static readonly ACCOUNT_TYPE_ASSETISSUE = "ASSETISSUE";
        private static readonly ACCOUNT_TYPE_CONTRACT = "CONTRACT";

        private _accountName: string;
        private _accountType: string;
        private _address: Uint8Array;
        private _balance: string;

        constructor() {
                this._accountName = "";
                this._accountType = "";
                this._address = new Uint8Array();
                this._balance = "0";
        }

        get address(): Uint8Array {
                return this._address;
        }

        set address(address: Uint8Array) {
                if (!DecodeUtil.addressValid(address)) {
                        throw new Error(`The address(${StringUtil.createReadableString(address)}) must be 21 bytes.`);
                }
                this._address = address;
        }

        get balance(): BigInt {
                return BigInt(this._balance.substring(0, 10));
        }

        set balance(balance: string) {
                try {
                        this._balance = BigInt(balance).toString();
                } catch (err) {
                        throw new Error(`Balance(${balance}) must be a number.`);
                }
        }

        getAccountName(): ByteSource {
                if (!this._accountName) {
                        return "";
                }
                return Uint8Array.from(Buffer.from(this._accountName));
        }

        setAccountName(accountName: string) {
                if (!accountName) {
                        throw new Error("Account name must not be empty.");
                }
                this._accountName = accountName;
        }

        getAccountType(): protocol.AccountType {
                return this.getAccountTypeByString(this._accountType);
        }

        setAccountType(accountType: string) {
                if (!this.isAccountType(accountType)) {
                        throw new Error("Account type error: Not a Normal/AssetIssue/Contract");
                }
                this._accountType = accountType;
        }

        private isAccountType(accountType: string): boolean {
                if (!accountType) {
                        return false;
                }

                switch (accountType.toUpperCase()) {
                        case Account.ACCOUNT_TYPE_NORMAL:
                        case Account.ACCOUNT_TYPE_ASSETISSUE:
                        case Account.ACCOUNT_TYPE_CONTRACT:
                                return true;
                        default:
                                return false;
                }
        }

        private getAccountTypeByString(accountType: string): protocol.AccountType {
                if (!accountType) {
                        throw new Error("Account type error: Not a Normal/AssetIssue/Contract");
                }

                switch (accountType.toUpperCase()) {
                        case Account.ACCOUNT_TYPE_NORMAL:
                                return protocol.AccountType.Normal;
                        case Account.ACCOUNT_TYPE_ASSETISSUE:
                                return protocol.AccountType.AssetIssue;
                        case Account.ACCOUNT_TYPE_CONTRACT:
                                return protocol.AccountType.Contract;
                        default:
                                throw new Error("Account type error: Not a Normal/AssetIssue/Contract");
                }
        }
}

export { Account };
