import { Knex } from 'knex';
import { IUnleashConfig } from '../types/option';
export declare function createDb({ db, getLogger, }: Pick<IUnleashConfig, 'db' | 'getLogger'>): Knex;
