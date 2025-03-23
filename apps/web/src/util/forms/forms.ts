import type { FormResponse, FieldsFeedback, ValidationResponse, Messages } from './types';
import type { ZodType } from 'zod';

/**
 * Converts FormData into a plain object and validates it against a Zod schema
 * @param formData The FormData instance to validate
 * @param schema The Zod schema to validate against
 */
export const validateFormData = <T extends ZodType>(formData: FormData, schema: T): ValidationResponse<T> => {
  const formDataObj = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(formDataObj);

  if (!parsed.success)
    return {
      ...(parsed.error?.flatten().fieldErrors as FieldsFeedback<T>),
      success: false,
      message: 'Some fields have issues',
    };

  return {
    ...parsed.data,
    success: true,
    message: 'Data retrieved',
  };
};

/**
 * Creates a custom form error response that matches the structure returned by validateFormData.
 * Useful for returning consistent error formats from server actions and form requests.
 *
 * @param options - Either field-specific errors or a custom error message
 * @returns A FormResponse object with the same structure as validateFormData
 *
 * @example
 * // Field-specific error
 * createResponse({
 *   field: "email",
 *   messages: ["Email already exists"]
 * });
 *
 * // Custom error message
 * createResponse({
 *   field: "custom",
 *   messages: ["Server error occurred"]
 * });
 */
export const createResponse = <T extends ZodType>(
  messages: Messages<T>,
  message: string,
  success: boolean,
): FormResponse<T> => {
  const errs: FieldsFeedback<T> = messages.reduce((prev, err) => ({ ...prev, [err.field]: err.messages }), {});

  return {
    ...errs,
    success,
    message,
  };
};
