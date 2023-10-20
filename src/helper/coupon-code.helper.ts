import { SettingsConfig } from "../constants/settings.constant";
import { CouponCode } from "../models/coupon.model";
import LuhnAlgorithm from "./luhn-algorithm.helper";
import RandomCodeGenerator from "./random-generator.helper";
import { StringHelper } from "./string.helper";

export class CouponCodeHelper {
    public static generate() : CouponCode 
    {
        const randomCode = RandomCodeGenerator.generate(6);
        const checkDigit = LuhnAlgorithm.GetCheckDigit(randomCode);

        //Use Coupon Code Pattern
        let coupon = new CouponCode();
        coupon.code = `${SettingsConfig.couponPrefix}-${randomCode}${checkDigit}`;
        return coupon;
    }

    public static getCouponPrefix(coupon: string){
        let index: number = coupon.indexOf('-');
        if (index !== -1) 
        {
            return coupon.substring(0, index);
        }
        return coupon;
    }
   

    public static validateCoupon(coupon: string) 
    {
        let originalCheckDigit = coupon[coupon.length -1];

        let originalPrefix = StringHelper.getCharsBeforeFirstChar(coupon, SettingsConfig.prefixSeperator);
        if(originalPrefix !== SettingsConfig.couponPrefix) 
        {
            return false;
        }
        
        if(!CouponCodeHelper.isNumber(originalCheckDigit)) 
        {
            return false;
        }
        
        const randomCode = StringHelper.getCharsAfterFirstChar(coupon, SettingsConfig.prefixSeperator);
        let withoutCheckDgit: string = randomCode.slice(0, -1);
        const checkDigit = LuhnAlgorithm.GetCheckDigit(withoutCheckDgit);

        if(checkDigit !== parseInt(originalCheckDigit)) 
        {
            return false;
        }

        return true;
    }
    public static isNumber(char: string): boolean {
        return !isNaN(parseInt(char));
    }

}