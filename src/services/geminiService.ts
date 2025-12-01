import { Language } from 'types/index';

// Offline/mock Gemini service.
// This implementation does not call any external API and returns a short,
// deterministic, helpful answer based on the input. Designed for offline/dev mode.
export const generateArchitecturalInsight = async (
  query: string,
  context: string,
  language: Language
): Promise<string> => {
  // Very small local heuristic to produce a concise answer without network.
  const maxLen = 600; // characters, approximate safety limit

  const baseEn = `Simulation Mode: local offline response.`;
  const baseSk = `Simulačný režim: lokálna odpoveď.`;

  const prefix = language === 'en' ? baseEn : baseSk;

  // Build a short contextual reply using the query and trimmed context.
  const ctx = (context || '').replace(/\s+/g, ' ').trim();
  const q = (query || '').trim();

  // Simple canned suggestions based on keywords (expandable).
  const suggestions: string[] = [];
  const qLower = q.toLowerCase();
  if (/crm|bitrix/.test(qLower)) {
    suggestions.push(language === 'en' ? 'Consider using Bitrix24 webhooks and Smart Process triggers.' : 'Uvažujte o použití Bitrix24 webhookov a Smart Process triggerov.');
  }
  if (/wordpress|wp|plugin/.test(qLower)) {
    suggestions.push(language === 'en' ? 'Expose a secure REST endpoint in the WordPress plugin.' : 'Zverejnite zabezpečené REST endpoint v WordPress plugine.');
  }
  if (/performance|cache/.test(qLower)) {
    suggestions.push(language === 'en' ? 'Add server-side caching and pagination for large datasets.' : 'Pridajte server-side cache a stránkovanie pre veľké dataset-y.');
  }

  // If we didn't detect anything specific, give a generic architecture hint.
  if (suggestions.length === 0) {
    suggestions.push(
      language === 'en'
        ? 'Summarize integrations, secure endpoints, and verify data flow between CRM and frontends.'
        : 'Zhrňte integrácie, zabezpečte endpointy a overte tok dát medzi CRM a front-endmi.'
    );
  }

  // Compose final answer
  const answerParts = [prefix];
  if (q) answerParts.push(language === 'en' ? `Question: ${q}` : `Otázka: ${q}`);
  if (ctx) answerParts.push(language === 'en' ? `Context: ${ctx}` : `Kontext: ${ctx}`);
  answerParts.push(language === 'en' ? 'Recommendations:' : 'Odporúčania:');
  answerParts.push(...suggestions);

  let result = answerParts.join(' ');

  if (result.length > maxLen) {
    result = result.slice(0, maxLen - 3) + '...';
  }

  return Promise.resolve(result);
};