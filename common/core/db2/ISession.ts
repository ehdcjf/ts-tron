export interface ISession {
        commit(): void;
        revoke(): void;
        merge(): void;
        destroy(): void;
        close(): void;
}
