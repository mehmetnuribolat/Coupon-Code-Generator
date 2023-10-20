import { SettingsConfig } from '../constants/settings.constant';
export default class RandomCodeGenerator 
{

    public static generate(length: number = SettingsConfig.ramdomCodeLength): string 
    {
        let result: string = '';
        const charactersLength: number = SettingsConfig.charSet.length;

        for (let i = 0; i < length; i++) {
            const randomIndex: number = Math.floor(Math.random() * charactersLength);
            result += SettingsConfig.charSet[randomIndex];
        }

        return result;
    }
}

