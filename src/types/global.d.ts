// global.d.ts

import type { MongoClient } from 'mongodb';

declare global {
	namespace NodeJS {
		interface Global {
			_mongoClientPromise?: Promise<MongoClient>;
		}
	}

	// This line helps TypeScript recognize the global type
	let _mongoClientPromise: Promise<MongoClient> | undefined;
}

export {};
