import React from 'react'


  export type result = {
    result: '大吉' | '中吉' | '小吉' | '末吉' | '吉' | '凶' | '大凶';
    description: string;
  };
  export const results: result[] = [
    { result: '大吉', description: '大吉の説明' },
    { result: '中吉', description: '中吉の説明' },
    { result: '小吉', description: '小吉の説明' },
    { result: '末吉', description: '末吉の説明' },
    { result: '吉', description: '吉の説明' },
    { result: '凶', description: '凶の説明' },
    { result: '大凶', description: '大凶の説明' },
  ];

