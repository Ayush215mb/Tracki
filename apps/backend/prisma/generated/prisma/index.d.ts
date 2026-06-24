
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model HabitLog
 * 
 */
export type HabitLog = $Result.DefaultSelection<Prisma.$HabitLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const HabitFrequency: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  CUSTOM: 'CUSTOM'
};

export type HabitFrequency = (typeof HabitFrequency)[keyof typeof HabitFrequency]

}

export type HabitFrequency = $Enums.HabitFrequency

export const HabitFrequency: typeof $Enums.HabitFrequency

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitLog`: Exposes CRUD operations for the **HabitLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitLogs
    * const habitLogs = await prisma.habitLog.findMany()
    * ```
    */
  get habitLog(): Prisma.HabitLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Habit: 'Habit',
    HabitLog: 'HabitLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "habit" | "habitLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      HabitLog: {
        payload: Prisma.$HabitLogPayload<ExtArgs>
        fields: Prisma.HabitLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findFirst: {
            args: Prisma.HabitLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findMany: {
            args: Prisma.HabitLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          create: {
            args: Prisma.HabitLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          createMany: {
            args: Prisma.HabitLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          delete: {
            args: Prisma.HabitLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          update: {
            args: Prisma.HabitLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          deleteMany: {
            args: Prisma.HabitLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          upsert: {
            args: Prisma.HabitLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          aggregate: {
            args: Prisma.HabitLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitLog>
          }
          groupBy: {
            args: Prisma.HabitLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitLogCountArgs<ExtArgs>
            result: $Utils.Optional<HabitLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    habit?: HabitOmit
    habitLog?: HabitLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    habitLogs: number
    habits: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitLogs?: boolean | ProfileCountOutputTypeCountHabitLogsArgs
    habits?: boolean | ProfileCountOutputTypeCountHabitsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountHabitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }


  /**
   * Count Type HabitCountOutputType
   */

  export type HabitCountOutputType = {
    logs: number
  }

  export type HabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | HabitCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    phoneNumber: number | null
    age: number | null
    appStreak: number | null
    totalScore: number | null
  }

  export type ProfileSumAggregateOutputType = {
    phoneNumber: number | null
    age: number | null
    appStreak: number | null
    totalScore: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    email: string | null
    phoneNumber: number | null
    password: string | null
    username: string | null
    name: string | null
    age: number | null
    city: string | null
    timezone: string | null
    appStreak: number | null
    totalScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    photoUrl: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phoneNumber: number | null
    password: string | null
    username: string | null
    name: string | null
    age: number | null
    city: string | null
    timezone: string | null
    appStreak: number | null
    totalScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    photoUrl: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    email: number
    phoneNumber: number
    password: number
    username: number
    name: number
    age: number
    city: number
    timezone: number
    appStreak: number
    totalScore: number
    createdAt: number
    updatedAt: number
    photoUrl: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    phoneNumber?: true
    age?: true
    appStreak?: true
    totalScore?: true
  }

  export type ProfileSumAggregateInputType = {
    phoneNumber?: true
    age?: true
    appStreak?: true
    totalScore?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    username?: true
    name?: true
    age?: true
    city?: true
    timezone?: true
    appStreak?: true
    totalScore?: true
    createdAt?: true
    updatedAt?: true
    photoUrl?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    username?: true
    name?: true
    age?: true
    city?: true
    timezone?: true
    appStreak?: true
    totalScore?: true
    createdAt?: true
    updatedAt?: true
    photoUrl?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    username?: true
    name?: true
    age?: true
    city?: true
    timezone?: true
    appStreak?: true
    totalScore?: true
    createdAt?: true
    updatedAt?: true
    photoUrl?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    email: string | null
    phoneNumber: number | null
    password: string
    username: string
    name: string | null
    age: number | null
    city: string | null
    timezone: string
    appStreak: number
    totalScore: number
    createdAt: Date
    updatedAt: Date
    photoUrl: string | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    username?: boolean
    name?: boolean
    age?: boolean
    city?: boolean
    timezone?: boolean
    appStreak?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photoUrl?: boolean
    habitLogs?: boolean | Profile$habitLogsArgs<ExtArgs>
    habits?: boolean | Profile$habitsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    username?: boolean
    name?: boolean
    age?: boolean
    city?: boolean
    timezone?: boolean
    appStreak?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photoUrl?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    username?: boolean
    name?: boolean
    age?: boolean
    city?: boolean
    timezone?: boolean
    appStreak?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photoUrl?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    username?: boolean
    name?: boolean
    age?: boolean
    city?: boolean
    timezone?: boolean
    appStreak?: boolean
    totalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    photoUrl?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phoneNumber" | "password" | "username" | "name" | "age" | "city" | "timezone" | "appStreak" | "totalScore" | "createdAt" | "updatedAt" | "photoUrl", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitLogs?: boolean | Profile$habitLogsArgs<ExtArgs>
    habits?: boolean | Profile$habitsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      habitLogs: Prisma.$HabitLogPayload<ExtArgs>[]
      habits: Prisma.$HabitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      phoneNumber: number | null
      password: string
      username: string
      name: string | null
      age: number | null
      city: string | null
      timezone: string
      appStreak: number
      totalScore: number
      createdAt: Date
      updatedAt: Date
      photoUrl: string | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habitLogs<T extends Profile$habitLogsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$habitLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    habits<T extends Profile$habitsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly phoneNumber: FieldRef<"Profile", 'Int'>
    readonly password: FieldRef<"Profile", 'String'>
    readonly username: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly age: FieldRef<"Profile", 'Int'>
    readonly city: FieldRef<"Profile", 'String'>
    readonly timezone: FieldRef<"Profile", 'String'>
    readonly appStreak: FieldRef<"Profile", 'Int'>
    readonly totalScore: FieldRef<"Profile", 'Int'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly photoUrl: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.habitLogs
   */
  export type Profile$habitLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    cursor?: HabitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * Profile.habits
   */
  export type Profile$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitAvgAggregateOutputType = {
    habitStreak: number | null
    pointsValue: number | null
    scheduledDays: number | null
  }

  export type HabitSumAggregateOutputType = {
    habitStreak: number | null
    pointsValue: number | null
    scheduledDays: number[]
  }

  export type HabitMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    frequency: $Enums.HabitFrequency | null
    createdAt: Date | null
    habitStreak: number | null
    isActive: boolean | null
    pointsValue: number | null
    updatedAt: Date | null
    userId: string | null
  }

  export type HabitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    frequency: $Enums.HabitFrequency | null
    createdAt: Date | null
    habitStreak: number | null
    isActive: boolean | null
    pointsValue: number | null
    updatedAt: Date | null
    userId: string | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    name: number
    description: number
    frequency: number
    createdAt: number
    habitStreak: number
    isActive: number
    pointsValue: number
    scheduledDays: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type HabitAvgAggregateInputType = {
    habitStreak?: true
    pointsValue?: true
    scheduledDays?: true
  }

  export type HabitSumAggregateInputType = {
    habitStreak?: true
    pointsValue?: true
    scheduledDays?: true
  }

  export type HabitMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    frequency?: true
    createdAt?: true
    habitStreak?: true
    isActive?: true
    pointsValue?: true
    updatedAt?: true
    userId?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    frequency?: true
    createdAt?: true
    habitStreak?: true
    isActive?: true
    pointsValue?: true
    updatedAt?: true
    userId?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    frequency?: true
    createdAt?: true
    habitStreak?: true
    isActive?: true
    pointsValue?: true
    scheduledDays?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _avg?: HabitAvgAggregateInputType
    _sum?: HabitSumAggregateInputType
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: string
    name: string
    description: string | null
    frequency: $Enums.HabitFrequency
    createdAt: Date
    habitStreak: number
    isActive: boolean
    pointsValue: number
    scheduledDays: number[]
    updatedAt: Date
    userId: string
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    frequency?: boolean
    createdAt?: boolean
    habitStreak?: boolean
    isActive?: boolean
    pointsValue?: boolean
    scheduledDays?: boolean
    updatedAt?: boolean
    userId?: boolean
    logs?: boolean | Habit$logsArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    frequency?: boolean
    createdAt?: boolean
    habitStreak?: boolean
    isActive?: boolean
    pointsValue?: boolean
    scheduledDays?: boolean
    updatedAt?: boolean
    userId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    frequency?: boolean
    createdAt?: boolean
    habitStreak?: boolean
    isActive?: boolean
    pointsValue?: boolean
    scheduledDays?: boolean
    updatedAt?: boolean
    userId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    frequency?: boolean
    createdAt?: boolean
    habitStreak?: boolean
    isActive?: boolean
    pointsValue?: boolean
    scheduledDays?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type HabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "frequency" | "createdAt" | "habitStreak" | "isActive" | "pointsValue" | "scheduledDays" | "updatedAt" | "userId", ExtArgs["result"]["habit"]>
  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | Habit$logsArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type HabitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      logs: Prisma.$HabitLogPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      frequency: $Enums.HabitFrequency
      createdAt: Date
      habitStreak: number
      isActive: boolean
      pointsValue: number
      scheduledDays: number[]
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }

  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitFindUniqueArgs>(args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitFindFirstArgs>(args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitFindManyArgs>(args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
     */
    create<T extends HabitCreateArgs>(args: SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCreateManyArgs>(args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habits and returns the data saved in the database.
     * @param {HabitCreateManyAndReturnArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
     */
    delete<T extends HabitDeleteArgs>(args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitUpdateArgs>(args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDeleteManyArgs>(args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitUpdateManyArgs>(args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits and returns the data updated in the database.
     * @param {HabitUpdateManyAndReturnArgs} args - Arguments to update many Habits.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
     */
    upsert<T extends HabitUpsertArgs>(args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends Habit$logsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Habit model
   */
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'String'>
    readonly name: FieldRef<"Habit", 'String'>
    readonly description: FieldRef<"Habit", 'String'>
    readonly frequency: FieldRef<"Habit", 'HabitFrequency'>
    readonly createdAt: FieldRef<"Habit", 'DateTime'>
    readonly habitStreak: FieldRef<"Habit", 'Int'>
    readonly isActive: FieldRef<"Habit", 'Boolean'>
    readonly pointsValue: FieldRef<"Habit", 'Int'>
    readonly scheduledDays: FieldRef<"Habit", 'Int[]'>
    readonly updatedAt: FieldRef<"Habit", 'DateTime'>
    readonly userId: FieldRef<"Habit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit createManyAndReturn
   */
  export type HabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
  }

  /**
   * Habit updateManyAndReturn
   */
  export type HabitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to delete.
     */
    limit?: number
  }

  /**
   * Habit.logs
   */
  export type Habit$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    cursor?: HabitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model HabitLog
   */

  export type AggregateHabitLog = {
    _count: HabitLogCountAggregateOutputType | null
    _avg: HabitLogAvgAggregateOutputType | null
    _sum: HabitLogSumAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  export type HabitLogAvgAggregateOutputType = {
    pointsEarned: number | null
  }

  export type HabitLogSumAggregateOutputType = {
    pointsEarned: number | null
  }

  export type HabitLogMinAggregateOutputType = {
    id: string | null
    completed: boolean | null
    createdAt: Date | null
    habitId: string | null
    logDate: Date | null
    pointsEarned: number | null
    userId: string | null
  }

  export type HabitLogMaxAggregateOutputType = {
    id: string | null
    completed: boolean | null
    createdAt: Date | null
    habitId: string | null
    logDate: Date | null
    pointsEarned: number | null
    userId: string | null
  }

  export type HabitLogCountAggregateOutputType = {
    id: number
    completed: number
    createdAt: number
    habitId: number
    logDate: number
    pointsEarned: number
    userId: number
    _all: number
  }


  export type HabitLogAvgAggregateInputType = {
    pointsEarned?: true
  }

  export type HabitLogSumAggregateInputType = {
    pointsEarned?: true
  }

  export type HabitLogMinAggregateInputType = {
    id?: true
    completed?: true
    createdAt?: true
    habitId?: true
    logDate?: true
    pointsEarned?: true
    userId?: true
  }

  export type HabitLogMaxAggregateInputType = {
    id?: true
    completed?: true
    createdAt?: true
    habitId?: true
    logDate?: true
    pointsEarned?: true
    userId?: true
  }

  export type HabitLogCountAggregateInputType = {
    id?: true
    completed?: true
    createdAt?: true
    habitId?: true
    logDate?: true
    pointsEarned?: true
    userId?: true
    _all?: true
  }

  export type HabitLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLog to aggregate.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitLogs
    **/
    _count?: true | HabitLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitLogMaxAggregateInputType
  }

  export type GetHabitLogAggregateType<T extends HabitLogAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitLog[P]>
      : GetScalarType<T[P], AggregateHabitLog[P]>
  }




  export type HabitLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithAggregationInput | HabitLogOrderByWithAggregationInput[]
    by: HabitLogScalarFieldEnum[] | HabitLogScalarFieldEnum
    having?: HabitLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitLogCountAggregateInputType | true
    _avg?: HabitLogAvgAggregateInputType
    _sum?: HabitLogSumAggregateInputType
    _min?: HabitLogMinAggregateInputType
    _max?: HabitLogMaxAggregateInputType
  }

  export type HabitLogGroupByOutputType = {
    id: string
    completed: boolean
    createdAt: Date
    habitId: string
    logDate: Date
    pointsEarned: number
    userId: string
    _count: HabitLogCountAggregateOutputType | null
    _avg: HabitLogAvgAggregateOutputType | null
    _sum: HabitLogSumAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  type GetHabitLogGroupByPayload<T extends HabitLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
            : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
        }
      >
    >


  export type HabitLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed?: boolean
    createdAt?: boolean
    habitId?: boolean
    logDate?: boolean
    pointsEarned?: boolean
    userId?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed?: boolean
    createdAt?: boolean
    habitId?: boolean
    logDate?: boolean
    pointsEarned?: boolean
    userId?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed?: boolean
    createdAt?: boolean
    habitId?: boolean
    logDate?: boolean
    pointsEarned?: boolean
    userId?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectScalar = {
    id?: boolean
    completed?: boolean
    createdAt?: boolean
    habitId?: boolean
    logDate?: boolean
    pointsEarned?: boolean
    userId?: boolean
  }

  export type HabitLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "completed" | "createdAt" | "habitId" | "logDate" | "pointsEarned" | "userId", ExtArgs["result"]["habitLog"]>
  export type HabitLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type HabitLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type HabitLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $HabitLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitLog"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      completed: boolean
      createdAt: Date
      habitId: string
      logDate: Date
      pointsEarned: number
      userId: string
    }, ExtArgs["result"]["habitLog"]>
    composites: {}
  }

  type HabitLogGetPayload<S extends boolean | null | undefined | HabitLogDefaultArgs> = $Result.GetResult<Prisma.$HabitLogPayload, S>

  type HabitLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitLogCountAggregateInputType | true
    }

  export interface HabitLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitLog'], meta: { name: 'HabitLog' } }
    /**
     * Find zero or one HabitLog that matches the filter.
     * @param {HabitLogFindUniqueArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitLogFindUniqueArgs>(args: SelectSubset<T, HabitLogFindUniqueArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HabitLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitLogFindUniqueOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitLogFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitLogFindFirstArgs>(args?: SelectSubset<T, HabitLogFindFirstArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitLogFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HabitLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitLogs
     * const habitLogs = await prisma.habitLog.findMany()
     * 
     * // Get first 10 HabitLogs
     * const habitLogs = await prisma.habitLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitLogFindManyArgs>(args?: SelectSubset<T, HabitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HabitLog.
     * @param {HabitLogCreateArgs} args - Arguments to create a HabitLog.
     * @example
     * // Create one HabitLog
     * const HabitLog = await prisma.habitLog.create({
     *   data: {
     *     // ... data to create a HabitLog
     *   }
     * })
     * 
     */
    create<T extends HabitLogCreateArgs>(args: SelectSubset<T, HabitLogCreateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HabitLogs.
     * @param {HabitLogCreateManyArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitLogCreateManyArgs>(args?: SelectSubset<T, HabitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HabitLogs and returns the data saved in the database.
     * @param {HabitLogCreateManyAndReturnArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HabitLogs and only return the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitLogCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HabitLog.
     * @param {HabitLogDeleteArgs} args - Arguments to delete one HabitLog.
     * @example
     * // Delete one HabitLog
     * const HabitLog = await prisma.habitLog.delete({
     *   where: {
     *     // ... filter to delete one HabitLog
     *   }
     * })
     * 
     */
    delete<T extends HabitLogDeleteArgs>(args: SelectSubset<T, HabitLogDeleteArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HabitLog.
     * @param {HabitLogUpdateArgs} args - Arguments to update one HabitLog.
     * @example
     * // Update one HabitLog
     * const habitLog = await prisma.habitLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitLogUpdateArgs>(args: SelectSubset<T, HabitLogUpdateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HabitLogs.
     * @param {HabitLogDeleteManyArgs} args - Arguments to filter HabitLogs to delete.
     * @example
     * // Delete a few HabitLogs
     * const { count } = await prisma.habitLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitLogDeleteManyArgs>(args?: SelectSubset<T, HabitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitLogs
     * const habitLog = await prisma.habitLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitLogUpdateManyArgs>(args: SelectSubset<T, HabitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitLogs and returns the data updated in the database.
     * @param {HabitLogUpdateManyAndReturnArgs} args - Arguments to update many HabitLogs.
     * @example
     * // Update many HabitLogs
     * const habitLog = await prisma.habitLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HabitLogs and only return the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitLogUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HabitLog.
     * @param {HabitLogUpsertArgs} args - Arguments to update or create a HabitLog.
     * @example
     * // Update or create a HabitLog
     * const habitLog = await prisma.habitLog.upsert({
     *   create: {
     *     // ... data to create a HabitLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitLog we want to update
     *   }
     * })
     */
    upsert<T extends HabitLogUpsertArgs>(args: SelectSubset<T, HabitLogUpsertArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogCountArgs} args - Arguments to filter HabitLogs to count.
     * @example
     * // Count the number of HabitLogs
     * const count = await prisma.habitLog.count({
     *   where: {
     *     // ... the filter for the HabitLogs we want to count
     *   }
     * })
    **/
    count<T extends HabitLogCountArgs>(
      args?: Subset<T, HabitLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitLogAggregateArgs>(args: Subset<T, HabitLogAggregateArgs>): Prisma.PrismaPromise<GetHabitLogAggregateType<T>>

    /**
     * Group by HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitLogGroupByArgs['orderBy'] }
        : { orderBy?: HabitLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitLog model
   */
  readonly fields: HabitLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HabitLog model
   */
  interface HabitLogFieldRefs {
    readonly id: FieldRef<"HabitLog", 'String'>
    readonly completed: FieldRef<"HabitLog", 'Boolean'>
    readonly createdAt: FieldRef<"HabitLog", 'DateTime'>
    readonly habitId: FieldRef<"HabitLog", 'String'>
    readonly logDate: FieldRef<"HabitLog", 'DateTime'>
    readonly pointsEarned: FieldRef<"HabitLog", 'Int'>
    readonly userId: FieldRef<"HabitLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HabitLog findUnique
   */
  export type HabitLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findUniqueOrThrow
   */
  export type HabitLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findFirst
   */
  export type HabitLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findFirstOrThrow
   */
  export type HabitLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findMany
   */
  export type HabitLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLogs to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog create
   */
  export type HabitLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitLog.
     */
    data: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
  }

  /**
   * HabitLog createMany
   */
  export type HabitLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitLog createManyAndReturn
   */
  export type HabitLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitLog update
   */
  export type HabitLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitLog.
     */
    data: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
    /**
     * Choose, which HabitLog to update.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog updateMany
   */
  export type HabitLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitLogs.
     */
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyInput>
    /**
     * Filter which HabitLogs to update
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to update.
     */
    limit?: number
  }

  /**
   * HabitLog updateManyAndReturn
   */
  export type HabitLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * The data used to update HabitLogs.
     */
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyInput>
    /**
     * Filter which HabitLogs to update
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitLog upsert
   */
  export type HabitLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitLog to update in case it exists.
     */
    where: HabitLogWhereUniqueInput
    /**
     * In case the HabitLog found by the `where` argument doesn't exist, create a new HabitLog with this data.
     */
    create: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
    /**
     * In case the HabitLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
  }

  /**
   * HabitLog delete
   */
  export type HabitLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter which HabitLog to delete.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog deleteMany
   */
  export type HabitLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLogs to delete
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to delete.
     */
    limit?: number
  }

  /**
   * HabitLog without action
   */
  export type HabitLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    username: 'username',
    name: 'name',
    age: 'age',
    city: 'city',
    timezone: 'timezone',
    appStreak: 'appStreak',
    totalScore: 'totalScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    photoUrl: 'photoUrl'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const HabitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    frequency: 'frequency',
    createdAt: 'createdAt',
    habitStreak: 'habitStreak',
    isActive: 'isActive',
    pointsValue: 'pointsValue',
    scheduledDays: 'scheduledDays',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const HabitLogScalarFieldEnum: {
    id: 'id',
    completed: 'completed',
    createdAt: 'createdAt',
    habitId: 'habitId',
    logDate: 'logDate',
    pointsEarned: 'pointsEarned',
    userId: 'userId'
  };

  export type HabitLogScalarFieldEnum = (typeof HabitLogScalarFieldEnum)[keyof typeof HabitLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'HabitFrequency'
   */
  export type EnumHabitFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitFrequency'>
    


  /**
   * Reference to a field of type 'HabitFrequency[]'
   */
  export type ListEnumHabitFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HabitFrequency[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    email?: StringNullableFilter<"Profile"> | string | null
    phoneNumber?: IntNullableFilter<"Profile"> | number | null
    password?: StringFilter<"Profile"> | string
    username?: StringFilter<"Profile"> | string
    name?: StringNullableFilter<"Profile"> | string | null
    age?: IntNullableFilter<"Profile"> | number | null
    city?: StringNullableFilter<"Profile"> | string | null
    timezone?: StringFilter<"Profile"> | string
    appStreak?: IntFilter<"Profile"> | number
    totalScore?: IntFilter<"Profile"> | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    photoUrl?: StringNullableFilter<"Profile"> | string | null
    habitLogs?: HabitLogListRelationFilter
    habits?: HabitListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    timezone?: SortOrder
    appStreak?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    habitLogs?: HabitLogOrderByRelationAggregateInput
    habits?: HabitOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: number
    username?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    password?: StringFilter<"Profile"> | string
    name?: StringNullableFilter<"Profile"> | string | null
    age?: IntNullableFilter<"Profile"> | number | null
    city?: StringNullableFilter<"Profile"> | string | null
    timezone?: StringFilter<"Profile"> | string
    appStreak?: IntFilter<"Profile"> | number
    totalScore?: IntFilter<"Profile"> | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    photoUrl?: StringNullableFilter<"Profile"> | string | null
    habitLogs?: HabitLogListRelationFilter
    habits?: HabitListRelationFilter
  }, "id" | "email" | "phoneNumber" | "username">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    timezone?: SortOrder
    appStreak?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    email?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    phoneNumber?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    password?: StringWithAggregatesFilter<"Profile"> | string
    username?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    age?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    city?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    timezone?: StringWithAggregatesFilter<"Profile"> | string
    appStreak?: IntWithAggregatesFilter<"Profile"> | number
    totalScore?: IntWithAggregatesFilter<"Profile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    photoUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
  }

  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: StringFilter<"Habit"> | string
    name?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    frequency?: EnumHabitFrequencyFilter<"Habit"> | $Enums.HabitFrequency
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    habitStreak?: IntFilter<"Habit"> | number
    isActive?: BoolFilter<"Habit"> | boolean
    pointsValue?: IntFilter<"Habit"> | number
    scheduledDays?: IntNullableListFilter<"Habit">
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    userId?: StringFilter<"Habit"> | string
    logs?: HabitLogListRelationFilter
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    habitStreak?: SortOrder
    isActive?: SortOrder
    pointsValue?: SortOrder
    scheduledDays?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    logs?: HabitLogOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    name?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    frequency?: EnumHabitFrequencyFilter<"Habit"> | $Enums.HabitFrequency
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    habitStreak?: IntFilter<"Habit"> | number
    isActive?: BoolFilter<"Habit"> | boolean
    pointsValue?: IntFilter<"Habit"> | number
    scheduledDays?: IntNullableListFilter<"Habit">
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    userId?: StringFilter<"Habit"> | string
    logs?: HabitLogListRelationFilter
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    habitStreak?: SortOrder
    isActive?: SortOrder
    pointsValue?: SortOrder
    scheduledDays?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _avg?: HabitAvgOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
    _sum?: HabitSumOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Habit"> | string
    name?: StringWithAggregatesFilter<"Habit"> | string
    description?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    frequency?: EnumHabitFrequencyWithAggregatesFilter<"Habit"> | $Enums.HabitFrequency
    createdAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    habitStreak?: IntWithAggregatesFilter<"Habit"> | number
    isActive?: BoolWithAggregatesFilter<"Habit"> | boolean
    pointsValue?: IntWithAggregatesFilter<"Habit"> | number
    scheduledDays?: IntNullableListFilter<"Habit">
    updatedAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    userId?: StringWithAggregatesFilter<"Habit"> | string
  }

  export type HabitLogWhereInput = {
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    id?: StringFilter<"HabitLog"> | string
    completed?: BoolFilter<"HabitLog"> | boolean
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
    habitId?: StringFilter<"HabitLog"> | string
    logDate?: DateTimeFilter<"HabitLog"> | Date | string
    pointsEarned?: IntFilter<"HabitLog"> | number
    userId?: StringFilter<"HabitLog"> | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type HabitLogOrderByWithRelationInput = {
    id?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    habitId?: SortOrder
    logDate?: SortOrder
    pointsEarned?: SortOrder
    userId?: SortOrder
    habit?: HabitOrderByWithRelationInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type HabitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    habitId_logDate?: HabitLogHabitIdLogDateCompoundUniqueInput
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    completed?: BoolFilter<"HabitLog"> | boolean
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
    habitId?: StringFilter<"HabitLog"> | string
    logDate?: DateTimeFilter<"HabitLog"> | Date | string
    pointsEarned?: IntFilter<"HabitLog"> | number
    userId?: StringFilter<"HabitLog"> | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "habitId_logDate">

  export type HabitLogOrderByWithAggregationInput = {
    id?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    habitId?: SortOrder
    logDate?: SortOrder
    pointsEarned?: SortOrder
    userId?: SortOrder
    _count?: HabitLogCountOrderByAggregateInput
    _avg?: HabitLogAvgOrderByAggregateInput
    _max?: HabitLogMaxOrderByAggregateInput
    _min?: HabitLogMinOrderByAggregateInput
    _sum?: HabitLogSumOrderByAggregateInput
  }

  export type HabitLogScalarWhereWithAggregatesInput = {
    AND?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    OR?: HabitLogScalarWhereWithAggregatesInput[]
    NOT?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HabitLog"> | string
    completed?: BoolWithAggregatesFilter<"HabitLog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HabitLog"> | Date | string
    habitId?: StringWithAggregatesFilter<"HabitLog"> | string
    logDate?: DateTimeWithAggregatesFilter<"HabitLog"> | Date | string
    pointsEarned?: IntWithAggregatesFilter<"HabitLog"> | number
    userId?: StringWithAggregatesFilter<"HabitLog"> | string
  }

  export type ProfileCreateInput = {
    id?: string
    email?: string | null
    phoneNumber?: number | null
    password: string
    username: string
    name?: string | null
    age?: number | null
    city?: string | null
    timezone?: string
    appStreak?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrl?: string | null
    habitLogs?: HabitLogCreateNestedManyWithoutProfileInput
    habits?: HabitCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    email?: string | null
    phoneNumber?: number | null
    password: string
    username: string
    name?: string | null
    age?: number | null
    city?: string | null
    timezone?: string
    appStreak?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrl?: string | null
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutProfileInput
    habits?: HabitUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    appStreak?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitLogs?: HabitLogUpdateManyWithoutProfileNestedInput
    habits?: HabitUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    appStreak?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitLogs?: HabitLogUncheckedUpdateManyWithoutProfileNestedInput
    habits?: HabitUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    email?: string | null
    phoneNumber?: number | null
    password: string
    username: string
    name?: string | null
    age?: number | null
    city?: string | null
    timezone?: string
    appStreak?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrl?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    appStreak?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    appStreak?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HabitCreateInput = {
    id?: string
    name: string
    description?: string | null
    frequency?: $Enums.HabitFrequency
    createdAt?: Date | string
    habitStreak?: number
    isActive?: boolean
    pointsValue?: number
    scheduledDays?: HabitCreatescheduledDaysInput | number[]
    updatedAt?: Date | string
    logs?: HabitLogCreateNestedManyWithoutHabitInput
    profile: ProfileCreateNestedOneWithoutHabitsInput
  }

  export type HabitUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    frequency?: $Enums.HabitFrequency
    createdAt?: Date | string
    habitStreak?: number
    isActive?: boolean
    pointsValue?: number
    scheduledDays?: HabitCreatescheduledDaysInput | number[]
    updatedAt?: Date | string
    userId: string
    logs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pointsValue?: IntFieldUpdateOperationsInput | number
    scheduledDays?: HabitUpdatescheduledDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: HabitLogUpdateManyWithoutHabitNestedInput
    profile?: ProfileUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pointsValue?: IntFieldUpdateOperationsInput | number
    scheduledDays?: HabitUpdatescheduledDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    logs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    frequency?: $Enums.HabitFrequency
    createdAt?: Date | string
    habitStreak?: number
    isActive?: boolean
    pointsValue?: number
    scheduledDays?: HabitCreatescheduledDaysInput | number[]
    updatedAt?: Date | string
    userId: string
  }

  export type HabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pointsValue?: IntFieldUpdateOperationsInput | number
    scheduledDays?: HabitUpdatescheduledDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pointsValue?: IntFieldUpdateOperationsInput | number
    scheduledDays?: HabitUpdatescheduledDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HabitLogCreateInput = {
    id?: string
    completed?: boolean
    createdAt?: Date | string
    logDate: Date | string
    pointsEarned?: number
    habit: HabitCreateNestedOneWithoutLogsInput
    profile: ProfileCreateNestedOneWithoutHabitLogsInput
  }

  export type HabitLogUncheckedCreateInput = {
    id?: string
    completed?: boolean
    createdAt?: Date | string
    habitId: string
    logDate: Date | string
    pointsEarned?: number
    userId: string
  }

  export type HabitLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    habit?: HabitUpdateOneRequiredWithoutLogsNestedInput
    profile?: ProfileUpdateOneRequiredWithoutHabitLogsNestedInput
  }

  export type HabitLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HabitLogCreateManyInput = {
    id?: string
    completed?: boolean
    createdAt?: Date | string
    habitId: string
    logDate: Date | string
    pointsEarned?: number
    userId: string
  }

  export type HabitLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
  }

  export type HabitLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HabitLogListRelationFilter = {
    every?: HabitLogWhereInput
    some?: HabitLogWhereInput
    none?: HabitLogWhereInput
  }

  export type HabitListRelationFilter = {
    every?: HabitWhereInput
    some?: HabitWhereInput
    none?: HabitWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HabitLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    age?: SortOrder
    city?: SortOrder
    timezone?: SortOrder
    appStreak?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoUrl?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    phoneNumber?: SortOrder
    age?: SortOrder
    appStreak?: SortOrder
    totalScore?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    age?: SortOrder
    city?: SortOrder
    timezone?: SortOrder
    appStreak?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoUrl?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    age?: SortOrder
    city?: SortOrder
    timezone?: SortOrder
    appStreak?: SortOrder
    totalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    photoUrl?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    phoneNumber?: SortOrder
    age?: SortOrder
    appStreak?: SortOrder
    totalScore?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumHabitFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitFrequency | EnumHabitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitFrequencyFilter<$PrismaModel> | $Enums.HabitFrequency
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    habitStreak?: SortOrder
    isActive?: SortOrder
    pointsValue?: SortOrder
    scheduledDays?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type HabitAvgOrderByAggregateInput = {
    habitStreak?: SortOrder
    pointsValue?: SortOrder
    scheduledDays?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    habitStreak?: SortOrder
    isActive?: SortOrder
    pointsValue?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    habitStreak?: SortOrder
    isActive?: SortOrder
    pointsValue?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type HabitSumOrderByAggregateInput = {
    habitStreak?: SortOrder
    pointsValue?: SortOrder
    scheduledDays?: SortOrder
  }

  export type EnumHabitFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitFrequency | EnumHabitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.HabitFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHabitFrequencyFilter<$PrismaModel>
    _max?: NestedEnumHabitFrequencyFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type HabitScalarRelationFilter = {
    is?: HabitWhereInput
    isNot?: HabitWhereInput
  }

  export type HabitLogHabitIdLogDateCompoundUniqueInput = {
    habitId: string
    logDate: Date | string
  }

  export type HabitLogCountOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    habitId?: SortOrder
    logDate?: SortOrder
    pointsEarned?: SortOrder
    userId?: SortOrder
  }

  export type HabitLogAvgOrderByAggregateInput = {
    pointsEarned?: SortOrder
  }

  export type HabitLogMaxOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    habitId?: SortOrder
    logDate?: SortOrder
    pointsEarned?: SortOrder
    userId?: SortOrder
  }

  export type HabitLogMinOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    habitId?: SortOrder
    logDate?: SortOrder
    pointsEarned?: SortOrder
    userId?: SortOrder
  }

  export type HabitLogSumOrderByAggregateInput = {
    pointsEarned?: SortOrder
  }

  export type HabitLogCreateNestedManyWithoutProfileInput = {
    create?: XOR<HabitLogCreateWithoutProfileInput, HabitLogUncheckedCreateWithoutProfileInput> | HabitLogCreateWithoutProfileInput[] | HabitLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutProfileInput | HabitLogCreateOrConnectWithoutProfileInput[]
    createMany?: HabitLogCreateManyProfileInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type HabitCreateNestedManyWithoutProfileInput = {
    create?: XOR<HabitCreateWithoutProfileInput, HabitUncheckedCreateWithoutProfileInput> | HabitCreateWithoutProfileInput[] | HabitUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutProfileInput | HabitCreateOrConnectWithoutProfileInput[]
    createMany?: HabitCreateManyProfileInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type HabitLogUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<HabitLogCreateWithoutProfileInput, HabitLogUncheckedCreateWithoutProfileInput> | HabitLogCreateWithoutProfileInput[] | HabitLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutProfileInput | HabitLogCreateOrConnectWithoutProfileInput[]
    createMany?: HabitLogCreateManyProfileInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type HabitUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<HabitCreateWithoutProfileInput, HabitUncheckedCreateWithoutProfileInput> | HabitCreateWithoutProfileInput[] | HabitUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutProfileInput | HabitCreateOrConnectWithoutProfileInput[]
    createMany?: HabitCreateManyProfileInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HabitLogUpdateManyWithoutProfileNestedInput = {
    create?: XOR<HabitLogCreateWithoutProfileInput, HabitLogUncheckedCreateWithoutProfileInput> | HabitLogCreateWithoutProfileInput[] | HabitLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutProfileInput | HabitLogCreateOrConnectWithoutProfileInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutProfileInput | HabitLogUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: HabitLogCreateManyProfileInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutProfileInput | HabitLogUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutProfileInput | HabitLogUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HabitUpdateManyWithoutProfileNestedInput = {
    create?: XOR<HabitCreateWithoutProfileInput, HabitUncheckedCreateWithoutProfileInput> | HabitCreateWithoutProfileInput[] | HabitUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutProfileInput | HabitCreateOrConnectWithoutProfileInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutProfileInput | HabitUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: HabitCreateManyProfileInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutProfileInput | HabitUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutProfileInput | HabitUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type HabitLogUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<HabitLogCreateWithoutProfileInput, HabitLogUncheckedCreateWithoutProfileInput> | HabitLogCreateWithoutProfileInput[] | HabitLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutProfileInput | HabitLogCreateOrConnectWithoutProfileInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutProfileInput | HabitLogUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: HabitLogCreateManyProfileInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutProfileInput | HabitLogUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutProfileInput | HabitLogUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HabitUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<HabitCreateWithoutProfileInput, HabitUncheckedCreateWithoutProfileInput> | HabitCreateWithoutProfileInput[] | HabitUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutProfileInput | HabitCreateOrConnectWithoutProfileInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutProfileInput | HabitUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: HabitCreateManyProfileInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutProfileInput | HabitUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutProfileInput | HabitUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type HabitCreatescheduledDaysInput = {
    set: number[]
  }

  export type HabitLogCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutHabitsInput = {
    create?: XOR<ProfileCreateWithoutHabitsInput, ProfileUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutHabitsInput
    connect?: ProfileWhereUniqueInput
  }

  export type HabitLogUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type EnumHabitFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.HabitFrequency
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type HabitUpdatescheduledDaysInput = {
    set?: number[]
    push?: number | number[]
  }

  export type HabitLogUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitInput | HabitLogUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitInput | HabitLogUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitInput | HabitLogUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type ProfileUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<ProfileCreateWithoutHabitsInput, ProfileUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutHabitsInput
    upsert?: ProfileUpsertWithoutHabitsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutHabitsInput, ProfileUpdateWithoutHabitsInput>, ProfileUncheckedUpdateWithoutHabitsInput>
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitInput | HabitLogUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitInput | HabitLogUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitInput | HabitLogUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HabitCreateNestedOneWithoutLogsInput = {
    create?: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutLogsInput
    connect?: HabitWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutHabitLogsInput = {
    create?: XOR<ProfileCreateWithoutHabitLogsInput, ProfileUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutHabitLogsInput
    connect?: ProfileWhereUniqueInput
  }

  export type HabitUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutLogsInput
    upsert?: HabitUpsertWithoutLogsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutLogsInput, HabitUpdateWithoutLogsInput>, HabitUncheckedUpdateWithoutLogsInput>
  }

  export type ProfileUpdateOneRequiredWithoutHabitLogsNestedInput = {
    create?: XOR<ProfileCreateWithoutHabitLogsInput, ProfileUncheckedCreateWithoutHabitLogsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutHabitLogsInput
    upsert?: ProfileUpsertWithoutHabitLogsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutHabitLogsInput, ProfileUpdateWithoutHabitLogsInput>, ProfileUncheckedUpdateWithoutHabitLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumHabitFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitFrequency | EnumHabitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitFrequencyFilter<$PrismaModel> | $Enums.HabitFrequency
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumHabitFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HabitFrequency | EnumHabitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.HabitFrequency[] | ListEnumHabitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumHabitFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.HabitFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHabitFrequencyFilter<$PrismaModel>
    _max?: NestedEnumHabitFrequencyFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type HabitLogCreateWithoutProfileInput = {
    id?: string
    completed?: boolean
    createdAt?: Date | string
    logDate: Date | string
    pointsEarned?: number
    habit: HabitCreateNestedOneWithoutLogsInput
  }

  export type HabitLogUncheckedCreateWithoutProfileInput = {
    id?: string
    completed?: boolean
    createdAt?: Date | string
    habitId: string
    logDate: Date | string
    pointsEarned?: number
  }

  export type HabitLogCreateOrConnectWithoutProfileInput = {
    where: HabitLogWhereUniqueInput
    create: XOR<HabitLogCreateWithoutProfileInput, HabitLogUncheckedCreateWithoutProfileInput>
  }

  export type HabitLogCreateManyProfileInputEnvelope = {
    data: HabitLogCreateManyProfileInput | HabitLogCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type HabitCreateWithoutProfileInput = {
    id?: string
    name: string
    description?: string | null
    frequency?: $Enums.HabitFrequency
    createdAt?: Date | string
    habitStreak?: number
    isActive?: boolean
    pointsValue?: number
    scheduledDays?: HabitCreatescheduledDaysInput | number[]
    updatedAt?: Date | string
    logs?: HabitLogCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    description?: string | null
    frequency?: $Enums.HabitFrequency
    createdAt?: Date | string
    habitStreak?: number
    isActive?: boolean
    pointsValue?: number
    scheduledDays?: HabitCreatescheduledDaysInput | number[]
    updatedAt?: Date | string
    logs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutProfileInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutProfileInput, HabitUncheckedCreateWithoutProfileInput>
  }

  export type HabitCreateManyProfileInputEnvelope = {
    data: HabitCreateManyProfileInput | HabitCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type HabitLogUpsertWithWhereUniqueWithoutProfileInput = {
    where: HabitLogWhereUniqueInput
    update: XOR<HabitLogUpdateWithoutProfileInput, HabitLogUncheckedUpdateWithoutProfileInput>
    create: XOR<HabitLogCreateWithoutProfileInput, HabitLogUncheckedCreateWithoutProfileInput>
  }

  export type HabitLogUpdateWithWhereUniqueWithoutProfileInput = {
    where: HabitLogWhereUniqueInput
    data: XOR<HabitLogUpdateWithoutProfileInput, HabitLogUncheckedUpdateWithoutProfileInput>
  }

  export type HabitLogUpdateManyWithWhereWithoutProfileInput = {
    where: HabitLogScalarWhereInput
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyWithoutProfileInput>
  }

  export type HabitLogScalarWhereInput = {
    AND?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    OR?: HabitLogScalarWhereInput[]
    NOT?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    id?: StringFilter<"HabitLog"> | string
    completed?: BoolFilter<"HabitLog"> | boolean
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
    habitId?: StringFilter<"HabitLog"> | string
    logDate?: DateTimeFilter<"HabitLog"> | Date | string
    pointsEarned?: IntFilter<"HabitLog"> | number
    userId?: StringFilter<"HabitLog"> | string
  }

  export type HabitUpsertWithWhereUniqueWithoutProfileInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutProfileInput, HabitUncheckedUpdateWithoutProfileInput>
    create: XOR<HabitCreateWithoutProfileInput, HabitUncheckedCreateWithoutProfileInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutProfileInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutProfileInput, HabitUncheckedUpdateWithoutProfileInput>
  }

  export type HabitUpdateManyWithWhereWithoutProfileInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutProfileInput>
  }

  export type HabitScalarWhereInput = {
    AND?: HabitScalarWhereInput | HabitScalarWhereInput[]
    OR?: HabitScalarWhereInput[]
    NOT?: HabitScalarWhereInput | HabitScalarWhereInput[]
    id?: StringFilter<"Habit"> | string
    name?: StringFilter<"Habit"> | string
    description?: StringNullableFilter<"Habit"> | string | null
    frequency?: EnumHabitFrequencyFilter<"Habit"> | $Enums.HabitFrequency
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    habitStreak?: IntFilter<"Habit"> | number
    isActive?: BoolFilter<"Habit"> | boolean
    pointsValue?: IntFilter<"Habit"> | number
    scheduledDays?: IntNullableListFilter<"Habit">
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    userId?: StringFilter<"Habit"> | string
  }

  export type HabitLogCreateWithoutHabitInput = {
    id?: string
    completed?: boolean
    createdAt?: Date | string
    logDate: Date | string
    pointsEarned?: number
    profile: ProfileCreateNestedOneWithoutHabitLogsInput
  }

  export type HabitLogUncheckedCreateWithoutHabitInput = {
    id?: string
    completed?: boolean
    createdAt?: Date | string
    logDate: Date | string
    pointsEarned?: number
    userId: string
  }

  export type HabitLogCreateOrConnectWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    create: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput>
  }

  export type HabitLogCreateManyHabitInputEnvelope = {
    data: HabitLogCreateManyHabitInput | HabitLogCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutHabitsInput = {
    id?: string
    email?: string | null
    phoneNumber?: number | null
    password: string
    username: string
    name?: string | null
    age?: number | null
    city?: string | null
    timezone?: string
    appStreak?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrl?: string | null
    habitLogs?: HabitLogCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutHabitsInput = {
    id?: string
    email?: string | null
    phoneNumber?: number | null
    password: string
    username: string
    name?: string | null
    age?: number | null
    city?: string | null
    timezone?: string
    appStreak?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrl?: string | null
    habitLogs?: HabitLogUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutHabitsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutHabitsInput, ProfileUncheckedCreateWithoutHabitsInput>
  }

  export type HabitLogUpsertWithWhereUniqueWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    update: XOR<HabitLogUpdateWithoutHabitInput, HabitLogUncheckedUpdateWithoutHabitInput>
    create: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput>
  }

  export type HabitLogUpdateWithWhereUniqueWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    data: XOR<HabitLogUpdateWithoutHabitInput, HabitLogUncheckedUpdateWithoutHabitInput>
  }

  export type HabitLogUpdateManyWithWhereWithoutHabitInput = {
    where: HabitLogScalarWhereInput
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyWithoutHabitInput>
  }

  export type ProfileUpsertWithoutHabitsInput = {
    update: XOR<ProfileUpdateWithoutHabitsInput, ProfileUncheckedUpdateWithoutHabitsInput>
    create: XOR<ProfileCreateWithoutHabitsInput, ProfileUncheckedCreateWithoutHabitsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutHabitsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutHabitsInput, ProfileUncheckedUpdateWithoutHabitsInput>
  }

  export type ProfileUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    appStreak?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitLogs?: HabitLogUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    appStreak?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habitLogs?: HabitLogUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type HabitCreateWithoutLogsInput = {
    id?: string
    name: string
    description?: string | null
    frequency?: $Enums.HabitFrequency
    createdAt?: Date | string
    habitStreak?: number
    isActive?: boolean
    pointsValue?: number
    scheduledDays?: HabitCreatescheduledDaysInput | number[]
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutHabitsInput
  }

  export type HabitUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    description?: string | null
    frequency?: $Enums.HabitFrequency
    createdAt?: Date | string
    habitStreak?: number
    isActive?: boolean
    pointsValue?: number
    scheduledDays?: HabitCreatescheduledDaysInput | number[]
    updatedAt?: Date | string
    userId: string
  }

  export type HabitCreateOrConnectWithoutLogsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
  }

  export type ProfileCreateWithoutHabitLogsInput = {
    id?: string
    email?: string | null
    phoneNumber?: number | null
    password: string
    username: string
    name?: string | null
    age?: number | null
    city?: string | null
    timezone?: string
    appStreak?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrl?: string | null
    habits?: HabitCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutHabitLogsInput = {
    id?: string
    email?: string | null
    phoneNumber?: number | null
    password: string
    username: string
    name?: string | null
    age?: number | null
    city?: string | null
    timezone?: string
    appStreak?: number
    totalScore?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photoUrl?: string | null
    habits?: HabitUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutHabitLogsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutHabitLogsInput, ProfileUncheckedCreateWithoutHabitLogsInput>
  }

  export type HabitUpsertWithoutLogsInput = {
    update: XOR<HabitUpdateWithoutLogsInput, HabitUncheckedUpdateWithoutLogsInput>
    create: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutLogsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutLogsInput, HabitUncheckedUpdateWithoutLogsInput>
  }

  export type HabitUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pointsValue?: IntFieldUpdateOperationsInput | number
    scheduledDays?: HabitUpdatescheduledDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type HabitUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pointsValue?: IntFieldUpdateOperationsInput | number
    scheduledDays?: HabitUpdatescheduledDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileUpsertWithoutHabitLogsInput = {
    update: XOR<ProfileUpdateWithoutHabitLogsInput, ProfileUncheckedUpdateWithoutHabitLogsInput>
    create: XOR<ProfileCreateWithoutHabitLogsInput, ProfileUncheckedCreateWithoutHabitLogsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutHabitLogsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutHabitLogsInput, ProfileUncheckedUpdateWithoutHabitLogsInput>
  }

  export type ProfileUpdateWithoutHabitLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    appStreak?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: HabitUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutHabitLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableIntFieldUpdateOperationsInput | number | null
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    appStreak?: IntFieldUpdateOperationsInput | number
    totalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: HabitUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type HabitLogCreateManyProfileInput = {
    id?: string
    completed?: boolean
    createdAt?: Date | string
    habitId: string
    logDate: Date | string
    pointsEarned?: number
  }

  export type HabitCreateManyProfileInput = {
    id?: string
    name: string
    description?: string | null
    frequency?: $Enums.HabitFrequency
    createdAt?: Date | string
    habitStreak?: number
    isActive?: boolean
    pointsValue?: number
    scheduledDays?: HabitCreatescheduledDaysInput | number[]
    updatedAt?: Date | string
  }

  export type HabitLogUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    habit?: HabitUpdateOneRequiredWithoutLogsNestedInput
  }

  export type HabitLogUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
  }

  export type HabitLogUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: StringFieldUpdateOperationsInput | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
  }

  export type HabitUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pointsValue?: IntFieldUpdateOperationsInput | number
    scheduledDays?: HabitUpdatescheduledDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: HabitLogUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pointsValue?: IntFieldUpdateOperationsInput | number
    scheduledDays?: HabitUpdatescheduledDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: EnumHabitFrequencyFieldUpdateOperationsInput | $Enums.HabitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitStreak?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    pointsValue?: IntFieldUpdateOperationsInput | number
    scheduledDays?: HabitUpdatescheduledDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogCreateManyHabitInput = {
    id?: string
    completed?: boolean
    createdAt?: Date | string
    logDate: Date | string
    pointsEarned?: number
    userId: string
  }

  export type HabitLogUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUpdateOneRequiredWithoutHabitLogsNestedInput
  }

  export type HabitLogUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsEarned?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}