export class StringUtil {
        //TODO:
        static createReadableString(data: Uint8Array): string {
                const decoder = new TextDecoder();
                return decoder.decode(data);
        }
}
