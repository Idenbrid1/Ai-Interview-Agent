/**
 * Simple Logger Utility
 * Provides basic logging functionality for the domain
 */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export class Logger {
  private static instance: Logger;
  private logLevel: LogLevel = LogLevel.INFO;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  debug(message: string, ...args: any[]): void {
    if (this.logLevel <= LogLevel.DEBUG) {
      console.debug(
        `[DEBUG] ${new Date().toISOString()} - ${message}`,
        ...args
      );
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.logLevel <= LogLevel.INFO) {
      console.info(`[INFO] ${new Date().toISOString()} - ${message}`, ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.logLevel <= LogLevel.WARN) {
      console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, ...args);
    }
  }

  error(message: string, error?: Error, ...args: any[]): void {
    if (this.logLevel <= LogLevel.ERROR) {
      console.error(
        `[ERROR] ${new Date().toISOString()} - ${message}`,
        error,
        ...args
      );
    }
  }

  // Domain-specific logging methods
  logDomainEvent(eventName: string, eventData: any): void {
    this.info(`Domain Event: ${eventName}`, eventData);
  }

  logBusinessRule(ruleName: string, result: boolean, context?: any): void {
    this.debug(`Business Rule: ${ruleName} - Result: ${result}`, context);
  }

  logRepositoryOperation(
    operation: string,
    entityType: string,
    entityId?: string
  ): void {
    this.debug(
      `Repository: ${operation} ${entityType}${
        entityId ? ` (${entityId})` : ""
      }`
    );
  }

  logPricingCalculation(operation: string, input: any, result: any): void {
    this.debug(`Pricing: ${operation}`, { input, result });
  }
}
