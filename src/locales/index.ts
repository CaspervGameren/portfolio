import { createSignal } from 'solid-js';
import { createStore, reconcile } from 'solid-js/store';
import en from './en';
import nl from './nl';

const preferredLanguage =
    typeof navigator !== 'undefined'
        ? navigator.languages
            .map((language) => language.split('-')[0])
            .find((language) => language === 'nl' || language === 'en')
        : undefined;

export const language = preferredLanguage ?? 'en';
type Language = 'nl' | 'en';
export const [currentLanguage, setCurrentLanguage] = createSignal<Language>(language);
const [translationStore, setTranslationStore] = createStore(structuredClone(language === 'nl' ? nl : en));
export const translations = translationStore;

// Temporary in-memory override: reloading restores the browser preference.
export const toggleTestLanguage = () => {
    const next = currentLanguage() === 'nl' ? 'en' : 'nl';
    setCurrentLanguage(next);
    setTranslationStore(reconcile(structuredClone(next === 'nl' ? nl : en)));
    if (typeof document !== 'undefined') document.documentElement.lang = next;
};