
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ApexOneLog
 * 
 */
export type ApexOneLog = $Result.DefaultSelection<Prisma.$ApexOneLogPayload>
/**
 * Model WhitelistedDomain
 * 
 */
export type WhitelistedDomain = $Result.DefaultSelection<Prisma.$WhitelistedDomainPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model DomainCategory
 * 
 */
export type DomainCategory = $Result.DefaultSelection<Prisma.$DomainCategoryPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Compliance
 * 
 */
export type Compliance = $Result.DefaultSelection<Prisma.$CompliancePayload>
/**
 * Model AccessLog
 * 
 */
export type AccessLog = $Result.DefaultSelection<Prisma.$AccessLogPayload>
/**
 * Model DomainReputation
 * 
 */
export type DomainReputation = $Result.DefaultSelection<Prisma.$DomainReputationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  SECURITY_OFFICER: 'SECURITY_OFFICER',
  AUDITOR: 'AUDITOR',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const RiskLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel]


export const DataClass: {
  PUBLIC: 'PUBLIC',
  INTERNAL: 'INTERNAL',
  CONFIDENTIAL: 'CONFIDENTIAL',
  RESTRICTED: 'RESTRICTED'
};

export type DataClass = (typeof DataClass)[keyof typeof DataClass]


export const AuditAction: {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  UPDATE: 'UPDATE',
  DEACTIVATE: 'DEACTIVATE',
  ACCESS: 'ACCESS',
  VERIFY: 'VERIFY'
};

export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type RiskLevel = $Enums.RiskLevel

export const RiskLevel: typeof $Enums.RiskLevel

export type DataClass = $Enums.DataClass

export const DataClass: typeof $Enums.DataClass

export type AuditAction = $Enums.AuditAction

