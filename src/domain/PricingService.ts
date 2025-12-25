import { Money } from "./Money";
import { SubscriptionPlan } from "./SubscriptionPlan";
import { Product } from "./Product";

/**
 * PricingService Domain Service
 * Handles complex pricing calculations and business rules
 */
export class PricingService {
  private static readonly ANNUAL_DISCOUNT_RATE = 0.15; // 15% discount
  private static readonly TRIAL_DAYS = 7;

  calculateAnnualPrice(monthlyPrice: Money): Money {
    const annualPrice = monthlyPrice.multiply(12);
    const discount = annualPrice.multiply(PricingService.ANNUAL_DISCOUNT_RATE);
    return new Money(
      annualPrice.amount - discount.amount,
      annualPrice.currency
    );
  }

  calculateProrationAmount(
    currentPlan: SubscriptionPlan,
    newPlan: SubscriptionPlan,
    daysRemaining: number
  ): Money {
    const dailyCurrentRate = currentPlan.monthlyPrice.amount / 30;
    const dailyNewRate = newPlan.monthlyPrice.amount / 30;
    const dailyDifference = dailyNewRate - dailyCurrentRate;

    return new Money(
      Math.max(0, dailyDifference * daysRemaining),
      currentPlan.monthlyPrice.currency
    );
  }

  calculateTrialEndDate(startDate: Date = new Date()): Date {
    const trialEnd = new Date(startDate);
    trialEnd.setDate(trialEnd.getDate() + PricingService.TRIAL_DAYS);
    return trialEnd;
  }

  applyPromotionalDiscount(
    originalPrice: Money,
    discountPercentage: number
  ): Money {
    if (discountPercentage < 0 || discountPercentage > 1) {
      throw new Error("Discount percentage must be between 0 and 1");
    }

    const discountAmount = originalPrice.multiply(discountPercentage);
    return new Money(
      originalPrice.amount - discountAmount.amount,
      originalPrice.currency
    );
  }

  calculateUpgradePrice(
    currentPlan: SubscriptionPlan,
    targetPlan: SubscriptionPlan,
    billingCycle: BillingCycle
  ): Money {
    const currentPrice =
      billingCycle === BillingCycle.MONTHLY
        ? currentPlan.monthlyPrice
        : currentPlan.annualPrice;

    const targetPrice =
      billingCycle === BillingCycle.MONTHLY
        ? targetPlan.monthlyPrice
        : targetPlan.annualPrice;

    if (targetPrice.amount <= currentPrice.amount) {
      throw new Error("Target plan must be more expensive than current plan");
    }

    return new Money(
      targetPrice.amount - currentPrice.amount,
      targetPrice.currency
    );
  }

  isEligibleForTrial(userRegistrationDate: Date): boolean {
    const now = new Date();
    const daysSinceRegistration = Math.floor(
      (now.getTime() - userRegistrationDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Users are eligible for trial within 30 days of registration
    return daysSinceRegistration <= 30;
  }

  calculateTotalPrice(products: Product[]): Money {
    if (products.length === 0) {
      return Money.JPY(0);
    }

    const currency = products[0].price.currency;
    const total = products.reduce((sum, product) => {
      if (product.price.currency !== currency) {
        throw new Error("All products must have the same currency");
      }
      return sum + product.price.amount;
    }, 0);

    return new Money(total, currency);
  }

  getRecommendedPlan(
    monthlyBudget: Money,
    requiredFeatures: string[]
  ): SubscriptionPlan | null {
    const plans = [
      SubscriptionPlan.createLightPlan(),
      SubscriptionPlan.createMiddlePlan(),
      SubscriptionPlan.createPremiumPlan(),
    ];

    // Filter plans within budget
    const affordablePlans = plans.filter(
      (plan) => plan.monthlyPrice.amount <= monthlyBudget.amount
    );

    if (affordablePlans.length === 0) {
      return null;
    }

    // Find plans that have all required features
    const compatiblePlans = affordablePlans.filter((plan) =>
      requiredFeatures.every((feature) => plan.hasFeature(feature))
    );

    if (compatiblePlans.length === 0) {
      // Return the most expensive affordable plan if no perfect match
      return affordablePlans.reduce((best, current) =>
        current.monthlyPrice.amount > best.monthlyPrice.amount ? current : best
      );
    }

    // Return the cheapest plan that has all required features
    return compatiblePlans.reduce((best, current) =>
      current.monthlyPrice.amount < best.monthlyPrice.amount ? current : best
    );
  }
}

export enum BillingCycle {
  MONTHLY = "MONTHLY",
  ANNUAL = "ANNUAL",
}
