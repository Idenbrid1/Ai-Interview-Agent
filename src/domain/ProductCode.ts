/**
 * ProductCode Value Object
 * Represents unique product identifiers
 */
export class ProductCode {
  private readonly code: string;

  constructor(code: string) {
    if (!code || code.trim().length === 0) {
      throw new Error("Product code cannot be empty");
    }
    if (!/^[A-Z0-9_-]+$/.test(code)) {
      throw new Error(
        "Product code must contain only uppercase letters, numbers, underscores, and hyphens"
      );
    }
    this.code = code.trim().toUpperCase();
  }

  getValue(): string {
    return this.code;
  }

  equals(other: ProductCode): boolean {
    return this.code === other.code;
  }

  toString(): string {
    return this.code;
  }

  // Factory methods for common product types
  static forSubscriptionPlan(planName: string): ProductCode {
    return new ProductCode(`SUB_${planName.toUpperCase()}`);
  }

  static forAssessment(assessmentType: string): ProductCode {
    return new ProductCode(`ASSESS_${assessmentType.toUpperCase()}`);
  }

  static forDocumentTemplate(templateType: string): ProductCode {
    return new ProductCode(`DOC_${templateType.toUpperCase()}`);
  }
}
