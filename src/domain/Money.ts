/**
 * Money Value Object
 * Represents monetary amounts with currency
 */
export class Money {
  constructor(
    public readonly amount: number,
    public readonly currency: string = "JPY"
  ) {
    if (amount < 0) {
      throw new Error("Amount cannot be negative");
    }
    if (!currency || currency.length !== 3) {
      throw new Error("Currency must be a valid 3-letter code");
    }
  }

  add(other: Money): Money {
    if (this.currency !== other.currency) {
      throw new Error("Cannot add different currencies");
    }
    return new Money(this.amount + other.amount, this.currency);
  }

  multiply(factor: number): Money {
    if (factor < 0) {
      throw new Error("Factor cannot be negative");
    }
    return new Money(this.amount * factor, this.currency);
  }

  equals(other: Money): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }

  toString(): string {
    return `${this.amount} ${this.currency}`;
  }

  static JPY(amount: number): Money {
    return new Money(amount, "JPY");
  }

  static USD(amount: number): Money {
    return new Money(amount, "USD");
  }
}
