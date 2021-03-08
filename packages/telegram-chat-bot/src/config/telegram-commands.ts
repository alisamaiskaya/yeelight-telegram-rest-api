import { YeelightCommands } from '@dev/types/yeelight';

const commands: Record<string, YeelightCommands> = {
    '/switch_on': YeelightCommands.SWITCH_ON,
    '/switch_off': YeelightCommands.SWITCH_OFF,
    // TODO: do it later
    // '/set_bright': YeelightCommands.SET_BRIGHT,
}

export default commands;
