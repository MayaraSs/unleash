import { Logger } from '../../lib/logger';
declare function noLoggerProvider(): Logger;
declare namespace noLoggerProvider {
    var setMuteError: (mute: any) => void;
}
export default noLoggerProvider;
