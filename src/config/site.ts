import { translations } from "../locales";

export const site = {
    get appName() {
        return translations.config.appName;
    },
    get appDescription() {
        return translations.config.appDescription;
    },
};