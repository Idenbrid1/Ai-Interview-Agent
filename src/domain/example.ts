/**
 * Domain Model Usage Example
 * Demonstrates how to use the product catalog domain model
 */

import {
  ProductCatalog,
  SubscriptionPlan,
  AssessmentProduct,
  DocumentTemplate,
  PricingService,
  InMemoryProductRepository,
  DomainEventPublisher,
  ProductCreatedEvent,
  Logger,
  LogLevel,
  Money,
  BillingCycle,
} from "./index";

async function demonstrateDomainModel() {
  // Initialize logger
  const logger = Logger.getInstance();
  logger.setLogLevel(LogLevel.INFO);
  logger.info("Starting Product Catalog Domain Model Demo");

  // Initialize event publisher
  const eventPublisher = DomainEventPublisher.getInstance();

  // Subscribe to product creation events
  eventPublisher.subscribe("ProductCreated", (event: ProductCreatedEvent) => {
    logger.info(
      `New product created: ${event.productName} (${event.category})`
    );
  });

  // Create a product catalog with standard products
  const catalog = ProductCatalog.createStandardCatalog();
  logger.info(`Created catalog with ${catalog.getProductCount()} products`);

  // Initialize repository and seed with data
  const repository = new InMemoryProductRepository();
  await repository.seedWithDefaults();
  logger.info(`Repository seeded with ${repository.size()} products`);

  // Demonstrate subscription plan features
  const middlePlan = SubscriptionPlan.createMiddlePlan();
  logger.info(
    `Middle Plan: ${
      middlePlan.name
    } - ${middlePlan.monthlyPrice.toString()}/month`
  );
  logger.info(
    `Annual discount: ${(middlePlan.getAnnualDiscount() * 100).toFixed(1)}%`
  );
  logger.info(`Has AI coaching: ${middlePlan.hasFeature("ai_coaching")}`);
  logger.info(`Can use 10 sessions: ${middlePlan.canUseInterviewSessions(10)}`);

  // Demonstrate pricing service
  const pricingService = new PricingService();

  // Calculate upgrade price
  const lightPlan = SubscriptionPlan.createLightPlan();
  const upgradePrice = pricingService.calculateUpgradePrice(
    lightPlan,
    middlePlan,
    BillingCycle.MONTHLY
  );
  logger.info(`Upgrade from Light to Middle: ${upgradePrice.toString()}`);

  // Get plan recommendation
  const budget = Money.JPY(5000);
  const requiredFeatures = ["ai_coaching"];
  const recommendedPlan = pricingService.getRecommendedPlan(
    budget,
    requiredFeatures
  );
  logger.info(
    `Recommended plan for ¥5000 budget with AI coaching: ${
      recommendedPlan?.name || "None"
    }`
  );

  // Demonstrate assessment products
  const careerTest = AssessmentProduct.createCareerAptitudeTest();
  logger.info(
    `Career test duration: ${careerTest.getEstimatedCompletionTime()} minutes`
  );
  logger.info(
    `Career test eligible for new graduates: ${careerTest.isEligibleForUser(
      "new_graduate"
    )}`
  );

  // Demonstrate document templates
  const resumeTemplate = DocumentTemplate.createNewGraduateResumeTemplate();
  logger.info(
    `Resume template compatible with new graduates: ${resumeTemplate.isCompatibleWithUserType(
      "new_graduate"
    )}`
  );
  logger.info(
    `Resume template has ATS-friendly feature: ${resumeTemplate.hasFeature(
      "ATS-friendly"
    )}`
  );

  // Demonstrate catalog operations
  const subscriptionPlans = catalog.getSubscriptionPlans();
  logger.info(`Found ${subscriptionPlans.length} subscription plans`);

  const assessments = catalog.getAssessmentProducts();
  logger.info(`Found ${assessments.length} assessment products`);

  const templates = catalog.getDocumentTemplates();
  logger.info(`Found ${templates.length} document templates`);

  // Search functionality
  const searchResults = catalog.searchProducts("interview");
  logger.info(`Search for 'interview' found ${searchResults.length} products`);

  // Repository operations
  const foundProduct = await repository.findById("middle-plan");
  if (foundProduct) {
    logger.info(`Found product by ID: ${foundProduct.name}`);
  }

  const activeProducts = await repository.findActiveProducts();
  logger.info(`Found ${activeProducts.length} active products`);

  logger.info("Product Catalog Domain Model Demo completed successfully");
}

// Run the demonstration
if (require.main === module) {
  demonstrateDomainModel().catch((error) => {
    console.error("Demo failed:", error);
    process.exit(1);
  });
}

export { demonstrateDomainModel };
