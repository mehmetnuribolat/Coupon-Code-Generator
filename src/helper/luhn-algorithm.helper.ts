import { SettingsConfig } from "../constants/settings.constant";


export default class LuhnAlgorithm 
{
    static GetCheckDigit(rawCode: string) {
        let sum: number = 0;
        let dataSet: string = SettingsConfig.charSet;
        
        rawCode = rawCode.trim();

        for(let i =0; i< rawCode.length; i++) 
        {
            let ch = rawCode[rawCode.length - i -1];

            if(dataSet.indexOf(ch) === -1){
                throw new Error(`${ch} is an invalid character!`);
            }

            // subtracting by 48 translates the char values '0'..'9' to the int values 0..9
            let digit = ch.charCodeAt(0) - 48;
            let weight;

            if(i % 2 ===0) 
            {
                //Double the value of every second digit => i is index of character
                weight = (2 * digit) - parseInt((digit/5).toString()) * 9;
            }
            else {
                weight = digit;
            }

            sum += weight;
        }
        sum = Math.abs(sum) + 10;
        return (10 - (sum % 10)) % 10;
    }
}