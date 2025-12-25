import { Product, ProductCategory } from "./Product";
import { ProductCode } from "./ProductCode";
import { Money } from "./Money";

/**
 * DocumentTemplate Entity
 * Represents document templates for resumes, entry sheets, etc.
 */
export class DocumentTemplate extends Product {
  constructor(
    id: string,
    code: ProductCode,
    name: string,
    description: string,
    price: Money,
    public readonly templateType: DocumentTemplateType,
    public readonly targetAudience: TargetAudience,
    public readonly features: string[],
    public readonly previewUrl: string,
    public readonly thumbnailUrl: string,
    isActive: boolean = true,
    createdAt: Date = new Date()
  ) {
    super(
      id,
      code,
      name,
      description,
      price,
      ProductCategory.DOCUMENT_TEMPLATE,
      isActive,
      createdAt
    );

    if (!previewUrl || previewUrl.trim().length === 0) {
      throw new Error("Preview URL cannot be empty");
    }
    if (!thumbnailUrl || thumbnailUrl.trim().length === 0) {
      throw new Error("Thumbnail URL cannot be empty");
    }
  }

  isCompatibleWithUserType(userType: string): boolean {
    switch (this.targetAudience) {
      case TargetAudience.NEW_GRADUATE:
        return userType === "new_graduate";
      case TargetAudience.EXPERIENCED:
        return userType === "experienced" || userType === "career_change";
      case TargetAudience.ALL:
        return true;
      default:
        return false;
    }
  }

  hasFeature(feature: string): boolean {
    return this.features.includes(feature);
  }

  // Factory methods for standard templates
  static createNewGraduateResumeTemplate(): DocumentTemplate {
    return new DocumentTemplate(
      "resume-new-grad",
      ProductCode.forDocumentTemplate("RESUME_NEW_GRAD"),
      "New Graduate Resume Template",
      "Professional resume template designed for new graduates",
      Money.JPY(0), // Free with subscription
      DocumentTemplateType.RESUME,
      TargetAudience.NEW_GRADUATE,
      ["ATS-friendly", "Modern design", "Skills section"],
      "https://templates.example.com/preview/resume-new-grad",
      "https://templates.example.com/thumb/resume-new-grad.jpg"
    );
  }

  static createExperiencedResumeTemplate(): DocumentTemplate {
    return new DocumentTemplate(
      "resume-experienced",
      ProductCode.forDocumentTemplate("RESUME_EXPERIENCED"),
      "Experienced Professional Resume Template",
      "Resume template for professionals with work experience",
      Money.JPY(0), // Free with subscription
      DocumentTemplateType.RESUME,
      TargetAudience.EXPERIENCED,
      ["Experience-focused", "Achievement highlights", "Professional layout"],
      "https://templates.example.com/preview/resume-experienced",
      "https://templates.example.com/thumb/resume-experienced.jpg"
    );
  }

  static createEntrySheetTemplate(): DocumentTemplate {
    return new DocumentTemplate(
      "entry-sheet-standard",
      ProductCode.forDocumentTemplate("ENTRY_SHEET"),
      "Standard Entry Sheet Template",
      "Japanese-style entry sheet template for job applications",
      Money.JPY(0), // Free with subscription
      DocumentTemplateType.ENTRY_SHEET,
      TargetAudience.NEW_GRADUATE,
      ["Japanese format", "Standard sections", "Easy to fill"],
      "https://templates.example.com/preview/entry-sheet",
      "https://templates.example.com/thumb/entry-sheet.jpg"
    );
  }
}

export enum DocumentTemplateType {
  RESUME = "RESUME",
  ENTRY_SHEET = "ENTRY_SHEET",
  COVER_LETTER = "COVER_LETTER",
  CAREER_HISTORY = "CAREER_HISTORY",
}

export enum TargetAudience {
  NEW_GRADUATE = "NEW_GRADUATE",
  EXPERIENCED = "EXPERIENCED",
  ALL = "ALL",
}
