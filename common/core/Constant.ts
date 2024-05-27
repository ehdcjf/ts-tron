export class Constant {
        //config for testnet, mainnet, beta
        public static readonly TESTNET_CONF: string = "config.conf";

        //config for junit test
        public static readonly TEST_CONF: string = "config-test.conf";

        // locate in storageDbDirectory, store the db infos,
        // now only has the split block number
        public static readonly INFO_FILE_NAME: string = "info.properties";
        // the block number that split between the snapshot and history
        public static readonly SPLIT_BLOCK_NUM: string = "split_block_num";

        public static readonly ADD_PRE_FIX_BYTE_MAINNET: number = 0x41; //41 + address
        public static readonly ADD_PRE_FIX_STRING_MAINNET: string = "41";
        public static readonly ADD_PRE_FIX_BYTE_TESTNET: number = 0xa0; //a0 + address
        public static readonly ADD_PRE_FIX_STRING_TESTNET: string = "a0";

        public static readonly NODE_TYPE_FULL_NODE: number = 0;
        public static readonly NODE_TYPE_LIGHT_NODE: number = 1;

        // config for transaction
        public static readonly TRANSACTION_MAX_BYTE_SIZE = BigInt(500 * 1024);
        public static readonly MAXIMUM_TIME_UNTIL_EXPIRATION = BigInt(24 * 60 * 60 * 1000); //one day
        public static readonly TRANSACTION_DEFAULT_EXPIRATION_TIME = BigInt(60 * 1000); //60 seconds
        public static readonly TRANSACTION_FEE_POOL_PERIOD: number = 1; //1 blocks
        // config for smart contract
        public static readonly SUN_PER_ENERGY: number = 100; // 1 us = 100 SUN = 100 * 10^-6 TRX
        public static readonly ENERGY_LIMIT_IN_CONSTANT_TX = BigInt(3_000_000); // ref: 1 us = 1 energy
        public static readonly MAX_RESULT_SIZE_IN_TX: number = 64; // max 8 * 8 items in result
        public static readonly PB_DEFAULT_ENERGY_LIMIT: number = 0;
        public static readonly CREATOR_DEFAULT_ENERGY_LIMIT = BigInt(1000 * 10_000);

        // Numbers
        public static readonly ONE_HUNDRED: number = 100;
        public static readonly ONE_THOUSAND: number = 1000;

        public static readonly ZTRON_EXPANDSEED_PERSONALIZATION: Uint8Array = Uint8Array.from([
                90, 116, 114, 111, 110, 95, 69, 120, 112, 97, 110, 100, 83, 101, 101, 100,
        ]);
        public static readonly ZC_DIVERSIFIER_SIZE: number = 11;
        public static readonly ZC_OUTPUT_DESC_MAX_SIZE: number = 10;

        // Transaction Types
        public static readonly NORMALTRANSACTION: number = 0;
        public static readonly UNEXECUTEDDEFERREDTRANSACTION: number = 1;
        public static readonly EXECUTINGDEFERREDTRANSACTION: number = 2;

        // Configuration items
        public static readonly NET_TYPE = "net.type";
        public static readonly TESTNET = "testnet";
        public static readonly LOCAL_WITNESS = "localwitness";
        public static readonly LOCAL_WITNESS_ACCOUNT_ADDRESS = "localWitnessAccountAddress";
        public static readonly LOCAL_WITNESS_KEYSTORE = "localwitnesskeystore";
        public static readonly VM_SUPPORT_CONSTANT = "vm.supportConstant";
        public static readonly VM_MAX_ENERGY_LIMIT_FOR_CONSTANT = "vm.maxEnergyLimitForConstant";
        public static readonly VM_LRU_CACHE_SIZE = "vm.lruCacheSize";
        public static readonly VM_MIN_TIME_RATIO = "vm.minTimeRatio";
        public static readonly VM_MAX_TIME_RATIO = "vm.maxTimeRatio";
        public static readonly VM_LONG_RUNNING_TIME = "vm.longRunningTime";
        public static readonly VM_ESTIMATE_ENERGY = "vm.estimateEnergy";

        public static readonly VM_ESTIMATE_ENERGY_MAX_RETRY = "vm.estimateEnergyMaxRetry";

        public static readonly ROCKSDB = "ROCKSDB";

        public static readonly GENESIS_BLOCK = "genesis.block";
        public static readonly GENESIS_BLOCK_TIMESTAMP = "genesis.block.timestamp";
        public static readonly GENESIS_BLOCK_PARENTHASH = "genesis.block.parentHash";
        public static readonly GENESIS_BLOCK_ASSETS = "genesis.block.assets";
        public static readonly GENESIS_BLOCK_WITNESSES = "genesis.block.witnesses";

        public static readonly BLOCK_NEED_SYNC_CHECK = "block.needSyncCheck";
        public static readonly NODE_DISCOVERY_ENABLE = "node.discovery.enable";
        public static readonly NODE_DISCOVERY_PERSIST = "node.discovery.persist";
        public static readonly NODE_EFFECTIVE_CHECK_ENABLE = "node.effectiveCheckEnable";
        public static readonly NODE_CONNECTION_TIMEOUT = "node.connection.timeout";
        public static readonly NODE_FETCH_BLOCK_TIMEOUT = "node.fetchBlock.timeout";
        public static readonly NODE_CHANNEL_READ_TIMEOUT = "node.channel.read.timeout";
        public static readonly NODE_MAX_CONNECTIONS = "node.maxConnections";
        public static readonly NODE_MIN_CONNECTIONS = "node.minConnections";
        public static readonly NODE_MIN_ACTIVE_CONNECTIONS = "node.minActiveConnections";
        public static readonly NODE_SYNC_FETCH_BATCH_NUM = "node.syncFetchBatchNum";

        public static readonly NODE_MAX_ACTIVE_NODES = "node.maxActiveNodes";
        public static readonly NODE_MAX_ACTIVE_NODES_WITH_SAME_IP = "node.maxActiveNodesWithSameIp";
        public static readonly NODE_MAX_TPS = "node.maxTps";
        public static readonly NODE_CONNECT_FACTOR = "node.connectFactor";
        public static readonly NODE_ACTIVE_CONNECT_FACTOR = "node.activeConnectFactor";

        public static readonly NODE_MAX_CONNECTIONS_WITH_SAME_IP = "node.maxConnectionsWithSameIp";
        public static readonly NODE_MIN_PARTICIPATION_RATE = "node.minParticipationRate";
        public static readonly NODE_LISTEN_PORT = "node.listen.port";
        public static readonly NODE_P2P_VERSION = "node.p2p.version";
        public static readonly NODE_ENABLE_IPV6 = "node.enableIpv6";
        public static readonly NODE_DNS_TREE_URLS = "node.dns.treeUrls";
        public static readonly NODE_DNS_PUBLISH = "node.dns.publish";
        public static readonly NODE_DNS_DOMAIN = "node.dns.dnsDomain";
        public static readonly NODE_DNS_CHANGE_THRESHOLD = "node.dns.changeThreshold";
        public static readonly NODE_DNS_MAX_MERGE_SIZE = "node.dns.maxMergeSize";
        public static readonly NODE_DNS_PRIVATE = "node.dns.dnsPrivate";
        public static readonly NODE_DNS_KNOWN_URLS = "node.dns.knownUrls";
        public static readonly NODE_DNS_STATIC_NODES = "node.dns.staticNodes";
        public static readonly NODE_DNS_SERVER_TYPE = "node.dns.serverType";
        public static readonly NODE_DNS_ACCESS_KEY_ID = "node.dns.accessKeyId";
        public static readonly NODE_DNS_ACCESS_KEY_SECRET = "node.dns.accessKeySecret";
        public static readonly NODE_DNS_ALIYUN_ENDPOINT = "node.dns.aliyunDnsEndpoint";
        public static readonly NODE_DNS_AWS_REGION = "node.dns.awsRegion";
        public static readonly NODE_DNS_AWS_HOST_ZONE_ID = "node.dns.awsHostZoneId";

        public static readonly NODE_RPC_PORT = "node.rpc.port";
        public static readonly NODE_RPC_SOLIDITY_PORT = "node.rpc.solidityPort";
        public static readonly NODE_RPC_PBFT_PORT = "node.rpc.PBFTPort";
        public static readonly NODE_HTTP_FULLNODE_PORT = "node.http.fullNodePort";
        public static readonly NODE_HTTP_SOLIDITY_PORT = "node.http.solidityPort";
        public static readonly NODE_HTTP_FULLNODE_ENABLE = "node.http.fullNodeEnable";
        public static readonly NODE_HTTP_SOLIDITY_ENABLE = "node.http.solidityEnable";
        public static readonly NODE_HTTP_PBFT_PORT = "node.http.PBFTPort";

        public static readonly NODE_JSONRPC_HTTP_FULLNODE_ENABLE = "node.jsonrpc.httpFullNodeEnable";
        public static readonly NODE_JSONRPC_HTTP_FULLNODE_PORT = "node.jsonrpc.httpFullNodePort";
        public static readonly NODE_JSONRPC_HTTP_SOLIDITY_ENABLE = "node.jsonrpc.httpSolidityEnable";
        public static readonly NODE_JSONRPC_HTTP_SOLIDITY_PORT = "node.jsonrpc.httpSolidityPort";
        public static readonly NODE_JSONRPC_HTTP_PBFT_ENABLE = "node.jsonrpc.httpPBFTEnable";
        public static readonly NODE_JSONRPC_HTTP_PBFT_PORT = "node.jsonrpc.httpPBFTPort";

        public static readonly NODE_DISABLED_API_LIST = "node.disabledApi";

        public static readonly NODE_RPC_THREAD = "node.rpc.thread";
        public static readonly NODE_SOLIDITY_THREADS = "node.solidity.threads";

        public static readonly NODE_RPC_MAX_CONCURRENT_CALLS_PER_CONNECTION =
                "node.rpc.maxConcurrentCallsPerConnection";
        public static readonly NODE_RPC_FLOW_CONTROL_WINDOW = "node.rpc.flowControlWindow";
        public static readonly NODE_RPC_MAX_CONNECTION_IDLE_IN_MILLIS = "node.rpc.maxConnectionIdleInMillis";
        public static readonly NODE_PRODUCED_TIMEOUT = "node.blockProducedTimeOut";
        public static readonly NODE_MAX_HTTP_CONNECT_NUMBER = "node.maxHttpConnectNumber";

        public static readonly NODE_NET_MAX_TRX_PER_SECOND = "node.netMaxTrxPerSecond";
        public static readonly NODE_RPC_MAX_CONNECTION_AGE_IN_MILLIS = "node.rpc.maxConnectionAgeInMillis";
        public static readonly NODE_RPC_MAX_MESSAGE_SIZE = "node.rpc.maxMessageSize";

        public static readonly NODE_RPC_MAX_HEADER_LIST_SIZE = "node.rpc.maxHeaderListSize";

        public static readonly NODE_RPC_REFLECTION_SERVICE = "node.rpc.reflectionService";

        public static readonly NODE_OPEN_HISTORY_QUERY_WHEN_LITEFN = "node.openHistoryQueryWhenLiteFN";

        public static readonly BLOCK_MAINTENANCE_TIME_INTERVAL = "block.maintenanceTimeInterval";
        public static readonly BLOCK_PROPOSAL_EXPIRE_TIME = "block.proposalExpireTime";

        public static readonly BLOCK_CHECK_FROZEN_TIME = "block.checkFrozenTime";

        public static readonly COMMITTEE_ALLOW_CREATION_OF_CONTRACTS = "committee.allowCreationOfContracts";

        public static readonly COMMITTEE_ALLOW_MULTI_SIGN = "committee.allowMultiSign";

        public static readonly COMMITTEE_ALLOW_ADAPTIVE_ENERGY = "committee.allowAdaptiveEnergy";

        public static readonly COMMITTEE_ALLOW_DELEGATE_RESOURCE = "committee.allowDelegateResource";

        public static readonly COMMITTEE_ALLOW_SAME_TOKEN_NAME = "committee.allowSameTokenName";

        public static readonly COMMITTEE_ALLOW_TVM_TRANSFER_TRC10 = "committee.allowTvmTransferTrc10";

        public static readonly COMMITTEE_ALLOW_TVM_CONSTANTINOPLE = "committee.allowTvmConstantinople";

        public static readonly COMMITTEE_ALLOW_TVM_SOLIDITY059 = "committee.allowTvmSolidity059";

        public static readonly COMMITTEE_FORBID_TRANSFER_TO_CONTRACT = "committee.forbidTransferToContract";

        public static readonly NODE_TCP_NETTY_WORK_THREAD_NUM = "node.tcpNettyWorkThreadNum";

        public static readonly NODE_UDP_NETTY_WORK_THREAD_NUM = "node.udpNettyWorkThreadNum";

        public static readonly NODE_TRUST_NODE = "node.trustNode";

        public static readonly NODE_VALIDATE_SIGN_THREAD_NUM = "node.validateSignThreadNum";

        public static readonly NODE_WALLET_EXTENSION_API = "node.walletExtensionApi";

        public static readonly NODE_RECEIVE_TCP_MIN_DATA_LENGTH = "node.receiveTcpMinDataLength";

        public static readonly NODE_IS_OPEN_FULL_TCP_DISCONNECT = "node.isOpenFullTcpDisconnect";

        public static readonly NODE_DETECT_ENABLE = "node.nodeDetectEnable";

        public static readonly NODE_MAX_TRANSACTION_PENDING_SIZE = "node.maxTransactionPendingSize";

        public static readonly NODE_PENDING_TRANSACTION_TIMEOUT = "node.pendingTransactionTimeout";

        public static readonly STORAGE_NEEDTO_UPDATE_ASSET = "storage.needToUpdateAsset";

        public static readonly TRX_REFERENCE_BLOCK = "trx.reference.block";

        public static readonly TRX_EXPIRATION_TIME_IN_MILLIS_SECONDS = "trx.expiration.timeInMilliseconds";

        public static readonly NODE_RPC_MIN_EFFECTIVE_CONNECTION = "node.rpc.minEffectiveConnection";

        public static readonly NODE_RPC_TRX_CACHE_ENABLE = "node.rpc.trxCacheEnable";

        public static readonly ENERGY_LIMIT_BLOCK_NUM = "enery.limit.block.num";

        public static readonly VM_TRACE = "vm.vmTrace";

        public static readonly VM_SAVE_INTERNAL_TX = "vm.saveInternalTx";

        public static readonly VM_SAVE_FEATURED_INTERNAL_TX = "vm.saveFeaturedInternalTx";

        // public static readonly COMMITTEE_ALLOW_SHIELDED_TRANSACTION = "committee.allowShieldedTransaction";

        public static readonly COMMITTEE_ALLOW_SHIELDED_TRC20_TRANSACTION =
                "committee" + ".allowShieldedTRC20Transaction";

        public static readonly COMMITTEE_ALLOW_TVM_ISTANBUL = "committee" + ".allowTvmIstanbul";

        public static readonly COMMITTEE_ALLOW_MARKET_TRANSACTION = "committee.allowMarketTransaction";

        public static readonly EVENT_SUBSCRIBE = "event.subscribe";

        public static readonly EVENT_SUBSCRIBE_FILTER = "event.subscribe.filter";

        public static readonly NODE_FULLNODE_ALLOW_SHIELDED_TRANSACTION = "node" + ".fullNodeAllowShieldedTransaction";

        public static readonly NODE_ZEN_TOKENID = "node.zenTokenId";

        public static readonly COMMITTEE_ALLOW_PROTO_FILTER_NUM = "committee.allowProtoFilterNum";

        public static readonly COMMITTEE_ALLOW_ACCOUNT_STATE_ROOT = "committee.allowAccountStateRoot";

        public static readonly NODE_VALID_CONTRACT_PROTO_THREADS = "node.validContractProto.threads";

        public static readonly NODE_ACTIVE = "node.active";

        public static readonly NODE_PASSIVE = "node.passive";

        public static readonly NODE_FAST_FORWARD = "node.fastForward";

        public static readonly NODE_MAX_FAST_FORWARD_NUM = "node.maxFastForwardNum";

        public static readonly NODE_SHIELDED_TRANS_IN_PENDING_MAX_COUNTS = "node.shieldedTransInPendingMaxCounts";

        public static readonly RATE_LIMITER = "rate.limiter";

        public static readonly RATE_LIMITER_GLOBAL_QPS = "rate.limiter.global.qps";

        public static readonly RATE_LIMITER_GLOBAL_IP_QPS = "rate.limiter.global.ip.qps";

        public static readonly RATE_LIMITER_GLOBAL_API_QPS = "rate.limiter.global.api.qps";

        public static readonly COMMITTEE_CHANGED_DELEGATION = "committee.changedDelegation";

        public static readonly CRYPTO_ENGINE = "crypto.engine";

        public static readonly ECKey_ENGINE = "ECKey";

        public static readonly USE_NATIVE_QUEUE = "event.subscribe.native.useNativeQueue";

        public static readonly NATIVE_QUEUE_BIND_PORT = "event.subscribe.native.bindport";

        public static readonly NATIVE_QUEUE_SEND_LENGTH = "event.subscribe.native.sendqueuelength";

        public static readonly EVENT_SUBSCRIBE_PATH = "event.subscribe.path";
        public static readonly EVENT_SUBSCRIBE_SERVER = "event.subscribe.server";
        public static readonly EVENT_SUBSCRIBE_DB_CONFIG = "event.subscribe.dbconfig";
        public static readonly EVENT_SUBSCRIBE_TOPICS = "event.subscribe.topics";
        public static readonly EVENT_SUBSCRIBE_FROM_BLOCK = "event.subscribe.filter.fromblock";
        public static readonly EVENT_SUBSCRIBE_TO_BLOCK = "event.subscribe.filter.toblock";
        public static readonly EVENT_SUBSCRIBE_CONTRACT_ADDRESS = "event.subscribe.filter.contractAddress";
        public static readonly EVENT_SUBSCRIBE_CONTRACT_TOPIC = "event.subscribe.filter.contractTopic";

        public static readonly NODE_DISCOVERY_EXTERNAL_IP = "node.discovery.external.ip";

        public static readonly NODE_BACKUP_PRIORITY = "node.backup.priority";
        public static readonly NODE_BACKUP_PORT = "node.backup.port";
        public static readonly NODE_BACKUP_KEEPALIVEINTERVAL = "node.backup.keepAliveInterval";
        public static readonly NODE_BACKUP_MEMBERS = "node.backup.members";

        public static readonly STORAGE_BACKUP_ENABLE = "storage.backup.enable";
        public static readonly STORAGE_BACKUP_PROP_PATH = "storage.backup.propPath";
        public static readonly STORAGE_BACKUP_BAK1PATH = "storage.backup.bak1path";
        public static readonly STORAGE_BACKUP_BAK2PATH = "storage.backup.bak2path";
        public static readonly STORAGE_BACKUP_FREQUENCY = "storage.backup.frequency";
        public static readonly STORAGE_DB_SETTING = "storage.dbSettings.";

        public static readonly ACTUATOR_WHITELIST = "actuator.whitelist";

        public static readonly RATE_LIMITER_HTTP = "rate.limiter.http";
        public static readonly RATE_LIMITER_RPC = "rate.limiter.rpc";

        public static readonly SEED_NODE_IP_LIST = "seed.node.ip.list";
        public static readonly NODE_METRICS_ENABLE = "node.metricsEnable";
        public static readonly COMMITTEE_ALLOW_PBFT = "committee.allowPBFT";
        public static readonly COMMITTEE_PBFT_EXPIRE_NUM = "committee.pBFTExpireNum";
        public static readonly NODE_AGREE_NODE_COUNT = "node.agreeNodeCount";

        public static readonly COMMITTEE_ALLOW_TRANSACTION_FEE_POOL = "committee.allowTransactionFeePool";
        public static readonly COMMITTEE_ALLOW_BLACK_HOLE_OPTIMIZATION = "committee.allowBlackHoleOptimization";
        public static readonly COMMITTEE_ALLOW_NEW_RESOURCE_MODEL = "committee.allowNewResourceModel";
        public static readonly COMMITTEE_ALLOW_RECEIPTS_MERKLE_ROOT = "committee.allowReceiptsMerkleRoot";

        public static readonly COMMITTEE_ALLOW_TVM_FREEZE = "committee.allowTvmFreeze";
        public static readonly COMMITTEE_ALLOW_TVM_VOTE = "committee.allowTvmVote";
        public static readonly COMMITTEE_UNFREEZE_DELAY_DAYS = "committee.unfreezeDelayDays";

        public static readonly COMMITTEE_ALLOW_TVM_LONDON = "committee.allowTvmLondon";
        public static readonly COMMITTEE_ALLOW_TVM_COMPATIBLE_EVM = "committee.allowTvmCompatibleEvm";
        public static readonly COMMITTEE_ALLOW_HIGHER_LIMIT_FOR_MAX_CPU_TIME_OF_ONE_TX =
                "committee.allowHigherLimitForMaxCpuTimeOfOneTx";
        public static readonly COMMITTEE_ALLOW_NEW_REWARD_ALGORITHM = "committee.allowNewRewardAlgorithm";
        public static readonly COMMITTEE_ALLOW_OPTIMIZED_RETURN_VALUE_OF_CHAIN_ID =
                "committee.allowOptimizedReturnValueOfChainId";

        public static readonly METRICS_STORAGE_ENABLE = "node.metrics.storageEnable";
        public static readonly METRICS_INFLUXDB_IP = "node.metrics.influxdb.ip";
        public static readonly METRICS_INFLUXDB_PORT = "node.metrics.influxdb.port";
        public static readonly METRICS_INFLUXDB_DATABASE = "node.metrics.influxdb.database";
        public static readonly METRICS_REPORT_INTERVAL = "node.metrics.influxdb.metricsReportInterval";
        public static readonly METRICS_PROMETHEUS_ENABLE = "node.metrics.prometheus.enable";
        public static readonly METRICS_PROMETHEUS_PORT = "node.metrics.prometheus.port";

        public static readonly HISTORY_BALANCE_LOOKUP = "storage.balance.history.lookup";
        public static readonly OPEN_PRINT_LOG = "node.openPrintLog";
        public static readonly OPEN_TRANSACTION_SORT = "node.openTransactionSort";

        public static readonly ALLOW_ACCOUNT_ASSET_OPTIMIZATION = "committee.allowAccountAssetOptimization";
        public static readonly ALLOW_ASSET_OPTIMIZATION = "committee.allowAssetOptimization";
        public static readonly ALLOW_NEW_REWARD = "committee.allowNewReward";
        public static readonly MEMO_FEE = "committee.memoFee";
        public static readonly ALLOW_DELEGATE_OPTIMIZATION = "committee.allowDelegateOptimization";

        public static readonly ALLOW_DYNAMIC_ENERGY = "committee.allowDynamicEnergy";

        public static readonly DYNAMIC_ENERGY_THRESHOLD = "committee.dynamicEnergyThreshold";

        public static readonly DYNAMIC_ENERGY_INCREASE_FACTOR = "committee.dynamicEnergyIncreaseFactor";

        public static readonly DYNAMIC_ENERGY_MAX_FACTOR = "committee.dynamicEnergyMaxFactor";

        public static readonly DYNAMIC_ENERGY_FACTOR_DECIMAL = BigInt(10_000);

        public static readonly DYNAMIC_ENERGY_INCREASE_FACTOR_RANGE = BigInt(10_000);

        public static readonly DYNAMIC_ENERGY_MAX_FACTOR_RANGE = BigInt(100_000);

        public static readonly DYNAMIC_ENERGY_DECREASE_DIVISION = 4;

        public static readonly LOCAL_HOST = "127.0.0.1";

        public static readonly NODE_SHUTDOWN_BLOCK_TIME = "node.shutdown.BlockTime";
        public static readonly NODE_SHUTDOWN_BLOCK_HEIGHT = "node.shutdown.BlockHeight";
        public static readonly NODE_SHUTDOWN_BLOCK_COUNT = "node.shutdown.BlockCount";

        public static readonly BLOCK_CACHE_TIMEOUT = "node.blockCacheTimeout";

        public static readonly DYNAMIC_CONFIG_ENABLE = "node.dynamicConfig.enable";
        public static readonly DYNAMIC_CONFIG_CHECK_INTERVAL = "node.dynamicConfig.checkInterval";

        public static readonly COMMITTEE_ALLOW_TVM_SHANGHAI = "committee.allowTvmShangHai";

        public static readonly UNSOLIDIFIED_BLOCK_CHECK = "node.unsolidifiedBlockCheck";

        public static readonly MAX_UNSOLIDIFIED_BLOCKS = "node.maxUnsolidifiedBlocks";
        public static readonly COMMITTEE_ALLOW_OLD_REWARD_OPT = "committee.allowOldRewardOpt";
}