export const AuditAction: typeof $Enums.AuditAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ApexOneLogs
 * const apexOneLogs = await prisma.apexOneLog.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ApexOneLogs
   * const apexOneLogs = await prisma.apexOneLog.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.apexOneLog`: Exposes CRUD operations for the **ApexOneLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApexOneLogs
    * const apexOneLogs = await prisma.apexOneLog.findMany()
    * ```
    */
  get apexOneLog(): Prisma.ApexOneLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whitelistedDomain`: Exposes CRUD operations for the **WhitelistedDomain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhitelistedDomains
    * const whitelistedDomains = await prisma.whitelistedDomain.findMany()
    * ```
    */
  get whitelistedDomain(): Prisma.WhitelistedDomainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.domainCategory`: Exposes CRUD operations for the **DomainCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DomainCategories
    * const domainCategories = await prisma.domainCategory.findMany()
    * ```
    */
  get domainCategory(): Prisma.DomainCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compliance`: Exposes CRUD operations for the **Compliance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compliances
    * const compliances = await prisma.compliance.findMany()
    * ```
    */
  get compliance(): Prisma.ComplianceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessLog`: Exposes CRUD operations for the **AccessLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessLogs
    * const accessLogs = await prisma.accessLog.findMany()
    * ```
    */
  get accessLog(): Prisma.AccessLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.domainReputation`: Exposes CRUD operations for the **DomainReputation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DomainReputations
    * const domainReputations = await prisma.domainReputation.findMany()
    * ```
    */
  get domainReputation(): Prisma.DomainReputationDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    ApexOneLog: 'ApexOneLog',
    WhitelistedDomain: 'WhitelistedDomain',
    AuditLog: 'AuditLog',
    DomainCategory: 'DomainCategory',
    User: 'User',
    Session: 'Session',
    Compliance: 'Compliance',
    AccessLog: 'AccessLog',
    DomainReputation: 'DomainReputation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "apexOneLog" | "whitelistedDomain" | "auditLog" | "domainCategory" | "user" | "session" | "compliance" | "accessLog" | "domainReputation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ApexOneLog: {
        payload: Prisma.$ApexOneLogPayload<ExtArgs>
        fields: Prisma.ApexOneLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApexOneLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApexOneLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApexOneLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApexOneLogPayload>
          }
          findFirst: {
            args: Prisma.ApexOneLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApexOneLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApexOneLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApexOneLogPayload>
          }
          findMany: {
            args: Prisma.ApexOneLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApexOneLogPayload>[]
          }
          create: {
            args: Prisma.ApexOneLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApexOneLogPayload>
          }
          createMany: {
            args: Prisma.ApexOneLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApexOneLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApexOneLogPayload>[]
          }
          delete: {
            args: Prisma.ApexOneLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApexOneLogPayload>
          }
          update: {
            args: Prisma.ApexOneLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApexOneLogPayload>
          }
          deleteMany: {
            args: Prisma.ApexOneLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApexOneLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApexOneLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApexOneLogPayload>[]
          }
          upsert: {
            args: Prisma.ApexOneLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApexOneLogPayload>
          }
          aggregate: {
            args: Prisma.ApexOneLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApexOneLog>
          }
          groupBy: {
            args: Prisma.ApexOneLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApexOneLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApexOneLogCountArgs<ExtArgs>
            result: $Utils.Optional<ApexOneLogCountAggregateOutputType> | number
          }
        }
      }
      WhitelistedDomain: {
        payload: Prisma.$WhitelistedDomainPayload<ExtArgs>
        fields: Prisma.WhitelistedDomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhitelistedDomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistedDomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhitelistedDomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistedDomainPayload>
          }
          findFirst: {
            args: Prisma.WhitelistedDomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistedDomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhitelistedDomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistedDomainPayload>
          }
          findMany: {
            args: Prisma.WhitelistedDomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistedDomainPayload>[]
          }
          create: {
            args: Prisma.WhitelistedDomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistedDomainPayload>
          }
          createMany: {
            args: Prisma.WhitelistedDomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhitelistedDomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistedDomainPayload>[]
          }
          delete: {
            args: Prisma.WhitelistedDomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistedDomainPayload>
          }
          update: {
            args: Prisma.WhitelistedDomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistedDomainPayload>
          }
          deleteMany: {
            args: Prisma.WhitelistedDomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhitelistedDomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhitelistedDomainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistedDomainPayload>[]
          }
          upsert: {
            args: Prisma.WhitelistedDomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhitelistedDomainPayload>
          }
          aggregate: {
            args: Prisma.WhitelistedDomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhitelistedDomain>
          }
          groupBy: {
            args: Prisma.WhitelistedDomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhitelistedDomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhitelistedDomainCountArgs<ExtArgs>
            result: $Utils.Optional<WhitelistedDomainCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      DomainCategory: {
        payload: Prisma.$DomainCategoryPayload<ExtArgs>
        fields: Prisma.DomainCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainCategoryPayload>
          }
          findFirst: {
            args: Prisma.DomainCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainCategoryPayload>
          }
          findMany: {
            args: Prisma.DomainCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainCategoryPayload>[]
          }
          create: {
            args: Prisma.DomainCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainCategoryPayload>
          }
          createMany: {
            args: Prisma.DomainCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DomainCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainCategoryPayload>[]
          }
          delete: {
            args: Prisma.DomainCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainCategoryPayload>
          }
          update: {
            args: Prisma.DomainCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainCategoryPayload>
          }
          deleteMany: {
            args: Prisma.DomainCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DomainCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DomainCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainCategoryPayload>[]
          }
          upsert: {
            args: Prisma.DomainCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainCategoryPayload>
          }
          aggregate: {
            args: Prisma.DomainCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDomainCategory>
          }
          groupBy: {
            args: Prisma.DomainCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DomainCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<DomainCategoryCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Compliance: {
        payload: Prisma.$CompliancePayload<ExtArgs>
        fields: Prisma.ComplianceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplianceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompliancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplianceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompliancePayload>
          }
          findFirst: {
            args: Prisma.ComplianceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompliancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplianceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompliancePayload>
          }
          findMany: {
            args: Prisma.ComplianceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompliancePayload>[]
          }
          create: {
            args: Prisma.ComplianceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompliancePayload>
          }
          createMany: {
            args: Prisma.ComplianceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComplianceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompliancePayload>[]
          }
          delete: {
            args: Prisma.ComplianceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompliancePayload>
          }
          update: {
            args: Prisma.ComplianceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompliancePayload>
          }
          deleteMany: {
            args: Prisma.ComplianceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplianceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComplianceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompliancePayload>[]
          }
          upsert: {
            args: Prisma.ComplianceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompliancePayload>
          }
          aggregate: {
            args: Prisma.ComplianceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompliance>
          }
          groupBy: {
            args: Prisma.ComplianceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplianceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplianceCountArgs<ExtArgs>
            result: $Utils.Optional<ComplianceCountAggregateOutputType> | number
          }
        }
      }
      AccessLog: {
        payload: Prisma.$AccessLogPayload<ExtArgs>
        fields: Prisma.AccessLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          findFirst: {
            args: Prisma.AccessLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          findMany: {
            args: Prisma.AccessLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>[]
          }
          create: {
            args: Prisma.AccessLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          createMany: {
            args: Prisma.AccessLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>[]
          }
          delete: {
            args: Prisma.AccessLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          update: {
            args: Prisma.AccessLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          deleteMany: {
            args: Prisma.AccessLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>[]
          }
          upsert: {
            args: Prisma.AccessLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          aggregate: {
            args: Prisma.AccessLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessLog>
          }
          groupBy: {
            args: Prisma.AccessLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessLogCountArgs<ExtArgs>
            result: $Utils.Optional<AccessLogCountAggregateOutputType> | number
          }
        }
      }
      DomainReputation: {
        payload: Prisma.$DomainReputationPayload<ExtArgs>
        fields: Prisma.DomainReputationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainReputationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainReputationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainReputationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainReputationPayload>
          }
          findFirst: {
            args: Prisma.DomainReputationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainReputationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainReputationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainReputationPayload>
          }
          findMany: {
            args: Prisma.DomainReputationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainReputationPayload>[]
          }
          create: {
            args: Prisma.DomainReputationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainReputationPayload>
          }
          createMany: {
            args: Prisma.DomainReputationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DomainReputationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainReputationPayload>[]
          }
          delete: {
            args: Prisma.DomainReputationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainReputationPayload>
          }
          update: {
            args: Prisma.DomainReputationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainReputationPayload>
          }
          deleteMany: {
            args: Prisma.DomainReputationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DomainReputationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DomainReputationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainReputationPayload>[]
          }
          upsert: {
            args: Prisma.DomainReputationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainReputationPayload>
          }
          aggregate: {
            args: Prisma.DomainReputationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDomainReputation>
          }
          groupBy: {
            args: Prisma.DomainReputationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DomainReputationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainReputationCountArgs<ExtArgs>
            result: $Utils.Optional<DomainReputationCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    apexOneLog?: ApexOneLogOmit
    whitelistedDomain?: WhitelistedDomainOmit
    auditLog?: AuditLogOmit
    domainCategory?: DomainCategoryOmit
    user?: UserOmit
    session?: SessionOmit
    compliance?: ComplianceOmit
    accessLog?: AccessLogOmit
    domainReputation?: DomainReputationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type WhitelistedDomainCountOutputType
   */

  export type WhitelistedDomainCountOutputType = {
    auditLogs: number
    accessLogs: number
    compliance: number
    apexOneLogs: number
  }

  export type WhitelistedDomainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | WhitelistedDomainCountOutputTypeCountAuditLogsArgs
    accessLogs?: boolean | WhitelistedDomainCountOutputTypeCountAccessLogsArgs
    compliance?: boolean | WhitelistedDomainCountOutputTypeCountComplianceArgs
    apexOneLogs?: boolean | WhitelistedDomainCountOutputTypeCountApexOneLogsArgs
  }

  // Custom InputTypes
  /**
   * WhitelistedDomainCountOutputType without action
   */
  export type WhitelistedDomainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomainCountOutputType
     */
    select?: WhitelistedDomainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WhitelistedDomainCountOutputType without action
   */
  export type WhitelistedDomainCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * WhitelistedDomainCountOutputType without action
   */
  export type WhitelistedDomainCountOutputTypeCountAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessLogWhereInput
  }

  /**
   * WhitelistedDomainCountOutputType without action
   */
  export type WhitelistedDomainCountOutputTypeCountComplianceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplianceWhereInput
  }

  /**
   * WhitelistedDomainCountOutputType without action
   */
  export type WhitelistedDomainCountOutputTypeCountApexOneLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApexOneLogWhereInput
  }


  /**
   * Count Type DomainCategoryCountOutputType
   */

  export type DomainCategoryCountOutputType = {
    compliance: number
  }

  export type DomainCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compliance?: boolean | DomainCategoryCountOutputTypeCountComplianceArgs
  }

  // Custom InputTypes
  /**
   * DomainCategoryCountOutputType without action
   */
  export type DomainCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategoryCountOutputType
     */
    select?: DomainCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DomainCategoryCountOutputType without action
   */
  export type DomainCategoryCountOutputTypeCountComplianceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplianceWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    auditLogs: number
    accessLogs: number
    apexOneLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    accessLogs?: boolean | UserCountOutputTypeCountAccessLogsArgs
    apexOneLogs?: boolean | UserCountOutputTypeCountApexOneLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApexOneLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApexOneLogWhereInput
  }


  /**
   * Count Type ComplianceCountOutputType
   */

  export type ComplianceCountOutputType = {
    domains: number
    categories: number
  }

  export type ComplianceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domains?: boolean | ComplianceCountOutputTypeCountDomainsArgs
    categories?: boolean | ComplianceCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * ComplianceCountOutputType without action
   */
  export type ComplianceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplianceCountOutputType
     */
    select?: ComplianceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComplianceCountOutputType without action
   */
  export type ComplianceCountOutputTypeCountDomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhitelistedDomainWhereInput
  }

  /**
   * ComplianceCountOutputType without action
   */
  export type ComplianceCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ApexOneLog
   */

  export type AggregateApexOneLog = {
    _count: ApexOneLogCountAggregateOutputType | null
    _avg: ApexOneLogAvgAggregateOutputType | null
    _sum: ApexOneLogSumAggregateOutputType | null
    _min: ApexOneLogMinAggregateOutputType | null
    _max: ApexOneLogMaxAggregateOutputType | null
  }

  export type ApexOneLogAvgAggregateOutputType = {
    id: number | null
    domainId: number | null
    userId: number | null
  }

  export type ApexOneLogSumAggregateOutputType = {
    id: number | null
    domainId: number | null
    userId: number | null
  }

  export type ApexOneLogMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    eventType: string | null
    severity: string | null
    sourceIP: string | null
    destinationIP: string | null
    domainName: string | null
    filePath: string | null
    fileName: string | null
    fileHash: string | null
    action: string | null
    details: string | null
    status: string | null
    assignedTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    domainId: number | null
    userId: number | null
  }

  export type ApexOneLogMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    eventType: string | null
    severity: string | null
    sourceIP: string | null
    destinationIP: string | null
    domainName: string | null
    filePath: string | null
    fileName: string | null
    fileHash: string | null
    action: string | null
    details: string | null
    status: string | null
    assignedTo: string | null
    createdAt: Date | null
    updatedAt: Date | null
    domainId: number | null
    userId: number | null
  }

  export type ApexOneLogCountAggregateOutputType = {
    id: number
    timestamp: number
    eventType: number
    severity: number
    sourceIP: number
    destinationIP: number
    domainName: number
    filePath: number
    fileName: number
    fileHash: number
    action: number
    details: number
    status: number
    assignedTo: number
    createdAt: number
    updatedAt: number
    domainId: number
    userId: number
    _all: number
  }


  export type ApexOneLogAvgAggregateInputType = {
    id?: true
    domainId?: true
    userId?: true
  }

  export type ApexOneLogSumAggregateInputType = {
    id?: true
    domainId?: true
    userId?: true
  }

  export type ApexOneLogMinAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    severity?: true
    sourceIP?: true
    destinationIP?: true
    domainName?: true
    filePath?: true
    fileName?: true
    fileHash?: true
    action?: true
    details?: true
    status?: true
    assignedTo?: true
    createdAt?: true
    updatedAt?: true
    domainId?: true
    userId?: true
  }

  export type ApexOneLogMaxAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    severity?: true
    sourceIP?: true
    destinationIP?: true
    domainName?: true
    filePath?: true
    fileName?: true
    fileHash?: true
    action?: true
    details?: true
    status?: true
    assignedTo?: true
    createdAt?: true
    updatedAt?: true
    domainId?: true
    userId?: true
  }

  export type ApexOneLogCountAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    severity?: true
    sourceIP?: true
    destinationIP?: true
    domainName?: true
    filePath?: true
    fileName?: true
    fileHash?: true
    action?: true
    details?: true
    status?: true
    assignedTo?: true
    createdAt?: true
    updatedAt?: true
    domainId?: true
    userId?: true
    _all?: true
  }

  export type ApexOneLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApexOneLog to aggregate.
     */
    where?: ApexOneLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApexOneLogs to fetch.
     */
    orderBy?: ApexOneLogOrderByWithRelationInput | ApexOneLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApexOneLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApexOneLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApexOneLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApexOneLogs
    **/
    _count?: true | ApexOneLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApexOneLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApexOneLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApexOneLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApexOneLogMaxAggregateInputType
  }

  export type GetApexOneLogAggregateType<T extends ApexOneLogAggregateArgs> = {
        [P in keyof T & keyof AggregateApexOneLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApexOneLog[P]>
      : GetScalarType<T[P], AggregateApexOneLog[P]>
  }




  export type ApexOneLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApexOneLogWhereInput
    orderBy?: ApexOneLogOrderByWithAggregationInput | ApexOneLogOrderByWithAggregationInput[]
    by: ApexOneLogScalarFieldEnum[] | ApexOneLogScalarFieldEnum
    having?: ApexOneLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApexOneLogCountAggregateInputType | true
    _avg?: ApexOneLogAvgAggregateInputType
    _sum?: ApexOneLogSumAggregateInputType
    _min?: ApexOneLogMinAggregateInputType
    _max?: ApexOneLogMaxAggregateInputType
  }

  export type ApexOneLogGroupByOutputType = {
    id: number
    timestamp: Date
    eventType: string
    severity: string
    sourceIP: string
    destinationIP: string | null
    domainName: string | null
    filePath: string | null
    fileName: string | null
    fileHash: string | null
    action: string
    details: string | null
    status: string
    assignedTo: string | null
    createdAt: Date
    updatedAt: Date
    domainId: number | null
    userId: number | null
    _count: ApexOneLogCountAggregateOutputType | null
    _avg: ApexOneLogAvgAggregateOutputType | null
    _sum: ApexOneLogSumAggregateOutputType | null
    _min: ApexOneLogMinAggregateOutputType | null
    _max: ApexOneLogMaxAggregateOutputType | null
  }

  type GetApexOneLogGroupByPayload<T extends ApexOneLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApexOneLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApexOneLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApexOneLogGroupByOutputType[P]>
            : GetScalarType<T[P], ApexOneLogGroupByOutputType[P]>
        }
      >
    >


  export type ApexOneLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    severity?: boolean
    sourceIP?: boolean
    destinationIP?: boolean
    domainName?: boolean
    filePath?: boolean
    fileName?: boolean
    fileHash?: boolean
    action?: boolean
    details?: boolean
    status?: boolean
    assignedTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domainId?: boolean
    userId?: boolean
    domain?: boolean | ApexOneLog$domainArgs<ExtArgs>
    user?: boolean | ApexOneLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["apexOneLog"]>

  export type ApexOneLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    severity?: boolean
    sourceIP?: boolean
    destinationIP?: boolean
    domainName?: boolean
    filePath?: boolean
    fileName?: boolean
    fileHash?: boolean
    action?: boolean
    details?: boolean
    status?: boolean
    assignedTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domainId?: boolean
    userId?: boolean
    domain?: boolean | ApexOneLog$domainArgs<ExtArgs>
    user?: boolean | ApexOneLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["apexOneLog"]>

  export type ApexOneLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    severity?: boolean
    sourceIP?: boolean
    destinationIP?: boolean
    domainName?: boolean
    filePath?: boolean
    fileName?: boolean
    fileHash?: boolean
    action?: boolean
    details?: boolean
    status?: boolean
    assignedTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domainId?: boolean
    userId?: boolean
    domain?: boolean | ApexOneLog$domainArgs<ExtArgs>
    user?: boolean | ApexOneLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["apexOneLog"]>

  export type ApexOneLogSelectScalar = {
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    severity?: boolean
    sourceIP?: boolean
    destinationIP?: boolean
    domainName?: boolean
    filePath?: boolean
    fileName?: boolean
    fileHash?: boolean
    action?: boolean
    details?: boolean
    status?: boolean
    assignedTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domainId?: boolean
    userId?: boolean
  }

  export type ApexOneLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "eventType" | "severity" | "sourceIP" | "destinationIP" | "domainName" | "filePath" | "fileName" | "fileHash" | "action" | "details" | "status" | "assignedTo" | "createdAt" | "updatedAt" | "domainId" | "userId", ExtArgs["result"]["apexOneLog"]>
  export type ApexOneLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | ApexOneLog$domainArgs<ExtArgs>
    user?: boolean | ApexOneLog$userArgs<ExtArgs>
  }
  export type ApexOneLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | ApexOneLog$domainArgs<ExtArgs>
    user?: boolean | ApexOneLog$userArgs<ExtArgs>
  }
  export type ApexOneLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | ApexOneLog$domainArgs<ExtArgs>
    user?: boolean | ApexOneLog$userArgs<ExtArgs>
  }

  export type $ApexOneLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApexOneLog"
    objects: {
      domain: Prisma.$WhitelistedDomainPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      eventType: string
      severity: string
      sourceIP: string
      destinationIP: string | null
      domainName: string | null
      filePath: string | null
      fileName: string | null
      fileHash: string | null
      action: string
      details: string | null
      status: string
      assignedTo: string | null
      createdAt: Date
      updatedAt: Date
      domainId: number | null
      userId: number | null
    }, ExtArgs["result"]["apexOneLog"]>
    composites: {}
  }

  type ApexOneLogGetPayload<S extends boolean | null | undefined | ApexOneLogDefaultArgs> = $Result.GetResult<Prisma.$ApexOneLogPayload, S>

  type ApexOneLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApexOneLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApexOneLogCountAggregateInputType | true
    }

  export interface ApexOneLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApexOneLog'], meta: { name: 'ApexOneLog' } }
    /**
     * Find zero or one ApexOneLog that matches the filter.
     * @param {ApexOneLogFindUniqueArgs} args - Arguments to find a ApexOneLog
     * @example
     * // Get one ApexOneLog
     * const apexOneLog = await prisma.apexOneLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApexOneLogFindUniqueArgs>(args: SelectSubset<T, ApexOneLogFindUniqueArgs<ExtArgs>>): Prisma__ApexOneLogClient<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApexOneLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApexOneLogFindUniqueOrThrowArgs} args - Arguments to find a ApexOneLog
     * @example
     * // Get one ApexOneLog
     * const apexOneLog = await prisma.apexOneLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApexOneLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ApexOneLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApexOneLogClient<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApexOneLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApexOneLogFindFirstArgs} args - Arguments to find a ApexOneLog
     * @example
     * // Get one ApexOneLog
     * const apexOneLog = await prisma.apexOneLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApexOneLogFindFirstArgs>(args?: SelectSubset<T, ApexOneLogFindFirstArgs<ExtArgs>>): Prisma__ApexOneLogClient<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApexOneLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApexOneLogFindFirstOrThrowArgs} args - Arguments to find a ApexOneLog
     * @example
     * // Get one ApexOneLog
     * const apexOneLog = await prisma.apexOneLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApexOneLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ApexOneLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApexOneLogClient<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApexOneLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApexOneLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApexOneLogs
     * const apexOneLogs = await prisma.apexOneLog.findMany()
     * 
     * // Get first 10 ApexOneLogs
     * const apexOneLogs = await prisma.apexOneLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apexOneLogWithIdOnly = await prisma.apexOneLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApexOneLogFindManyArgs>(args?: SelectSubset<T, ApexOneLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApexOneLog.
     * @param {ApexOneLogCreateArgs} args - Arguments to create a ApexOneLog.
     * @example
     * // Create one ApexOneLog
     * const ApexOneLog = await prisma.apexOneLog.create({
     *   data: {
     *     // ... data to create a ApexOneLog
     *   }
     * })
     * 
     */
    create<T extends ApexOneLogCreateArgs>(args: SelectSubset<T, ApexOneLogCreateArgs<ExtArgs>>): Prisma__ApexOneLogClient<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApexOneLogs.
     * @param {ApexOneLogCreateManyArgs} args - Arguments to create many ApexOneLogs.
     * @example
     * // Create many ApexOneLogs
     * const apexOneLog = await prisma.apexOneLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApexOneLogCreateManyArgs>(args?: SelectSubset<T, ApexOneLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApexOneLogs and returns the data saved in the database.
     * @param {ApexOneLogCreateManyAndReturnArgs} args - Arguments to create many ApexOneLogs.
     * @example
     * // Create many ApexOneLogs
     * const apexOneLog = await prisma.apexOneLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApexOneLogs and only return the `id`
     * const apexOneLogWithIdOnly = await prisma.apexOneLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApexOneLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ApexOneLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApexOneLog.
     * @param {ApexOneLogDeleteArgs} args - Arguments to delete one ApexOneLog.
     * @example
     * // Delete one ApexOneLog
     * const ApexOneLog = await prisma.apexOneLog.delete({
     *   where: {
     *     // ... filter to delete one ApexOneLog
     *   }
     * })
     * 
     */
    delete<T extends ApexOneLogDeleteArgs>(args: SelectSubset<T, ApexOneLogDeleteArgs<ExtArgs>>): Prisma__ApexOneLogClient<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApexOneLog.
     * @param {ApexOneLogUpdateArgs} args - Arguments to update one ApexOneLog.
     * @example
     * // Update one ApexOneLog
     * const apexOneLog = await prisma.apexOneLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApexOneLogUpdateArgs>(args: SelectSubset<T, ApexOneLogUpdateArgs<ExtArgs>>): Prisma__ApexOneLogClient<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApexOneLogs.
     * @param {ApexOneLogDeleteManyArgs} args - Arguments to filter ApexOneLogs to delete.
     * @example
     * // Delete a few ApexOneLogs
     * const { count } = await prisma.apexOneLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApexOneLogDeleteManyArgs>(args?: SelectSubset<T, ApexOneLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApexOneLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApexOneLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApexOneLogs
     * const apexOneLog = await prisma.apexOneLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApexOneLogUpdateManyArgs>(args: SelectSubset<T, ApexOneLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApexOneLogs and returns the data updated in the database.
     * @param {ApexOneLogUpdateManyAndReturnArgs} args - Arguments to update many ApexOneLogs.
     * @example
     * // Update many ApexOneLogs
     * const apexOneLog = await prisma.apexOneLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApexOneLogs and only return the `id`
     * const apexOneLogWithIdOnly = await prisma.apexOneLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApexOneLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ApexOneLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApexOneLog.
     * @param {ApexOneLogUpsertArgs} args - Arguments to update or create a ApexOneLog.
     * @example
     * // Update or create a ApexOneLog
     * const apexOneLog = await prisma.apexOneLog.upsert({
     *   create: {
     *     // ... data to create a ApexOneLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApexOneLog we want to update
     *   }
     * })
     */
    upsert<T extends ApexOneLogUpsertArgs>(args: SelectSubset<T, ApexOneLogUpsertArgs<ExtArgs>>): Prisma__ApexOneLogClient<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApexOneLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApexOneLogCountArgs} args - Arguments to filter ApexOneLogs to count.
     * @example
     * // Count the number of ApexOneLogs
     * const count = await prisma.apexOneLog.count({
     *   where: {
     *     // ... the filter for the ApexOneLogs we want to count
     *   }
     * })
    **/
    count<T extends ApexOneLogCountArgs>(
      args?: Subset<T, ApexOneLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApexOneLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApexOneLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApexOneLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApexOneLogAggregateArgs>(args: Subset<T, ApexOneLogAggregateArgs>): Prisma.PrismaPromise<GetApexOneLogAggregateType<T>>

    /**
     * Group by ApexOneLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApexOneLogGroupByArgs} args - Group by arguments.
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
      T extends ApexOneLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApexOneLogGroupByArgs['orderBy'] }
        : { orderBy?: ApexOneLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApexOneLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApexOneLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApexOneLog model
   */
  readonly fields: ApexOneLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApexOneLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApexOneLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends ApexOneLog$domainArgs<ExtArgs> = {}>(args?: Subset<T, ApexOneLog$domainArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends ApexOneLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ApexOneLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApexOneLog model
   */
  interface ApexOneLogFieldRefs {
    readonly id: FieldRef<"ApexOneLog", 'Int'>
    readonly timestamp: FieldRef<"ApexOneLog", 'DateTime'>
    readonly eventType: FieldRef<"ApexOneLog", 'String'>
    readonly severity: FieldRef<"ApexOneLog", 'String'>
    readonly sourceIP: FieldRef<"ApexOneLog", 'String'>
    readonly destinationIP: FieldRef<"ApexOneLog", 'String'>
    readonly domainName: FieldRef<"ApexOneLog", 'String'>
    readonly filePath: FieldRef<"ApexOneLog", 'String'>
    readonly fileName: FieldRef<"ApexOneLog", 'String'>
    readonly fileHash: FieldRef<"ApexOneLog", 'String'>
    readonly action: FieldRef<"ApexOneLog", 'String'>
    readonly details: FieldRef<"ApexOneLog", 'String'>
    readonly status: FieldRef<"ApexOneLog", 'String'>
    readonly assignedTo: FieldRef<"ApexOneLog", 'String'>
    readonly createdAt: FieldRef<"ApexOneLog", 'DateTime'>
    readonly updatedAt: FieldRef<"ApexOneLog", 'DateTime'>
    readonly domainId: FieldRef<"ApexOneLog", 'Int'>
    readonly userId: FieldRef<"ApexOneLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ApexOneLog findUnique
   */
  export type ApexOneLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
    /**
     * Filter, which ApexOneLog to fetch.
     */
    where: ApexOneLogWhereUniqueInput
  }

  /**
   * ApexOneLog findUniqueOrThrow
   */
  export type ApexOneLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
    /**
     * Filter, which ApexOneLog to fetch.
     */
    where: ApexOneLogWhereUniqueInput
  }

  /**
   * ApexOneLog findFirst
   */
  export type ApexOneLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
    /**
     * Filter, which ApexOneLog to fetch.
     */
    where?: ApexOneLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApexOneLogs to fetch.
     */
    orderBy?: ApexOneLogOrderByWithRelationInput | ApexOneLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApexOneLogs.
     */
    cursor?: ApexOneLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApexOneLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApexOneLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApexOneLogs.
     */
    distinct?: ApexOneLogScalarFieldEnum | ApexOneLogScalarFieldEnum[]
  }

  /**
   * ApexOneLog findFirstOrThrow
   */
  export type ApexOneLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
    /**
     * Filter, which ApexOneLog to fetch.
     */
    where?: ApexOneLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApexOneLogs to fetch.
     */
    orderBy?: ApexOneLogOrderByWithRelationInput | ApexOneLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApexOneLogs.
     */
    cursor?: ApexOneLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApexOneLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApexOneLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApexOneLogs.
     */
    distinct?: ApexOneLogScalarFieldEnum | ApexOneLogScalarFieldEnum[]
  }

  /**
   * ApexOneLog findMany
   */
  export type ApexOneLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
    /**
     * Filter, which ApexOneLogs to fetch.
     */
    where?: ApexOneLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApexOneLogs to fetch.
     */
    orderBy?: ApexOneLogOrderByWithRelationInput | ApexOneLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApexOneLogs.
     */
    cursor?: ApexOneLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApexOneLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApexOneLogs.
     */
    skip?: number
    distinct?: ApexOneLogScalarFieldEnum | ApexOneLogScalarFieldEnum[]
  }

  /**
   * ApexOneLog create
   */
  export type ApexOneLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ApexOneLog.
     */
    data: XOR<ApexOneLogCreateInput, ApexOneLogUncheckedCreateInput>
  }

  /**
   * ApexOneLog createMany
   */
  export type ApexOneLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApexOneLogs.
     */
    data: ApexOneLogCreateManyInput | ApexOneLogCreateManyInput[]
  }

  /**
   * ApexOneLog createManyAndReturn
   */
  export type ApexOneLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * The data used to create many ApexOneLogs.
     */
    data: ApexOneLogCreateManyInput | ApexOneLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApexOneLog update
   */
  export type ApexOneLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ApexOneLog.
     */
    data: XOR<ApexOneLogUpdateInput, ApexOneLogUncheckedUpdateInput>
    /**
     * Choose, which ApexOneLog to update.
     */
    where: ApexOneLogWhereUniqueInput
  }

  /**
   * ApexOneLog updateMany
   */
  export type ApexOneLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApexOneLogs.
     */
    data: XOR<ApexOneLogUpdateManyMutationInput, ApexOneLogUncheckedUpdateManyInput>
    /**
     * Filter which ApexOneLogs to update
     */
    where?: ApexOneLogWhereInput
    /**
     * Limit how many ApexOneLogs to update.
     */
    limit?: number
  }

  /**
   * ApexOneLog updateManyAndReturn
   */
  export type ApexOneLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * The data used to update ApexOneLogs.
     */
    data: XOR<ApexOneLogUpdateManyMutationInput, ApexOneLogUncheckedUpdateManyInput>
    /**
     * Filter which ApexOneLogs to update
     */
    where?: ApexOneLogWhereInput
    /**
     * Limit how many ApexOneLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApexOneLog upsert
   */
  export type ApexOneLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ApexOneLog to update in case it exists.
     */
    where: ApexOneLogWhereUniqueInput
    /**
     * In case the ApexOneLog found by the `where` argument doesn't exist, create a new ApexOneLog with this data.
     */
    create: XOR<ApexOneLogCreateInput, ApexOneLogUncheckedCreateInput>
    /**
     * In case the ApexOneLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApexOneLogUpdateInput, ApexOneLogUncheckedUpdateInput>
  }

  /**
   * ApexOneLog delete
   */
  export type ApexOneLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
    /**
     * Filter which ApexOneLog to delete.
     */
    where: ApexOneLogWhereUniqueInput
  }

  /**
   * ApexOneLog deleteMany
   */
  export type ApexOneLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApexOneLogs to delete
     */
    where?: ApexOneLogWhereInput
    /**
     * Limit how many ApexOneLogs to delete.
     */
    limit?: number
  }

  /**
   * ApexOneLog.domain
   */
  export type ApexOneLog$domainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
    where?: WhitelistedDomainWhereInput
  }

  /**
   * ApexOneLog.user
   */
  export type ApexOneLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ApexOneLog without action
   */
  export type ApexOneLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
  }


  /**
   * Model WhitelistedDomain
   */

  export type AggregateWhitelistedDomain = {
    _count: WhitelistedDomainCountAggregateOutputType | null
    _avg: WhitelistedDomainAvgAggregateOutputType | null
    _sum: WhitelistedDomainSumAggregateOutputType | null
    _min: WhitelistedDomainMinAggregateOutputType | null
    _max: WhitelistedDomainMaxAggregateOutputType | null
  }

  export type WhitelistedDomainAvgAggregateOutputType = {
    id: number | null
  }

  export type WhitelistedDomainSumAggregateOutputType = {
    id: number | null
  }

  export type WhitelistedDomainMinAggregateOutputType = {
    id: number | null
    domain: string | null
    category: string | null
    isWildcard: boolean | null
    notes: string | null
    addedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    riskLevel: $Enums.RiskLevel | null
    dataClass: $Enums.DataClass | null
    encryptionKey: string | null
    lastVerified: Date | null
    verifiedBy: string | null
  }

  export type WhitelistedDomainMaxAggregateOutputType = {
    id: number | null
    domain: string | null
    category: string | null
    isWildcard: boolean | null
    notes: string | null
    addedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    riskLevel: $Enums.RiskLevel | null
    dataClass: $Enums.DataClass | null
    encryptionKey: string | null
    lastVerified: Date | null
    verifiedBy: string | null
  }

  export type WhitelistedDomainCountAggregateOutputType = {
    id: number
    domain: number
    category: number
    isWildcard: number
    notes: number
    addedBy: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    isActive: number
    riskLevel: number
    dataClass: number
    encryptionKey: number
    lastVerified: number
    verifiedBy: number
    _all: number
  }


  export type WhitelistedDomainAvgAggregateInputType = {
    id?: true
  }

  export type WhitelistedDomainSumAggregateInputType = {
    id?: true
  }

  export type WhitelistedDomainMinAggregateInputType = {
    id?: true
    domain?: true
    category?: true
    isWildcard?: true
    notes?: true
    addedBy?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    isActive?: true
    riskLevel?: true
    dataClass?: true
    encryptionKey?: true
    lastVerified?: true
    verifiedBy?: true
  }

  export type WhitelistedDomainMaxAggregateInputType = {
    id?: true
    domain?: true
    category?: true
    isWildcard?: true
    notes?: true
    addedBy?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    isActive?: true
    riskLevel?: true
    dataClass?: true
    encryptionKey?: true
    lastVerified?: true
    verifiedBy?: true
  }

  export type WhitelistedDomainCountAggregateInputType = {
    id?: true
    domain?: true
    category?: true
    isWildcard?: true
    notes?: true
    addedBy?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    isActive?: true
    riskLevel?: true
    dataClass?: true
    encryptionKey?: true
    lastVerified?: true
    verifiedBy?: true
    _all?: true
  }

  export type WhitelistedDomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhitelistedDomain to aggregate.
     */
    where?: WhitelistedDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhitelistedDomains to fetch.
     */
    orderBy?: WhitelistedDomainOrderByWithRelationInput | WhitelistedDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhitelistedDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhitelistedDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhitelistedDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhitelistedDomains
    **/
    _count?: true | WhitelistedDomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhitelistedDomainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhitelistedDomainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhitelistedDomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhitelistedDomainMaxAggregateInputType
  }

  export type GetWhitelistedDomainAggregateType<T extends WhitelistedDomainAggregateArgs> = {
        [P in keyof T & keyof AggregateWhitelistedDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhitelistedDomain[P]>
      : GetScalarType<T[P], AggregateWhitelistedDomain[P]>
  }




  export type WhitelistedDomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhitelistedDomainWhereInput
    orderBy?: WhitelistedDomainOrderByWithAggregationInput | WhitelistedDomainOrderByWithAggregationInput[]
    by: WhitelistedDomainScalarFieldEnum[] | WhitelistedDomainScalarFieldEnum
    having?: WhitelistedDomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhitelistedDomainCountAggregateInputType | true
    _avg?: WhitelistedDomainAvgAggregateInputType
    _sum?: WhitelistedDomainSumAggregateInputType
    _min?: WhitelistedDomainMinAggregateInputType
    _max?: WhitelistedDomainMaxAggregateInputType
  }

  export type WhitelistedDomainGroupByOutputType = {
    id: number
    domain: string
    category: string
    isWildcard: boolean
    notes: string | null
    addedBy: string | null
    createdAt: Date
    updatedAt: Date
    expiresAt: Date | null
    isActive: boolean
    riskLevel: $Enums.RiskLevel
    dataClass: $Enums.DataClass
    encryptionKey: string | null
    lastVerified: Date | null
    verifiedBy: string | null
    _count: WhitelistedDomainCountAggregateOutputType | null
    _avg: WhitelistedDomainAvgAggregateOutputType | null
    _sum: WhitelistedDomainSumAggregateOutputType | null
    _min: WhitelistedDomainMinAggregateOutputType | null
    _max: WhitelistedDomainMaxAggregateOutputType | null
  }

  type GetWhitelistedDomainGroupByPayload<T extends WhitelistedDomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhitelistedDomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhitelistedDomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhitelistedDomainGroupByOutputType[P]>
            : GetScalarType<T[P], WhitelistedDomainGroupByOutputType[P]>
        }
      >
    >


  export type WhitelistedDomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    category?: boolean
    isWildcard?: boolean
    notes?: boolean
    addedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    riskLevel?: boolean
    dataClass?: boolean
    encryptionKey?: boolean
    lastVerified?: boolean
    verifiedBy?: boolean
    auditLogs?: boolean | WhitelistedDomain$auditLogsArgs<ExtArgs>
    accessLogs?: boolean | WhitelistedDomain$accessLogsArgs<ExtArgs>
    compliance?: boolean | WhitelistedDomain$complianceArgs<ExtArgs>
    reputation?: boolean | WhitelistedDomain$reputationArgs<ExtArgs>
    apexOneLogs?: boolean | WhitelistedDomain$apexOneLogsArgs<ExtArgs>
    _count?: boolean | WhitelistedDomainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whitelistedDomain"]>

  export type WhitelistedDomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    category?: boolean
    isWildcard?: boolean
    notes?: boolean
    addedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    riskLevel?: boolean
    dataClass?: boolean
    encryptionKey?: boolean
    lastVerified?: boolean
    verifiedBy?: boolean
  }, ExtArgs["result"]["whitelistedDomain"]>

  export type WhitelistedDomainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    category?: boolean
    isWildcard?: boolean
    notes?: boolean
    addedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    riskLevel?: boolean
    dataClass?: boolean
    encryptionKey?: boolean
    lastVerified?: boolean
    verifiedBy?: boolean
  }, ExtArgs["result"]["whitelistedDomain"]>

  export type WhitelistedDomainSelectScalar = {
    id?: boolean
    domain?: boolean
    category?: boolean
    isWildcard?: boolean
    notes?: boolean
    addedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    riskLevel?: boolean
    dataClass?: boolean
    encryptionKey?: boolean
    lastVerified?: boolean
    verifiedBy?: boolean
  }

  export type WhitelistedDomainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domain" | "category" | "isWildcard" | "notes" | "addedBy" | "createdAt" | "updatedAt" | "expiresAt" | "isActive" | "riskLevel" | "dataClass" | "encryptionKey" | "lastVerified" | "verifiedBy", ExtArgs["result"]["whitelistedDomain"]>
  export type WhitelistedDomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | WhitelistedDomain$auditLogsArgs<ExtArgs>
    accessLogs?: boolean | WhitelistedDomain$accessLogsArgs<ExtArgs>
    compliance?: boolean | WhitelistedDomain$complianceArgs<ExtArgs>
    reputation?: boolean | WhitelistedDomain$reputationArgs<ExtArgs>
    apexOneLogs?: boolean | WhitelistedDomain$apexOneLogsArgs<ExtArgs>
    _count?: boolean | WhitelistedDomainCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WhitelistedDomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WhitelistedDomainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WhitelistedDomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhitelistedDomain"
    objects: {
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      accessLogs: Prisma.$AccessLogPayload<ExtArgs>[]
      compliance: Prisma.$CompliancePayload<ExtArgs>[]
      reputation: Prisma.$DomainReputationPayload<ExtArgs> | null
      apexOneLogs: Prisma.$ApexOneLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      category: string
      isWildcard: boolean
      notes: string | null
      addedBy: string | null
      createdAt: Date
      updatedAt: Date
      expiresAt: Date | null
      isActive: boolean
      riskLevel: $Enums.RiskLevel
      dataClass: $Enums.DataClass
      encryptionKey: string | null
      lastVerified: Date | null
      verifiedBy: string | null
    }, ExtArgs["result"]["whitelistedDomain"]>
    composites: {}
  }

  type WhitelistedDomainGetPayload<S extends boolean | null | undefined | WhitelistedDomainDefaultArgs> = $Result.GetResult<Prisma.$WhitelistedDomainPayload, S>

  type WhitelistedDomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhitelistedDomainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhitelistedDomainCountAggregateInputType | true
    }

  export interface WhitelistedDomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhitelistedDomain'], meta: { name: 'WhitelistedDomain' } }
    /**
     * Find zero or one WhitelistedDomain that matches the filter.
     * @param {WhitelistedDomainFindUniqueArgs} args - Arguments to find a WhitelistedDomain
     * @example
     * // Get one WhitelistedDomain
     * const whitelistedDomain = await prisma.whitelistedDomain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhitelistedDomainFindUniqueArgs>(args: SelectSubset<T, WhitelistedDomainFindUniqueArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhitelistedDomain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhitelistedDomainFindUniqueOrThrowArgs} args - Arguments to find a WhitelistedDomain
     * @example
     * // Get one WhitelistedDomain
     * const whitelistedDomain = await prisma.whitelistedDomain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhitelistedDomainFindUniqueOrThrowArgs>(args: SelectSubset<T, WhitelistedDomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhitelistedDomain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistedDomainFindFirstArgs} args - Arguments to find a WhitelistedDomain
     * @example
     * // Get one WhitelistedDomain
     * const whitelistedDomain = await prisma.whitelistedDomain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhitelistedDomainFindFirstArgs>(args?: SelectSubset<T, WhitelistedDomainFindFirstArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhitelistedDomain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistedDomainFindFirstOrThrowArgs} args - Arguments to find a WhitelistedDomain
     * @example
     * // Get one WhitelistedDomain
     * const whitelistedDomain = await prisma.whitelistedDomain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhitelistedDomainFindFirstOrThrowArgs>(args?: SelectSubset<T, WhitelistedDomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhitelistedDomains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistedDomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhitelistedDomains
     * const whitelistedDomains = await prisma.whitelistedDomain.findMany()
     * 
     * // Get first 10 WhitelistedDomains
     * const whitelistedDomains = await prisma.whitelistedDomain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whitelistedDomainWithIdOnly = await prisma.whitelistedDomain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhitelistedDomainFindManyArgs>(args?: SelectSubset<T, WhitelistedDomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhitelistedDomain.
     * @param {WhitelistedDomainCreateArgs} args - Arguments to create a WhitelistedDomain.
     * @example
     * // Create one WhitelistedDomain
     * const WhitelistedDomain = await prisma.whitelistedDomain.create({
     *   data: {
     *     // ... data to create a WhitelistedDomain
     *   }
     * })
     * 
     */
    create<T extends WhitelistedDomainCreateArgs>(args: SelectSubset<T, WhitelistedDomainCreateArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhitelistedDomains.
     * @param {WhitelistedDomainCreateManyArgs} args - Arguments to create many WhitelistedDomains.
     * @example
     * // Create many WhitelistedDomains
     * const whitelistedDomain = await prisma.whitelistedDomain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhitelistedDomainCreateManyArgs>(args?: SelectSubset<T, WhitelistedDomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhitelistedDomains and returns the data saved in the database.
     * @param {WhitelistedDomainCreateManyAndReturnArgs} args - Arguments to create many WhitelistedDomains.
     * @example
     * // Create many WhitelistedDomains
     * const whitelistedDomain = await prisma.whitelistedDomain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhitelistedDomains and only return the `id`
     * const whitelistedDomainWithIdOnly = await prisma.whitelistedDomain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhitelistedDomainCreateManyAndReturnArgs>(args?: SelectSubset<T, WhitelistedDomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhitelistedDomain.
     * @param {WhitelistedDomainDeleteArgs} args - Arguments to delete one WhitelistedDomain.
     * @example
     * // Delete one WhitelistedDomain
     * const WhitelistedDomain = await prisma.whitelistedDomain.delete({
     *   where: {
     *     // ... filter to delete one WhitelistedDomain
     *   }
     * })
     * 
     */
    delete<T extends WhitelistedDomainDeleteArgs>(args: SelectSubset<T, WhitelistedDomainDeleteArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhitelistedDomain.
     * @param {WhitelistedDomainUpdateArgs} args - Arguments to update one WhitelistedDomain.
     * @example
     * // Update one WhitelistedDomain
     * const whitelistedDomain = await prisma.whitelistedDomain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhitelistedDomainUpdateArgs>(args: SelectSubset<T, WhitelistedDomainUpdateArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhitelistedDomains.
     * @param {WhitelistedDomainDeleteManyArgs} args - Arguments to filter WhitelistedDomains to delete.
     * @example
     * // Delete a few WhitelistedDomains
     * const { count } = await prisma.whitelistedDomain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhitelistedDomainDeleteManyArgs>(args?: SelectSubset<T, WhitelistedDomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhitelistedDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistedDomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhitelistedDomains
     * const whitelistedDomain = await prisma.whitelistedDomain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhitelistedDomainUpdateManyArgs>(args: SelectSubset<T, WhitelistedDomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhitelistedDomains and returns the data updated in the database.
     * @param {WhitelistedDomainUpdateManyAndReturnArgs} args - Arguments to update many WhitelistedDomains.
     * @example
     * // Update many WhitelistedDomains
     * const whitelistedDomain = await prisma.whitelistedDomain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhitelistedDomains and only return the `id`
     * const whitelistedDomainWithIdOnly = await prisma.whitelistedDomain.updateManyAndReturn({
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
    updateManyAndReturn<T extends WhitelistedDomainUpdateManyAndReturnArgs>(args: SelectSubset<T, WhitelistedDomainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhitelistedDomain.
     * @param {WhitelistedDomainUpsertArgs} args - Arguments to update or create a WhitelistedDomain.
     * @example
     * // Update or create a WhitelistedDomain
     * const whitelistedDomain = await prisma.whitelistedDomain.upsert({
     *   create: {
     *     // ... data to create a WhitelistedDomain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhitelistedDomain we want to update
     *   }
     * })
     */
    upsert<T extends WhitelistedDomainUpsertArgs>(args: SelectSubset<T, WhitelistedDomainUpsertArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhitelistedDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistedDomainCountArgs} args - Arguments to filter WhitelistedDomains to count.
     * @example
     * // Count the number of WhitelistedDomains
     * const count = await prisma.whitelistedDomain.count({
     *   where: {
     *     // ... the filter for the WhitelistedDomains we want to count
     *   }
     * })
    **/
    count<T extends WhitelistedDomainCountArgs>(
      args?: Subset<T, WhitelistedDomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhitelistedDomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhitelistedDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistedDomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WhitelistedDomainAggregateArgs>(args: Subset<T, WhitelistedDomainAggregateArgs>): Prisma.PrismaPromise<GetWhitelistedDomainAggregateType<T>>

    /**
     * Group by WhitelistedDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhitelistedDomainGroupByArgs} args - Group by arguments.
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
      T extends WhitelistedDomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhitelistedDomainGroupByArgs['orderBy'] }
        : { orderBy?: WhitelistedDomainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WhitelistedDomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhitelistedDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhitelistedDomain model
   */
  readonly fields: WhitelistedDomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhitelistedDomain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhitelistedDomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditLogs<T extends WhitelistedDomain$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, WhitelistedDomain$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accessLogs<T extends WhitelistedDomain$accessLogsArgs<ExtArgs> = {}>(args?: Subset<T, WhitelistedDomain$accessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    compliance<T extends WhitelistedDomain$complianceArgs<ExtArgs> = {}>(args?: Subset<T, WhitelistedDomain$complianceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reputation<T extends WhitelistedDomain$reputationArgs<ExtArgs> = {}>(args?: Subset<T, WhitelistedDomain$reputationArgs<ExtArgs>>): Prisma__DomainReputationClient<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    apexOneLogs<T extends WhitelistedDomain$apexOneLogsArgs<ExtArgs> = {}>(args?: Subset<T, WhitelistedDomain$apexOneLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WhitelistedDomain model
   */
  interface WhitelistedDomainFieldRefs {
    readonly id: FieldRef<"WhitelistedDomain", 'Int'>
    readonly domain: FieldRef<"WhitelistedDomain", 'String'>
    readonly category: FieldRef<"WhitelistedDomain", 'String'>
    readonly isWildcard: FieldRef<"WhitelistedDomain", 'Boolean'>
    readonly notes: FieldRef<"WhitelistedDomain", 'String'>
    readonly addedBy: FieldRef<"WhitelistedDomain", 'String'>
    readonly createdAt: FieldRef<"WhitelistedDomain", 'DateTime'>
    readonly updatedAt: FieldRef<"WhitelistedDomain", 'DateTime'>
    readonly expiresAt: FieldRef<"WhitelistedDomain", 'DateTime'>
    readonly isActive: FieldRef<"WhitelistedDomain", 'Boolean'>
    readonly riskLevel: FieldRef<"WhitelistedDomain", 'RiskLevel'>
    readonly dataClass: FieldRef<"WhitelistedDomain", 'DataClass'>
    readonly encryptionKey: FieldRef<"WhitelistedDomain", 'String'>
    readonly lastVerified: FieldRef<"WhitelistedDomain", 'DateTime'>
    readonly verifiedBy: FieldRef<"WhitelistedDomain", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WhitelistedDomain findUnique
   */
  export type WhitelistedDomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
    /**
     * Filter, which WhitelistedDomain to fetch.
     */
    where: WhitelistedDomainWhereUniqueInput
  }

  /**
   * WhitelistedDomain findUniqueOrThrow
   */
  export type WhitelistedDomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
    /**
     * Filter, which WhitelistedDomain to fetch.
     */
    where: WhitelistedDomainWhereUniqueInput
  }

  /**
   * WhitelistedDomain findFirst
   */
  export type WhitelistedDomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
    /**
     * Filter, which WhitelistedDomain to fetch.
     */
    where?: WhitelistedDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhitelistedDomains to fetch.
     */
    orderBy?: WhitelistedDomainOrderByWithRelationInput | WhitelistedDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhitelistedDomains.
     */
    cursor?: WhitelistedDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhitelistedDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhitelistedDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhitelistedDomains.
     */
    distinct?: WhitelistedDomainScalarFieldEnum | WhitelistedDomainScalarFieldEnum[]
  }

  /**
   * WhitelistedDomain findFirstOrThrow
   */
  export type WhitelistedDomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
    /**
     * Filter, which WhitelistedDomain to fetch.
     */
    where?: WhitelistedDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhitelistedDomains to fetch.
     */
    orderBy?: WhitelistedDomainOrderByWithRelationInput | WhitelistedDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhitelistedDomains.
     */
    cursor?: WhitelistedDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhitelistedDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhitelistedDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhitelistedDomains.
     */
    distinct?: WhitelistedDomainScalarFieldEnum | WhitelistedDomainScalarFieldEnum[]
  }

  /**
   * WhitelistedDomain findMany
   */
  export type WhitelistedDomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
    /**
     * Filter, which WhitelistedDomains to fetch.
     */
    where?: WhitelistedDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhitelistedDomains to fetch.
     */
    orderBy?: WhitelistedDomainOrderByWithRelationInput | WhitelistedDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhitelistedDomains.
     */
    cursor?: WhitelistedDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhitelistedDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhitelistedDomains.
     */
    skip?: number
    distinct?: WhitelistedDomainScalarFieldEnum | WhitelistedDomainScalarFieldEnum[]
  }

  /**
   * WhitelistedDomain create
   */
  export type WhitelistedDomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
    /**
     * The data needed to create a WhitelistedDomain.
     */
    data: XOR<WhitelistedDomainCreateInput, WhitelistedDomainUncheckedCreateInput>
  }

  /**
   * WhitelistedDomain createMany
   */
  export type WhitelistedDomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhitelistedDomains.
     */
    data: WhitelistedDomainCreateManyInput | WhitelistedDomainCreateManyInput[]
  }

  /**
   * WhitelistedDomain createManyAndReturn
   */
  export type WhitelistedDomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * The data used to create many WhitelistedDomains.
     */
    data: WhitelistedDomainCreateManyInput | WhitelistedDomainCreateManyInput[]
  }

  /**
   * WhitelistedDomain update
   */
  export type WhitelistedDomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
    /**
     * The data needed to update a WhitelistedDomain.
     */
    data: XOR<WhitelistedDomainUpdateInput, WhitelistedDomainUncheckedUpdateInput>
    /**
     * Choose, which WhitelistedDomain to update.
     */
    where: WhitelistedDomainWhereUniqueInput
  }

  /**
   * WhitelistedDomain updateMany
   */
  export type WhitelistedDomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhitelistedDomains.
     */
    data: XOR<WhitelistedDomainUpdateManyMutationInput, WhitelistedDomainUncheckedUpdateManyInput>
    /**
     * Filter which WhitelistedDomains to update
     */
    where?: WhitelistedDomainWhereInput
    /**
     * Limit how many WhitelistedDomains to update.
     */
    limit?: number
  }

  /**
   * WhitelistedDomain updateManyAndReturn
   */
  export type WhitelistedDomainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * The data used to update WhitelistedDomains.
     */
    data: XOR<WhitelistedDomainUpdateManyMutationInput, WhitelistedDomainUncheckedUpdateManyInput>
    /**
     * Filter which WhitelistedDomains to update
     */
    where?: WhitelistedDomainWhereInput
    /**
     * Limit how many WhitelistedDomains to update.
     */
    limit?: number
  }

  /**
   * WhitelistedDomain upsert
   */
  export type WhitelistedDomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
    /**
     * The filter to search for the WhitelistedDomain to update in case it exists.
     */
    where: WhitelistedDomainWhereUniqueInput
    /**
     * In case the WhitelistedDomain found by the `where` argument doesn't exist, create a new WhitelistedDomain with this data.
     */
    create: XOR<WhitelistedDomainCreateInput, WhitelistedDomainUncheckedCreateInput>
    /**
     * In case the WhitelistedDomain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhitelistedDomainUpdateInput, WhitelistedDomainUncheckedUpdateInput>
  }

  /**
   * WhitelistedDomain delete
   */
  export type WhitelistedDomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
    /**
     * Filter which WhitelistedDomain to delete.
     */
    where: WhitelistedDomainWhereUniqueInput
  }

  /**
   * WhitelistedDomain deleteMany
   */
  export type WhitelistedDomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhitelistedDomains to delete
     */
    where?: WhitelistedDomainWhereInput
    /**
     * Limit how many WhitelistedDomains to delete.
     */
    limit?: number
  }

  /**
   * WhitelistedDomain.auditLogs
   */
  export type WhitelistedDomain$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * WhitelistedDomain.accessLogs
   */
  export type WhitelistedDomain$accessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
    where?: AccessLogWhereInput
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    cursor?: AccessLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessLogScalarFieldEnum | AccessLogScalarFieldEnum[]
  }

  /**
   * WhitelistedDomain.compliance
   */
  export type WhitelistedDomain$complianceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
    where?: ComplianceWhereInput
    orderBy?: ComplianceOrderByWithRelationInput | ComplianceOrderByWithRelationInput[]
    cursor?: ComplianceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplianceScalarFieldEnum | ComplianceScalarFieldEnum[]
  }

  /**
   * WhitelistedDomain.reputation
   */
  export type WhitelistedDomain$reputationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationInclude<ExtArgs> | null
    where?: DomainReputationWhereInput
  }

  /**
   * WhitelistedDomain.apexOneLogs
   */
  export type WhitelistedDomain$apexOneLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
    where?: ApexOneLogWhereInput
    orderBy?: ApexOneLogOrderByWithRelationInput | ApexOneLogOrderByWithRelationInput[]
    cursor?: ApexOneLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApexOneLogScalarFieldEnum | ApexOneLogScalarFieldEnum[]
  }

  /**
   * WhitelistedDomain without action
   */
  export type WhitelistedDomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
    domainId: number | null
    userId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
    domainId: number | null
    userId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    action: $Enums.AuditAction | null
    domainName: string | null
    performedBy: string | null
    details: string | null
    createdAt: Date | null
    domainId: number | null
    ipAddress: string | null
    userAgent: string | null
    sessionId: string | null
    riskLevel: $Enums.RiskLevel | null
    userId: number | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    action: $Enums.AuditAction | null
    domainName: string | null
    performedBy: string | null
    details: string | null
    createdAt: Date | null
    domainId: number | null
    ipAddress: string | null
    userAgent: string | null
    sessionId: string | null
    riskLevel: $Enums.RiskLevel | null
    userId: number | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    domainName: number
    performedBy: number
    details: number
    createdAt: number
    domainId: number
    ipAddress: number
    userAgent: number
    sessionId: number
    riskLevel: number
    userId: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
    domainId?: true
    userId?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
    domainId?: true
    userId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    domainName?: true
    performedBy?: true
    details?: true
    createdAt?: true
    domainId?: true
    ipAddress?: true
    userAgent?: true
    sessionId?: true
    riskLevel?: true
    userId?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    domainName?: true
    performedBy?: true
    details?: true
    createdAt?: true
    domainId?: true
    ipAddress?: true
    userAgent?: true
    sessionId?: true
    riskLevel?: true
    userId?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    domainName?: true
    performedBy?: true
    details?: true
    createdAt?: true
    domainId?: true
    ipAddress?: true
    userAgent?: true
    sessionId?: true
    riskLevel?: true
    userId?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    action: $Enums.AuditAction
    domainName: string
    performedBy: string | null
    details: string | null
    createdAt: Date
    domainId: number
    ipAddress: string | null
    userAgent: string | null
    sessionId: string | null
    riskLevel: $Enums.RiskLevel | null
    userId: number | null
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    domainName?: boolean
    performedBy?: boolean
    details?: boolean
    createdAt?: boolean
    domainId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    sessionId?: boolean
    riskLevel?: boolean
    userId?: boolean
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    domainName?: boolean
    performedBy?: boolean
    details?: boolean
    createdAt?: boolean
    domainId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    sessionId?: boolean
    riskLevel?: boolean
    userId?: boolean
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    domainName?: boolean
    performedBy?: boolean
    details?: boolean
    createdAt?: boolean
    domainId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    sessionId?: boolean
    riskLevel?: boolean
    userId?: boolean
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    domainName?: boolean
    performedBy?: boolean
    details?: boolean
    createdAt?: boolean
    domainId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    sessionId?: boolean
    riskLevel?: boolean
    userId?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "domainName" | "performedBy" | "details" | "createdAt" | "domainId" | "ipAddress" | "userAgent" | "sessionId" | "riskLevel" | "userId", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      domain: Prisma.$WhitelistedDomainPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: $Enums.AuditAction
      domainName: string
      performedBy: string | null
      details: string | null
      createdAt: Date
      domainId: number
      ipAddress: string | null
      userAgent: string | null
      sessionId: string | null
      riskLevel: $Enums.RiskLevel | null
      userId: number | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends WhitelistedDomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhitelistedDomainDefaultArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly action: FieldRef<"AuditLog", 'AuditAction'>
    readonly domainName: FieldRef<"AuditLog", 'String'>
    readonly performedBy: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
    readonly domainId: FieldRef<"AuditLog", 'Int'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly sessionId: FieldRef<"AuditLog", 'String'>
    readonly riskLevel: FieldRef<"AuditLog", 'RiskLevel'>
    readonly userId: FieldRef<"AuditLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model DomainCategory
   */

  export type AggregateDomainCategory = {
    _count: DomainCategoryCountAggregateOutputType | null
    _avg: DomainCategoryAvgAggregateOutputType | null
    _sum: DomainCategorySumAggregateOutputType | null
    _min: DomainCategoryMinAggregateOutputType | null
    _max: DomainCategoryMaxAggregateOutputType | null
  }

  export type DomainCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type DomainCategorySumAggregateOutputType = {
    id: number | null
  }

  export type DomainCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    riskLevel: $Enums.RiskLevel | null
    dataClass: $Enums.DataClass | null
  }

  export type DomainCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    riskLevel: $Enums.RiskLevel | null
    dataClass: $Enums.DataClass | null
  }

  export type DomainCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    riskLevel: number
    dataClass: number
    _all: number
  }


  export type DomainCategoryAvgAggregateInputType = {
    id?: true
  }

  export type DomainCategorySumAggregateInputType = {
    id?: true
  }

  export type DomainCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    riskLevel?: true
    dataClass?: true
  }

  export type DomainCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    riskLevel?: true
    dataClass?: true
  }

  export type DomainCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    riskLevel?: true
    dataClass?: true
    _all?: true
  }

  export type DomainCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DomainCategory to aggregate.
     */
    where?: DomainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainCategories to fetch.
     */
    orderBy?: DomainCategoryOrderByWithRelationInput | DomainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DomainCategories
    **/
    _count?: true | DomainCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DomainCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DomainCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainCategoryMaxAggregateInputType
  }

  export type GetDomainCategoryAggregateType<T extends DomainCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDomainCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomainCategory[P]>
      : GetScalarType<T[P], AggregateDomainCategory[P]>
  }




  export type DomainCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainCategoryWhereInput
    orderBy?: DomainCategoryOrderByWithAggregationInput | DomainCategoryOrderByWithAggregationInput[]
    by: DomainCategoryScalarFieldEnum[] | DomainCategoryScalarFieldEnum
    having?: DomainCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainCategoryCountAggregateInputType | true
    _avg?: DomainCategoryAvgAggregateInputType
    _sum?: DomainCategorySumAggregateInputType
    _min?: DomainCategoryMinAggregateInputType
    _max?: DomainCategoryMaxAggregateInputType
  }

  export type DomainCategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    riskLevel: $Enums.RiskLevel
    dataClass: $Enums.DataClass
    _count: DomainCategoryCountAggregateOutputType | null
    _avg: DomainCategoryAvgAggregateOutputType | null
    _sum: DomainCategorySumAggregateOutputType | null
    _min: DomainCategoryMinAggregateOutputType | null
    _max: DomainCategoryMaxAggregateOutputType | null
  }

  type GetDomainCategoryGroupByPayload<T extends DomainCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], DomainCategoryGroupByOutputType[P]>
        }
      >
    >


  export type DomainCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    riskLevel?: boolean
    dataClass?: boolean
    compliance?: boolean | DomainCategory$complianceArgs<ExtArgs>
    _count?: boolean | DomainCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domainCategory"]>

  export type DomainCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    riskLevel?: boolean
    dataClass?: boolean
  }, ExtArgs["result"]["domainCategory"]>

  export type DomainCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    riskLevel?: boolean
    dataClass?: boolean
  }, ExtArgs["result"]["domainCategory"]>

  export type DomainCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    riskLevel?: boolean
    dataClass?: boolean
  }

  export type DomainCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "riskLevel" | "dataClass", ExtArgs["result"]["domainCategory"]>
  export type DomainCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compliance?: boolean | DomainCategory$complianceArgs<ExtArgs>
    _count?: boolean | DomainCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DomainCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DomainCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DomainCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DomainCategory"
    objects: {
      compliance: Prisma.$CompliancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      riskLevel: $Enums.RiskLevel
      dataClass: $Enums.DataClass
    }, ExtArgs["result"]["domainCategory"]>
    composites: {}
  }

  type DomainCategoryGetPayload<S extends boolean | null | undefined | DomainCategoryDefaultArgs> = $Result.GetResult<Prisma.$DomainCategoryPayload, S>

  type DomainCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DomainCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DomainCategoryCountAggregateInputType | true
    }

  export interface DomainCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DomainCategory'], meta: { name: 'DomainCategory' } }
    /**
     * Find zero or one DomainCategory that matches the filter.
     * @param {DomainCategoryFindUniqueArgs} args - Arguments to find a DomainCategory
     * @example
     * // Get one DomainCategory
     * const domainCategory = await prisma.domainCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DomainCategoryFindUniqueArgs>(args: SelectSubset<T, DomainCategoryFindUniqueArgs<ExtArgs>>): Prisma__DomainCategoryClient<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DomainCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DomainCategoryFindUniqueOrThrowArgs} args - Arguments to find a DomainCategory
     * @example
     * // Get one DomainCategory
     * const domainCategory = await prisma.domainCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DomainCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DomainCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DomainCategoryClient<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DomainCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCategoryFindFirstArgs} args - Arguments to find a DomainCategory
     * @example
     * // Get one DomainCategory
     * const domainCategory = await prisma.domainCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DomainCategoryFindFirstArgs>(args?: SelectSubset<T, DomainCategoryFindFirstArgs<ExtArgs>>): Prisma__DomainCategoryClient<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DomainCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCategoryFindFirstOrThrowArgs} args - Arguments to find a DomainCategory
     * @example
     * // Get one DomainCategory
     * const domainCategory = await prisma.domainCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DomainCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DomainCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DomainCategoryClient<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DomainCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DomainCategories
     * const domainCategories = await prisma.domainCategory.findMany()
     * 
     * // Get first 10 DomainCategories
     * const domainCategories = await prisma.domainCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainCategoryWithIdOnly = await prisma.domainCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DomainCategoryFindManyArgs>(args?: SelectSubset<T, DomainCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DomainCategory.
     * @param {DomainCategoryCreateArgs} args - Arguments to create a DomainCategory.
     * @example
     * // Create one DomainCategory
     * const DomainCategory = await prisma.domainCategory.create({
     *   data: {
     *     // ... data to create a DomainCategory
     *   }
     * })
     * 
     */
    create<T extends DomainCategoryCreateArgs>(args: SelectSubset<T, DomainCategoryCreateArgs<ExtArgs>>): Prisma__DomainCategoryClient<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DomainCategories.
     * @param {DomainCategoryCreateManyArgs} args - Arguments to create many DomainCategories.
     * @example
     * // Create many DomainCategories
     * const domainCategory = await prisma.domainCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DomainCategoryCreateManyArgs>(args?: SelectSubset<T, DomainCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DomainCategories and returns the data saved in the database.
     * @param {DomainCategoryCreateManyAndReturnArgs} args - Arguments to create many DomainCategories.
     * @example
     * // Create many DomainCategories
     * const domainCategory = await prisma.domainCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DomainCategories and only return the `id`
     * const domainCategoryWithIdOnly = await prisma.domainCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DomainCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DomainCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DomainCategory.
     * @param {DomainCategoryDeleteArgs} args - Arguments to delete one DomainCategory.
     * @example
     * // Delete one DomainCategory
     * const DomainCategory = await prisma.domainCategory.delete({
     *   where: {
     *     // ... filter to delete one DomainCategory
     *   }
     * })
     * 
     */
    delete<T extends DomainCategoryDeleteArgs>(args: SelectSubset<T, DomainCategoryDeleteArgs<ExtArgs>>): Prisma__DomainCategoryClient<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DomainCategory.
     * @param {DomainCategoryUpdateArgs} args - Arguments to update one DomainCategory.
     * @example
     * // Update one DomainCategory
     * const domainCategory = await prisma.domainCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DomainCategoryUpdateArgs>(args: SelectSubset<T, DomainCategoryUpdateArgs<ExtArgs>>): Prisma__DomainCategoryClient<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DomainCategories.
     * @param {DomainCategoryDeleteManyArgs} args - Arguments to filter DomainCategories to delete.
     * @example
     * // Delete a few DomainCategories
     * const { count } = await prisma.domainCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DomainCategoryDeleteManyArgs>(args?: SelectSubset<T, DomainCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DomainCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DomainCategories
     * const domainCategory = await prisma.domainCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DomainCategoryUpdateManyArgs>(args: SelectSubset<T, DomainCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DomainCategories and returns the data updated in the database.
     * @param {DomainCategoryUpdateManyAndReturnArgs} args - Arguments to update many DomainCategories.
     * @example
     * // Update many DomainCategories
     * const domainCategory = await prisma.domainCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DomainCategories and only return the `id`
     * const domainCategoryWithIdOnly = await prisma.domainCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends DomainCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, DomainCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DomainCategory.
     * @param {DomainCategoryUpsertArgs} args - Arguments to update or create a DomainCategory.
     * @example
     * // Update or create a DomainCategory
     * const domainCategory = await prisma.domainCategory.upsert({
     *   create: {
     *     // ... data to create a DomainCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DomainCategory we want to update
     *   }
     * })
     */
    upsert<T extends DomainCategoryUpsertArgs>(args: SelectSubset<T, DomainCategoryUpsertArgs<ExtArgs>>): Prisma__DomainCategoryClient<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DomainCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCategoryCountArgs} args - Arguments to filter DomainCategories to count.
     * @example
     * // Count the number of DomainCategories
     * const count = await prisma.domainCategory.count({
     *   where: {
     *     // ... the filter for the DomainCategories we want to count
     *   }
     * })
    **/
    count<T extends DomainCategoryCountArgs>(
      args?: Subset<T, DomainCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DomainCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DomainCategoryAggregateArgs>(args: Subset<T, DomainCategoryAggregateArgs>): Prisma.PrismaPromise<GetDomainCategoryAggregateType<T>>

    /**
     * Group by DomainCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCategoryGroupByArgs} args - Group by arguments.
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
      T extends DomainCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainCategoryGroupByArgs['orderBy'] }
        : { orderBy?: DomainCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DomainCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DomainCategory model
   */
  readonly fields: DomainCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DomainCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compliance<T extends DomainCategory$complianceArgs<ExtArgs> = {}>(args?: Subset<T, DomainCategory$complianceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DomainCategory model
   */
  interface DomainCategoryFieldRefs {
    readonly id: FieldRef<"DomainCategory", 'Int'>
    readonly name: FieldRef<"DomainCategory", 'String'>
    readonly description: FieldRef<"DomainCategory", 'String'>
    readonly createdAt: FieldRef<"DomainCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"DomainCategory", 'DateTime'>
    readonly riskLevel: FieldRef<"DomainCategory", 'RiskLevel'>
    readonly dataClass: FieldRef<"DomainCategory", 'DataClass'>
  }
    

  // Custom InputTypes
  /**
   * DomainCategory findUnique
   */
  export type DomainCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DomainCategory to fetch.
     */
    where: DomainCategoryWhereUniqueInput
  }

  /**
   * DomainCategory findUniqueOrThrow
   */
  export type DomainCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DomainCategory to fetch.
     */
    where: DomainCategoryWhereUniqueInput
  }

  /**
   * DomainCategory findFirst
   */
  export type DomainCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DomainCategory to fetch.
     */
    where?: DomainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainCategories to fetch.
     */
    orderBy?: DomainCategoryOrderByWithRelationInput | DomainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DomainCategories.
     */
    cursor?: DomainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DomainCategories.
     */
    distinct?: DomainCategoryScalarFieldEnum | DomainCategoryScalarFieldEnum[]
  }

  /**
   * DomainCategory findFirstOrThrow
   */
  export type DomainCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DomainCategory to fetch.
     */
    where?: DomainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainCategories to fetch.
     */
    orderBy?: DomainCategoryOrderByWithRelationInput | DomainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DomainCategories.
     */
    cursor?: DomainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DomainCategories.
     */
    distinct?: DomainCategoryScalarFieldEnum | DomainCategoryScalarFieldEnum[]
  }

  /**
   * DomainCategory findMany
   */
  export type DomainCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DomainCategories to fetch.
     */
    where?: DomainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainCategories to fetch.
     */
    orderBy?: DomainCategoryOrderByWithRelationInput | DomainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DomainCategories.
     */
    cursor?: DomainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainCategories.
     */
    skip?: number
    distinct?: DomainCategoryScalarFieldEnum | DomainCategoryScalarFieldEnum[]
  }

  /**
   * DomainCategory create
   */
  export type DomainCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DomainCategory.
     */
    data: XOR<DomainCategoryCreateInput, DomainCategoryUncheckedCreateInput>
  }

  /**
   * DomainCategory createMany
   */
  export type DomainCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DomainCategories.
     */
    data: DomainCategoryCreateManyInput | DomainCategoryCreateManyInput[]
  }

  /**
   * DomainCategory createManyAndReturn
   */
  export type DomainCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many DomainCategories.
     */
    data: DomainCategoryCreateManyInput | DomainCategoryCreateManyInput[]
  }

  /**
   * DomainCategory update
   */
  export type DomainCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DomainCategory.
     */
    data: XOR<DomainCategoryUpdateInput, DomainCategoryUncheckedUpdateInput>
    /**
     * Choose, which DomainCategory to update.
     */
    where: DomainCategoryWhereUniqueInput
  }

  /**
   * DomainCategory updateMany
   */
  export type DomainCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DomainCategories.
     */
    data: XOR<DomainCategoryUpdateManyMutationInput, DomainCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DomainCategories to update
     */
    where?: DomainCategoryWhereInput
    /**
     * Limit how many DomainCategories to update.
     */
    limit?: number
  }

  /**
   * DomainCategory updateManyAndReturn
   */
  export type DomainCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * The data used to update DomainCategories.
     */
    data: XOR<DomainCategoryUpdateManyMutationInput, DomainCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DomainCategories to update
     */
    where?: DomainCategoryWhereInput
    /**
     * Limit how many DomainCategories to update.
     */
    limit?: number
  }

  /**
   * DomainCategory upsert
   */
  export type DomainCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DomainCategory to update in case it exists.
     */
    where: DomainCategoryWhereUniqueInput
    /**
     * In case the DomainCategory found by the `where` argument doesn't exist, create a new DomainCategory with this data.
     */
    create: XOR<DomainCategoryCreateInput, DomainCategoryUncheckedCreateInput>
    /**
     * In case the DomainCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainCategoryUpdateInput, DomainCategoryUncheckedUpdateInput>
  }

  /**
   * DomainCategory delete
   */
  export type DomainCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainCategoryInclude<ExtArgs> | null
    /**
     * Filter which DomainCategory to delete.
     */
    where: DomainCategoryWhereUniqueInput
  }

  /**
   * DomainCategory deleteMany
   */
  export type DomainCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DomainCategories to delete
     */
    where?: DomainCategoryWhereInput
    /**
     * Limit how many DomainCategories to delete.
     */
    limit?: number
  }

  /**
   * DomainCategory.compliance
   */
  export type DomainCategory$complianceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
    where?: ComplianceWhereInput
    orderBy?: ComplianceOrderByWithRelationInput | ComplianceOrderByWithRelationInput[]
    cursor?: ComplianceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplianceScalarFieldEnum | ComplianceScalarFieldEnum[]
  }

  /**
   * DomainCategory without action
   */
  export type DomainCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainCategoryInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    role: $Enums.UserRole | null
    mfaEnabled: boolean | null
    lastLogin: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    role: $Enums.UserRole | null
    mfaEnabled: boolean | null
    lastLogin: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    role: number
    mfaEnabled: number
    lastLogin: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    role?: true
    mfaEnabled?: true
    lastLogin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    role?: true
    mfaEnabled?: true
    lastLogin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    role?: true
    mfaEnabled?: true
    lastLogin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    role: $Enums.UserRole
    mfaEnabled: boolean
    lastLogin: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    mfaEnabled?: boolean
    lastLogin?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    accessLogs?: boolean | User$accessLogsArgs<ExtArgs>
    apexOneLogs?: boolean | User$apexOneLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    mfaEnabled?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    mfaEnabled?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    role?: boolean
    mfaEnabled?: boolean
    lastLogin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "role" | "mfaEnabled" | "lastLogin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    accessLogs?: boolean | User$accessLogsArgs<ExtArgs>
    apexOneLogs?: boolean | User$apexOneLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      accessLogs: Prisma.$AccessLogPayload<ExtArgs>[]
      apexOneLogs: Prisma.$ApexOneLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      role: $Enums.UserRole
      mfaEnabled: boolean
      lastLogin: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accessLogs<T extends User$accessLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$accessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apexOneLogs<T extends User$apexOneLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$apexOneLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApexOneLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly mfaEnabled: FieldRef<"User", 'Boolean'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.accessLogs
   */
  export type User$accessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
    where?: AccessLogWhereInput
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    cursor?: AccessLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessLogScalarFieldEnum | AccessLogScalarFieldEnum[]
  }

  /**
   * User.apexOneLogs
   */
  export type User$apexOneLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApexOneLog
     */
    select?: ApexOneLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApexOneLog
     */
    omit?: ApexOneLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApexOneLogInclude<ExtArgs> | null
    where?: ApexOneLogWhereInput
    orderBy?: ApexOneLogOrderByWithRelationInput | ApexOneLogOrderByWithRelationInput[]
    cursor?: ApexOneLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApexOneLogScalarFieldEnum | ApexOneLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    ipAddress: number
    userAgent: number
    createdAt: number
    expiresAt: number
    isActive: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    expiresAt?: true
    isActive?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    expiresAt?: true
    isActive?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    expiresAt?: true
    isActive?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    userId: number
    token: string
    ipAddress: string
    userAgent: string
    createdAt: Date
    expiresAt: Date
    isActive: boolean
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "ipAddress" | "userAgent" | "createdAt" | "expiresAt" | "isActive", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      ipAddress: string
      userAgent: string
      createdAt: Date
      expiresAt: Date
      isActive: boolean
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly token: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly isActive: FieldRef<"Session", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Compliance
   */

  export type AggregateCompliance = {
    _count: ComplianceCountAggregateOutputType | null
    _avg: ComplianceAvgAggregateOutputType | null
    _sum: ComplianceSumAggregateOutputType | null
    _min: ComplianceMinAggregateOutputType | null
    _max: ComplianceMaxAggregateOutputType | null
  }

  export type ComplianceAvgAggregateOutputType = {
    id: number | null
  }

  export type ComplianceSumAggregateOutputType = {
    id: number | null
  }

  export type ComplianceMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    requirements: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplianceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    requirements: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplianceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    requirements: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComplianceAvgAggregateInputType = {
    id?: true
  }

  export type ComplianceSumAggregateInputType = {
    id?: true
  }

  export type ComplianceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    requirements?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplianceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    requirements?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplianceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    requirements?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComplianceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compliance to aggregate.
     */
    where?: ComplianceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compliances to fetch.
     */
    orderBy?: ComplianceOrderByWithRelationInput | ComplianceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplianceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compliances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compliances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compliances
    **/
    _count?: true | ComplianceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplianceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplianceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplianceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplianceMaxAggregateInputType
  }

  export type GetComplianceAggregateType<T extends ComplianceAggregateArgs> = {
        [P in keyof T & keyof AggregateCompliance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompliance[P]>
      : GetScalarType<T[P], AggregateCompliance[P]>
  }




  export type ComplianceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplianceWhereInput
    orderBy?: ComplianceOrderByWithAggregationInput | ComplianceOrderByWithAggregationInput[]
    by: ComplianceScalarFieldEnum[] | ComplianceScalarFieldEnum
    having?: ComplianceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplianceCountAggregateInputType | true
    _avg?: ComplianceAvgAggregateInputType
    _sum?: ComplianceSumAggregateInputType
    _min?: ComplianceMinAggregateInputType
    _max?: ComplianceMaxAggregateInputType
  }

  export type ComplianceGroupByOutputType = {
    id: number
    name: string
    description: string | null
    requirements: string
    createdAt: Date
    updatedAt: Date
    _count: ComplianceCountAggregateOutputType | null
    _avg: ComplianceAvgAggregateOutputType | null
    _sum: ComplianceSumAggregateOutputType | null
    _min: ComplianceMinAggregateOutputType | null
    _max: ComplianceMaxAggregateOutputType | null
  }

  type GetComplianceGroupByPayload<T extends ComplianceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplianceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplianceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplianceGroupByOutputType[P]>
            : GetScalarType<T[P], ComplianceGroupByOutputType[P]>
        }
      >
    >


  export type ComplianceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    requirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domains?: boolean | Compliance$domainsArgs<ExtArgs>
    categories?: boolean | Compliance$categoriesArgs<ExtArgs>
    _count?: boolean | ComplianceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compliance"]>

  export type ComplianceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    requirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["compliance"]>

  export type ComplianceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    requirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["compliance"]>

  export type ComplianceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    requirements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComplianceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "requirements" | "createdAt" | "updatedAt", ExtArgs["result"]["compliance"]>
  export type ComplianceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domains?: boolean | Compliance$domainsArgs<ExtArgs>
    categories?: boolean | Compliance$categoriesArgs<ExtArgs>
    _count?: boolean | ComplianceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComplianceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ComplianceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompliancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compliance"
    objects: {
      domains: Prisma.$WhitelistedDomainPayload<ExtArgs>[]
      categories: Prisma.$DomainCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      requirements: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["compliance"]>
    composites: {}
  }

  type ComplianceGetPayload<S extends boolean | null | undefined | ComplianceDefaultArgs> = $Result.GetResult<Prisma.$CompliancePayload, S>

  type ComplianceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplianceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplianceCountAggregateInputType | true
    }

  export interface ComplianceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compliance'], meta: { name: 'Compliance' } }
    /**
     * Find zero or one Compliance that matches the filter.
     * @param {ComplianceFindUniqueArgs} args - Arguments to find a Compliance
     * @example
     * // Get one Compliance
     * const compliance = await prisma.compliance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplianceFindUniqueArgs>(args: SelectSubset<T, ComplianceFindUniqueArgs<ExtArgs>>): Prisma__ComplianceClient<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Compliance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplianceFindUniqueOrThrowArgs} args - Arguments to find a Compliance
     * @example
     * // Get one Compliance
     * const compliance = await prisma.compliance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplianceFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplianceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplianceClient<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compliance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceFindFirstArgs} args - Arguments to find a Compliance
     * @example
     * // Get one Compliance
     * const compliance = await prisma.compliance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplianceFindFirstArgs>(args?: SelectSubset<T, ComplianceFindFirstArgs<ExtArgs>>): Prisma__ComplianceClient<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compliance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceFindFirstOrThrowArgs} args - Arguments to find a Compliance
     * @example
     * // Get one Compliance
     * const compliance = await prisma.compliance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplianceFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplianceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplianceClient<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Compliances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compliances
     * const compliances = await prisma.compliance.findMany()
     * 
     * // Get first 10 Compliances
     * const compliances = await prisma.compliance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complianceWithIdOnly = await prisma.compliance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComplianceFindManyArgs>(args?: SelectSubset<T, ComplianceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Compliance.
     * @param {ComplianceCreateArgs} args - Arguments to create a Compliance.
     * @example
     * // Create one Compliance
     * const Compliance = await prisma.compliance.create({
     *   data: {
     *     // ... data to create a Compliance
     *   }
     * })
     * 
     */
    create<T extends ComplianceCreateArgs>(args: SelectSubset<T, ComplianceCreateArgs<ExtArgs>>): Prisma__ComplianceClient<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Compliances.
     * @param {ComplianceCreateManyArgs} args - Arguments to create many Compliances.
     * @example
     * // Create many Compliances
     * const compliance = await prisma.compliance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplianceCreateManyArgs>(args?: SelectSubset<T, ComplianceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Compliances and returns the data saved in the database.
     * @param {ComplianceCreateManyAndReturnArgs} args - Arguments to create many Compliances.
     * @example
     * // Create many Compliances
     * const compliance = await prisma.compliance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Compliances and only return the `id`
     * const complianceWithIdOnly = await prisma.compliance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComplianceCreateManyAndReturnArgs>(args?: SelectSubset<T, ComplianceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Compliance.
     * @param {ComplianceDeleteArgs} args - Arguments to delete one Compliance.
     * @example
     * // Delete one Compliance
     * const Compliance = await prisma.compliance.delete({
     *   where: {
     *     // ... filter to delete one Compliance
     *   }
     * })
     * 
     */
    delete<T extends ComplianceDeleteArgs>(args: SelectSubset<T, ComplianceDeleteArgs<ExtArgs>>): Prisma__ComplianceClient<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Compliance.
     * @param {ComplianceUpdateArgs} args - Arguments to update one Compliance.
     * @example
     * // Update one Compliance
     * const compliance = await prisma.compliance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplianceUpdateArgs>(args: SelectSubset<T, ComplianceUpdateArgs<ExtArgs>>): Prisma__ComplianceClient<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Compliances.
     * @param {ComplianceDeleteManyArgs} args - Arguments to filter Compliances to delete.
     * @example
     * // Delete a few Compliances
     * const { count } = await prisma.compliance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplianceDeleteManyArgs>(args?: SelectSubset<T, ComplianceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compliances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compliances
     * const compliance = await prisma.compliance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplianceUpdateManyArgs>(args: SelectSubset<T, ComplianceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compliances and returns the data updated in the database.
     * @param {ComplianceUpdateManyAndReturnArgs} args - Arguments to update many Compliances.
     * @example
     * // Update many Compliances
     * const compliance = await prisma.compliance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Compliances and only return the `id`
     * const complianceWithIdOnly = await prisma.compliance.updateManyAndReturn({
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
    updateManyAndReturn<T extends ComplianceUpdateManyAndReturnArgs>(args: SelectSubset<T, ComplianceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Compliance.
     * @param {ComplianceUpsertArgs} args - Arguments to update or create a Compliance.
     * @example
     * // Update or create a Compliance
     * const compliance = await prisma.compliance.upsert({
     *   create: {
     *     // ... data to create a Compliance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compliance we want to update
     *   }
     * })
     */
    upsert<T extends ComplianceUpsertArgs>(args: SelectSubset<T, ComplianceUpsertArgs<ExtArgs>>): Prisma__ComplianceClient<$Result.GetResult<Prisma.$CompliancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Compliances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceCountArgs} args - Arguments to filter Compliances to count.
     * @example
     * // Count the number of Compliances
     * const count = await prisma.compliance.count({
     *   where: {
     *     // ... the filter for the Compliances we want to count
     *   }
     * })
    **/
    count<T extends ComplianceCountArgs>(
      args?: Subset<T, ComplianceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplianceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compliance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComplianceAggregateArgs>(args: Subset<T, ComplianceAggregateArgs>): Prisma.PrismaPromise<GetComplianceAggregateType<T>>

    /**
     * Group by Compliance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplianceGroupByArgs} args - Group by arguments.
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
      T extends ComplianceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplianceGroupByArgs['orderBy'] }
        : { orderBy?: ComplianceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComplianceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplianceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compliance model
   */
  readonly fields: ComplianceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compliance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplianceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domains<T extends Compliance$domainsArgs<ExtArgs> = {}>(args?: Subset<T, Compliance$domainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Compliance$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Compliance$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Compliance model
   */
  interface ComplianceFieldRefs {
    readonly id: FieldRef<"Compliance", 'Int'>
    readonly name: FieldRef<"Compliance", 'String'>
    readonly description: FieldRef<"Compliance", 'String'>
    readonly requirements: FieldRef<"Compliance", 'String'>
    readonly createdAt: FieldRef<"Compliance", 'DateTime'>
    readonly updatedAt: FieldRef<"Compliance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Compliance findUnique
   */
  export type ComplianceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
    /**
     * Filter, which Compliance to fetch.
     */
    where: ComplianceWhereUniqueInput
  }

  /**
   * Compliance findUniqueOrThrow
   */
  export type ComplianceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
    /**
     * Filter, which Compliance to fetch.
     */
    where: ComplianceWhereUniqueInput
  }

  /**
   * Compliance findFirst
   */
  export type ComplianceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
    /**
     * Filter, which Compliance to fetch.
     */
    where?: ComplianceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compliances to fetch.
     */
    orderBy?: ComplianceOrderByWithRelationInput | ComplianceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compliances.
     */
    cursor?: ComplianceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compliances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compliances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compliances.
     */
    distinct?: ComplianceScalarFieldEnum | ComplianceScalarFieldEnum[]
  }

  /**
   * Compliance findFirstOrThrow
   */
  export type ComplianceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
    /**
     * Filter, which Compliance to fetch.
     */
    where?: ComplianceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compliances to fetch.
     */
    orderBy?: ComplianceOrderByWithRelationInput | ComplianceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compliances.
     */
    cursor?: ComplianceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compliances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compliances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compliances.
     */
    distinct?: ComplianceScalarFieldEnum | ComplianceScalarFieldEnum[]
  }

  /**
   * Compliance findMany
   */
  export type ComplianceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
    /**
     * Filter, which Compliances to fetch.
     */
    where?: ComplianceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compliances to fetch.
     */
    orderBy?: ComplianceOrderByWithRelationInput | ComplianceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compliances.
     */
    cursor?: ComplianceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compliances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compliances.
     */
    skip?: number
    distinct?: ComplianceScalarFieldEnum | ComplianceScalarFieldEnum[]
  }

  /**
   * Compliance create
   */
  export type ComplianceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
    /**
     * The data needed to create a Compliance.
     */
    data: XOR<ComplianceCreateInput, ComplianceUncheckedCreateInput>
  }

  /**
   * Compliance createMany
   */
  export type ComplianceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compliances.
     */
    data: ComplianceCreateManyInput | ComplianceCreateManyInput[]
  }

  /**
   * Compliance createManyAndReturn
   */
  export type ComplianceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * The data used to create many Compliances.
     */
    data: ComplianceCreateManyInput | ComplianceCreateManyInput[]
  }

  /**
   * Compliance update
   */
  export type ComplianceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
    /**
     * The data needed to update a Compliance.
     */
    data: XOR<ComplianceUpdateInput, ComplianceUncheckedUpdateInput>
    /**
     * Choose, which Compliance to update.
     */
    where: ComplianceWhereUniqueInput
  }

  /**
   * Compliance updateMany
   */
  export type ComplianceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compliances.
     */
    data: XOR<ComplianceUpdateManyMutationInput, ComplianceUncheckedUpdateManyInput>
    /**
     * Filter which Compliances to update
     */
    where?: ComplianceWhereInput
    /**
     * Limit how many Compliances to update.
     */
    limit?: number
  }

  /**
   * Compliance updateManyAndReturn
   */
  export type ComplianceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * The data used to update Compliances.
     */
    data: XOR<ComplianceUpdateManyMutationInput, ComplianceUncheckedUpdateManyInput>
    /**
     * Filter which Compliances to update
     */
    where?: ComplianceWhereInput
    /**
     * Limit how many Compliances to update.
     */
    limit?: number
  }

  /**
   * Compliance upsert
   */
  export type ComplianceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
    /**
     * The filter to search for the Compliance to update in case it exists.
     */
    where: ComplianceWhereUniqueInput
    /**
     * In case the Compliance found by the `where` argument doesn't exist, create a new Compliance with this data.
     */
    create: XOR<ComplianceCreateInput, ComplianceUncheckedCreateInput>
    /**
     * In case the Compliance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplianceUpdateInput, ComplianceUncheckedUpdateInput>
  }

  /**
   * Compliance delete
   */
  export type ComplianceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
    /**
     * Filter which Compliance to delete.
     */
    where: ComplianceWhereUniqueInput
  }

  /**
   * Compliance deleteMany
   */
  export type ComplianceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compliances to delete
     */
    where?: ComplianceWhereInput
    /**
     * Limit how many Compliances to delete.
     */
    limit?: number
  }

  /**
   * Compliance.domains
   */
  export type Compliance$domainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhitelistedDomain
     */
    select?: WhitelistedDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhitelistedDomain
     */
    omit?: WhitelistedDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhitelistedDomainInclude<ExtArgs> | null
    where?: WhitelistedDomainWhereInput
    orderBy?: WhitelistedDomainOrderByWithRelationInput | WhitelistedDomainOrderByWithRelationInput[]
    cursor?: WhitelistedDomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhitelistedDomainScalarFieldEnum | WhitelistedDomainScalarFieldEnum[]
  }

  /**
   * Compliance.categories
   */
  export type Compliance$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCategory
     */
    select?: DomainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainCategory
     */
    omit?: DomainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainCategoryInclude<ExtArgs> | null
    where?: DomainCategoryWhereInput
    orderBy?: DomainCategoryOrderByWithRelationInput | DomainCategoryOrderByWithRelationInput[]
    cursor?: DomainCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DomainCategoryScalarFieldEnum | DomainCategoryScalarFieldEnum[]
  }

  /**
   * Compliance without action
   */
  export type ComplianceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compliance
     */
    select?: ComplianceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compliance
     */
    omit?: ComplianceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplianceInclude<ExtArgs> | null
  }


  /**
   * Model AccessLog
   */

  export type AggregateAccessLog = {
    _count: AccessLogCountAggregateOutputType | null
    _avg: AccessLogAvgAggregateOutputType | null
    _sum: AccessLogSumAggregateOutputType | null
    _min: AccessLogMinAggregateOutputType | null
    _max: AccessLogMaxAggregateOutputType | null
  }

  export type AccessLogAvgAggregateOutputType = {
    id: number | null
    domainId: number | null
    userId: number | null
  }

  export type AccessLogSumAggregateOutputType = {
    id: number | null
    domainId: number | null
    userId: number | null
  }

  export type AccessLogMinAggregateOutputType = {
    id: number | null
    domainId: number | null
    userId: number | null
    ipAddress: string | null
    userAgent: string | null
    timestamp: Date | null
    action: string | null
    status: string | null
    details: string | null
  }

  export type AccessLogMaxAggregateOutputType = {
    id: number | null
    domainId: number | null
    userId: number | null
    ipAddress: string | null
    userAgent: string | null
    timestamp: Date | null
    action: string | null
    status: string | null
    details: string | null
  }

  export type AccessLogCountAggregateOutputType = {
    id: number
    domainId: number
    userId: number
    ipAddress: number
    userAgent: number
    timestamp: number
    action: number
    status: number
    details: number
    _all: number
  }


  export type AccessLogAvgAggregateInputType = {
    id?: true
    domainId?: true
    userId?: true
  }

  export type AccessLogSumAggregateInputType = {
    id?: true
    domainId?: true
    userId?: true
  }

  export type AccessLogMinAggregateInputType = {
    id?: true
    domainId?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
    action?: true
    status?: true
    details?: true
  }

  export type AccessLogMaxAggregateInputType = {
    id?: true
    domainId?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
    action?: true
    status?: true
    details?: true
  }

  export type AccessLogCountAggregateInputType = {
    id?: true
    domainId?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    timestamp?: true
    action?: true
    status?: true
    details?: true
    _all?: true
  }

  export type AccessLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessLog to aggregate.
     */
    where?: AccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessLogs
    **/
    _count?: true | AccessLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessLogMaxAggregateInputType
  }

  export type GetAccessLogAggregateType<T extends AccessLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessLog[P]>
      : GetScalarType<T[P], AggregateAccessLog[P]>
  }




  export type AccessLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessLogWhereInput
    orderBy?: AccessLogOrderByWithAggregationInput | AccessLogOrderByWithAggregationInput[]
    by: AccessLogScalarFieldEnum[] | AccessLogScalarFieldEnum
    having?: AccessLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessLogCountAggregateInputType | true
    _avg?: AccessLogAvgAggregateInputType
    _sum?: AccessLogSumAggregateInputType
    _min?: AccessLogMinAggregateInputType
    _max?: AccessLogMaxAggregateInputType
  }

  export type AccessLogGroupByOutputType = {
    id: number
    domainId: number
    userId: number
    ipAddress: string
    userAgent: string
    timestamp: Date
    action: string
    status: string
    details: string | null
    _count: AccessLogCountAggregateOutputType | null
    _avg: AccessLogAvgAggregateOutputType | null
    _sum: AccessLogSumAggregateOutputType | null
    _min: AccessLogMinAggregateOutputType | null
    _max: AccessLogMaxAggregateOutputType | null
  }

  type GetAccessLogGroupByPayload<T extends AccessLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessLogGroupByOutputType[P]>
            : GetScalarType<T[P], AccessLogGroupByOutputType[P]>
        }
      >
    >


  export type AccessLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
    action?: boolean
    status?: boolean
    details?: boolean
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessLog"]>

  export type AccessLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
    action?: boolean
    status?: boolean
    details?: boolean
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessLog"]>

  export type AccessLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
    action?: boolean
    status?: boolean
    details?: boolean
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessLog"]>

  export type AccessLogSelectScalar = {
    id?: boolean
    domainId?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    timestamp?: boolean
    action?: boolean
    status?: boolean
    details?: boolean
  }

  export type AccessLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domainId" | "userId" | "ipAddress" | "userAgent" | "timestamp" | "action" | "status" | "details", ExtArgs["result"]["accessLog"]>
  export type AccessLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccessLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccessLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccessLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessLog"
    objects: {
      domain: Prisma.$WhitelistedDomainPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domainId: number
      userId: number
      ipAddress: string
      userAgent: string
      timestamp: Date
      action: string
      status: string
      details: string | null
    }, ExtArgs["result"]["accessLog"]>
    composites: {}
  }

  type AccessLogGetPayload<S extends boolean | null | undefined | AccessLogDefaultArgs> = $Result.GetResult<Prisma.$AccessLogPayload, S>

  type AccessLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessLogCountAggregateInputType | true
    }

  export interface AccessLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessLog'], meta: { name: 'AccessLog' } }
    /**
     * Find zero or one AccessLog that matches the filter.
     * @param {AccessLogFindUniqueArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessLogFindUniqueArgs>(args: SelectSubset<T, AccessLogFindUniqueArgs<ExtArgs>>): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessLogFindUniqueOrThrowArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogFindFirstArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessLogFindFirstArgs>(args?: SelectSubset<T, AccessLogFindFirstArgs<ExtArgs>>): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogFindFirstOrThrowArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessLogs
     * const accessLogs = await prisma.accessLog.findMany()
     * 
     * // Get first 10 AccessLogs
     * const accessLogs = await prisma.accessLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessLogWithIdOnly = await prisma.accessLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessLogFindManyArgs>(args?: SelectSubset<T, AccessLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessLog.
     * @param {AccessLogCreateArgs} args - Arguments to create a AccessLog.
     * @example
     * // Create one AccessLog
     * const AccessLog = await prisma.accessLog.create({
     *   data: {
     *     // ... data to create a AccessLog
     *   }
     * })
     * 
     */
    create<T extends AccessLogCreateArgs>(args: SelectSubset<T, AccessLogCreateArgs<ExtArgs>>): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessLogs.
     * @param {AccessLogCreateManyArgs} args - Arguments to create many AccessLogs.
     * @example
     * // Create many AccessLogs
     * const accessLog = await prisma.accessLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessLogCreateManyArgs>(args?: SelectSubset<T, AccessLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessLogs and returns the data saved in the database.
     * @param {AccessLogCreateManyAndReturnArgs} args - Arguments to create many AccessLogs.
     * @example
     * // Create many AccessLogs
     * const accessLog = await prisma.accessLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessLogs and only return the `id`
     * const accessLogWithIdOnly = await prisma.accessLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessLog.
     * @param {AccessLogDeleteArgs} args - Arguments to delete one AccessLog.
     * @example
     * // Delete one AccessLog
     * const AccessLog = await prisma.accessLog.delete({
     *   where: {
     *     // ... filter to delete one AccessLog
     *   }
     * })
     * 
     */
    delete<T extends AccessLogDeleteArgs>(args: SelectSubset<T, AccessLogDeleteArgs<ExtArgs>>): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessLog.
     * @param {AccessLogUpdateArgs} args - Arguments to update one AccessLog.
     * @example
     * // Update one AccessLog
     * const accessLog = await prisma.accessLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessLogUpdateArgs>(args: SelectSubset<T, AccessLogUpdateArgs<ExtArgs>>): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessLogs.
     * @param {AccessLogDeleteManyArgs} args - Arguments to filter AccessLogs to delete.
     * @example
     * // Delete a few AccessLogs
     * const { count } = await prisma.accessLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessLogDeleteManyArgs>(args?: SelectSubset<T, AccessLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessLogs
     * const accessLog = await prisma.accessLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessLogUpdateManyArgs>(args: SelectSubset<T, AccessLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessLogs and returns the data updated in the database.
     * @param {AccessLogUpdateManyAndReturnArgs} args - Arguments to update many AccessLogs.
     * @example
     * // Update many AccessLogs
     * const accessLog = await prisma.accessLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessLogs and only return the `id`
     * const accessLogWithIdOnly = await prisma.accessLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccessLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessLog.
     * @param {AccessLogUpsertArgs} args - Arguments to update or create a AccessLog.
     * @example
     * // Update or create a AccessLog
     * const accessLog = await prisma.accessLog.upsert({
     *   create: {
     *     // ... data to create a AccessLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessLog we want to update
     *   }
     * })
     */
    upsert<T extends AccessLogUpsertArgs>(args: SelectSubset<T, AccessLogUpsertArgs<ExtArgs>>): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogCountArgs} args - Arguments to filter AccessLogs to count.
     * @example
     * // Count the number of AccessLogs
     * const count = await prisma.accessLog.count({
     *   where: {
     *     // ... the filter for the AccessLogs we want to count
     *   }
     * })
    **/
    count<T extends AccessLogCountArgs>(
      args?: Subset<T, AccessLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccessLogAggregateArgs>(args: Subset<T, AccessLogAggregateArgs>): Prisma.PrismaPromise<GetAccessLogAggregateType<T>>

    /**
     * Group by AccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogGroupByArgs} args - Group by arguments.
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
      T extends AccessLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessLogGroupByArgs['orderBy'] }
        : { orderBy?: AccessLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccessLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessLog model
   */
  readonly fields: AccessLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends WhitelistedDomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhitelistedDomainDefaultArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AccessLog model
   */
  interface AccessLogFieldRefs {
    readonly id: FieldRef<"AccessLog", 'Int'>
    readonly domainId: FieldRef<"AccessLog", 'Int'>
    readonly userId: FieldRef<"AccessLog", 'Int'>
    readonly ipAddress: FieldRef<"AccessLog", 'String'>
    readonly userAgent: FieldRef<"AccessLog", 'String'>
    readonly timestamp: FieldRef<"AccessLog", 'DateTime'>
    readonly action: FieldRef<"AccessLog", 'String'>
    readonly status: FieldRef<"AccessLog", 'String'>
    readonly details: FieldRef<"AccessLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AccessLog findUnique
   */
  export type AccessLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter, which AccessLog to fetch.
     */
    where: AccessLogWhereUniqueInput
  }

  /**
   * AccessLog findUniqueOrThrow
   */
  export type AccessLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter, which AccessLog to fetch.
     */
    where: AccessLogWhereUniqueInput
  }

  /**
   * AccessLog findFirst
   */
  export type AccessLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter, which AccessLog to fetch.
     */
    where?: AccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessLogs.
     */
    cursor?: AccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessLogs.
     */
    distinct?: AccessLogScalarFieldEnum | AccessLogScalarFieldEnum[]
  }

  /**
   * AccessLog findFirstOrThrow
   */
  export type AccessLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter, which AccessLog to fetch.
     */
    where?: AccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessLogs.
     */
    cursor?: AccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessLogs.
     */
    distinct?: AccessLogScalarFieldEnum | AccessLogScalarFieldEnum[]
  }

  /**
   * AccessLog findMany
   */
  export type AccessLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter, which AccessLogs to fetch.
     */
    where?: AccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessLogs.
     */
    cursor?: AccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    distinct?: AccessLogScalarFieldEnum | AccessLogScalarFieldEnum[]
  }

  /**
   * AccessLog create
   */
  export type AccessLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessLog.
     */
    data: XOR<AccessLogCreateInput, AccessLogUncheckedCreateInput>
  }

  /**
   * AccessLog createMany
   */
  export type AccessLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessLogs.
     */
    data: AccessLogCreateManyInput | AccessLogCreateManyInput[]
  }

  /**
   * AccessLog createManyAndReturn
   */
  export type AccessLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * The data used to create many AccessLogs.
     */
    data: AccessLogCreateManyInput | AccessLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessLog update
   */
  export type AccessLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessLog.
     */
    data: XOR<AccessLogUpdateInput, AccessLogUncheckedUpdateInput>
    /**
     * Choose, which AccessLog to update.
     */
    where: AccessLogWhereUniqueInput
  }

  /**
   * AccessLog updateMany
   */
  export type AccessLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessLogs.
     */
    data: XOR<AccessLogUpdateManyMutationInput, AccessLogUncheckedUpdateManyInput>
    /**
     * Filter which AccessLogs to update
     */
    where?: AccessLogWhereInput
    /**
     * Limit how many AccessLogs to update.
     */
    limit?: number
  }

  /**
   * AccessLog updateManyAndReturn
   */
  export type AccessLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * The data used to update AccessLogs.
     */
    data: XOR<AccessLogUpdateManyMutationInput, AccessLogUncheckedUpdateManyInput>
    /**
     * Filter which AccessLogs to update
     */
    where?: AccessLogWhereInput
    /**
     * Limit how many AccessLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccessLog upsert
   */
  export type AccessLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessLog to update in case it exists.
     */
    where: AccessLogWhereUniqueInput
    /**
     * In case the AccessLog found by the `where` argument doesn't exist, create a new AccessLog with this data.
     */
    create: XOR<AccessLogCreateInput, AccessLogUncheckedCreateInput>
    /**
     * In case the AccessLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessLogUpdateInput, AccessLogUncheckedUpdateInput>
  }

  /**
   * AccessLog delete
   */
  export type AccessLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter which AccessLog to delete.
     */
    where: AccessLogWhereUniqueInput
  }

  /**
   * AccessLog deleteMany
   */
  export type AccessLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessLogs to delete
     */
    where?: AccessLogWhereInput
    /**
     * Limit how many AccessLogs to delete.
     */
    limit?: number
  }

  /**
   * AccessLog without action
   */
  export type AccessLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessLog
     */
    omit?: AccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessLogInclude<ExtArgs> | null
  }


  /**
   * Model DomainReputation
   */

  export type AggregateDomainReputation = {
    _count: DomainReputationCountAggregateOutputType | null
    _avg: DomainReputationAvgAggregateOutputType | null
    _sum: DomainReputationSumAggregateOutputType | null
    _min: DomainReputationMinAggregateOutputType | null
    _max: DomainReputationMaxAggregateOutputType | null
  }

  export type DomainReputationAvgAggregateOutputType = {
    id: number | null
    domainId: number | null
    score: number | null
  }

  export type DomainReputationSumAggregateOutputType = {
    id: number | null
    domainId: number | null
    score: number | null
  }

  export type DomainReputationMinAggregateOutputType = {
    id: number | null
    domainId: number | null
    score: number | null
    lastChecked: Date | null
    threats: string | null
    updatedAt: Date | null
  }

  export type DomainReputationMaxAggregateOutputType = {
    id: number | null
    domainId: number | null
    score: number | null
    lastChecked: Date | null
    threats: string | null
    updatedAt: Date | null
  }

  export type DomainReputationCountAggregateOutputType = {
    id: number
    domainId: number
    score: number
    lastChecked: number
    threats: number
    updatedAt: number
    _all: number
  }


  export type DomainReputationAvgAggregateInputType = {
    id?: true
    domainId?: true
    score?: true
  }

  export type DomainReputationSumAggregateInputType = {
    id?: true
    domainId?: true
    score?: true
  }

  export type DomainReputationMinAggregateInputType = {
    id?: true
    domainId?: true
    score?: true
    lastChecked?: true
    threats?: true
    updatedAt?: true
  }

  export type DomainReputationMaxAggregateInputType = {
    id?: true
    domainId?: true
    score?: true
    lastChecked?: true
    threats?: true
    updatedAt?: true
  }

  export type DomainReputationCountAggregateInputType = {
    id?: true
    domainId?: true
    score?: true
    lastChecked?: true
    threats?: true
    updatedAt?: true
    _all?: true
  }

  export type DomainReputationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DomainReputation to aggregate.
     */
    where?: DomainReputationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainReputations to fetch.
     */
    orderBy?: DomainReputationOrderByWithRelationInput | DomainReputationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainReputationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainReputations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainReputations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DomainReputations
    **/
    _count?: true | DomainReputationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DomainReputationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DomainReputationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainReputationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainReputationMaxAggregateInputType
  }

  export type GetDomainReputationAggregateType<T extends DomainReputationAggregateArgs> = {
        [P in keyof T & keyof AggregateDomainReputation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomainReputation[P]>
      : GetScalarType<T[P], AggregateDomainReputation[P]>
  }




  export type DomainReputationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainReputationWhereInput
    orderBy?: DomainReputationOrderByWithAggregationInput | DomainReputationOrderByWithAggregationInput[]
    by: DomainReputationScalarFieldEnum[] | DomainReputationScalarFieldEnum
    having?: DomainReputationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainReputationCountAggregateInputType | true
    _avg?: DomainReputationAvgAggregateInputType
    _sum?: DomainReputationSumAggregateInputType
    _min?: DomainReputationMinAggregateInputType
    _max?: DomainReputationMaxAggregateInputType
  }

  export type DomainReputationGroupByOutputType = {
    id: number
    domainId: number
    score: number
    lastChecked: Date
    threats: string
    updatedAt: Date
    _count: DomainReputationCountAggregateOutputType | null
    _avg: DomainReputationAvgAggregateOutputType | null
    _sum: DomainReputationSumAggregateOutputType | null
    _min: DomainReputationMinAggregateOutputType | null
    _max: DomainReputationMaxAggregateOutputType | null
  }

  type GetDomainReputationGroupByPayload<T extends DomainReputationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainReputationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainReputationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainReputationGroupByOutputType[P]>
            : GetScalarType<T[P], DomainReputationGroupByOutputType[P]>
        }
      >
    >


  export type DomainReputationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    score?: boolean
    lastChecked?: boolean
    threats?: boolean
    updatedAt?: boolean
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domainReputation"]>

  export type DomainReputationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    score?: boolean
    lastChecked?: boolean
    threats?: boolean
    updatedAt?: boolean
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domainReputation"]>

  export type DomainReputationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    score?: boolean
    lastChecked?: boolean
    threats?: boolean
    updatedAt?: boolean
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domainReputation"]>

  export type DomainReputationSelectScalar = {
    id?: boolean
    domainId?: boolean
    score?: boolean
    lastChecked?: boolean
    threats?: boolean
    updatedAt?: boolean
  }

  export type DomainReputationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "domainId" | "score" | "lastChecked" | "threats" | "updatedAt", ExtArgs["result"]["domainReputation"]>
  export type DomainReputationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
  }
  export type DomainReputationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
  }
  export type DomainReputationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | WhitelistedDomainDefaultArgs<ExtArgs>
  }

  export type $DomainReputationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DomainReputation"
    objects: {
      domain: Prisma.$WhitelistedDomainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domainId: number
      score: number
      lastChecked: Date
      threats: string
      updatedAt: Date
    }, ExtArgs["result"]["domainReputation"]>
    composites: {}
  }

  type DomainReputationGetPayload<S extends boolean | null | undefined | DomainReputationDefaultArgs> = $Result.GetResult<Prisma.$DomainReputationPayload, S>

  type DomainReputationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DomainReputationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DomainReputationCountAggregateInputType | true
    }

  export interface DomainReputationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DomainReputation'], meta: { name: 'DomainReputation' } }
    /**
     * Find zero or one DomainReputation that matches the filter.
     * @param {DomainReputationFindUniqueArgs} args - Arguments to find a DomainReputation
     * @example
     * // Get one DomainReputation
     * const domainReputation = await prisma.domainReputation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DomainReputationFindUniqueArgs>(args: SelectSubset<T, DomainReputationFindUniqueArgs<ExtArgs>>): Prisma__DomainReputationClient<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DomainReputation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DomainReputationFindUniqueOrThrowArgs} args - Arguments to find a DomainReputation
     * @example
     * // Get one DomainReputation
     * const domainReputation = await prisma.domainReputation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DomainReputationFindUniqueOrThrowArgs>(args: SelectSubset<T, DomainReputationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DomainReputationClient<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DomainReputation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainReputationFindFirstArgs} args - Arguments to find a DomainReputation
     * @example
     * // Get one DomainReputation
     * const domainReputation = await prisma.domainReputation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DomainReputationFindFirstArgs>(args?: SelectSubset<T, DomainReputationFindFirstArgs<ExtArgs>>): Prisma__DomainReputationClient<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DomainReputation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainReputationFindFirstOrThrowArgs} args - Arguments to find a DomainReputation
     * @example
     * // Get one DomainReputation
     * const domainReputation = await prisma.domainReputation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DomainReputationFindFirstOrThrowArgs>(args?: SelectSubset<T, DomainReputationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DomainReputationClient<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DomainReputations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainReputationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DomainReputations
     * const domainReputations = await prisma.domainReputation.findMany()
     * 
     * // Get first 10 DomainReputations
     * const domainReputations = await prisma.domainReputation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainReputationWithIdOnly = await prisma.domainReputation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DomainReputationFindManyArgs>(args?: SelectSubset<T, DomainReputationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DomainReputation.
     * @param {DomainReputationCreateArgs} args - Arguments to create a DomainReputation.
     * @example
     * // Create one DomainReputation
     * const DomainReputation = await prisma.domainReputation.create({
     *   data: {
     *     // ... data to create a DomainReputation
     *   }
     * })
     * 
     */
    create<T extends DomainReputationCreateArgs>(args: SelectSubset<T, DomainReputationCreateArgs<ExtArgs>>): Prisma__DomainReputationClient<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DomainReputations.
     * @param {DomainReputationCreateManyArgs} args - Arguments to create many DomainReputations.
     * @example
     * // Create many DomainReputations
     * const domainReputation = await prisma.domainReputation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DomainReputationCreateManyArgs>(args?: SelectSubset<T, DomainReputationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DomainReputations and returns the data saved in the database.
     * @param {DomainReputationCreateManyAndReturnArgs} args - Arguments to create many DomainReputations.
     * @example
     * // Create many DomainReputations
     * const domainReputation = await prisma.domainReputation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DomainReputations and only return the `id`
     * const domainReputationWithIdOnly = await prisma.domainReputation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DomainReputationCreateManyAndReturnArgs>(args?: SelectSubset<T, DomainReputationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DomainReputation.
     * @param {DomainReputationDeleteArgs} args - Arguments to delete one DomainReputation.
     * @example
     * // Delete one DomainReputation
     * const DomainReputation = await prisma.domainReputation.delete({
     *   where: {
     *     // ... filter to delete one DomainReputation
     *   }
     * })
     * 
     */
    delete<T extends DomainReputationDeleteArgs>(args: SelectSubset<T, DomainReputationDeleteArgs<ExtArgs>>): Prisma__DomainReputationClient<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DomainReputation.
     * @param {DomainReputationUpdateArgs} args - Arguments to update one DomainReputation.
     * @example
     * // Update one DomainReputation
     * const domainReputation = await prisma.domainReputation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DomainReputationUpdateArgs>(args: SelectSubset<T, DomainReputationUpdateArgs<ExtArgs>>): Prisma__DomainReputationClient<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DomainReputations.
     * @param {DomainReputationDeleteManyArgs} args - Arguments to filter DomainReputations to delete.
     * @example
     * // Delete a few DomainReputations
     * const { count } = await prisma.domainReputation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DomainReputationDeleteManyArgs>(args?: SelectSubset<T, DomainReputationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DomainReputations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainReputationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DomainReputations
     * const domainReputation = await prisma.domainReputation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DomainReputationUpdateManyArgs>(args: SelectSubset<T, DomainReputationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DomainReputations and returns the data updated in the database.
     * @param {DomainReputationUpdateManyAndReturnArgs} args - Arguments to update many DomainReputations.
     * @example
     * // Update many DomainReputations
     * const domainReputation = await prisma.domainReputation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DomainReputations and only return the `id`
     * const domainReputationWithIdOnly = await prisma.domainReputation.updateManyAndReturn({
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
    updateManyAndReturn<T extends DomainReputationUpdateManyAndReturnArgs>(args: SelectSubset<T, DomainReputationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DomainReputation.
     * @param {DomainReputationUpsertArgs} args - Arguments to update or create a DomainReputation.
     * @example
     * // Update or create a DomainReputation
     * const domainReputation = await prisma.domainReputation.upsert({
     *   create: {
     *     // ... data to create a DomainReputation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DomainReputation we want to update
     *   }
     * })
     */
    upsert<T extends DomainReputationUpsertArgs>(args: SelectSubset<T, DomainReputationUpsertArgs<ExtArgs>>): Prisma__DomainReputationClient<$Result.GetResult<Prisma.$DomainReputationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DomainReputations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainReputationCountArgs} args - Arguments to filter DomainReputations to count.
     * @example
     * // Count the number of DomainReputations
     * const count = await prisma.domainReputation.count({
     *   where: {
     *     // ... the filter for the DomainReputations we want to count
     *   }
     * })
    **/
    count<T extends DomainReputationCountArgs>(
      args?: Subset<T, DomainReputationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainReputationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DomainReputation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainReputationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DomainReputationAggregateArgs>(args: Subset<T, DomainReputationAggregateArgs>): Prisma.PrismaPromise<GetDomainReputationAggregateType<T>>

    /**
     * Group by DomainReputation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainReputationGroupByArgs} args - Group by arguments.
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
      T extends DomainReputationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainReputationGroupByArgs['orderBy'] }
        : { orderBy?: DomainReputationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DomainReputationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainReputationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DomainReputation model
   */
  readonly fields: DomainReputationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DomainReputation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainReputationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends WhitelistedDomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhitelistedDomainDefaultArgs<ExtArgs>>): Prisma__WhitelistedDomainClient<$Result.GetResult<Prisma.$WhitelistedDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DomainReputation model
   */
  interface DomainReputationFieldRefs {
    readonly id: FieldRef<"DomainReputation", 'Int'>
    readonly domainId: FieldRef<"DomainReputation", 'Int'>
    readonly score: FieldRef<"DomainReputation", 'Int'>
    readonly lastChecked: FieldRef<"DomainReputation", 'DateTime'>
    readonly threats: FieldRef<"DomainReputation", 'String'>
    readonly updatedAt: FieldRef<"DomainReputation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DomainReputation findUnique
   */
  export type DomainReputationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationInclude<ExtArgs> | null
    /**
     * Filter, which DomainReputation to fetch.
     */
    where: DomainReputationWhereUniqueInput
  }

  /**
   * DomainReputation findUniqueOrThrow
   */
  export type DomainReputationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationInclude<ExtArgs> | null
    /**
     * Filter, which DomainReputation to fetch.
     */
    where: DomainReputationWhereUniqueInput
  }

  /**
   * DomainReputation findFirst
   */
  export type DomainReputationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationInclude<ExtArgs> | null
    /**
     * Filter, which DomainReputation to fetch.
     */
    where?: DomainReputationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainReputations to fetch.
     */
    orderBy?: DomainReputationOrderByWithRelationInput | DomainReputationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DomainReputations.
     */
    cursor?: DomainReputationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainReputations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainReputations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DomainReputations.
     */
    distinct?: DomainReputationScalarFieldEnum | DomainReputationScalarFieldEnum[]
  }

  /**
   * DomainReputation findFirstOrThrow
   */
  export type DomainReputationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationInclude<ExtArgs> | null
    /**
     * Filter, which DomainReputation to fetch.
     */
    where?: DomainReputationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainReputations to fetch.
     */
    orderBy?: DomainReputationOrderByWithRelationInput | DomainReputationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DomainReputations.
     */
    cursor?: DomainReputationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainReputations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainReputations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DomainReputations.
     */
    distinct?: DomainReputationScalarFieldEnum | DomainReputationScalarFieldEnum[]
  }

  /**
   * DomainReputation findMany
   */
  export type DomainReputationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationInclude<ExtArgs> | null
    /**
     * Filter, which DomainReputations to fetch.
     */
    where?: DomainReputationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainReputations to fetch.
     */
    orderBy?: DomainReputationOrderByWithRelationInput | DomainReputationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DomainReputations.
     */
    cursor?: DomainReputationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainReputations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainReputations.
     */
    skip?: number
    distinct?: DomainReputationScalarFieldEnum | DomainReputationScalarFieldEnum[]
  }

  /**
   * DomainReputation create
   */
  export type DomainReputationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationInclude<ExtArgs> | null
    /**
     * The data needed to create a DomainReputation.
     */
    data: XOR<DomainReputationCreateInput, DomainReputationUncheckedCreateInput>
  }

  /**
   * DomainReputation createMany
   */
  export type DomainReputationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DomainReputations.
     */
    data: DomainReputationCreateManyInput | DomainReputationCreateManyInput[]
  }

  /**
   * DomainReputation createManyAndReturn
   */
  export type DomainReputationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * The data used to create many DomainReputations.
     */
    data: DomainReputationCreateManyInput | DomainReputationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DomainReputation update
   */
  export type DomainReputationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationInclude<ExtArgs> | null
    /**
     * The data needed to update a DomainReputation.
     */
    data: XOR<DomainReputationUpdateInput, DomainReputationUncheckedUpdateInput>
    /**
     * Choose, which DomainReputation to update.
     */
    where: DomainReputationWhereUniqueInput
  }

  /**
   * DomainReputation updateMany
   */
  export type DomainReputationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DomainReputations.
     */
    data: XOR<DomainReputationUpdateManyMutationInput, DomainReputationUncheckedUpdateManyInput>
    /**
     * Filter which DomainReputations to update
     */
    where?: DomainReputationWhereInput
    /**
     * Limit how many DomainReputations to update.
     */
    limit?: number
  }

  /**
   * DomainReputation updateManyAndReturn
   */
  export type DomainReputationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * The data used to update DomainReputations.
     */
    data: XOR<DomainReputationUpdateManyMutationInput, DomainReputationUncheckedUpdateManyInput>
    /**
     * Filter which DomainReputations to update
     */
    where?: DomainReputationWhereInput
    /**
     * Limit how many DomainReputations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DomainReputation upsert
   */
  export type DomainReputationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationInclude<ExtArgs> | null
    /**
     * The filter to search for the DomainReputation to update in case it exists.
     */
    where: DomainReputationWhereUniqueInput
    /**
     * In case the DomainReputation found by the `where` argument doesn't exist, create a new DomainReputation with this data.
     */
    create: XOR<DomainReputationCreateInput, DomainReputationUncheckedCreateInput>
    /**
     * In case the DomainReputation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainReputationUpdateInput, DomainReputationUncheckedUpdateInput>
  }

  /**
   * DomainReputation delete
   */
  export type DomainReputationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationInclude<ExtArgs> | null
    /**
     * Filter which DomainReputation to delete.
     */
    where: DomainReputationWhereUniqueInput
  }

  /**
   * DomainReputation deleteMany
   */
  export type DomainReputationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DomainReputations to delete
     */
    where?: DomainReputationWhereInput
    /**
     * Limit how many DomainReputations to delete.
     */
    limit?: number
  }

  /**
   * DomainReputation without action
   */
  export type DomainReputationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainReputation
     */
    select?: DomainReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainReputation
     */
    omit?: DomainReputationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainReputationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApexOneLogScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    eventType: 'eventType',
    severity: 'severity',
    sourceIP: 'sourceIP',
    destinationIP: 'destinationIP',
    domainName: 'domainName',
    filePath: 'filePath',
    fileName: 'fileName',
    fileHash: 'fileHash',
    action: 'action',
    details: 'details',
    status: 'status',
    assignedTo: 'assignedTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    domainId: 'domainId',
    userId: 'userId'
  };

  export type ApexOneLogScalarFieldEnum = (typeof ApexOneLogScalarFieldEnum)[keyof typeof ApexOneLogScalarFieldEnum]


  export const WhitelistedDomainScalarFieldEnum: {
    id: 'id',
    domain: 'domain',
    category: 'category',
    isWildcard: 'isWildcard',
    notes: 'notes',
    addedBy: 'addedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    riskLevel: 'riskLevel',
    dataClass: 'dataClass',
    encryptionKey: 'encryptionKey',
    lastVerified: 'lastVerified',
    verifiedBy: 'verifiedBy'
  };

  export type WhitelistedDomainScalarFieldEnum = (typeof WhitelistedDomainScalarFieldEnum)[keyof typeof WhitelistedDomainScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    domainName: 'domainName',
    performedBy: 'performedBy',
    details: 'details',
    createdAt: 'createdAt',
    domainId: 'domainId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    sessionId: 'sessionId',
    riskLevel: 'riskLevel',
    userId: 'userId'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const DomainCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    riskLevel: 'riskLevel',
    dataClass: 'dataClass'
  };

  export type DomainCategoryScalarFieldEnum = (typeof DomainCategoryScalarFieldEnum)[keyof typeof DomainCategoryScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    role: 'role',
    mfaEnabled: 'mfaEnabled',
    lastLogin: 'lastLogin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    isActive: 'isActive'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ComplianceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    requirements: 'requirements',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComplianceScalarFieldEnum = (typeof ComplianceScalarFieldEnum)[keyof typeof ComplianceScalarFieldEnum]


  export const AccessLogScalarFieldEnum: {
    id: 'id',
    domainId: 'domainId',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    timestamp: 'timestamp',
    action: 'action',
    status: 'status',
    details: 'details'
  };

  export type AccessLogScalarFieldEnum = (typeof AccessLogScalarFieldEnum)[keyof typeof AccessLogScalarFieldEnum]


  export const DomainReputationScalarFieldEnum: {
    id: 'id',
    domainId: 'domainId',
    score: 'score',
    lastChecked: 'lastChecked',
    threats: 'threats',
    updatedAt: 'updatedAt'
  };

  export type DomainReputationScalarFieldEnum = (typeof DomainReputationScalarFieldEnum)[keyof typeof DomainReputationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RiskLevel'
   */
  export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>
    


  /**
   * Reference to a field of type 'DataClass'
   */
  export type EnumDataClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataClass'>
    


  /**
   * Reference to a field of type 'AuditAction'
   */
  export type EnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ApexOneLogWhereInput = {
    AND?: ApexOneLogWhereInput | ApexOneLogWhereInput[]
    OR?: ApexOneLogWhereInput[]
    NOT?: ApexOneLogWhereInput | ApexOneLogWhereInput[]
    id?: IntFilter<"ApexOneLog"> | number
    timestamp?: DateTimeFilter<"ApexOneLog"> | Date | string
    eventType?: StringFilter<"ApexOneLog"> | string
    severity?: StringFilter<"ApexOneLog"> | string
    sourceIP?: StringFilter<"ApexOneLog"> | string
    destinationIP?: StringNullableFilter<"ApexOneLog"> | string | null
    domainName?: StringNullableFilter<"ApexOneLog"> | string | null
    filePath?: StringNullableFilter<"ApexOneLog"> | string | null
    fileName?: StringNullableFilter<"ApexOneLog"> | string | null
    fileHash?: StringNullableFilter<"ApexOneLog"> | string | null
    action?: StringFilter<"ApexOneLog"> | string
    details?: StringNullableFilter<"ApexOneLog"> | string | null
    status?: StringFilter<"ApexOneLog"> | string
    assignedTo?: StringNullableFilter<"ApexOneLog"> | string | null
    createdAt?: DateTimeFilter<"ApexOneLog"> | Date | string
    updatedAt?: DateTimeFilter<"ApexOneLog"> | Date | string
    domainId?: IntNullableFilter<"ApexOneLog"> | number | null
    userId?: IntNullableFilter<"ApexOneLog"> | number | null
    domain?: XOR<WhitelistedDomainNullableScalarRelationFilter, WhitelistedDomainWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ApexOneLogOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    sourceIP?: SortOrder
    destinationIP?: SortOrderInput | SortOrder
    domainName?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    fileHash?: SortOrderInput | SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domainId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    domain?: WhitelistedDomainOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ApexOneLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApexOneLogWhereInput | ApexOneLogWhereInput[]
    OR?: ApexOneLogWhereInput[]
    NOT?: ApexOneLogWhereInput | ApexOneLogWhereInput[]
    timestamp?: DateTimeFilter<"ApexOneLog"> | Date | string
    eventType?: StringFilter<"ApexOneLog"> | string
    severity?: StringFilter<"ApexOneLog"> | string
    sourceIP?: StringFilter<"ApexOneLog"> | string
    destinationIP?: StringNullableFilter<"ApexOneLog"> | string | null
    domainName?: StringNullableFilter<"ApexOneLog"> | string | null
    filePath?: StringNullableFilter<"ApexOneLog"> | string | null
    fileName?: StringNullableFilter<"ApexOneLog"> | string | null
    fileHash?: StringNullableFilter<"ApexOneLog"> | string | null
    action?: StringFilter<"ApexOneLog"> | string
    details?: StringNullableFilter<"ApexOneLog"> | string | null
    status?: StringFilter<"ApexOneLog"> | string
    assignedTo?: StringNullableFilter<"ApexOneLog"> | string | null
    createdAt?: DateTimeFilter<"ApexOneLog"> | Date | string
    updatedAt?: DateTimeFilter<"ApexOneLog"> | Date | string
    domainId?: IntNullableFilter<"ApexOneLog"> | number | null
    userId?: IntNullableFilter<"ApexOneLog"> | number | null
    domain?: XOR<WhitelistedDomainNullableScalarRelationFilter, WhitelistedDomainWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ApexOneLogOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    sourceIP?: SortOrder
    destinationIP?: SortOrderInput | SortOrder
    domainName?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    fileHash?: SortOrderInput | SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domainId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ApexOneLogCountOrderByAggregateInput
    _avg?: ApexOneLogAvgOrderByAggregateInput
    _max?: ApexOneLogMaxOrderByAggregateInput
    _min?: ApexOneLogMinOrderByAggregateInput
    _sum?: ApexOneLogSumOrderByAggregateInput
  }

  export type ApexOneLogScalarWhereWithAggregatesInput = {
    AND?: ApexOneLogScalarWhereWithAggregatesInput | ApexOneLogScalarWhereWithAggregatesInput[]
    OR?: ApexOneLogScalarWhereWithAggregatesInput[]
    NOT?: ApexOneLogScalarWhereWithAggregatesInput | ApexOneLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApexOneLog"> | number
    timestamp?: DateTimeWithAggregatesFilter<"ApexOneLog"> | Date | string
    eventType?: StringWithAggregatesFilter<"ApexOneLog"> | string
    severity?: StringWithAggregatesFilter<"ApexOneLog"> | string
    sourceIP?: StringWithAggregatesFilter<"ApexOneLog"> | string
    destinationIP?: StringNullableWithAggregatesFilter<"ApexOneLog"> | string | null
    domainName?: StringNullableWithAggregatesFilter<"ApexOneLog"> | string | null
    filePath?: StringNullableWithAggregatesFilter<"ApexOneLog"> | string | null
    fileName?: StringNullableWithAggregatesFilter<"ApexOneLog"> | string | null
    fileHash?: StringNullableWithAggregatesFilter<"ApexOneLog"> | string | null
    action?: StringWithAggregatesFilter<"ApexOneLog"> | string
    details?: StringNullableWithAggregatesFilter<"ApexOneLog"> | string | null
    status?: StringWithAggregatesFilter<"ApexOneLog"> | string
    assignedTo?: StringNullableWithAggregatesFilter<"ApexOneLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApexOneLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApexOneLog"> | Date | string
    domainId?: IntNullableWithAggregatesFilter<"ApexOneLog"> | number | null
    userId?: IntNullableWithAggregatesFilter<"ApexOneLog"> | number | null
  }

  export type WhitelistedDomainWhereInput = {
    AND?: WhitelistedDomainWhereInput | WhitelistedDomainWhereInput[]
    OR?: WhitelistedDomainWhereInput[]
    NOT?: WhitelistedDomainWhereInput | WhitelistedDomainWhereInput[]
    id?: IntFilter<"WhitelistedDomain"> | number
    domain?: StringFilter<"WhitelistedDomain"> | string
    category?: StringFilter<"WhitelistedDomain"> | string
    isWildcard?: BoolFilter<"WhitelistedDomain"> | boolean
    notes?: StringNullableFilter<"WhitelistedDomain"> | string | null
    addedBy?: StringNullableFilter<"WhitelistedDomain"> | string | null
    createdAt?: DateTimeFilter<"WhitelistedDomain"> | Date | string
    updatedAt?: DateTimeFilter<"WhitelistedDomain"> | Date | string
    expiresAt?: DateTimeNullableFilter<"WhitelistedDomain"> | Date | string | null
    isActive?: BoolFilter<"WhitelistedDomain"> | boolean
    riskLevel?: EnumRiskLevelFilter<"WhitelistedDomain"> | $Enums.RiskLevel
    dataClass?: EnumDataClassFilter<"WhitelistedDomain"> | $Enums.DataClass
    encryptionKey?: StringNullableFilter<"WhitelistedDomain"> | string | null
    lastVerified?: DateTimeNullableFilter<"WhitelistedDomain"> | Date | string | null
    verifiedBy?: StringNullableFilter<"WhitelistedDomain"> | string | null
    auditLogs?: AuditLogListRelationFilter
    accessLogs?: AccessLogListRelationFilter
    compliance?: ComplianceListRelationFilter
    reputation?: XOR<DomainReputationNullableScalarRelationFilter, DomainReputationWhereInput> | null
    apexOneLogs?: ApexOneLogListRelationFilter
  }

  export type WhitelistedDomainOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    category?: SortOrder
    isWildcard?: SortOrder
    notes?: SortOrderInput | SortOrder
    addedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    riskLevel?: SortOrder
    dataClass?: SortOrder
    encryptionKey?: SortOrderInput | SortOrder
    lastVerified?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    auditLogs?: AuditLogOrderByRelationAggregateInput
    accessLogs?: AccessLogOrderByRelationAggregateInput
    compliance?: ComplianceOrderByRelationAggregateInput
    reputation?: DomainReputationOrderByWithRelationInput
    apexOneLogs?: ApexOneLogOrderByRelationAggregateInput
  }

  export type WhitelistedDomainWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    domain?: string
    AND?: WhitelistedDomainWhereInput | WhitelistedDomainWhereInput[]
    OR?: WhitelistedDomainWhereInput[]
    NOT?: WhitelistedDomainWhereInput | WhitelistedDomainWhereInput[]
    category?: StringFilter<"WhitelistedDomain"> | string
    isWildcard?: BoolFilter<"WhitelistedDomain"> | boolean
    notes?: StringNullableFilter<"WhitelistedDomain"> | string | null
    addedBy?: StringNullableFilter<"WhitelistedDomain"> | string | null
    createdAt?: DateTimeFilter<"WhitelistedDomain"> | Date | string
    updatedAt?: DateTimeFilter<"WhitelistedDomain"> | Date | string
    expiresAt?: DateTimeNullableFilter<"WhitelistedDomain"> | Date | string | null
    isActive?: BoolFilter<"WhitelistedDomain"> | boolean
    riskLevel?: EnumRiskLevelFilter<"WhitelistedDomain"> | $Enums.RiskLevel
    dataClass?: EnumDataClassFilter<"WhitelistedDomain"> | $Enums.DataClass
    encryptionKey?: StringNullableFilter<"WhitelistedDomain"> | string | null
    lastVerified?: DateTimeNullableFilter<"WhitelistedDomain"> | Date | string | null
    verifiedBy?: StringNullableFilter<"WhitelistedDomain"> | string | null
    auditLogs?: AuditLogListRelationFilter
    accessLogs?: AccessLogListRelationFilter
    compliance?: ComplianceListRelationFilter
    reputation?: XOR<DomainReputationNullableScalarRelationFilter, DomainReputationWhereInput> | null
    apexOneLogs?: ApexOneLogListRelationFilter
  }, "id" | "domain">

  export type WhitelistedDomainOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    category?: SortOrder
    isWildcard?: SortOrder
    notes?: SortOrderInput | SortOrder
    addedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    riskLevel?: SortOrder
    dataClass?: SortOrder
    encryptionKey?: SortOrderInput | SortOrder
    lastVerified?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    _count?: WhitelistedDomainCountOrderByAggregateInput
    _avg?: WhitelistedDomainAvgOrderByAggregateInput
    _max?: WhitelistedDomainMaxOrderByAggregateInput
    _min?: WhitelistedDomainMinOrderByAggregateInput
    _sum?: WhitelistedDomainSumOrderByAggregateInput
  }

  export type WhitelistedDomainScalarWhereWithAggregatesInput = {
    AND?: WhitelistedDomainScalarWhereWithAggregatesInput | WhitelistedDomainScalarWhereWithAggregatesInput[]
    OR?: WhitelistedDomainScalarWhereWithAggregatesInput[]
    NOT?: WhitelistedDomainScalarWhereWithAggregatesInput | WhitelistedDomainScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WhitelistedDomain"> | number
    domain?: StringWithAggregatesFilter<"WhitelistedDomain"> | string
    category?: StringWithAggregatesFilter<"WhitelistedDomain"> | string
    isWildcard?: BoolWithAggregatesFilter<"WhitelistedDomain"> | boolean
    notes?: StringNullableWithAggregatesFilter<"WhitelistedDomain"> | string | null
    addedBy?: StringNullableWithAggregatesFilter<"WhitelistedDomain"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WhitelistedDomain"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhitelistedDomain"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"WhitelistedDomain"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"WhitelistedDomain"> | boolean
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"WhitelistedDomain"> | $Enums.RiskLevel
    dataClass?: EnumDataClassWithAggregatesFilter<"WhitelistedDomain"> | $Enums.DataClass
    encryptionKey?: StringNullableWithAggregatesFilter<"WhitelistedDomain"> | string | null
    lastVerified?: DateTimeNullableWithAggregatesFilter<"WhitelistedDomain"> | Date | string | null
    verifiedBy?: StringNullableWithAggregatesFilter<"WhitelistedDomain"> | string | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    domainName?: StringFilter<"AuditLog"> | string
    performedBy?: StringNullableFilter<"AuditLog"> | string | null
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    domainId?: IntFilter<"AuditLog"> | number
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    sessionId?: StringNullableFilter<"AuditLog"> | string | null
    riskLevel?: EnumRiskLevelNullableFilter<"AuditLog"> | $Enums.RiskLevel | null
    userId?: IntNullableFilter<"AuditLog"> | number | null
    domain?: XOR<WhitelistedDomainScalarRelationFilter, WhitelistedDomainWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    domainName?: SortOrder
    performedBy?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    domainId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    riskLevel?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    domain?: WhitelistedDomainOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    domainName?: StringFilter<"AuditLog"> | string
    performedBy?: StringNullableFilter<"AuditLog"> | string | null
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    domainId?: IntFilter<"AuditLog"> | number
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    sessionId?: StringNullableFilter<"AuditLog"> | string | null
    riskLevel?: EnumRiskLevelNullableFilter<"AuditLog"> | $Enums.RiskLevel | null
    userId?: IntNullableFilter<"AuditLog"> | number | null
    domain?: XOR<WhitelistedDomainScalarRelationFilter, WhitelistedDomainWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    domainName?: SortOrder
    performedBy?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    domainId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    riskLevel?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    action?: EnumAuditActionWithAggregatesFilter<"AuditLog"> | $Enums.AuditAction
    domainName?: StringWithAggregatesFilter<"AuditLog"> | string
    performedBy?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    domainId?: IntWithAggregatesFilter<"AuditLog"> | number
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    sessionId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    riskLevel?: EnumRiskLevelNullableWithAggregatesFilter<"AuditLog"> | $Enums.RiskLevel | null
    userId?: IntNullableWithAggregatesFilter<"AuditLog"> | number | null
  }

  export type DomainCategoryWhereInput = {
    AND?: DomainCategoryWhereInput | DomainCategoryWhereInput[]
    OR?: DomainCategoryWhereInput[]
    NOT?: DomainCategoryWhereInput | DomainCategoryWhereInput[]
    id?: IntFilter<"DomainCategory"> | number
    name?: StringFilter<"DomainCategory"> | string
    description?: StringNullableFilter<"DomainCategory"> | string | null
    createdAt?: DateTimeFilter<"DomainCategory"> | Date | string
    updatedAt?: DateTimeFilter<"DomainCategory"> | Date | string
    riskLevel?: EnumRiskLevelFilter<"DomainCategory"> | $Enums.RiskLevel
    dataClass?: EnumDataClassFilter<"DomainCategory"> | $Enums.DataClass
    compliance?: ComplianceListRelationFilter
  }

  export type DomainCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    riskLevel?: SortOrder
    dataClass?: SortOrder
    compliance?: ComplianceOrderByRelationAggregateInput
  }

  export type DomainCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DomainCategoryWhereInput | DomainCategoryWhereInput[]
    OR?: DomainCategoryWhereInput[]
    NOT?: DomainCategoryWhereInput | DomainCategoryWhereInput[]
    description?: StringNullableFilter<"DomainCategory"> | string | null
    createdAt?: DateTimeFilter<"DomainCategory"> | Date | string
    updatedAt?: DateTimeFilter<"DomainCategory"> | Date | string
    riskLevel?: EnumRiskLevelFilter<"DomainCategory"> | $Enums.RiskLevel
    dataClass?: EnumDataClassFilter<"DomainCategory"> | $Enums.DataClass
    compliance?: ComplianceListRelationFilter
  }, "id" | "name">

  export type DomainCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    riskLevel?: SortOrder
    dataClass?: SortOrder
    _count?: DomainCategoryCountOrderByAggregateInput
    _avg?: DomainCategoryAvgOrderByAggregateInput
    _max?: DomainCategoryMaxOrderByAggregateInput
    _min?: DomainCategoryMinOrderByAggregateInput
    _sum?: DomainCategorySumOrderByAggregateInput
  }

  export type DomainCategoryScalarWhereWithAggregatesInput = {
    AND?: DomainCategoryScalarWhereWithAggregatesInput | DomainCategoryScalarWhereWithAggregatesInput[]
    OR?: DomainCategoryScalarWhereWithAggregatesInput[]
    NOT?: DomainCategoryScalarWhereWithAggregatesInput | DomainCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DomainCategory"> | number
    name?: StringWithAggregatesFilter<"DomainCategory"> | string
    description?: StringNullableWithAggregatesFilter<"DomainCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DomainCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DomainCategory"> | Date | string
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"DomainCategory"> | $Enums.RiskLevel
    dataClass?: EnumDataClassWithAggregatesFilter<"DomainCategory"> | $Enums.DataClass
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    mfaEnabled?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    accessLogs?: AccessLogListRelationFilter
    apexOneLogs?: ApexOneLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    mfaEnabled?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    accessLogs?: AccessLogOrderByRelationAggregateInput
    apexOneLogs?: ApexOneLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    mfaEnabled?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    accessLogs?: AccessLogListRelationFilter
    apexOneLogs?: ApexOneLogListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    mfaEnabled?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    mfaEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    userId?: IntFilter<"Session"> | number
    token?: StringFilter<"Session"> | string
    ipAddress?: StringFilter<"Session"> | string
    userAgent?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    isActive?: BoolFilter<"Session"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    ipAddress?: StringFilter<"Session"> | string
    userAgent?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    isActive?: BoolFilter<"Session"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    userId?: IntWithAggregatesFilter<"Session"> | number
    token?: StringWithAggregatesFilter<"Session"> | string
    ipAddress?: StringWithAggregatesFilter<"Session"> | string
    userAgent?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Session"> | boolean
  }

  export type ComplianceWhereInput = {
    AND?: ComplianceWhereInput | ComplianceWhereInput[]
    OR?: ComplianceWhereInput[]
    NOT?: ComplianceWhereInput | ComplianceWhereInput[]
    id?: IntFilter<"Compliance"> | number
    name?: StringFilter<"Compliance"> | string
    description?: StringNullableFilter<"Compliance"> | string | null
    requirements?: StringFilter<"Compliance"> | string
    createdAt?: DateTimeFilter<"Compliance"> | Date | string
    updatedAt?: DateTimeFilter<"Compliance"> | Date | string
    domains?: WhitelistedDomainListRelationFilter
    categories?: DomainCategoryListRelationFilter
  }

  export type ComplianceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    requirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domains?: WhitelistedDomainOrderByRelationAggregateInput
    categories?: DomainCategoryOrderByRelationAggregateInput
  }

  export type ComplianceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ComplianceWhereInput | ComplianceWhereInput[]
    OR?: ComplianceWhereInput[]
    NOT?: ComplianceWhereInput | ComplianceWhereInput[]
    description?: StringNullableFilter<"Compliance"> | string | null
    requirements?: StringFilter<"Compliance"> | string
    createdAt?: DateTimeFilter<"Compliance"> | Date | string
    updatedAt?: DateTimeFilter<"Compliance"> | Date | string
    domains?: WhitelistedDomainListRelationFilter
    categories?: DomainCategoryListRelationFilter
  }, "id" | "name">

  export type ComplianceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    requirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComplianceCountOrderByAggregateInput
    _avg?: ComplianceAvgOrderByAggregateInput
    _max?: ComplianceMaxOrderByAggregateInput
    _min?: ComplianceMinOrderByAggregateInput
    _sum?: ComplianceSumOrderByAggregateInput
  }

  export type ComplianceScalarWhereWithAggregatesInput = {
    AND?: ComplianceScalarWhereWithAggregatesInput | ComplianceScalarWhereWithAggregatesInput[]
    OR?: ComplianceScalarWhereWithAggregatesInput[]
    NOT?: ComplianceScalarWhereWithAggregatesInput | ComplianceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Compliance"> | number
    name?: StringWithAggregatesFilter<"Compliance"> | string
    description?: StringNullableWithAggregatesFilter<"Compliance"> | string | null
    requirements?: StringWithAggregatesFilter<"Compliance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Compliance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Compliance"> | Date | string
  }

  export type AccessLogWhereInput = {
    AND?: AccessLogWhereInput | AccessLogWhereInput[]
    OR?: AccessLogWhereInput[]
    NOT?: AccessLogWhereInput | AccessLogWhereInput[]
    id?: IntFilter<"AccessLog"> | number
    domainId?: IntFilter<"AccessLog"> | number
    userId?: IntFilter<"AccessLog"> | number
    ipAddress?: StringFilter<"AccessLog"> | string
    userAgent?: StringFilter<"AccessLog"> | string
    timestamp?: DateTimeFilter<"AccessLog"> | Date | string
    action?: StringFilter<"AccessLog"> | string
    status?: StringFilter<"AccessLog"> | string
    details?: StringNullableFilter<"AccessLog"> | string | null
    domain?: XOR<WhitelistedDomainScalarRelationFilter, WhitelistedDomainWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccessLogOrderByWithRelationInput = {
    id?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
    action?: SortOrder
    status?: SortOrder
    details?: SortOrderInput | SortOrder
    domain?: WhitelistedDomainOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AccessLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccessLogWhereInput | AccessLogWhereInput[]
    OR?: AccessLogWhereInput[]
    NOT?: AccessLogWhereInput | AccessLogWhereInput[]
    domainId?: IntFilter<"AccessLog"> | number
    userId?: IntFilter<"AccessLog"> | number
    ipAddress?: StringFilter<"AccessLog"> | string
    userAgent?: StringFilter<"AccessLog"> | string
    timestamp?: DateTimeFilter<"AccessLog"> | Date | string
    action?: StringFilter<"AccessLog"> | string
    status?: StringFilter<"AccessLog"> | string
    details?: StringNullableFilter<"AccessLog"> | string | null
    domain?: XOR<WhitelistedDomainScalarRelationFilter, WhitelistedDomainWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccessLogOrderByWithAggregationInput = {
    id?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
    action?: SortOrder
    status?: SortOrder
    details?: SortOrderInput | SortOrder
    _count?: AccessLogCountOrderByAggregateInput
    _avg?: AccessLogAvgOrderByAggregateInput
    _max?: AccessLogMaxOrderByAggregateInput
    _min?: AccessLogMinOrderByAggregateInput
    _sum?: AccessLogSumOrderByAggregateInput
  }

  export type AccessLogScalarWhereWithAggregatesInput = {
    AND?: AccessLogScalarWhereWithAggregatesInput | AccessLogScalarWhereWithAggregatesInput[]
    OR?: AccessLogScalarWhereWithAggregatesInput[]
    NOT?: AccessLogScalarWhereWithAggregatesInput | AccessLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccessLog"> | number
    domainId?: IntWithAggregatesFilter<"AccessLog"> | number
    userId?: IntWithAggregatesFilter<"AccessLog"> | number
    ipAddress?: StringWithAggregatesFilter<"AccessLog"> | string
    userAgent?: StringWithAggregatesFilter<"AccessLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AccessLog"> | Date | string
    action?: StringWithAggregatesFilter<"AccessLog"> | string
    status?: StringWithAggregatesFilter<"AccessLog"> | string
    details?: StringNullableWithAggregatesFilter<"AccessLog"> | string | null
  }

  export type DomainReputationWhereInput = {
    AND?: DomainReputationWhereInput | DomainReputationWhereInput[]
    OR?: DomainReputationWhereInput[]
    NOT?: DomainReputationWhereInput | DomainReputationWhereInput[]
    id?: IntFilter<"DomainReputation"> | number
    domainId?: IntFilter<"DomainReputation"> | number
    score?: IntFilter<"DomainReputation"> | number
    lastChecked?: DateTimeFilter<"DomainReputation"> | Date | string
    threats?: StringFilter<"DomainReputation"> | string
    updatedAt?: DateTimeFilter<"DomainReputation"> | Date | string
    domain?: XOR<WhitelistedDomainScalarRelationFilter, WhitelistedDomainWhereInput>
  }

  export type DomainReputationOrderByWithRelationInput = {
    id?: SortOrder
    domainId?: SortOrder
    score?: SortOrder
    lastChecked?: SortOrder
    threats?: SortOrder
    updatedAt?: SortOrder
    domain?: WhitelistedDomainOrderByWithRelationInput
  }

  export type DomainReputationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    domainId?: number
    AND?: DomainReputationWhereInput | DomainReputationWhereInput[]
    OR?: DomainReputationWhereInput[]
    NOT?: DomainReputationWhereInput | DomainReputationWhereInput[]
    score?: IntFilter<"DomainReputation"> | number
    lastChecked?: DateTimeFilter<"DomainReputation"> | Date | string
    threats?: StringFilter<"DomainReputation"> | string
    updatedAt?: DateTimeFilter<"DomainReputation"> | Date | string
    domain?: XOR<WhitelistedDomainScalarRelationFilter, WhitelistedDomainWhereInput>
  }, "id" | "domainId">

  export type DomainReputationOrderByWithAggregationInput = {
    id?: SortOrder
    domainId?: SortOrder
    score?: SortOrder
    lastChecked?: SortOrder
    threats?: SortOrder
    updatedAt?: SortOrder
    _count?: DomainReputationCountOrderByAggregateInput
    _avg?: DomainReputationAvgOrderByAggregateInput
    _max?: DomainReputationMaxOrderByAggregateInput
    _min?: DomainReputationMinOrderByAggregateInput
    _sum?: DomainReputationSumOrderByAggregateInput
  }

  export type DomainReputationScalarWhereWithAggregatesInput = {
    AND?: DomainReputationScalarWhereWithAggregatesInput | DomainReputationScalarWhereWithAggregatesInput[]
    OR?: DomainReputationScalarWhereWithAggregatesInput[]
    NOT?: DomainReputationScalarWhereWithAggregatesInput | DomainReputationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DomainReputation"> | number
    domainId?: IntWithAggregatesFilter<"DomainReputation"> | number
    score?: IntWithAggregatesFilter<"DomainReputation"> | number
    lastChecked?: DateTimeWithAggregatesFilter<"DomainReputation"> | Date | string
    threats?: StringWithAggregatesFilter<"DomainReputation"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"DomainReputation"> | Date | string
  }

  export type ApexOneLogCreateInput = {
    timestamp?: Date | string
    eventType: string
    severity: string
    sourceIP: string
    destinationIP?: string | null
    domainName?: string | null
    filePath?: string | null
    fileName?: string | null
    fileHash?: string | null
    action: string
    details?: string | null
    status: string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    domain?: WhitelistedDomainCreateNestedOneWithoutApexOneLogsInput
    user?: UserCreateNestedOneWithoutApexOneLogsInput
  }

  export type ApexOneLogUncheckedCreateInput = {
    id?: number
    timestamp?: Date | string
    eventType: string
    severity: string
    sourceIP: string
    destinationIP?: string | null
    domainName?: string | null
    filePath?: string | null
    fileName?: string | null
    fileHash?: string | null
    action: string
    details?: string | null
    status: string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    domainId?: number | null
    userId?: number | null
  }

  export type ApexOneLogUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceIP?: StringFieldUpdateOperationsInput | string
    destinationIP?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: WhitelistedDomainUpdateOneWithoutApexOneLogsNestedInput
    user?: UserUpdateOneWithoutApexOneLogsNestedInput
  }

  export type ApexOneLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceIP?: StringFieldUpdateOperationsInput | string
    destinationIP?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApexOneLogCreateManyInput = {
    id?: number
    timestamp?: Date | string
    eventType: string
    severity: string
    sourceIP: string
    destinationIP?: string | null
    domainName?: string | null
    filePath?: string | null
    fileName?: string | null
    fileHash?: string | null
    action: string
    details?: string | null
    status: string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    domainId?: number | null
    userId?: number | null
  }

  export type ApexOneLogUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceIP?: StringFieldUpdateOperationsInput | string
    destinationIP?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApexOneLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceIP?: StringFieldUpdateOperationsInput | string
    destinationIP?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WhitelistedDomainCreateInput = {
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    auditLogs?: AuditLogCreateNestedManyWithoutDomainInput
    accessLogs?: AccessLogCreateNestedManyWithoutDomainInput
    compliance?: ComplianceCreateNestedManyWithoutDomainsInput
    reputation?: DomainReputationCreateNestedOneWithoutDomainInput
    apexOneLogs?: ApexOneLogCreateNestedManyWithoutDomainInput
  }

  export type WhitelistedDomainUncheckedCreateInput = {
    id?: number
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutDomainInput
    accessLogs?: AccessLogUncheckedCreateNestedManyWithoutDomainInput
    compliance?: ComplianceUncheckedCreateNestedManyWithoutDomainsInput
    reputation?: DomainReputationUncheckedCreateNestedOneWithoutDomainInput
    apexOneLogs?: ApexOneLogUncheckedCreateNestedManyWithoutDomainInput
  }

  export type WhitelistedDomainUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUpdateManyWithoutDomainNestedInput
    accessLogs?: AccessLogUpdateManyWithoutDomainNestedInput
    compliance?: ComplianceUpdateManyWithoutDomainsNestedInput
    reputation?: DomainReputationUpdateOneWithoutDomainNestedInput
    apexOneLogs?: ApexOneLogUpdateManyWithoutDomainNestedInput
  }

  export type WhitelistedDomainUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutDomainNestedInput
    accessLogs?: AccessLogUncheckedUpdateManyWithoutDomainNestedInput
    compliance?: ComplianceUncheckedUpdateManyWithoutDomainsNestedInput
    reputation?: DomainReputationUncheckedUpdateOneWithoutDomainNestedInput
    apexOneLogs?: ApexOneLogUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type WhitelistedDomainCreateManyInput = {
    id?: number
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
  }

  export type WhitelistedDomainUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WhitelistedDomainUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateInput = {
    action: $Enums.AuditAction
    domainName: string
    performedBy?: string | null
    details?: string | null
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    riskLevel?: $Enums.RiskLevel | null
    domain: WhitelistedDomainCreateNestedOneWithoutAuditLogsInput
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    action: $Enums.AuditAction
    domainName: string
    performedBy?: string | null
    details?: string | null
    createdAt?: Date | string
    domainId: number
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    riskLevel?: $Enums.RiskLevel | null
    userId?: number | null
  }

  export type AuditLogUpdateInput = {
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    domainName?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    domain?: WhitelistedDomainUpdateOneRequiredWithoutAuditLogsNestedInput
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    domainName?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AuditLogCreateManyInput = {
    id?: number
    action: $Enums.AuditAction
    domainName: string
    performedBy?: string | null
    details?: string | null
    createdAt?: Date | string
    domainId: number
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    riskLevel?: $Enums.RiskLevel | null
    userId?: number | null
  }

  export type AuditLogUpdateManyMutationInput = {
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    domainName?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    domainName?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DomainCategoryCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    compliance?: ComplianceCreateNestedManyWithoutCategoriesInput
  }

  export type DomainCategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    compliance?: ComplianceUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type DomainCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    compliance?: ComplianceUpdateManyWithoutCategoriesNestedInput
  }

  export type DomainCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    compliance?: ComplianceUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type DomainCategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
  }

  export type DomainCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
  }

  export type DomainCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
  }

  export type UserCreateInput = {
    username: string
    role: $Enums.UserRole
    mfaEnabled?: boolean
    lastLogin?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    accessLogs?: AccessLogCreateNestedManyWithoutUserInput
    apexOneLogs?: ApexOneLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    role: $Enums.UserRole
    mfaEnabled?: boolean
    lastLogin?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    accessLogs?: AccessLogUncheckedCreateNestedManyWithoutUserInput
    apexOneLogs?: ApexOneLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    accessLogs?: AccessLogUpdateManyWithoutUserNestedInput
    apexOneLogs?: ApexOneLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    accessLogs?: AccessLogUncheckedUpdateManyWithoutUserNestedInput
    apexOneLogs?: ApexOneLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    role: $Enums.UserRole
    mfaEnabled?: boolean
    lastLogin?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    token: string
    ipAddress: string
    userAgent: string
    createdAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    ipAddress: string
    userAgent: string
    createdAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
  }

  export type SessionUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionCreateManyInput = {
    id?: number
    userId: number
    token: string
    ipAddress: string
    userAgent: string
    createdAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
  }

  export type SessionUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComplianceCreateInput = {
    name: string
    description?: string | null
    requirements: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domains?: WhitelistedDomainCreateNestedManyWithoutComplianceInput
    categories?: DomainCategoryCreateNestedManyWithoutComplianceInput
  }

  export type ComplianceUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    requirements: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domains?: WhitelistedDomainUncheckedCreateNestedManyWithoutComplianceInput
    categories?: DomainCategoryUncheckedCreateNestedManyWithoutComplianceInput
  }

  export type ComplianceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: WhitelistedDomainUpdateManyWithoutComplianceNestedInput
    categories?: DomainCategoryUpdateManyWithoutComplianceNestedInput
  }

  export type ComplianceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: WhitelistedDomainUncheckedUpdateManyWithoutComplianceNestedInput
    categories?: DomainCategoryUncheckedUpdateManyWithoutComplianceNestedInput
  }

  export type ComplianceCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    requirements: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplianceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplianceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessLogCreateInput = {
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
    action: string
    status: string
    details?: string | null
    domain: WhitelistedDomainCreateNestedOneWithoutAccessLogsInput
    user: UserCreateNestedOneWithoutAccessLogsInput
  }

  export type AccessLogUncheckedCreateInput = {
    id?: number
    domainId: number
    userId: number
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
    action: string
    status: string
    details?: string | null
  }

  export type AccessLogUpdateInput = {
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: WhitelistedDomainUpdateOneRequiredWithoutAccessLogsNestedInput
    user?: UserUpdateOneRequiredWithoutAccessLogsNestedInput
  }

  export type AccessLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domainId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessLogCreateManyInput = {
    id?: number
    domainId: number
    userId: number
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
    action: string
    status: string
    details?: string | null
  }

  export type AccessLogUpdateManyMutationInput = {
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domainId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DomainReputationCreateInput = {
    score?: number
    lastChecked?: Date | string
    threats: string
    updatedAt?: Date | string
    domain: WhitelistedDomainCreateNestedOneWithoutReputationInput
  }

  export type DomainReputationUncheckedCreateInput = {
    id?: number
    domainId: number
    score?: number
    lastChecked?: Date | string
    threats: string
    updatedAt?: Date | string
  }

  export type DomainReputationUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    lastChecked?: DateTimeFieldUpdateOperationsInput | Date | string
    threats?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: WhitelistedDomainUpdateOneRequiredWithoutReputationNestedInput
  }

  export type DomainReputationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domainId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    lastChecked?: DateTimeFieldUpdateOperationsInput | Date | string
    threats?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainReputationCreateManyInput = {
    id?: number
    domainId: number
    score?: number
    lastChecked?: Date | string
    threats: string
    updatedAt?: Date | string
  }

  export type DomainReputationUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    lastChecked?: DateTimeFieldUpdateOperationsInput | Date | string
    threats?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainReputationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domainId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    lastChecked?: DateTimeFieldUpdateOperationsInput | Date | string
    threats?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WhitelistedDomainNullableScalarRelationFilter = {
    is?: WhitelistedDomainWhereInput | null
    isNot?: WhitelistedDomainWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApexOneLogCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    sourceIP?: SortOrder
    destinationIP?: SortOrder
    domainName?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    fileHash?: SortOrder
    action?: SortOrder
    details?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
  }

  export type ApexOneLogAvgOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
  }

  export type ApexOneLogMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    sourceIP?: SortOrder
    destinationIP?: SortOrder
    domainName?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    fileHash?: SortOrder
    action?: SortOrder
    details?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
  }

  export type ApexOneLogMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    sourceIP?: SortOrder
    destinationIP?: SortOrder
    domainName?: SortOrder
    filePath?: SortOrder
    fileName?: SortOrder
    fileHash?: SortOrder
    action?: SortOrder
    details?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
  }

  export type ApexOneLogSumOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type EnumDataClassFilter<$PrismaModel = never> = {
    equals?: $Enums.DataClass | EnumDataClassFieldRefInput<$PrismaModel>
    in?: $Enums.DataClass[]
    notIn?: $Enums.DataClass[]
    not?: NestedEnumDataClassFilter<$PrismaModel> | $Enums.DataClass
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type AccessLogListRelationFilter = {
    every?: AccessLogWhereInput
    some?: AccessLogWhereInput
    none?: AccessLogWhereInput
  }

  export type ComplianceListRelationFilter = {
    every?: ComplianceWhereInput
    some?: ComplianceWhereInput
    none?: ComplianceWhereInput
  }

  export type DomainReputationNullableScalarRelationFilter = {
    is?: DomainReputationWhereInput | null
    isNot?: DomainReputationWhereInput | null
  }

  export type ApexOneLogListRelationFilter = {
    every?: ApexOneLogWhereInput
    some?: ApexOneLogWhereInput
    none?: ApexOneLogWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccessLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComplianceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApexOneLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhitelistedDomainCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    category?: SortOrder
    isWildcard?: SortOrder
    notes?: SortOrder
    addedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    riskLevel?: SortOrder
    dataClass?: SortOrder
    encryptionKey?: SortOrder
    lastVerified?: SortOrder
    verifiedBy?: SortOrder
  }

  export type WhitelistedDomainAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WhitelistedDomainMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    category?: SortOrder
    isWildcard?: SortOrder
    notes?: SortOrder
    addedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    riskLevel?: SortOrder
    dataClass?: SortOrder
    encryptionKey?: SortOrder
    lastVerified?: SortOrder
    verifiedBy?: SortOrder
  }

  export type WhitelistedDomainMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    category?: SortOrder
    isWildcard?: SortOrder
    notes?: SortOrder
    addedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    riskLevel?: SortOrder
    dataClass?: SortOrder
    encryptionKey?: SortOrder
    lastVerified?: SortOrder
    verifiedBy?: SortOrder
  }

  export type WhitelistedDomainSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type EnumDataClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataClass | EnumDataClassFieldRefInput<$PrismaModel>
    in?: $Enums.DataClass[]
    notIn?: $Enums.DataClass[]
    not?: NestedEnumDataClassWithAggregatesFilter<$PrismaModel> | $Enums.DataClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataClassFilter<$PrismaModel>
    _max?: NestedEnumDataClassFilter<$PrismaModel>
  }

  export type EnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type EnumRiskLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskLevel[] | null
    notIn?: $Enums.RiskLevel[] | null
    not?: NestedEnumRiskLevelNullableFilter<$PrismaModel> | $Enums.RiskLevel | null
  }

  export type WhitelistedDomainScalarRelationFilter = {
    is?: WhitelistedDomainWhereInput
    isNot?: WhitelistedDomainWhereInput
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    domainName?: SortOrder
    performedBy?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    domainId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    sessionId?: SortOrder
    riskLevel?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    domainName?: SortOrder
    performedBy?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    domainId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    sessionId?: SortOrder
    riskLevel?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    domainName?: SortOrder
    performedBy?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    domainId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    sessionId?: SortOrder
    riskLevel?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
  }

  export type EnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }

  export type EnumRiskLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskLevel[] | null
    notIn?: $Enums.RiskLevel[] | null
    not?: NestedEnumRiskLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelNullableFilter<$PrismaModel>
  }

  export type DomainCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    riskLevel?: SortOrder
    dataClass?: SortOrder
  }

  export type DomainCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DomainCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    riskLevel?: SortOrder
    dataClass?: SortOrder
  }

  export type DomainCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    riskLevel?: SortOrder
    dataClass?: SortOrder
  }

  export type DomainCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    mfaEnabled?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    mfaEnabled?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    mfaEnabled?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WhitelistedDomainListRelationFilter = {
    every?: WhitelistedDomainWhereInput
    some?: WhitelistedDomainWhereInput
    none?: WhitelistedDomainWhereInput
  }

  export type DomainCategoryListRelationFilter = {
    every?: DomainCategoryWhereInput
    some?: DomainCategoryWhereInput
    none?: DomainCategoryWhereInput
  }

  export type WhitelistedDomainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomainCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComplianceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplianceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ComplianceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplianceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requirements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplianceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccessLogCountOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
    action?: SortOrder
    status?: SortOrder
    details?: SortOrder
  }

  export type AccessLogAvgOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
  }

  export type AccessLogMaxOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
    action?: SortOrder
    status?: SortOrder
    details?: SortOrder
  }

  export type AccessLogMinOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    timestamp?: SortOrder
    action?: SortOrder
    status?: SortOrder
    details?: SortOrder
  }

  export type AccessLogSumOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    userId?: SortOrder
  }

  export type DomainReputationCountOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    score?: SortOrder
    lastChecked?: SortOrder
    threats?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainReputationAvgOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    score?: SortOrder
  }

  export type DomainReputationMaxOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    score?: SortOrder
    lastChecked?: SortOrder
    threats?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainReputationMinOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    score?: SortOrder
    lastChecked?: SortOrder
    threats?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainReputationSumOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    score?: SortOrder
  }

  export type WhitelistedDomainCreateNestedOneWithoutApexOneLogsInput = {
    create?: XOR<WhitelistedDomainCreateWithoutApexOneLogsInput, WhitelistedDomainUncheckedCreateWithoutApexOneLogsInput>
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutApexOneLogsInput
    connect?: WhitelistedDomainWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApexOneLogsInput = {
    create?: XOR<UserCreateWithoutApexOneLogsInput, UserUncheckedCreateWithoutApexOneLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApexOneLogsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WhitelistedDomainUpdateOneWithoutApexOneLogsNestedInput = {
    create?: XOR<WhitelistedDomainCreateWithoutApexOneLogsInput, WhitelistedDomainUncheckedCreateWithoutApexOneLogsInput>
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutApexOneLogsInput
    upsert?: WhitelistedDomainUpsertWithoutApexOneLogsInput
    disconnect?: WhitelistedDomainWhereInput | boolean
    delete?: WhitelistedDomainWhereInput | boolean
    connect?: WhitelistedDomainWhereUniqueInput
    update?: XOR<XOR<WhitelistedDomainUpdateToOneWithWhereWithoutApexOneLogsInput, WhitelistedDomainUpdateWithoutApexOneLogsInput>, WhitelistedDomainUncheckedUpdateWithoutApexOneLogsInput>
  }

  export type UserUpdateOneWithoutApexOneLogsNestedInput = {
    create?: XOR<UserCreateWithoutApexOneLogsInput, UserUncheckedCreateWithoutApexOneLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApexOneLogsInput
    upsert?: UserUpsertWithoutApexOneLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApexOneLogsInput, UserUpdateWithoutApexOneLogsInput>, UserUncheckedUpdateWithoutApexOneLogsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuditLogCreateNestedManyWithoutDomainInput = {
    create?: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput> | AuditLogCreateWithoutDomainInput[] | AuditLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutDomainInput | AuditLogCreateOrConnectWithoutDomainInput[]
    createMany?: AuditLogCreateManyDomainInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AccessLogCreateNestedManyWithoutDomainInput = {
    create?: XOR<AccessLogCreateWithoutDomainInput, AccessLogUncheckedCreateWithoutDomainInput> | AccessLogCreateWithoutDomainInput[] | AccessLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutDomainInput | AccessLogCreateOrConnectWithoutDomainInput[]
    createMany?: AccessLogCreateManyDomainInputEnvelope
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
  }

  export type ComplianceCreateNestedManyWithoutDomainsInput = {
    create?: XOR<ComplianceCreateWithoutDomainsInput, ComplianceUncheckedCreateWithoutDomainsInput> | ComplianceCreateWithoutDomainsInput[] | ComplianceUncheckedCreateWithoutDomainsInput[]
    connectOrCreate?: ComplianceCreateOrConnectWithoutDomainsInput | ComplianceCreateOrConnectWithoutDomainsInput[]
    connect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
  }

  export type DomainReputationCreateNestedOneWithoutDomainInput = {
    create?: XOR<DomainReputationCreateWithoutDomainInput, DomainReputationUncheckedCreateWithoutDomainInput>
    connectOrCreate?: DomainReputationCreateOrConnectWithoutDomainInput
    connect?: DomainReputationWhereUniqueInput
  }

  export type ApexOneLogCreateNestedManyWithoutDomainInput = {
    create?: XOR<ApexOneLogCreateWithoutDomainInput, ApexOneLogUncheckedCreateWithoutDomainInput> | ApexOneLogCreateWithoutDomainInput[] | ApexOneLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ApexOneLogCreateOrConnectWithoutDomainInput | ApexOneLogCreateOrConnectWithoutDomainInput[]
    createMany?: ApexOneLogCreateManyDomainInputEnvelope
    connect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput> | AuditLogCreateWithoutDomainInput[] | AuditLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutDomainInput | AuditLogCreateOrConnectWithoutDomainInput[]
    createMany?: AuditLogCreateManyDomainInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AccessLogUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<AccessLogCreateWithoutDomainInput, AccessLogUncheckedCreateWithoutDomainInput> | AccessLogCreateWithoutDomainInput[] | AccessLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutDomainInput | AccessLogCreateOrConnectWithoutDomainInput[]
    createMany?: AccessLogCreateManyDomainInputEnvelope
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
  }

  export type ComplianceUncheckedCreateNestedManyWithoutDomainsInput = {
    create?: XOR<ComplianceCreateWithoutDomainsInput, ComplianceUncheckedCreateWithoutDomainsInput> | ComplianceCreateWithoutDomainsInput[] | ComplianceUncheckedCreateWithoutDomainsInput[]
    connectOrCreate?: ComplianceCreateOrConnectWithoutDomainsInput | ComplianceCreateOrConnectWithoutDomainsInput[]
    connect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
  }

  export type DomainReputationUncheckedCreateNestedOneWithoutDomainInput = {
    create?: XOR<DomainReputationCreateWithoutDomainInput, DomainReputationUncheckedCreateWithoutDomainInput>
    connectOrCreate?: DomainReputationCreateOrConnectWithoutDomainInput
    connect?: DomainReputationWhereUniqueInput
  }

  export type ApexOneLogUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<ApexOneLogCreateWithoutDomainInput, ApexOneLogUncheckedCreateWithoutDomainInput> | ApexOneLogCreateWithoutDomainInput[] | ApexOneLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ApexOneLogCreateOrConnectWithoutDomainInput | ApexOneLogCreateOrConnectWithoutDomainInput[]
    createMany?: ApexOneLogCreateManyDomainInputEnvelope
    connect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel
  }

  export type EnumDataClassFieldUpdateOperationsInput = {
    set?: $Enums.DataClass
  }

  export type AuditLogUpdateManyWithoutDomainNestedInput = {
    create?: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput> | AuditLogCreateWithoutDomainInput[] | AuditLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutDomainInput | AuditLogCreateOrConnectWithoutDomainInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutDomainInput | AuditLogUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: AuditLogCreateManyDomainInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutDomainInput | AuditLogUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutDomainInput | AuditLogUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AccessLogUpdateManyWithoutDomainNestedInput = {
    create?: XOR<AccessLogCreateWithoutDomainInput, AccessLogUncheckedCreateWithoutDomainInput> | AccessLogCreateWithoutDomainInput[] | AccessLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutDomainInput | AccessLogCreateOrConnectWithoutDomainInput[]
    upsert?: AccessLogUpsertWithWhereUniqueWithoutDomainInput | AccessLogUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: AccessLogCreateManyDomainInputEnvelope
    set?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    disconnect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    delete?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    update?: AccessLogUpdateWithWhereUniqueWithoutDomainInput | AccessLogUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: AccessLogUpdateManyWithWhereWithoutDomainInput | AccessLogUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
  }

  export type ComplianceUpdateManyWithoutDomainsNestedInput = {
    create?: XOR<ComplianceCreateWithoutDomainsInput, ComplianceUncheckedCreateWithoutDomainsInput> | ComplianceCreateWithoutDomainsInput[] | ComplianceUncheckedCreateWithoutDomainsInput[]
    connectOrCreate?: ComplianceCreateOrConnectWithoutDomainsInput | ComplianceCreateOrConnectWithoutDomainsInput[]
    upsert?: ComplianceUpsertWithWhereUniqueWithoutDomainsInput | ComplianceUpsertWithWhereUniqueWithoutDomainsInput[]
    set?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    disconnect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    delete?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    connect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    update?: ComplianceUpdateWithWhereUniqueWithoutDomainsInput | ComplianceUpdateWithWhereUniqueWithoutDomainsInput[]
    updateMany?: ComplianceUpdateManyWithWhereWithoutDomainsInput | ComplianceUpdateManyWithWhereWithoutDomainsInput[]
    deleteMany?: ComplianceScalarWhereInput | ComplianceScalarWhereInput[]
  }

  export type DomainReputationUpdateOneWithoutDomainNestedInput = {
    create?: XOR<DomainReputationCreateWithoutDomainInput, DomainReputationUncheckedCreateWithoutDomainInput>
    connectOrCreate?: DomainReputationCreateOrConnectWithoutDomainInput
    upsert?: DomainReputationUpsertWithoutDomainInput
    disconnect?: DomainReputationWhereInput | boolean
    delete?: DomainReputationWhereInput | boolean
    connect?: DomainReputationWhereUniqueInput
    update?: XOR<XOR<DomainReputationUpdateToOneWithWhereWithoutDomainInput, DomainReputationUpdateWithoutDomainInput>, DomainReputationUncheckedUpdateWithoutDomainInput>
  }

  export type ApexOneLogUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ApexOneLogCreateWithoutDomainInput, ApexOneLogUncheckedCreateWithoutDomainInput> | ApexOneLogCreateWithoutDomainInput[] | ApexOneLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ApexOneLogCreateOrConnectWithoutDomainInput | ApexOneLogCreateOrConnectWithoutDomainInput[]
    upsert?: ApexOneLogUpsertWithWhereUniqueWithoutDomainInput | ApexOneLogUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ApexOneLogCreateManyDomainInputEnvelope
    set?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    disconnect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    delete?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    connect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    update?: ApexOneLogUpdateWithWhereUniqueWithoutDomainInput | ApexOneLogUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ApexOneLogUpdateManyWithWhereWithoutDomainInput | ApexOneLogUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ApexOneLogScalarWhereInput | ApexOneLogScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput> | AuditLogCreateWithoutDomainInput[] | AuditLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutDomainInput | AuditLogCreateOrConnectWithoutDomainInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutDomainInput | AuditLogUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: AuditLogCreateManyDomainInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutDomainInput | AuditLogUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutDomainInput | AuditLogUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AccessLogUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<AccessLogCreateWithoutDomainInput, AccessLogUncheckedCreateWithoutDomainInput> | AccessLogCreateWithoutDomainInput[] | AccessLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutDomainInput | AccessLogCreateOrConnectWithoutDomainInput[]
    upsert?: AccessLogUpsertWithWhereUniqueWithoutDomainInput | AccessLogUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: AccessLogCreateManyDomainInputEnvelope
    set?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    disconnect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    delete?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    update?: AccessLogUpdateWithWhereUniqueWithoutDomainInput | AccessLogUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: AccessLogUpdateManyWithWhereWithoutDomainInput | AccessLogUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
  }

  export type ComplianceUncheckedUpdateManyWithoutDomainsNestedInput = {
    create?: XOR<ComplianceCreateWithoutDomainsInput, ComplianceUncheckedCreateWithoutDomainsInput> | ComplianceCreateWithoutDomainsInput[] | ComplianceUncheckedCreateWithoutDomainsInput[]
    connectOrCreate?: ComplianceCreateOrConnectWithoutDomainsInput | ComplianceCreateOrConnectWithoutDomainsInput[]
    upsert?: ComplianceUpsertWithWhereUniqueWithoutDomainsInput | ComplianceUpsertWithWhereUniqueWithoutDomainsInput[]
    set?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    disconnect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    delete?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    connect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    update?: ComplianceUpdateWithWhereUniqueWithoutDomainsInput | ComplianceUpdateWithWhereUniqueWithoutDomainsInput[]
    updateMany?: ComplianceUpdateManyWithWhereWithoutDomainsInput | ComplianceUpdateManyWithWhereWithoutDomainsInput[]
    deleteMany?: ComplianceScalarWhereInput | ComplianceScalarWhereInput[]
  }

  export type DomainReputationUncheckedUpdateOneWithoutDomainNestedInput = {
    create?: XOR<DomainReputationCreateWithoutDomainInput, DomainReputationUncheckedCreateWithoutDomainInput>
    connectOrCreate?: DomainReputationCreateOrConnectWithoutDomainInput
    upsert?: DomainReputationUpsertWithoutDomainInput
    disconnect?: DomainReputationWhereInput | boolean
    delete?: DomainReputationWhereInput | boolean
    connect?: DomainReputationWhereUniqueInput
    update?: XOR<XOR<DomainReputationUpdateToOneWithWhereWithoutDomainInput, DomainReputationUpdateWithoutDomainInput>, DomainReputationUncheckedUpdateWithoutDomainInput>
  }

  export type ApexOneLogUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ApexOneLogCreateWithoutDomainInput, ApexOneLogUncheckedCreateWithoutDomainInput> | ApexOneLogCreateWithoutDomainInput[] | ApexOneLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ApexOneLogCreateOrConnectWithoutDomainInput | ApexOneLogCreateOrConnectWithoutDomainInput[]
    upsert?: ApexOneLogUpsertWithWhereUniqueWithoutDomainInput | ApexOneLogUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ApexOneLogCreateManyDomainInputEnvelope
    set?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    disconnect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    delete?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    connect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    update?: ApexOneLogUpdateWithWhereUniqueWithoutDomainInput | ApexOneLogUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ApexOneLogUpdateManyWithWhereWithoutDomainInput | ApexOneLogUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ApexOneLogScalarWhereInput | ApexOneLogScalarWhereInput[]
  }

  export type WhitelistedDomainCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<WhitelistedDomainCreateWithoutAuditLogsInput, WhitelistedDomainUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutAuditLogsInput
    connect?: WhitelistedDomainWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAuditActionFieldUpdateOperationsInput = {
    set?: $Enums.AuditAction
  }

  export type NullableEnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel | null
  }

  export type WhitelistedDomainUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<WhitelistedDomainCreateWithoutAuditLogsInput, WhitelistedDomainUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutAuditLogsInput
    upsert?: WhitelistedDomainUpsertWithoutAuditLogsInput
    connect?: WhitelistedDomainWhereUniqueInput
    update?: XOR<XOR<WhitelistedDomainUpdateToOneWithWhereWithoutAuditLogsInput, WhitelistedDomainUpdateWithoutAuditLogsInput>, WhitelistedDomainUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ComplianceCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ComplianceCreateWithoutCategoriesInput, ComplianceUncheckedCreateWithoutCategoriesInput> | ComplianceCreateWithoutCategoriesInput[] | ComplianceUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ComplianceCreateOrConnectWithoutCategoriesInput | ComplianceCreateOrConnectWithoutCategoriesInput[]
    connect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
  }

  export type ComplianceUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ComplianceCreateWithoutCategoriesInput, ComplianceUncheckedCreateWithoutCategoriesInput> | ComplianceCreateWithoutCategoriesInput[] | ComplianceUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ComplianceCreateOrConnectWithoutCategoriesInput | ComplianceCreateOrConnectWithoutCategoriesInput[]
    connect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
  }

  export type ComplianceUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ComplianceCreateWithoutCategoriesInput, ComplianceUncheckedCreateWithoutCategoriesInput> | ComplianceCreateWithoutCategoriesInput[] | ComplianceUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ComplianceCreateOrConnectWithoutCategoriesInput | ComplianceCreateOrConnectWithoutCategoriesInput[]
    upsert?: ComplianceUpsertWithWhereUniqueWithoutCategoriesInput | ComplianceUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    disconnect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    delete?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    connect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    update?: ComplianceUpdateWithWhereUniqueWithoutCategoriesInput | ComplianceUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ComplianceUpdateManyWithWhereWithoutCategoriesInput | ComplianceUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ComplianceScalarWhereInput | ComplianceScalarWhereInput[]
  }

  export type ComplianceUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ComplianceCreateWithoutCategoriesInput, ComplianceUncheckedCreateWithoutCategoriesInput> | ComplianceCreateWithoutCategoriesInput[] | ComplianceUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ComplianceCreateOrConnectWithoutCategoriesInput | ComplianceCreateOrConnectWithoutCategoriesInput[]
    upsert?: ComplianceUpsertWithWhereUniqueWithoutCategoriesInput | ComplianceUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    disconnect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    delete?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    connect?: ComplianceWhereUniqueInput | ComplianceWhereUniqueInput[]
    update?: ComplianceUpdateWithWhereUniqueWithoutCategoriesInput | ComplianceUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ComplianceUpdateManyWithWhereWithoutCategoriesInput | ComplianceUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ComplianceScalarWhereInput | ComplianceScalarWhereInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AccessLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessLogCreateWithoutUserInput, AccessLogUncheckedCreateWithoutUserInput> | AccessLogCreateWithoutUserInput[] | AccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutUserInput | AccessLogCreateOrConnectWithoutUserInput[]
    createMany?: AccessLogCreateManyUserInputEnvelope
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
  }

  export type ApexOneLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ApexOneLogCreateWithoutUserInput, ApexOneLogUncheckedCreateWithoutUserInput> | ApexOneLogCreateWithoutUserInput[] | ApexOneLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApexOneLogCreateOrConnectWithoutUserInput | ApexOneLogCreateOrConnectWithoutUserInput[]
    createMany?: ApexOneLogCreateManyUserInputEnvelope
    connect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AccessLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessLogCreateWithoutUserInput, AccessLogUncheckedCreateWithoutUserInput> | AccessLogCreateWithoutUserInput[] | AccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutUserInput | AccessLogCreateOrConnectWithoutUserInput[]
    createMany?: AccessLogCreateManyUserInputEnvelope
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
  }

  export type ApexOneLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApexOneLogCreateWithoutUserInput, ApexOneLogUncheckedCreateWithoutUserInput> | ApexOneLogCreateWithoutUserInput[] | ApexOneLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApexOneLogCreateOrConnectWithoutUserInput | ApexOneLogCreateOrConnectWithoutUserInput[]
    createMany?: ApexOneLogCreateManyUserInputEnvelope
    connect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AccessLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessLogCreateWithoutUserInput, AccessLogUncheckedCreateWithoutUserInput> | AccessLogCreateWithoutUserInput[] | AccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutUserInput | AccessLogCreateOrConnectWithoutUserInput[]
    upsert?: AccessLogUpsertWithWhereUniqueWithoutUserInput | AccessLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessLogCreateManyUserInputEnvelope
    set?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    disconnect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    delete?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    update?: AccessLogUpdateWithWhereUniqueWithoutUserInput | AccessLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessLogUpdateManyWithWhereWithoutUserInput | AccessLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
  }

  export type ApexOneLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApexOneLogCreateWithoutUserInput, ApexOneLogUncheckedCreateWithoutUserInput> | ApexOneLogCreateWithoutUserInput[] | ApexOneLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApexOneLogCreateOrConnectWithoutUserInput | ApexOneLogCreateOrConnectWithoutUserInput[]
    upsert?: ApexOneLogUpsertWithWhereUniqueWithoutUserInput | ApexOneLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApexOneLogCreateManyUserInputEnvelope
    set?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    disconnect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    delete?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    connect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    update?: ApexOneLogUpdateWithWhereUniqueWithoutUserInput | ApexOneLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApexOneLogUpdateManyWithWhereWithoutUserInput | ApexOneLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApexOneLogScalarWhereInput | ApexOneLogScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AccessLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessLogCreateWithoutUserInput, AccessLogUncheckedCreateWithoutUserInput> | AccessLogCreateWithoutUserInput[] | AccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutUserInput | AccessLogCreateOrConnectWithoutUserInput[]
    upsert?: AccessLogUpsertWithWhereUniqueWithoutUserInput | AccessLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessLogCreateManyUserInputEnvelope
    set?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    disconnect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    delete?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    update?: AccessLogUpdateWithWhereUniqueWithoutUserInput | AccessLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessLogUpdateManyWithWhereWithoutUserInput | AccessLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
  }

  export type ApexOneLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApexOneLogCreateWithoutUserInput, ApexOneLogUncheckedCreateWithoutUserInput> | ApexOneLogCreateWithoutUserInput[] | ApexOneLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApexOneLogCreateOrConnectWithoutUserInput | ApexOneLogCreateOrConnectWithoutUserInput[]
    upsert?: ApexOneLogUpsertWithWhereUniqueWithoutUserInput | ApexOneLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApexOneLogCreateManyUserInputEnvelope
    set?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    disconnect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    delete?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    connect?: ApexOneLogWhereUniqueInput | ApexOneLogWhereUniqueInput[]
    update?: ApexOneLogUpdateWithWhereUniqueWithoutUserInput | ApexOneLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApexOneLogUpdateManyWithWhereWithoutUserInput | ApexOneLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApexOneLogScalarWhereInput | ApexOneLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type WhitelistedDomainCreateNestedManyWithoutComplianceInput = {
    create?: XOR<WhitelistedDomainCreateWithoutComplianceInput, WhitelistedDomainUncheckedCreateWithoutComplianceInput> | WhitelistedDomainCreateWithoutComplianceInput[] | WhitelistedDomainUncheckedCreateWithoutComplianceInput[]
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutComplianceInput | WhitelistedDomainCreateOrConnectWithoutComplianceInput[]
    connect?: WhitelistedDomainWhereUniqueInput | WhitelistedDomainWhereUniqueInput[]
  }

  export type DomainCategoryCreateNestedManyWithoutComplianceInput = {
    create?: XOR<DomainCategoryCreateWithoutComplianceInput, DomainCategoryUncheckedCreateWithoutComplianceInput> | DomainCategoryCreateWithoutComplianceInput[] | DomainCategoryUncheckedCreateWithoutComplianceInput[]
    connectOrCreate?: DomainCategoryCreateOrConnectWithoutComplianceInput | DomainCategoryCreateOrConnectWithoutComplianceInput[]
    connect?: DomainCategoryWhereUniqueInput | DomainCategoryWhereUniqueInput[]
  }

  export type WhitelistedDomainUncheckedCreateNestedManyWithoutComplianceInput = {
    create?: XOR<WhitelistedDomainCreateWithoutComplianceInput, WhitelistedDomainUncheckedCreateWithoutComplianceInput> | WhitelistedDomainCreateWithoutComplianceInput[] | WhitelistedDomainUncheckedCreateWithoutComplianceInput[]
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutComplianceInput | WhitelistedDomainCreateOrConnectWithoutComplianceInput[]
    connect?: WhitelistedDomainWhereUniqueInput | WhitelistedDomainWhereUniqueInput[]
  }

  export type DomainCategoryUncheckedCreateNestedManyWithoutComplianceInput = {
    create?: XOR<DomainCategoryCreateWithoutComplianceInput, DomainCategoryUncheckedCreateWithoutComplianceInput> | DomainCategoryCreateWithoutComplianceInput[] | DomainCategoryUncheckedCreateWithoutComplianceInput[]
    connectOrCreate?: DomainCategoryCreateOrConnectWithoutComplianceInput | DomainCategoryCreateOrConnectWithoutComplianceInput[]
    connect?: DomainCategoryWhereUniqueInput | DomainCategoryWhereUniqueInput[]
  }

  export type WhitelistedDomainUpdateManyWithoutComplianceNestedInput = {
    create?: XOR<WhitelistedDomainCreateWithoutComplianceInput, WhitelistedDomainUncheckedCreateWithoutComplianceInput> | WhitelistedDomainCreateWithoutComplianceInput[] | WhitelistedDomainUncheckedCreateWithoutComplianceInput[]
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutComplianceInput | WhitelistedDomainCreateOrConnectWithoutComplianceInput[]
    upsert?: WhitelistedDomainUpsertWithWhereUniqueWithoutComplianceInput | WhitelistedDomainUpsertWithWhereUniqueWithoutComplianceInput[]
    set?: WhitelistedDomainWhereUniqueInput | WhitelistedDomainWhereUniqueInput[]
    disconnect?: WhitelistedDomainWhereUniqueInput | WhitelistedDomainWhereUniqueInput[]
    delete?: WhitelistedDomainWhereUniqueInput | WhitelistedDomainWhereUniqueInput[]
    connect?: WhitelistedDomainWhereUniqueInput | WhitelistedDomainWhereUniqueInput[]
    update?: WhitelistedDomainUpdateWithWhereUniqueWithoutComplianceInput | WhitelistedDomainUpdateWithWhereUniqueWithoutComplianceInput[]
    updateMany?: WhitelistedDomainUpdateManyWithWhereWithoutComplianceInput | WhitelistedDomainUpdateManyWithWhereWithoutComplianceInput[]
    deleteMany?: WhitelistedDomainScalarWhereInput | WhitelistedDomainScalarWhereInput[]
  }

  export type DomainCategoryUpdateManyWithoutComplianceNestedInput = {
    create?: XOR<DomainCategoryCreateWithoutComplianceInput, DomainCategoryUncheckedCreateWithoutComplianceInput> | DomainCategoryCreateWithoutComplianceInput[] | DomainCategoryUncheckedCreateWithoutComplianceInput[]
    connectOrCreate?: DomainCategoryCreateOrConnectWithoutComplianceInput | DomainCategoryCreateOrConnectWithoutComplianceInput[]
    upsert?: DomainCategoryUpsertWithWhereUniqueWithoutComplianceInput | DomainCategoryUpsertWithWhereUniqueWithoutComplianceInput[]
    set?: DomainCategoryWhereUniqueInput | DomainCategoryWhereUniqueInput[]
    disconnect?: DomainCategoryWhereUniqueInput | DomainCategoryWhereUniqueInput[]
    delete?: DomainCategoryWhereUniqueInput | DomainCategoryWhereUniqueInput[]
    connect?: DomainCategoryWhereUniqueInput | DomainCategoryWhereUniqueInput[]
    update?: DomainCategoryUpdateWithWhereUniqueWithoutComplianceInput | DomainCategoryUpdateWithWhereUniqueWithoutComplianceInput[]
    updateMany?: DomainCategoryUpdateManyWithWhereWithoutComplianceInput | DomainCategoryUpdateManyWithWhereWithoutComplianceInput[]
    deleteMany?: DomainCategoryScalarWhereInput | DomainCategoryScalarWhereInput[]
  }

  export type WhitelistedDomainUncheckedUpdateManyWithoutComplianceNestedInput = {
    create?: XOR<WhitelistedDomainCreateWithoutComplianceInput, WhitelistedDomainUncheckedCreateWithoutComplianceInput> | WhitelistedDomainCreateWithoutComplianceInput[] | WhitelistedDomainUncheckedCreateWithoutComplianceInput[]
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutComplianceInput | WhitelistedDomainCreateOrConnectWithoutComplianceInput[]
    upsert?: WhitelistedDomainUpsertWithWhereUniqueWithoutComplianceInput | WhitelistedDomainUpsertWithWhereUniqueWithoutComplianceInput[]
    set?: WhitelistedDomainWhereUniqueInput | WhitelistedDomainWhereUniqueInput[]
    disconnect?: WhitelistedDomainWhereUniqueInput | WhitelistedDomainWhereUniqueInput[]
    delete?: WhitelistedDomainWhereUniqueInput | WhitelistedDomainWhereUniqueInput[]
    connect?: WhitelistedDomainWhereUniqueInput | WhitelistedDomainWhereUniqueInput[]
    update?: WhitelistedDomainUpdateWithWhereUniqueWithoutComplianceInput | WhitelistedDomainUpdateWithWhereUniqueWithoutComplianceInput[]
    updateMany?: WhitelistedDomainUpdateManyWithWhereWithoutComplianceInput | WhitelistedDomainUpdateManyWithWhereWithoutComplianceInput[]
    deleteMany?: WhitelistedDomainScalarWhereInput | WhitelistedDomainScalarWhereInput[]
  }

  export type DomainCategoryUncheckedUpdateManyWithoutComplianceNestedInput = {
    create?: XOR<DomainCategoryCreateWithoutComplianceInput, DomainCategoryUncheckedCreateWithoutComplianceInput> | DomainCategoryCreateWithoutComplianceInput[] | DomainCategoryUncheckedCreateWithoutComplianceInput[]
    connectOrCreate?: DomainCategoryCreateOrConnectWithoutComplianceInput | DomainCategoryCreateOrConnectWithoutComplianceInput[]
    upsert?: DomainCategoryUpsertWithWhereUniqueWithoutComplianceInput | DomainCategoryUpsertWithWhereUniqueWithoutComplianceInput[]
    set?: DomainCategoryWhereUniqueInput | DomainCategoryWhereUniqueInput[]
    disconnect?: DomainCategoryWhereUniqueInput | DomainCategoryWhereUniqueInput[]
    delete?: DomainCategoryWhereUniqueInput | DomainCategoryWhereUniqueInput[]
    connect?: DomainCategoryWhereUniqueInput | DomainCategoryWhereUniqueInput[]
    update?: DomainCategoryUpdateWithWhereUniqueWithoutComplianceInput | DomainCategoryUpdateWithWhereUniqueWithoutComplianceInput[]
    updateMany?: DomainCategoryUpdateManyWithWhereWithoutComplianceInput | DomainCategoryUpdateManyWithWhereWithoutComplianceInput[]
    deleteMany?: DomainCategoryScalarWhereInput | DomainCategoryScalarWhereInput[]
  }

  export type WhitelistedDomainCreateNestedOneWithoutAccessLogsInput = {
    create?: XOR<WhitelistedDomainCreateWithoutAccessLogsInput, WhitelistedDomainUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutAccessLogsInput
    connect?: WhitelistedDomainWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAccessLogsInput = {
    create?: XOR<UserCreateWithoutAccessLogsInput, UserUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessLogsInput
    connect?: UserWhereUniqueInput
  }

  export type WhitelistedDomainUpdateOneRequiredWithoutAccessLogsNestedInput = {
    create?: XOR<WhitelistedDomainCreateWithoutAccessLogsInput, WhitelistedDomainUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutAccessLogsInput
    upsert?: WhitelistedDomainUpsertWithoutAccessLogsInput
    connect?: WhitelistedDomainWhereUniqueInput
    update?: XOR<XOR<WhitelistedDomainUpdateToOneWithWhereWithoutAccessLogsInput, WhitelistedDomainUpdateWithoutAccessLogsInput>, WhitelistedDomainUncheckedUpdateWithoutAccessLogsInput>
  }

  export type UserUpdateOneRequiredWithoutAccessLogsNestedInput = {
    create?: XOR<UserCreateWithoutAccessLogsInput, UserUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessLogsInput
    upsert?: UserUpsertWithoutAccessLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessLogsInput, UserUpdateWithoutAccessLogsInput>, UserUncheckedUpdateWithoutAccessLogsInput>
  }

  export type WhitelistedDomainCreateNestedOneWithoutReputationInput = {
    create?: XOR<WhitelistedDomainCreateWithoutReputationInput, WhitelistedDomainUncheckedCreateWithoutReputationInput>
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutReputationInput
    connect?: WhitelistedDomainWhereUniqueInput
  }

  export type WhitelistedDomainUpdateOneRequiredWithoutReputationNestedInput = {
    create?: XOR<WhitelistedDomainCreateWithoutReputationInput, WhitelistedDomainUncheckedCreateWithoutReputationInput>
    connectOrCreate?: WhitelistedDomainCreateOrConnectWithoutReputationInput
    upsert?: WhitelistedDomainUpsertWithoutReputationInput
    connect?: WhitelistedDomainWhereUniqueInput
    update?: XOR<XOR<WhitelistedDomainUpdateToOneWithWhereWithoutReputationInput, WhitelistedDomainUpdateWithoutReputationInput>, WhitelistedDomainUncheckedUpdateWithoutReputationInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type NestedEnumDataClassFilter<$PrismaModel = never> = {
    equals?: $Enums.DataClass | EnumDataClassFieldRefInput<$PrismaModel>
    in?: $Enums.DataClass[]
    notIn?: $Enums.DataClass[]
    not?: NestedEnumDataClassFilter<$PrismaModel> | $Enums.DataClass
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[]
    notIn?: $Enums.RiskLevel[]
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type NestedEnumDataClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataClass | EnumDataClassFieldRefInput<$PrismaModel>
    in?: $Enums.DataClass[]
    notIn?: $Enums.DataClass[]
    not?: NestedEnumDataClassWithAggregatesFilter<$PrismaModel> | $Enums.DataClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataClassFilter<$PrismaModel>
    _max?: NestedEnumDataClassFilter<$PrismaModel>
  }

  export type NestedEnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type NestedEnumRiskLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskLevel[] | null
    notIn?: $Enums.RiskLevel[] | null
    not?: NestedEnumRiskLevelNullableFilter<$PrismaModel> | $Enums.RiskLevel | null
  }

  export type NestedEnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }

  export type NestedEnumRiskLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskLevel[] | null
    notIn?: $Enums.RiskLevel[] | null
    not?: NestedEnumRiskLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type WhitelistedDomainCreateWithoutApexOneLogsInput = {
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    auditLogs?: AuditLogCreateNestedManyWithoutDomainInput
    accessLogs?: AccessLogCreateNestedManyWithoutDomainInput
    compliance?: ComplianceCreateNestedManyWithoutDomainsInput
    reputation?: DomainReputationCreateNestedOneWithoutDomainInput
  }

  export type WhitelistedDomainUncheckedCreateWithoutApexOneLogsInput = {
    id?: number
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutDomainInput
    accessLogs?: AccessLogUncheckedCreateNestedManyWithoutDomainInput
    compliance?: ComplianceUncheckedCreateNestedManyWithoutDomainsInput
    reputation?: DomainReputationUncheckedCreateNestedOneWithoutDomainInput
  }

  export type WhitelistedDomainCreateOrConnectWithoutApexOneLogsInput = {
    where: WhitelistedDomainWhereUniqueInput
    create: XOR<WhitelistedDomainCreateWithoutApexOneLogsInput, WhitelistedDomainUncheckedCreateWithoutApexOneLogsInput>
  }

  export type UserCreateWithoutApexOneLogsInput = {
    username: string
    role: $Enums.UserRole
    mfaEnabled?: boolean
    lastLogin?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    accessLogs?: AccessLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApexOneLogsInput = {
    id?: number
    username: string
    role: $Enums.UserRole
    mfaEnabled?: boolean
    lastLogin?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    accessLogs?: AccessLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApexOneLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApexOneLogsInput, UserUncheckedCreateWithoutApexOneLogsInput>
  }

  export type WhitelistedDomainUpsertWithoutApexOneLogsInput = {
    update: XOR<WhitelistedDomainUpdateWithoutApexOneLogsInput, WhitelistedDomainUncheckedUpdateWithoutApexOneLogsInput>
    create: XOR<WhitelistedDomainCreateWithoutApexOneLogsInput, WhitelistedDomainUncheckedCreateWithoutApexOneLogsInput>
    where?: WhitelistedDomainWhereInput
  }

  export type WhitelistedDomainUpdateToOneWithWhereWithoutApexOneLogsInput = {
    where?: WhitelistedDomainWhereInput
    data: XOR<WhitelistedDomainUpdateWithoutApexOneLogsInput, WhitelistedDomainUncheckedUpdateWithoutApexOneLogsInput>
  }

  export type WhitelistedDomainUpdateWithoutApexOneLogsInput = {
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUpdateManyWithoutDomainNestedInput
    accessLogs?: AccessLogUpdateManyWithoutDomainNestedInput
    compliance?: ComplianceUpdateManyWithoutDomainsNestedInput
    reputation?: DomainReputationUpdateOneWithoutDomainNestedInput
  }

  export type WhitelistedDomainUncheckedUpdateWithoutApexOneLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutDomainNestedInput
    accessLogs?: AccessLogUncheckedUpdateManyWithoutDomainNestedInput
    compliance?: ComplianceUncheckedUpdateManyWithoutDomainsNestedInput
    reputation?: DomainReputationUncheckedUpdateOneWithoutDomainNestedInput
  }

  export type UserUpsertWithoutApexOneLogsInput = {
    update: XOR<UserUpdateWithoutApexOneLogsInput, UserUncheckedUpdateWithoutApexOneLogsInput>
    create: XOR<UserCreateWithoutApexOneLogsInput, UserUncheckedCreateWithoutApexOneLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApexOneLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApexOneLogsInput, UserUncheckedUpdateWithoutApexOneLogsInput>
  }

  export type UserUpdateWithoutApexOneLogsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    accessLogs?: AccessLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApexOneLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    accessLogs?: AccessLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuditLogCreateWithoutDomainInput = {
    action: $Enums.AuditAction
    domainName: string
    performedBy?: string | null
    details?: string | null
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    riskLevel?: $Enums.RiskLevel | null
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutDomainInput = {
    id?: number
    action: $Enums.AuditAction
    domainName: string
    performedBy?: string | null
    details?: string | null
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    riskLevel?: $Enums.RiskLevel | null
    userId?: number | null
  }

  export type AuditLogCreateOrConnectWithoutDomainInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput>
  }

  export type AuditLogCreateManyDomainInputEnvelope = {
    data: AuditLogCreateManyDomainInput | AuditLogCreateManyDomainInput[]
  }

  export type AccessLogCreateWithoutDomainInput = {
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
    action: string
    status: string
    details?: string | null
    user: UserCreateNestedOneWithoutAccessLogsInput
  }

  export type AccessLogUncheckedCreateWithoutDomainInput = {
    id?: number
    userId: number
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
    action: string
    status: string
    details?: string | null
  }

  export type AccessLogCreateOrConnectWithoutDomainInput = {
    where: AccessLogWhereUniqueInput
    create: XOR<AccessLogCreateWithoutDomainInput, AccessLogUncheckedCreateWithoutDomainInput>
  }

  export type AccessLogCreateManyDomainInputEnvelope = {
    data: AccessLogCreateManyDomainInput | AccessLogCreateManyDomainInput[]
  }

  export type ComplianceCreateWithoutDomainsInput = {
    name: string
    description?: string | null
    requirements: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DomainCategoryCreateNestedManyWithoutComplianceInput
  }

  export type ComplianceUncheckedCreateWithoutDomainsInput = {
    id?: number
    name: string
    description?: string | null
    requirements: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DomainCategoryUncheckedCreateNestedManyWithoutComplianceInput
  }

  export type ComplianceCreateOrConnectWithoutDomainsInput = {
    where: ComplianceWhereUniqueInput
    create: XOR<ComplianceCreateWithoutDomainsInput, ComplianceUncheckedCreateWithoutDomainsInput>
  }

  export type DomainReputationCreateWithoutDomainInput = {
    score?: number
    lastChecked?: Date | string
    threats: string
    updatedAt?: Date | string
  }

  export type DomainReputationUncheckedCreateWithoutDomainInput = {
    id?: number
    score?: number
    lastChecked?: Date | string
    threats: string
    updatedAt?: Date | string
  }

  export type DomainReputationCreateOrConnectWithoutDomainInput = {
    where: DomainReputationWhereUniqueInput
    create: XOR<DomainReputationCreateWithoutDomainInput, DomainReputationUncheckedCreateWithoutDomainInput>
  }

  export type ApexOneLogCreateWithoutDomainInput = {
    timestamp?: Date | string
    eventType: string
    severity: string
    sourceIP: string
    destinationIP?: string | null
    domainName?: string | null
    filePath?: string | null
    fileName?: string | null
    fileHash?: string | null
    action: string
    details?: string | null
    status: string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutApexOneLogsInput
  }

  export type ApexOneLogUncheckedCreateWithoutDomainInput = {
    id?: number
    timestamp?: Date | string
    eventType: string
    severity: string
    sourceIP: string
    destinationIP?: string | null
    domainName?: string | null
    filePath?: string | null
    fileName?: string | null
    fileHash?: string | null
    action: string
    details?: string | null
    status: string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type ApexOneLogCreateOrConnectWithoutDomainInput = {
    where: ApexOneLogWhereUniqueInput
    create: XOR<ApexOneLogCreateWithoutDomainInput, ApexOneLogUncheckedCreateWithoutDomainInput>
  }

  export type ApexOneLogCreateManyDomainInputEnvelope = {
    data: ApexOneLogCreateManyDomainInput | ApexOneLogCreateManyDomainInput[]
  }

  export type AuditLogUpsertWithWhereUniqueWithoutDomainInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutDomainInput, AuditLogUncheckedUpdateWithoutDomainInput>
    create: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutDomainInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutDomainInput, AuditLogUncheckedUpdateWithoutDomainInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutDomainInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutDomainInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    domainName?: StringFilter<"AuditLog"> | string
    performedBy?: StringNullableFilter<"AuditLog"> | string | null
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    domainId?: IntFilter<"AuditLog"> | number
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    sessionId?: StringNullableFilter<"AuditLog"> | string | null
    riskLevel?: EnumRiskLevelNullableFilter<"AuditLog"> | $Enums.RiskLevel | null
    userId?: IntNullableFilter<"AuditLog"> | number | null
  }

  export type AccessLogUpsertWithWhereUniqueWithoutDomainInput = {
    where: AccessLogWhereUniqueInput
    update: XOR<AccessLogUpdateWithoutDomainInput, AccessLogUncheckedUpdateWithoutDomainInput>
    create: XOR<AccessLogCreateWithoutDomainInput, AccessLogUncheckedCreateWithoutDomainInput>
  }

  export type AccessLogUpdateWithWhereUniqueWithoutDomainInput = {
    where: AccessLogWhereUniqueInput
    data: XOR<AccessLogUpdateWithoutDomainInput, AccessLogUncheckedUpdateWithoutDomainInput>
  }

  export type AccessLogUpdateManyWithWhereWithoutDomainInput = {
    where: AccessLogScalarWhereInput
    data: XOR<AccessLogUpdateManyMutationInput, AccessLogUncheckedUpdateManyWithoutDomainInput>
  }

  export type AccessLogScalarWhereInput = {
    AND?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
    OR?: AccessLogScalarWhereInput[]
    NOT?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
    id?: IntFilter<"AccessLog"> | number
    domainId?: IntFilter<"AccessLog"> | number
    userId?: IntFilter<"AccessLog"> | number
    ipAddress?: StringFilter<"AccessLog"> | string
    userAgent?: StringFilter<"AccessLog"> | string
    timestamp?: DateTimeFilter<"AccessLog"> | Date | string
    action?: StringFilter<"AccessLog"> | string
    status?: StringFilter<"AccessLog"> | string
    details?: StringNullableFilter<"AccessLog"> | string | null
  }

  export type ComplianceUpsertWithWhereUniqueWithoutDomainsInput = {
    where: ComplianceWhereUniqueInput
    update: XOR<ComplianceUpdateWithoutDomainsInput, ComplianceUncheckedUpdateWithoutDomainsInput>
    create: XOR<ComplianceCreateWithoutDomainsInput, ComplianceUncheckedCreateWithoutDomainsInput>
  }

  export type ComplianceUpdateWithWhereUniqueWithoutDomainsInput = {
    where: ComplianceWhereUniqueInput
    data: XOR<ComplianceUpdateWithoutDomainsInput, ComplianceUncheckedUpdateWithoutDomainsInput>
  }

  export type ComplianceUpdateManyWithWhereWithoutDomainsInput = {
    where: ComplianceScalarWhereInput
    data: XOR<ComplianceUpdateManyMutationInput, ComplianceUncheckedUpdateManyWithoutDomainsInput>
  }

  export type ComplianceScalarWhereInput = {
    AND?: ComplianceScalarWhereInput | ComplianceScalarWhereInput[]
    OR?: ComplianceScalarWhereInput[]
    NOT?: ComplianceScalarWhereInput | ComplianceScalarWhereInput[]
    id?: IntFilter<"Compliance"> | number
    name?: StringFilter<"Compliance"> | string
    description?: StringNullableFilter<"Compliance"> | string | null
    requirements?: StringFilter<"Compliance"> | string
    createdAt?: DateTimeFilter<"Compliance"> | Date | string
    updatedAt?: DateTimeFilter<"Compliance"> | Date | string
  }

  export type DomainReputationUpsertWithoutDomainInput = {
    update: XOR<DomainReputationUpdateWithoutDomainInput, DomainReputationUncheckedUpdateWithoutDomainInput>
    create: XOR<DomainReputationCreateWithoutDomainInput, DomainReputationUncheckedCreateWithoutDomainInput>
    where?: DomainReputationWhereInput
  }

  export type DomainReputationUpdateToOneWithWhereWithoutDomainInput = {
    where?: DomainReputationWhereInput
    data: XOR<DomainReputationUpdateWithoutDomainInput, DomainReputationUncheckedUpdateWithoutDomainInput>
  }

  export type DomainReputationUpdateWithoutDomainInput = {
    score?: IntFieldUpdateOperationsInput | number
    lastChecked?: DateTimeFieldUpdateOperationsInput | Date | string
    threats?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainReputationUncheckedUpdateWithoutDomainInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    lastChecked?: DateTimeFieldUpdateOperationsInput | Date | string
    threats?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApexOneLogUpsertWithWhereUniqueWithoutDomainInput = {
    where: ApexOneLogWhereUniqueInput
    update: XOR<ApexOneLogUpdateWithoutDomainInput, ApexOneLogUncheckedUpdateWithoutDomainInput>
    create: XOR<ApexOneLogCreateWithoutDomainInput, ApexOneLogUncheckedCreateWithoutDomainInput>
  }

  export type ApexOneLogUpdateWithWhereUniqueWithoutDomainInput = {
    where: ApexOneLogWhereUniqueInput
    data: XOR<ApexOneLogUpdateWithoutDomainInput, ApexOneLogUncheckedUpdateWithoutDomainInput>
  }

  export type ApexOneLogUpdateManyWithWhereWithoutDomainInput = {
    where: ApexOneLogScalarWhereInput
    data: XOR<ApexOneLogUpdateManyMutationInput, ApexOneLogUncheckedUpdateManyWithoutDomainInput>
  }

  export type ApexOneLogScalarWhereInput = {
    AND?: ApexOneLogScalarWhereInput | ApexOneLogScalarWhereInput[]
    OR?: ApexOneLogScalarWhereInput[]
    NOT?: ApexOneLogScalarWhereInput | ApexOneLogScalarWhereInput[]
    id?: IntFilter<"ApexOneLog"> | number
    timestamp?: DateTimeFilter<"ApexOneLog"> | Date | string
    eventType?: StringFilter<"ApexOneLog"> | string
    severity?: StringFilter<"ApexOneLog"> | string
    sourceIP?: StringFilter<"ApexOneLog"> | string
    destinationIP?: StringNullableFilter<"ApexOneLog"> | string | null
    domainName?: StringNullableFilter<"ApexOneLog"> | string | null
    filePath?: StringNullableFilter<"ApexOneLog"> | string | null
    fileName?: StringNullableFilter<"ApexOneLog"> | string | null
    fileHash?: StringNullableFilter<"ApexOneLog"> | string | null
    action?: StringFilter<"ApexOneLog"> | string
    details?: StringNullableFilter<"ApexOneLog"> | string | null
    status?: StringFilter<"ApexOneLog"> | string
    assignedTo?: StringNullableFilter<"ApexOneLog"> | string | null
    createdAt?: DateTimeFilter<"ApexOneLog"> | Date | string
    updatedAt?: DateTimeFilter<"ApexOneLog"> | Date | string
    domainId?: IntNullableFilter<"ApexOneLog"> | number | null
    userId?: IntNullableFilter<"ApexOneLog"> | number | null
  }

  export type WhitelistedDomainCreateWithoutAuditLogsInput = {
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    accessLogs?: AccessLogCreateNestedManyWithoutDomainInput
    compliance?: ComplianceCreateNestedManyWithoutDomainsInput
    reputation?: DomainReputationCreateNestedOneWithoutDomainInput
    apexOneLogs?: ApexOneLogCreateNestedManyWithoutDomainInput
  }

  export type WhitelistedDomainUncheckedCreateWithoutAuditLogsInput = {
    id?: number
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    accessLogs?: AccessLogUncheckedCreateNestedManyWithoutDomainInput
    compliance?: ComplianceUncheckedCreateNestedManyWithoutDomainsInput
    reputation?: DomainReputationUncheckedCreateNestedOneWithoutDomainInput
    apexOneLogs?: ApexOneLogUncheckedCreateNestedManyWithoutDomainInput
  }

  export type WhitelistedDomainCreateOrConnectWithoutAuditLogsInput = {
    where: WhitelistedDomainWhereUniqueInput
    create: XOR<WhitelistedDomainCreateWithoutAuditLogsInput, WhitelistedDomainUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserCreateWithoutAuditLogsInput = {
    username: string
    role: $Enums.UserRole
    mfaEnabled?: boolean
    lastLogin?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accessLogs?: AccessLogCreateNestedManyWithoutUserInput
    apexOneLogs?: ApexOneLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: number
    username: string
    role: $Enums.UserRole
    mfaEnabled?: boolean
    lastLogin?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accessLogs?: AccessLogUncheckedCreateNestedManyWithoutUserInput
    apexOneLogs?: ApexOneLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type WhitelistedDomainUpsertWithoutAuditLogsInput = {
    update: XOR<WhitelistedDomainUpdateWithoutAuditLogsInput, WhitelistedDomainUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<WhitelistedDomainCreateWithoutAuditLogsInput, WhitelistedDomainUncheckedCreateWithoutAuditLogsInput>
    where?: WhitelistedDomainWhereInput
  }

  export type WhitelistedDomainUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: WhitelistedDomainWhereInput
    data: XOR<WhitelistedDomainUpdateWithoutAuditLogsInput, WhitelistedDomainUncheckedUpdateWithoutAuditLogsInput>
  }

  export type WhitelistedDomainUpdateWithoutAuditLogsInput = {
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    accessLogs?: AccessLogUpdateManyWithoutDomainNestedInput
    compliance?: ComplianceUpdateManyWithoutDomainsNestedInput
    reputation?: DomainReputationUpdateOneWithoutDomainNestedInput
    apexOneLogs?: ApexOneLogUpdateManyWithoutDomainNestedInput
  }

  export type WhitelistedDomainUncheckedUpdateWithoutAuditLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    accessLogs?: AccessLogUncheckedUpdateManyWithoutDomainNestedInput
    compliance?: ComplianceUncheckedUpdateManyWithoutDomainsNestedInput
    reputation?: DomainReputationUncheckedUpdateOneWithoutDomainNestedInput
    apexOneLogs?: ApexOneLogUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accessLogs?: AccessLogUpdateManyWithoutUserNestedInput
    apexOneLogs?: ApexOneLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accessLogs?: AccessLogUncheckedUpdateManyWithoutUserNestedInput
    apexOneLogs?: ApexOneLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ComplianceCreateWithoutCategoriesInput = {
    name: string
    description?: string | null
    requirements: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domains?: WhitelistedDomainCreateNestedManyWithoutComplianceInput
  }

  export type ComplianceUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    description?: string | null
    requirements: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domains?: WhitelistedDomainUncheckedCreateNestedManyWithoutComplianceInput
  }

  export type ComplianceCreateOrConnectWithoutCategoriesInput = {
    where: ComplianceWhereUniqueInput
    create: XOR<ComplianceCreateWithoutCategoriesInput, ComplianceUncheckedCreateWithoutCategoriesInput>
  }

  export type ComplianceUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ComplianceWhereUniqueInput
    update: XOR<ComplianceUpdateWithoutCategoriesInput, ComplianceUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ComplianceCreateWithoutCategoriesInput, ComplianceUncheckedCreateWithoutCategoriesInput>
  }

  export type ComplianceUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ComplianceWhereUniqueInput
    data: XOR<ComplianceUpdateWithoutCategoriesInput, ComplianceUncheckedUpdateWithoutCategoriesInput>
  }

  export type ComplianceUpdateManyWithWhereWithoutCategoriesInput = {
    where: ComplianceScalarWhereInput
    data: XOR<ComplianceUpdateManyMutationInput, ComplianceUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type SessionCreateWithoutUserInput = {
    token: string
    ipAddress: string
    userAgent: string
    createdAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    ipAddress: string
    userAgent: string
    createdAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AuditLogCreateWithoutUserInput = {
    action: $Enums.AuditAction
    domainName: string
    performedBy?: string | null
    details?: string | null
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    riskLevel?: $Enums.RiskLevel | null
    domain: WhitelistedDomainCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: number
    action: $Enums.AuditAction
    domainName: string
    performedBy?: string | null
    details?: string | null
    createdAt?: Date | string
    domainId: number
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    riskLevel?: $Enums.RiskLevel | null
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
  }

  export type AccessLogCreateWithoutUserInput = {
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
    action: string
    status: string
    details?: string | null
    domain: WhitelistedDomainCreateNestedOneWithoutAccessLogsInput
  }

  export type AccessLogUncheckedCreateWithoutUserInput = {
    id?: number
    domainId: number
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
    action: string
    status: string
    details?: string | null
  }

  export type AccessLogCreateOrConnectWithoutUserInput = {
    where: AccessLogWhereUniqueInput
    create: XOR<AccessLogCreateWithoutUserInput, AccessLogUncheckedCreateWithoutUserInput>
  }

  export type AccessLogCreateManyUserInputEnvelope = {
    data: AccessLogCreateManyUserInput | AccessLogCreateManyUserInput[]
  }

  export type ApexOneLogCreateWithoutUserInput = {
    timestamp?: Date | string
    eventType: string
    severity: string
    sourceIP: string
    destinationIP?: string | null
    domainName?: string | null
    filePath?: string | null
    fileName?: string | null
    fileHash?: string | null
    action: string
    details?: string | null
    status: string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    domain?: WhitelistedDomainCreateNestedOneWithoutApexOneLogsInput
  }

  export type ApexOneLogUncheckedCreateWithoutUserInput = {
    id?: number
    timestamp?: Date | string
    eventType: string
    severity: string
    sourceIP: string
    destinationIP?: string | null
    domainName?: string | null
    filePath?: string | null
    fileName?: string | null
    fileHash?: string | null
    action: string
    details?: string | null
    status: string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    domainId?: number | null
  }

  export type ApexOneLogCreateOrConnectWithoutUserInput = {
    where: ApexOneLogWhereUniqueInput
    create: XOR<ApexOneLogCreateWithoutUserInput, ApexOneLogUncheckedCreateWithoutUserInput>
  }

  export type ApexOneLogCreateManyUserInputEnvelope = {
    data: ApexOneLogCreateManyUserInput | ApexOneLogCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: IntFilter<"Session"> | number
    userId?: IntFilter<"Session"> | number
    token?: StringFilter<"Session"> | string
    ipAddress?: StringFilter<"Session"> | string
    userAgent?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    isActive?: BoolFilter<"Session"> | boolean
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AccessLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AccessLogWhereUniqueInput
    update: XOR<AccessLogUpdateWithoutUserInput, AccessLogUncheckedUpdateWithoutUserInput>
    create: XOR<AccessLogCreateWithoutUserInput, AccessLogUncheckedCreateWithoutUserInput>
  }

  export type AccessLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AccessLogWhereUniqueInput
    data: XOR<AccessLogUpdateWithoutUserInput, AccessLogUncheckedUpdateWithoutUserInput>
  }

  export type AccessLogUpdateManyWithWhereWithoutUserInput = {
    where: AccessLogScalarWhereInput
    data: XOR<AccessLogUpdateManyMutationInput, AccessLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ApexOneLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ApexOneLogWhereUniqueInput
    update: XOR<ApexOneLogUpdateWithoutUserInput, ApexOneLogUncheckedUpdateWithoutUserInput>
    create: XOR<ApexOneLogCreateWithoutUserInput, ApexOneLogUncheckedCreateWithoutUserInput>
  }

  export type ApexOneLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ApexOneLogWhereUniqueInput
    data: XOR<ApexOneLogUpdateWithoutUserInput, ApexOneLogUncheckedUpdateWithoutUserInput>
  }

  export type ApexOneLogUpdateManyWithWhereWithoutUserInput = {
    where: ApexOneLogScalarWhereInput
    data: XOR<ApexOneLogUpdateManyMutationInput, ApexOneLogUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutSessionsInput = {
    username: string
    role: $Enums.UserRole
    mfaEnabled?: boolean
    lastLogin?: Date | string | null
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    accessLogs?: AccessLogCreateNestedManyWithoutUserInput
    apexOneLogs?: ApexOneLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    username: string
    role: $Enums.UserRole
    mfaEnabled?: boolean
    lastLogin?: Date | string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    accessLogs?: AccessLogUncheckedCreateNestedManyWithoutUserInput
    apexOneLogs?: ApexOneLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    accessLogs?: AccessLogUpdateManyWithoutUserNestedInput
    apexOneLogs?: ApexOneLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    accessLogs?: AccessLogUncheckedUpdateManyWithoutUserNestedInput
    apexOneLogs?: ApexOneLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WhitelistedDomainCreateWithoutComplianceInput = {
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    auditLogs?: AuditLogCreateNestedManyWithoutDomainInput
    accessLogs?: AccessLogCreateNestedManyWithoutDomainInput
    reputation?: DomainReputationCreateNestedOneWithoutDomainInput
    apexOneLogs?: ApexOneLogCreateNestedManyWithoutDomainInput
  }

  export type WhitelistedDomainUncheckedCreateWithoutComplianceInput = {
    id?: number
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutDomainInput
    accessLogs?: AccessLogUncheckedCreateNestedManyWithoutDomainInput
    reputation?: DomainReputationUncheckedCreateNestedOneWithoutDomainInput
    apexOneLogs?: ApexOneLogUncheckedCreateNestedManyWithoutDomainInput
  }

  export type WhitelistedDomainCreateOrConnectWithoutComplianceInput = {
    where: WhitelistedDomainWhereUniqueInput
    create: XOR<WhitelistedDomainCreateWithoutComplianceInput, WhitelistedDomainUncheckedCreateWithoutComplianceInput>
  }

  export type DomainCategoryCreateWithoutComplianceInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
  }

  export type DomainCategoryUncheckedCreateWithoutComplianceInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
  }

  export type DomainCategoryCreateOrConnectWithoutComplianceInput = {
    where: DomainCategoryWhereUniqueInput
    create: XOR<DomainCategoryCreateWithoutComplianceInput, DomainCategoryUncheckedCreateWithoutComplianceInput>
  }

  export type WhitelistedDomainUpsertWithWhereUniqueWithoutComplianceInput = {
    where: WhitelistedDomainWhereUniqueInput
    update: XOR<WhitelistedDomainUpdateWithoutComplianceInput, WhitelistedDomainUncheckedUpdateWithoutComplianceInput>
    create: XOR<WhitelistedDomainCreateWithoutComplianceInput, WhitelistedDomainUncheckedCreateWithoutComplianceInput>
  }

  export type WhitelistedDomainUpdateWithWhereUniqueWithoutComplianceInput = {
    where: WhitelistedDomainWhereUniqueInput
    data: XOR<WhitelistedDomainUpdateWithoutComplianceInput, WhitelistedDomainUncheckedUpdateWithoutComplianceInput>
  }

  export type WhitelistedDomainUpdateManyWithWhereWithoutComplianceInput = {
    where: WhitelistedDomainScalarWhereInput
    data: XOR<WhitelistedDomainUpdateManyMutationInput, WhitelistedDomainUncheckedUpdateManyWithoutComplianceInput>
  }

  export type WhitelistedDomainScalarWhereInput = {
    AND?: WhitelistedDomainScalarWhereInput | WhitelistedDomainScalarWhereInput[]
    OR?: WhitelistedDomainScalarWhereInput[]
    NOT?: WhitelistedDomainScalarWhereInput | WhitelistedDomainScalarWhereInput[]
    id?: IntFilter<"WhitelistedDomain"> | number
    domain?: StringFilter<"WhitelistedDomain"> | string
    category?: StringFilter<"WhitelistedDomain"> | string
    isWildcard?: BoolFilter<"WhitelistedDomain"> | boolean
    notes?: StringNullableFilter<"WhitelistedDomain"> | string | null
    addedBy?: StringNullableFilter<"WhitelistedDomain"> | string | null
    createdAt?: DateTimeFilter<"WhitelistedDomain"> | Date | string
    updatedAt?: DateTimeFilter<"WhitelistedDomain"> | Date | string
    expiresAt?: DateTimeNullableFilter<"WhitelistedDomain"> | Date | string | null
    isActive?: BoolFilter<"WhitelistedDomain"> | boolean
    riskLevel?: EnumRiskLevelFilter<"WhitelistedDomain"> | $Enums.RiskLevel
    dataClass?: EnumDataClassFilter<"WhitelistedDomain"> | $Enums.DataClass
    encryptionKey?: StringNullableFilter<"WhitelistedDomain"> | string | null
    lastVerified?: DateTimeNullableFilter<"WhitelistedDomain"> | Date | string | null
    verifiedBy?: StringNullableFilter<"WhitelistedDomain"> | string | null
  }

  export type DomainCategoryUpsertWithWhereUniqueWithoutComplianceInput = {
    where: DomainCategoryWhereUniqueInput
    update: XOR<DomainCategoryUpdateWithoutComplianceInput, DomainCategoryUncheckedUpdateWithoutComplianceInput>
    create: XOR<DomainCategoryCreateWithoutComplianceInput, DomainCategoryUncheckedCreateWithoutComplianceInput>
  }

  export type DomainCategoryUpdateWithWhereUniqueWithoutComplianceInput = {
    where: DomainCategoryWhereUniqueInput
    data: XOR<DomainCategoryUpdateWithoutComplianceInput, DomainCategoryUncheckedUpdateWithoutComplianceInput>
  }

  export type DomainCategoryUpdateManyWithWhereWithoutComplianceInput = {
    where: DomainCategoryScalarWhereInput
    data: XOR<DomainCategoryUpdateManyMutationInput, DomainCategoryUncheckedUpdateManyWithoutComplianceInput>
  }

  export type DomainCategoryScalarWhereInput = {
    AND?: DomainCategoryScalarWhereInput | DomainCategoryScalarWhereInput[]
    OR?: DomainCategoryScalarWhereInput[]
    NOT?: DomainCategoryScalarWhereInput | DomainCategoryScalarWhereInput[]
    id?: IntFilter<"DomainCategory"> | number
    name?: StringFilter<"DomainCategory"> | string
    description?: StringNullableFilter<"DomainCategory"> | string | null
    createdAt?: DateTimeFilter<"DomainCategory"> | Date | string
    updatedAt?: DateTimeFilter<"DomainCategory"> | Date | string
    riskLevel?: EnumRiskLevelFilter<"DomainCategory"> | $Enums.RiskLevel
    dataClass?: EnumDataClassFilter<"DomainCategory"> | $Enums.DataClass
  }

  export type WhitelistedDomainCreateWithoutAccessLogsInput = {
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    auditLogs?: AuditLogCreateNestedManyWithoutDomainInput
    compliance?: ComplianceCreateNestedManyWithoutDomainsInput
    reputation?: DomainReputationCreateNestedOneWithoutDomainInput
    apexOneLogs?: ApexOneLogCreateNestedManyWithoutDomainInput
  }

  export type WhitelistedDomainUncheckedCreateWithoutAccessLogsInput = {
    id?: number
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutDomainInput
    compliance?: ComplianceUncheckedCreateNestedManyWithoutDomainsInput
    reputation?: DomainReputationUncheckedCreateNestedOneWithoutDomainInput
    apexOneLogs?: ApexOneLogUncheckedCreateNestedManyWithoutDomainInput
  }

  export type WhitelistedDomainCreateOrConnectWithoutAccessLogsInput = {
    where: WhitelistedDomainWhereUniqueInput
    create: XOR<WhitelistedDomainCreateWithoutAccessLogsInput, WhitelistedDomainUncheckedCreateWithoutAccessLogsInput>
  }

  export type UserCreateWithoutAccessLogsInput = {
    username: string
    role: $Enums.UserRole
    mfaEnabled?: boolean
    lastLogin?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    apexOneLogs?: ApexOneLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccessLogsInput = {
    id?: number
    username: string
    role: $Enums.UserRole
    mfaEnabled?: boolean
    lastLogin?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    apexOneLogs?: ApexOneLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccessLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessLogsInput, UserUncheckedCreateWithoutAccessLogsInput>
  }

  export type WhitelistedDomainUpsertWithoutAccessLogsInput = {
    update: XOR<WhitelistedDomainUpdateWithoutAccessLogsInput, WhitelistedDomainUncheckedUpdateWithoutAccessLogsInput>
    create: XOR<WhitelistedDomainCreateWithoutAccessLogsInput, WhitelistedDomainUncheckedCreateWithoutAccessLogsInput>
    where?: WhitelistedDomainWhereInput
  }

  export type WhitelistedDomainUpdateToOneWithWhereWithoutAccessLogsInput = {
    where?: WhitelistedDomainWhereInput
    data: XOR<WhitelistedDomainUpdateWithoutAccessLogsInput, WhitelistedDomainUncheckedUpdateWithoutAccessLogsInput>
  }

  export type WhitelistedDomainUpdateWithoutAccessLogsInput = {
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUpdateManyWithoutDomainNestedInput
    compliance?: ComplianceUpdateManyWithoutDomainsNestedInput
    reputation?: DomainReputationUpdateOneWithoutDomainNestedInput
    apexOneLogs?: ApexOneLogUpdateManyWithoutDomainNestedInput
  }

  export type WhitelistedDomainUncheckedUpdateWithoutAccessLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutDomainNestedInput
    compliance?: ComplianceUncheckedUpdateManyWithoutDomainsNestedInput
    reputation?: DomainReputationUncheckedUpdateOneWithoutDomainNestedInput
    apexOneLogs?: ApexOneLogUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type UserUpsertWithoutAccessLogsInput = {
    update: XOR<UserUpdateWithoutAccessLogsInput, UserUncheckedUpdateWithoutAccessLogsInput>
    create: XOR<UserCreateWithoutAccessLogsInput, UserUncheckedCreateWithoutAccessLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessLogsInput, UserUncheckedUpdateWithoutAccessLogsInput>
  }

  export type UserUpdateWithoutAccessLogsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    apexOneLogs?: ApexOneLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    apexOneLogs?: ApexOneLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WhitelistedDomainCreateWithoutReputationInput = {
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    auditLogs?: AuditLogCreateNestedManyWithoutDomainInput
    accessLogs?: AccessLogCreateNestedManyWithoutDomainInput
    compliance?: ComplianceCreateNestedManyWithoutDomainsInput
    apexOneLogs?: ApexOneLogCreateNestedManyWithoutDomainInput
  }

  export type WhitelistedDomainUncheckedCreateWithoutReputationInput = {
    id?: number
    domain: string
    category?: string
    isWildcard?: boolean
    notes?: string | null
    addedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    isActive?: boolean
    riskLevel?: $Enums.RiskLevel
    dataClass?: $Enums.DataClass
    encryptionKey?: string | null
    lastVerified?: Date | string | null
    verifiedBy?: string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutDomainInput
    accessLogs?: AccessLogUncheckedCreateNestedManyWithoutDomainInput
    compliance?: ComplianceUncheckedCreateNestedManyWithoutDomainsInput
    apexOneLogs?: ApexOneLogUncheckedCreateNestedManyWithoutDomainInput
  }

  export type WhitelistedDomainCreateOrConnectWithoutReputationInput = {
    where: WhitelistedDomainWhereUniqueInput
    create: XOR<WhitelistedDomainCreateWithoutReputationInput, WhitelistedDomainUncheckedCreateWithoutReputationInput>
  }

  export type WhitelistedDomainUpsertWithoutReputationInput = {
    update: XOR<WhitelistedDomainUpdateWithoutReputationInput, WhitelistedDomainUncheckedUpdateWithoutReputationInput>
    create: XOR<WhitelistedDomainCreateWithoutReputationInput, WhitelistedDomainUncheckedCreateWithoutReputationInput>
    where?: WhitelistedDomainWhereInput
  }

  export type WhitelistedDomainUpdateToOneWithWhereWithoutReputationInput = {
    where?: WhitelistedDomainWhereInput
    data: XOR<WhitelistedDomainUpdateWithoutReputationInput, WhitelistedDomainUncheckedUpdateWithoutReputationInput>
  }

  export type WhitelistedDomainUpdateWithoutReputationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUpdateManyWithoutDomainNestedInput
    accessLogs?: AccessLogUpdateManyWithoutDomainNestedInput
    compliance?: ComplianceUpdateManyWithoutDomainsNestedInput
    apexOneLogs?: ApexOneLogUpdateManyWithoutDomainNestedInput
  }

  export type WhitelistedDomainUncheckedUpdateWithoutReputationInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutDomainNestedInput
    accessLogs?: AccessLogUncheckedUpdateManyWithoutDomainNestedInput
    compliance?: ComplianceUncheckedUpdateManyWithoutDomainsNestedInput
    apexOneLogs?: ApexOneLogUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type AuditLogCreateManyDomainInput = {
    id?: number
    action: $Enums.AuditAction
    domainName: string
    performedBy?: string | null
    details?: string | null
    createdAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    riskLevel?: $Enums.RiskLevel | null
    userId?: number | null
  }

  export type AccessLogCreateManyDomainInput = {
    id?: number
    userId: number
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
    action: string
    status: string
    details?: string | null
  }

  export type ApexOneLogCreateManyDomainInput = {
    id?: number
    timestamp?: Date | string
    eventType: string
    severity: string
    sourceIP: string
    destinationIP?: string | null
    domainName?: string | null
    filePath?: string | null
    fileName?: string | null
    fileHash?: string | null
    action: string
    details?: string | null
    status: string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type AuditLogUpdateWithoutDomainInput = {
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    domainName?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutDomainInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    domainName?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AuditLogUncheckedUpdateManyWithoutDomainInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    domainName?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccessLogUpdateWithoutDomainInput = {
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccessLogsNestedInput
  }

  export type AccessLogUncheckedUpdateWithoutDomainInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessLogUncheckedUpdateManyWithoutDomainInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComplianceUpdateWithoutDomainsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DomainCategoryUpdateManyWithoutComplianceNestedInput
  }

  export type ComplianceUncheckedUpdateWithoutDomainsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DomainCategoryUncheckedUpdateManyWithoutComplianceNestedInput
  }

  export type ComplianceUncheckedUpdateManyWithoutDomainsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApexOneLogUpdateWithoutDomainInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceIP?: StringFieldUpdateOperationsInput | string
    destinationIP?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutApexOneLogsNestedInput
  }

  export type ApexOneLogUncheckedUpdateWithoutDomainInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceIP?: StringFieldUpdateOperationsInput | string
    destinationIP?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApexOneLogUncheckedUpdateManyWithoutDomainInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceIP?: StringFieldUpdateOperationsInput | string
    destinationIP?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComplianceUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: WhitelistedDomainUpdateManyWithoutComplianceNestedInput
  }

  export type ComplianceUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: WhitelistedDomainUncheckedUpdateManyWithoutComplianceNestedInput
  }

  export type ComplianceUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requirements?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: number
    token: string
    ipAddress: string
    userAgent: string
    createdAt?: Date | string
    expiresAt: Date | string
    isActive?: boolean
  }

  export type AuditLogCreateManyUserInput = {
    id?: number
    action: $Enums.AuditAction
    domainName: string
    performedBy?: string | null
    details?: string | null
    createdAt?: Date | string
    domainId: number
    ipAddress?: string | null
    userAgent?: string | null
    sessionId?: string | null
    riskLevel?: $Enums.RiskLevel | null
  }

  export type AccessLogCreateManyUserInput = {
    id?: number
    domainId: number
    ipAddress: string
    userAgent: string
    timestamp?: Date | string
    action: string
    status: string
    details?: string | null
  }

  export type ApexOneLogCreateManyUserInput = {
    id?: number
    timestamp?: Date | string
    eventType: string
    severity: string
    sourceIP: string
    destinationIP?: string | null
    domainName?: string | null
    filePath?: string | null
    fileName?: string | null
    fileHash?: string | null
    action: string
    details?: string | null
    status: string
    assignedTo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    domainId?: number | null
  }

  export type SessionUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuditLogUpdateWithoutUserInput = {
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    domainName?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
    domain?: WhitelistedDomainUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    domainName?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    domainName?: StringFieldUpdateOperationsInput | string
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    riskLevel?: NullableEnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel | null
  }

  export type AccessLogUpdateWithoutUserInput = {
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: WhitelistedDomainUpdateOneRequiredWithoutAccessLogsNestedInput
  }

  export type AccessLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    domainId?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    domainId?: IntFieldUpdateOperationsInput | number
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApexOneLogUpdateWithoutUserInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceIP?: StringFieldUpdateOperationsInput | string
    destinationIP?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: WhitelistedDomainUpdateOneWithoutApexOneLogsNestedInput
  }

  export type ApexOneLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceIP?: StringFieldUpdateOperationsInput | string
    destinationIP?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApexOneLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceIP?: StringFieldUpdateOperationsInput | string
    destinationIP?: NullableStringFieldUpdateOperationsInput | string | null
    domainName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WhitelistedDomainUpdateWithoutComplianceInput = {
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUpdateManyWithoutDomainNestedInput
    accessLogs?: AccessLogUpdateManyWithoutDomainNestedInput
    reputation?: DomainReputationUpdateOneWithoutDomainNestedInput
    apexOneLogs?: ApexOneLogUpdateManyWithoutDomainNestedInput
  }

  export type WhitelistedDomainUncheckedUpdateWithoutComplianceInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutDomainNestedInput
    accessLogs?: AccessLogUncheckedUpdateManyWithoutDomainNestedInput
    reputation?: DomainReputationUncheckedUpdateOneWithoutDomainNestedInput
    apexOneLogs?: ApexOneLogUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type WhitelistedDomainUncheckedUpdateManyWithoutComplianceInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isWildcard?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
    encryptionKey?: NullableStringFieldUpdateOperationsInput | string | null
    lastVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DomainCategoryUpdateWithoutComplianceInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
  }

  export type DomainCategoryUncheckedUpdateWithoutComplianceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
  }

  export type DomainCategoryUncheckedUpdateManyWithoutComplianceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    dataClass?: EnumDataClassFieldUpdateOperationsInput | $Enums.DataClass
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