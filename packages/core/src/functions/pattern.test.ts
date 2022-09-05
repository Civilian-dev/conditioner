import {
  valueAfter,
  valueBefore,
  valueContains,
  valueEnds,
  valueExcludes,
  valueIs,
  valueStarts
} from './pattern'

describe('functions ➜ pattern', () => {
  describe('valueIs', () => {
    it('returned pattern matches whole input', () => {
      expect(new RegExp(valueIs('foo')).test('foo')).toBe(true)
    })
    it('returns matched segment as first capture group', () => {
      expect(new RegExp(valueIs('foo')).exec('foo')?.[1]).toBe('foo')
    })
    it('returned pattern fails on partial match', () => {
      expect(new RegExp(valueIs('foo')).test('food')).toBe(false)
    })
  })
  describe('valueStarts', () => {
    it('returned pattern matches start of input', () => {
      expect(new RegExp(valueStarts('ping')).test('pings')).toBe(true)
    })
    it('returns matched segment as first capture group', () => {
      expect(new RegExp(valueStarts('ping')).exec('ping pong')?.[1]).toBe('ping')
    })
    it('returned pattern fails with anything preceding match', () => {
      expect(new RegExp(valueStarts('ping')).test('hoping')).toBe(false)
    })
    describe('with boundary', () => {
      it('returned pattern matches word starting input', () => {
        expect(new RegExp(valueStarts('ping', true)).test('ping pong')).toBe(true)
      })
      it('returned pattern fails with incomplete word match', () => {
        expect(new RegExp(valueStarts('ping', true)).test('pings')).toBe(false)
      })
    })
  })
  describe('valueEnds', () => {
    it('returned pattern matches end of input', () => {
      expect(new RegExp(valueEnds('ping')).test('hoping')).toBe(true)
    })
    it('returns matched segment as first capture group', () => {
      expect(new RegExp(valueEnds('ping')).exec('hoping')?.[1]).toBe('ping')
    })
    it('returned pattern fails with anything following match', () => {
      expect(new RegExp(valueEnds('ping')).test('pings')).toBe(false)
    })
    describe('with boundary', () => {
      it('returned pattern matches word ending input', () => {
        expect(new RegExp(valueEnds('ping', true)).test('pong ping')).toBe(true)
      })
      it('returned pattern fails with incomplete word match', () => {
        expect(new RegExp(valueEnds('ping', true)).test('hoping')).toBe(false)
      })
    })
  })
  describe('valueContains', () => {
    it('returned pattern matches input containing value', () => {
      expect(new RegExp(valueContains('ping')).test('hopping along')).toBe(true)
    })
    it('returns matched segment as first capture group', () => {
      expect(new RegExp(valueContains('ping')).exec('hopping along')?.[1]).toBe('ping')
    })
    it('returned pattern fails with input not containing value', () => {
      expect(new RegExp(valueContains('ping')).test('pong')).toBe(false)
    })
    describe('with boundary', () => {
      it('returned pattern matches word containing input', () => {
        expect(new RegExp(valueContains('ping', true)).test('pong ping pang')).toBe(true)
      })
      it('returned pattern fails with incomplete word match', () => {
        expect(new RegExp(valueContains('ping', true)).test('hopping along')).toBe(false)
      })
    })
  })
  describe('valueExcludes', () => {
    it('returned pattern matches input not containing value', () => {
      expect(new RegExp(valueExcludes('ping')).test('pong')).toBe(true)
    })
    it('returned pattern fails with input containing value', () => {
      expect(new RegExp(valueExcludes('ping')).test('hopping along')).toBe(false)
    })
    describe('with boundary', () => {
      it('returned pattern matches input not containing word', () => {
        expect(new RegExp(valueExcludes('ping', true)).test('pong pang')).toBe(true)
      })
      it('returned pattern matches input containing partial word (suffix)', () => {
        expect(new RegExp(valueExcludes('ping', true)).test('i was hoping')).toBe(true)
      })
      it('returned pattern matches input containing partial word (prefix)', () => {
        expect(new RegExp(valueExcludes('ping', true)).test('hear my pings')).toBe(true)
      })
      it('returned pattern fails with input containing word', () => {
        expect(new RegExp(valueExcludes('ping', true)).test('ping pong')).toBe(false)
      })
    })
  })
  describe('valueAfter', () => {
    it('returned pattern matches input after value', () => {
      expect(new RegExp(valueAfter('ping')).test('ping pong')).toBe(true)
    })
    it('returns matched segment as first capture group', () => {
      expect(new RegExp(valueAfter('ping')).exec('pings')?.[1]).toBe('s')
    })
    it('returned pattern fails with input not containing value', () => {
      expect(new RegExp(valueAfter('ping')).test('pong')).toBe(false)
    })
    describe('with boundary', () => {
      it('returned pattern matches word after input', () => {
        expect(new RegExp(valueAfter('ping', true)).exec('ping pong')?.[1]).toBe('pong')
      })
      it('returned pattern fails with incomplete word (suffix)', () => {
        expect(new RegExp(valueAfter('ping', true)).test('hopping along')).toBe(false)
      })
      it('returned pattern fails with incomplete word (prefix)', () => {
        expect(new RegExp(valueAfter('ping', true)).test('pings pong')).toBe(false)
      })
    })
  })
  describe('valueBefore', () => {
    it('returned pattern matches input before value', () => {
      expect(new RegExp(valueBefore('ping')).test('pong ping')).toBe(true)
    })
    it('returns matched segment as first capture group', () => {
      expect(new RegExp(valueBefore('ping')).exec('hopping')?.[1]).toBe('hop')
    })
    it('returned pattern fails with input not containing value', () => {
      expect(new RegExp(valueBefore('ping')).test('pong')).toBe(false)
    })
    describe('with boundary', () => {
      it('returned pattern matches word before input', () => {
        expect(new RegExp(valueBefore('ping', true)).exec('pong ping')?.[1]).toBe('pong')
      })
      it('returned pattern fails with incomplete word (suffix)', () => {
        expect(new RegExp(valueBefore('ping', true)).test('i was hoping')).toBe(false)
      })
      it('returned pattern fails with incomplete word (prefix)', () => {
        expect(new RegExp(valueBefore('ping', true)).test('hear my pings')).toBe(false)
      })
    })
  }
})
