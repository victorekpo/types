import { suite, test } from 'qunit-decorators';
import {
  Dict,
  OptionalPropertyNamesOf,
  OptionalProps,
  RequiredPropertyNamesOf,
  RequiredProps
} from '../src';

@suite
export class ObjectUtilsTest {
  @test public RequiredProps(assert: Assert): void {
    interface A {
      a?: number;
      b?: string;
    }
    type Arequired = RequiredProps<A, 'a'>;
    let x: Arequired = { a: 51 };
    x = { a: 22, b: 'foo' };
    assert.ok(x);
  }
  @test public OptionalProps(assert: Assert): void {
    interface A {
      a: number;
      b: string;
    }
    type Aoptional = OptionalProps<A, 'a'>;
    let x: Aoptional = { b: '51' };
    x = { a: 22, b: 'foo' };
    assert.ok(x);
  }
  @test 'Dict tests'(assert: Assert) {
    interface A {
      a: number;
      b: string;
    }
    const aDict: Dict<A> = {};
    aDict.foo = { a: 22, b: 'abc' };
    assert.ok(aDict.foo);
  }

  @test 'OptionalPropertyNamesOf tests'(assert: Assert) {
    let x: OptionalPropertyNamesOf<{ a: string; b?: number }> = 'b';
    // tslint:disable-next-line: no-empty
    function foo(_arg: 'b') {}
    foo(x);
    assert.ok(x);
  }

  @test 'RequiredPropertyNamesOf tests'(assert: Assert) {
    let y: RequiredPropertyNamesOf<{ a: string; b?: number }> = 'a';
    // tslint:disable-next-line: no-empty
    function foo(_arg: 'a') {}
    foo(y);
    assert.ok(y);
  }
}
