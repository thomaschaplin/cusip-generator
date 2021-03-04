import { alphanumeric } from "./fixtures/alphanumeric-values";

export const getRandomAlphanumeric = (): string | number =>
  alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
