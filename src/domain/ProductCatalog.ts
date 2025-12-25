import { Product, ProductCategory } from "./Product";
import { SubscriptionPlan } from "./SubscriptionPlan";
import { AssessmentProduct } from "./AssessmentProduct";
import { DocumentTemplate } from "./DocumentTemplate";
import { ProductCode } from "./ProductCode";

/**
 * ProductCatalog Aggregate Root
 * Manages the collection of products and their relationships
 */
export class ProductCatalog {
  private products: Map<string, Product> = new Map();

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly isActive: boolean = true,
    public readonly createdAt: Date = new Date()
  ) {
    if (!id || id.trim().length === 0) {
      throw new Error("Catalog ID cannot be empty");
    }
    if (!name || name.trim().length === 0) {
      throw new Error("Catalog name cannot be empty");
    }
  }

  addProduct(product: Product): void {
    if (this.products.has(product.id)) {
      throw new Error(`Product with ID ${product.id} already exists`);
    }
    this.products.set(product.id, product);
  }

  removeProduct(productId: string): void {
    if (!this.products.has(productId)) {
      throw new Error(`Product with ID ${productId} not found`);
    }
    this.products.delete(productId);
  }

  getProduct(productId: string): Product | undefined {
    return this.products.get(productId);
  }

  getAllProducts(): Product[] {
    return Array.from(this.products.values());
  }

  getActiveProducts(): Product[] {
    return this.getAllProducts().filter((product) => product.isActive);
  }

  getProductsByCategory(category: ProductCategory): Product[] {
    return this.getAllProducts().filter(
      (product) => product.category === category
    );
  }

  getSubscriptionPlans(): SubscriptionPlan[] {
    return this.getProductsByCategory(
      ProductCategory.SUBSCRIPTION
    ) as SubscriptionPlan[];
  }

  getAssessmentProducts(): AssessmentProduct[] {
    return this.getProductsByCategory(
      ProductCategory.ASSESSMENT
    ) as AssessmentProduct[];
  }

  getDocumentTemplates(): DocumentTemplate[] {
    return this.getProductsByCategory(
      ProductCategory.DOCUMENT_TEMPLATE
    ) as DocumentTemplate[];
  }

  findProductByCode(code: ProductCode): Product | undefined {
    return this.getAllProducts().find((product) => product.code.equals(code));
  }

  searchProducts(query: string): Product[] {
    const lowerQuery = query.toLowerCase();
    return this.getAllProducts().filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery)
    );
  }

  getProductCount(): number {
    return this.products.size;
  }

  getActiveProductCount(): number {
    return this.getActiveProducts().length;
  }

  // Factory method to create a standard catalog with default products
  static createStandardCatalog(): ProductCatalog {
    const catalog = new ProductCatalog(
      "standard-catalog",
      "AI Interview Platform Product Catalog",
      "Complete catalog of subscription plans, assessments, and document templates"
    );

    // Add subscription plans
    catalog.addProduct(SubscriptionPlan.createLightPlan());
    catalog.addProduct(SubscriptionPlan.createMiddlePlan());
    catalog.addProduct(SubscriptionPlan.createPremiumPlan());

    // Add assessment products
    catalog.addProduct(AssessmentProduct.createCareerAptitudeTest());
    catalog.addProduct(AssessmentProduct.createSPITest());
    catalog.addProduct(AssessmentProduct.create16PersonalityTest());

    // Add document templates
    catalog.addProduct(DocumentTemplate.createNewGraduateResumeTemplate());
    catalog.addProduct(DocumentTemplate.createExperiencedResumeTemplate());
    catalog.addProduct(DocumentTemplate.createEntrySheetTemplate());

    return catalog;
  }
}
