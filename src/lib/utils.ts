import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Decodes HTML entities (like &#8216;, &nbsp;) into their character counterparts.
 */
export const decodeHtmlEntities = (text: string): string => {
  if (typeof document === "undefined") return text; // Fallback for non-browser envs
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
};

/**
 * Strips HTML tags from a string and decodes HTML entities.
 * Ideal for WordPress excerpts or content that needs to be plain text.
 */
export const cleanWPContent = (html: string): string => {
  if (!html) return "";
  const withoutTags = html.replace(/(<([^>]+)>)/gi, "").trim();
  return decodeHtmlEntities(withoutTags);
};
