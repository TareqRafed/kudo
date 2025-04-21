import type { z, ZodType } from 'zod';

export type FieldsFeedback<T extends ZodType> = {
  [K in keyof z.infer<T>]?: string[];
};

export type FieldValues<T extends ZodType> = z.infer<T>;

export type FormResponse<T extends ZodType> =
  | (FieldsFeedback<T> & {
      message: string;
      success: boolean;
    })
  | (FieldValues<T> & {
      message: string;
      success: true;
    });

export type ValidationResponse<T extends ZodType> =
  | (FieldsFeedback<T> & {
      message: string;
      success: false;
    })
  | (FieldValues<T> & {
      message: string;
      success: true;
    });

export type Messages<T extends ZodType> = {
  field: keyof z.infer<T> | 'custom';
  messages: string[];
}[];
