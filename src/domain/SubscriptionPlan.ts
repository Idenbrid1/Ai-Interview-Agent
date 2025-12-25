import { Product, ProductCategory } from "./Product";
import { ProductCode } from "./ProductCode";
import { Money } from "./Money";

/**
 * SubscriptionPlan Entity
 * Represents subscription plans with features and limits
 */
export class SubscriptionPlan extends Product {
  constructor(
    id: string,
    code: ProductCode,
    name: string,
    description: string,
    public readonly monthlyPrice: Money,
    public readonly annualPrice: Money,
    public readonly features: SubscriptionFeatures,
    public readonly trialDays: number = 7,
    isActive: boolean = true,
    createdAt: Date = new Date()
  ) {
    super(
      id,
      code,
      name,
      description,
      monthlyPrice,
      ProductCategory.SUBSCRIPTION,
      isActive,
      createdAt
    );

    if (trialDays < 0) {
      throw new Error("Trial days cannot be negative");
    }
  }

  getAnnualDiscount(): number {
    const annualMonthlyEquivalent = this.monthlyPrice.multiply(12);
    return (
      (annualMonthlyEquivalent.amount - this.annualPrice.amount) /
      annualMonthlyEquivalent.amount
    );
  }

  hasFeature(feature: string): boolean {
    return this.features.hasFeature(feature);
  }

  canUseInterviewSessions(requestedSessions: number): boolean {
    return (
      this.features.interviewSessions === -1 ||
      requestedSessions <= this.features.interviewSessions
    );
  }

  canUseStorage(requestedStorage: number): boolean {
    return requestedStorage <= this.features.storageLimit;
  }

  // Factory methods for standard plans
  static createLightPlan(): SubscriptionPlan {
    return new SubscriptionPlan(
      "light-plan",
      ProductCode.forSubscriptionPlan("LIGHT"),
      "Light Plan",
      "Basic interview practice with essential features",
      Money.JPY(2980),
      Money.JPY(30372), // 15% discount
      new SubscriptionFeatures(5, 100, false, false, false),
      7
    );
  }

  static createMiddlePlan(): SubscriptionPlan {
    return new SubscriptionPlan(
      "middle-plan",
      ProductCode.forSubscriptionPlan("MIDDLE"),
      "Middle Plan",
      "Enhanced interview practice with AI coaching",
      Money.JPY(4980),
      Money.JPY(50772), // 15% discount
      new SubscriptionFeatures(15, 500, true, true, false),
      7
    );
  }

  static createPremiumPlan(): SubscriptionPlan {
    return new SubscriptionPlan(
      "premium-plan",
      ProductCode.forSubscriptionPlan("PREMIUM"),
      "Premium Plan",
      "Unlimited interviews with personalized recommendations",
      Money.JPY(7980),
      Money.JPY(81372), // 15% discount
      new SubscriptionFeatures(-1, 1000, true, true, true),
      7
    );
  }
}

export class SubscriptionFeatures {
  constructor(
    public readonly interviewSessions: number, // -1 for unlimited
    public readonly storageLimit: number, // in MB
    public readonly premiumContent: boolean,
    public readonly aiCoaching: boolean,
    public readonly personalizedRecommendations: boolean
  ) {}

  hasFeature(feature: string): boolean {
    switch (feature) {
      case "premium_content":
        return this.premiumContent;
      case "ai_coaching":
        return this.aiCoaching;
      case "personalized_recommendations":
        return this.personalizedRecommendations;
      default:
        return false;
    }
  }
}
