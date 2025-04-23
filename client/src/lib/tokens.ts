// This file imports the tokens.json file and creates a utility to resolve token references

import tokens from "@assets/tokens.json";

// Helper function to resolve a token reference like "{core.color.blue.70}"
export function resolveTokenReference(reference: string): string {
  if (typeof reference !== 'string' || !reference.startsWith('{') || !reference.endsWith('}')) {
    return reference;
  }

  const path = reference.slice(1, -1).split('.');
  let value: any = tokens;
  
  for (const key of path) {
    if (value === undefined) return reference;
    value = value[key];
  }

  if (typeof value === 'object' && value.value) {
    return resolveTokenReference(value.value);
  }

  return value;
}

// Type definitions for the tokens
export interface ColorToken {
  value: string;
  type: string;
}

export interface ColorScale {
  [key: string]: ColorToken;
}

export interface ColorTokens {
  [key: string]: ColorScale;
}

export interface CoreTokens {
  color: ColorTokens;
}

export interface SemanticColorTokens {
  text: {
    strong: ColorToken;
    soft: ColorToken;
    accent: ColorToken & { soft?: ColorToken };
    light: ColorToken;
    positive: ColorToken;
    negative: ColorToken;
  };
  background: {
    accent: ColorToken & { subtle?: ColorToken };
    subtle: ColorToken;
    neutral: ColorToken & { elevated?: ColorToken };
    positive: ColorToken;
    negative: ColorToken;
  };
}

export interface SemanticTokens {
  color: SemanticColorTokens;
}

export interface TokensStructure {
  core: CoreTokens;
  semantic: SemanticTokens;
}

// Access tokens with strong typing
export const typedTokens = tokens as TokensStructure;

export default tokens;
