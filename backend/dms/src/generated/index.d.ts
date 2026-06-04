
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model DisciplineRecord
 * 
 */
export type DisciplineRecord = $Result.DefaultSelection<Prisma.$DisciplineRecordPayload>
/**
 * Model Transport
 * 
 */
export type Transport = $Result.DefaultSelection<Prisma.$TransportPayload>
/**
 * Model TransportAssignment
 * 
 */
export type TransportAssignment = $Result.DefaultSelection<Prisma.$TransportAssignmentPayload>
/**
 * Model AcademicTerm
 * 
 */
export type AcademicTerm = $Result.DefaultSelection<Prisma.$AcademicTermPayload>
/**
 * Model AttendanceRecord
 * 
 */
export type AttendanceRecord = $Result.DefaultSelection<Prisma.$AttendanceRecordPayload>
/**
 * Model ParentNotification
 * 
 */
export type ParentNotification = $Result.DefaultSelection<Prisma.$ParentNotificationPayload>
/**
 * Model PhoneBorrow
 * 
 */
export type PhoneBorrow = $Result.DefaultSelection<Prisma.$PhoneBorrowPayload>
/**
 * Model TermSession
 * 
 */
export type TermSession = $Result.DefaultSelection<Prisma.$TermSessionPayload>
/**
 * Model TermAttendance
 * 
 */
export type TermAttendance = $Result.DefaultSelection<Prisma.$TermAttendancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StaffRole: {
  ADMIN: 'ADMIN',
  DISCIPLINE: 'DISCIPLINE',
  NURSE: 'NURSE',
  LIBRARIAN: 'LIBRARIAN'
};

export type StaffRole = (typeof StaffRole)[keyof typeof StaffRole]


export const TransportStatus: {
  PAID: 'PAID',
  NOT_PAID: 'NOT_PAID',
  OUT: 'OUT'
};

export type TransportStatus = (typeof TransportStatus)[keyof typeof TransportStatus]


export const Status: {
  IN: 'IN',
  OUT: 'OUT',
  RETURNED: 'RETURNED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const AttendanceStatus: {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  LATE: 'LATE',
  EXCUSED: 'EXCUSED'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const ParentNotificationType: {
  TERM_OPENING: 'TERM_OPENING',
  ABSENCE_ALERT: 'ABSENCE_ALERT',
  ATTENDANCE_SUMMARY: 'ATTENDANCE_SUMMARY'
};

export type ParentNotificationType = (typeof ParentNotificationType)[keyof typeof ParentNotificationType]


export const NotificationStatus: {
  SENT: 'SENT',
  FAILED: 'FAILED',
  PENDING: 'PENDING'
};

export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus]


export const PhoneBorrowStatus: {
  BORROWED: 'BORROWED',
  RETURNED: 'RETURNED'
};

export type PhoneBorrowStatus = (typeof PhoneBorrowStatus)[keyof typeof PhoneBorrowStatus]


export const TermAttendanceStatus: {
  REPORTED: 'REPORTED',
  NOT_REPORTED: 'NOT_REPORTED'
};

export type TermAttendanceStatus = (typeof TermAttendanceStatus)[keyof typeof TermAttendanceStatus]


export const TermStatus: {
  UPCOMING: 'UPCOMING',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

export type TermStatus = (typeof TermStatus)[keyof typeof TermStatus]

}

export type StaffRole = $Enums.StaffRole

export const StaffRole: typeof $Enums.StaffRole

export type TransportStatus = $Enums.TransportStatus

export const TransportStatus: typeof $Enums.TransportStatus

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type ParentNotificationType = $Enums.ParentNotificationType

export const ParentNotificationType: typeof $Enums.ParentNotificationType

export type NotificationStatus = $Enums.NotificationStatus

export const NotificationStatus: typeof $Enums.NotificationStatus

export type PhoneBorrowStatus = $Enums.PhoneBorrowStatus

export const PhoneBorrowStatus: typeof $Enums.PhoneBorrowStatus

export type TermAttendanceStatus = $Enums.TermAttendanceStatus

export const TermAttendanceStatus: typeof $Enums.TermAttendanceStatus

export type TermStatus = $Enums.TermStatus

