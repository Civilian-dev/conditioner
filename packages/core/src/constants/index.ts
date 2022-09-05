/**
 * Key literals for condition attributes.
 * Behaviour alternates depending on `matchWord` option.
 */
export enum Operators {
  /** Match whole input */
  is,
  /** Match beginning / first word */
  starts,
  /** Match end / last word */
  ends,
  /** Match part / word */
  contains,
  /** Negative match part / word */
  excludes,
  /** Match anything after value / next word */
  after,
  /** Match anything before value / prev word */
  before,
  /** Match a given range (only between 0-999, otherwise use regexp) */
  // range
}
