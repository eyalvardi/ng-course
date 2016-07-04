import {
    SEED_DATA,
    InMemoryBackendService,
    InMemoryBackendConfig,
    InMemoryBackendConfigArgs,
    InMemoryDbService,
} from "angular2-in-memory-web-api/index";
import {XHRBackend, HTTP_PROVIDERS} from "@angular/http";

export class InMemoryDataService {
    createDb() {
        let users=  [
                {
                    gender: "female",
                    name: {
                        title: "mrs",
                        first: "giulia",
                        last: "gonzalez"
                    },
                    location: {
                        street: "4320 rue paul bert",
                        city: "boulogne-billancourt",
                        state: "sarthe",
                        postcode: 71159
                    },
                    email: "giulia.gonzalez@example.com",
                    login: {
                        username: "bluebird160",
                        password: "broncos",
                        salt: "HIguW8qt",
                        md5: "7c408e6eeb1fc0b68abafdf6bf2aa3e4",
                        sha1: "69e73e57e4f8d4bf052ea1f82235df7cbc2206a6",
                        sha256: "e2eea1648f1880e92bdc8fd3df7e25fe4b559a8af802e07693d87b7d4de6ba9a"
                    },
                    registered: 1425279601,
                    dob: 908295053,
                    phone: "01-69-67-03-22",
                    cell: "06-59-90-99-78",
                    id: {
                        name: "INSEE",
                        value: "298987145876 63"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/women/20.jpg",
                        medium: "https://randomuser.me/api/portraits/med/women/20.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg"
                    },
                    nat: "FR"
                },
                {
                    gender: "female",
                    name: {
                        title: "mrs",
                        first: "kathryn",
                        last: "hoffman"
                    },
                    location: {
                        street: "1007 wycliff ave",
                        city: "dallas",
                        state: "washington",
                        postcode: 92869
                    },
                    email: "kathryn.hoffman@example.com",
                    login: {
                        username: "organicleopard763",
                        password: "orchid",
                        salt: "vzDLg99I",
                        md5: "427511998c942ea917e9d5d3ec1831bb",
                        sha1: "3157449db437599ff5c09d00342081e958978d94",
                        sha256: "ea1a2980bd1e716a529b827c65469cb28db08a2d4bbc014c8266dadf0e025482"
                    },
                    registered: 1375735434,
                    dob: 1281310770,
                    phone: "(180)-395-6462",
                    cell: "(164)-649-2777",
                    id: {
                        name: "SSN",
                        value: "746-29-1939"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/women/59.jpg",
                        medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg"
                    },
                    nat: "US"
                },
                {
                    gender: "male",
                    name: {
                        title: "mr",
                        first: "malthe",
                        last: "jørgensen"
                    },
                    location: {
                        street: "2145 nørrevej",
                        city: "ishoej",
                        state: "danmark",
                        postcode: 21877
                    },
                    email: "malthe.jørgensen@example.com",
                    login: {
                        username: "ticklishlion324",
                        password: "pistons",
                        salt: "bSAl6Uz0",
                        md5: "c7ac9d7028d712de812347e23f156dd7",
                        sha1: "4516a521d057699e538ae906a72aaa674bfb593e",
                        sha256: "c71d5c9d0df16dc2f11de4ac86554ccdb49d247989ebe7c8dc4981ccba658033"
                    },
                    registered: 928806014,
                    dob: 902503055,
                    phone: "55105018",
                    cell: "20940239",
                    id: {
                        name: "CPR",
                        value: "520404-9223"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/64.jpg",
                        medium: "https://randomuser.me/api/portraits/med/men/64.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/men/64.jpg"
                    },
                    nat: "DK"
                },
                {
                    gender: "male",
                    name: {
                        title: "mr",
                        first: "gordon",
                        last: "grant"
                    },
                    location: {
                        street: "7702 marsh ln",
                        city: "australian capital territory",
                        state: "western australia",
                        postcode: 2976
                    },
                    email: "gordon.grant@example.com",
                    login: {
                        username: "whitekoala746",
                        password: "butler",
                        salt: "goS8qj0l",
                        md5: "d698dc813ec1666e3d87ee1e64aae007",
                        sha1: "4306798269b1f0f6e3683966fa44a25ffc26f524",
                        sha256: "9e6d12f08252ffe2d6a67ffce256e365f3703fe75ce89f421457241710975000"
                    },
                    registered: 982448463,
                    dob: 698728240,
                    phone: "01-8816-1798",
                    cell: "0407-580-190",
                    id: {
                        name: "TFN",
                        value: "094053731"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/74.jpg",
                        medium: "https://randomuser.me/api/portraits/med/men/74.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/men/74.jpg"
                    },
                    nat: "AU"
                },
                {
                    gender: "male",
                    name: {
                        title: "monsieur",
                        first: "gaspard",
                        last: "guillot"
                    },
                    location: {
                        street: "8621 rue de l'abbé-grégoire",
                        city: "lonay",
                        state: "vaud",
                        postcode: 7960
                    },
                    email: "gaspard.guillot@example.com",
                    login: {
                        username: "silvergorilla963",
                        password: "iiiiii",
                        salt: "NsQeLTW3",
                        md5: "226d958c3ceb525e488a4ca9b42b6ffb",
                        sha1: "c13fcf5fa3e4f0f55ab8a383f6952dd63d1df96b",
                        sha256: "3425672638f67a6a546e31356e003b2145738922a4e44243cdbf78c12eb1de31"
                    },
                    registered: 1385915698,
                    dob: 745183111,
                    phone: "(497)-306-1380",
                    cell: "(480)-143-7588",
                    id: {
                        name: "AVS",
                        value: "756.XXLJ.LWDV.61"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/34.jpg",
                        medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg"
                    },
                    nat: "CH"
                },
                {
                    gender: "male",
                    name: {
                        title: "mr",
                        first: "jóni",
                        last: "ribeiro"
                    },
                    location: {
                        street: "7755 rua santa luzia ",
                        city: "são carlos",
                        state: "são paulo",
                        postcode: 14531
                    },
                    email: "jóni.ribeiro@example.com",
                    login: {
                        username: "crazyduck319",
                        password: "sarah1",
                        salt: "z93g3rae",
                        md5: "95b46bc8d3568c886a89fe1830184f1d",
                        sha1: "b0df30308d07f4f1d1aa0badd39678ff00c6eab5",
                        sha256: "04668f19dc344dbd886a67756af735c720002c0b6a881ce3fc15888fbb2ab76c"
                    },
                    registered: 1404595337,
                    dob: 1339662760,
                    phone: "(19) 4549-4948",
                    cell: "(60) 9658-1488",
                    id: {
                        name: "",
                        value: null
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/1.jpg",
                        medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg"
                    },
                    nat: "BR"
                },
                {
                    gender: "male",
                    name: {
                        title: "mr",
                        first: "محمدطاها",
                        last: "قاسمی"
                    },
                    location: {
                        street: "2853 دکتر چمران",
                        city: "بروجرد",
                        state: "البرز",
                        postcode: 26209
                    },
                    email: "محمدطاها.قاسمی@example.com",
                    login: {
                        username: "brownladybug483",
                        password: "seadoo",
                        salt: "ZVZH9G3c",
                        md5: "b9069e75c11e8e07969ad6c70ca989ad",
                        sha1: "f5c85bfed2533880e27f05d5bb5444e71a4017fe",
                        sha256: "0625f1b2baee5fc27682f63289df31d1ad3b409b0f8475dfa423eb51a05c5457"
                    },
                    registered: 999678525,
                    dob: 499002867,
                    phone: "002-53849351",
                    cell: "0968-534-3205",
                    id: {
                        name: "",
                        value: null
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/81.jpg",
                        medium: "https://randomuser.me/api/portraits/med/men/81.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/men/81.jpg"
                    },
                    nat: "IR"
                },
                {
                    gender: "female",
                    name: {
                        title: "mademoiselle",
                        first: "sophia",
                        last: "legrand"
                    },
                    location: {
                        street: "2965 rue chazière",
                        city: "grancy",
                        state: "basel-stadt",
                        postcode: 1557
                    },
                    email: "sophia.legrand@example.com",
                    login: {
                        username: "smallfish167",
                        password: "harry1",
                        salt: "LqmtXGw4",
                        md5: "4c799da7aa6f6171cbe5890170b40ac9",
                        sha1: "65a8225f3122b725769d4c6db9ef0bbc7ad0b6b2",
                        sha256: "c0a0eff1b42452a8e9301fa2545d93834d6d40bc4c966207720d5b205c7dbaa4"
                    },
                    registered: 1166330720,
                    dob: 1125655757,
                    phone: "(270)-634-9827",
                    cell: "(873)-723-7923",
                    id: {
                        name: "AVS",
                        value: "756.RVQI.NNYV.54"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/women/39.jpg",
                        medium: "https://randomuser.me/api/portraits/med/women/39.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/women/39.jpg"
                    },
                    nat: "CH"
                },
                {
                    gender: "male",
                    name: {
                        title: "mr",
                        first: "jordan",
                        last: "anderson"
                    },
                    location: {
                        street: "9681 the grove",
                        city: "manchester",
                        state: "staffordshire",
                        postcode: "I7H 2RL"
                    },
                    email: "jordan.anderson@example.com",
                    login: {
                        username: "yellowduck110",
                        password: "september",
                        salt: "CoMdVKdO",
                        md5: "674a925bff06f23cf3e79eab53fa0b34",
                        sha1: "b235880e09f325258c933740f33b59853f11bd4d",
                        sha256: "7567318754e5a0d9c421e7620e00f8ef45a49d1e0fb229c00d37af3c18056af0"
                    },
                    registered: 1003594274,
                    dob: 1432804927,
                    phone: "0101 671 4962",
                    cell: "0711-497-887",
                    id: {
                        name: "NINO",
                        value: "NT 32 32 02 Z"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/95.jpg",
                        medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg"
                    },
                    nat: "GB"
                },
                {
                    gender: "male",
                    name: {
                        title: "mr",
                        first: "eino",
                        last: "joki"
                    },
                    location: {
                        street: "2669 hermiankatu",
                        city: "nastola",
                        state: "kymenlaakso",
                        postcode: 76381
                    },
                    email: "eino.joki@example.com",
                    login: {
                        username: "bluepanda799",
                        password: "shaolin",
                        salt: "4HEJ1KQ0",
                        md5: "7f3e7ddc48e47b82aeda9705eca5196a",
                        sha1: "b8d72315c1da2a5647697dc04b4097081335c680",
                        sha256: "02fd0a727f4eb4da9500ca62d70faf830d8909c4750a137a32f1e5da13d91043"
                    },
                    registered: 1117931186,
                    dob: 1107616210,
                    phone: "07-227-873",
                    cell: "041-411-99-51",
                    id: {
                        name: "HETU",
                        value: "76396821-R"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/men/34.jpg",
                        medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg"
                    },
                    nat: "FI"
                }
            ];
        return {users:users};
    }
}

export const HTTP_IN_MEMORY = [
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService },
    { provide: InMemoryBackendConfig, useValue: { delay: 600 } }
];

export class InMemoryDataService {
    createDb() {
        return { users:[ // users resource
            {...}, // user object
            {...}, // user object
            ...    // users objects
        ]};
    }
}