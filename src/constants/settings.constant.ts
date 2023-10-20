export class ConfigData {
    charSet: string;
    couponPrefix: string;
    prefixSeperator: string;
    ramdomCodeLength: number;
}

export const SettingsConfig: ConfigData = {
    charSet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    couponPrefix: 'OCT',
    prefixSeperator: '-',
    ramdomCodeLength: 7,
  };