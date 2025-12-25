/**
 * Domain Layer Exports
 * Central export file for all domain components
 */

// Value Objects
export { Money } from "./Money";
export { ProductCode } from "./ProductCode";

// Entities
export { Product, ProductCategory } from "./Product";
export { SubscriptionPlan, SubscriptionFeatures } from "./SubscriptionPlan";
export { AssessmentProduct, AssessmentType } from "./AssessmentProduct";
export {
  DocumentTemplate,
  DocumentTemplateType,
  TargetAudience,
} from "./DocumentTemplate";

// Aggregates
export { ProductCatalog } from "./ProductCatalog";

// Domain Services
export { PricingService, BillingCycle } from "./PricingService";

// Repository Interfaces
export {
  IProductRepository,
  InMemoryProductRepository,
} from "./ProductRepository";

// Domain Events
export {
  DomainEvent,
  ProductCreatedEvent,
  ProductPriceChangedEvent,
  ProductActivatedEvent,
  ProductDeactivatedEvent,
  SubscriptionPlanCreatedEvent,
  DomainEventPublisher,
} from "./DomainEvents";

// Utilities
export { Logger, LogLevel } from "./Logger";
