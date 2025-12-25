import { Product, ProductCategory } from "./Product";
import { ProductCode } from "./ProductCode";

/**
 * ProductRepository Interface
 * Defines the contract for product data persistence
 */
export interface IProductRepository {
  save(product: Product): Promise<void>;
  findById(id: string): Promise<Product | null>;
  findByCode(code: ProductCode): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  findByCategory(category: ProductCategory): Promise<Product[]>;
  findActiveProducts(): Promise<Product[]>;
  delete(id: string): Promise<void>;
  search(query: string): Promise<Product[]>;
}

/**
 * InMemoryProductRepository
 * Simple in-memory implementation for testing and development
 */
export class InMemoryProductRepository implements IProductRepository {
  private products: Map<string, Product> = new Map();

  async save(product: Product): Promise<void> {
    this.products.set(product.id, product);
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.get(id) || null;
  }

  async findByCode(code: ProductCode): Promise<Product | null> {
    for (const product of this.products.values()) {
      if (product.code.equals(code)) {
        return product;
      }
    }
    return null;
  }

  async findAll(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async findByCategory(category: ProductCategory): Promise<Product[]> {
    const allProducts = await this.findAll();
    return allProducts.filter((product) => product.category === category);
  }

  async findActiveProducts(): Promise<Product[]> {
    const allProducts = await this.findAll();
    return allProducts.filter((product) => product.isActive);
  }

  async delete(id: string): Promise<void> {
    this.products.delete(id);
  }

  async search(query: string): Promise<Product[]> {
    const allProducts = await this.findAll();
    const lowerQuery = query.toLowerCase();

    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.code.getValue().toLowerCase().includes(lowerQuery)
    );
  }

  // Utility methods for testing
  clear(): void {
    this.products.clear();
  }

  size(): number {
    return this.products.size;
  }

  // Seed with default products
  async seedWithDefaults(): Promise<void> {
    const { SubscriptionPlan } = await import("./SubscriptionPlan");
    const { AssessmentProduct } = await import("./AssessmentProduct");
    const { DocumentTemplate } = await import("./DocumentTemplate");

    // Add subscription plans
    await this.save(SubscriptionPlan.createLightPlan());
    await this.save(SubscriptionPlan.createMiddlePlan());
    await this.save(SubscriptionPlan.createPremiumPlan());

    // Add assessment products
    await this.save(AssessmentProduct.createCareerAptitudeTest());
    await this.save(AssessmentProduct.createSPITest());
    await this.save(AssessmentProduct.create16PersonalityTest());

    // Add document templates
    await this.save(DocumentTemplate.createNewGraduateResumeTemplate());
    await this.save(DocumentTemplate.createExperiencedResumeTemplate());
    await this.save(DocumentTemplate.createEntrySheetTemplate());
  }
}