export const TermStatus: typeof $Enums.TermStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
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
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplineRecord`: Exposes CRUD operations for the **DisciplineRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DisciplineRecords
    * const disciplineRecords = await prisma.disciplineRecord.findMany()
    * ```
    */
  get disciplineRecord(): Prisma.DisciplineRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transport`: Exposes CRUD operations for the **Transport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transports
    * const transports = await prisma.transport.findMany()
    * ```
    */
  get transport(): Prisma.TransportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transportAssignment`: Exposes CRUD operations for the **TransportAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransportAssignments
    * const transportAssignments = await prisma.transportAssignment.findMany()
    * ```
    */
  get transportAssignment(): Prisma.TransportAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.academicTerm`: Exposes CRUD operations for the **AcademicTerm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcademicTerms
    * const academicTerms = await prisma.academicTerm.findMany()
    * ```
    */
  get academicTerm(): Prisma.AcademicTermDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceRecord`: Exposes CRUD operations for the **AttendanceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceRecords
    * const attendanceRecords = await prisma.attendanceRecord.findMany()
    * ```
    */
  get attendanceRecord(): Prisma.AttendanceRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parentNotification`: Exposes CRUD operations for the **ParentNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParentNotifications
    * const parentNotifications = await prisma.parentNotification.findMany()
    * ```
    */
  get parentNotification(): Prisma.ParentNotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phoneBorrow`: Exposes CRUD operations for the **PhoneBorrow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneBorrows
    * const phoneBorrows = await prisma.phoneBorrow.findMany()
    * ```
    */
  get phoneBorrow(): Prisma.PhoneBorrowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.termSession`: Exposes CRUD operations for the **TermSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TermSessions
    * const termSessions = await prisma.termSession.findMany()
    * ```
    */
  get termSession(): Prisma.TermSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.termAttendance`: Exposes CRUD operations for the **TermAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TermAttendances
    * const termAttendances = await prisma.termAttendance.findMany()
    * ```
    */
  get termAttendance(): Prisma.TermAttendanceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    Student: 'Student',
    Staff: 'Staff',
    DisciplineRecord: 'DisciplineRecord',
    Transport: 'Transport',
    TransportAssignment: 'TransportAssignment',
    AcademicTerm: 'AcademicTerm',
    AttendanceRecord: 'AttendanceRecord',
    ParentNotification: 'ParentNotification',
    PhoneBorrow: 'PhoneBorrow',
    TermSession: 'TermSession',
    TermAttendance: 'TermAttendance'
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
      modelProps: "student" | "staff" | "disciplineRecord" | "transport" | "transportAssignment" | "academicTerm" | "attendanceRecord" | "parentNotification" | "phoneBorrow" | "termSession" | "termAttendance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      DisciplineRecord: {
        payload: Prisma.$DisciplineRecordPayload<ExtArgs>
        fields: Prisma.DisciplineRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplineRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplineRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineRecordPayload>
          }
          findFirst: {
            args: Prisma.DisciplineRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplineRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineRecordPayload>
          }
          findMany: {
            args: Prisma.DisciplineRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineRecordPayload>[]
          }
          create: {
            args: Prisma.DisciplineRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineRecordPayload>
          }
          createMany: {
            args: Prisma.DisciplineRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplineRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineRecordPayload>[]
          }
          delete: {
            args: Prisma.DisciplineRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineRecordPayload>
          }
          update: {
            args: Prisma.DisciplineRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineRecordPayload>
          }
          deleteMany: {
            args: Prisma.DisciplineRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplineRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplineRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineRecordPayload>[]
          }
          upsert: {
            args: Prisma.DisciplineRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplineRecordPayload>
          }
          aggregate: {
            args: Prisma.DisciplineRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplineRecord>
          }
          groupBy: {
            args: Prisma.DisciplineRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplineRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplineRecordCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplineRecordCountAggregateOutputType> | number
          }
        }
      }
      Transport: {
        payload: Prisma.$TransportPayload<ExtArgs>
        fields: Prisma.TransportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          findFirst: {
            args: Prisma.TransportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          findMany: {
            args: Prisma.TransportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          create: {
            args: Prisma.TransportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          createMany: {
            args: Prisma.TransportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          delete: {
            args: Prisma.TransportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          update: {
            args: Prisma.TransportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          deleteMany: {
            args: Prisma.TransportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          upsert: {
            args: Prisma.TransportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          aggregate: {
            args: Prisma.TransportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransport>
          }
          groupBy: {
            args: Prisma.TransportGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportCountArgs<ExtArgs>
            result: $Utils.Optional<TransportCountAggregateOutputType> | number
          }
        }
      }
      TransportAssignment: {
        payload: Prisma.$TransportAssignmentPayload<ExtArgs>
        fields: Prisma.TransportAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportAssignmentPayload>
          }
          findFirst: {
            args: Prisma.TransportAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportAssignmentPayload>
          }
          findMany: {
            args: Prisma.TransportAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportAssignmentPayload>[]
          }
          create: {
            args: Prisma.TransportAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportAssignmentPayload>
          }
          createMany: {
            args: Prisma.TransportAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportAssignmentPayload>[]
          }
          delete: {
            args: Prisma.TransportAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportAssignmentPayload>
          }
          update: {
            args: Prisma.TransportAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.TransportAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.TransportAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportAssignmentPayload>
          }
          aggregate: {
            args: Prisma.TransportAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransportAssignment>
          }
          groupBy: {
            args: Prisma.TransportAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<TransportAssignmentCountAggregateOutputType> | number
          }
        }
      }
      AcademicTerm: {
        payload: Prisma.$AcademicTermPayload<ExtArgs>
        fields: Prisma.AcademicTermFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicTermFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicTermPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicTermFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicTermPayload>
          }
          findFirst: {
            args: Prisma.AcademicTermFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicTermPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicTermFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicTermPayload>
          }
          findMany: {
            args: Prisma.AcademicTermFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicTermPayload>[]
          }
          create: {
            args: Prisma.AcademicTermCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicTermPayload>
          }
          createMany: {
            args: Prisma.AcademicTermCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcademicTermCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicTermPayload>[]
          }
          delete: {
            args: Prisma.AcademicTermDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicTermPayload>
          }
          update: {
            args: Prisma.AcademicTermUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicTermPayload>
          }
          deleteMany: {
            args: Prisma.AcademicTermDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicTermUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcademicTermUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicTermPayload>[]
          }
          upsert: {
            args: Prisma.AcademicTermUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicTermPayload>
          }
          aggregate: {
            args: Prisma.AcademicTermAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademicTerm>
          }
          groupBy: {
            args: Prisma.AcademicTermGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicTermGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicTermCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicTermCountAggregateOutputType> | number
          }
        }
      }
      AttendanceRecord: {
        payload: Prisma.$AttendanceRecordPayload<ExtArgs>
        fields: Prisma.AttendanceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findFirst: {
            args: Prisma.AttendanceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          findMany: {
            args: Prisma.AttendanceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          create: {
            args: Prisma.AttendanceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          createMany: {
            args: Prisma.AttendanceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          delete: {
            args: Prisma.AttendanceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          update: {
            args: Prisma.AttendanceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>[]
          }
          upsert: {
            args: Prisma.AttendanceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceRecordPayload>
          }
          aggregate: {
            args: Prisma.AttendanceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceRecord>
          }
          groupBy: {
            args: Prisma.AttendanceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceRecordCountAggregateOutputType> | number
          }
        }
      }
      ParentNotification: {
        payload: Prisma.$ParentNotificationPayload<ExtArgs>
        fields: Prisma.ParentNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentNotificationPayload>
          }
          findFirst: {
            args: Prisma.ParentNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentNotificationPayload>
          }
          findMany: {
            args: Prisma.ParentNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentNotificationPayload>[]
          }
          create: {
            args: Prisma.ParentNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentNotificationPayload>
          }
          createMany: {
            args: Prisma.ParentNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParentNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentNotificationPayload>[]
          }
          delete: {
            args: Prisma.ParentNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentNotificationPayload>
          }
          update: {
            args: Prisma.ParentNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentNotificationPayload>
          }
          deleteMany: {
            args: Prisma.ParentNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParentNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentNotificationPayload>[]
          }
          upsert: {
            args: Prisma.ParentNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentNotificationPayload>
          }
          aggregate: {
            args: Prisma.ParentNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParentNotification>
          }
          groupBy: {
            args: Prisma.ParentNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<ParentNotificationCountAggregateOutputType> | number
          }
        }
      }
      PhoneBorrow: {
        payload: Prisma.$PhoneBorrowPayload<ExtArgs>
        fields: Prisma.PhoneBorrowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneBorrowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBorrowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneBorrowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBorrowPayload>
          }
          findFirst: {
            args: Prisma.PhoneBorrowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBorrowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneBorrowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBorrowPayload>
          }
          findMany: {
            args: Prisma.PhoneBorrowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBorrowPayload>[]
          }
          create: {
            args: Prisma.PhoneBorrowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBorrowPayload>
          }
          createMany: {
            args: Prisma.PhoneBorrowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneBorrowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBorrowPayload>[]
          }
          delete: {
            args: Prisma.PhoneBorrowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBorrowPayload>
          }
          update: {
            args: Prisma.PhoneBorrowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBorrowPayload>
          }
          deleteMany: {
            args: Prisma.PhoneBorrowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneBorrowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhoneBorrowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBorrowPayload>[]
          }
          upsert: {
            args: Prisma.PhoneBorrowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBorrowPayload>
          }
          aggregate: {
            args: Prisma.PhoneBorrowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneBorrow>
          }
          groupBy: {
            args: Prisma.PhoneBorrowGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneBorrowGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneBorrowCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneBorrowCountAggregateOutputType> | number
          }
        }
      }
      TermSession: {
        payload: Prisma.$TermSessionPayload<ExtArgs>
        fields: Prisma.TermSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermSessionPayload>
          }
          findFirst: {
            args: Prisma.TermSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermSessionPayload>
          }
          findMany: {
            args: Prisma.TermSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermSessionPayload>[]
          }
          create: {
            args: Prisma.TermSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermSessionPayload>
          }
          createMany: {
            args: Prisma.TermSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TermSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermSessionPayload>[]
          }
          delete: {
            args: Prisma.TermSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermSessionPayload>
          }
          update: {
            args: Prisma.TermSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermSessionPayload>
          }
          deleteMany: {
            args: Prisma.TermSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TermSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TermSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermSessionPayload>[]
          }
          upsert: {
            args: Prisma.TermSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermSessionPayload>
          }
          aggregate: {
            args: Prisma.TermSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTermSession>
          }
          groupBy: {
            args: Prisma.TermSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TermSessionCountAggregateOutputType> | number
          }
        }
      }
      TermAttendance: {
        payload: Prisma.$TermAttendancePayload<ExtArgs>
        fields: Prisma.TermAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermAttendancePayload>
          }
          findFirst: {
            args: Prisma.TermAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermAttendancePayload>
          }
          findMany: {
            args: Prisma.TermAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermAttendancePayload>[]
          }
          create: {
            args: Prisma.TermAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermAttendancePayload>
          }
          createMany: {
            args: Prisma.TermAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TermAttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermAttendancePayload>[]
          }
          delete: {
            args: Prisma.TermAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermAttendancePayload>
          }
          update: {
            args: Prisma.TermAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermAttendancePayload>
          }
          deleteMany: {
            args: Prisma.TermAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TermAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TermAttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermAttendancePayload>[]
          }
          upsert: {
            args: Prisma.TermAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermAttendancePayload>
          }
          aggregate: {
            args: Prisma.TermAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTermAttendance>
          }
          groupBy: {
            args: Prisma.TermAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermAttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<TermAttendanceCountAggregateOutputType> | number
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
    student?: StudentOmit
    staff?: StaffOmit
    disciplineRecord?: DisciplineRecordOmit
    transport?: TransportOmit
    transportAssignment?: TransportAssignmentOmit
    academicTerm?: AcademicTermOmit
    attendanceRecord?: AttendanceRecordOmit
    parentNotification?: ParentNotificationOmit
    phoneBorrow?: PhoneBorrowOmit
    termSession?: TermSessionOmit
    termAttendance?: TermAttendanceOmit
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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    records: number
    transportAssignments: number
    attendanceRecords: number
    parentNotifications: number
    phoneBorrows: number
    termAttendances: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | StudentCountOutputTypeCountRecordsArgs
    transportAssignments?: boolean | StudentCountOutputTypeCountTransportAssignmentsArgs
    attendanceRecords?: boolean | StudentCountOutputTypeCountAttendanceRecordsArgs
    parentNotifications?: boolean | StudentCountOutputTypeCountParentNotificationsArgs
    phoneBorrows?: boolean | StudentCountOutputTypeCountPhoneBorrowsArgs
    termAttendances?: boolean | StudentCountOutputTypeCountTermAttendancesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineRecordWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountTransportAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportAssignmentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountParentNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentNotificationWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountPhoneBorrowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneBorrowWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountTermAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermAttendanceWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    termAttendances: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    termAttendances?: boolean | StaffCountOutputTypeCountTermAttendancesArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountTermAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermAttendanceWhereInput
  }


  /**
   * Count Type TransportCountOutputType
   */

  export type TransportCountOutputType = {
    assignments: number
  }

  export type TransportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | TransportCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * TransportCountOutputType without action
   */
  export type TransportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportCountOutputType
     */
    select?: TransportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransportCountOutputType without action
   */
  export type TransportCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportAssignmentWhereInput
  }


  /**
   * Count Type AcademicTermCountOutputType
   */

  export type AcademicTermCountOutputType = {
    attendanceRecords: number
  }

  export type AcademicTermCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendanceRecords?: boolean | AcademicTermCountOutputTypeCountAttendanceRecordsArgs
  }

  // Custom InputTypes
  /**
   * AcademicTermCountOutputType without action
   */
  export type AcademicTermCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTermCountOutputType
     */
    select?: AcademicTermCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AcademicTermCountOutputType without action
   */
  export type AcademicTermCountOutputTypeCountAttendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
  }


  /**
   * Count Type TermSessionCountOutputType
   */

  export type TermSessionCountOutputType = {
    attendances: number
  }

  export type TermSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | TermSessionCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * TermSessionCountOutputType without action
   */
  export type TermSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSessionCountOutputType
     */
    select?: TermSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TermSessionCountOutputType without action
   */
  export type TermSessionCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermAttendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    fatherName: string | null
    motherName: string | null
    fatherPhoneNumber: string | null
    motherPhoneNumber: string | null
    year: string | null
    classGroup: string | null
    location: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    fatherName: string | null
    motherName: string | null
    fatherPhoneNumber: string | null
    motherPhoneNumber: string | null
    year: string | null
    classGroup: string | null
    location: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    fatherName: number
    motherName: number
    fatherPhoneNumber: number
    motherPhoneNumber: number
    year: number
    classGroup: number
    location: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    fatherName?: true
    motherName?: true
    fatherPhoneNumber?: true
    motherPhoneNumber?: true
    year?: true
    classGroup?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    fatherName?: true
    motherName?: true
    fatherPhoneNumber?: true
    motherPhoneNumber?: true
    year?: true
    classGroup?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    fatherName?: true
    motherName?: true
    fatherPhoneNumber?: true
    motherPhoneNumber?: true
    year?: true
    classGroup?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    fatherPhoneNumber?: boolean
    motherPhoneNumber?: boolean
    year?: boolean
    classGroup?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    records?: boolean | Student$recordsArgs<ExtArgs>
    transportAssignments?: boolean | Student$transportAssignmentsArgs<ExtArgs>
    attendanceRecords?: boolean | Student$attendanceRecordsArgs<ExtArgs>
    parentNotifications?: boolean | Student$parentNotificationsArgs<ExtArgs>
    phoneBorrows?: boolean | Student$phoneBorrowsArgs<ExtArgs>
    termAttendances?: boolean | Student$termAttendancesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    fatherPhoneNumber?: boolean
    motherPhoneNumber?: boolean
    year?: boolean
    classGroup?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    fatherPhoneNumber?: boolean
    motherPhoneNumber?: boolean
    year?: boolean
    classGroup?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    fatherName?: boolean
    motherName?: boolean
    fatherPhoneNumber?: boolean
    motherPhoneNumber?: boolean
    year?: boolean
    classGroup?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "fatherName" | "motherName" | "fatherPhoneNumber" | "motherPhoneNumber" | "year" | "classGroup" | "location" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | Student$recordsArgs<ExtArgs>
    transportAssignments?: boolean | Student$transportAssignmentsArgs<ExtArgs>
    attendanceRecords?: boolean | Student$attendanceRecordsArgs<ExtArgs>
    parentNotifications?: boolean | Student$parentNotificationsArgs<ExtArgs>
    phoneBorrows?: boolean | Student$phoneBorrowsArgs<ExtArgs>
    termAttendances?: boolean | Student$termAttendancesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      records: Prisma.$DisciplineRecordPayload<ExtArgs>[]
      transportAssignments: Prisma.$TransportAssignmentPayload<ExtArgs>[]
      attendanceRecords: Prisma.$AttendanceRecordPayload<ExtArgs>[]
      parentNotifications: Prisma.$ParentNotificationPayload<ExtArgs>[]
      phoneBorrows: Prisma.$PhoneBorrowPayload<ExtArgs>[]
      termAttendances: Prisma.$TermAttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      fatherName: string
      motherName: string
      fatherPhoneNumber: string
      motherPhoneNumber: string
      year: string
      classGroup: string
      location: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    records<T extends Student$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Student$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transportAssignments<T extends Student$transportAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$transportAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendanceRecords<T extends Student$attendanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Student$attendanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parentNotifications<T extends Student$parentNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, Student$parentNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    phoneBorrows<T extends Student$phoneBorrowsArgs<ExtArgs> = {}>(args?: Subset<T, Student$phoneBorrowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    termAttendances<T extends Student$termAttendancesArgs<ExtArgs> = {}>(args?: Subset<T, Student$termAttendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly firstName: FieldRef<"Student", 'String'>
    readonly lastName: FieldRef<"Student", 'String'>
    readonly fatherName: FieldRef<"Student", 'String'>
    readonly motherName: FieldRef<"Student", 'String'>
    readonly fatherPhoneNumber: FieldRef<"Student", 'String'>
    readonly motherPhoneNumber: FieldRef<"Student", 'String'>
    readonly year: FieldRef<"Student", 'String'>
    readonly classGroup: FieldRef<"Student", 'String'>
    readonly location: FieldRef<"Student", 'String'>
    readonly status: FieldRef<"Student", 'Status'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.records
   */
  export type Student$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordInclude<ExtArgs> | null
    where?: DisciplineRecordWhereInput
    orderBy?: DisciplineRecordOrderByWithRelationInput | DisciplineRecordOrderByWithRelationInput[]
    cursor?: DisciplineRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplineRecordScalarFieldEnum | DisciplineRecordScalarFieldEnum[]
  }

  /**
   * Student.transportAssignments
   */
  export type Student$transportAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
    where?: TransportAssignmentWhereInput
    orderBy?: TransportAssignmentOrderByWithRelationInput | TransportAssignmentOrderByWithRelationInput[]
    cursor?: TransportAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransportAssignmentScalarFieldEnum | TransportAssignmentScalarFieldEnum[]
  }

  /**
   * Student.attendanceRecords
   */
  export type Student$attendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    cursor?: AttendanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * Student.parentNotifications
   */
  export type Student$parentNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationInclude<ExtArgs> | null
    where?: ParentNotificationWhereInput
    orderBy?: ParentNotificationOrderByWithRelationInput | ParentNotificationOrderByWithRelationInput[]
    cursor?: ParentNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParentNotificationScalarFieldEnum | ParentNotificationScalarFieldEnum[]
  }

  /**
   * Student.phoneBorrows
   */
  export type Student$phoneBorrowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowInclude<ExtArgs> | null
    where?: PhoneBorrowWhereInput
    orderBy?: PhoneBorrowOrderByWithRelationInput | PhoneBorrowOrderByWithRelationInput[]
    cursor?: PhoneBorrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhoneBorrowScalarFieldEnum | PhoneBorrowScalarFieldEnum[]
  }

  /**
   * Student.termAttendances
   */
  export type Student$termAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    where?: TermAttendanceWhereInput
    orderBy?: TermAttendanceOrderByWithRelationInput | TermAttendanceOrderByWithRelationInput[]
    cursor?: TermAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TermAttendanceScalarFieldEnum | TermAttendanceScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    id: number | null
  }

  export type StaffSumAggregateOutputType = {
    id: number | null
  }

  export type StaffMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    role: $Enums.StaffRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    role: $Enums.StaffRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    phoneNumber: number
    role: number
    permissions: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    id?: true
  }

  export type StaffSumAggregateInputType = {
    id?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    role?: true
    permissions?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    role: $Enums.StaffRole
    permissions: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    termAttendances?: boolean | Staff$termAttendancesArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "phoneNumber" | "role" | "permissions" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    termAttendances?: boolean | Staff$termAttendancesArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      termAttendances: Prisma.$TermAttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      phoneNumber: string
      role: $Enums.StaffRole
      permissions: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
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
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
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
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    termAttendances<T extends Staff$termAttendancesArgs<ExtArgs> = {}>(args?: Subset<T, Staff$termAttendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'Int'>
    readonly firstName: FieldRef<"Staff", 'String'>
    readonly lastName: FieldRef<"Staff", 'String'>
    readonly email: FieldRef<"Staff", 'String'>
    readonly password: FieldRef<"Staff", 'String'>
    readonly phoneNumber: FieldRef<"Staff", 'String'>
    readonly role: FieldRef<"Staff", 'StaffRole'>
    readonly permissions: FieldRef<"Staff", 'String[]'>
    readonly isActive: FieldRef<"Staff", 'Boolean'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
    readonly updatedAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.termAttendances
   */
  export type Staff$termAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    where?: TermAttendanceWhereInput
    orderBy?: TermAttendanceOrderByWithRelationInput | TermAttendanceOrderByWithRelationInput[]
    cursor?: TermAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TermAttendanceScalarFieldEnum | TermAttendanceScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model DisciplineRecord
   */

  export type AggregateDisciplineRecord = {
    _count: DisciplineRecordCountAggregateOutputType | null
    _avg: DisciplineRecordAvgAggregateOutputType | null
    _sum: DisciplineRecordSumAggregateOutputType | null
    _min: DisciplineRecordMinAggregateOutputType | null
    _max: DisciplineRecordMaxAggregateOutputType | null
  }

  export type DisciplineRecordAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type DisciplineRecordSumAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type DisciplineRecordMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    reason: string | null
    location: string | null
    status: string | null
    outDate: Date | null
    returnDate: Date | null
    accompaniedBy: string | null
    eventTheme: string | null
    updatedAt: Date | null
  }

  export type DisciplineRecordMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    reason: string | null
    location: string | null
    status: string | null
    outDate: Date | null
    returnDate: Date | null
    accompaniedBy: string | null
    eventTheme: string | null
    updatedAt: Date | null
  }

  export type DisciplineRecordCountAggregateOutputType = {
    id: number
    studentId: number
    reason: number
    location: number
    status: number
    outDate: number
    returnDate: number
    accompaniedBy: number
    eventTheme: number
    updatedAt: number
    _all: number
  }


  export type DisciplineRecordAvgAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type DisciplineRecordSumAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type DisciplineRecordMinAggregateInputType = {
    id?: true
    studentId?: true
    reason?: true
    location?: true
    status?: true
    outDate?: true
    returnDate?: true
    accompaniedBy?: true
    eventTheme?: true
    updatedAt?: true
  }

  export type DisciplineRecordMaxAggregateInputType = {
    id?: true
    studentId?: true
    reason?: true
    location?: true
    status?: true
    outDate?: true
    returnDate?: true
    accompaniedBy?: true
    eventTheme?: true
    updatedAt?: true
  }

  export type DisciplineRecordCountAggregateInputType = {
    id?: true
    studentId?: true
    reason?: true
    location?: true
    status?: true
    outDate?: true
    returnDate?: true
    accompaniedBy?: true
    eventTheme?: true
    updatedAt?: true
    _all?: true
  }

  export type DisciplineRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisciplineRecord to aggregate.
     */
    where?: DisciplineRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineRecords to fetch.
     */
    orderBy?: DisciplineRecordOrderByWithRelationInput | DisciplineRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplineRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DisciplineRecords
    **/
    _count?: true | DisciplineRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplineRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplineRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplineRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplineRecordMaxAggregateInputType
  }

  export type GetDisciplineRecordAggregateType<T extends DisciplineRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplineRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplineRecord[P]>
      : GetScalarType<T[P], AggregateDisciplineRecord[P]>
  }




  export type DisciplineRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplineRecordWhereInput
    orderBy?: DisciplineRecordOrderByWithAggregationInput | DisciplineRecordOrderByWithAggregationInput[]
    by: DisciplineRecordScalarFieldEnum[] | DisciplineRecordScalarFieldEnum
    having?: DisciplineRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplineRecordCountAggregateInputType | true
    _avg?: DisciplineRecordAvgAggregateInputType
    _sum?: DisciplineRecordSumAggregateInputType
    _min?: DisciplineRecordMinAggregateInputType
    _max?: DisciplineRecordMaxAggregateInputType
  }

  export type DisciplineRecordGroupByOutputType = {
    id: number
    studentId: number
    reason: string
    location: string | null
    status: string
    outDate: Date
    returnDate: Date | null
    accompaniedBy: string | null
    eventTheme: string | null
    updatedAt: Date
    _count: DisciplineRecordCountAggregateOutputType | null
    _avg: DisciplineRecordAvgAggregateOutputType | null
    _sum: DisciplineRecordSumAggregateOutputType | null
    _min: DisciplineRecordMinAggregateOutputType | null
    _max: DisciplineRecordMaxAggregateOutputType | null
  }

  type GetDisciplineRecordGroupByPayload<T extends DisciplineRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplineRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplineRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplineRecordGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplineRecordGroupByOutputType[P]>
        }
      >
    >


  export type DisciplineRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    reason?: boolean
    location?: boolean
    status?: boolean
    outDate?: boolean
    returnDate?: boolean
    accompaniedBy?: boolean
    eventTheme?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineRecord"]>

  export type DisciplineRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    reason?: boolean
    location?: boolean
    status?: boolean
    outDate?: boolean
    returnDate?: boolean
    accompaniedBy?: boolean
    eventTheme?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineRecord"]>

  export type DisciplineRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    reason?: boolean
    location?: boolean
    status?: boolean
    outDate?: boolean
    returnDate?: boolean
    accompaniedBy?: boolean
    eventTheme?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplineRecord"]>

  export type DisciplineRecordSelectScalar = {
    id?: boolean
    studentId?: boolean
    reason?: boolean
    location?: boolean
    status?: boolean
    outDate?: boolean
    returnDate?: boolean
    accompaniedBy?: boolean
    eventTheme?: boolean
    updatedAt?: boolean
  }

  export type DisciplineRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "reason" | "location" | "status" | "outDate" | "returnDate" | "accompaniedBy" | "eventTheme" | "updatedAt", ExtArgs["result"]["disciplineRecord"]>
  export type DisciplineRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type DisciplineRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type DisciplineRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $DisciplineRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DisciplineRecord"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      reason: string
      location: string | null
      status: string
      outDate: Date
      returnDate: Date | null
      accompaniedBy: string | null
      eventTheme: string | null
      updatedAt: Date
    }, ExtArgs["result"]["disciplineRecord"]>
    composites: {}
  }

  type DisciplineRecordGetPayload<S extends boolean | null | undefined | DisciplineRecordDefaultArgs> = $Result.GetResult<Prisma.$DisciplineRecordPayload, S>

  type DisciplineRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplineRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplineRecordCountAggregateInputType | true
    }

  export interface DisciplineRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DisciplineRecord'], meta: { name: 'DisciplineRecord' } }
    /**
     * Find zero or one DisciplineRecord that matches the filter.
     * @param {DisciplineRecordFindUniqueArgs} args - Arguments to find a DisciplineRecord
     * @example
     * // Get one DisciplineRecord
     * const disciplineRecord = await prisma.disciplineRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplineRecordFindUniqueArgs>(args: SelectSubset<T, DisciplineRecordFindUniqueArgs<ExtArgs>>): Prisma__DisciplineRecordClient<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DisciplineRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplineRecordFindUniqueOrThrowArgs} args - Arguments to find a DisciplineRecord
     * @example
     * // Get one DisciplineRecord
     * const disciplineRecord = await prisma.disciplineRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplineRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplineRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplineRecordClient<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisciplineRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineRecordFindFirstArgs} args - Arguments to find a DisciplineRecord
     * @example
     * // Get one DisciplineRecord
     * const disciplineRecord = await prisma.disciplineRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplineRecordFindFirstArgs>(args?: SelectSubset<T, DisciplineRecordFindFirstArgs<ExtArgs>>): Prisma__DisciplineRecordClient<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisciplineRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineRecordFindFirstOrThrowArgs} args - Arguments to find a DisciplineRecord
     * @example
     * // Get one DisciplineRecord
     * const disciplineRecord = await prisma.disciplineRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplineRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplineRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplineRecordClient<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DisciplineRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DisciplineRecords
     * const disciplineRecords = await prisma.disciplineRecord.findMany()
     * 
     * // Get first 10 DisciplineRecords
     * const disciplineRecords = await prisma.disciplineRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplineRecordWithIdOnly = await prisma.disciplineRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplineRecordFindManyArgs>(args?: SelectSubset<T, DisciplineRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DisciplineRecord.
     * @param {DisciplineRecordCreateArgs} args - Arguments to create a DisciplineRecord.
     * @example
     * // Create one DisciplineRecord
     * const DisciplineRecord = await prisma.disciplineRecord.create({
     *   data: {
     *     // ... data to create a DisciplineRecord
     *   }
     * })
     * 
     */
    create<T extends DisciplineRecordCreateArgs>(args: SelectSubset<T, DisciplineRecordCreateArgs<ExtArgs>>): Prisma__DisciplineRecordClient<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DisciplineRecords.
     * @param {DisciplineRecordCreateManyArgs} args - Arguments to create many DisciplineRecords.
     * @example
     * // Create many DisciplineRecords
     * const disciplineRecord = await prisma.disciplineRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplineRecordCreateManyArgs>(args?: SelectSubset<T, DisciplineRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DisciplineRecords and returns the data saved in the database.
     * @param {DisciplineRecordCreateManyAndReturnArgs} args - Arguments to create many DisciplineRecords.
     * @example
     * // Create many DisciplineRecords
     * const disciplineRecord = await prisma.disciplineRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DisciplineRecords and only return the `id`
     * const disciplineRecordWithIdOnly = await prisma.disciplineRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplineRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplineRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DisciplineRecord.
     * @param {DisciplineRecordDeleteArgs} args - Arguments to delete one DisciplineRecord.
     * @example
     * // Delete one DisciplineRecord
     * const DisciplineRecord = await prisma.disciplineRecord.delete({
     *   where: {
     *     // ... filter to delete one DisciplineRecord
     *   }
     * })
     * 
     */
    delete<T extends DisciplineRecordDeleteArgs>(args: SelectSubset<T, DisciplineRecordDeleteArgs<ExtArgs>>): Prisma__DisciplineRecordClient<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DisciplineRecord.
     * @param {DisciplineRecordUpdateArgs} args - Arguments to update one DisciplineRecord.
     * @example
     * // Update one DisciplineRecord
     * const disciplineRecord = await prisma.disciplineRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplineRecordUpdateArgs>(args: SelectSubset<T, DisciplineRecordUpdateArgs<ExtArgs>>): Prisma__DisciplineRecordClient<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DisciplineRecords.
     * @param {DisciplineRecordDeleteManyArgs} args - Arguments to filter DisciplineRecords to delete.
     * @example
     * // Delete a few DisciplineRecords
     * const { count } = await prisma.disciplineRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplineRecordDeleteManyArgs>(args?: SelectSubset<T, DisciplineRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisciplineRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DisciplineRecords
     * const disciplineRecord = await prisma.disciplineRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplineRecordUpdateManyArgs>(args: SelectSubset<T, DisciplineRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisciplineRecords and returns the data updated in the database.
     * @param {DisciplineRecordUpdateManyAndReturnArgs} args - Arguments to update many DisciplineRecords.
     * @example
     * // Update many DisciplineRecords
     * const disciplineRecord = await prisma.disciplineRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DisciplineRecords and only return the `id`
     * const disciplineRecordWithIdOnly = await prisma.disciplineRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends DisciplineRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplineRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DisciplineRecord.
     * @param {DisciplineRecordUpsertArgs} args - Arguments to update or create a DisciplineRecord.
     * @example
     * // Update or create a DisciplineRecord
     * const disciplineRecord = await prisma.disciplineRecord.upsert({
     *   create: {
     *     // ... data to create a DisciplineRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DisciplineRecord we want to update
     *   }
     * })
     */
    upsert<T extends DisciplineRecordUpsertArgs>(args: SelectSubset<T, DisciplineRecordUpsertArgs<ExtArgs>>): Prisma__DisciplineRecordClient<$Result.GetResult<Prisma.$DisciplineRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DisciplineRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineRecordCountArgs} args - Arguments to filter DisciplineRecords to count.
     * @example
     * // Count the number of DisciplineRecords
     * const count = await prisma.disciplineRecord.count({
     *   where: {
     *     // ... the filter for the DisciplineRecords we want to count
     *   }
     * })
    **/
    count<T extends DisciplineRecordCountArgs>(
      args?: Subset<T, DisciplineRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplineRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DisciplineRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplineRecordAggregateArgs>(args: Subset<T, DisciplineRecordAggregateArgs>): Prisma.PrismaPromise<GetDisciplineRecordAggregateType<T>>

    /**
     * Group by DisciplineRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplineRecordGroupByArgs} args - Group by arguments.
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
      T extends DisciplineRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplineRecordGroupByArgs['orderBy'] }
        : { orderBy?: DisciplineRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplineRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplineRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DisciplineRecord model
   */
  readonly fields: DisciplineRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DisciplineRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplineRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DisciplineRecord model
   */
  interface DisciplineRecordFieldRefs {
    readonly id: FieldRef<"DisciplineRecord", 'Int'>
    readonly studentId: FieldRef<"DisciplineRecord", 'Int'>
    readonly reason: FieldRef<"DisciplineRecord", 'String'>
    readonly location: FieldRef<"DisciplineRecord", 'String'>
    readonly status: FieldRef<"DisciplineRecord", 'String'>
    readonly outDate: FieldRef<"DisciplineRecord", 'DateTime'>
    readonly returnDate: FieldRef<"DisciplineRecord", 'DateTime'>
    readonly accompaniedBy: FieldRef<"DisciplineRecord", 'String'>
    readonly eventTheme: FieldRef<"DisciplineRecord", 'String'>
    readonly updatedAt: FieldRef<"DisciplineRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DisciplineRecord findUnique
   */
  export type DisciplineRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineRecord to fetch.
     */
    where: DisciplineRecordWhereUniqueInput
  }

  /**
   * DisciplineRecord findUniqueOrThrow
   */
  export type DisciplineRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineRecord to fetch.
     */
    where: DisciplineRecordWhereUniqueInput
  }

  /**
   * DisciplineRecord findFirst
   */
  export type DisciplineRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineRecord to fetch.
     */
    where?: DisciplineRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineRecords to fetch.
     */
    orderBy?: DisciplineRecordOrderByWithRelationInput | DisciplineRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisciplineRecords.
     */
    cursor?: DisciplineRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineRecords.
     */
    distinct?: DisciplineRecordScalarFieldEnum | DisciplineRecordScalarFieldEnum[]
  }

  /**
   * DisciplineRecord findFirstOrThrow
   */
  export type DisciplineRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineRecord to fetch.
     */
    where?: DisciplineRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineRecords to fetch.
     */
    orderBy?: DisciplineRecordOrderByWithRelationInput | DisciplineRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisciplineRecords.
     */
    cursor?: DisciplineRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineRecords.
     */
    distinct?: DisciplineRecordScalarFieldEnum | DisciplineRecordScalarFieldEnum[]
  }

  /**
   * DisciplineRecord findMany
   */
  export type DisciplineRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordInclude<ExtArgs> | null
    /**
     * Filter, which DisciplineRecords to fetch.
     */
    where?: DisciplineRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisciplineRecords to fetch.
     */
    orderBy?: DisciplineRecordOrderByWithRelationInput | DisciplineRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DisciplineRecords.
     */
    cursor?: DisciplineRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisciplineRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisciplineRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisciplineRecords.
     */
    distinct?: DisciplineRecordScalarFieldEnum | DisciplineRecordScalarFieldEnum[]
  }

  /**
   * DisciplineRecord create
   */
  export type DisciplineRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a DisciplineRecord.
     */
    data: XOR<DisciplineRecordCreateInput, DisciplineRecordUncheckedCreateInput>
  }

  /**
   * DisciplineRecord createMany
   */
  export type DisciplineRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DisciplineRecords.
     */
    data: DisciplineRecordCreateManyInput | DisciplineRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DisciplineRecord createManyAndReturn
   */
  export type DisciplineRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * The data used to create many DisciplineRecords.
     */
    data: DisciplineRecordCreateManyInput | DisciplineRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisciplineRecord update
   */
  export type DisciplineRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a DisciplineRecord.
     */
    data: XOR<DisciplineRecordUpdateInput, DisciplineRecordUncheckedUpdateInput>
    /**
     * Choose, which DisciplineRecord to update.
     */
    where: DisciplineRecordWhereUniqueInput
  }

  /**
   * DisciplineRecord updateMany
   */
  export type DisciplineRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DisciplineRecords.
     */
    data: XOR<DisciplineRecordUpdateManyMutationInput, DisciplineRecordUncheckedUpdateManyInput>
    /**
     * Filter which DisciplineRecords to update
     */
    where?: DisciplineRecordWhereInput
    /**
     * Limit how many DisciplineRecords to update.
     */
    limit?: number
  }

  /**
   * DisciplineRecord updateManyAndReturn
   */
  export type DisciplineRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * The data used to update DisciplineRecords.
     */
    data: XOR<DisciplineRecordUpdateManyMutationInput, DisciplineRecordUncheckedUpdateManyInput>
    /**
     * Filter which DisciplineRecords to update
     */
    where?: DisciplineRecordWhereInput
    /**
     * Limit how many DisciplineRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisciplineRecord upsert
   */
  export type DisciplineRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the DisciplineRecord to update in case it exists.
     */
    where: DisciplineRecordWhereUniqueInput
    /**
     * In case the DisciplineRecord found by the `where` argument doesn't exist, create a new DisciplineRecord with this data.
     */
    create: XOR<DisciplineRecordCreateInput, DisciplineRecordUncheckedCreateInput>
    /**
     * In case the DisciplineRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplineRecordUpdateInput, DisciplineRecordUncheckedUpdateInput>
  }

  /**
   * DisciplineRecord delete
   */
  export type DisciplineRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordInclude<ExtArgs> | null
    /**
     * Filter which DisciplineRecord to delete.
     */
    where: DisciplineRecordWhereUniqueInput
  }

  /**
   * DisciplineRecord deleteMany
   */
  export type DisciplineRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisciplineRecords to delete
     */
    where?: DisciplineRecordWhereInput
    /**
     * Limit how many DisciplineRecords to delete.
     */
    limit?: number
  }

  /**
   * DisciplineRecord without action
   */
  export type DisciplineRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplineRecord
     */
    select?: DisciplineRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisciplineRecord
     */
    omit?: DisciplineRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplineRecordInclude<ExtArgs> | null
  }


  /**
   * Model Transport
   */

  export type AggregateTransport = {
    _count: TransportCountAggregateOutputType | null
    _avg: TransportAvgAggregateOutputType | null
    _sum: TransportSumAggregateOutputType | null
    _min: TransportMinAggregateOutputType | null
    _max: TransportMaxAggregateOutputType | null
  }

  export type TransportAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type TransportSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type TransportMinAggregateOutputType = {
    id: number | null
    location: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransportMaxAggregateOutputType = {
    id: number | null
    location: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransportCountAggregateOutputType = {
    id: number
    location: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransportAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type TransportSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type TransportMinAggregateInputType = {
    id?: true
    location?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransportMaxAggregateInputType = {
    id?: true
    location?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransportCountAggregateInputType = {
    id?: true
    location?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transport to aggregate.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transports
    **/
    _count?: true | TransportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportMaxAggregateInputType
  }

  export type GetTransportAggregateType<T extends TransportAggregateArgs> = {
        [P in keyof T & keyof AggregateTransport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransport[P]>
      : GetScalarType<T[P], AggregateTransport[P]>
  }




  export type TransportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportWhereInput
    orderBy?: TransportOrderByWithAggregationInput | TransportOrderByWithAggregationInput[]
    by: TransportScalarFieldEnum[] | TransportScalarFieldEnum
    having?: TransportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportCountAggregateInputType | true
    _avg?: TransportAvgAggregateInputType
    _sum?: TransportSumAggregateInputType
    _min?: TransportMinAggregateInputType
    _max?: TransportMaxAggregateInputType
  }

  export type TransportGroupByOutputType = {
    id: number
    location: string
    price: number
    createdAt: Date
    updatedAt: Date
    _count: TransportCountAggregateOutputType | null
    _avg: TransportAvgAggregateOutputType | null
    _sum: TransportSumAggregateOutputType | null
    _min: TransportMinAggregateOutputType | null
    _max: TransportMaxAggregateOutputType | null
  }

  type GetTransportGroupByPayload<T extends TransportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportGroupByOutputType[P]>
            : GetScalarType<T[P], TransportGroupByOutputType[P]>
        }
      >
    >


  export type TransportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignments?: boolean | Transport$assignmentsArgs<ExtArgs>
    _count?: boolean | TransportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectScalar = {
    id?: boolean
    location?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "location" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["transport"]>
  export type TransportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | Transport$assignmentsArgs<ExtArgs>
    _count?: boolean | TransportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transport"
    objects: {
      assignments: Prisma.$TransportAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      location: string
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transport"]>
    composites: {}
  }

  type TransportGetPayload<S extends boolean | null | undefined | TransportDefaultArgs> = $Result.GetResult<Prisma.$TransportPayload, S>

  type TransportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportCountAggregateInputType | true
    }

  export interface TransportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transport'], meta: { name: 'Transport' } }
    /**
     * Find zero or one Transport that matches the filter.
     * @param {TransportFindUniqueArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportFindUniqueArgs>(args: SelectSubset<T, TransportFindUniqueArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportFindUniqueOrThrowArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindFirstArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportFindFirstArgs>(args?: SelectSubset<T, TransportFindFirstArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindFirstOrThrowArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transports
     * const transports = await prisma.transport.findMany()
     * 
     * // Get first 10 Transports
     * const transports = await prisma.transport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportWithIdOnly = await prisma.transport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportFindManyArgs>(args?: SelectSubset<T, TransportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transport.
     * @param {TransportCreateArgs} args - Arguments to create a Transport.
     * @example
     * // Create one Transport
     * const Transport = await prisma.transport.create({
     *   data: {
     *     // ... data to create a Transport
     *   }
     * })
     * 
     */
    create<T extends TransportCreateArgs>(args: SelectSubset<T, TransportCreateArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transports.
     * @param {TransportCreateManyArgs} args - Arguments to create many Transports.
     * @example
     * // Create many Transports
     * const transport = await prisma.transport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportCreateManyArgs>(args?: SelectSubset<T, TransportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transports and returns the data saved in the database.
     * @param {TransportCreateManyAndReturnArgs} args - Arguments to create many Transports.
     * @example
     * // Create many Transports
     * const transport = await prisma.transport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transports and only return the `id`
     * const transportWithIdOnly = await prisma.transport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transport.
     * @param {TransportDeleteArgs} args - Arguments to delete one Transport.
     * @example
     * // Delete one Transport
     * const Transport = await prisma.transport.delete({
     *   where: {
     *     // ... filter to delete one Transport
     *   }
     * })
     * 
     */
    delete<T extends TransportDeleteArgs>(args: SelectSubset<T, TransportDeleteArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transport.
     * @param {TransportUpdateArgs} args - Arguments to update one Transport.
     * @example
     * // Update one Transport
     * const transport = await prisma.transport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportUpdateArgs>(args: SelectSubset<T, TransportUpdateArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transports.
     * @param {TransportDeleteManyArgs} args - Arguments to filter Transports to delete.
     * @example
     * // Delete a few Transports
     * const { count } = await prisma.transport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportDeleteManyArgs>(args?: SelectSubset<T, TransportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transports
     * const transport = await prisma.transport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportUpdateManyArgs>(args: SelectSubset<T, TransportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transports and returns the data updated in the database.
     * @param {TransportUpdateManyAndReturnArgs} args - Arguments to update many Transports.
     * @example
     * // Update many Transports
     * const transport = await prisma.transport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transports and only return the `id`
     * const transportWithIdOnly = await prisma.transport.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransportUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transport.
     * @param {TransportUpsertArgs} args - Arguments to update or create a Transport.
     * @example
     * // Update or create a Transport
     * const transport = await prisma.transport.upsert({
     *   create: {
     *     // ... data to create a Transport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transport we want to update
     *   }
     * })
     */
    upsert<T extends TransportUpsertArgs>(args: SelectSubset<T, TransportUpsertArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportCountArgs} args - Arguments to filter Transports to count.
     * @example
     * // Count the number of Transports
     * const count = await prisma.transport.count({
     *   where: {
     *     // ... the filter for the Transports we want to count
     *   }
     * })
    **/
    count<T extends TransportCountArgs>(
      args?: Subset<T, TransportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransportAggregateArgs>(args: Subset<T, TransportAggregateArgs>): Prisma.PrismaPromise<GetTransportAggregateType<T>>

    /**
     * Group by Transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportGroupByArgs} args - Group by arguments.
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
      T extends TransportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportGroupByArgs['orderBy'] }
        : { orderBy?: TransportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transport model
   */
  readonly fields: TransportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends Transport$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Transport$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transport model
   */
  interface TransportFieldRefs {
    readonly id: FieldRef<"Transport", 'Int'>
    readonly location: FieldRef<"Transport", 'String'>
    readonly price: FieldRef<"Transport", 'Float'>
    readonly createdAt: FieldRef<"Transport", 'DateTime'>
    readonly updatedAt: FieldRef<"Transport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transport findUnique
   */
  export type TransportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport findUniqueOrThrow
   */
  export type TransportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport findFirst
   */
  export type TransportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transports.
     */
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport findFirstOrThrow
   */
  export type TransportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transports.
     */
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport findMany
   */
  export type TransportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transports to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transports.
     */
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport create
   */
  export type TransportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * The data needed to create a Transport.
     */
    data: XOR<TransportCreateInput, TransportUncheckedCreateInput>
  }

  /**
   * Transport createMany
   */
  export type TransportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transports.
     */
    data: TransportCreateManyInput | TransportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transport createManyAndReturn
   */
  export type TransportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * The data used to create many Transports.
     */
    data: TransportCreateManyInput | TransportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transport update
   */
  export type TransportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * The data needed to update a Transport.
     */
    data: XOR<TransportUpdateInput, TransportUncheckedUpdateInput>
    /**
     * Choose, which Transport to update.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport updateMany
   */
  export type TransportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transports.
     */
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyInput>
    /**
     * Filter which Transports to update
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to update.
     */
    limit?: number
  }

  /**
   * Transport updateManyAndReturn
   */
  export type TransportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * The data used to update Transports.
     */
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyInput>
    /**
     * Filter which Transports to update
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to update.
     */
    limit?: number
  }

  /**
   * Transport upsert
   */
  export type TransportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * The filter to search for the Transport to update in case it exists.
     */
    where: TransportWhereUniqueInput
    /**
     * In case the Transport found by the `where` argument doesn't exist, create a new Transport with this data.
     */
    create: XOR<TransportCreateInput, TransportUncheckedCreateInput>
    /**
     * In case the Transport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportUpdateInput, TransportUncheckedUpdateInput>
  }

  /**
   * Transport delete
   */
  export type TransportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter which Transport to delete.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport deleteMany
   */
  export type TransportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transports to delete
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to delete.
     */
    limit?: number
  }

  /**
   * Transport.assignments
   */
  export type Transport$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
    where?: TransportAssignmentWhereInput
    orderBy?: TransportAssignmentOrderByWithRelationInput | TransportAssignmentOrderByWithRelationInput[]
    cursor?: TransportAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransportAssignmentScalarFieldEnum | TransportAssignmentScalarFieldEnum[]
  }

  /**
   * Transport without action
   */
  export type TransportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
  }


  /**
   * Model TransportAssignment
   */

  export type AggregateTransportAssignment = {
    _count: TransportAssignmentCountAggregateOutputType | null
    _avg: TransportAssignmentAvgAggregateOutputType | null
    _sum: TransportAssignmentSumAggregateOutputType | null
    _min: TransportAssignmentMinAggregateOutputType | null
    _max: TransportAssignmentMaxAggregateOutputType | null
  }

  export type TransportAssignmentAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    transportId: number | null
  }

  export type TransportAssignmentSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    transportId: number | null
  }

  export type TransportAssignmentMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    transportId: number | null
    status: $Enums.TransportStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransportAssignmentMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    transportId: number | null
    status: $Enums.TransportStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransportAssignmentCountAggregateOutputType = {
    id: number
    studentId: number
    transportId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransportAssignmentAvgAggregateInputType = {
    id?: true
    studentId?: true
    transportId?: true
  }

  export type TransportAssignmentSumAggregateInputType = {
    id?: true
    studentId?: true
    transportId?: true
  }

  export type TransportAssignmentMinAggregateInputType = {
    id?: true
    studentId?: true
    transportId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransportAssignmentMaxAggregateInputType = {
    id?: true
    studentId?: true
    transportId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransportAssignmentCountAggregateInputType = {
    id?: true
    studentId?: true
    transportId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransportAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransportAssignment to aggregate.
     */
    where?: TransportAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportAssignments to fetch.
     */
    orderBy?: TransportAssignmentOrderByWithRelationInput | TransportAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransportAssignments
    **/
    _count?: true | TransportAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransportAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransportAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportAssignmentMaxAggregateInputType
  }

  export type GetTransportAssignmentAggregateType<T extends TransportAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTransportAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransportAssignment[P]>
      : GetScalarType<T[P], AggregateTransportAssignment[P]>
  }




  export type TransportAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportAssignmentWhereInput
    orderBy?: TransportAssignmentOrderByWithAggregationInput | TransportAssignmentOrderByWithAggregationInput[]
    by: TransportAssignmentScalarFieldEnum[] | TransportAssignmentScalarFieldEnum
    having?: TransportAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportAssignmentCountAggregateInputType | true
    _avg?: TransportAssignmentAvgAggregateInputType
    _sum?: TransportAssignmentSumAggregateInputType
    _min?: TransportAssignmentMinAggregateInputType
    _max?: TransportAssignmentMaxAggregateInputType
  }

  export type TransportAssignmentGroupByOutputType = {
    id: number
    studentId: number
    transportId: number
    status: $Enums.TransportStatus
    createdAt: Date
    updatedAt: Date
    _count: TransportAssignmentCountAggregateOutputType | null
    _avg: TransportAssignmentAvgAggregateOutputType | null
    _sum: TransportAssignmentSumAggregateOutputType | null
    _min: TransportAssignmentMinAggregateOutputType | null
    _max: TransportAssignmentMaxAggregateOutputType | null
  }

  type GetTransportAssignmentGroupByPayload<T extends TransportAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], TransportAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type TransportAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    transportId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportAssignment"]>

  export type TransportAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    transportId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportAssignment"]>

  export type TransportAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    transportId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportAssignment"]>

  export type TransportAssignmentSelectScalar = {
    id?: boolean
    studentId?: boolean
    transportId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransportAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "transportId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["transportAssignment"]>
  export type TransportAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }
  export type TransportAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }
  export type TransportAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }

  export type $TransportAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransportAssignment"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      transport: Prisma.$TransportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      transportId: number
      status: $Enums.TransportStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transportAssignment"]>
    composites: {}
  }

  type TransportAssignmentGetPayload<S extends boolean | null | undefined | TransportAssignmentDefaultArgs> = $Result.GetResult<Prisma.$TransportAssignmentPayload, S>

  type TransportAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportAssignmentCountAggregateInputType | true
    }

  export interface TransportAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransportAssignment'], meta: { name: 'TransportAssignment' } }
    /**
     * Find zero or one TransportAssignment that matches the filter.
     * @param {TransportAssignmentFindUniqueArgs} args - Arguments to find a TransportAssignment
     * @example
     * // Get one TransportAssignment
     * const transportAssignment = await prisma.transportAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportAssignmentFindUniqueArgs>(args: SelectSubset<T, TransportAssignmentFindUniqueArgs<ExtArgs>>): Prisma__TransportAssignmentClient<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransportAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportAssignmentFindUniqueOrThrowArgs} args - Arguments to find a TransportAssignment
     * @example
     * // Get one TransportAssignment
     * const transportAssignment = await prisma.transportAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportAssignmentClient<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransportAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAssignmentFindFirstArgs} args - Arguments to find a TransportAssignment
     * @example
     * // Get one TransportAssignment
     * const transportAssignment = await prisma.transportAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportAssignmentFindFirstArgs>(args?: SelectSubset<T, TransportAssignmentFindFirstArgs<ExtArgs>>): Prisma__TransportAssignmentClient<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransportAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAssignmentFindFirstOrThrowArgs} args - Arguments to find a TransportAssignment
     * @example
     * // Get one TransportAssignment
     * const transportAssignment = await prisma.transportAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportAssignmentClient<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransportAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransportAssignments
     * const transportAssignments = await prisma.transportAssignment.findMany()
     * 
     * // Get first 10 TransportAssignments
     * const transportAssignments = await prisma.transportAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportAssignmentWithIdOnly = await prisma.transportAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportAssignmentFindManyArgs>(args?: SelectSubset<T, TransportAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransportAssignment.
     * @param {TransportAssignmentCreateArgs} args - Arguments to create a TransportAssignment.
     * @example
     * // Create one TransportAssignment
     * const TransportAssignment = await prisma.transportAssignment.create({
     *   data: {
     *     // ... data to create a TransportAssignment
     *   }
     * })
     * 
     */
    create<T extends TransportAssignmentCreateArgs>(args: SelectSubset<T, TransportAssignmentCreateArgs<ExtArgs>>): Prisma__TransportAssignmentClient<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransportAssignments.
     * @param {TransportAssignmentCreateManyArgs} args - Arguments to create many TransportAssignments.
     * @example
     * // Create many TransportAssignments
     * const transportAssignment = await prisma.transportAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportAssignmentCreateManyArgs>(args?: SelectSubset<T, TransportAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransportAssignments and returns the data saved in the database.
     * @param {TransportAssignmentCreateManyAndReturnArgs} args - Arguments to create many TransportAssignments.
     * @example
     * // Create many TransportAssignments
     * const transportAssignment = await prisma.transportAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransportAssignments and only return the `id`
     * const transportAssignmentWithIdOnly = await prisma.transportAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransportAssignment.
     * @param {TransportAssignmentDeleteArgs} args - Arguments to delete one TransportAssignment.
     * @example
     * // Delete one TransportAssignment
     * const TransportAssignment = await prisma.transportAssignment.delete({
     *   where: {
     *     // ... filter to delete one TransportAssignment
     *   }
     * })
     * 
     */
    delete<T extends TransportAssignmentDeleteArgs>(args: SelectSubset<T, TransportAssignmentDeleteArgs<ExtArgs>>): Prisma__TransportAssignmentClient<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransportAssignment.
     * @param {TransportAssignmentUpdateArgs} args - Arguments to update one TransportAssignment.
     * @example
     * // Update one TransportAssignment
     * const transportAssignment = await prisma.transportAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportAssignmentUpdateArgs>(args: SelectSubset<T, TransportAssignmentUpdateArgs<ExtArgs>>): Prisma__TransportAssignmentClient<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransportAssignments.
     * @param {TransportAssignmentDeleteManyArgs} args - Arguments to filter TransportAssignments to delete.
     * @example
     * // Delete a few TransportAssignments
     * const { count } = await prisma.transportAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportAssignmentDeleteManyArgs>(args?: SelectSubset<T, TransportAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransportAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransportAssignments
     * const transportAssignment = await prisma.transportAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportAssignmentUpdateManyArgs>(args: SelectSubset<T, TransportAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransportAssignments and returns the data updated in the database.
     * @param {TransportAssignmentUpdateManyAndReturnArgs} args - Arguments to update many TransportAssignments.
     * @example
     * // Update many TransportAssignments
     * const transportAssignment = await prisma.transportAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransportAssignments and only return the `id`
     * const transportAssignmentWithIdOnly = await prisma.transportAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransportAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransportAssignment.
     * @param {TransportAssignmentUpsertArgs} args - Arguments to update or create a TransportAssignment.
     * @example
     * // Update or create a TransportAssignment
     * const transportAssignment = await prisma.transportAssignment.upsert({
     *   create: {
     *     // ... data to create a TransportAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransportAssignment we want to update
     *   }
     * })
     */
    upsert<T extends TransportAssignmentUpsertArgs>(args: SelectSubset<T, TransportAssignmentUpsertArgs<ExtArgs>>): Prisma__TransportAssignmentClient<$Result.GetResult<Prisma.$TransportAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransportAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAssignmentCountArgs} args - Arguments to filter TransportAssignments to count.
     * @example
     * // Count the number of TransportAssignments
     * const count = await prisma.transportAssignment.count({
     *   where: {
     *     // ... the filter for the TransportAssignments we want to count
     *   }
     * })
    **/
    count<T extends TransportAssignmentCountArgs>(
      args?: Subset<T, TransportAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransportAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransportAssignmentAggregateArgs>(args: Subset<T, TransportAssignmentAggregateArgs>): Prisma.PrismaPromise<GetTransportAssignmentAggregateType<T>>

    /**
     * Group by TransportAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAssignmentGroupByArgs} args - Group by arguments.
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
      T extends TransportAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: TransportAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransportAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransportAssignment model
   */
  readonly fields: TransportAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransportAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transport<T extends TransportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransportDefaultArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TransportAssignment model
   */
  interface TransportAssignmentFieldRefs {
    readonly id: FieldRef<"TransportAssignment", 'Int'>
    readonly studentId: FieldRef<"TransportAssignment", 'Int'>
    readonly transportId: FieldRef<"TransportAssignment", 'Int'>
    readonly status: FieldRef<"TransportAssignment", 'TransportStatus'>
    readonly createdAt: FieldRef<"TransportAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"TransportAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransportAssignment findUnique
   */
  export type TransportAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TransportAssignment to fetch.
     */
    where: TransportAssignmentWhereUniqueInput
  }

  /**
   * TransportAssignment findUniqueOrThrow
   */
  export type TransportAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TransportAssignment to fetch.
     */
    where: TransportAssignmentWhereUniqueInput
  }

  /**
   * TransportAssignment findFirst
   */
  export type TransportAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TransportAssignment to fetch.
     */
    where?: TransportAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportAssignments to fetch.
     */
    orderBy?: TransportAssignmentOrderByWithRelationInput | TransportAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransportAssignments.
     */
    cursor?: TransportAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransportAssignments.
     */
    distinct?: TransportAssignmentScalarFieldEnum | TransportAssignmentScalarFieldEnum[]
  }

  /**
   * TransportAssignment findFirstOrThrow
   */
  export type TransportAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TransportAssignment to fetch.
     */
    where?: TransportAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportAssignments to fetch.
     */
    orderBy?: TransportAssignmentOrderByWithRelationInput | TransportAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransportAssignments.
     */
    cursor?: TransportAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransportAssignments.
     */
    distinct?: TransportAssignmentScalarFieldEnum | TransportAssignmentScalarFieldEnum[]
  }

  /**
   * TransportAssignment findMany
   */
  export type TransportAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which TransportAssignments to fetch.
     */
    where?: TransportAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportAssignments to fetch.
     */
    orderBy?: TransportAssignmentOrderByWithRelationInput | TransportAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransportAssignments.
     */
    cursor?: TransportAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransportAssignments.
     */
    distinct?: TransportAssignmentScalarFieldEnum | TransportAssignmentScalarFieldEnum[]
  }

  /**
   * TransportAssignment create
   */
  export type TransportAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TransportAssignment.
     */
    data: XOR<TransportAssignmentCreateInput, TransportAssignmentUncheckedCreateInput>
  }

  /**
   * TransportAssignment createMany
   */
  export type TransportAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransportAssignments.
     */
    data: TransportAssignmentCreateManyInput | TransportAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransportAssignment createManyAndReturn
   */
  export type TransportAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many TransportAssignments.
     */
    data: TransportAssignmentCreateManyInput | TransportAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransportAssignment update
   */
  export type TransportAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TransportAssignment.
     */
    data: XOR<TransportAssignmentUpdateInput, TransportAssignmentUncheckedUpdateInput>
    /**
     * Choose, which TransportAssignment to update.
     */
    where: TransportAssignmentWhereUniqueInput
  }

  /**
   * TransportAssignment updateMany
   */
  export type TransportAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransportAssignments.
     */
    data: XOR<TransportAssignmentUpdateManyMutationInput, TransportAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TransportAssignments to update
     */
    where?: TransportAssignmentWhereInput
    /**
     * Limit how many TransportAssignments to update.
     */
    limit?: number
  }

  /**
   * TransportAssignment updateManyAndReturn
   */
  export type TransportAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update TransportAssignments.
     */
    data: XOR<TransportAssignmentUpdateManyMutationInput, TransportAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which TransportAssignments to update
     */
    where?: TransportAssignmentWhereInput
    /**
     * Limit how many TransportAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransportAssignment upsert
   */
  export type TransportAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TransportAssignment to update in case it exists.
     */
    where: TransportAssignmentWhereUniqueInput
    /**
     * In case the TransportAssignment found by the `where` argument doesn't exist, create a new TransportAssignment with this data.
     */
    create: XOR<TransportAssignmentCreateInput, TransportAssignmentUncheckedCreateInput>
    /**
     * In case the TransportAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportAssignmentUpdateInput, TransportAssignmentUncheckedUpdateInput>
  }

  /**
   * TransportAssignment delete
   */
  export type TransportAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
    /**
     * Filter which TransportAssignment to delete.
     */
    where: TransportAssignmentWhereUniqueInput
  }

  /**
   * TransportAssignment deleteMany
   */
  export type TransportAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransportAssignments to delete
     */
    where?: TransportAssignmentWhereInput
    /**
     * Limit how many TransportAssignments to delete.
     */
    limit?: number
  }

  /**
   * TransportAssignment without action
   */
  export type TransportAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportAssignment
     */
    select?: TransportAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportAssignment
     */
    omit?: TransportAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model AcademicTerm
   */

  export type AggregateAcademicTerm = {
    _count: AcademicTermCountAggregateOutputType | null
    _avg: AcademicTermAvgAggregateOutputType | null
    _sum: AcademicTermSumAggregateOutputType | null
    _min: AcademicTermMinAggregateOutputType | null
    _max: AcademicTermMaxAggregateOutputType | null
  }

  export type AcademicTermAvgAggregateOutputType = {
    id: number | null
  }

  export type AcademicTermSumAggregateOutputType = {
    id: number | null
  }

  export type AcademicTermMinAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademicTermMaxAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademicTermCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AcademicTermAvgAggregateInputType = {
    id?: true
  }

  export type AcademicTermSumAggregateInputType = {
    id?: true
  }

  export type AcademicTermMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademicTermMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademicTermCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AcademicTermAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicTerm to aggregate.
     */
    where?: AcademicTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicTerms to fetch.
     */
    orderBy?: AcademicTermOrderByWithRelationInput | AcademicTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcademicTerms
    **/
    _count?: true | AcademicTermCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcademicTermAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcademicTermSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicTermMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicTermMaxAggregateInputType
  }

  export type GetAcademicTermAggregateType<T extends AcademicTermAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademicTerm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademicTerm[P]>
      : GetScalarType<T[P], AggregateAcademicTerm[P]>
  }




  export type AcademicTermGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicTermWhereInput
    orderBy?: AcademicTermOrderByWithAggregationInput | AcademicTermOrderByWithAggregationInput[]
    by: AcademicTermScalarFieldEnum[] | AcademicTermScalarFieldEnum
    having?: AcademicTermScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicTermCountAggregateInputType | true
    _avg?: AcademicTermAvgAggregateInputType
    _sum?: AcademicTermSumAggregateInputType
    _min?: AcademicTermMinAggregateInputType
    _max?: AcademicTermMaxAggregateInputType
  }

  export type AcademicTermGroupByOutputType = {
    id: number
    name: string
    startDate: Date
    endDate: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AcademicTermCountAggregateOutputType | null
    _avg: AcademicTermAvgAggregateOutputType | null
    _sum: AcademicTermSumAggregateOutputType | null
    _min: AcademicTermMinAggregateOutputType | null
    _max: AcademicTermMaxAggregateOutputType | null
  }

  type GetAcademicTermGroupByPayload<T extends AcademicTermGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicTermGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicTermGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicTermGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicTermGroupByOutputType[P]>
        }
      >
    >


  export type AcademicTermSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendanceRecords?: boolean | AcademicTerm$attendanceRecordsArgs<ExtArgs>
    _count?: boolean | AcademicTermCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicTerm"]>

  export type AcademicTermSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["academicTerm"]>

  export type AcademicTermSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["academicTerm"]>

  export type AcademicTermSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AcademicTermOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["academicTerm"]>
  export type AcademicTermInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendanceRecords?: boolean | AcademicTerm$attendanceRecordsArgs<ExtArgs>
    _count?: boolean | AcademicTermCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AcademicTermIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AcademicTermIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AcademicTermPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcademicTerm"
    objects: {
      attendanceRecords: Prisma.$AttendanceRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      startDate: Date
      endDate: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["academicTerm"]>
    composites: {}
  }

  type AcademicTermGetPayload<S extends boolean | null | undefined | AcademicTermDefaultArgs> = $Result.GetResult<Prisma.$AcademicTermPayload, S>

  type AcademicTermCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcademicTermFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcademicTermCountAggregateInputType | true
    }

  export interface AcademicTermDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcademicTerm'], meta: { name: 'AcademicTerm' } }
    /**
     * Find zero or one AcademicTerm that matches the filter.
     * @param {AcademicTermFindUniqueArgs} args - Arguments to find a AcademicTerm
     * @example
     * // Get one AcademicTerm
     * const academicTerm = await prisma.academicTerm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicTermFindUniqueArgs>(args: SelectSubset<T, AcademicTermFindUniqueArgs<ExtArgs>>): Prisma__AcademicTermClient<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcademicTerm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcademicTermFindUniqueOrThrowArgs} args - Arguments to find a AcademicTerm
     * @example
     * // Get one AcademicTerm
     * const academicTerm = await prisma.academicTerm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicTermFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicTermFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicTermClient<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicTerm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicTermFindFirstArgs} args - Arguments to find a AcademicTerm
     * @example
     * // Get one AcademicTerm
     * const academicTerm = await prisma.academicTerm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicTermFindFirstArgs>(args?: SelectSubset<T, AcademicTermFindFirstArgs<ExtArgs>>): Prisma__AcademicTermClient<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicTerm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicTermFindFirstOrThrowArgs} args - Arguments to find a AcademicTerm
     * @example
     * // Get one AcademicTerm
     * const academicTerm = await prisma.academicTerm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicTermFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicTermFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicTermClient<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcademicTerms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicTermFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicTerms
     * const academicTerms = await prisma.academicTerm.findMany()
     * 
     * // Get first 10 AcademicTerms
     * const academicTerms = await prisma.academicTerm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academicTermWithIdOnly = await prisma.academicTerm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcademicTermFindManyArgs>(args?: SelectSubset<T, AcademicTermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcademicTerm.
     * @param {AcademicTermCreateArgs} args - Arguments to create a AcademicTerm.
     * @example
     * // Create one AcademicTerm
     * const AcademicTerm = await prisma.academicTerm.create({
     *   data: {
     *     // ... data to create a AcademicTerm
     *   }
     * })
     * 
     */
    create<T extends AcademicTermCreateArgs>(args: SelectSubset<T, AcademicTermCreateArgs<ExtArgs>>): Prisma__AcademicTermClient<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcademicTerms.
     * @param {AcademicTermCreateManyArgs} args - Arguments to create many AcademicTerms.
     * @example
     * // Create many AcademicTerms
     * const academicTerm = await prisma.academicTerm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicTermCreateManyArgs>(args?: SelectSubset<T, AcademicTermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcademicTerms and returns the data saved in the database.
     * @param {AcademicTermCreateManyAndReturnArgs} args - Arguments to create many AcademicTerms.
     * @example
     * // Create many AcademicTerms
     * const academicTerm = await prisma.academicTerm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcademicTerms and only return the `id`
     * const academicTermWithIdOnly = await prisma.academicTerm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcademicTermCreateManyAndReturnArgs>(args?: SelectSubset<T, AcademicTermCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AcademicTerm.
     * @param {AcademicTermDeleteArgs} args - Arguments to delete one AcademicTerm.
     * @example
     * // Delete one AcademicTerm
     * const AcademicTerm = await prisma.academicTerm.delete({
     *   where: {
     *     // ... filter to delete one AcademicTerm
     *   }
     * })
     * 
     */
    delete<T extends AcademicTermDeleteArgs>(args: SelectSubset<T, AcademicTermDeleteArgs<ExtArgs>>): Prisma__AcademicTermClient<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcademicTerm.
     * @param {AcademicTermUpdateArgs} args - Arguments to update one AcademicTerm.
     * @example
     * // Update one AcademicTerm
     * const academicTerm = await prisma.academicTerm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicTermUpdateArgs>(args: SelectSubset<T, AcademicTermUpdateArgs<ExtArgs>>): Prisma__AcademicTermClient<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcademicTerms.
     * @param {AcademicTermDeleteManyArgs} args - Arguments to filter AcademicTerms to delete.
     * @example
     * // Delete a few AcademicTerms
     * const { count } = await prisma.academicTerm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicTermDeleteManyArgs>(args?: SelectSubset<T, AcademicTermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicTermUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicTerms
     * const academicTerm = await prisma.academicTerm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicTermUpdateManyArgs>(args: SelectSubset<T, AcademicTermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicTerms and returns the data updated in the database.
     * @param {AcademicTermUpdateManyAndReturnArgs} args - Arguments to update many AcademicTerms.
     * @example
     * // Update many AcademicTerms
     * const academicTerm = await prisma.academicTerm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AcademicTerms and only return the `id`
     * const academicTermWithIdOnly = await prisma.academicTerm.updateManyAndReturn({
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
    updateManyAndReturn<T extends AcademicTermUpdateManyAndReturnArgs>(args: SelectSubset<T, AcademicTermUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AcademicTerm.
     * @param {AcademicTermUpsertArgs} args - Arguments to update or create a AcademicTerm.
     * @example
     * // Update or create a AcademicTerm
     * const academicTerm = await prisma.academicTerm.upsert({
     *   create: {
     *     // ... data to create a AcademicTerm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicTerm we want to update
     *   }
     * })
     */
    upsert<T extends AcademicTermUpsertArgs>(args: SelectSubset<T, AcademicTermUpsertArgs<ExtArgs>>): Prisma__AcademicTermClient<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcademicTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicTermCountArgs} args - Arguments to filter AcademicTerms to count.
     * @example
     * // Count the number of AcademicTerms
     * const count = await prisma.academicTerm.count({
     *   where: {
     *     // ... the filter for the AcademicTerms we want to count
     *   }
     * })
    **/
    count<T extends AcademicTermCountArgs>(
      args?: Subset<T, AcademicTermCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicTermCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcademicTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicTermAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcademicTermAggregateArgs>(args: Subset<T, AcademicTermAggregateArgs>): Prisma.PrismaPromise<GetAcademicTermAggregateType<T>>

    /**
     * Group by AcademicTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicTermGroupByArgs} args - Group by arguments.
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
      T extends AcademicTermGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicTermGroupByArgs['orderBy'] }
        : { orderBy?: AcademicTermGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcademicTermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcademicTerm model
   */
  readonly fields: AcademicTermFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcademicTerm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicTermClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendanceRecords<T extends AcademicTerm$attendanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, AcademicTerm$attendanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AcademicTerm model
   */
  interface AcademicTermFieldRefs {
    readonly id: FieldRef<"AcademicTerm", 'Int'>
    readonly name: FieldRef<"AcademicTerm", 'String'>
    readonly startDate: FieldRef<"AcademicTerm", 'DateTime'>
    readonly endDate: FieldRef<"AcademicTerm", 'DateTime'>
    readonly isActive: FieldRef<"AcademicTerm", 'Boolean'>
    readonly createdAt: FieldRef<"AcademicTerm", 'DateTime'>
    readonly updatedAt: FieldRef<"AcademicTerm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcademicTerm findUnique
   */
  export type AcademicTermFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicTermInclude<ExtArgs> | null
    /**
     * Filter, which AcademicTerm to fetch.
     */
    where: AcademicTermWhereUniqueInput
  }

  /**
   * AcademicTerm findUniqueOrThrow
   */
  export type AcademicTermFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicTermInclude<ExtArgs> | null
    /**
     * Filter, which AcademicTerm to fetch.
     */
    where: AcademicTermWhereUniqueInput
  }

  /**
   * AcademicTerm findFirst
   */
  export type AcademicTermFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicTermInclude<ExtArgs> | null
    /**
     * Filter, which AcademicTerm to fetch.
     */
    where?: AcademicTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicTerms to fetch.
     */
    orderBy?: AcademicTermOrderByWithRelationInput | AcademicTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicTerms.
     */
    cursor?: AcademicTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicTerms.
     */
    distinct?: AcademicTermScalarFieldEnum | AcademicTermScalarFieldEnum[]
  }

  /**
   * AcademicTerm findFirstOrThrow
   */
  export type AcademicTermFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicTermInclude<ExtArgs> | null
    /**
     * Filter, which AcademicTerm to fetch.
     */
    where?: AcademicTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicTerms to fetch.
     */
    orderBy?: AcademicTermOrderByWithRelationInput | AcademicTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicTerms.
     */
    cursor?: AcademicTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicTerms.
     */
    distinct?: AcademicTermScalarFieldEnum | AcademicTermScalarFieldEnum[]
  }

  /**
   * AcademicTerm findMany
   */
  export type AcademicTermFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicTermInclude<ExtArgs> | null
    /**
     * Filter, which AcademicTerms to fetch.
     */
    where?: AcademicTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicTerms to fetch.
     */
    orderBy?: AcademicTermOrderByWithRelationInput | AcademicTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcademicTerms.
     */
    cursor?: AcademicTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicTerms.
     */
    distinct?: AcademicTermScalarFieldEnum | AcademicTermScalarFieldEnum[]
  }

  /**
   * AcademicTerm create
   */
  export type AcademicTermCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicTermInclude<ExtArgs> | null
    /**
     * The data needed to create a AcademicTerm.
     */
    data: XOR<AcademicTermCreateInput, AcademicTermUncheckedCreateInput>
  }

  /**
   * AcademicTerm createMany
   */
  export type AcademicTermCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicTerms.
     */
    data: AcademicTermCreateManyInput | AcademicTermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicTerm createManyAndReturn
   */
  export type AcademicTermCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * The data used to create many AcademicTerms.
     */
    data: AcademicTermCreateManyInput | AcademicTermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicTerm update
   */
  export type AcademicTermUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicTermInclude<ExtArgs> | null
    /**
     * The data needed to update a AcademicTerm.
     */
    data: XOR<AcademicTermUpdateInput, AcademicTermUncheckedUpdateInput>
    /**
     * Choose, which AcademicTerm to update.
     */
    where: AcademicTermWhereUniqueInput
  }

  /**
   * AcademicTerm updateMany
   */
  export type AcademicTermUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicTerms.
     */
    data: XOR<AcademicTermUpdateManyMutationInput, AcademicTermUncheckedUpdateManyInput>
    /**
     * Filter which AcademicTerms to update
     */
    where?: AcademicTermWhereInput
    /**
     * Limit how many AcademicTerms to update.
     */
    limit?: number
  }

  /**
   * AcademicTerm updateManyAndReturn
   */
  export type AcademicTermUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * The data used to update AcademicTerms.
     */
    data: XOR<AcademicTermUpdateManyMutationInput, AcademicTermUncheckedUpdateManyInput>
    /**
     * Filter which AcademicTerms to update
     */
    where?: AcademicTermWhereInput
    /**
     * Limit how many AcademicTerms to update.
     */
    limit?: number
  }

  /**
   * AcademicTerm upsert
   */
  export type AcademicTermUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicTermInclude<ExtArgs> | null
    /**
     * The filter to search for the AcademicTerm to update in case it exists.
     */
    where: AcademicTermWhereUniqueInput
    /**
     * In case the AcademicTerm found by the `where` argument doesn't exist, create a new AcademicTerm with this data.
     */
    create: XOR<AcademicTermCreateInput, AcademicTermUncheckedCreateInput>
    /**
     * In case the AcademicTerm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicTermUpdateInput, AcademicTermUncheckedUpdateInput>
  }

  /**
   * AcademicTerm delete
   */
  export type AcademicTermDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicTermInclude<ExtArgs> | null
    /**
     * Filter which AcademicTerm to delete.
     */
    where: AcademicTermWhereUniqueInput
  }

  /**
   * AcademicTerm deleteMany
   */
  export type AcademicTermDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicTerms to delete
     */
    where?: AcademicTermWhereInput
    /**
     * Limit how many AcademicTerms to delete.
     */
    limit?: number
  }

  /**
   * AcademicTerm.attendanceRecords
   */
  export type AcademicTerm$attendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    cursor?: AttendanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AcademicTerm without action
   */
  export type AcademicTermDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicTerm
     */
    select?: AcademicTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicTerm
     */
    omit?: AcademicTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicTermInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceRecord
   */

  export type AggregateAttendanceRecord = {
    _count: AttendanceRecordCountAggregateOutputType | null
    _avg: AttendanceRecordAvgAggregateOutputType | null
    _sum: AttendanceRecordSumAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  export type AttendanceRecordAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    termId: number | null
    markedByStaffId: number | null
  }

  export type AttendanceRecordSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    termId: number | null
    markedByStaffId: number | null
  }

  export type AttendanceRecordMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    termId: number | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    note: string | null
    markedByStaffId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceRecordMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    termId: number | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    note: string | null
    markedByStaffId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceRecordCountAggregateOutputType = {
    id: number
    studentId: number
    termId: number
    date: number
    status: number
    note: number
    markedByStaffId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceRecordAvgAggregateInputType = {
    id?: true
    studentId?: true
    termId?: true
    markedByStaffId?: true
  }

  export type AttendanceRecordSumAggregateInputType = {
    id?: true
    studentId?: true
    termId?: true
    markedByStaffId?: true
  }

  export type AttendanceRecordMinAggregateInputType = {
    id?: true
    studentId?: true
    termId?: true
    date?: true
    status?: true
    note?: true
    markedByStaffId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceRecordMaxAggregateInputType = {
    id?: true
    studentId?: true
    termId?: true
    date?: true
    status?: true
    note?: true
    markedByStaffId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceRecordCountAggregateInputType = {
    id?: true
    studentId?: true
    termId?: true
    date?: true
    status?: true
    note?: true
    markedByStaffId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecord to aggregate.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceRecords
    **/
    _count?: true | AttendanceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type GetAttendanceRecordAggregateType<T extends AttendanceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceRecord[P]>
      : GetScalarType<T[P], AggregateAttendanceRecord[P]>
  }




  export type AttendanceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceRecordWhereInput
    orderBy?: AttendanceRecordOrderByWithAggregationInput | AttendanceRecordOrderByWithAggregationInput[]
    by: AttendanceRecordScalarFieldEnum[] | AttendanceRecordScalarFieldEnum
    having?: AttendanceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceRecordCountAggregateInputType | true
    _avg?: AttendanceRecordAvgAggregateInputType
    _sum?: AttendanceRecordSumAggregateInputType
    _min?: AttendanceRecordMinAggregateInputType
    _max?: AttendanceRecordMaxAggregateInputType
  }

  export type AttendanceRecordGroupByOutputType = {
    id: number
    studentId: number
    termId: number
    date: Date
    status: $Enums.AttendanceStatus
    note: string | null
    markedByStaffId: number | null
    createdAt: Date
    updatedAt: Date
    _count: AttendanceRecordCountAggregateOutputType | null
    _avg: AttendanceRecordAvgAggregateOutputType | null
    _sum: AttendanceRecordSumAggregateOutputType | null
    _min: AttendanceRecordMinAggregateOutputType | null
    _max: AttendanceRecordMaxAggregateOutputType | null
  }

  type GetAttendanceRecordGroupByPayload<T extends AttendanceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceRecordGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    termId?: boolean
    date?: boolean
    status?: boolean
    note?: boolean
    markedByStaffId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | AcademicTermDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    termId?: boolean
    date?: boolean
    status?: boolean
    note?: boolean
    markedByStaffId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | AcademicTermDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    termId?: boolean
    date?: boolean
    status?: boolean
    note?: boolean
    markedByStaffId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | AcademicTermDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceRecord"]>

  export type AttendanceRecordSelectScalar = {
    id?: boolean
    studentId?: boolean
    termId?: boolean
    date?: boolean
    status?: boolean
    note?: boolean
    markedByStaffId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "termId" | "date" | "status" | "note" | "markedByStaffId" | "createdAt" | "updatedAt", ExtArgs["result"]["attendanceRecord"]>
  export type AttendanceRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | AcademicTermDefaultArgs<ExtArgs>
  }
  export type AttendanceRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | AcademicTermDefaultArgs<ExtArgs>
  }
  export type AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | AcademicTermDefaultArgs<ExtArgs>
  }

  export type $AttendanceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceRecord"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      term: Prisma.$AcademicTermPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      termId: number
      date: Date
      status: $Enums.AttendanceStatus
      note: string | null
      markedByStaffId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendanceRecord"]>
    composites: {}
  }

  type AttendanceRecordGetPayload<S extends boolean | null | undefined | AttendanceRecordDefaultArgs> = $Result.GetResult<Prisma.$AttendanceRecordPayload, S>

  type AttendanceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceRecordCountAggregateInputType | true
    }

  export interface AttendanceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceRecord'], meta: { name: 'AttendanceRecord' } }
    /**
     * Find zero or one AttendanceRecord that matches the filter.
     * @param {AttendanceRecordFindUniqueArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceRecordFindUniqueArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceRecordFindUniqueOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceRecordFindFirstArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindFirstOrThrowArgs} args - Arguments to find a AttendanceRecord
     * @example
     * // Get one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany()
     * 
     * // Get first 10 AttendanceRecords
     * const attendanceRecords = await prisma.attendanceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceRecordFindManyArgs>(args?: SelectSubset<T, AttendanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceRecord.
     * @param {AttendanceRecordCreateArgs} args - Arguments to create a AttendanceRecord.
     * @example
     * // Create one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.create({
     *   data: {
     *     // ... data to create a AttendanceRecord
     *   }
     * })
     * 
     */
    create<T extends AttendanceRecordCreateArgs>(args: SelectSubset<T, AttendanceRecordCreateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceRecords.
     * @param {AttendanceRecordCreateManyArgs} args - Arguments to create many AttendanceRecords.
     * @example
     * // Create many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceRecordCreateManyArgs>(args?: SelectSubset<T, AttendanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceRecords and returns the data saved in the database.
     * @param {AttendanceRecordCreateManyAndReturnArgs} args - Arguments to create many AttendanceRecords.
     * @example
     * // Create many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceRecords and only return the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttendanceRecord.
     * @param {AttendanceRecordDeleteArgs} args - Arguments to delete one AttendanceRecord.
     * @example
     * // Delete one AttendanceRecord
     * const AttendanceRecord = await prisma.attendanceRecord.delete({
     *   where: {
     *     // ... filter to delete one AttendanceRecord
     *   }
     * })
     * 
     */
    delete<T extends AttendanceRecordDeleteArgs>(args: SelectSubset<T, AttendanceRecordDeleteArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceRecord.
     * @param {AttendanceRecordUpdateArgs} args - Arguments to update one AttendanceRecord.
     * @example
     * // Update one AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceRecordUpdateArgs>(args: SelectSubset<T, AttendanceRecordUpdateArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceRecords.
     * @param {AttendanceRecordDeleteManyArgs} args - Arguments to filter AttendanceRecords to delete.
     * @example
     * // Delete a few AttendanceRecords
     * const { count } = await prisma.attendanceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceRecordDeleteManyArgs>(args?: SelectSubset<T, AttendanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceRecordUpdateManyArgs>(args: SelectSubset<T, AttendanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceRecords and returns the data updated in the database.
     * @param {AttendanceRecordUpdateManyAndReturnArgs} args - Arguments to update many AttendanceRecords.
     * @example
     * // Update many AttendanceRecords
     * const attendanceRecord = await prisma.attendanceRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceRecords and only return the `id`
     * const attendanceRecordWithIdOnly = await prisma.attendanceRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttendanceRecord.
     * @param {AttendanceRecordUpsertArgs} args - Arguments to update or create a AttendanceRecord.
     * @example
     * // Update or create a AttendanceRecord
     * const attendanceRecord = await prisma.attendanceRecord.upsert({
     *   create: {
     *     // ... data to create a AttendanceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceRecord we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceRecordUpsertArgs>(args: SelectSubset<T, AttendanceRecordUpsertArgs<ExtArgs>>): Prisma__AttendanceRecordClient<$Result.GetResult<Prisma.$AttendanceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordCountArgs} args - Arguments to filter AttendanceRecords to count.
     * @example
     * // Count the number of AttendanceRecords
     * const count = await prisma.attendanceRecord.count({
     *   where: {
     *     // ... the filter for the AttendanceRecords we want to count
     *   }
     * })
    **/
    count<T extends AttendanceRecordCountArgs>(
      args?: Subset<T, AttendanceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceRecordAggregateArgs>(args: Subset<T, AttendanceRecordAggregateArgs>): Prisma.PrismaPromise<GetAttendanceRecordAggregateType<T>>

    /**
     * Group by AttendanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceRecordGroupByArgs} args - Group by arguments.
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
      T extends AttendanceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceRecordGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceRecord model
   */
  readonly fields: AttendanceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    term<T extends AcademicTermDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AcademicTermDefaultArgs<ExtArgs>>): Prisma__AcademicTermClient<$Result.GetResult<Prisma.$AcademicTermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AttendanceRecord model
   */
  interface AttendanceRecordFieldRefs {
    readonly id: FieldRef<"AttendanceRecord", 'Int'>
    readonly studentId: FieldRef<"AttendanceRecord", 'Int'>
    readonly termId: FieldRef<"AttendanceRecord", 'Int'>
    readonly date: FieldRef<"AttendanceRecord", 'DateTime'>
    readonly status: FieldRef<"AttendanceRecord", 'AttendanceStatus'>
    readonly note: FieldRef<"AttendanceRecord", 'String'>
    readonly markedByStaffId: FieldRef<"AttendanceRecord", 'Int'>
    readonly createdAt: FieldRef<"AttendanceRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"AttendanceRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceRecord findUnique
   */
  export type AttendanceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findUniqueOrThrow
   */
  export type AttendanceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord findFirst
   */
  export type AttendanceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findFirstOrThrow
   */
  export type AttendanceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecord to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord findMany
   */
  export type AttendanceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceRecords to fetch.
     */
    where?: AttendanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceRecords to fetch.
     */
    orderBy?: AttendanceRecordOrderByWithRelationInput | AttendanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceRecords.
     */
    cursor?: AttendanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceRecords.
     */
    distinct?: AttendanceRecordScalarFieldEnum | AttendanceRecordScalarFieldEnum[]
  }

  /**
   * AttendanceRecord create
   */
  export type AttendanceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceRecord.
     */
    data: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
  }

  /**
   * AttendanceRecord createMany
   */
  export type AttendanceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceRecords.
     */
    data: AttendanceRecordCreateManyInput | AttendanceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceRecord createManyAndReturn
   */
  export type AttendanceRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceRecords.
     */
    data: AttendanceRecordCreateManyInput | AttendanceRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceRecord update
   */
  export type AttendanceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceRecord.
     */
    data: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
    /**
     * Choose, which AttendanceRecord to update.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord updateMany
   */
  export type AttendanceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceRecords.
     */
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRecords to update
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to update.
     */
    limit?: number
  }

  /**
   * AttendanceRecord updateManyAndReturn
   */
  export type AttendanceRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceRecords.
     */
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceRecords to update
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceRecord upsert
   */
  export type AttendanceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceRecord to update in case it exists.
     */
    where: AttendanceRecordWhereUniqueInput
    /**
     * In case the AttendanceRecord found by the `where` argument doesn't exist, create a new AttendanceRecord with this data.
     */
    create: XOR<AttendanceRecordCreateInput, AttendanceRecordUncheckedCreateInput>
    /**
     * In case the AttendanceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceRecordUpdateInput, AttendanceRecordUncheckedUpdateInput>
  }

  /**
   * AttendanceRecord delete
   */
  export type AttendanceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
    /**
     * Filter which AttendanceRecord to delete.
     */
    where: AttendanceRecordWhereUniqueInput
  }

  /**
   * AttendanceRecord deleteMany
   */
  export type AttendanceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceRecords to delete
     */
    where?: AttendanceRecordWhereInput
    /**
     * Limit how many AttendanceRecords to delete.
     */
    limit?: number
  }

  /**
   * AttendanceRecord without action
   */
  export type AttendanceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceRecord
     */
    select?: AttendanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceRecord
     */
    omit?: AttendanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceRecordInclude<ExtArgs> | null
  }


  /**
   * Model ParentNotification
   */

  export type AggregateParentNotification = {
    _count: ParentNotificationCountAggregateOutputType | null
    _avg: ParentNotificationAvgAggregateOutputType | null
    _sum: ParentNotificationSumAggregateOutputType | null
    _min: ParentNotificationMinAggregateOutputType | null
    _max: ParentNotificationMaxAggregateOutputType | null
  }

  export type ParentNotificationAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type ParentNotificationSumAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type ParentNotificationMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    channel: string | null
    phone: string | null
    message: string | null
    type: $Enums.ParentNotificationType | null
    status: $Enums.NotificationStatus | null
    sentAt: Date | null
    createdAt: Date | null
  }

  export type ParentNotificationMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    channel: string | null
    phone: string | null
    message: string | null
    type: $Enums.ParentNotificationType | null
    status: $Enums.NotificationStatus | null
    sentAt: Date | null
    createdAt: Date | null
  }

  export type ParentNotificationCountAggregateOutputType = {
    id: number
    studentId: number
    channel: number
    phone: number
    message: number
    type: number
    status: number
    sentAt: number
    createdAt: number
    _all: number
  }


  export type ParentNotificationAvgAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type ParentNotificationSumAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type ParentNotificationMinAggregateInputType = {
    id?: true
    studentId?: true
    channel?: true
    phone?: true
    message?: true
    type?: true
    status?: true
    sentAt?: true
    createdAt?: true
  }

  export type ParentNotificationMaxAggregateInputType = {
    id?: true
    studentId?: true
    channel?: true
    phone?: true
    message?: true
    type?: true
    status?: true
    sentAt?: true
    createdAt?: true
  }

  export type ParentNotificationCountAggregateInputType = {
    id?: true
    studentId?: true
    channel?: true
    phone?: true
    message?: true
    type?: true
    status?: true
    sentAt?: true
    createdAt?: true
    _all?: true
  }

  export type ParentNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentNotification to aggregate.
     */
    where?: ParentNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentNotifications to fetch.
     */
    orderBy?: ParentNotificationOrderByWithRelationInput | ParentNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParentNotifications
    **/
    _count?: true | ParentNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParentNotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParentNotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentNotificationMaxAggregateInputType
  }

  export type GetParentNotificationAggregateType<T extends ParentNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateParentNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParentNotification[P]>
      : GetScalarType<T[P], AggregateParentNotification[P]>
  }




  export type ParentNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentNotificationWhereInput
    orderBy?: ParentNotificationOrderByWithAggregationInput | ParentNotificationOrderByWithAggregationInput[]
    by: ParentNotificationScalarFieldEnum[] | ParentNotificationScalarFieldEnum
    having?: ParentNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentNotificationCountAggregateInputType | true
    _avg?: ParentNotificationAvgAggregateInputType
    _sum?: ParentNotificationSumAggregateInputType
    _min?: ParentNotificationMinAggregateInputType
    _max?: ParentNotificationMaxAggregateInputType
  }

  export type ParentNotificationGroupByOutputType = {
    id: number
    studentId: number
    channel: string
    phone: string
    message: string
    type: $Enums.ParentNotificationType
    status: $Enums.NotificationStatus
    sentAt: Date
    createdAt: Date
    _count: ParentNotificationCountAggregateOutputType | null
    _avg: ParentNotificationAvgAggregateOutputType | null
    _sum: ParentNotificationSumAggregateOutputType | null
    _min: ParentNotificationMinAggregateOutputType | null
    _max: ParentNotificationMaxAggregateOutputType | null
  }

  type GetParentNotificationGroupByPayload<T extends ParentNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], ParentNotificationGroupByOutputType[P]>
        }
      >
    >


  export type ParentNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    channel?: boolean
    phone?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    sentAt?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentNotification"]>

  export type ParentNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    channel?: boolean
    phone?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    sentAt?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentNotification"]>

  export type ParentNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    channel?: boolean
    phone?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    sentAt?: boolean
    createdAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parentNotification"]>

  export type ParentNotificationSelectScalar = {
    id?: boolean
    studentId?: boolean
    channel?: boolean
    phone?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    sentAt?: boolean
    createdAt?: boolean
  }

  export type ParentNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "channel" | "phone" | "message" | "type" | "status" | "sentAt" | "createdAt", ExtArgs["result"]["parentNotification"]>
  export type ParentNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type ParentNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type ParentNotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $ParentNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParentNotification"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      channel: string
      phone: string
      message: string
      type: $Enums.ParentNotificationType
      status: $Enums.NotificationStatus
      sentAt: Date
      createdAt: Date
    }, ExtArgs["result"]["parentNotification"]>
    composites: {}
  }

  type ParentNotificationGetPayload<S extends boolean | null | undefined | ParentNotificationDefaultArgs> = $Result.GetResult<Prisma.$ParentNotificationPayload, S>

  type ParentNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentNotificationCountAggregateInputType | true
    }

  export interface ParentNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParentNotification'], meta: { name: 'ParentNotification' } }
    /**
     * Find zero or one ParentNotification that matches the filter.
     * @param {ParentNotificationFindUniqueArgs} args - Arguments to find a ParentNotification
     * @example
     * // Get one ParentNotification
     * const parentNotification = await prisma.parentNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentNotificationFindUniqueArgs>(args: SelectSubset<T, ParentNotificationFindUniqueArgs<ExtArgs>>): Prisma__ParentNotificationClient<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParentNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentNotificationFindUniqueOrThrowArgs} args - Arguments to find a ParentNotification
     * @example
     * // Get one ParentNotification
     * const parentNotification = await prisma.parentNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentNotificationClient<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParentNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentNotificationFindFirstArgs} args - Arguments to find a ParentNotification
     * @example
     * // Get one ParentNotification
     * const parentNotification = await prisma.parentNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentNotificationFindFirstArgs>(args?: SelectSubset<T, ParentNotificationFindFirstArgs<ExtArgs>>): Prisma__ParentNotificationClient<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParentNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentNotificationFindFirstOrThrowArgs} args - Arguments to find a ParentNotification
     * @example
     * // Get one ParentNotification
     * const parentNotification = await prisma.parentNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentNotificationClient<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParentNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParentNotifications
     * const parentNotifications = await prisma.parentNotification.findMany()
     * 
     * // Get first 10 ParentNotifications
     * const parentNotifications = await prisma.parentNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentNotificationWithIdOnly = await prisma.parentNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentNotificationFindManyArgs>(args?: SelectSubset<T, ParentNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParentNotification.
     * @param {ParentNotificationCreateArgs} args - Arguments to create a ParentNotification.
     * @example
     * // Create one ParentNotification
     * const ParentNotification = await prisma.parentNotification.create({
     *   data: {
     *     // ... data to create a ParentNotification
     *   }
     * })
     * 
     */
    create<T extends ParentNotificationCreateArgs>(args: SelectSubset<T, ParentNotificationCreateArgs<ExtArgs>>): Prisma__ParentNotificationClient<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParentNotifications.
     * @param {ParentNotificationCreateManyArgs} args - Arguments to create many ParentNotifications.
     * @example
     * // Create many ParentNotifications
     * const parentNotification = await prisma.parentNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentNotificationCreateManyArgs>(args?: SelectSubset<T, ParentNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParentNotifications and returns the data saved in the database.
     * @param {ParentNotificationCreateManyAndReturnArgs} args - Arguments to create many ParentNotifications.
     * @example
     * // Create many ParentNotifications
     * const parentNotification = await prisma.parentNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParentNotifications and only return the `id`
     * const parentNotificationWithIdOnly = await prisma.parentNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParentNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, ParentNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParentNotification.
     * @param {ParentNotificationDeleteArgs} args - Arguments to delete one ParentNotification.
     * @example
     * // Delete one ParentNotification
     * const ParentNotification = await prisma.parentNotification.delete({
     *   where: {
     *     // ... filter to delete one ParentNotification
     *   }
     * })
     * 
     */
    delete<T extends ParentNotificationDeleteArgs>(args: SelectSubset<T, ParentNotificationDeleteArgs<ExtArgs>>): Prisma__ParentNotificationClient<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParentNotification.
     * @param {ParentNotificationUpdateArgs} args - Arguments to update one ParentNotification.
     * @example
     * // Update one ParentNotification
     * const parentNotification = await prisma.parentNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentNotificationUpdateArgs>(args: SelectSubset<T, ParentNotificationUpdateArgs<ExtArgs>>): Prisma__ParentNotificationClient<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParentNotifications.
     * @param {ParentNotificationDeleteManyArgs} args - Arguments to filter ParentNotifications to delete.
     * @example
     * // Delete a few ParentNotifications
     * const { count } = await prisma.parentNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentNotificationDeleteManyArgs>(args?: SelectSubset<T, ParentNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParentNotifications
     * const parentNotification = await prisma.parentNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentNotificationUpdateManyArgs>(args: SelectSubset<T, ParentNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParentNotifications and returns the data updated in the database.
     * @param {ParentNotificationUpdateManyAndReturnArgs} args - Arguments to update many ParentNotifications.
     * @example
     * // Update many ParentNotifications
     * const parentNotification = await prisma.parentNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParentNotifications and only return the `id`
     * const parentNotificationWithIdOnly = await prisma.parentNotification.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParentNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, ParentNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParentNotification.
     * @param {ParentNotificationUpsertArgs} args - Arguments to update or create a ParentNotification.
     * @example
     * // Update or create a ParentNotification
     * const parentNotification = await prisma.parentNotification.upsert({
     *   create: {
     *     // ... data to create a ParentNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParentNotification we want to update
     *   }
     * })
     */
    upsert<T extends ParentNotificationUpsertArgs>(args: SelectSubset<T, ParentNotificationUpsertArgs<ExtArgs>>): Prisma__ParentNotificationClient<$Result.GetResult<Prisma.$ParentNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParentNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentNotificationCountArgs} args - Arguments to filter ParentNotifications to count.
     * @example
     * // Count the number of ParentNotifications
     * const count = await prisma.parentNotification.count({
     *   where: {
     *     // ... the filter for the ParentNotifications we want to count
     *   }
     * })
    **/
    count<T extends ParentNotificationCountArgs>(
      args?: Subset<T, ParentNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParentNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParentNotificationAggregateArgs>(args: Subset<T, ParentNotificationAggregateArgs>): Prisma.PrismaPromise<GetParentNotificationAggregateType<T>>

    /**
     * Group by ParentNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentNotificationGroupByArgs} args - Group by arguments.
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
      T extends ParentNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentNotificationGroupByArgs['orderBy'] }
        : { orderBy?: ParentNotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParentNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParentNotification model
   */
  readonly fields: ParentNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParentNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParentNotification model
   */
  interface ParentNotificationFieldRefs {
    readonly id: FieldRef<"ParentNotification", 'Int'>
    readonly studentId: FieldRef<"ParentNotification", 'Int'>
    readonly channel: FieldRef<"ParentNotification", 'String'>
    readonly phone: FieldRef<"ParentNotification", 'String'>
    readonly message: FieldRef<"ParentNotification", 'String'>
    readonly type: FieldRef<"ParentNotification", 'ParentNotificationType'>
    readonly status: FieldRef<"ParentNotification", 'NotificationStatus'>
    readonly sentAt: FieldRef<"ParentNotification", 'DateTime'>
    readonly createdAt: FieldRef<"ParentNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParentNotification findUnique
   */
  export type ParentNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationInclude<ExtArgs> | null
    /**
     * Filter, which ParentNotification to fetch.
     */
    where: ParentNotificationWhereUniqueInput
  }

  /**
   * ParentNotification findUniqueOrThrow
   */
  export type ParentNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationInclude<ExtArgs> | null
    /**
     * Filter, which ParentNotification to fetch.
     */
    where: ParentNotificationWhereUniqueInput
  }

  /**
   * ParentNotification findFirst
   */
  export type ParentNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationInclude<ExtArgs> | null
    /**
     * Filter, which ParentNotification to fetch.
     */
    where?: ParentNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentNotifications to fetch.
     */
    orderBy?: ParentNotificationOrderByWithRelationInput | ParentNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentNotifications.
     */
    cursor?: ParentNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentNotifications.
     */
    distinct?: ParentNotificationScalarFieldEnum | ParentNotificationScalarFieldEnum[]
  }

  /**
   * ParentNotification findFirstOrThrow
   */
  export type ParentNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationInclude<ExtArgs> | null
    /**
     * Filter, which ParentNotification to fetch.
     */
    where?: ParentNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentNotifications to fetch.
     */
    orderBy?: ParentNotificationOrderByWithRelationInput | ParentNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParentNotifications.
     */
    cursor?: ParentNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentNotifications.
     */
    distinct?: ParentNotificationScalarFieldEnum | ParentNotificationScalarFieldEnum[]
  }

  /**
   * ParentNotification findMany
   */
  export type ParentNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationInclude<ExtArgs> | null
    /**
     * Filter, which ParentNotifications to fetch.
     */
    where?: ParentNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParentNotifications to fetch.
     */
    orderBy?: ParentNotificationOrderByWithRelationInput | ParentNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParentNotifications.
     */
    cursor?: ParentNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParentNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParentNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParentNotifications.
     */
    distinct?: ParentNotificationScalarFieldEnum | ParentNotificationScalarFieldEnum[]
  }

  /**
   * ParentNotification create
   */
  export type ParentNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a ParentNotification.
     */
    data: XOR<ParentNotificationCreateInput, ParentNotificationUncheckedCreateInput>
  }

  /**
   * ParentNotification createMany
   */
  export type ParentNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParentNotifications.
     */
    data: ParentNotificationCreateManyInput | ParentNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParentNotification createManyAndReturn
   */
  export type ParentNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many ParentNotifications.
     */
    data: ParentNotificationCreateManyInput | ParentNotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParentNotification update
   */
  export type ParentNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a ParentNotification.
     */
    data: XOR<ParentNotificationUpdateInput, ParentNotificationUncheckedUpdateInput>
    /**
     * Choose, which ParentNotification to update.
     */
    where: ParentNotificationWhereUniqueInput
  }

  /**
   * ParentNotification updateMany
   */
  export type ParentNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParentNotifications.
     */
    data: XOR<ParentNotificationUpdateManyMutationInput, ParentNotificationUncheckedUpdateManyInput>
    /**
     * Filter which ParentNotifications to update
     */
    where?: ParentNotificationWhereInput
    /**
     * Limit how many ParentNotifications to update.
     */
    limit?: number
  }

  /**
   * ParentNotification updateManyAndReturn
   */
  export type ParentNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * The data used to update ParentNotifications.
     */
    data: XOR<ParentNotificationUpdateManyMutationInput, ParentNotificationUncheckedUpdateManyInput>
    /**
     * Filter which ParentNotifications to update
     */
    where?: ParentNotificationWhereInput
    /**
     * Limit how many ParentNotifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParentNotification upsert
   */
  export type ParentNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the ParentNotification to update in case it exists.
     */
    where: ParentNotificationWhereUniqueInput
    /**
     * In case the ParentNotification found by the `where` argument doesn't exist, create a new ParentNotification with this data.
     */
    create: XOR<ParentNotificationCreateInput, ParentNotificationUncheckedCreateInput>
    /**
     * In case the ParentNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentNotificationUpdateInput, ParentNotificationUncheckedUpdateInput>
  }

  /**
   * ParentNotification delete
   */
  export type ParentNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationInclude<ExtArgs> | null
    /**
     * Filter which ParentNotification to delete.
     */
    where: ParentNotificationWhereUniqueInput
  }

  /**
   * ParentNotification deleteMany
   */
  export type ParentNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParentNotifications to delete
     */
    where?: ParentNotificationWhereInput
    /**
     * Limit how many ParentNotifications to delete.
     */
    limit?: number
  }

  /**
   * ParentNotification without action
   */
  export type ParentNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentNotification
     */
    select?: ParentNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParentNotification
     */
    omit?: ParentNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentNotificationInclude<ExtArgs> | null
  }


  /**
   * Model PhoneBorrow
   */

  export type AggregatePhoneBorrow = {
    _count: PhoneBorrowCountAggregateOutputType | null
    _avg: PhoneBorrowAvgAggregateOutputType | null
    _sum: PhoneBorrowSumAggregateOutputType | null
    _min: PhoneBorrowMinAggregateOutputType | null
    _max: PhoneBorrowMaxAggregateOutputType | null
  }

  export type PhoneBorrowAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type PhoneBorrowSumAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type PhoneBorrowMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    phoneModel: string | null
    borrowedAt: Date | null
    returnedAt: Date | null
    status: $Enums.PhoneBorrowStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneBorrowMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    phoneModel: string | null
    borrowedAt: Date | null
    returnedAt: Date | null
    status: $Enums.PhoneBorrowStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneBorrowCountAggregateOutputType = {
    id: number
    studentId: number
    phoneModel: number
    borrowedAt: number
    returnedAt: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhoneBorrowAvgAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type PhoneBorrowSumAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type PhoneBorrowMinAggregateInputType = {
    id?: true
    studentId?: true
    phoneModel?: true
    borrowedAt?: true
    returnedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneBorrowMaxAggregateInputType = {
    id?: true
    studentId?: true
    phoneModel?: true
    borrowedAt?: true
    returnedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneBorrowCountAggregateInputType = {
    id?: true
    studentId?: true
    phoneModel?: true
    borrowedAt?: true
    returnedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhoneBorrowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneBorrow to aggregate.
     */
    where?: PhoneBorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneBorrows to fetch.
     */
    orderBy?: PhoneBorrowOrderByWithRelationInput | PhoneBorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneBorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneBorrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneBorrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneBorrows
    **/
    _count?: true | PhoneBorrowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhoneBorrowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhoneBorrowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneBorrowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneBorrowMaxAggregateInputType
  }

  export type GetPhoneBorrowAggregateType<T extends PhoneBorrowAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneBorrow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneBorrow[P]>
      : GetScalarType<T[P], AggregatePhoneBorrow[P]>
  }




  export type PhoneBorrowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneBorrowWhereInput
    orderBy?: PhoneBorrowOrderByWithAggregationInput | PhoneBorrowOrderByWithAggregationInput[]
    by: PhoneBorrowScalarFieldEnum[] | PhoneBorrowScalarFieldEnum
    having?: PhoneBorrowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneBorrowCountAggregateInputType | true
    _avg?: PhoneBorrowAvgAggregateInputType
    _sum?: PhoneBorrowSumAggregateInputType
    _min?: PhoneBorrowMinAggregateInputType
    _max?: PhoneBorrowMaxAggregateInputType
  }

  export type PhoneBorrowGroupByOutputType = {
    id: number
    studentId: number
    phoneModel: string
    borrowedAt: Date
    returnedAt: Date | null
    status: $Enums.PhoneBorrowStatus
    createdAt: Date
    updatedAt: Date
    _count: PhoneBorrowCountAggregateOutputType | null
    _avg: PhoneBorrowAvgAggregateOutputType | null
    _sum: PhoneBorrowSumAggregateOutputType | null
    _min: PhoneBorrowMinAggregateOutputType | null
    _max: PhoneBorrowMaxAggregateOutputType | null
  }

  type GetPhoneBorrowGroupByPayload<T extends PhoneBorrowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneBorrowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneBorrowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneBorrowGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneBorrowGroupByOutputType[P]>
        }
      >
    >


  export type PhoneBorrowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    phoneModel?: boolean
    borrowedAt?: boolean
    returnedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneBorrow"]>

  export type PhoneBorrowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    phoneModel?: boolean
    borrowedAt?: boolean
    returnedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneBorrow"]>

  export type PhoneBorrowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    phoneModel?: boolean
    borrowedAt?: boolean
    returnedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneBorrow"]>

  export type PhoneBorrowSelectScalar = {
    id?: boolean
    studentId?: boolean
    phoneModel?: boolean
    borrowedAt?: boolean
    returnedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhoneBorrowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "phoneModel" | "borrowedAt" | "returnedAt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["phoneBorrow"]>
  export type PhoneBorrowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type PhoneBorrowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type PhoneBorrowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $PhoneBorrowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneBorrow"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      phoneModel: string
      borrowedAt: Date
      returnedAt: Date | null
      status: $Enums.PhoneBorrowStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["phoneBorrow"]>
    composites: {}
  }

  type PhoneBorrowGetPayload<S extends boolean | null | undefined | PhoneBorrowDefaultArgs> = $Result.GetResult<Prisma.$PhoneBorrowPayload, S>

  type PhoneBorrowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhoneBorrowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhoneBorrowCountAggregateInputType | true
    }

  export interface PhoneBorrowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneBorrow'], meta: { name: 'PhoneBorrow' } }
    /**
     * Find zero or one PhoneBorrow that matches the filter.
     * @param {PhoneBorrowFindUniqueArgs} args - Arguments to find a PhoneBorrow
     * @example
     * // Get one PhoneBorrow
     * const phoneBorrow = await prisma.phoneBorrow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneBorrowFindUniqueArgs>(args: SelectSubset<T, PhoneBorrowFindUniqueArgs<ExtArgs>>): Prisma__PhoneBorrowClient<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhoneBorrow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhoneBorrowFindUniqueOrThrowArgs} args - Arguments to find a PhoneBorrow
     * @example
     * // Get one PhoneBorrow
     * const phoneBorrow = await prisma.phoneBorrow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneBorrowFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneBorrowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneBorrowClient<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneBorrow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBorrowFindFirstArgs} args - Arguments to find a PhoneBorrow
     * @example
     * // Get one PhoneBorrow
     * const phoneBorrow = await prisma.phoneBorrow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneBorrowFindFirstArgs>(args?: SelectSubset<T, PhoneBorrowFindFirstArgs<ExtArgs>>): Prisma__PhoneBorrowClient<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneBorrow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBorrowFindFirstOrThrowArgs} args - Arguments to find a PhoneBorrow
     * @example
     * // Get one PhoneBorrow
     * const phoneBorrow = await prisma.phoneBorrow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneBorrowFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneBorrowFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneBorrowClient<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhoneBorrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBorrowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneBorrows
     * const phoneBorrows = await prisma.phoneBorrow.findMany()
     * 
     * // Get first 10 PhoneBorrows
     * const phoneBorrows = await prisma.phoneBorrow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneBorrowWithIdOnly = await prisma.phoneBorrow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneBorrowFindManyArgs>(args?: SelectSubset<T, PhoneBorrowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhoneBorrow.
     * @param {PhoneBorrowCreateArgs} args - Arguments to create a PhoneBorrow.
     * @example
     * // Create one PhoneBorrow
     * const PhoneBorrow = await prisma.phoneBorrow.create({
     *   data: {
     *     // ... data to create a PhoneBorrow
     *   }
     * })
     * 
     */
    create<T extends PhoneBorrowCreateArgs>(args: SelectSubset<T, PhoneBorrowCreateArgs<ExtArgs>>): Prisma__PhoneBorrowClient<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhoneBorrows.
     * @param {PhoneBorrowCreateManyArgs} args - Arguments to create many PhoneBorrows.
     * @example
     * // Create many PhoneBorrows
     * const phoneBorrow = await prisma.phoneBorrow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneBorrowCreateManyArgs>(args?: SelectSubset<T, PhoneBorrowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneBorrows and returns the data saved in the database.
     * @param {PhoneBorrowCreateManyAndReturnArgs} args - Arguments to create many PhoneBorrows.
     * @example
     * // Create many PhoneBorrows
     * const phoneBorrow = await prisma.phoneBorrow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneBorrows and only return the `id`
     * const phoneBorrowWithIdOnly = await prisma.phoneBorrow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneBorrowCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneBorrowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhoneBorrow.
     * @param {PhoneBorrowDeleteArgs} args - Arguments to delete one PhoneBorrow.
     * @example
     * // Delete one PhoneBorrow
     * const PhoneBorrow = await prisma.phoneBorrow.delete({
     *   where: {
     *     // ... filter to delete one PhoneBorrow
     *   }
     * })
     * 
     */
    delete<T extends PhoneBorrowDeleteArgs>(args: SelectSubset<T, PhoneBorrowDeleteArgs<ExtArgs>>): Prisma__PhoneBorrowClient<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhoneBorrow.
     * @param {PhoneBorrowUpdateArgs} args - Arguments to update one PhoneBorrow.
     * @example
     * // Update one PhoneBorrow
     * const phoneBorrow = await prisma.phoneBorrow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneBorrowUpdateArgs>(args: SelectSubset<T, PhoneBorrowUpdateArgs<ExtArgs>>): Prisma__PhoneBorrowClient<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhoneBorrows.
     * @param {PhoneBorrowDeleteManyArgs} args - Arguments to filter PhoneBorrows to delete.
     * @example
     * // Delete a few PhoneBorrows
     * const { count } = await prisma.phoneBorrow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneBorrowDeleteManyArgs>(args?: SelectSubset<T, PhoneBorrowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneBorrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBorrowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneBorrows
     * const phoneBorrow = await prisma.phoneBorrow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneBorrowUpdateManyArgs>(args: SelectSubset<T, PhoneBorrowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneBorrows and returns the data updated in the database.
     * @param {PhoneBorrowUpdateManyAndReturnArgs} args - Arguments to update many PhoneBorrows.
     * @example
     * // Update many PhoneBorrows
     * const phoneBorrow = await prisma.phoneBorrow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhoneBorrows and only return the `id`
     * const phoneBorrowWithIdOnly = await prisma.phoneBorrow.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhoneBorrowUpdateManyAndReturnArgs>(args: SelectSubset<T, PhoneBorrowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhoneBorrow.
     * @param {PhoneBorrowUpsertArgs} args - Arguments to update or create a PhoneBorrow.
     * @example
     * // Update or create a PhoneBorrow
     * const phoneBorrow = await prisma.phoneBorrow.upsert({
     *   create: {
     *     // ... data to create a PhoneBorrow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneBorrow we want to update
     *   }
     * })
     */
    upsert<T extends PhoneBorrowUpsertArgs>(args: SelectSubset<T, PhoneBorrowUpsertArgs<ExtArgs>>): Prisma__PhoneBorrowClient<$Result.GetResult<Prisma.$PhoneBorrowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhoneBorrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBorrowCountArgs} args - Arguments to filter PhoneBorrows to count.
     * @example
     * // Count the number of PhoneBorrows
     * const count = await prisma.phoneBorrow.count({
     *   where: {
     *     // ... the filter for the PhoneBorrows we want to count
     *   }
     * })
    **/
    count<T extends PhoneBorrowCountArgs>(
      args?: Subset<T, PhoneBorrowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneBorrowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneBorrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBorrowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhoneBorrowAggregateArgs>(args: Subset<T, PhoneBorrowAggregateArgs>): Prisma.PrismaPromise<GetPhoneBorrowAggregateType<T>>

    /**
     * Group by PhoneBorrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBorrowGroupByArgs} args - Group by arguments.
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
      T extends PhoneBorrowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneBorrowGroupByArgs['orderBy'] }
        : { orderBy?: PhoneBorrowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhoneBorrowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneBorrowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneBorrow model
   */
  readonly fields: PhoneBorrowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneBorrow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneBorrowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PhoneBorrow model
   */
  interface PhoneBorrowFieldRefs {
    readonly id: FieldRef<"PhoneBorrow", 'Int'>
    readonly studentId: FieldRef<"PhoneBorrow", 'Int'>
    readonly phoneModel: FieldRef<"PhoneBorrow", 'String'>
    readonly borrowedAt: FieldRef<"PhoneBorrow", 'DateTime'>
    readonly returnedAt: FieldRef<"PhoneBorrow", 'DateTime'>
    readonly status: FieldRef<"PhoneBorrow", 'PhoneBorrowStatus'>
    readonly createdAt: FieldRef<"PhoneBorrow", 'DateTime'>
    readonly updatedAt: FieldRef<"PhoneBorrow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhoneBorrow findUnique
   */
  export type PhoneBorrowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowInclude<ExtArgs> | null
    /**
     * Filter, which PhoneBorrow to fetch.
     */
    where: PhoneBorrowWhereUniqueInput
  }

  /**
   * PhoneBorrow findUniqueOrThrow
   */
  export type PhoneBorrowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowInclude<ExtArgs> | null
    /**
     * Filter, which PhoneBorrow to fetch.
     */
    where: PhoneBorrowWhereUniqueInput
  }

  /**
   * PhoneBorrow findFirst
   */
  export type PhoneBorrowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowInclude<ExtArgs> | null
    /**
     * Filter, which PhoneBorrow to fetch.
     */
    where?: PhoneBorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneBorrows to fetch.
     */
    orderBy?: PhoneBorrowOrderByWithRelationInput | PhoneBorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneBorrows.
     */
    cursor?: PhoneBorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneBorrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneBorrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneBorrows.
     */
    distinct?: PhoneBorrowScalarFieldEnum | PhoneBorrowScalarFieldEnum[]
  }

  /**
   * PhoneBorrow findFirstOrThrow
   */
  export type PhoneBorrowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowInclude<ExtArgs> | null
    /**
     * Filter, which PhoneBorrow to fetch.
     */
    where?: PhoneBorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneBorrows to fetch.
     */
    orderBy?: PhoneBorrowOrderByWithRelationInput | PhoneBorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneBorrows.
     */
    cursor?: PhoneBorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneBorrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneBorrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneBorrows.
     */
    distinct?: PhoneBorrowScalarFieldEnum | PhoneBorrowScalarFieldEnum[]
  }

  /**
   * PhoneBorrow findMany
   */
  export type PhoneBorrowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowInclude<ExtArgs> | null
    /**
     * Filter, which PhoneBorrows to fetch.
     */
    where?: PhoneBorrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneBorrows to fetch.
     */
    orderBy?: PhoneBorrowOrderByWithRelationInput | PhoneBorrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneBorrows.
     */
    cursor?: PhoneBorrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneBorrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneBorrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneBorrows.
     */
    distinct?: PhoneBorrowScalarFieldEnum | PhoneBorrowScalarFieldEnum[]
  }

  /**
   * PhoneBorrow create
   */
  export type PhoneBorrowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowInclude<ExtArgs> | null
    /**
     * The data needed to create a PhoneBorrow.
     */
    data: XOR<PhoneBorrowCreateInput, PhoneBorrowUncheckedCreateInput>
  }

  /**
   * PhoneBorrow createMany
   */
  export type PhoneBorrowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneBorrows.
     */
    data: PhoneBorrowCreateManyInput | PhoneBorrowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneBorrow createManyAndReturn
   */
  export type PhoneBorrowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * The data used to create many PhoneBorrows.
     */
    data: PhoneBorrowCreateManyInput | PhoneBorrowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhoneBorrow update
   */
  export type PhoneBorrowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowInclude<ExtArgs> | null
    /**
     * The data needed to update a PhoneBorrow.
     */
    data: XOR<PhoneBorrowUpdateInput, PhoneBorrowUncheckedUpdateInput>
    /**
     * Choose, which PhoneBorrow to update.
     */
    where: PhoneBorrowWhereUniqueInput
  }

  /**
   * PhoneBorrow updateMany
   */
  export type PhoneBorrowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneBorrows.
     */
    data: XOR<PhoneBorrowUpdateManyMutationInput, PhoneBorrowUncheckedUpdateManyInput>
    /**
     * Filter which PhoneBorrows to update
     */
    where?: PhoneBorrowWhereInput
    /**
     * Limit how many PhoneBorrows to update.
     */
    limit?: number
  }

  /**
   * PhoneBorrow updateManyAndReturn
   */
  export type PhoneBorrowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * The data used to update PhoneBorrows.
     */
    data: XOR<PhoneBorrowUpdateManyMutationInput, PhoneBorrowUncheckedUpdateManyInput>
    /**
     * Filter which PhoneBorrows to update
     */
    where?: PhoneBorrowWhereInput
    /**
     * Limit how many PhoneBorrows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhoneBorrow upsert
   */
  export type PhoneBorrowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowInclude<ExtArgs> | null
    /**
     * The filter to search for the PhoneBorrow to update in case it exists.
     */
    where: PhoneBorrowWhereUniqueInput
    /**
     * In case the PhoneBorrow found by the `where` argument doesn't exist, create a new PhoneBorrow with this data.
     */
    create: XOR<PhoneBorrowCreateInput, PhoneBorrowUncheckedCreateInput>
    /**
     * In case the PhoneBorrow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneBorrowUpdateInput, PhoneBorrowUncheckedUpdateInput>
  }

  /**
   * PhoneBorrow delete
   */
  export type PhoneBorrowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowInclude<ExtArgs> | null
    /**
     * Filter which PhoneBorrow to delete.
     */
    where: PhoneBorrowWhereUniqueInput
  }

  /**
   * PhoneBorrow deleteMany
   */
  export type PhoneBorrowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneBorrows to delete
     */
    where?: PhoneBorrowWhereInput
    /**
     * Limit how many PhoneBorrows to delete.
     */
    limit?: number
  }

  /**
   * PhoneBorrow without action
   */
  export type PhoneBorrowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBorrow
     */
    select?: PhoneBorrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneBorrow
     */
    omit?: PhoneBorrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBorrowInclude<ExtArgs> | null
  }


  /**
   * Model TermSession
   */

  export type AggregateTermSession = {
    _count: TermSessionCountAggregateOutputType | null
    _avg: TermSessionAvgAggregateOutputType | null
    _sum: TermSessionSumAggregateOutputType | null
    _min: TermSessionMinAggregateOutputType | null
    _max: TermSessionMaxAggregateOutputType | null
  }

  export type TermSessionAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type TermSessionSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type TermSessionMinAggregateOutputType = {
    id: number | null
    name: string | null
    year: number | null
    startDate: Date | null
    endDate: Date | null
    openingDate: Date | null
    isActive: boolean | null
    status: $Enums.TermStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermSessionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    year: number | null
    startDate: Date | null
    endDate: Date | null
    openingDate: Date | null
    isActive: boolean | null
    status: $Enums.TermStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermSessionCountAggregateOutputType = {
    id: number
    name: number
    year: number
    startDate: number
    endDate: number
    openingDate: number
    isActive: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TermSessionAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type TermSessionSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type TermSessionMinAggregateInputType = {
    id?: true
    name?: true
    year?: true
    startDate?: true
    endDate?: true
    openingDate?: true
    isActive?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermSessionMaxAggregateInputType = {
    id?: true
    name?: true
    year?: true
    startDate?: true
    endDate?: true
    openingDate?: true
    isActive?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermSessionCountAggregateInputType = {
    id?: true
    name?: true
    year?: true
    startDate?: true
    endDate?: true
    openingDate?: true
    isActive?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TermSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermSession to aggregate.
     */
    where?: TermSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermSessions to fetch.
     */
    orderBy?: TermSessionOrderByWithRelationInput | TermSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TermSessions
    **/
    _count?: true | TermSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TermSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TermSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermSessionMaxAggregateInputType
  }

  export type GetTermSessionAggregateType<T extends TermSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTermSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTermSession[P]>
      : GetScalarType<T[P], AggregateTermSession[P]>
  }




  export type TermSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermSessionWhereInput
    orderBy?: TermSessionOrderByWithAggregationInput | TermSessionOrderByWithAggregationInput[]
    by: TermSessionScalarFieldEnum[] | TermSessionScalarFieldEnum
    having?: TermSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermSessionCountAggregateInputType | true
    _avg?: TermSessionAvgAggregateInputType
    _sum?: TermSessionSumAggregateInputType
    _min?: TermSessionMinAggregateInputType
    _max?: TermSessionMaxAggregateInputType
  }

  export type TermSessionGroupByOutputType = {
    id: number
    name: string
    year: number
    startDate: Date
    endDate: Date
    openingDate: Date
    isActive: boolean
    status: $Enums.TermStatus
    createdAt: Date
    updatedAt: Date
    _count: TermSessionCountAggregateOutputType | null
    _avg: TermSessionAvgAggregateOutputType | null
    _sum: TermSessionSumAggregateOutputType | null
    _min: TermSessionMinAggregateOutputType | null
    _max: TermSessionMaxAggregateOutputType | null
  }

  type GetTermSessionGroupByPayload<T extends TermSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TermSessionGroupByOutputType[P]>
        }
      >
    >


  export type TermSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    openingDate?: boolean
    isActive?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendances?: boolean | TermSession$attendancesArgs<ExtArgs>
    _count?: boolean | TermSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["termSession"]>

  export type TermSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    openingDate?: boolean
    isActive?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["termSession"]>

  export type TermSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    openingDate?: boolean
    isActive?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["termSession"]>

  export type TermSessionSelectScalar = {
    id?: boolean
    name?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    openingDate?: boolean
    isActive?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TermSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "year" | "startDate" | "endDate" | "openingDate" | "isActive" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["termSession"]>
  export type TermSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | TermSession$attendancesArgs<ExtArgs>
    _count?: boolean | TermSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TermSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TermSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TermSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TermSession"
    objects: {
      attendances: Prisma.$TermAttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      year: number
      startDate: Date
      endDate: Date
      openingDate: Date
      isActive: boolean
      status: $Enums.TermStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["termSession"]>
    composites: {}
  }

  type TermSessionGetPayload<S extends boolean | null | undefined | TermSessionDefaultArgs> = $Result.GetResult<Prisma.$TermSessionPayload, S>

  type TermSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TermSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TermSessionCountAggregateInputType | true
    }

  export interface TermSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TermSession'], meta: { name: 'TermSession' } }
    /**
     * Find zero or one TermSession that matches the filter.
     * @param {TermSessionFindUniqueArgs} args - Arguments to find a TermSession
     * @example
     * // Get one TermSession
     * const termSession = await prisma.termSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TermSessionFindUniqueArgs>(args: SelectSubset<T, TermSessionFindUniqueArgs<ExtArgs>>): Prisma__TermSessionClient<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TermSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TermSessionFindUniqueOrThrowArgs} args - Arguments to find a TermSession
     * @example
     * // Get one TermSession
     * const termSession = await prisma.termSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TermSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TermSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TermSessionClient<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermSessionFindFirstArgs} args - Arguments to find a TermSession
     * @example
     * // Get one TermSession
     * const termSession = await prisma.termSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TermSessionFindFirstArgs>(args?: SelectSubset<T, TermSessionFindFirstArgs<ExtArgs>>): Prisma__TermSessionClient<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermSessionFindFirstOrThrowArgs} args - Arguments to find a TermSession
     * @example
     * // Get one TermSession
     * const termSession = await prisma.termSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TermSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TermSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TermSessionClient<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TermSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TermSessions
     * const termSessions = await prisma.termSession.findMany()
     * 
     * // Get first 10 TermSessions
     * const termSessions = await prisma.termSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termSessionWithIdOnly = await prisma.termSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TermSessionFindManyArgs>(args?: SelectSubset<T, TermSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TermSession.
     * @param {TermSessionCreateArgs} args - Arguments to create a TermSession.
     * @example
     * // Create one TermSession
     * const TermSession = await prisma.termSession.create({
     *   data: {
     *     // ... data to create a TermSession
     *   }
     * })
     * 
     */
    create<T extends TermSessionCreateArgs>(args: SelectSubset<T, TermSessionCreateArgs<ExtArgs>>): Prisma__TermSessionClient<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TermSessions.
     * @param {TermSessionCreateManyArgs} args - Arguments to create many TermSessions.
     * @example
     * // Create many TermSessions
     * const termSession = await prisma.termSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TermSessionCreateManyArgs>(args?: SelectSubset<T, TermSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TermSessions and returns the data saved in the database.
     * @param {TermSessionCreateManyAndReturnArgs} args - Arguments to create many TermSessions.
     * @example
     * // Create many TermSessions
     * const termSession = await prisma.termSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TermSessions and only return the `id`
     * const termSessionWithIdOnly = await prisma.termSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TermSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TermSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TermSession.
     * @param {TermSessionDeleteArgs} args - Arguments to delete one TermSession.
     * @example
     * // Delete one TermSession
     * const TermSession = await prisma.termSession.delete({
     *   where: {
     *     // ... filter to delete one TermSession
     *   }
     * })
     * 
     */
    delete<T extends TermSessionDeleteArgs>(args: SelectSubset<T, TermSessionDeleteArgs<ExtArgs>>): Prisma__TermSessionClient<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TermSession.
     * @param {TermSessionUpdateArgs} args - Arguments to update one TermSession.
     * @example
     * // Update one TermSession
     * const termSession = await prisma.termSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TermSessionUpdateArgs>(args: SelectSubset<T, TermSessionUpdateArgs<ExtArgs>>): Prisma__TermSessionClient<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TermSessions.
     * @param {TermSessionDeleteManyArgs} args - Arguments to filter TermSessions to delete.
     * @example
     * // Delete a few TermSessions
     * const { count } = await prisma.termSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TermSessionDeleteManyArgs>(args?: SelectSubset<T, TermSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TermSessions
     * const termSession = await prisma.termSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TermSessionUpdateManyArgs>(args: SelectSubset<T, TermSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermSessions and returns the data updated in the database.
     * @param {TermSessionUpdateManyAndReturnArgs} args - Arguments to update many TermSessions.
     * @example
     * // Update many TermSessions
     * const termSession = await prisma.termSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TermSessions and only return the `id`
     * const termSessionWithIdOnly = await prisma.termSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends TermSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TermSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TermSession.
     * @param {TermSessionUpsertArgs} args - Arguments to update or create a TermSession.
     * @example
     * // Update or create a TermSession
     * const termSession = await prisma.termSession.upsert({
     *   create: {
     *     // ... data to create a TermSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TermSession we want to update
     *   }
     * })
     */
    upsert<T extends TermSessionUpsertArgs>(args: SelectSubset<T, TermSessionUpsertArgs<ExtArgs>>): Prisma__TermSessionClient<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TermSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermSessionCountArgs} args - Arguments to filter TermSessions to count.
     * @example
     * // Count the number of TermSessions
     * const count = await prisma.termSession.count({
     *   where: {
     *     // ... the filter for the TermSessions we want to count
     *   }
     * })
    **/
    count<T extends TermSessionCountArgs>(
      args?: Subset<T, TermSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TermSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TermSessionAggregateArgs>(args: Subset<T, TermSessionAggregateArgs>): Prisma.PrismaPromise<GetTermSessionAggregateType<T>>

    /**
     * Group by TermSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermSessionGroupByArgs} args - Group by arguments.
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
      T extends TermSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermSessionGroupByArgs['orderBy'] }
        : { orderBy?: TermSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TermSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TermSession model
   */
  readonly fields: TermSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TermSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TermSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendances<T extends TermSession$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, TermSession$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TermSession model
   */
  interface TermSessionFieldRefs {
    readonly id: FieldRef<"TermSession", 'Int'>
    readonly name: FieldRef<"TermSession", 'String'>
    readonly year: FieldRef<"TermSession", 'Int'>
    readonly startDate: FieldRef<"TermSession", 'DateTime'>
    readonly endDate: FieldRef<"TermSession", 'DateTime'>
    readonly openingDate: FieldRef<"TermSession", 'DateTime'>
    readonly isActive: FieldRef<"TermSession", 'Boolean'>
    readonly status: FieldRef<"TermSession", 'TermStatus'>
    readonly createdAt: FieldRef<"TermSession", 'DateTime'>
    readonly updatedAt: FieldRef<"TermSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TermSession findUnique
   */
  export type TermSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermSessionInclude<ExtArgs> | null
    /**
     * Filter, which TermSession to fetch.
     */
    where: TermSessionWhereUniqueInput
  }

  /**
   * TermSession findUniqueOrThrow
   */
  export type TermSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermSessionInclude<ExtArgs> | null
    /**
     * Filter, which TermSession to fetch.
     */
    where: TermSessionWhereUniqueInput
  }

  /**
   * TermSession findFirst
   */
  export type TermSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermSessionInclude<ExtArgs> | null
    /**
     * Filter, which TermSession to fetch.
     */
    where?: TermSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermSessions to fetch.
     */
    orderBy?: TermSessionOrderByWithRelationInput | TermSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermSessions.
     */
    cursor?: TermSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermSessions.
     */
    distinct?: TermSessionScalarFieldEnum | TermSessionScalarFieldEnum[]
  }

  /**
   * TermSession findFirstOrThrow
   */
  export type TermSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermSessionInclude<ExtArgs> | null
    /**
     * Filter, which TermSession to fetch.
     */
    where?: TermSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermSessions to fetch.
     */
    orderBy?: TermSessionOrderByWithRelationInput | TermSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermSessions.
     */
    cursor?: TermSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermSessions.
     */
    distinct?: TermSessionScalarFieldEnum | TermSessionScalarFieldEnum[]
  }

  /**
   * TermSession findMany
   */
  export type TermSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermSessionInclude<ExtArgs> | null
    /**
     * Filter, which TermSessions to fetch.
     */
    where?: TermSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermSessions to fetch.
     */
    orderBy?: TermSessionOrderByWithRelationInput | TermSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TermSessions.
     */
    cursor?: TermSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermSessions.
     */
    distinct?: TermSessionScalarFieldEnum | TermSessionScalarFieldEnum[]
  }

  /**
   * TermSession create
   */
  export type TermSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TermSession.
     */
    data: XOR<TermSessionCreateInput, TermSessionUncheckedCreateInput>
  }

  /**
   * TermSession createMany
   */
  export type TermSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TermSessions.
     */
    data: TermSessionCreateManyInput | TermSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TermSession createManyAndReturn
   */
  export type TermSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TermSessions.
     */
    data: TermSessionCreateManyInput | TermSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TermSession update
   */
  export type TermSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TermSession.
     */
    data: XOR<TermSessionUpdateInput, TermSessionUncheckedUpdateInput>
    /**
     * Choose, which TermSession to update.
     */
    where: TermSessionWhereUniqueInput
  }

  /**
   * TermSession updateMany
   */
  export type TermSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TermSessions.
     */
    data: XOR<TermSessionUpdateManyMutationInput, TermSessionUncheckedUpdateManyInput>
    /**
     * Filter which TermSessions to update
     */
    where?: TermSessionWhereInput
    /**
     * Limit how many TermSessions to update.
     */
    limit?: number
  }

  /**
   * TermSession updateManyAndReturn
   */
  export type TermSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * The data used to update TermSessions.
     */
    data: XOR<TermSessionUpdateManyMutationInput, TermSessionUncheckedUpdateManyInput>
    /**
     * Filter which TermSessions to update
     */
    where?: TermSessionWhereInput
    /**
     * Limit how many TermSessions to update.
     */
    limit?: number
  }

  /**
   * TermSession upsert
   */
  export type TermSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TermSession to update in case it exists.
     */
    where: TermSessionWhereUniqueInput
    /**
     * In case the TermSession found by the `where` argument doesn't exist, create a new TermSession with this data.
     */
    create: XOR<TermSessionCreateInput, TermSessionUncheckedCreateInput>
    /**
     * In case the TermSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermSessionUpdateInput, TermSessionUncheckedUpdateInput>
  }

  /**
   * TermSession delete
   */
  export type TermSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermSessionInclude<ExtArgs> | null
    /**
     * Filter which TermSession to delete.
     */
    where: TermSessionWhereUniqueInput
  }

  /**
   * TermSession deleteMany
   */
  export type TermSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermSessions to delete
     */
    where?: TermSessionWhereInput
    /**
     * Limit how many TermSessions to delete.
     */
    limit?: number
  }

  /**
   * TermSession.attendances
   */
  export type TermSession$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    where?: TermAttendanceWhereInput
    orderBy?: TermAttendanceOrderByWithRelationInput | TermAttendanceOrderByWithRelationInput[]
    cursor?: TermAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TermAttendanceScalarFieldEnum | TermAttendanceScalarFieldEnum[]
  }

  /**
   * TermSession without action
   */
  export type TermSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermSession
     */
    select?: TermSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermSession
     */
    omit?: TermSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermSessionInclude<ExtArgs> | null
  }


  /**
   * Model TermAttendance
   */

  export type AggregateTermAttendance = {
    _count: TermAttendanceCountAggregateOutputType | null
    _avg: TermAttendanceAvgAggregateOutputType | null
    _sum: TermAttendanceSumAggregateOutputType | null
    _min: TermAttendanceMinAggregateOutputType | null
    _max: TermAttendanceMaxAggregateOutputType | null
  }

  export type TermAttendanceAvgAggregateOutputType = {
    id: number | null
    termId: number | null
    studentId: number | null
    recordedById: number | null
  }

  export type TermAttendanceSumAggregateOutputType = {
    id: number | null
    termId: number | null
    studentId: number | null
    recordedById: number | null
  }

  export type TermAttendanceMinAggregateOutputType = {
    id: number | null
    termId: number | null
    studentId: number | null
    status: $Enums.TermAttendanceStatus | null
    arrivalTime: Date | null
    recordedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermAttendanceMaxAggregateOutputType = {
    id: number | null
    termId: number | null
    studentId: number | null
    status: $Enums.TermAttendanceStatus | null
    arrivalTime: Date | null
    recordedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermAttendanceCountAggregateOutputType = {
    id: number
    termId: number
    studentId: number
    status: number
    arrivalTime: number
    recordedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TermAttendanceAvgAggregateInputType = {
    id?: true
    termId?: true
    studentId?: true
    recordedById?: true
  }

  export type TermAttendanceSumAggregateInputType = {
    id?: true
    termId?: true
    studentId?: true
    recordedById?: true
  }

  export type TermAttendanceMinAggregateInputType = {
    id?: true
    termId?: true
    studentId?: true
    status?: true
    arrivalTime?: true
    recordedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermAttendanceMaxAggregateInputType = {
    id?: true
    termId?: true
    studentId?: true
    status?: true
    arrivalTime?: true
    recordedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermAttendanceCountAggregateInputType = {
    id?: true
    termId?: true
    studentId?: true
    status?: true
    arrivalTime?: true
    recordedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TermAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermAttendance to aggregate.
     */
    where?: TermAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermAttendances to fetch.
     */
    orderBy?: TermAttendanceOrderByWithRelationInput | TermAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TermAttendances
    **/
    _count?: true | TermAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TermAttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TermAttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermAttendanceMaxAggregateInputType
  }

  export type GetTermAttendanceAggregateType<T extends TermAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateTermAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTermAttendance[P]>
      : GetScalarType<T[P], AggregateTermAttendance[P]>
  }




  export type TermAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermAttendanceWhereInput
    orderBy?: TermAttendanceOrderByWithAggregationInput | TermAttendanceOrderByWithAggregationInput[]
    by: TermAttendanceScalarFieldEnum[] | TermAttendanceScalarFieldEnum
    having?: TermAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermAttendanceCountAggregateInputType | true
    _avg?: TermAttendanceAvgAggregateInputType
    _sum?: TermAttendanceSumAggregateInputType
    _min?: TermAttendanceMinAggregateInputType
    _max?: TermAttendanceMaxAggregateInputType
  }

  export type TermAttendanceGroupByOutputType = {
    id: number
    termId: number
    studentId: number
    status: $Enums.TermAttendanceStatus
    arrivalTime: Date | null
    recordedById: number | null
    createdAt: Date
    updatedAt: Date
    _count: TermAttendanceCountAggregateOutputType | null
    _avg: TermAttendanceAvgAggregateOutputType | null
    _sum: TermAttendanceSumAggregateOutputType | null
    _min: TermAttendanceMinAggregateOutputType | null
    _max: TermAttendanceMaxAggregateOutputType | null
  }

  type GetTermAttendanceGroupByPayload<T extends TermAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], TermAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type TermAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    termId?: boolean
    studentId?: boolean
    status?: boolean
    arrivalTime?: boolean
    recordedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recordedBy?: boolean | TermAttendance$recordedByArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | TermSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["termAttendance"]>

  export type TermAttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    termId?: boolean
    studentId?: boolean
    status?: boolean
    arrivalTime?: boolean
    recordedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recordedBy?: boolean | TermAttendance$recordedByArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | TermSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["termAttendance"]>

  export type TermAttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    termId?: boolean
    studentId?: boolean
    status?: boolean
    arrivalTime?: boolean
    recordedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recordedBy?: boolean | TermAttendance$recordedByArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | TermSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["termAttendance"]>

  export type TermAttendanceSelectScalar = {
    id?: boolean
    termId?: boolean
    studentId?: boolean
    status?: boolean
    arrivalTime?: boolean
    recordedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TermAttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "termId" | "studentId" | "status" | "arrivalTime" | "recordedById" | "createdAt" | "updatedAt", ExtArgs["result"]["termAttendance"]>
  export type TermAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recordedBy?: boolean | TermAttendance$recordedByArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | TermSessionDefaultArgs<ExtArgs>
  }
  export type TermAttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recordedBy?: boolean | TermAttendance$recordedByArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | TermSessionDefaultArgs<ExtArgs>
  }
  export type TermAttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recordedBy?: boolean | TermAttendance$recordedByArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    term?: boolean | TermSessionDefaultArgs<ExtArgs>
  }

  export type $TermAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TermAttendance"
    objects: {
      recordedBy: Prisma.$StaffPayload<ExtArgs> | null
      student: Prisma.$StudentPayload<ExtArgs>
      term: Prisma.$TermSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      termId: number
      studentId: number
      status: $Enums.TermAttendanceStatus
      arrivalTime: Date | null
      recordedById: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["termAttendance"]>
    composites: {}
  }

  type TermAttendanceGetPayload<S extends boolean | null | undefined | TermAttendanceDefaultArgs> = $Result.GetResult<Prisma.$TermAttendancePayload, S>

  type TermAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TermAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TermAttendanceCountAggregateInputType | true
    }

  export interface TermAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TermAttendance'], meta: { name: 'TermAttendance' } }
    /**
     * Find zero or one TermAttendance that matches the filter.
     * @param {TermAttendanceFindUniqueArgs} args - Arguments to find a TermAttendance
     * @example
     * // Get one TermAttendance
     * const termAttendance = await prisma.termAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TermAttendanceFindUniqueArgs>(args: SelectSubset<T, TermAttendanceFindUniqueArgs<ExtArgs>>): Prisma__TermAttendanceClient<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TermAttendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TermAttendanceFindUniqueOrThrowArgs} args - Arguments to find a TermAttendance
     * @example
     * // Get one TermAttendance
     * const termAttendance = await prisma.termAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TermAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, TermAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TermAttendanceClient<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermAttendanceFindFirstArgs} args - Arguments to find a TermAttendance
     * @example
     * // Get one TermAttendance
     * const termAttendance = await prisma.termAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TermAttendanceFindFirstArgs>(args?: SelectSubset<T, TermAttendanceFindFirstArgs<ExtArgs>>): Prisma__TermAttendanceClient<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermAttendanceFindFirstOrThrowArgs} args - Arguments to find a TermAttendance
     * @example
     * // Get one TermAttendance
     * const termAttendance = await prisma.termAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TermAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, TermAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TermAttendanceClient<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TermAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TermAttendances
     * const termAttendances = await prisma.termAttendance.findMany()
     * 
     * // Get first 10 TermAttendances
     * const termAttendances = await prisma.termAttendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termAttendanceWithIdOnly = await prisma.termAttendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TermAttendanceFindManyArgs>(args?: SelectSubset<T, TermAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TermAttendance.
     * @param {TermAttendanceCreateArgs} args - Arguments to create a TermAttendance.
     * @example
     * // Create one TermAttendance
     * const TermAttendance = await prisma.termAttendance.create({
     *   data: {
     *     // ... data to create a TermAttendance
     *   }
     * })
     * 
     */
    create<T extends TermAttendanceCreateArgs>(args: SelectSubset<T, TermAttendanceCreateArgs<ExtArgs>>): Prisma__TermAttendanceClient<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TermAttendances.
     * @param {TermAttendanceCreateManyArgs} args - Arguments to create many TermAttendances.
     * @example
     * // Create many TermAttendances
     * const termAttendance = await prisma.termAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TermAttendanceCreateManyArgs>(args?: SelectSubset<T, TermAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TermAttendances and returns the data saved in the database.
     * @param {TermAttendanceCreateManyAndReturnArgs} args - Arguments to create many TermAttendances.
     * @example
     * // Create many TermAttendances
     * const termAttendance = await prisma.termAttendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TermAttendances and only return the `id`
     * const termAttendanceWithIdOnly = await prisma.termAttendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TermAttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, TermAttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TermAttendance.
     * @param {TermAttendanceDeleteArgs} args - Arguments to delete one TermAttendance.
     * @example
     * // Delete one TermAttendance
     * const TermAttendance = await prisma.termAttendance.delete({
     *   where: {
     *     // ... filter to delete one TermAttendance
     *   }
     * })
     * 
     */
    delete<T extends TermAttendanceDeleteArgs>(args: SelectSubset<T, TermAttendanceDeleteArgs<ExtArgs>>): Prisma__TermAttendanceClient<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TermAttendance.
     * @param {TermAttendanceUpdateArgs} args - Arguments to update one TermAttendance.
     * @example
     * // Update one TermAttendance
     * const termAttendance = await prisma.termAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TermAttendanceUpdateArgs>(args: SelectSubset<T, TermAttendanceUpdateArgs<ExtArgs>>): Prisma__TermAttendanceClient<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TermAttendances.
     * @param {TermAttendanceDeleteManyArgs} args - Arguments to filter TermAttendances to delete.
     * @example
     * // Delete a few TermAttendances
     * const { count } = await prisma.termAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TermAttendanceDeleteManyArgs>(args?: SelectSubset<T, TermAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TermAttendances
     * const termAttendance = await prisma.termAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TermAttendanceUpdateManyArgs>(args: SelectSubset<T, TermAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermAttendances and returns the data updated in the database.
     * @param {TermAttendanceUpdateManyAndReturnArgs} args - Arguments to update many TermAttendances.
     * @example
     * // Update many TermAttendances
     * const termAttendance = await prisma.termAttendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TermAttendances and only return the `id`
     * const termAttendanceWithIdOnly = await prisma.termAttendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends TermAttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, TermAttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TermAttendance.
     * @param {TermAttendanceUpsertArgs} args - Arguments to update or create a TermAttendance.
     * @example
     * // Update or create a TermAttendance
     * const termAttendance = await prisma.termAttendance.upsert({
     *   create: {
     *     // ... data to create a TermAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TermAttendance we want to update
     *   }
     * })
     */
    upsert<T extends TermAttendanceUpsertArgs>(args: SelectSubset<T, TermAttendanceUpsertArgs<ExtArgs>>): Prisma__TermAttendanceClient<$Result.GetResult<Prisma.$TermAttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TermAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermAttendanceCountArgs} args - Arguments to filter TermAttendances to count.
     * @example
     * // Count the number of TermAttendances
     * const count = await prisma.termAttendance.count({
     *   where: {
     *     // ... the filter for the TermAttendances we want to count
     *   }
     * })
    **/
    count<T extends TermAttendanceCountArgs>(
      args?: Subset<T, TermAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TermAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TermAttendanceAggregateArgs>(args: Subset<T, TermAttendanceAggregateArgs>): Prisma.PrismaPromise<GetTermAttendanceAggregateType<T>>

    /**
     * Group by TermAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermAttendanceGroupByArgs} args - Group by arguments.
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
      T extends TermAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: TermAttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TermAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TermAttendance model
   */
  readonly fields: TermAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TermAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TermAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recordedBy<T extends TermAttendance$recordedByArgs<ExtArgs> = {}>(args?: Subset<T, TermAttendance$recordedByArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    term<T extends TermSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TermSessionDefaultArgs<ExtArgs>>): Prisma__TermSessionClient<$Result.GetResult<Prisma.$TermSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TermAttendance model
   */
  interface TermAttendanceFieldRefs {
    readonly id: FieldRef<"TermAttendance", 'Int'>
    readonly termId: FieldRef<"TermAttendance", 'Int'>
    readonly studentId: FieldRef<"TermAttendance", 'Int'>
    readonly status: FieldRef<"TermAttendance", 'TermAttendanceStatus'>
    readonly arrivalTime: FieldRef<"TermAttendance", 'DateTime'>
    readonly recordedById: FieldRef<"TermAttendance", 'Int'>
    readonly createdAt: FieldRef<"TermAttendance", 'DateTime'>
    readonly updatedAt: FieldRef<"TermAttendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TermAttendance findUnique
   */
  export type TermAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which TermAttendance to fetch.
     */
    where: TermAttendanceWhereUniqueInput
  }

  /**
   * TermAttendance findUniqueOrThrow
   */
  export type TermAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which TermAttendance to fetch.
     */
    where: TermAttendanceWhereUniqueInput
  }

  /**
   * TermAttendance findFirst
   */
  export type TermAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which TermAttendance to fetch.
     */
    where?: TermAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermAttendances to fetch.
     */
    orderBy?: TermAttendanceOrderByWithRelationInput | TermAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermAttendances.
     */
    cursor?: TermAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermAttendances.
     */
    distinct?: TermAttendanceScalarFieldEnum | TermAttendanceScalarFieldEnum[]
  }

  /**
   * TermAttendance findFirstOrThrow
   */
  export type TermAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which TermAttendance to fetch.
     */
    where?: TermAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermAttendances to fetch.
     */
    orderBy?: TermAttendanceOrderByWithRelationInput | TermAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermAttendances.
     */
    cursor?: TermAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermAttendances.
     */
    distinct?: TermAttendanceScalarFieldEnum | TermAttendanceScalarFieldEnum[]
  }

  /**
   * TermAttendance findMany
   */
  export type TermAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which TermAttendances to fetch.
     */
    where?: TermAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermAttendances to fetch.
     */
    orderBy?: TermAttendanceOrderByWithRelationInput | TermAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TermAttendances.
     */
    cursor?: TermAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermAttendances.
     */
    distinct?: TermAttendanceScalarFieldEnum | TermAttendanceScalarFieldEnum[]
  }

  /**
   * TermAttendance create
   */
  export type TermAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a TermAttendance.
     */
    data: XOR<TermAttendanceCreateInput, TermAttendanceUncheckedCreateInput>
  }

  /**
   * TermAttendance createMany
   */
  export type TermAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TermAttendances.
     */
    data: TermAttendanceCreateManyInput | TermAttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TermAttendance createManyAndReturn
   */
  export type TermAttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many TermAttendances.
     */
    data: TermAttendanceCreateManyInput | TermAttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TermAttendance update
   */
  export type TermAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a TermAttendance.
     */
    data: XOR<TermAttendanceUpdateInput, TermAttendanceUncheckedUpdateInput>
    /**
     * Choose, which TermAttendance to update.
     */
    where: TermAttendanceWhereUniqueInput
  }

  /**
   * TermAttendance updateMany
   */
  export type TermAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TermAttendances.
     */
    data: XOR<TermAttendanceUpdateManyMutationInput, TermAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which TermAttendances to update
     */
    where?: TermAttendanceWhereInput
    /**
     * Limit how many TermAttendances to update.
     */
    limit?: number
  }

  /**
   * TermAttendance updateManyAndReturn
   */
  export type TermAttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * The data used to update TermAttendances.
     */
    data: XOR<TermAttendanceUpdateManyMutationInput, TermAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which TermAttendances to update
     */
    where?: TermAttendanceWhereInput
    /**
     * Limit how many TermAttendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TermAttendance upsert
   */
  export type TermAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the TermAttendance to update in case it exists.
     */
    where: TermAttendanceWhereUniqueInput
    /**
     * In case the TermAttendance found by the `where` argument doesn't exist, create a new TermAttendance with this data.
     */
    create: XOR<TermAttendanceCreateInput, TermAttendanceUncheckedCreateInput>
    /**
     * In case the TermAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermAttendanceUpdateInput, TermAttendanceUncheckedUpdateInput>
  }

  /**
   * TermAttendance delete
   */
  export type TermAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
    /**
     * Filter which TermAttendance to delete.
     */
    where: TermAttendanceWhereUniqueInput
  }

  /**
   * TermAttendance deleteMany
   */
  export type TermAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermAttendances to delete
     */
    where?: TermAttendanceWhereInput
    /**
     * Limit how many TermAttendances to delete.
     */
    limit?: number
  }

  /**
   * TermAttendance.recordedBy
   */
  export type TermAttendance$recordedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * TermAttendance without action
   */
  export type TermAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermAttendance
     */
    select?: TermAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermAttendance
     */
    omit?: TermAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermAttendanceInclude<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    fatherName: 'fatherName',
    motherName: 'motherName',
    fatherPhoneNumber: 'fatherPhoneNumber',
    motherPhoneNumber: 'motherPhoneNumber',
    year: 'year',
    classGroup: 'classGroup',
    location: 'location',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    role: 'role',
    permissions: 'permissions',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const DisciplineRecordScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    reason: 'reason',
    location: 'location',
    status: 'status',
    outDate: 'outDate',
    returnDate: 'returnDate',
    accompaniedBy: 'accompaniedBy',
    eventTheme: 'eventTheme',
    updatedAt: 'updatedAt'
  };

  export type DisciplineRecordScalarFieldEnum = (typeof DisciplineRecordScalarFieldEnum)[keyof typeof DisciplineRecordScalarFieldEnum]


  export const TransportScalarFieldEnum: {
    id: 'id',
    location: 'location',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransportScalarFieldEnum = (typeof TransportScalarFieldEnum)[keyof typeof TransportScalarFieldEnum]


  export const TransportAssignmentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    transportId: 'transportId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransportAssignmentScalarFieldEnum = (typeof TransportAssignmentScalarFieldEnum)[keyof typeof TransportAssignmentScalarFieldEnum]


  export const AcademicTermScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AcademicTermScalarFieldEnum = (typeof AcademicTermScalarFieldEnum)[keyof typeof AcademicTermScalarFieldEnum]


  export const AttendanceRecordScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    termId: 'termId',
    date: 'date',
    status: 'status',
    note: 'note',
    markedByStaffId: 'markedByStaffId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceRecordScalarFieldEnum = (typeof AttendanceRecordScalarFieldEnum)[keyof typeof AttendanceRecordScalarFieldEnum]


  export const ParentNotificationScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    channel: 'channel',
    phone: 'phone',
    message: 'message',
    type: 'type',
    status: 'status',
    sentAt: 'sentAt',
    createdAt: 'createdAt'
  };

  export type ParentNotificationScalarFieldEnum = (typeof ParentNotificationScalarFieldEnum)[keyof typeof ParentNotificationScalarFieldEnum]


  export const PhoneBorrowScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    phoneModel: 'phoneModel',
    borrowedAt: 'borrowedAt',
    returnedAt: 'returnedAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhoneBorrowScalarFieldEnum = (typeof PhoneBorrowScalarFieldEnum)[keyof typeof PhoneBorrowScalarFieldEnum]


  export const TermSessionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    year: 'year',
    startDate: 'startDate',
    endDate: 'endDate',
    openingDate: 'openingDate',
    isActive: 'isActive',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TermSessionScalarFieldEnum = (typeof TermSessionScalarFieldEnum)[keyof typeof TermSessionScalarFieldEnum]


  export const TermAttendanceScalarFieldEnum: {
    id: 'id',
    termId: 'termId',
    studentId: 'studentId',
    status: 'status',
    arrivalTime: 'arrivalTime',
    recordedById: 'recordedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TermAttendanceScalarFieldEnum = (typeof TermAttendanceScalarFieldEnum)[keyof typeof TermAttendanceScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StaffRole'
   */
  export type EnumStaffRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffRole'>
    


  /**
   * Reference to a field of type 'StaffRole[]'
   */
  export type ListEnumStaffRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffRole[]'>
    


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
   * Reference to a field of type 'TransportStatus'
   */
  export type EnumTransportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransportStatus'>
    


  /**
   * Reference to a field of type 'TransportStatus[]'
   */
  export type ListEnumTransportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransportStatus[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'ParentNotificationType'
   */
  export type EnumParentNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParentNotificationType'>
    


  /**
   * Reference to a field of type 'ParentNotificationType[]'
   */
  export type ListEnumParentNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParentNotificationType[]'>
    


  /**
   * Reference to a field of type 'NotificationStatus'
   */
  export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>
    


  /**
   * Reference to a field of type 'NotificationStatus[]'
   */
  export type ListEnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus[]'>
    


  /**
   * Reference to a field of type 'PhoneBorrowStatus'
   */
  export type EnumPhoneBorrowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhoneBorrowStatus'>
    


  /**
   * Reference to a field of type 'PhoneBorrowStatus[]'
   */
  export type ListEnumPhoneBorrowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhoneBorrowStatus[]'>
    


  /**
   * Reference to a field of type 'TermStatus'
   */
  export type EnumTermStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TermStatus'>
    


  /**
   * Reference to a field of type 'TermStatus[]'
   */
  export type ListEnumTermStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TermStatus[]'>
    


  /**
   * Reference to a field of type 'TermAttendanceStatus'
   */
  export type EnumTermAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TermAttendanceStatus'>
    


  /**
   * Reference to a field of type 'TermAttendanceStatus[]'
   */
  export type ListEnumTermAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TermAttendanceStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    fatherName?: StringFilter<"Student"> | string
    motherName?: StringFilter<"Student"> | string
    fatherPhoneNumber?: StringFilter<"Student"> | string
    motherPhoneNumber?: StringFilter<"Student"> | string
    year?: StringFilter<"Student"> | string
    classGroup?: StringFilter<"Student"> | string
    location?: StringNullableFilter<"Student"> | string | null
    status?: EnumStatusFilter<"Student"> | $Enums.Status
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    records?: DisciplineRecordListRelationFilter
    transportAssignments?: TransportAssignmentListRelationFilter
    attendanceRecords?: AttendanceRecordListRelationFilter
    parentNotifications?: ParentNotificationListRelationFilter
    phoneBorrows?: PhoneBorrowListRelationFilter
    termAttendances?: TermAttendanceListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    fatherPhoneNumber?: SortOrder
    motherPhoneNumber?: SortOrder
    year?: SortOrder
    classGroup?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    records?: DisciplineRecordOrderByRelationAggregateInput
    transportAssignments?: TransportAssignmentOrderByRelationAggregateInput
    attendanceRecords?: AttendanceRecordOrderByRelationAggregateInput
    parentNotifications?: ParentNotificationOrderByRelationAggregateInput
    phoneBorrows?: PhoneBorrowOrderByRelationAggregateInput
    termAttendances?: TermAttendanceOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    fatherName?: StringFilter<"Student"> | string
    motherName?: StringFilter<"Student"> | string
    fatherPhoneNumber?: StringFilter<"Student"> | string
    motherPhoneNumber?: StringFilter<"Student"> | string
    year?: StringFilter<"Student"> | string
    classGroup?: StringFilter<"Student"> | string
    location?: StringNullableFilter<"Student"> | string | null
    status?: EnumStatusFilter<"Student"> | $Enums.Status
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    records?: DisciplineRecordListRelationFilter
    transportAssignments?: TransportAssignmentListRelationFilter
    attendanceRecords?: AttendanceRecordListRelationFilter
    parentNotifications?: ParentNotificationListRelationFilter
    phoneBorrows?: PhoneBorrowListRelationFilter
    termAttendances?: TermAttendanceListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    fatherPhoneNumber?: SortOrder
    motherPhoneNumber?: SortOrder
    year?: SortOrder
    classGroup?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    firstName?: StringWithAggregatesFilter<"Student"> | string
    lastName?: StringWithAggregatesFilter<"Student"> | string
    fatherName?: StringWithAggregatesFilter<"Student"> | string
    motherName?: StringWithAggregatesFilter<"Student"> | string
    fatherPhoneNumber?: StringWithAggregatesFilter<"Student"> | string
    motherPhoneNumber?: StringWithAggregatesFilter<"Student"> | string
    year?: StringWithAggregatesFilter<"Student"> | string
    classGroup?: StringWithAggregatesFilter<"Student"> | string
    location?: StringNullableWithAggregatesFilter<"Student"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Student"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: IntFilter<"Staff"> | number
    firstName?: StringFilter<"Staff"> | string
    lastName?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    password?: StringFilter<"Staff"> | string
    phoneNumber?: StringFilter<"Staff"> | string
    role?: EnumStaffRoleFilter<"Staff"> | $Enums.StaffRole
    permissions?: StringNullableListFilter<"Staff">
    isActive?: BoolFilter<"Staff"> | boolean
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    termAttendances?: TermAttendanceListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    termAttendances?: TermAttendanceOrderByRelationAggregateInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    firstName?: StringFilter<"Staff"> | string
    lastName?: StringFilter<"Staff"> | string
    password?: StringFilter<"Staff"> | string
    phoneNumber?: StringFilter<"Staff"> | string
    role?: EnumStaffRoleFilter<"Staff"> | $Enums.StaffRole
    permissions?: StringNullableListFilter<"Staff">
    isActive?: BoolFilter<"Staff"> | boolean
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    termAttendances?: TermAttendanceListRelationFilter
  }, "id" | "email">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Staff"> | number
    firstName?: StringWithAggregatesFilter<"Staff"> | string
    lastName?: StringWithAggregatesFilter<"Staff"> | string
    email?: StringWithAggregatesFilter<"Staff"> | string
    password?: StringWithAggregatesFilter<"Staff"> | string
    phoneNumber?: StringWithAggregatesFilter<"Staff"> | string
    role?: EnumStaffRoleWithAggregatesFilter<"Staff"> | $Enums.StaffRole
    permissions?: StringNullableListFilter<"Staff">
    isActive?: BoolWithAggregatesFilter<"Staff"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type DisciplineRecordWhereInput = {
    AND?: DisciplineRecordWhereInput | DisciplineRecordWhereInput[]
    OR?: DisciplineRecordWhereInput[]
    NOT?: DisciplineRecordWhereInput | DisciplineRecordWhereInput[]
    id?: IntFilter<"DisciplineRecord"> | number
    studentId?: IntFilter<"DisciplineRecord"> | number
    reason?: StringFilter<"DisciplineRecord"> | string
    location?: StringNullableFilter<"DisciplineRecord"> | string | null
    status?: StringFilter<"DisciplineRecord"> | string
    outDate?: DateTimeFilter<"DisciplineRecord"> | Date | string
    returnDate?: DateTimeNullableFilter<"DisciplineRecord"> | Date | string | null
    accompaniedBy?: StringNullableFilter<"DisciplineRecord"> | string | null
    eventTheme?: StringNullableFilter<"DisciplineRecord"> | string | null
    updatedAt?: DateTimeFilter<"DisciplineRecord"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type DisciplineRecordOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    reason?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    outDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    accompaniedBy?: SortOrderInput | SortOrder
    eventTheme?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type DisciplineRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DisciplineRecordWhereInput | DisciplineRecordWhereInput[]
    OR?: DisciplineRecordWhereInput[]
    NOT?: DisciplineRecordWhereInput | DisciplineRecordWhereInput[]
    studentId?: IntFilter<"DisciplineRecord"> | number
    reason?: StringFilter<"DisciplineRecord"> | string
    location?: StringNullableFilter<"DisciplineRecord"> | string | null
    status?: StringFilter<"DisciplineRecord"> | string
    outDate?: DateTimeFilter<"DisciplineRecord"> | Date | string
    returnDate?: DateTimeNullableFilter<"DisciplineRecord"> | Date | string | null
    accompaniedBy?: StringNullableFilter<"DisciplineRecord"> | string | null
    eventTheme?: StringNullableFilter<"DisciplineRecord"> | string | null
    updatedAt?: DateTimeFilter<"DisciplineRecord"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type DisciplineRecordOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    reason?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    outDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    accompaniedBy?: SortOrderInput | SortOrder
    eventTheme?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: DisciplineRecordCountOrderByAggregateInput
    _avg?: DisciplineRecordAvgOrderByAggregateInput
    _max?: DisciplineRecordMaxOrderByAggregateInput
    _min?: DisciplineRecordMinOrderByAggregateInput
    _sum?: DisciplineRecordSumOrderByAggregateInput
  }

  export type DisciplineRecordScalarWhereWithAggregatesInput = {
    AND?: DisciplineRecordScalarWhereWithAggregatesInput | DisciplineRecordScalarWhereWithAggregatesInput[]
    OR?: DisciplineRecordScalarWhereWithAggregatesInput[]
    NOT?: DisciplineRecordScalarWhereWithAggregatesInput | DisciplineRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DisciplineRecord"> | number
    studentId?: IntWithAggregatesFilter<"DisciplineRecord"> | number
    reason?: StringWithAggregatesFilter<"DisciplineRecord"> | string
    location?: StringNullableWithAggregatesFilter<"DisciplineRecord"> | string | null
    status?: StringWithAggregatesFilter<"DisciplineRecord"> | string
    outDate?: DateTimeWithAggregatesFilter<"DisciplineRecord"> | Date | string
    returnDate?: DateTimeNullableWithAggregatesFilter<"DisciplineRecord"> | Date | string | null
    accompaniedBy?: StringNullableWithAggregatesFilter<"DisciplineRecord"> | string | null
    eventTheme?: StringNullableWithAggregatesFilter<"DisciplineRecord"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"DisciplineRecord"> | Date | string
  }

  export type TransportWhereInput = {
    AND?: TransportWhereInput | TransportWhereInput[]
    OR?: TransportWhereInput[]
    NOT?: TransportWhereInput | TransportWhereInput[]
    id?: IntFilter<"Transport"> | number
    location?: StringFilter<"Transport"> | string
    price?: FloatFilter<"Transport"> | number
    createdAt?: DateTimeFilter<"Transport"> | Date | string
    updatedAt?: DateTimeFilter<"Transport"> | Date | string
    assignments?: TransportAssignmentListRelationFilter
  }

  export type TransportOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignments?: TransportAssignmentOrderByRelationAggregateInput
  }

  export type TransportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransportWhereInput | TransportWhereInput[]
    OR?: TransportWhereInput[]
    NOT?: TransportWhereInput | TransportWhereInput[]
    location?: StringFilter<"Transport"> | string
    price?: FloatFilter<"Transport"> | number
    createdAt?: DateTimeFilter<"Transport"> | Date | string
    updatedAt?: DateTimeFilter<"Transport"> | Date | string
    assignments?: TransportAssignmentListRelationFilter
  }, "id">

  export type TransportOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransportCountOrderByAggregateInput
    _avg?: TransportAvgOrderByAggregateInput
    _max?: TransportMaxOrderByAggregateInput
    _min?: TransportMinOrderByAggregateInput
    _sum?: TransportSumOrderByAggregateInput
  }

  export type TransportScalarWhereWithAggregatesInput = {
    AND?: TransportScalarWhereWithAggregatesInput | TransportScalarWhereWithAggregatesInput[]
    OR?: TransportScalarWhereWithAggregatesInput[]
    NOT?: TransportScalarWhereWithAggregatesInput | TransportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transport"> | number
    location?: StringWithAggregatesFilter<"Transport"> | string
    price?: FloatWithAggregatesFilter<"Transport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transport"> | Date | string
  }

  export type TransportAssignmentWhereInput = {
    AND?: TransportAssignmentWhereInput | TransportAssignmentWhereInput[]
    OR?: TransportAssignmentWhereInput[]
    NOT?: TransportAssignmentWhereInput | TransportAssignmentWhereInput[]
    id?: IntFilter<"TransportAssignment"> | number
    studentId?: IntFilter<"TransportAssignment"> | number
    transportId?: IntFilter<"TransportAssignment"> | number
    status?: EnumTransportStatusFilter<"TransportAssignment"> | $Enums.TransportStatus
    createdAt?: DateTimeFilter<"TransportAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"TransportAssignment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    transport?: XOR<TransportScalarRelationFilter, TransportWhereInput>
  }

  export type TransportAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    transportId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    transport?: TransportOrderByWithRelationInput
  }

  export type TransportAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_transportId?: TransportAssignmentStudentIdTransportIdCompoundUniqueInput
    AND?: TransportAssignmentWhereInput | TransportAssignmentWhereInput[]
    OR?: TransportAssignmentWhereInput[]
    NOT?: TransportAssignmentWhereInput | TransportAssignmentWhereInput[]
    studentId?: IntFilter<"TransportAssignment"> | number
    transportId?: IntFilter<"TransportAssignment"> | number
    status?: EnumTransportStatusFilter<"TransportAssignment"> | $Enums.TransportStatus
    createdAt?: DateTimeFilter<"TransportAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"TransportAssignment"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    transport?: XOR<TransportScalarRelationFilter, TransportWhereInput>
  }, "id" | "studentId_transportId">

  export type TransportAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    transportId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransportAssignmentCountOrderByAggregateInput
    _avg?: TransportAssignmentAvgOrderByAggregateInput
    _max?: TransportAssignmentMaxOrderByAggregateInput
    _min?: TransportAssignmentMinOrderByAggregateInput
    _sum?: TransportAssignmentSumOrderByAggregateInput
  }

  export type TransportAssignmentScalarWhereWithAggregatesInput = {
    AND?: TransportAssignmentScalarWhereWithAggregatesInput | TransportAssignmentScalarWhereWithAggregatesInput[]
    OR?: TransportAssignmentScalarWhereWithAggregatesInput[]
    NOT?: TransportAssignmentScalarWhereWithAggregatesInput | TransportAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransportAssignment"> | number
    studentId?: IntWithAggregatesFilter<"TransportAssignment"> | number
    transportId?: IntWithAggregatesFilter<"TransportAssignment"> | number
    status?: EnumTransportStatusWithAggregatesFilter<"TransportAssignment"> | $Enums.TransportStatus
    createdAt?: DateTimeWithAggregatesFilter<"TransportAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransportAssignment"> | Date | string
  }

  export type AcademicTermWhereInput = {
    AND?: AcademicTermWhereInput | AcademicTermWhereInput[]
    OR?: AcademicTermWhereInput[]
    NOT?: AcademicTermWhereInput | AcademicTermWhereInput[]
    id?: IntFilter<"AcademicTerm"> | number
    name?: StringFilter<"AcademicTerm"> | string
    startDate?: DateTimeFilter<"AcademicTerm"> | Date | string
    endDate?: DateTimeNullableFilter<"AcademicTerm"> | Date | string | null
    isActive?: BoolFilter<"AcademicTerm"> | boolean
    createdAt?: DateTimeFilter<"AcademicTerm"> | Date | string
    updatedAt?: DateTimeFilter<"AcademicTerm"> | Date | string
    attendanceRecords?: AttendanceRecordListRelationFilter
  }

  export type AcademicTermOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendanceRecords?: AttendanceRecordOrderByRelationAggregateInput
  }

  export type AcademicTermWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AcademicTermWhereInput | AcademicTermWhereInput[]
    OR?: AcademicTermWhereInput[]
    NOT?: AcademicTermWhereInput | AcademicTermWhereInput[]
    name?: StringFilter<"AcademicTerm"> | string
    startDate?: DateTimeFilter<"AcademicTerm"> | Date | string
    endDate?: DateTimeNullableFilter<"AcademicTerm"> | Date | string | null
    isActive?: BoolFilter<"AcademicTerm"> | boolean
    createdAt?: DateTimeFilter<"AcademicTerm"> | Date | string
    updatedAt?: DateTimeFilter<"AcademicTerm"> | Date | string
    attendanceRecords?: AttendanceRecordListRelationFilter
  }, "id">

  export type AcademicTermOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AcademicTermCountOrderByAggregateInput
    _avg?: AcademicTermAvgOrderByAggregateInput
    _max?: AcademicTermMaxOrderByAggregateInput
    _min?: AcademicTermMinOrderByAggregateInput
    _sum?: AcademicTermSumOrderByAggregateInput
  }

  export type AcademicTermScalarWhereWithAggregatesInput = {
    AND?: AcademicTermScalarWhereWithAggregatesInput | AcademicTermScalarWhereWithAggregatesInput[]
    OR?: AcademicTermScalarWhereWithAggregatesInput[]
    NOT?: AcademicTermScalarWhereWithAggregatesInput | AcademicTermScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AcademicTerm"> | number
    name?: StringWithAggregatesFilter<"AcademicTerm"> | string
    startDate?: DateTimeWithAggregatesFilter<"AcademicTerm"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"AcademicTerm"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"AcademicTerm"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AcademicTerm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AcademicTerm"> | Date | string
  }

  export type AttendanceRecordWhereInput = {
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    id?: IntFilter<"AttendanceRecord"> | number
    studentId?: IntFilter<"AttendanceRecord"> | number
    termId?: IntFilter<"AttendanceRecord"> | number
    date?: DateTimeFilter<"AttendanceRecord"> | Date | string
    status?: EnumAttendanceStatusFilter<"AttendanceRecord"> | $Enums.AttendanceStatus
    note?: StringNullableFilter<"AttendanceRecord"> | string | null
    markedByStaffId?: IntNullableFilter<"AttendanceRecord"> | number | null
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    term?: XOR<AcademicTermScalarRelationFilter, AcademicTermWhereInput>
  }

  export type AttendanceRecordOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    termId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    markedByStaffId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    term?: AcademicTermOrderByWithRelationInput
  }

  export type AttendanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_termId_date?: AttendanceRecordStudentIdTermIdDateCompoundUniqueInput
    AND?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    OR?: AttendanceRecordWhereInput[]
    NOT?: AttendanceRecordWhereInput | AttendanceRecordWhereInput[]
    studentId?: IntFilter<"AttendanceRecord"> | number
    termId?: IntFilter<"AttendanceRecord"> | number
    date?: DateTimeFilter<"AttendanceRecord"> | Date | string
    status?: EnumAttendanceStatusFilter<"AttendanceRecord"> | $Enums.AttendanceStatus
    note?: StringNullableFilter<"AttendanceRecord"> | string | null
    markedByStaffId?: IntNullableFilter<"AttendanceRecord"> | number | null
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    term?: XOR<AcademicTermScalarRelationFilter, AcademicTermWhereInput>
  }, "id" | "studentId_termId_date">

  export type AttendanceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    termId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    markedByStaffId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceRecordCountOrderByAggregateInput
    _avg?: AttendanceRecordAvgOrderByAggregateInput
    _max?: AttendanceRecordMaxOrderByAggregateInput
    _min?: AttendanceRecordMinOrderByAggregateInput
    _sum?: AttendanceRecordSumOrderByAggregateInput
  }

  export type AttendanceRecordScalarWhereWithAggregatesInput = {
    AND?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    OR?: AttendanceRecordScalarWhereWithAggregatesInput[]
    NOT?: AttendanceRecordScalarWhereWithAggregatesInput | AttendanceRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AttendanceRecord"> | number
    studentId?: IntWithAggregatesFilter<"AttendanceRecord"> | number
    termId?: IntWithAggregatesFilter<"AttendanceRecord"> | number
    date?: DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string
    status?: EnumAttendanceStatusWithAggregatesFilter<"AttendanceRecord"> | $Enums.AttendanceStatus
    note?: StringNullableWithAggregatesFilter<"AttendanceRecord"> | string | null
    markedByStaffId?: IntNullableWithAggregatesFilter<"AttendanceRecord"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AttendanceRecord"> | Date | string
  }

  export type ParentNotificationWhereInput = {
    AND?: ParentNotificationWhereInput | ParentNotificationWhereInput[]
    OR?: ParentNotificationWhereInput[]
    NOT?: ParentNotificationWhereInput | ParentNotificationWhereInput[]
    id?: IntFilter<"ParentNotification"> | number
    studentId?: IntFilter<"ParentNotification"> | number
    channel?: StringFilter<"ParentNotification"> | string
    phone?: StringFilter<"ParentNotification"> | string
    message?: StringFilter<"ParentNotification"> | string
    type?: EnumParentNotificationTypeFilter<"ParentNotification"> | $Enums.ParentNotificationType
    status?: EnumNotificationStatusFilter<"ParentNotification"> | $Enums.NotificationStatus
    sentAt?: DateTimeFilter<"ParentNotification"> | Date | string
    createdAt?: DateTimeFilter<"ParentNotification"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type ParentNotificationOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    channel?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type ParentNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParentNotificationWhereInput | ParentNotificationWhereInput[]
    OR?: ParentNotificationWhereInput[]
    NOT?: ParentNotificationWhereInput | ParentNotificationWhereInput[]
    studentId?: IntFilter<"ParentNotification"> | number
    channel?: StringFilter<"ParentNotification"> | string
    phone?: StringFilter<"ParentNotification"> | string
    message?: StringFilter<"ParentNotification"> | string
    type?: EnumParentNotificationTypeFilter<"ParentNotification"> | $Enums.ParentNotificationType
    status?: EnumNotificationStatusFilter<"ParentNotification"> | $Enums.NotificationStatus
    sentAt?: DateTimeFilter<"ParentNotification"> | Date | string
    createdAt?: DateTimeFilter<"ParentNotification"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type ParentNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    channel?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    _count?: ParentNotificationCountOrderByAggregateInput
    _avg?: ParentNotificationAvgOrderByAggregateInput
    _max?: ParentNotificationMaxOrderByAggregateInput
    _min?: ParentNotificationMinOrderByAggregateInput
    _sum?: ParentNotificationSumOrderByAggregateInput
  }

  export type ParentNotificationScalarWhereWithAggregatesInput = {
    AND?: ParentNotificationScalarWhereWithAggregatesInput | ParentNotificationScalarWhereWithAggregatesInput[]
    OR?: ParentNotificationScalarWhereWithAggregatesInput[]
    NOT?: ParentNotificationScalarWhereWithAggregatesInput | ParentNotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParentNotification"> | number
    studentId?: IntWithAggregatesFilter<"ParentNotification"> | number
    channel?: StringWithAggregatesFilter<"ParentNotification"> | string
    phone?: StringWithAggregatesFilter<"ParentNotification"> | string
    message?: StringWithAggregatesFilter<"ParentNotification"> | string
    type?: EnumParentNotificationTypeWithAggregatesFilter<"ParentNotification"> | $Enums.ParentNotificationType
    status?: EnumNotificationStatusWithAggregatesFilter<"ParentNotification"> | $Enums.NotificationStatus
    sentAt?: DateTimeWithAggregatesFilter<"ParentNotification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ParentNotification"> | Date | string
  }

  export type PhoneBorrowWhereInput = {
    AND?: PhoneBorrowWhereInput | PhoneBorrowWhereInput[]
    OR?: PhoneBorrowWhereInput[]
    NOT?: PhoneBorrowWhereInput | PhoneBorrowWhereInput[]
    id?: IntFilter<"PhoneBorrow"> | number
    studentId?: IntFilter<"PhoneBorrow"> | number
    phoneModel?: StringFilter<"PhoneBorrow"> | string
    borrowedAt?: DateTimeFilter<"PhoneBorrow"> | Date | string
    returnedAt?: DateTimeNullableFilter<"PhoneBorrow"> | Date | string | null
    status?: EnumPhoneBorrowStatusFilter<"PhoneBorrow"> | $Enums.PhoneBorrowStatus
    createdAt?: DateTimeFilter<"PhoneBorrow"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneBorrow"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type PhoneBorrowOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    phoneModel?: SortOrder
    borrowedAt?: SortOrder
    returnedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type PhoneBorrowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhoneBorrowWhereInput | PhoneBorrowWhereInput[]
    OR?: PhoneBorrowWhereInput[]
    NOT?: PhoneBorrowWhereInput | PhoneBorrowWhereInput[]
    studentId?: IntFilter<"PhoneBorrow"> | number
    phoneModel?: StringFilter<"PhoneBorrow"> | string
    borrowedAt?: DateTimeFilter<"PhoneBorrow"> | Date | string
    returnedAt?: DateTimeNullableFilter<"PhoneBorrow"> | Date | string | null
    status?: EnumPhoneBorrowStatusFilter<"PhoneBorrow"> | $Enums.PhoneBorrowStatus
    createdAt?: DateTimeFilter<"PhoneBorrow"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneBorrow"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type PhoneBorrowOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    phoneModel?: SortOrder
    borrowedAt?: SortOrder
    returnedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhoneBorrowCountOrderByAggregateInput
    _avg?: PhoneBorrowAvgOrderByAggregateInput
    _max?: PhoneBorrowMaxOrderByAggregateInput
    _min?: PhoneBorrowMinOrderByAggregateInput
    _sum?: PhoneBorrowSumOrderByAggregateInput
  }

  export type PhoneBorrowScalarWhereWithAggregatesInput = {
    AND?: PhoneBorrowScalarWhereWithAggregatesInput | PhoneBorrowScalarWhereWithAggregatesInput[]
    OR?: PhoneBorrowScalarWhereWithAggregatesInput[]
    NOT?: PhoneBorrowScalarWhereWithAggregatesInput | PhoneBorrowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhoneBorrow"> | number
    studentId?: IntWithAggregatesFilter<"PhoneBorrow"> | number
    phoneModel?: StringWithAggregatesFilter<"PhoneBorrow"> | string
    borrowedAt?: DateTimeWithAggregatesFilter<"PhoneBorrow"> | Date | string
    returnedAt?: DateTimeNullableWithAggregatesFilter<"PhoneBorrow"> | Date | string | null
    status?: EnumPhoneBorrowStatusWithAggregatesFilter<"PhoneBorrow"> | $Enums.PhoneBorrowStatus
    createdAt?: DateTimeWithAggregatesFilter<"PhoneBorrow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhoneBorrow"> | Date | string
  }

  export type TermSessionWhereInput = {
    AND?: TermSessionWhereInput | TermSessionWhereInput[]
    OR?: TermSessionWhereInput[]
    NOT?: TermSessionWhereInput | TermSessionWhereInput[]
    id?: IntFilter<"TermSession"> | number
    name?: StringFilter<"TermSession"> | string
    year?: IntFilter<"TermSession"> | number
    startDate?: DateTimeFilter<"TermSession"> | Date | string
    endDate?: DateTimeFilter<"TermSession"> | Date | string
    openingDate?: DateTimeFilter<"TermSession"> | Date | string
    isActive?: BoolFilter<"TermSession"> | boolean
    status?: EnumTermStatusFilter<"TermSession"> | $Enums.TermStatus
    createdAt?: DateTimeFilter<"TermSession"> | Date | string
    updatedAt?: DateTimeFilter<"TermSession"> | Date | string
    attendances?: TermAttendanceListRelationFilter
  }

  export type TermSessionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    openingDate?: SortOrder
    isActive?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendances?: TermAttendanceOrderByRelationAggregateInput
  }

  export type TermSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_year?: TermSessionNameYearCompoundUniqueInput
    AND?: TermSessionWhereInput | TermSessionWhereInput[]
    OR?: TermSessionWhereInput[]
    NOT?: TermSessionWhereInput | TermSessionWhereInput[]
    name?: StringFilter<"TermSession"> | string
    year?: IntFilter<"TermSession"> | number
    startDate?: DateTimeFilter<"TermSession"> | Date | string
    endDate?: DateTimeFilter<"TermSession"> | Date | string
    openingDate?: DateTimeFilter<"TermSession"> | Date | string
    isActive?: BoolFilter<"TermSession"> | boolean
    status?: EnumTermStatusFilter<"TermSession"> | $Enums.TermStatus
    createdAt?: DateTimeFilter<"TermSession"> | Date | string
    updatedAt?: DateTimeFilter<"TermSession"> | Date | string
    attendances?: TermAttendanceListRelationFilter
  }, "id" | "name_year">

  export type TermSessionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    openingDate?: SortOrder
    isActive?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TermSessionCountOrderByAggregateInput
    _avg?: TermSessionAvgOrderByAggregateInput
    _max?: TermSessionMaxOrderByAggregateInput
    _min?: TermSessionMinOrderByAggregateInput
    _sum?: TermSessionSumOrderByAggregateInput
  }

  export type TermSessionScalarWhereWithAggregatesInput = {
    AND?: TermSessionScalarWhereWithAggregatesInput | TermSessionScalarWhereWithAggregatesInput[]
    OR?: TermSessionScalarWhereWithAggregatesInput[]
    NOT?: TermSessionScalarWhereWithAggregatesInput | TermSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TermSession"> | number
    name?: StringWithAggregatesFilter<"TermSession"> | string
    year?: IntWithAggregatesFilter<"TermSession"> | number
    startDate?: DateTimeWithAggregatesFilter<"TermSession"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"TermSession"> | Date | string
    openingDate?: DateTimeWithAggregatesFilter<"TermSession"> | Date | string
    isActive?: BoolWithAggregatesFilter<"TermSession"> | boolean
    status?: EnumTermStatusWithAggregatesFilter<"TermSession"> | $Enums.TermStatus
    createdAt?: DateTimeWithAggregatesFilter<"TermSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TermSession"> | Date | string
  }

  export type TermAttendanceWhereInput = {
    AND?: TermAttendanceWhereInput | TermAttendanceWhereInput[]
    OR?: TermAttendanceWhereInput[]
    NOT?: TermAttendanceWhereInput | TermAttendanceWhereInput[]
    id?: IntFilter<"TermAttendance"> | number
    termId?: IntFilter<"TermAttendance"> | number
    studentId?: IntFilter<"TermAttendance"> | number
    status?: EnumTermAttendanceStatusFilter<"TermAttendance"> | $Enums.TermAttendanceStatus
    arrivalTime?: DateTimeNullableFilter<"TermAttendance"> | Date | string | null
    recordedById?: IntNullableFilter<"TermAttendance"> | number | null
    createdAt?: DateTimeFilter<"TermAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"TermAttendance"> | Date | string
    recordedBy?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    term?: XOR<TermSessionScalarRelationFilter, TermSessionWhereInput>
  }

  export type TermAttendanceOrderByWithRelationInput = {
    id?: SortOrder
    termId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    arrivalTime?: SortOrderInput | SortOrder
    recordedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recordedBy?: StaffOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    term?: TermSessionOrderByWithRelationInput
  }

  export type TermAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    termId_studentId?: TermAttendanceTermIdStudentIdCompoundUniqueInput
    AND?: TermAttendanceWhereInput | TermAttendanceWhereInput[]
    OR?: TermAttendanceWhereInput[]
    NOT?: TermAttendanceWhereInput | TermAttendanceWhereInput[]
    termId?: IntFilter<"TermAttendance"> | number
    studentId?: IntFilter<"TermAttendance"> | number
    status?: EnumTermAttendanceStatusFilter<"TermAttendance"> | $Enums.TermAttendanceStatus
    arrivalTime?: DateTimeNullableFilter<"TermAttendance"> | Date | string | null
    recordedById?: IntNullableFilter<"TermAttendance"> | number | null
    createdAt?: DateTimeFilter<"TermAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"TermAttendance"> | Date | string
    recordedBy?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    term?: XOR<TermSessionScalarRelationFilter, TermSessionWhereInput>
  }, "id" | "termId_studentId">

  export type TermAttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    termId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    arrivalTime?: SortOrderInput | SortOrder
    recordedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TermAttendanceCountOrderByAggregateInput
    _avg?: TermAttendanceAvgOrderByAggregateInput
    _max?: TermAttendanceMaxOrderByAggregateInput
    _min?: TermAttendanceMinOrderByAggregateInput
    _sum?: TermAttendanceSumOrderByAggregateInput
  }

  export type TermAttendanceScalarWhereWithAggregatesInput = {
    AND?: TermAttendanceScalarWhereWithAggregatesInput | TermAttendanceScalarWhereWithAggregatesInput[]
    OR?: TermAttendanceScalarWhereWithAggregatesInput[]
    NOT?: TermAttendanceScalarWhereWithAggregatesInput | TermAttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TermAttendance"> | number
    termId?: IntWithAggregatesFilter<"TermAttendance"> | number
    studentId?: IntWithAggregatesFilter<"TermAttendance"> | number
    status?: EnumTermAttendanceStatusWithAggregatesFilter<"TermAttendance"> | $Enums.TermAttendanceStatus
    arrivalTime?: DateTimeNullableWithAggregatesFilter<"TermAttendance"> | Date | string | null
    recordedById?: IntNullableWithAggregatesFilter<"TermAttendance"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"TermAttendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TermAttendance"> | Date | string
  }

  export type StudentCreateInput = {
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordCreateNestedManyWithoutStudentInput
    transportAssignments?: TransportAssignmentCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordUncheckedCreateNestedManyWithoutStudentInput
    transportAssignments?: TransportAssignmentUncheckedCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationUncheckedCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowUncheckedCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUpdateManyWithoutStudentNestedInput
    transportAssignments?: TransportAssignmentUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUncheckedUpdateManyWithoutStudentNestedInput
    transportAssignments?: TransportAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUncheckedUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUncheckedUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.StaffRole
    permissions?: StaffCreatepermissionsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    termAttendances?: TermAttendanceCreateNestedManyWithoutRecordedByInput
  }

  export type StaffUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.StaffRole
    permissions?: StaffCreatepermissionsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    termAttendances?: TermAttendanceUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type StaffUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    permissions?: StaffUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termAttendances?: TermAttendanceUpdateManyWithoutRecordedByNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    permissions?: StaffUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termAttendances?: TermAttendanceUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type StaffCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.StaffRole
    permissions?: StaffCreatepermissionsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    permissions?: StaffUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    permissions?: StaffUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineRecordCreateInput = {
    reason: string
    location?: string | null
    status?: string
    outDate?: Date | string
    returnDate?: Date | string | null
    accompaniedBy?: string | null
    eventTheme?: string | null
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutRecordsInput
  }

  export type DisciplineRecordUncheckedCreateInput = {
    id?: number
    studentId: number
    reason: string
    location?: string | null
    status?: string
    outDate?: Date | string
    returnDate?: Date | string | null
    accompaniedBy?: string | null
    eventTheme?: string | null
    updatedAt?: Date | string
  }

  export type DisciplineRecordUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    outDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accompaniedBy?: NullableStringFieldUpdateOperationsInput | string | null
    eventTheme?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type DisciplineRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    outDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accompaniedBy?: NullableStringFieldUpdateOperationsInput | string | null
    eventTheme?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineRecordCreateManyInput = {
    id?: number
    studentId: number
    reason: string
    location?: string | null
    status?: string
    outDate?: Date | string
    returnDate?: Date | string | null
    accompaniedBy?: string | null
    eventTheme?: string | null
    updatedAt?: Date | string
  }

  export type DisciplineRecordUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    outDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accompaniedBy?: NullableStringFieldUpdateOperationsInput | string | null
    eventTheme?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    outDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accompaniedBy?: NullableStringFieldUpdateOperationsInput | string | null
    eventTheme?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportCreateInput = {
    location: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: TransportAssignmentCreateNestedManyWithoutTransportInput
  }

  export type TransportUncheckedCreateInput = {
    id?: number
    location: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: TransportAssignmentUncheckedCreateNestedManyWithoutTransportInput
  }

  export type TransportUpdateInput = {
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: TransportAssignmentUpdateManyWithoutTransportNestedInput
  }

  export type TransportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: TransportAssignmentUncheckedUpdateManyWithoutTransportNestedInput
  }

  export type TransportCreateManyInput = {
    id?: number
    location: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportUpdateManyMutationInput = {
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportAssignmentCreateInput = {
    status?: $Enums.TransportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutTransportAssignmentsInput
    transport: TransportCreateNestedOneWithoutAssignmentsInput
  }

  export type TransportAssignmentUncheckedCreateInput = {
    id?: number
    studentId: number
    transportId: number
    status?: $Enums.TransportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportAssignmentUpdateInput = {
    status?: EnumTransportStatusFieldUpdateOperationsInput | $Enums.TransportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutTransportAssignmentsNestedInput
    transport?: TransportUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type TransportAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    transportId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransportStatusFieldUpdateOperationsInput | $Enums.TransportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportAssignmentCreateManyInput = {
    id?: number
    studentId: number
    transportId: number
    status?: $Enums.TransportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportAssignmentUpdateManyMutationInput = {
    status?: EnumTransportStatusFieldUpdateOperationsInput | $Enums.TransportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    transportId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransportStatusFieldUpdateOperationsInput | $Enums.TransportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicTermCreateInput = {
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutTermInput
  }

  export type AcademicTermUncheckedCreateInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutTermInput
  }

  export type AcademicTermUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUpdateManyWithoutTermNestedInput
  }

  export type AcademicTermUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutTermNestedInput
  }

  export type AcademicTermCreateManyInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicTermUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicTermUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordCreateInput = {
    date: Date | string
    status?: $Enums.AttendanceStatus
    note?: string | null
    markedByStaffId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAttendanceRecordsInput
    term: AcademicTermCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceRecordUncheckedCreateInput = {
    id?: number
    studentId: number
    termId: number
    date: Date | string
    status?: $Enums.AttendanceStatus
    note?: string | null
    markedByStaffId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    markedByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAttendanceRecordsNestedInput
    term?: AcademicTermUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    termId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    markedByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordCreateManyInput = {
    id?: number
    studentId: number
    termId: number
    date: Date | string
    status?: $Enums.AttendanceStatus
    note?: string | null
    markedByStaffId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    markedByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    termId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    markedByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentNotificationCreateInput = {
    channel?: string
    phone: string
    message: string
    type: $Enums.ParentNotificationType
    status?: $Enums.NotificationStatus
    sentAt?: Date | string
    createdAt?: Date | string
    student: StudentCreateNestedOneWithoutParentNotificationsInput
  }

  export type ParentNotificationUncheckedCreateInput = {
    id?: number
    studentId: number
    channel?: string
    phone: string
    message: string
    type: $Enums.ParentNotificationType
    status?: $Enums.NotificationStatus
    sentAt?: Date | string
    createdAt?: Date | string
  }

  export type ParentNotificationUpdateInput = {
    channel?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumParentNotificationTypeFieldUpdateOperationsInput | $Enums.ParentNotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutParentNotificationsNestedInput
  }

  export type ParentNotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumParentNotificationTypeFieldUpdateOperationsInput | $Enums.ParentNotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentNotificationCreateManyInput = {
    id?: number
    studentId: number
    channel?: string
    phone: string
    message: string
    type: $Enums.ParentNotificationType
    status?: $Enums.NotificationStatus
    sentAt?: Date | string
    createdAt?: Date | string
  }

  export type ParentNotificationUpdateManyMutationInput = {
    channel?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumParentNotificationTypeFieldUpdateOperationsInput | $Enums.ParentNotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentNotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumParentNotificationTypeFieldUpdateOperationsInput | $Enums.ParentNotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneBorrowCreateInput = {
    phoneModel?: string
    borrowedAt?: Date | string
    returnedAt?: Date | string | null
    status?: $Enums.PhoneBorrowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutPhoneBorrowsInput
  }

  export type PhoneBorrowUncheckedCreateInput = {
    id?: number
    studentId: number
    phoneModel?: string
    borrowedAt?: Date | string
    returnedAt?: Date | string | null
    status?: $Enums.PhoneBorrowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneBorrowUpdateInput = {
    phoneModel?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPhoneBorrowStatusFieldUpdateOperationsInput | $Enums.PhoneBorrowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutPhoneBorrowsNestedInput
  }

  export type PhoneBorrowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    phoneModel?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPhoneBorrowStatusFieldUpdateOperationsInput | $Enums.PhoneBorrowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneBorrowCreateManyInput = {
    id?: number
    studentId: number
    phoneModel?: string
    borrowedAt?: Date | string
    returnedAt?: Date | string | null
    status?: $Enums.PhoneBorrowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneBorrowUpdateManyMutationInput = {
    phoneModel?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPhoneBorrowStatusFieldUpdateOperationsInput | $Enums.PhoneBorrowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneBorrowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    phoneModel?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPhoneBorrowStatusFieldUpdateOperationsInput | $Enums.PhoneBorrowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermSessionCreateInput = {
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    openingDate: Date | string
    isActive?: boolean
    status?: $Enums.TermStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: TermAttendanceCreateNestedManyWithoutTermInput
  }

  export type TermSessionUncheckedCreateInput = {
    id?: number
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    openingDate: Date | string
    isActive?: boolean
    status?: $Enums.TermStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: TermAttendanceUncheckedCreateNestedManyWithoutTermInput
  }

  export type TermSessionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTermStatusFieldUpdateOperationsInput | $Enums.TermStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: TermAttendanceUpdateManyWithoutTermNestedInput
  }

  export type TermSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTermStatusFieldUpdateOperationsInput | $Enums.TermStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: TermAttendanceUncheckedUpdateManyWithoutTermNestedInput
  }

  export type TermSessionCreateManyInput = {
    id?: number
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    openingDate: Date | string
    isActive?: boolean
    status?: $Enums.TermStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermSessionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTermStatusFieldUpdateOperationsInput | $Enums.TermStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTermStatusFieldUpdateOperationsInput | $Enums.TermStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermAttendanceCreateInput = {
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recordedBy?: StaffCreateNestedOneWithoutTermAttendancesInput
    student: StudentCreateNestedOneWithoutTermAttendancesInput
    term: TermSessionCreateNestedOneWithoutAttendancesInput
  }

  export type TermAttendanceUncheckedCreateInput = {
    id?: number
    termId: number
    studentId: number
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    recordedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermAttendanceUpdateInput = {
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StaffUpdateOneWithoutTermAttendancesNestedInput
    student?: StudentUpdateOneRequiredWithoutTermAttendancesNestedInput
    term?: TermSessionUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type TermAttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    termId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermAttendanceCreateManyInput = {
    id?: number
    termId: number
    studentId: number
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    recordedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermAttendanceUpdateManyMutationInput = {
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermAttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    termId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type DisciplineRecordListRelationFilter = {
    every?: DisciplineRecordWhereInput
    some?: DisciplineRecordWhereInput
    none?: DisciplineRecordWhereInput
  }

  export type TransportAssignmentListRelationFilter = {
    every?: TransportAssignmentWhereInput
    some?: TransportAssignmentWhereInput
    none?: TransportAssignmentWhereInput
  }

  export type AttendanceRecordListRelationFilter = {
    every?: AttendanceRecordWhereInput
    some?: AttendanceRecordWhereInput
    none?: AttendanceRecordWhereInput
  }

  export type ParentNotificationListRelationFilter = {
    every?: ParentNotificationWhereInput
    some?: ParentNotificationWhereInput
    none?: ParentNotificationWhereInput
  }

  export type PhoneBorrowListRelationFilter = {
    every?: PhoneBorrowWhereInput
    some?: PhoneBorrowWhereInput
    none?: PhoneBorrowWhereInput
  }

  export type TermAttendanceListRelationFilter = {
    every?: TermAttendanceWhereInput
    some?: TermAttendanceWhereInput
    none?: TermAttendanceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DisciplineRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransportAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhoneBorrowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TermAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    fatherPhoneNumber?: SortOrder
    motherPhoneNumber?: SortOrder
    year?: SortOrder
    classGroup?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    fatherPhoneNumber?: SortOrder
    motherPhoneNumber?: SortOrder
    year?: SortOrder
    classGroup?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fatherName?: SortOrder
    motherName?: SortOrder
    fatherPhoneNumber?: SortOrder
    motherPhoneNumber?: SortOrder
    year?: SortOrder
    classGroup?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type EnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type DisciplineRecordCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    reason?: SortOrder
    location?: SortOrder
    status?: SortOrder
    outDate?: SortOrder
    returnDate?: SortOrder
    accompaniedBy?: SortOrder
    eventTheme?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type DisciplineRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    reason?: SortOrder
    location?: SortOrder
    status?: SortOrder
    outDate?: SortOrder
    returnDate?: SortOrder
    accompaniedBy?: SortOrder
    eventTheme?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineRecordMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    reason?: SortOrder
    location?: SortOrder
    status?: SortOrder
    outDate?: SortOrder
    returnDate?: SortOrder
    accompaniedBy?: SortOrder
    eventTheme?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisciplineRecordSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TransportCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type TransportMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTransportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportStatus | EnumTransportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransportStatus[] | ListEnumTransportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportStatus[] | ListEnumTransportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportStatusFilter<$PrismaModel> | $Enums.TransportStatus
  }

  export type TransportScalarRelationFilter = {
    is?: TransportWhereInput
    isNot?: TransportWhereInput
  }

  export type TransportAssignmentStudentIdTransportIdCompoundUniqueInput = {
    studentId: number
    transportId: number
  }

  export type TransportAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    transportId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    transportId?: SortOrder
  }

  export type TransportAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    transportId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    transportId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    transportId?: SortOrder
  }

  export type EnumTransportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportStatus | EnumTransportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransportStatus[] | ListEnumTransportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportStatus[] | ListEnumTransportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransportStatusFilter<$PrismaModel>
    _max?: NestedEnumTransportStatusFilter<$PrismaModel>
  }

  export type AcademicTermCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicTermAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcademicTermMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicTermMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicTermSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
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

  export type AcademicTermScalarRelationFilter = {
    is?: AcademicTermWhereInput
    isNot?: AcademicTermWhereInput
  }

  export type AttendanceRecordStudentIdTermIdDateCompoundUniqueInput = {
    studentId: number
    termId: number
    date: Date | string
  }

  export type AttendanceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    termId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    markedByStaffId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    termId?: SortOrder
    markedByStaffId?: SortOrder
  }

  export type AttendanceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    termId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    markedByStaffId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    termId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    markedByStaffId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceRecordSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    termId?: SortOrder
    markedByStaffId?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
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

  export type EnumParentNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentNotificationType | EnumParentNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParentNotificationType[] | ListEnumParentNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentNotificationType[] | ListEnumParentNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParentNotificationTypeFilter<$PrismaModel> | $Enums.ParentNotificationType
  }

  export type EnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type ParentNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    channel?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ParentNotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type ParentNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    channel?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ParentNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    channel?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ParentNotificationSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type EnumParentNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentNotificationType | EnumParentNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParentNotificationType[] | ListEnumParentNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentNotificationType[] | ListEnumParentNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParentNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ParentNotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParentNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumParentNotificationTypeFilter<$PrismaModel>
  }

  export type EnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type EnumPhoneBorrowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneBorrowStatus | EnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhoneBorrowStatus[] | ListEnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhoneBorrowStatus[] | ListEnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhoneBorrowStatusFilter<$PrismaModel> | $Enums.PhoneBorrowStatus
  }

  export type PhoneBorrowCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    phoneModel?: SortOrder
    borrowedAt?: SortOrder
    returnedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneBorrowAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type PhoneBorrowMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    phoneModel?: SortOrder
    borrowedAt?: SortOrder
    returnedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneBorrowMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    phoneModel?: SortOrder
    borrowedAt?: SortOrder
    returnedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneBorrowSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type EnumPhoneBorrowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneBorrowStatus | EnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhoneBorrowStatus[] | ListEnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhoneBorrowStatus[] | ListEnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhoneBorrowStatusWithAggregatesFilter<$PrismaModel> | $Enums.PhoneBorrowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhoneBorrowStatusFilter<$PrismaModel>
    _max?: NestedEnumPhoneBorrowStatusFilter<$PrismaModel>
  }

  export type EnumTermStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TermStatus | EnumTermStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TermStatus[] | ListEnumTermStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TermStatus[] | ListEnumTermStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTermStatusFilter<$PrismaModel> | $Enums.TermStatus
  }

  export type TermSessionNameYearCompoundUniqueInput = {
    name: string
    year: number
  }

  export type TermSessionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    openingDate?: SortOrder
    isActive?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type TermSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    openingDate?: SortOrder
    isActive?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermSessionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    openingDate?: SortOrder
    isActive?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermSessionSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type EnumTermStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TermStatus | EnumTermStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TermStatus[] | ListEnumTermStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TermStatus[] | ListEnumTermStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTermStatusWithAggregatesFilter<$PrismaModel> | $Enums.TermStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermStatusFilter<$PrismaModel>
    _max?: NestedEnumTermStatusFilter<$PrismaModel>
  }

  export type EnumTermAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TermAttendanceStatus | EnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TermAttendanceStatus[] | ListEnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TermAttendanceStatus[] | ListEnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTermAttendanceStatusFilter<$PrismaModel> | $Enums.TermAttendanceStatus
  }

  export type StaffNullableScalarRelationFilter = {
    is?: StaffWhereInput | null
    isNot?: StaffWhereInput | null
  }

  export type TermSessionScalarRelationFilter = {
    is?: TermSessionWhereInput
    isNot?: TermSessionWhereInput
  }

  export type TermAttendanceTermIdStudentIdCompoundUniqueInput = {
    termId: number
    studentId: number
  }

  export type TermAttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    termId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    arrivalTime?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermAttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    termId?: SortOrder
    studentId?: SortOrder
    recordedById?: SortOrder
  }

  export type TermAttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    termId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    arrivalTime?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermAttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    termId?: SortOrder
    studentId?: SortOrder
    status?: SortOrder
    arrivalTime?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermAttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    termId?: SortOrder
    studentId?: SortOrder
    recordedById?: SortOrder
  }

  export type EnumTermAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TermAttendanceStatus | EnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TermAttendanceStatus[] | ListEnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TermAttendanceStatus[] | ListEnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTermAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.TermAttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumTermAttendanceStatusFilter<$PrismaModel>
  }

  export type DisciplineRecordCreateNestedManyWithoutStudentInput = {
    create?: XOR<DisciplineRecordCreateWithoutStudentInput, DisciplineRecordUncheckedCreateWithoutStudentInput> | DisciplineRecordCreateWithoutStudentInput[] | DisciplineRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DisciplineRecordCreateOrConnectWithoutStudentInput | DisciplineRecordCreateOrConnectWithoutStudentInput[]
    createMany?: DisciplineRecordCreateManyStudentInputEnvelope
    connect?: DisciplineRecordWhereUniqueInput | DisciplineRecordWhereUniqueInput[]
  }

  export type TransportAssignmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<TransportAssignmentCreateWithoutStudentInput, TransportAssignmentUncheckedCreateWithoutStudentInput> | TransportAssignmentCreateWithoutStudentInput[] | TransportAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TransportAssignmentCreateOrConnectWithoutStudentInput | TransportAssignmentCreateOrConnectWithoutStudentInput[]
    createMany?: TransportAssignmentCreateManyStudentInputEnvelope
    connect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
  }

  export type AttendanceRecordCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type ParentNotificationCreateNestedManyWithoutStudentInput = {
    create?: XOR<ParentNotificationCreateWithoutStudentInput, ParentNotificationUncheckedCreateWithoutStudentInput> | ParentNotificationCreateWithoutStudentInput[] | ParentNotificationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ParentNotificationCreateOrConnectWithoutStudentInput | ParentNotificationCreateOrConnectWithoutStudentInput[]
    createMany?: ParentNotificationCreateManyStudentInputEnvelope
    connect?: ParentNotificationWhereUniqueInput | ParentNotificationWhereUniqueInput[]
  }

  export type PhoneBorrowCreateNestedManyWithoutStudentInput = {
    create?: XOR<PhoneBorrowCreateWithoutStudentInput, PhoneBorrowUncheckedCreateWithoutStudentInput> | PhoneBorrowCreateWithoutStudentInput[] | PhoneBorrowUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PhoneBorrowCreateOrConnectWithoutStudentInput | PhoneBorrowCreateOrConnectWithoutStudentInput[]
    createMany?: PhoneBorrowCreateManyStudentInputEnvelope
    connect?: PhoneBorrowWhereUniqueInput | PhoneBorrowWhereUniqueInput[]
  }

  export type TermAttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<TermAttendanceCreateWithoutStudentInput, TermAttendanceUncheckedCreateWithoutStudentInput> | TermAttendanceCreateWithoutStudentInput[] | TermAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutStudentInput | TermAttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: TermAttendanceCreateManyStudentInputEnvelope
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
  }

  export type DisciplineRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<DisciplineRecordCreateWithoutStudentInput, DisciplineRecordUncheckedCreateWithoutStudentInput> | DisciplineRecordCreateWithoutStudentInput[] | DisciplineRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DisciplineRecordCreateOrConnectWithoutStudentInput | DisciplineRecordCreateOrConnectWithoutStudentInput[]
    createMany?: DisciplineRecordCreateManyStudentInputEnvelope
    connect?: DisciplineRecordWhereUniqueInput | DisciplineRecordWhereUniqueInput[]
  }

  export type TransportAssignmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<TransportAssignmentCreateWithoutStudentInput, TransportAssignmentUncheckedCreateWithoutStudentInput> | TransportAssignmentCreateWithoutStudentInput[] | TransportAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TransportAssignmentCreateOrConnectWithoutStudentInput | TransportAssignmentCreateOrConnectWithoutStudentInput[]
    createMany?: TransportAssignmentCreateManyStudentInputEnvelope
    connect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
  }

  export type AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type ParentNotificationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ParentNotificationCreateWithoutStudentInput, ParentNotificationUncheckedCreateWithoutStudentInput> | ParentNotificationCreateWithoutStudentInput[] | ParentNotificationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ParentNotificationCreateOrConnectWithoutStudentInput | ParentNotificationCreateOrConnectWithoutStudentInput[]
    createMany?: ParentNotificationCreateManyStudentInputEnvelope
    connect?: ParentNotificationWhereUniqueInput | ParentNotificationWhereUniqueInput[]
  }

  export type PhoneBorrowUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<PhoneBorrowCreateWithoutStudentInput, PhoneBorrowUncheckedCreateWithoutStudentInput> | PhoneBorrowCreateWithoutStudentInput[] | PhoneBorrowUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PhoneBorrowCreateOrConnectWithoutStudentInput | PhoneBorrowCreateOrConnectWithoutStudentInput[]
    createMany?: PhoneBorrowCreateManyStudentInputEnvelope
    connect?: PhoneBorrowWhereUniqueInput | PhoneBorrowWhereUniqueInput[]
  }

  export type TermAttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<TermAttendanceCreateWithoutStudentInput, TermAttendanceUncheckedCreateWithoutStudentInput> | TermAttendanceCreateWithoutStudentInput[] | TermAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutStudentInput | TermAttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: TermAttendanceCreateManyStudentInputEnvelope
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DisciplineRecordUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DisciplineRecordCreateWithoutStudentInput, DisciplineRecordUncheckedCreateWithoutStudentInput> | DisciplineRecordCreateWithoutStudentInput[] | DisciplineRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DisciplineRecordCreateOrConnectWithoutStudentInput | DisciplineRecordCreateOrConnectWithoutStudentInput[]
    upsert?: DisciplineRecordUpsertWithWhereUniqueWithoutStudentInput | DisciplineRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DisciplineRecordCreateManyStudentInputEnvelope
    set?: DisciplineRecordWhereUniqueInput | DisciplineRecordWhereUniqueInput[]
    disconnect?: DisciplineRecordWhereUniqueInput | DisciplineRecordWhereUniqueInput[]
    delete?: DisciplineRecordWhereUniqueInput | DisciplineRecordWhereUniqueInput[]
    connect?: DisciplineRecordWhereUniqueInput | DisciplineRecordWhereUniqueInput[]
    update?: DisciplineRecordUpdateWithWhereUniqueWithoutStudentInput | DisciplineRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DisciplineRecordUpdateManyWithWhereWithoutStudentInput | DisciplineRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DisciplineRecordScalarWhereInput | DisciplineRecordScalarWhereInput[]
  }

  export type TransportAssignmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TransportAssignmentCreateWithoutStudentInput, TransportAssignmentUncheckedCreateWithoutStudentInput> | TransportAssignmentCreateWithoutStudentInput[] | TransportAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TransportAssignmentCreateOrConnectWithoutStudentInput | TransportAssignmentCreateOrConnectWithoutStudentInput[]
    upsert?: TransportAssignmentUpsertWithWhereUniqueWithoutStudentInput | TransportAssignmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TransportAssignmentCreateManyStudentInputEnvelope
    set?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    disconnect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    delete?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    connect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    update?: TransportAssignmentUpdateWithWhereUniqueWithoutStudentInput | TransportAssignmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TransportAssignmentUpdateManyWithWhereWithoutStudentInput | TransportAssignmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TransportAssignmentScalarWhereInput | TransportAssignmentScalarWhereInput[]
  }

  export type AttendanceRecordUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput | AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput | AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutStudentInput | AttendanceRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type ParentNotificationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ParentNotificationCreateWithoutStudentInput, ParentNotificationUncheckedCreateWithoutStudentInput> | ParentNotificationCreateWithoutStudentInput[] | ParentNotificationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ParentNotificationCreateOrConnectWithoutStudentInput | ParentNotificationCreateOrConnectWithoutStudentInput[]
    upsert?: ParentNotificationUpsertWithWhereUniqueWithoutStudentInput | ParentNotificationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ParentNotificationCreateManyStudentInputEnvelope
    set?: ParentNotificationWhereUniqueInput | ParentNotificationWhereUniqueInput[]
    disconnect?: ParentNotificationWhereUniqueInput | ParentNotificationWhereUniqueInput[]
    delete?: ParentNotificationWhereUniqueInput | ParentNotificationWhereUniqueInput[]
    connect?: ParentNotificationWhereUniqueInput | ParentNotificationWhereUniqueInput[]
    update?: ParentNotificationUpdateWithWhereUniqueWithoutStudentInput | ParentNotificationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ParentNotificationUpdateManyWithWhereWithoutStudentInput | ParentNotificationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ParentNotificationScalarWhereInput | ParentNotificationScalarWhereInput[]
  }

  export type PhoneBorrowUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PhoneBorrowCreateWithoutStudentInput, PhoneBorrowUncheckedCreateWithoutStudentInput> | PhoneBorrowCreateWithoutStudentInput[] | PhoneBorrowUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PhoneBorrowCreateOrConnectWithoutStudentInput | PhoneBorrowCreateOrConnectWithoutStudentInput[]
    upsert?: PhoneBorrowUpsertWithWhereUniqueWithoutStudentInput | PhoneBorrowUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PhoneBorrowCreateManyStudentInputEnvelope
    set?: PhoneBorrowWhereUniqueInput | PhoneBorrowWhereUniqueInput[]
    disconnect?: PhoneBorrowWhereUniqueInput | PhoneBorrowWhereUniqueInput[]
    delete?: PhoneBorrowWhereUniqueInput | PhoneBorrowWhereUniqueInput[]
    connect?: PhoneBorrowWhereUniqueInput | PhoneBorrowWhereUniqueInput[]
    update?: PhoneBorrowUpdateWithWhereUniqueWithoutStudentInput | PhoneBorrowUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PhoneBorrowUpdateManyWithWhereWithoutStudentInput | PhoneBorrowUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PhoneBorrowScalarWhereInput | PhoneBorrowScalarWhereInput[]
  }

  export type TermAttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TermAttendanceCreateWithoutStudentInput, TermAttendanceUncheckedCreateWithoutStudentInput> | TermAttendanceCreateWithoutStudentInput[] | TermAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutStudentInput | TermAttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: TermAttendanceUpsertWithWhereUniqueWithoutStudentInput | TermAttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TermAttendanceCreateManyStudentInputEnvelope
    set?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    disconnect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    delete?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    update?: TermAttendanceUpdateWithWhereUniqueWithoutStudentInput | TermAttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TermAttendanceUpdateManyWithWhereWithoutStudentInput | TermAttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TermAttendanceScalarWhereInput | TermAttendanceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DisciplineRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DisciplineRecordCreateWithoutStudentInput, DisciplineRecordUncheckedCreateWithoutStudentInput> | DisciplineRecordCreateWithoutStudentInput[] | DisciplineRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DisciplineRecordCreateOrConnectWithoutStudentInput | DisciplineRecordCreateOrConnectWithoutStudentInput[]
    upsert?: DisciplineRecordUpsertWithWhereUniqueWithoutStudentInput | DisciplineRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DisciplineRecordCreateManyStudentInputEnvelope
    set?: DisciplineRecordWhereUniqueInput | DisciplineRecordWhereUniqueInput[]
    disconnect?: DisciplineRecordWhereUniqueInput | DisciplineRecordWhereUniqueInput[]
    delete?: DisciplineRecordWhereUniqueInput | DisciplineRecordWhereUniqueInput[]
    connect?: DisciplineRecordWhereUniqueInput | DisciplineRecordWhereUniqueInput[]
    update?: DisciplineRecordUpdateWithWhereUniqueWithoutStudentInput | DisciplineRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DisciplineRecordUpdateManyWithWhereWithoutStudentInput | DisciplineRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DisciplineRecordScalarWhereInput | DisciplineRecordScalarWhereInput[]
  }

  export type TransportAssignmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TransportAssignmentCreateWithoutStudentInput, TransportAssignmentUncheckedCreateWithoutStudentInput> | TransportAssignmentCreateWithoutStudentInput[] | TransportAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TransportAssignmentCreateOrConnectWithoutStudentInput | TransportAssignmentCreateOrConnectWithoutStudentInput[]
    upsert?: TransportAssignmentUpsertWithWhereUniqueWithoutStudentInput | TransportAssignmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TransportAssignmentCreateManyStudentInputEnvelope
    set?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    disconnect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    delete?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    connect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    update?: TransportAssignmentUpdateWithWhereUniqueWithoutStudentInput | TransportAssignmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TransportAssignmentUpdateManyWithWhereWithoutStudentInput | TransportAssignmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TransportAssignmentScalarWhereInput | TransportAssignmentScalarWhereInput[]
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput> | AttendanceRecordCreateWithoutStudentInput[] | AttendanceRecordUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutStudentInput | AttendanceRecordCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput | AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceRecordCreateManyStudentInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput | AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutStudentInput | AttendanceRecordUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type ParentNotificationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ParentNotificationCreateWithoutStudentInput, ParentNotificationUncheckedCreateWithoutStudentInput> | ParentNotificationCreateWithoutStudentInput[] | ParentNotificationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ParentNotificationCreateOrConnectWithoutStudentInput | ParentNotificationCreateOrConnectWithoutStudentInput[]
    upsert?: ParentNotificationUpsertWithWhereUniqueWithoutStudentInput | ParentNotificationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ParentNotificationCreateManyStudentInputEnvelope
    set?: ParentNotificationWhereUniqueInput | ParentNotificationWhereUniqueInput[]
    disconnect?: ParentNotificationWhereUniqueInput | ParentNotificationWhereUniqueInput[]
    delete?: ParentNotificationWhereUniqueInput | ParentNotificationWhereUniqueInput[]
    connect?: ParentNotificationWhereUniqueInput | ParentNotificationWhereUniqueInput[]
    update?: ParentNotificationUpdateWithWhereUniqueWithoutStudentInput | ParentNotificationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ParentNotificationUpdateManyWithWhereWithoutStudentInput | ParentNotificationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ParentNotificationScalarWhereInput | ParentNotificationScalarWhereInput[]
  }

  export type PhoneBorrowUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PhoneBorrowCreateWithoutStudentInput, PhoneBorrowUncheckedCreateWithoutStudentInput> | PhoneBorrowCreateWithoutStudentInput[] | PhoneBorrowUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PhoneBorrowCreateOrConnectWithoutStudentInput | PhoneBorrowCreateOrConnectWithoutStudentInput[]
    upsert?: PhoneBorrowUpsertWithWhereUniqueWithoutStudentInput | PhoneBorrowUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PhoneBorrowCreateManyStudentInputEnvelope
    set?: PhoneBorrowWhereUniqueInput | PhoneBorrowWhereUniqueInput[]
    disconnect?: PhoneBorrowWhereUniqueInput | PhoneBorrowWhereUniqueInput[]
    delete?: PhoneBorrowWhereUniqueInput | PhoneBorrowWhereUniqueInput[]
    connect?: PhoneBorrowWhereUniqueInput | PhoneBorrowWhereUniqueInput[]
    update?: PhoneBorrowUpdateWithWhereUniqueWithoutStudentInput | PhoneBorrowUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PhoneBorrowUpdateManyWithWhereWithoutStudentInput | PhoneBorrowUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PhoneBorrowScalarWhereInput | PhoneBorrowScalarWhereInput[]
  }

  export type TermAttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TermAttendanceCreateWithoutStudentInput, TermAttendanceUncheckedCreateWithoutStudentInput> | TermAttendanceCreateWithoutStudentInput[] | TermAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutStudentInput | TermAttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: TermAttendanceUpsertWithWhereUniqueWithoutStudentInput | TermAttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TermAttendanceCreateManyStudentInputEnvelope
    set?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    disconnect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    delete?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    update?: TermAttendanceUpdateWithWhereUniqueWithoutStudentInput | TermAttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TermAttendanceUpdateManyWithWhereWithoutStudentInput | TermAttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TermAttendanceScalarWhereInput | TermAttendanceScalarWhereInput[]
  }

  export type StaffCreatepermissionsInput = {
    set: string[]
  }

  export type TermAttendanceCreateNestedManyWithoutRecordedByInput = {
    create?: XOR<TermAttendanceCreateWithoutRecordedByInput, TermAttendanceUncheckedCreateWithoutRecordedByInput> | TermAttendanceCreateWithoutRecordedByInput[] | TermAttendanceUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutRecordedByInput | TermAttendanceCreateOrConnectWithoutRecordedByInput[]
    createMany?: TermAttendanceCreateManyRecordedByInputEnvelope
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
  }

  export type TermAttendanceUncheckedCreateNestedManyWithoutRecordedByInput = {
    create?: XOR<TermAttendanceCreateWithoutRecordedByInput, TermAttendanceUncheckedCreateWithoutRecordedByInput> | TermAttendanceCreateWithoutRecordedByInput[] | TermAttendanceUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutRecordedByInput | TermAttendanceCreateOrConnectWithoutRecordedByInput[]
    createMany?: TermAttendanceCreateManyRecordedByInputEnvelope
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
  }

  export type EnumStaffRoleFieldUpdateOperationsInput = {
    set?: $Enums.StaffRole
  }

  export type StaffUpdatepermissionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TermAttendanceUpdateManyWithoutRecordedByNestedInput = {
    create?: XOR<TermAttendanceCreateWithoutRecordedByInput, TermAttendanceUncheckedCreateWithoutRecordedByInput> | TermAttendanceCreateWithoutRecordedByInput[] | TermAttendanceUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutRecordedByInput | TermAttendanceCreateOrConnectWithoutRecordedByInput[]
    upsert?: TermAttendanceUpsertWithWhereUniqueWithoutRecordedByInput | TermAttendanceUpsertWithWhereUniqueWithoutRecordedByInput[]
    createMany?: TermAttendanceCreateManyRecordedByInputEnvelope
    set?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    disconnect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    delete?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    update?: TermAttendanceUpdateWithWhereUniqueWithoutRecordedByInput | TermAttendanceUpdateWithWhereUniqueWithoutRecordedByInput[]
    updateMany?: TermAttendanceUpdateManyWithWhereWithoutRecordedByInput | TermAttendanceUpdateManyWithWhereWithoutRecordedByInput[]
    deleteMany?: TermAttendanceScalarWhereInput | TermAttendanceScalarWhereInput[]
  }

  export type TermAttendanceUncheckedUpdateManyWithoutRecordedByNestedInput = {
    create?: XOR<TermAttendanceCreateWithoutRecordedByInput, TermAttendanceUncheckedCreateWithoutRecordedByInput> | TermAttendanceCreateWithoutRecordedByInput[] | TermAttendanceUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutRecordedByInput | TermAttendanceCreateOrConnectWithoutRecordedByInput[]
    upsert?: TermAttendanceUpsertWithWhereUniqueWithoutRecordedByInput | TermAttendanceUpsertWithWhereUniqueWithoutRecordedByInput[]
    createMany?: TermAttendanceCreateManyRecordedByInputEnvelope
    set?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    disconnect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    delete?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    update?: TermAttendanceUpdateWithWhereUniqueWithoutRecordedByInput | TermAttendanceUpdateWithWhereUniqueWithoutRecordedByInput[]
    updateMany?: TermAttendanceUpdateManyWithWhereWithoutRecordedByInput | TermAttendanceUpdateManyWithWhereWithoutRecordedByInput[]
    deleteMany?: TermAttendanceScalarWhereInput | TermAttendanceScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutRecordsInput = {
    create?: XOR<StudentCreateWithoutRecordsInput, StudentUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRecordsInput
    connect?: StudentWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<StudentCreateWithoutRecordsInput, StudentUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRecordsInput
    upsert?: StudentUpsertWithoutRecordsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutRecordsInput, StudentUpdateWithoutRecordsInput>, StudentUncheckedUpdateWithoutRecordsInput>
  }

  export type TransportAssignmentCreateNestedManyWithoutTransportInput = {
    create?: XOR<TransportAssignmentCreateWithoutTransportInput, TransportAssignmentUncheckedCreateWithoutTransportInput> | TransportAssignmentCreateWithoutTransportInput[] | TransportAssignmentUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: TransportAssignmentCreateOrConnectWithoutTransportInput | TransportAssignmentCreateOrConnectWithoutTransportInput[]
    createMany?: TransportAssignmentCreateManyTransportInputEnvelope
    connect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
  }

  export type TransportAssignmentUncheckedCreateNestedManyWithoutTransportInput = {
    create?: XOR<TransportAssignmentCreateWithoutTransportInput, TransportAssignmentUncheckedCreateWithoutTransportInput> | TransportAssignmentCreateWithoutTransportInput[] | TransportAssignmentUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: TransportAssignmentCreateOrConnectWithoutTransportInput | TransportAssignmentCreateOrConnectWithoutTransportInput[]
    createMany?: TransportAssignmentCreateManyTransportInputEnvelope
    connect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransportAssignmentUpdateManyWithoutTransportNestedInput = {
    create?: XOR<TransportAssignmentCreateWithoutTransportInput, TransportAssignmentUncheckedCreateWithoutTransportInput> | TransportAssignmentCreateWithoutTransportInput[] | TransportAssignmentUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: TransportAssignmentCreateOrConnectWithoutTransportInput | TransportAssignmentCreateOrConnectWithoutTransportInput[]
    upsert?: TransportAssignmentUpsertWithWhereUniqueWithoutTransportInput | TransportAssignmentUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: TransportAssignmentCreateManyTransportInputEnvelope
    set?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    disconnect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    delete?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    connect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    update?: TransportAssignmentUpdateWithWhereUniqueWithoutTransportInput | TransportAssignmentUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: TransportAssignmentUpdateManyWithWhereWithoutTransportInput | TransportAssignmentUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: TransportAssignmentScalarWhereInput | TransportAssignmentScalarWhereInput[]
  }

  export type TransportAssignmentUncheckedUpdateManyWithoutTransportNestedInput = {
    create?: XOR<TransportAssignmentCreateWithoutTransportInput, TransportAssignmentUncheckedCreateWithoutTransportInput> | TransportAssignmentCreateWithoutTransportInput[] | TransportAssignmentUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: TransportAssignmentCreateOrConnectWithoutTransportInput | TransportAssignmentCreateOrConnectWithoutTransportInput[]
    upsert?: TransportAssignmentUpsertWithWhereUniqueWithoutTransportInput | TransportAssignmentUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: TransportAssignmentCreateManyTransportInputEnvelope
    set?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    disconnect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    delete?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    connect?: TransportAssignmentWhereUniqueInput | TransportAssignmentWhereUniqueInput[]
    update?: TransportAssignmentUpdateWithWhereUniqueWithoutTransportInput | TransportAssignmentUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: TransportAssignmentUpdateManyWithWhereWithoutTransportInput | TransportAssignmentUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: TransportAssignmentScalarWhereInput | TransportAssignmentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutTransportAssignmentsInput = {
    create?: XOR<StudentCreateWithoutTransportAssignmentsInput, StudentUncheckedCreateWithoutTransportAssignmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutTransportAssignmentsInput
    connect?: StudentWhereUniqueInput
  }

  export type TransportCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<TransportCreateWithoutAssignmentsInput, TransportUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: TransportCreateOrConnectWithoutAssignmentsInput
    connect?: TransportWhereUniqueInput
  }

  export type EnumTransportStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransportStatus
  }

  export type StudentUpdateOneRequiredWithoutTransportAssignmentsNestedInput = {
    create?: XOR<StudentCreateWithoutTransportAssignmentsInput, StudentUncheckedCreateWithoutTransportAssignmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutTransportAssignmentsInput
    upsert?: StudentUpsertWithoutTransportAssignmentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutTransportAssignmentsInput, StudentUpdateWithoutTransportAssignmentsInput>, StudentUncheckedUpdateWithoutTransportAssignmentsInput>
  }

  export type TransportUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<TransportCreateWithoutAssignmentsInput, TransportUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: TransportCreateOrConnectWithoutAssignmentsInput
    upsert?: TransportUpsertWithoutAssignmentsInput
    connect?: TransportWhereUniqueInput
    update?: XOR<XOR<TransportUpdateToOneWithWhereWithoutAssignmentsInput, TransportUpdateWithoutAssignmentsInput>, TransportUncheckedUpdateWithoutAssignmentsInput>
  }

  export type AttendanceRecordCreateNestedManyWithoutTermInput = {
    create?: XOR<AttendanceRecordCreateWithoutTermInput, AttendanceRecordUncheckedCreateWithoutTermInput> | AttendanceRecordCreateWithoutTermInput[] | AttendanceRecordUncheckedCreateWithoutTermInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutTermInput | AttendanceRecordCreateOrConnectWithoutTermInput[]
    createMany?: AttendanceRecordCreateManyTermInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type AttendanceRecordUncheckedCreateNestedManyWithoutTermInput = {
    create?: XOR<AttendanceRecordCreateWithoutTermInput, AttendanceRecordUncheckedCreateWithoutTermInput> | AttendanceRecordCreateWithoutTermInput[] | AttendanceRecordUncheckedCreateWithoutTermInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutTermInput | AttendanceRecordCreateOrConnectWithoutTermInput[]
    createMany?: AttendanceRecordCreateManyTermInputEnvelope
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
  }

  export type AttendanceRecordUpdateManyWithoutTermNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutTermInput, AttendanceRecordUncheckedCreateWithoutTermInput> | AttendanceRecordCreateWithoutTermInput[] | AttendanceRecordUncheckedCreateWithoutTermInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutTermInput | AttendanceRecordCreateOrConnectWithoutTermInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutTermInput | AttendanceRecordUpsertWithWhereUniqueWithoutTermInput[]
    createMany?: AttendanceRecordCreateManyTermInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutTermInput | AttendanceRecordUpdateWithWhereUniqueWithoutTermInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutTermInput | AttendanceRecordUpdateManyWithWhereWithoutTermInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutTermNestedInput = {
    create?: XOR<AttendanceRecordCreateWithoutTermInput, AttendanceRecordUncheckedCreateWithoutTermInput> | AttendanceRecordCreateWithoutTermInput[] | AttendanceRecordUncheckedCreateWithoutTermInput[]
    connectOrCreate?: AttendanceRecordCreateOrConnectWithoutTermInput | AttendanceRecordCreateOrConnectWithoutTermInput[]
    upsert?: AttendanceRecordUpsertWithWhereUniqueWithoutTermInput | AttendanceRecordUpsertWithWhereUniqueWithoutTermInput[]
    createMany?: AttendanceRecordCreateManyTermInputEnvelope
    set?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    disconnect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    delete?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    connect?: AttendanceRecordWhereUniqueInput | AttendanceRecordWhereUniqueInput[]
    update?: AttendanceRecordUpdateWithWhereUniqueWithoutTermInput | AttendanceRecordUpdateWithWhereUniqueWithoutTermInput[]
    updateMany?: AttendanceRecordUpdateManyWithWhereWithoutTermInput | AttendanceRecordUpdateManyWithWhereWithoutTermInput[]
    deleteMany?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutAttendanceRecordsInput = {
    create?: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceRecordsInput
    connect?: StudentWhereUniqueInput
  }

  export type AcademicTermCreateNestedOneWithoutAttendanceRecordsInput = {
    create?: XOR<AcademicTermCreateWithoutAttendanceRecordsInput, AcademicTermUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: AcademicTermCreateOrConnectWithoutAttendanceRecordsInput
    connect?: AcademicTermWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneRequiredWithoutAttendanceRecordsNestedInput = {
    create?: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceRecordsInput
    upsert?: StudentUpsertWithoutAttendanceRecordsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendanceRecordsInput, StudentUpdateWithoutAttendanceRecordsInput>, StudentUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type AcademicTermUpdateOneRequiredWithoutAttendanceRecordsNestedInput = {
    create?: XOR<AcademicTermCreateWithoutAttendanceRecordsInput, AcademicTermUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: AcademicTermCreateOrConnectWithoutAttendanceRecordsInput
    upsert?: AcademicTermUpsertWithoutAttendanceRecordsInput
    connect?: AcademicTermWhereUniqueInput
    update?: XOR<XOR<AcademicTermUpdateToOneWithWhereWithoutAttendanceRecordsInput, AcademicTermUpdateWithoutAttendanceRecordsInput>, AcademicTermUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type StudentCreateNestedOneWithoutParentNotificationsInput = {
    create?: XOR<StudentCreateWithoutParentNotificationsInput, StudentUncheckedCreateWithoutParentNotificationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutParentNotificationsInput
    connect?: StudentWhereUniqueInput
  }

  export type EnumParentNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ParentNotificationType
  }

  export type EnumNotificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.NotificationStatus
  }

  export type StudentUpdateOneRequiredWithoutParentNotificationsNestedInput = {
    create?: XOR<StudentCreateWithoutParentNotificationsInput, StudentUncheckedCreateWithoutParentNotificationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutParentNotificationsInput
    upsert?: StudentUpsertWithoutParentNotificationsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutParentNotificationsInput, StudentUpdateWithoutParentNotificationsInput>, StudentUncheckedUpdateWithoutParentNotificationsInput>
  }

  export type StudentCreateNestedOneWithoutPhoneBorrowsInput = {
    create?: XOR<StudentCreateWithoutPhoneBorrowsInput, StudentUncheckedCreateWithoutPhoneBorrowsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPhoneBorrowsInput
    connect?: StudentWhereUniqueInput
  }

  export type EnumPhoneBorrowStatusFieldUpdateOperationsInput = {
    set?: $Enums.PhoneBorrowStatus
  }

  export type StudentUpdateOneRequiredWithoutPhoneBorrowsNestedInput = {
    create?: XOR<StudentCreateWithoutPhoneBorrowsInput, StudentUncheckedCreateWithoutPhoneBorrowsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPhoneBorrowsInput
    upsert?: StudentUpsertWithoutPhoneBorrowsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutPhoneBorrowsInput, StudentUpdateWithoutPhoneBorrowsInput>, StudentUncheckedUpdateWithoutPhoneBorrowsInput>
  }

  export type TermAttendanceCreateNestedManyWithoutTermInput = {
    create?: XOR<TermAttendanceCreateWithoutTermInput, TermAttendanceUncheckedCreateWithoutTermInput> | TermAttendanceCreateWithoutTermInput[] | TermAttendanceUncheckedCreateWithoutTermInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutTermInput | TermAttendanceCreateOrConnectWithoutTermInput[]
    createMany?: TermAttendanceCreateManyTermInputEnvelope
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
  }

  export type TermAttendanceUncheckedCreateNestedManyWithoutTermInput = {
    create?: XOR<TermAttendanceCreateWithoutTermInput, TermAttendanceUncheckedCreateWithoutTermInput> | TermAttendanceCreateWithoutTermInput[] | TermAttendanceUncheckedCreateWithoutTermInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutTermInput | TermAttendanceCreateOrConnectWithoutTermInput[]
    createMany?: TermAttendanceCreateManyTermInputEnvelope
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
  }

  export type EnumTermStatusFieldUpdateOperationsInput = {
    set?: $Enums.TermStatus
  }

  export type TermAttendanceUpdateManyWithoutTermNestedInput = {
    create?: XOR<TermAttendanceCreateWithoutTermInput, TermAttendanceUncheckedCreateWithoutTermInput> | TermAttendanceCreateWithoutTermInput[] | TermAttendanceUncheckedCreateWithoutTermInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutTermInput | TermAttendanceCreateOrConnectWithoutTermInput[]
    upsert?: TermAttendanceUpsertWithWhereUniqueWithoutTermInput | TermAttendanceUpsertWithWhereUniqueWithoutTermInput[]
    createMany?: TermAttendanceCreateManyTermInputEnvelope
    set?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    disconnect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    delete?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    update?: TermAttendanceUpdateWithWhereUniqueWithoutTermInput | TermAttendanceUpdateWithWhereUniqueWithoutTermInput[]
    updateMany?: TermAttendanceUpdateManyWithWhereWithoutTermInput | TermAttendanceUpdateManyWithWhereWithoutTermInput[]
    deleteMany?: TermAttendanceScalarWhereInput | TermAttendanceScalarWhereInput[]
  }

  export type TermAttendanceUncheckedUpdateManyWithoutTermNestedInput = {
    create?: XOR<TermAttendanceCreateWithoutTermInput, TermAttendanceUncheckedCreateWithoutTermInput> | TermAttendanceCreateWithoutTermInput[] | TermAttendanceUncheckedCreateWithoutTermInput[]
    connectOrCreate?: TermAttendanceCreateOrConnectWithoutTermInput | TermAttendanceCreateOrConnectWithoutTermInput[]
    upsert?: TermAttendanceUpsertWithWhereUniqueWithoutTermInput | TermAttendanceUpsertWithWhereUniqueWithoutTermInput[]
    createMany?: TermAttendanceCreateManyTermInputEnvelope
    set?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    disconnect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    delete?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    connect?: TermAttendanceWhereUniqueInput | TermAttendanceWhereUniqueInput[]
    update?: TermAttendanceUpdateWithWhereUniqueWithoutTermInput | TermAttendanceUpdateWithWhereUniqueWithoutTermInput[]
    updateMany?: TermAttendanceUpdateManyWithWhereWithoutTermInput | TermAttendanceUpdateManyWithWhereWithoutTermInput[]
    deleteMany?: TermAttendanceScalarWhereInput | TermAttendanceScalarWhereInput[]
  }

  export type StaffCreateNestedOneWithoutTermAttendancesInput = {
    create?: XOR<StaffCreateWithoutTermAttendancesInput, StaffUncheckedCreateWithoutTermAttendancesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutTermAttendancesInput
    connect?: StaffWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutTermAttendancesInput = {
    create?: XOR<StudentCreateWithoutTermAttendancesInput, StudentUncheckedCreateWithoutTermAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutTermAttendancesInput
    connect?: StudentWhereUniqueInput
  }

  export type TermSessionCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<TermSessionCreateWithoutAttendancesInput, TermSessionUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: TermSessionCreateOrConnectWithoutAttendancesInput
    connect?: TermSessionWhereUniqueInput
  }

  export type EnumTermAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.TermAttendanceStatus
  }

  export type StaffUpdateOneWithoutTermAttendancesNestedInput = {
    create?: XOR<StaffCreateWithoutTermAttendancesInput, StaffUncheckedCreateWithoutTermAttendancesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutTermAttendancesInput
    upsert?: StaffUpsertWithoutTermAttendancesInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutTermAttendancesInput, StaffUpdateWithoutTermAttendancesInput>, StaffUncheckedUpdateWithoutTermAttendancesInput>
  }

  export type StudentUpdateOneRequiredWithoutTermAttendancesNestedInput = {
    create?: XOR<StudentCreateWithoutTermAttendancesInput, StudentUncheckedCreateWithoutTermAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutTermAttendancesInput
    upsert?: StudentUpsertWithoutTermAttendancesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutTermAttendancesInput, StudentUpdateWithoutTermAttendancesInput>, StudentUncheckedUpdateWithoutTermAttendancesInput>
  }

  export type TermSessionUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<TermSessionCreateWithoutAttendancesInput, TermSessionUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: TermSessionCreateOrConnectWithoutAttendancesInput
    upsert?: TermSessionUpsertWithoutAttendancesInput
    connect?: TermSessionWhereUniqueInput
    update?: XOR<XOR<TermSessionUpdateToOneWithWhereWithoutAttendancesInput, TermSessionUpdateWithoutAttendancesInput>, TermSessionUncheckedUpdateWithoutAttendancesInput>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedEnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StaffRole[] | ListEnumStaffRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTransportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportStatus | EnumTransportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransportStatus[] | ListEnumTransportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportStatus[] | ListEnumTransportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportStatusFilter<$PrismaModel> | $Enums.TransportStatus
  }

  export type NestedEnumTransportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransportStatus | EnumTransportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransportStatus[] | ListEnumTransportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransportStatus[] | ListEnumTransportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransportStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransportStatusFilter<$PrismaModel>
    _max?: NestedEnumTransportStatusFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
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

  export type NestedEnumParentNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentNotificationType | EnumParentNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParentNotificationType[] | ListEnumParentNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentNotificationType[] | ListEnumParentNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParentNotificationTypeFilter<$PrismaModel> | $Enums.ParentNotificationType
  }

  export type NestedEnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NestedEnumParentNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentNotificationType | EnumParentNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParentNotificationType[] | ListEnumParentNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentNotificationType[] | ListEnumParentNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParentNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ParentNotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParentNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumParentNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumPhoneBorrowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneBorrowStatus | EnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhoneBorrowStatus[] | ListEnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhoneBorrowStatus[] | ListEnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhoneBorrowStatusFilter<$PrismaModel> | $Enums.PhoneBorrowStatus
  }

  export type NestedEnumPhoneBorrowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhoneBorrowStatus | EnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PhoneBorrowStatus[] | ListEnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PhoneBorrowStatus[] | ListEnumPhoneBorrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPhoneBorrowStatusWithAggregatesFilter<$PrismaModel> | $Enums.PhoneBorrowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPhoneBorrowStatusFilter<$PrismaModel>
    _max?: NestedEnumPhoneBorrowStatusFilter<$PrismaModel>
  }

  export type NestedEnumTermStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TermStatus | EnumTermStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TermStatus[] | ListEnumTermStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TermStatus[] | ListEnumTermStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTermStatusFilter<$PrismaModel> | $Enums.TermStatus
  }

  export type NestedEnumTermStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TermStatus | EnumTermStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TermStatus[] | ListEnumTermStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TermStatus[] | ListEnumTermStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTermStatusWithAggregatesFilter<$PrismaModel> | $Enums.TermStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermStatusFilter<$PrismaModel>
    _max?: NestedEnumTermStatusFilter<$PrismaModel>
  }

  export type NestedEnumTermAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TermAttendanceStatus | EnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TermAttendanceStatus[] | ListEnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TermAttendanceStatus[] | ListEnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTermAttendanceStatusFilter<$PrismaModel> | $Enums.TermAttendanceStatus
  }

  export type NestedEnumTermAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TermAttendanceStatus | EnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TermAttendanceStatus[] | ListEnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TermAttendanceStatus[] | ListEnumTermAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTermAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.TermAttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTermAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumTermAttendanceStatusFilter<$PrismaModel>
  }

  export type DisciplineRecordCreateWithoutStudentInput = {
    reason: string
    location?: string | null
    status?: string
    outDate?: Date | string
    returnDate?: Date | string | null
    accompaniedBy?: string | null
    eventTheme?: string | null
    updatedAt?: Date | string
  }

  export type DisciplineRecordUncheckedCreateWithoutStudentInput = {
    id?: number
    reason: string
    location?: string | null
    status?: string
    outDate?: Date | string
    returnDate?: Date | string | null
    accompaniedBy?: string | null
    eventTheme?: string | null
    updatedAt?: Date | string
  }

  export type DisciplineRecordCreateOrConnectWithoutStudentInput = {
    where: DisciplineRecordWhereUniqueInput
    create: XOR<DisciplineRecordCreateWithoutStudentInput, DisciplineRecordUncheckedCreateWithoutStudentInput>
  }

  export type DisciplineRecordCreateManyStudentInputEnvelope = {
    data: DisciplineRecordCreateManyStudentInput | DisciplineRecordCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type TransportAssignmentCreateWithoutStudentInput = {
    status?: $Enums.TransportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    transport: TransportCreateNestedOneWithoutAssignmentsInput
  }

  export type TransportAssignmentUncheckedCreateWithoutStudentInput = {
    id?: number
    transportId: number
    status?: $Enums.TransportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportAssignmentCreateOrConnectWithoutStudentInput = {
    where: TransportAssignmentWhereUniqueInput
    create: XOR<TransportAssignmentCreateWithoutStudentInput, TransportAssignmentUncheckedCreateWithoutStudentInput>
  }

  export type TransportAssignmentCreateManyStudentInputEnvelope = {
    data: TransportAssignmentCreateManyStudentInput | TransportAssignmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceRecordCreateWithoutStudentInput = {
    date: Date | string
    status?: $Enums.AttendanceStatus
    note?: string | null
    markedByStaffId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    term: AcademicTermCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceRecordUncheckedCreateWithoutStudentInput = {
    id?: number
    termId: number
    date: Date | string
    status?: $Enums.AttendanceStatus
    note?: string | null
    markedByStaffId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordCreateOrConnectWithoutStudentInput = {
    where: AttendanceRecordWhereUniqueInput
    create: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceRecordCreateManyStudentInputEnvelope = {
    data: AttendanceRecordCreateManyStudentInput | AttendanceRecordCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ParentNotificationCreateWithoutStudentInput = {
    channel?: string
    phone: string
    message: string
    type: $Enums.ParentNotificationType
    status?: $Enums.NotificationStatus
    sentAt?: Date | string
    createdAt?: Date | string
  }

  export type ParentNotificationUncheckedCreateWithoutStudentInput = {
    id?: number
    channel?: string
    phone: string
    message: string
    type: $Enums.ParentNotificationType
    status?: $Enums.NotificationStatus
    sentAt?: Date | string
    createdAt?: Date | string
  }

  export type ParentNotificationCreateOrConnectWithoutStudentInput = {
    where: ParentNotificationWhereUniqueInput
    create: XOR<ParentNotificationCreateWithoutStudentInput, ParentNotificationUncheckedCreateWithoutStudentInput>
  }

  export type ParentNotificationCreateManyStudentInputEnvelope = {
    data: ParentNotificationCreateManyStudentInput | ParentNotificationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type PhoneBorrowCreateWithoutStudentInput = {
    phoneModel?: string
    borrowedAt?: Date | string
    returnedAt?: Date | string | null
    status?: $Enums.PhoneBorrowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneBorrowUncheckedCreateWithoutStudentInput = {
    id?: number
    phoneModel?: string
    borrowedAt?: Date | string
    returnedAt?: Date | string | null
    status?: $Enums.PhoneBorrowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneBorrowCreateOrConnectWithoutStudentInput = {
    where: PhoneBorrowWhereUniqueInput
    create: XOR<PhoneBorrowCreateWithoutStudentInput, PhoneBorrowUncheckedCreateWithoutStudentInput>
  }

  export type PhoneBorrowCreateManyStudentInputEnvelope = {
    data: PhoneBorrowCreateManyStudentInput | PhoneBorrowCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type TermAttendanceCreateWithoutStudentInput = {
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recordedBy?: StaffCreateNestedOneWithoutTermAttendancesInput
    term: TermSessionCreateNestedOneWithoutAttendancesInput
  }

  export type TermAttendanceUncheckedCreateWithoutStudentInput = {
    id?: number
    termId: number
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    recordedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermAttendanceCreateOrConnectWithoutStudentInput = {
    where: TermAttendanceWhereUniqueInput
    create: XOR<TermAttendanceCreateWithoutStudentInput, TermAttendanceUncheckedCreateWithoutStudentInput>
  }

  export type TermAttendanceCreateManyStudentInputEnvelope = {
    data: TermAttendanceCreateManyStudentInput | TermAttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type DisciplineRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: DisciplineRecordWhereUniqueInput
    update: XOR<DisciplineRecordUpdateWithoutStudentInput, DisciplineRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<DisciplineRecordCreateWithoutStudentInput, DisciplineRecordUncheckedCreateWithoutStudentInput>
  }

  export type DisciplineRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: DisciplineRecordWhereUniqueInput
    data: XOR<DisciplineRecordUpdateWithoutStudentInput, DisciplineRecordUncheckedUpdateWithoutStudentInput>
  }

  export type DisciplineRecordUpdateManyWithWhereWithoutStudentInput = {
    where: DisciplineRecordScalarWhereInput
    data: XOR<DisciplineRecordUpdateManyMutationInput, DisciplineRecordUncheckedUpdateManyWithoutStudentInput>
  }

  export type DisciplineRecordScalarWhereInput = {
    AND?: DisciplineRecordScalarWhereInput | DisciplineRecordScalarWhereInput[]
    OR?: DisciplineRecordScalarWhereInput[]
    NOT?: DisciplineRecordScalarWhereInput | DisciplineRecordScalarWhereInput[]
    id?: IntFilter<"DisciplineRecord"> | number
    studentId?: IntFilter<"DisciplineRecord"> | number
    reason?: StringFilter<"DisciplineRecord"> | string
    location?: StringNullableFilter<"DisciplineRecord"> | string | null
    status?: StringFilter<"DisciplineRecord"> | string
    outDate?: DateTimeFilter<"DisciplineRecord"> | Date | string
    returnDate?: DateTimeNullableFilter<"DisciplineRecord"> | Date | string | null
    accompaniedBy?: StringNullableFilter<"DisciplineRecord"> | string | null
    eventTheme?: StringNullableFilter<"DisciplineRecord"> | string | null
    updatedAt?: DateTimeFilter<"DisciplineRecord"> | Date | string
  }

  export type TransportAssignmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: TransportAssignmentWhereUniqueInput
    update: XOR<TransportAssignmentUpdateWithoutStudentInput, TransportAssignmentUncheckedUpdateWithoutStudentInput>
    create: XOR<TransportAssignmentCreateWithoutStudentInput, TransportAssignmentUncheckedCreateWithoutStudentInput>
  }

  export type TransportAssignmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: TransportAssignmentWhereUniqueInput
    data: XOR<TransportAssignmentUpdateWithoutStudentInput, TransportAssignmentUncheckedUpdateWithoutStudentInput>
  }

  export type TransportAssignmentUpdateManyWithWhereWithoutStudentInput = {
    where: TransportAssignmentScalarWhereInput
    data: XOR<TransportAssignmentUpdateManyMutationInput, TransportAssignmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type TransportAssignmentScalarWhereInput = {
    AND?: TransportAssignmentScalarWhereInput | TransportAssignmentScalarWhereInput[]
    OR?: TransportAssignmentScalarWhereInput[]
    NOT?: TransportAssignmentScalarWhereInput | TransportAssignmentScalarWhereInput[]
    id?: IntFilter<"TransportAssignment"> | number
    studentId?: IntFilter<"TransportAssignment"> | number
    transportId?: IntFilter<"TransportAssignment"> | number
    status?: EnumTransportStatusFilter<"TransportAssignment"> | $Enums.TransportStatus
    createdAt?: DateTimeFilter<"TransportAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"TransportAssignment"> | Date | string
  }

  export type AttendanceRecordUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceRecordWhereUniqueInput
    update: XOR<AttendanceRecordUpdateWithoutStudentInput, AttendanceRecordUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceRecordCreateWithoutStudentInput, AttendanceRecordUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceRecordUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceRecordWhereUniqueInput
    data: XOR<AttendanceRecordUpdateWithoutStudentInput, AttendanceRecordUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceRecordUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceRecordScalarWhereInput
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceRecordScalarWhereInput = {
    AND?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    OR?: AttendanceRecordScalarWhereInput[]
    NOT?: AttendanceRecordScalarWhereInput | AttendanceRecordScalarWhereInput[]
    id?: IntFilter<"AttendanceRecord"> | number
    studentId?: IntFilter<"AttendanceRecord"> | number
    termId?: IntFilter<"AttendanceRecord"> | number
    date?: DateTimeFilter<"AttendanceRecord"> | Date | string
    status?: EnumAttendanceStatusFilter<"AttendanceRecord"> | $Enums.AttendanceStatus
    note?: StringNullableFilter<"AttendanceRecord"> | string | null
    markedByStaffId?: IntNullableFilter<"AttendanceRecord"> | number | null
    createdAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceRecord"> | Date | string
  }

  export type ParentNotificationUpsertWithWhereUniqueWithoutStudentInput = {
    where: ParentNotificationWhereUniqueInput
    update: XOR<ParentNotificationUpdateWithoutStudentInput, ParentNotificationUncheckedUpdateWithoutStudentInput>
    create: XOR<ParentNotificationCreateWithoutStudentInput, ParentNotificationUncheckedCreateWithoutStudentInput>
  }

  export type ParentNotificationUpdateWithWhereUniqueWithoutStudentInput = {
    where: ParentNotificationWhereUniqueInput
    data: XOR<ParentNotificationUpdateWithoutStudentInput, ParentNotificationUncheckedUpdateWithoutStudentInput>
  }

  export type ParentNotificationUpdateManyWithWhereWithoutStudentInput = {
    where: ParentNotificationScalarWhereInput
    data: XOR<ParentNotificationUpdateManyMutationInput, ParentNotificationUncheckedUpdateManyWithoutStudentInput>
  }

  export type ParentNotificationScalarWhereInput = {
    AND?: ParentNotificationScalarWhereInput | ParentNotificationScalarWhereInput[]
    OR?: ParentNotificationScalarWhereInput[]
    NOT?: ParentNotificationScalarWhereInput | ParentNotificationScalarWhereInput[]
    id?: IntFilter<"ParentNotification"> | number
    studentId?: IntFilter<"ParentNotification"> | number
    channel?: StringFilter<"ParentNotification"> | string
    phone?: StringFilter<"ParentNotification"> | string
    message?: StringFilter<"ParentNotification"> | string
    type?: EnumParentNotificationTypeFilter<"ParentNotification"> | $Enums.ParentNotificationType
    status?: EnumNotificationStatusFilter<"ParentNotification"> | $Enums.NotificationStatus
    sentAt?: DateTimeFilter<"ParentNotification"> | Date | string
    createdAt?: DateTimeFilter<"ParentNotification"> | Date | string
  }

  export type PhoneBorrowUpsertWithWhereUniqueWithoutStudentInput = {
    where: PhoneBorrowWhereUniqueInput
    update: XOR<PhoneBorrowUpdateWithoutStudentInput, PhoneBorrowUncheckedUpdateWithoutStudentInput>
    create: XOR<PhoneBorrowCreateWithoutStudentInput, PhoneBorrowUncheckedCreateWithoutStudentInput>
  }

  export type PhoneBorrowUpdateWithWhereUniqueWithoutStudentInput = {
    where: PhoneBorrowWhereUniqueInput
    data: XOR<PhoneBorrowUpdateWithoutStudentInput, PhoneBorrowUncheckedUpdateWithoutStudentInput>
  }

  export type PhoneBorrowUpdateManyWithWhereWithoutStudentInput = {
    where: PhoneBorrowScalarWhereInput
    data: XOR<PhoneBorrowUpdateManyMutationInput, PhoneBorrowUncheckedUpdateManyWithoutStudentInput>
  }

  export type PhoneBorrowScalarWhereInput = {
    AND?: PhoneBorrowScalarWhereInput | PhoneBorrowScalarWhereInput[]
    OR?: PhoneBorrowScalarWhereInput[]
    NOT?: PhoneBorrowScalarWhereInput | PhoneBorrowScalarWhereInput[]
    id?: IntFilter<"PhoneBorrow"> | number
    studentId?: IntFilter<"PhoneBorrow"> | number
    phoneModel?: StringFilter<"PhoneBorrow"> | string
    borrowedAt?: DateTimeFilter<"PhoneBorrow"> | Date | string
    returnedAt?: DateTimeNullableFilter<"PhoneBorrow"> | Date | string | null
    status?: EnumPhoneBorrowStatusFilter<"PhoneBorrow"> | $Enums.PhoneBorrowStatus
    createdAt?: DateTimeFilter<"PhoneBorrow"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneBorrow"> | Date | string
  }

  export type TermAttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: TermAttendanceWhereUniqueInput
    update: XOR<TermAttendanceUpdateWithoutStudentInput, TermAttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<TermAttendanceCreateWithoutStudentInput, TermAttendanceUncheckedCreateWithoutStudentInput>
  }

  export type TermAttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: TermAttendanceWhereUniqueInput
    data: XOR<TermAttendanceUpdateWithoutStudentInput, TermAttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type TermAttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: TermAttendanceScalarWhereInput
    data: XOR<TermAttendanceUpdateManyMutationInput, TermAttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type TermAttendanceScalarWhereInput = {
    AND?: TermAttendanceScalarWhereInput | TermAttendanceScalarWhereInput[]
    OR?: TermAttendanceScalarWhereInput[]
    NOT?: TermAttendanceScalarWhereInput | TermAttendanceScalarWhereInput[]
    id?: IntFilter<"TermAttendance"> | number
    termId?: IntFilter<"TermAttendance"> | number
    studentId?: IntFilter<"TermAttendance"> | number
    status?: EnumTermAttendanceStatusFilter<"TermAttendance"> | $Enums.TermAttendanceStatus
    arrivalTime?: DateTimeNullableFilter<"TermAttendance"> | Date | string | null
    recordedById?: IntNullableFilter<"TermAttendance"> | number | null
    createdAt?: DateTimeFilter<"TermAttendance"> | Date | string
    updatedAt?: DateTimeFilter<"TermAttendance"> | Date | string
  }

  export type TermAttendanceCreateWithoutRecordedByInput = {
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutTermAttendancesInput
    term: TermSessionCreateNestedOneWithoutAttendancesInput
  }

  export type TermAttendanceUncheckedCreateWithoutRecordedByInput = {
    id?: number
    termId: number
    studentId: number
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermAttendanceCreateOrConnectWithoutRecordedByInput = {
    where: TermAttendanceWhereUniqueInput
    create: XOR<TermAttendanceCreateWithoutRecordedByInput, TermAttendanceUncheckedCreateWithoutRecordedByInput>
  }

  export type TermAttendanceCreateManyRecordedByInputEnvelope = {
    data: TermAttendanceCreateManyRecordedByInput | TermAttendanceCreateManyRecordedByInput[]
    skipDuplicates?: boolean
  }

  export type TermAttendanceUpsertWithWhereUniqueWithoutRecordedByInput = {
    where: TermAttendanceWhereUniqueInput
    update: XOR<TermAttendanceUpdateWithoutRecordedByInput, TermAttendanceUncheckedUpdateWithoutRecordedByInput>
    create: XOR<TermAttendanceCreateWithoutRecordedByInput, TermAttendanceUncheckedCreateWithoutRecordedByInput>
  }

  export type TermAttendanceUpdateWithWhereUniqueWithoutRecordedByInput = {
    where: TermAttendanceWhereUniqueInput
    data: XOR<TermAttendanceUpdateWithoutRecordedByInput, TermAttendanceUncheckedUpdateWithoutRecordedByInput>
  }

  export type TermAttendanceUpdateManyWithWhereWithoutRecordedByInput = {
    where: TermAttendanceScalarWhereInput
    data: XOR<TermAttendanceUpdateManyMutationInput, TermAttendanceUncheckedUpdateManyWithoutRecordedByInput>
  }

  export type StudentCreateWithoutRecordsInput = {
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    transportAssignments?: TransportAssignmentCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutRecordsInput = {
    id?: number
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    transportAssignments?: TransportAssignmentUncheckedCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationUncheckedCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowUncheckedCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutRecordsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutRecordsInput, StudentUncheckedCreateWithoutRecordsInput>
  }

  export type StudentUpsertWithoutRecordsInput = {
    update: XOR<StudentUpdateWithoutRecordsInput, StudentUncheckedUpdateWithoutRecordsInput>
    create: XOR<StudentCreateWithoutRecordsInput, StudentUncheckedCreateWithoutRecordsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutRecordsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutRecordsInput, StudentUncheckedUpdateWithoutRecordsInput>
  }

  export type StudentUpdateWithoutRecordsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportAssignments?: TransportAssignmentUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transportAssignments?: TransportAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUncheckedUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUncheckedUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TransportAssignmentCreateWithoutTransportInput = {
    status?: $Enums.TransportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutTransportAssignmentsInput
  }

  export type TransportAssignmentUncheckedCreateWithoutTransportInput = {
    id?: number
    studentId: number
    status?: $Enums.TransportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportAssignmentCreateOrConnectWithoutTransportInput = {
    where: TransportAssignmentWhereUniqueInput
    create: XOR<TransportAssignmentCreateWithoutTransportInput, TransportAssignmentUncheckedCreateWithoutTransportInput>
  }

  export type TransportAssignmentCreateManyTransportInputEnvelope = {
    data: TransportAssignmentCreateManyTransportInput | TransportAssignmentCreateManyTransportInput[]
    skipDuplicates?: boolean
  }

  export type TransportAssignmentUpsertWithWhereUniqueWithoutTransportInput = {
    where: TransportAssignmentWhereUniqueInput
    update: XOR<TransportAssignmentUpdateWithoutTransportInput, TransportAssignmentUncheckedUpdateWithoutTransportInput>
    create: XOR<TransportAssignmentCreateWithoutTransportInput, TransportAssignmentUncheckedCreateWithoutTransportInput>
  }

  export type TransportAssignmentUpdateWithWhereUniqueWithoutTransportInput = {
    where: TransportAssignmentWhereUniqueInput
    data: XOR<TransportAssignmentUpdateWithoutTransportInput, TransportAssignmentUncheckedUpdateWithoutTransportInput>
  }

  export type TransportAssignmentUpdateManyWithWhereWithoutTransportInput = {
    where: TransportAssignmentScalarWhereInput
    data: XOR<TransportAssignmentUpdateManyMutationInput, TransportAssignmentUncheckedUpdateManyWithoutTransportInput>
  }

  export type StudentCreateWithoutTransportAssignmentsInput = {
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutTransportAssignmentsInput = {
    id?: number
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordUncheckedCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationUncheckedCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowUncheckedCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutTransportAssignmentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutTransportAssignmentsInput, StudentUncheckedCreateWithoutTransportAssignmentsInput>
  }

  export type TransportCreateWithoutAssignmentsInput = {
    location: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    location: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportCreateOrConnectWithoutAssignmentsInput = {
    where: TransportWhereUniqueInput
    create: XOR<TransportCreateWithoutAssignmentsInput, TransportUncheckedCreateWithoutAssignmentsInput>
  }

  export type StudentUpsertWithoutTransportAssignmentsInput = {
    update: XOR<StudentUpdateWithoutTransportAssignmentsInput, StudentUncheckedUpdateWithoutTransportAssignmentsInput>
    create: XOR<StudentCreateWithoutTransportAssignmentsInput, StudentUncheckedCreateWithoutTransportAssignmentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutTransportAssignmentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutTransportAssignmentsInput, StudentUncheckedUpdateWithoutTransportAssignmentsInput>
  }

  export type StudentUpdateWithoutTransportAssignmentsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutTransportAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUncheckedUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUncheckedUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUncheckedUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TransportUpsertWithoutAssignmentsInput = {
    update: XOR<TransportUpdateWithoutAssignmentsInput, TransportUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<TransportCreateWithoutAssignmentsInput, TransportUncheckedCreateWithoutAssignmentsInput>
    where?: TransportWhereInput
  }

  export type TransportUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: TransportWhereInput
    data: XOR<TransportUpdateWithoutAssignmentsInput, TransportUncheckedUpdateWithoutAssignmentsInput>
  }

  export type TransportUpdateWithoutAssignmentsInput = {
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordCreateWithoutTermInput = {
    date: Date | string
    status?: $Enums.AttendanceStatus
    note?: string | null
    markedByStaffId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceRecordUncheckedCreateWithoutTermInput = {
    id?: number
    studentId: number
    date: Date | string
    status?: $Enums.AttendanceStatus
    note?: string | null
    markedByStaffId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordCreateOrConnectWithoutTermInput = {
    where: AttendanceRecordWhereUniqueInput
    create: XOR<AttendanceRecordCreateWithoutTermInput, AttendanceRecordUncheckedCreateWithoutTermInput>
  }

  export type AttendanceRecordCreateManyTermInputEnvelope = {
    data: AttendanceRecordCreateManyTermInput | AttendanceRecordCreateManyTermInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceRecordUpsertWithWhereUniqueWithoutTermInput = {
    where: AttendanceRecordWhereUniqueInput
    update: XOR<AttendanceRecordUpdateWithoutTermInput, AttendanceRecordUncheckedUpdateWithoutTermInput>
    create: XOR<AttendanceRecordCreateWithoutTermInput, AttendanceRecordUncheckedCreateWithoutTermInput>
  }

  export type AttendanceRecordUpdateWithWhereUniqueWithoutTermInput = {
    where: AttendanceRecordWhereUniqueInput
    data: XOR<AttendanceRecordUpdateWithoutTermInput, AttendanceRecordUncheckedUpdateWithoutTermInput>
  }

  export type AttendanceRecordUpdateManyWithWhereWithoutTermInput = {
    where: AttendanceRecordScalarWhereInput
    data: XOR<AttendanceRecordUpdateManyMutationInput, AttendanceRecordUncheckedUpdateManyWithoutTermInput>
  }

  export type StudentCreateWithoutAttendanceRecordsInput = {
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordCreateNestedManyWithoutStudentInput
    transportAssignments?: TransportAssignmentCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAttendanceRecordsInput = {
    id?: number
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordUncheckedCreateNestedManyWithoutStudentInput
    transportAssignments?: TransportAssignmentUncheckedCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationUncheckedCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowUncheckedCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttendanceRecordsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
  }

  export type AcademicTermCreateWithoutAttendanceRecordsInput = {
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicTermUncheckedCreateWithoutAttendanceRecordsInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicTermCreateOrConnectWithoutAttendanceRecordsInput = {
    where: AcademicTermWhereUniqueInput
    create: XOR<AcademicTermCreateWithoutAttendanceRecordsInput, AcademicTermUncheckedCreateWithoutAttendanceRecordsInput>
  }

  export type StudentUpsertWithoutAttendanceRecordsInput = {
    update: XOR<StudentUpdateWithoutAttendanceRecordsInput, StudentUncheckedUpdateWithoutAttendanceRecordsInput>
    create: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendanceRecordsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendanceRecordsInput, StudentUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type StudentUpdateWithoutAttendanceRecordsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUpdateManyWithoutStudentNestedInput
    transportAssignments?: TransportAssignmentUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendanceRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUncheckedUpdateManyWithoutStudentNestedInput
    transportAssignments?: TransportAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUncheckedUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUncheckedUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AcademicTermUpsertWithoutAttendanceRecordsInput = {
    update: XOR<AcademicTermUpdateWithoutAttendanceRecordsInput, AcademicTermUncheckedUpdateWithoutAttendanceRecordsInput>
    create: XOR<AcademicTermCreateWithoutAttendanceRecordsInput, AcademicTermUncheckedCreateWithoutAttendanceRecordsInput>
    where?: AcademicTermWhereInput
  }

  export type AcademicTermUpdateToOneWithWhereWithoutAttendanceRecordsInput = {
    where?: AcademicTermWhereInput
    data: XOR<AcademicTermUpdateWithoutAttendanceRecordsInput, AcademicTermUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type AcademicTermUpdateWithoutAttendanceRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicTermUncheckedUpdateWithoutAttendanceRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateWithoutParentNotificationsInput = {
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordCreateNestedManyWithoutStudentInput
    transportAssignments?: TransportAssignmentCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutParentNotificationsInput = {
    id?: number
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordUncheckedCreateNestedManyWithoutStudentInput
    transportAssignments?: TransportAssignmentUncheckedCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowUncheckedCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutParentNotificationsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutParentNotificationsInput, StudentUncheckedCreateWithoutParentNotificationsInput>
  }

  export type StudentUpsertWithoutParentNotificationsInput = {
    update: XOR<StudentUpdateWithoutParentNotificationsInput, StudentUncheckedUpdateWithoutParentNotificationsInput>
    create: XOR<StudentCreateWithoutParentNotificationsInput, StudentUncheckedCreateWithoutParentNotificationsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutParentNotificationsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutParentNotificationsInput, StudentUncheckedUpdateWithoutParentNotificationsInput>
  }

  export type StudentUpdateWithoutParentNotificationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUpdateManyWithoutStudentNestedInput
    transportAssignments?: TransportAssignmentUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutParentNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUncheckedUpdateManyWithoutStudentNestedInput
    transportAssignments?: TransportAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUncheckedUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutPhoneBorrowsInput = {
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordCreateNestedManyWithoutStudentInput
    transportAssignments?: TransportAssignmentCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutPhoneBorrowsInput = {
    id?: number
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordUncheckedCreateNestedManyWithoutStudentInput
    transportAssignments?: TransportAssignmentUncheckedCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationUncheckedCreateNestedManyWithoutStudentInput
    termAttendances?: TermAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutPhoneBorrowsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutPhoneBorrowsInput, StudentUncheckedCreateWithoutPhoneBorrowsInput>
  }

  export type StudentUpsertWithoutPhoneBorrowsInput = {
    update: XOR<StudentUpdateWithoutPhoneBorrowsInput, StudentUncheckedUpdateWithoutPhoneBorrowsInput>
    create: XOR<StudentCreateWithoutPhoneBorrowsInput, StudentUncheckedCreateWithoutPhoneBorrowsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutPhoneBorrowsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutPhoneBorrowsInput, StudentUncheckedUpdateWithoutPhoneBorrowsInput>
  }

  export type StudentUpdateWithoutPhoneBorrowsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUpdateManyWithoutStudentNestedInput
    transportAssignments?: TransportAssignmentUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutPhoneBorrowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUncheckedUpdateManyWithoutStudentNestedInput
    transportAssignments?: TransportAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUncheckedUpdateManyWithoutStudentNestedInput
    termAttendances?: TermAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TermAttendanceCreateWithoutTermInput = {
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recordedBy?: StaffCreateNestedOneWithoutTermAttendancesInput
    student: StudentCreateNestedOneWithoutTermAttendancesInput
  }

  export type TermAttendanceUncheckedCreateWithoutTermInput = {
    id?: number
    studentId: number
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    recordedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermAttendanceCreateOrConnectWithoutTermInput = {
    where: TermAttendanceWhereUniqueInput
    create: XOR<TermAttendanceCreateWithoutTermInput, TermAttendanceUncheckedCreateWithoutTermInput>
  }

  export type TermAttendanceCreateManyTermInputEnvelope = {
    data: TermAttendanceCreateManyTermInput | TermAttendanceCreateManyTermInput[]
    skipDuplicates?: boolean
  }

  export type TermAttendanceUpsertWithWhereUniqueWithoutTermInput = {
    where: TermAttendanceWhereUniqueInput
    update: XOR<TermAttendanceUpdateWithoutTermInput, TermAttendanceUncheckedUpdateWithoutTermInput>
    create: XOR<TermAttendanceCreateWithoutTermInput, TermAttendanceUncheckedCreateWithoutTermInput>
  }

  export type TermAttendanceUpdateWithWhereUniqueWithoutTermInput = {
    where: TermAttendanceWhereUniqueInput
    data: XOR<TermAttendanceUpdateWithoutTermInput, TermAttendanceUncheckedUpdateWithoutTermInput>
  }

  export type TermAttendanceUpdateManyWithWhereWithoutTermInput = {
    where: TermAttendanceScalarWhereInput
    data: XOR<TermAttendanceUpdateManyMutationInput, TermAttendanceUncheckedUpdateManyWithoutTermInput>
  }

  export type StaffCreateWithoutTermAttendancesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.StaffRole
    permissions?: StaffCreatepermissionsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffUncheckedCreateWithoutTermAttendancesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phoneNumber: string
    role?: $Enums.StaffRole
    permissions?: StaffCreatepermissionsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffCreateOrConnectWithoutTermAttendancesInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutTermAttendancesInput, StaffUncheckedCreateWithoutTermAttendancesInput>
  }

  export type StudentCreateWithoutTermAttendancesInput = {
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordCreateNestedManyWithoutStudentInput
    transportAssignments?: TransportAssignmentCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutTermAttendancesInput = {
    id?: number
    firstName: string
    lastName: string
    fatherName: string
    motherName: string
    fatherPhoneNumber: string
    motherPhoneNumber: string
    year: string
    classGroup: string
    location?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: DisciplineRecordUncheckedCreateNestedManyWithoutStudentInput
    transportAssignments?: TransportAssignmentUncheckedCreateNestedManyWithoutStudentInput
    attendanceRecords?: AttendanceRecordUncheckedCreateNestedManyWithoutStudentInput
    parentNotifications?: ParentNotificationUncheckedCreateNestedManyWithoutStudentInput
    phoneBorrows?: PhoneBorrowUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutTermAttendancesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutTermAttendancesInput, StudentUncheckedCreateWithoutTermAttendancesInput>
  }

  export type TermSessionCreateWithoutAttendancesInput = {
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    openingDate: Date | string
    isActive?: boolean
    status?: $Enums.TermStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermSessionUncheckedCreateWithoutAttendancesInput = {
    id?: number
    name: string
    year: number
    startDate: Date | string
    endDate: Date | string
    openingDate: Date | string
    isActive?: boolean
    status?: $Enums.TermStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermSessionCreateOrConnectWithoutAttendancesInput = {
    where: TermSessionWhereUniqueInput
    create: XOR<TermSessionCreateWithoutAttendancesInput, TermSessionUncheckedCreateWithoutAttendancesInput>
  }

  export type StaffUpsertWithoutTermAttendancesInput = {
    update: XOR<StaffUpdateWithoutTermAttendancesInput, StaffUncheckedUpdateWithoutTermAttendancesInput>
    create: XOR<StaffCreateWithoutTermAttendancesInput, StaffUncheckedCreateWithoutTermAttendancesInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutTermAttendancesInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutTermAttendancesInput, StaffUncheckedUpdateWithoutTermAttendancesInput>
  }

  export type StaffUpdateWithoutTermAttendancesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    permissions?: StaffUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateWithoutTermAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    permissions?: StaffUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpsertWithoutTermAttendancesInput = {
    update: XOR<StudentUpdateWithoutTermAttendancesInput, StudentUncheckedUpdateWithoutTermAttendancesInput>
    create: XOR<StudentCreateWithoutTermAttendancesInput, StudentUncheckedCreateWithoutTermAttendancesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutTermAttendancesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutTermAttendancesInput, StudentUncheckedUpdateWithoutTermAttendancesInput>
  }

  export type StudentUpdateWithoutTermAttendancesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUpdateManyWithoutStudentNestedInput
    transportAssignments?: TransportAssignmentUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutTermAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    fatherPhoneNumber?: StringFieldUpdateOperationsInput | string
    motherPhoneNumber?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    classGroup?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: DisciplineRecordUncheckedUpdateManyWithoutStudentNestedInput
    transportAssignments?: TransportAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    attendanceRecords?: AttendanceRecordUncheckedUpdateManyWithoutStudentNestedInput
    parentNotifications?: ParentNotificationUncheckedUpdateManyWithoutStudentNestedInput
    phoneBorrows?: PhoneBorrowUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TermSessionUpsertWithoutAttendancesInput = {
    update: XOR<TermSessionUpdateWithoutAttendancesInput, TermSessionUncheckedUpdateWithoutAttendancesInput>
    create: XOR<TermSessionCreateWithoutAttendancesInput, TermSessionUncheckedCreateWithoutAttendancesInput>
    where?: TermSessionWhereInput
  }

  export type TermSessionUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: TermSessionWhereInput
    data: XOR<TermSessionUpdateWithoutAttendancesInput, TermSessionUncheckedUpdateWithoutAttendancesInput>
  }

  export type TermSessionUpdateWithoutAttendancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTermStatusFieldUpdateOperationsInput | $Enums.TermStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermSessionUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    openingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumTermStatusFieldUpdateOperationsInput | $Enums.TermStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineRecordCreateManyStudentInput = {
    id?: number
    reason: string
    location?: string | null
    status?: string
    outDate?: Date | string
    returnDate?: Date | string | null
    accompaniedBy?: string | null
    eventTheme?: string | null
    updatedAt?: Date | string
  }

  export type TransportAssignmentCreateManyStudentInput = {
    id?: number
    transportId: number
    status?: $Enums.TransportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordCreateManyStudentInput = {
    id?: number
    termId: number
    date: Date | string
    status?: $Enums.AttendanceStatus
    note?: string | null
    markedByStaffId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParentNotificationCreateManyStudentInput = {
    id?: number
    channel?: string
    phone: string
    message: string
    type: $Enums.ParentNotificationType
    status?: $Enums.NotificationStatus
    sentAt?: Date | string
    createdAt?: Date | string
  }

  export type PhoneBorrowCreateManyStudentInput = {
    id?: number
    phoneModel?: string
    borrowedAt?: Date | string
    returnedAt?: Date | string | null
    status?: $Enums.PhoneBorrowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermAttendanceCreateManyStudentInput = {
    id?: number
    termId: number
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    recordedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisciplineRecordUpdateWithoutStudentInput = {
    reason?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    outDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accompaniedBy?: NullableStringFieldUpdateOperationsInput | string | null
    eventTheme?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineRecordUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    outDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accompaniedBy?: NullableStringFieldUpdateOperationsInput | string | null
    eventTheme?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplineRecordUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    outDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accompaniedBy?: NullableStringFieldUpdateOperationsInput | string | null
    eventTheme?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportAssignmentUpdateWithoutStudentInput = {
    status?: EnumTransportStatusFieldUpdateOperationsInput | $Enums.TransportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transport?: TransportUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type TransportAssignmentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransportStatusFieldUpdateOperationsInput | $Enums.TransportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportAssignmentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    transportId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransportStatusFieldUpdateOperationsInput | $Enums.TransportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUpdateWithoutStudentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    markedByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    term?: AcademicTermUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceRecordUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    termId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    markedByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    termId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    markedByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentNotificationUpdateWithoutStudentInput = {
    channel?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumParentNotificationTypeFieldUpdateOperationsInput | $Enums.ParentNotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentNotificationUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumParentNotificationTypeFieldUpdateOperationsInput | $Enums.ParentNotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentNotificationUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumParentNotificationTypeFieldUpdateOperationsInput | $Enums.ParentNotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneBorrowUpdateWithoutStudentInput = {
    phoneModel?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPhoneBorrowStatusFieldUpdateOperationsInput | $Enums.PhoneBorrowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneBorrowUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    phoneModel?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPhoneBorrowStatusFieldUpdateOperationsInput | $Enums.PhoneBorrowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneBorrowUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    phoneModel?: StringFieldUpdateOperationsInput | string
    borrowedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumPhoneBorrowStatusFieldUpdateOperationsInput | $Enums.PhoneBorrowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermAttendanceUpdateWithoutStudentInput = {
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StaffUpdateOneWithoutTermAttendancesNestedInput
    term?: TermSessionUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type TermAttendanceUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    termId?: IntFieldUpdateOperationsInput | number
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermAttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    termId?: IntFieldUpdateOperationsInput | number
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermAttendanceCreateManyRecordedByInput = {
    id?: number
    termId: number
    studentId: number
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermAttendanceUpdateWithoutRecordedByInput = {
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutTermAttendancesNestedInput
    term?: TermSessionUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type TermAttendanceUncheckedUpdateWithoutRecordedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    termId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermAttendanceUncheckedUpdateManyWithoutRecordedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    termId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportAssignmentCreateManyTransportInput = {
    id?: number
    studentId: number
    status?: $Enums.TransportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportAssignmentUpdateWithoutTransportInput = {
    status?: EnumTransportStatusFieldUpdateOperationsInput | $Enums.TransportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutTransportAssignmentsNestedInput
  }

  export type TransportAssignmentUncheckedUpdateWithoutTransportInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransportStatusFieldUpdateOperationsInput | $Enums.TransportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportAssignmentUncheckedUpdateManyWithoutTransportInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransportStatusFieldUpdateOperationsInput | $Enums.TransportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordCreateManyTermInput = {
    id?: number
    studentId: number
    date: Date | string
    status?: $Enums.AttendanceStatus
    note?: string | null
    markedByStaffId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceRecordUpdateWithoutTermInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    markedByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceRecordUncheckedUpdateWithoutTermInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    markedByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceRecordUncheckedUpdateManyWithoutTermInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    markedByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermAttendanceCreateManyTermInput = {
    id?: number
    studentId: number
    status?: $Enums.TermAttendanceStatus
    arrivalTime?: Date | string | null
    recordedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermAttendanceUpdateWithoutTermInput = {
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: StaffUpdateOneWithoutTermAttendancesNestedInput
    student?: StudentUpdateOneRequiredWithoutTermAttendancesNestedInput
  }

  export type TermAttendanceUncheckedUpdateWithoutTermInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermAttendanceUncheckedUpdateManyWithoutTermInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: EnumTermAttendanceStatusFieldUpdateOperationsInput | $Enums.TermAttendanceStatus
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recordedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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