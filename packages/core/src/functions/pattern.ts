import type { Operator } from '../types'

export type PatternFunction = (value: string, boundary?: boolean) => string

export const valueIs: PatternFunction = (v) =>
  `^(${v})$`

export const valueStarts: PatternFunction = (v, b) =>
  `^(${v})(?:${b ? '\\b' : ''})`

export const valueEnds: PatternFunction = (v, b) =>
  `(?:${b ? '\\b' : ''})(${v})$`

export const valueContains: PatternFunction = (v, b) =>
  `(?:${b ? '\\b' : ''})(${v})(?:${b ? '\\b' : ''})`

export const valueExcludes: PatternFunction = (v, b) =>
  `^(?!.*${b ? '\\b' : ''}(${v})${b ? '\\b' : ''})(?:.*)$`

export const valueAfter: PatternFunction = (v, b) =>
  `(?:${b ? '\\b' : ''}${v}${b ? '\\b\\s' : ''})(.*)`

export const valueBefore: PatternFunction = (v, b) =>
  `(.*)(?:${b ? '\\b\\s' : ''}${v}${b ? '\\b' : ''})`

export const patternMap: Record<Operator, PatternFunction> = {
  is: valueIs,
  starts: valueStarts,
  ends: valueEnds,
  contains: valueContains,
  excludes: valueExcludes,
  after: valueAfter,
  before: valueBefore
}

/**
 * Get pattern matching string for given operator.
 * @param {string} value - The value to match.
 * @param {boolean} [boundary] - Toggle word/space boundary.
 */
export const getPatternFunction = (operator: Operator, boundary?: boolean): PatternFunction =>
  (value) => patternMap[operator](value, boundary)
