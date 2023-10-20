export class StringHelper{
    public static getCharsAfterFirstChar(inputString: string, charToFind: string): string {
        let index: number = inputString.indexOf(charToFind);
        if (index !== -1) {
            return inputString.substring(index + 1);
        }
        return '';
    }

    public static getCharsBeforeFirstChar(inputString: string, charToFind: string): string {
        let parts: string[] = inputString.split(charToFind);
        return parts[0];
    }
}