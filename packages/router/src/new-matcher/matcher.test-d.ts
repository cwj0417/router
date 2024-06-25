import { describe, it } from 'vitest'
import { NEW_MatcherLocationResolved, createCompiledMatcher } from './matcher'

describe('Matcher', () => {
  it('resolves locations', () => {
    const matcher = createCompiledMatcher()
    matcher.resolve('/foo')
    // @ts-expect-error: needs currentLocation
    matcher.resolve('foo')
    matcher.resolve('foo', {} as NEW_MatcherLocationResolved)
    matcher.resolve({ name: 'foo', params: {} })
    // @ts-expect-error: needs currentLocation
    matcher.resolve({ params: { id: 1 } })
    matcher.resolve({ params: { id: 1 } }, {} as NEW_MatcherLocationResolved)
  })
})
