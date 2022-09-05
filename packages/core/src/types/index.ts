import { Operators } from '../constants'

/** Type of Operator enum keys. */
export type Operator = keyof typeof Operators

/** One or more condition key/value pairs. */
export type Condition = {
  [key in Operators]?: string | string[]
}

/** Collection of condition types assigned to named keys. */
export type Collection = { [key: string]: Condition }

/** Mix of accepted types for conditions constructor. */
export type ConditionInput = string | RegExp | Condition | Condition[] | Collection

/** Interface for condition options, matching modifiers. */
export interface Options {
  /** apply word boundaries to regex patterns */
  matchWord?: boolean
  /** ignore case on regex patterns */
  ignoreCase?: boolean
  /** make punctuation optional for matching */
  ignorePunctuation?: boolean
}
