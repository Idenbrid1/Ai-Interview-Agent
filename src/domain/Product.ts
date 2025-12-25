import { ProductCode } from "./ProductCode";
import { Money } from "./Money";

/**
 * Product Entity
 * Represents a product in the catalog
 */
export class Product {
  constructor(
    public readonly id: string,
    public readonly code: ProductCode,
    public readonly name: string,
    public readonly description: string,
    public readonly price: Money,
    public readonly category: ProductCategory,
    public readonly isActive: boolean = true,
    public readonly createdAt: Date = new Date()
  ) {
    if (!id || id.trim().length === 0) {
      throw new Error("Product ID cannot be empty");
    }
    if (!name || name.trim().length === 0) {
      throw new Error("Product name cannot be empty");
    }
    if (!description || description.trim().length === 0) {
      throw new Error("Product description cannot be empty");
    }
  }

  activate(): Product {
    return new Product(
      this.id,
      this.code,
      this.name,
      this.description,
      this.price,
      this.category,
      true,
      this.createdAt
    );
  }

  deactivate(): Product {
    return new Product(
      this.id,
      this.code,
      this.name,
      this.description,
      this.price,
      this.category,
      false,
      this.createdAt
    );
  }

  updatePrice(newPrice: Money): Product {
    return new Product(
      this.id,
      this.code,
      this.name,
      this.description,
      newPrice,
      this.category,
      this.isActive,
      this.createdAt
    );
  }

  equals(other: Product): boolean {
    return this.id === other.id;
  }
}

export enum ProductCategory {
  SUBSCRIPTION = "SUBSCRIPTION",
  ASSESSMENT = "ASSESSMENT",
  DOCUMENT_TEMPLATE = "DOCUMENT_TEMPLATE",
  INTERVIEW_PACKAGE = "INTERVIEW_PACKAGE",
}
