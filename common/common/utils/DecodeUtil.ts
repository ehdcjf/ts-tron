import { Constant } from "../../core/Constant";

export class DecodeUtil {
        //TODO:
        public static readonly ADDRESS_SIZE = 42;
        public static readonly addressPreFixByte = Constant.ADD_PRE_FIX_BYTE_MAINNET;
        public static readonly addressPreFixString = Constant.ADD_PRE_FIX_STRING_MAINNET;

        public static addressValid(address: Uint8Array): boolean {
                if (address.length == 0) {
                        console.warn("Warning: Address is empty");
                        return false;
                }

                if (address.length != DecodeUtil.ADDRESS_SIZE / 2) {
                        console.warn(
                                "Warning: Address length need " +
                                        DecodeUtil.ADDRESS_SIZE +
                                        " but " +
                                        address.length +
                                        " !!",
                        );
                        return false;
                }
                if (address[0] != DecodeUtil.addressPreFixByte) {
                        console.warn(
                                "Warning: Address need prefix with " +
                                        DecodeUtil.addressPreFixByte +
                                        " but " +
                                        address[0] +
                                        " !!",
                        );
                        return false;
                }
                return true;
        }
}
