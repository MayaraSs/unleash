import Controller from './controller';
import { IUnleashConfig } from '../types/option';
declare class BackstageController extends Controller {
    logger: any;
    constructor(config: IUnleashConfig);
}
export { BackstageController };
