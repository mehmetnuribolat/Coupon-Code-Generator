import { CouponCodeHelper } from "./helper/coupon-code.helper";

class Main {
    public async start()
    {
        try{
            const coupon = CouponCodeHelper.generate();
            console.log(`Generated Coupon => ${coupon.code}`);

            const validationResult = CouponCodeHelper.validateCoupon(coupon.code);
            console.log(`Coupon Validation for ${coupon.code} => ${validationResult}`)

            const validationResult2 = CouponCodeHelper.validateCoupon("OCT-asdB5875");
            console.log(`Coupon Validation for ${'OCT-asdB5875'} => ${validationResult2}`);

        }catch(err) {
            console.log(err);
        }

        console.log('End of execution');
    }
}

new Main().start();