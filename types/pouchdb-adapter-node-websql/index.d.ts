// Type definitions for pouchdb-adapter-node-websql v6.1.2
// Project: https://pouchdb.com/
// Definitions by: Simon Paulger <https://github.com/spaulg>, Brian Geppert <https://github.com/geppy>, Frederico Galvão <https://github.com/fredgalvao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-adapter-websql" />

declare module 'pouchdb-adapter-node-websql' {
    const plugin: PouchDB.Plugin;
    export = plugin;
}
