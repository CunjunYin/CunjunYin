export * from './markdown';

import { escapeHtml, hasAnsiCodes, sanitize, sanitizeUrl, sanitizeTextPanelContent } from './sanitize';

export const textUtil = {
  escapeHtml,
  hasAnsiCodes,
  sanitize,
  sanitizeTextPanelContent,
  sanitizeUrl,
};