/**
 * Domain Events
 * Represents significant business events in the product catalog domain
 */

export abstract class DomainEvent {
  public readonly occurredOn: Date;
  public readonly eventId: string;

  constructor() {
    this.occurredOn = new Date();
    this.eventId = this.generateEventId();
  }

  private generateEventId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  abstract getEventName(): string;
}

export class ProductCreatedEvent extends DomainEvent {
  constructor(
    public readonly productId: string,
    public readonly productName: string,
    public readonly category: string,
    public readonly price: number,
    public readonly currency: string
  ) {
    super();
  }

  getEventName(): string {
    return "ProductCreated";
  }
}

export class ProductPriceChangedEvent extends DomainEvent {
  constructor(
    public readonly productId: string,
    public readonly productName: string,
    public readonly oldPrice: number,
    public readonly newPrice: number,
    public readonly currency: string
  ) {
    super();
  }

  getEventName(): string {
    return "ProductPriceChanged";
  }
}

export class ProductActivatedEvent extends DomainEvent {
  constructor(
    public readonly productId: string,
    public readonly productName: string
  ) {
    super();
  }

  getEventName(): string {
    return "ProductActivated";
  }
}

export class ProductDeactivatedEvent extends DomainEvent {
  constructor(
    public readonly productId: string,
    public readonly productName: string
  ) {
    super();
  }

  getEventName(): string {
    return "ProductDeactivated";
  }
}

export class SubscriptionPlanCreatedEvent extends DomainEvent {
  constructor(
    public readonly planId: string,
    public readonly planName: string,
    public readonly monthlyPrice: number,
    public readonly annualPrice: number,
    public readonly currency: string,
    public readonly features: string[]
  ) {
    super();
  }

  getEventName(): string {
    return "SubscriptionPlanCreated";
  }
}

/**
 * DomainEventPublisher
 * Simple in-memory event publisher for domain events
 */
export class DomainEventPublisher {
  private static instance: DomainEventPublisher;
  private handlers: Map<string, Array<(event: DomainEvent) => void>> =
    new Map();

  private constructor() {}

  static getInstance(): DomainEventPublisher {
    if (!DomainEventPublisher.instance) {
      DomainEventPublisher.instance = new DomainEventPublisher();
    }
    return DomainEventPublisher.instance;
  }

  subscribe(eventName: string, handler: (event: DomainEvent) => void): void {
    if (!this.handlers.has(eventName)) {
      this.handlers.set(eventName, []);
    }
    this.handlers.get(eventName)!.push(handler);
  }

  publish(event: DomainEvent): void {
    const eventName = event.getEventName();
    const eventHandlers = this.handlers.get(eventName);

    if (eventHandlers) {
      eventHandlers.forEach((handler) => {
        try {
          handler(event);
        } catch (error) {
          console.error(`Error handling event ${eventName}:`, error);
        }
      });
    }
  }

  unsubscribe(eventName: string, handler: (event: DomainEvent) => void): void {
    const eventHandlers = this.handlers.get(eventName);
    if (eventHandlers) {
      const index = eventHandlers.indexOf(handler);
      if (index > -1) {
        eventHandlers.splice(index, 1);
      }
    }
  }

  clear(): void {
    this.handlers.clear();
  }

  getHandlerCount(eventName: string): number {
    return this.handlers.get(eventName)?.length || 0;
  }
}
