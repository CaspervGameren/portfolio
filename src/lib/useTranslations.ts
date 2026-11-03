import { translations } from "../locales";

// locales/index.ts — toevoegen aan je bestaande bestand
export function useTranslations(
    page: keyof typeof translations.pages,
) {
    return {
        get page() {
            return translations.pages[page];
        },
        get common() {
            return translations.common;
        },
    };
}