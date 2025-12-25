import { Product, ProductCategory } from "./Product";
import { ProductCode } from "./ProductCode";
import { Money } from "./Money";

/**
 * AssessmentProduct Entity
 * Represents assessment tests and evaluations
 */
export class AssessmentProduct extends Product {
  constructor(
    id: string,
    code: ProductCode,
    name: string,
    description: string,
    price: Money,
    public readonly assessmentType: AssessmentType,
    public readonly duration: number, // in minutes
    public readonly questionCount: number,
    public readonly isStandardized: boolean,
    isActive: boolean = true,
    createdAt: Date = new Date()
  ) {
    super(
      id,
      code,
      name,
      description,
      price,
      ProductCategory.ASSESSMENT,
      isActive,
      createdAt
    );

    if (duration <= 0) {
      throw new Error("Duration must be positive");
    }
    if (questionCount <= 0) {
      throw new Error("Question count must be positive");
    }
  }

  getEstimatedCompletionTime(): number {
    return this.duration;
  }

  isEligibleForUser(userType: string): boolean {
    // Business rule: All assessments are available to all user types
    return true;
  }

  // Factory methods for standard assessments
  static createCareerAptitudeTest(): AssessmentProduct {
    return new AssessmentProduct(
      "career-aptitude",
      ProductCode.forAssessment("CAREER_APTITUDE"),
      "Career Aptitude Test",
      "Comprehensive assessment to identify your career strengths and preferences",
      Money.JPY(0), // Free with subscription
      AssessmentType.CAREER_APTITUDE,
      20,
      60,
      false
    );
  }

  static createSPITest(): AssessmentProduct {
    return new AssessmentProduct(
      "spi-test",
      ProductCode.forAssessment("SPI"),
      "SPI Test",
      "Standardized Japanese employment test for language and reasoning abilities",
      Money.JPY(0), // Free with subscription
      AssessmentType.SPI,
      90,
      370,
      true
    );
  }

  static create16PersonalityTest(): AssessmentProduct {
    return new AssessmentProduct(
      "16-personality",
      ProductCode.forAssessment("16_PERSONALITY"),
      "16 Personality Test",
      "Myers-Briggs Type Indicator assessment for personality insights",
      Money.JPY(0), // Free with subscription
      AssessmentType.PERSONALITY_16,
      15,
      93,
      true
    );
  }
}

export enum AssessmentType {
  CAREER_APTITUDE = "CAREER_APTITUDE",
  SPI = "SPI",
  PERSONALITY_16 = "PERSONALITY_16",
}
