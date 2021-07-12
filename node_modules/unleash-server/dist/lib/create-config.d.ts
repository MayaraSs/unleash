import { IUnleashOptions, IUnleashConfig, IAuthType } from './types/option';
export declare function authTypeFromString(s?: string, defaultType?: IAuthType): IAuthType;
export declare function createConfig(options: IUnleashOptions): IUnleashConfig;
