
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
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model UserFavorite
 * 
 */
export type UserFavorite = $Result.DefaultSelection<Prisma.$UserFavoritePayload>
/**
 * Model UserSearchHistory
 * 
 */
export type UserSearchHistory = $Result.DefaultSelection<Prisma.$UserSearchHistoryPayload>
/**
 * Model UserProductClick
 * 
 */
export type UserProductClick = $Result.DefaultSelection<Prisma.$UserProductClickPayload>
/**
 * Model CategoryProducts
 * 
 */
export type CategoryProducts = $Result.DefaultSelection<Prisma.$CategoryProductsPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductVariation
 * 
 */
export type ProductVariation = $Result.DefaultSelection<Prisma.$ProductVariationPayload>
/**
 * Model productVariationImages
 * 
 */
export type productVariationImages = $Result.DefaultSelection<Prisma.$productVariationImagesPayload>
/**
 * Model ReviewProduct
 * 
 */
export type ReviewProduct = $Result.DefaultSelection<Prisma.$ReviewProductPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PersonalData
 * 
 */
export type PersonalData = $Result.DefaultSelection<Prisma.$PersonalDataPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more CartItems
 * const cartItems = await prisma.cartItem.findMany()
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
   * // Fetch zero or more CartItems
   * const cartItems = await prisma.cartItem.findMany()
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
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFavorite`: Exposes CRUD operations for the **UserFavorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFavorites
    * const userFavorites = await prisma.userFavorite.findMany()
    * ```
    */
  get userFavorite(): Prisma.UserFavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSearchHistory`: Exposes CRUD operations for the **UserSearchHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSearchHistories
    * const userSearchHistories = await prisma.userSearchHistory.findMany()
    * ```
    */
  get userSearchHistory(): Prisma.UserSearchHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProductClick`: Exposes CRUD operations for the **UserProductClick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProductClicks
    * const userProductClicks = await prisma.userProductClick.findMany()
    * ```
    */
  get userProductClick(): Prisma.UserProductClickDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryProducts`: Exposes CRUD operations for the **CategoryProducts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryProducts
    * const categoryProducts = await prisma.categoryProducts.findMany()
    * ```
    */
  get categoryProducts(): Prisma.CategoryProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariation`: Exposes CRUD operations for the **ProductVariation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariations
    * const productVariations = await prisma.productVariation.findMany()
    * ```
    */
  get productVariation(): Prisma.ProductVariationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productVariationImages`: Exposes CRUD operations for the **productVariationImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariationImages
    * const productVariationImages = await prisma.productVariationImages.findMany()
    * ```
    */
  get productVariationImages(): Prisma.productVariationImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewProduct`: Exposes CRUD operations for the **ReviewProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewProducts
    * const reviewProducts = await prisma.reviewProduct.findMany()
    * ```
    */
  get reviewProduct(): Prisma.ReviewProductDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalData`: Exposes CRUD operations for the **PersonalData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalData
    * const personalData = await prisma.personalData.findMany()
    * ```
    */
  get personalData(): Prisma.PersonalDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;
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
    CartItem: 'CartItem',
    UserFavorite: 'UserFavorite',
    UserSearchHistory: 'UserSearchHistory',
    UserProductClick: 'UserProductClick',
    CategoryProducts: 'CategoryProducts',
    Brand: 'Brand',
    Product: 'Product',
    ProductVariation: 'ProductVariation',
    productVariationImages: 'productVariationImages',
    ReviewProduct: 'ReviewProduct',
    Profile: 'Profile',
    User: 'User',
    PersonalData: 'PersonalData',
    Address: 'Address'
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
      modelProps: "cartItem" | "userFavorite" | "userSearchHistory" | "userProductClick" | "categoryProducts" | "brand" | "product" | "productVariation" | "productVariationImages" | "reviewProduct" | "profile" | "user" | "personalData" | "address"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      UserFavorite: {
        payload: Prisma.$UserFavoritePayload<ExtArgs>
        fields: Prisma.UserFavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          findFirst: {
            args: Prisma.UserFavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          findMany: {
            args: Prisma.UserFavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>[]
          }
          create: {
            args: Prisma.UserFavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          createMany: {
            args: Prisma.UserFavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>[]
          }
          delete: {
            args: Prisma.UserFavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          update: {
            args: Prisma.UserFavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          deleteMany: {
            args: Prisma.UserFavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>[]
          }
          upsert: {
            args: Prisma.UserFavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavoritePayload>
          }
          aggregate: {
            args: Prisma.UserFavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFavorite>
          }
          groupBy: {
            args: Prisma.UserFavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<UserFavoriteCountAggregateOutputType> | number
          }
        }
      }
      UserSearchHistory: {
        payload: Prisma.$UserSearchHistoryPayload<ExtArgs>
        fields: Prisma.UserSearchHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSearchHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSearchHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchHistoryPayload>
          }
          findFirst: {
            args: Prisma.UserSearchHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSearchHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchHistoryPayload>
          }
          findMany: {
            args: Prisma.UserSearchHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchHistoryPayload>[]
          }
          create: {
            args: Prisma.UserSearchHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchHistoryPayload>
          }
          createMany: {
            args: Prisma.UserSearchHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSearchHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchHistoryPayload>[]
          }
          delete: {
            args: Prisma.UserSearchHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchHistoryPayload>
          }
          update: {
            args: Prisma.UserSearchHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchHistoryPayload>
          }
          deleteMany: {
            args: Prisma.UserSearchHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSearchHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSearchHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchHistoryPayload>[]
          }
          upsert: {
            args: Prisma.UserSearchHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSearchHistoryPayload>
          }
          aggregate: {
            args: Prisma.UserSearchHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSearchHistory>
          }
          groupBy: {
            args: Prisma.UserSearchHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSearchHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSearchHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserSearchHistoryCountAggregateOutputType> | number
          }
        }
      }
      UserProductClick: {
        payload: Prisma.$UserProductClickPayload<ExtArgs>
        fields: Prisma.UserProductClickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProductClickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductClickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProductClickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductClickPayload>
          }
          findFirst: {
            args: Prisma.UserProductClickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductClickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProductClickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductClickPayload>
          }
          findMany: {
            args: Prisma.UserProductClickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductClickPayload>[]
          }
          create: {
            args: Prisma.UserProductClickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductClickPayload>
          }
          createMany: {
            args: Prisma.UserProductClickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProductClickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductClickPayload>[]
          }
          delete: {
            args: Prisma.UserProductClickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductClickPayload>
          }
          update: {
            args: Prisma.UserProductClickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductClickPayload>
          }
          deleteMany: {
            args: Prisma.UserProductClickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProductClickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProductClickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductClickPayload>[]
          }
          upsert: {
            args: Prisma.UserProductClickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductClickPayload>
          }
          aggregate: {
            args: Prisma.UserProductClickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProductClick>
          }
          groupBy: {
            args: Prisma.UserProductClickGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProductClickGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProductClickCountArgs<ExtArgs>
            result: $Utils.Optional<UserProductClickCountAggregateOutputType> | number
          }
        }
      }
      CategoryProducts: {
        payload: Prisma.$CategoryProductsPayload<ExtArgs>
        fields: Prisma.CategoryProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryProductsPayload>
          }
          findFirst: {
            args: Prisma.CategoryProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryProductsPayload>
          }
          findMany: {
            args: Prisma.CategoryProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryProductsPayload>[]
          }
          create: {
            args: Prisma.CategoryProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryProductsPayload>
          }
          createMany: {
            args: Prisma.CategoryProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryProductsPayload>[]
          }
          delete: {
            args: Prisma.CategoryProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryProductsPayload>
          }
          update: {
            args: Prisma.CategoryProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryProductsPayload>
          }
          deleteMany: {
            args: Prisma.CategoryProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryProductsPayload>[]
          }
          upsert: {
            args: Prisma.CategoryProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryProductsPayload>
          }
          aggregate: {
            args: Prisma.CategoryProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryProducts>
          }
          groupBy: {
            args: Prisma.CategoryProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryProductsCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryProductsCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductVariation: {
        payload: Prisma.$ProductVariationPayload<ExtArgs>
        fields: Prisma.ProductVariationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariationPayload>
          }
          findFirst: {
            args: Prisma.ProductVariationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariationPayload>
          }
          findMany: {
            args: Prisma.ProductVariationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariationPayload>[]
          }
          create: {
            args: Prisma.ProductVariationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariationPayload>
          }
          createMany: {
            args: Prisma.ProductVariationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariationPayload>[]
          }
          delete: {
            args: Prisma.ProductVariationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariationPayload>
          }
          update: {
            args: Prisma.ProductVariationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariationPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductVariationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariationPayload>[]
          }
          upsert: {
            args: Prisma.ProductVariationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariationPayload>
          }
          aggregate: {
            args: Prisma.ProductVariationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariation>
          }
          groupBy: {
            args: Prisma.ProductVariationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariationCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariationCountAggregateOutputType> | number
          }
        }
      }
      productVariationImages: {
        payload: Prisma.$productVariationImagesPayload<ExtArgs>
        fields: Prisma.productVariationImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productVariationImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productVariationImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productVariationImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productVariationImagesPayload>
          }
          findFirst: {
            args: Prisma.productVariationImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productVariationImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productVariationImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productVariationImagesPayload>
          }
          findMany: {
            args: Prisma.productVariationImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productVariationImagesPayload>[]
          }
          create: {
            args: Prisma.productVariationImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productVariationImagesPayload>
          }
          createMany: {
            args: Prisma.productVariationImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productVariationImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productVariationImagesPayload>[]
          }
          delete: {
            args: Prisma.productVariationImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productVariationImagesPayload>
          }
          update: {
            args: Prisma.productVariationImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productVariationImagesPayload>
          }
          deleteMany: {
            args: Prisma.productVariationImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productVariationImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productVariationImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productVariationImagesPayload>[]
          }
          upsert: {
            args: Prisma.productVariationImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productVariationImagesPayload>
          }
          aggregate: {
            args: Prisma.ProductVariationImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariationImages>
          }
          groupBy: {
            args: Prisma.productVariationImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariationImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.productVariationImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariationImagesCountAggregateOutputType> | number
          }
        }
      }
      ReviewProduct: {
        payload: Prisma.$ReviewProductPayload<ExtArgs>
        fields: Prisma.ReviewProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewProductPayload>
          }
          findFirst: {
            args: Prisma.ReviewProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewProductPayload>
          }
          findMany: {
            args: Prisma.ReviewProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewProductPayload>[]
          }
          create: {
            args: Prisma.ReviewProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewProductPayload>
          }
          createMany: {
            args: Prisma.ReviewProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewProductPayload>[]
          }
          delete: {
            args: Prisma.ReviewProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewProductPayload>
          }
          update: {
            args: Prisma.ReviewProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewProductPayload>
          }
          deleteMany: {
            args: Prisma.ReviewProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewProductPayload>[]
          }
          upsert: {
            args: Prisma.ReviewProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewProductPayload>
          }
          aggregate: {
            args: Prisma.ReviewProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewProduct>
          }
          groupBy: {
            args: Prisma.ReviewProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewProductCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewProductCountAggregateOutputType> | number
          }
        }
      }
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
      PersonalData: {
        payload: Prisma.$PersonalDataPayload<ExtArgs>
        fields: Prisma.PersonalDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDataPayload>
          }
          findFirst: {
            args: Prisma.PersonalDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDataPayload>
          }
          findMany: {
            args: Prisma.PersonalDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDataPayload>[]
          }
          create: {
            args: Prisma.PersonalDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDataPayload>
          }
          createMany: {
            args: Prisma.PersonalDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDataPayload>[]
          }
          delete: {
            args: Prisma.PersonalDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDataPayload>
          }
          update: {
            args: Prisma.PersonalDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDataPayload>
          }
          deleteMany: {
            args: Prisma.PersonalDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDataPayload>[]
          }
          upsert: {
            args: Prisma.PersonalDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDataPayload>
          }
          aggregate: {
            args: Prisma.PersonalDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalData>
          }
          groupBy: {
            args: Prisma.PersonalDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalDataCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalDataCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
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
    cartItem?: CartItemOmit
    userFavorite?: UserFavoriteOmit
    userSearchHistory?: UserSearchHistoryOmit
    userProductClick?: UserProductClickOmit
    categoryProducts?: CategoryProductsOmit
    brand?: BrandOmit
    product?: ProductOmit
    productVariation?: ProductVariationOmit
    productVariationImages?: productVariationImagesOmit
    reviewProduct?: ReviewProductOmit
    profile?: ProfileOmit
    user?: UserOmit
    personalData?: PersonalDataOmit
    address?: AddressOmit
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
   * Count Type CategoryProductsCountOutputType
   */

  export type CategoryProductsCountOutputType = {
    Product: number
  }

  export type CategoryProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | CategoryProductsCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryProductsCountOutputType without action
   */
  export type CategoryProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProductsCountOutputType
     */
    select?: CategoryProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryProductsCountOutputType without action
   */
  export type CategoryProductsCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    Product: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | BrandCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    ProductVariation: number
    UserFavorite: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductVariation?: boolean | ProductCountOutputTypeCountProductVariationArgs
    UserFavorite?: boolean | ProductCountOutputTypeCountUserFavoriteArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductVariationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariationWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountUserFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
  }


  /**
   * Count Type ProductVariationCountOutputType
   */

  export type ProductVariationCountOutputType = {
    ReviewProduct: number
    productVariationImages: number
    CartItem: number
  }

  export type ProductVariationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReviewProduct?: boolean | ProductVariationCountOutputTypeCountReviewProductArgs
    productVariationImages?: boolean | ProductVariationCountOutputTypeCountProductVariationImagesArgs
    CartItem?: boolean | ProductVariationCountOutputTypeCountCartItemArgs
  }

  // Custom InputTypes
  /**
   * ProductVariationCountOutputType without action
   */
  export type ProductVariationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariationCountOutputType
     */
    select?: ProductVariationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariationCountOutputType without action
   */
  export type ProductVariationCountOutputTypeCountReviewProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewProductWhereInput
  }

  /**
   * ProductVariationCountOutputType without action
   */
  export type ProductVariationCountOutputTypeCountProductVariationImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productVariationImagesWhereInput
  }

  /**
   * ProductVariationCountOutputType without action
   */
  export type ProductVariationCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    User: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | ProfileCountOutputTypeCountUserArgs
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
  export type ProfileCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Product: number
    Address: number
    ReviewProduct: number
    CartItem: number
    UserFavorite: number
    UserSearchHistory: number
    UserProductClick: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | UserCountOutputTypeCountProductArgs
    Address?: boolean | UserCountOutputTypeCountAddressArgs
    ReviewProduct?: boolean | UserCountOutputTypeCountReviewProductArgs
    CartItem?: boolean | UserCountOutputTypeCountCartItemArgs
    UserFavorite?: boolean | UserCountOutputTypeCountUserFavoriteArgs
    UserSearchHistory?: boolean | UserCountOutputTypeCountUserSearchHistoryArgs
    UserProductClick?: boolean | UserCountOutputTypeCountUserProductClickArgs
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
  export type UserCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserSearchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSearchHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserProductClickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProductClickWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    userId: string | null
    productVariationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    userId: string | null
    productVariationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    quantity: number
    userId: number
    productVariationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    quantity?: true
  }

  export type CartItemSumAggregateInputType = {
    quantity?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    quantity?: true
    userId?: true
    productVariationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    quantity?: true
    userId?: true
    productVariationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    quantity?: true
    userId?: true
    productVariationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: string
    quantity: number
    userId: string
    productVariationId: string
    createdAt: Date
    updatedAt: Date
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    userId?: boolean
    productVariationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    userId?: boolean
    productVariationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    userId?: boolean
    productVariationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    quantity?: boolean
    userId?: boolean
    productVariationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "userId" | "productVariationId" | "createdAt" | "updatedAt", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      productVariation: Prisma.$ProductVariationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      userId: string
      productVariationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
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
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productVariation<T extends ProductVariationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariationDefaultArgs<ExtArgs>>): Prisma__ProductVariationClient<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'String'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly userId: FieldRef<"CartItem", 'String'>
    readonly productVariationId: FieldRef<"CartItem", 'String'>
    readonly createdAt: FieldRef<"CartItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CartItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model UserFavorite
   */

  export type AggregateUserFavorite = {
    _count: UserFavoriteCountAggregateOutputType | null
    _min: UserFavoriteMinAggregateOutputType | null
    _max: UserFavoriteMaxAggregateOutputType | null
  }

  export type UserFavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
  }

  export type UserFavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
  }

  export type UserFavoriteCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    createdAt: number
    _all: number
  }


  export type UserFavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type UserFavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
  }

  export type UserFavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    _all?: true
  }

  export type UserFavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorite to aggregate.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFavorites
    **/
    _count?: true | UserFavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFavoriteMaxAggregateInputType
  }

  export type GetUserFavoriteAggregateType<T extends UserFavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFavorite[P]>
      : GetScalarType<T[P], AggregateUserFavorite[P]>
  }




  export type UserFavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithAggregationInput | UserFavoriteOrderByWithAggregationInput[]
    by: UserFavoriteScalarFieldEnum[] | UserFavoriteScalarFieldEnum
    having?: UserFavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFavoriteCountAggregateInputType | true
    _min?: UserFavoriteMinAggregateInputType
    _max?: UserFavoriteMaxAggregateInputType
  }

  export type UserFavoriteGroupByOutputType = {
    id: string
    userId: string
    productId: string
    createdAt: Date
    _count: UserFavoriteCountAggregateOutputType | null
    _min: UserFavoriteMinAggregateOutputType | null
    _max: UserFavoriteMaxAggregateOutputType | null
  }

  type GetUserFavoriteGroupByPayload<T extends UserFavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], UserFavoriteGroupByOutputType[P]>
        }
      >
    >


  export type UserFavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorite"]>

  export type UserFavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorite"]>

  export type UserFavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorite"]>

  export type UserFavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
  }

  export type UserFavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "createdAt", ExtArgs["result"]["userFavorite"]>
  export type UserFavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UserFavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UserFavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $UserFavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFavorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      createdAt: Date
    }, ExtArgs["result"]["userFavorite"]>
    composites: {}
  }

  type UserFavoriteGetPayload<S extends boolean | null | undefined | UserFavoriteDefaultArgs> = $Result.GetResult<Prisma.$UserFavoritePayload, S>

  type UserFavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFavoriteCountAggregateInputType | true
    }

  export interface UserFavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFavorite'], meta: { name: 'UserFavorite' } }
    /**
     * Find zero or one UserFavorite that matches the filter.
     * @param {UserFavoriteFindUniqueArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFavoriteFindUniqueArgs>(args: SelectSubset<T, UserFavoriteFindUniqueArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFavorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFavoriteFindUniqueOrThrowArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindFirstArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFavoriteFindFirstArgs>(args?: SelectSubset<T, UserFavoriteFindFirstArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindFirstOrThrowArgs} args - Arguments to find a UserFavorite
     * @example
     * // Get one UserFavorite
     * const userFavorite = await prisma.userFavorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFavorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFavorites
     * const userFavorites = await prisma.userFavorite.findMany()
     * 
     * // Get first 10 UserFavorites
     * const userFavorites = await prisma.userFavorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFavoriteWithIdOnly = await prisma.userFavorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFavoriteFindManyArgs>(args?: SelectSubset<T, UserFavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFavorite.
     * @param {UserFavoriteCreateArgs} args - Arguments to create a UserFavorite.
     * @example
     * // Create one UserFavorite
     * const UserFavorite = await prisma.userFavorite.create({
     *   data: {
     *     // ... data to create a UserFavorite
     *   }
     * })
     * 
     */
    create<T extends UserFavoriteCreateArgs>(args: SelectSubset<T, UserFavoriteCreateArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFavorites.
     * @param {UserFavoriteCreateManyArgs} args - Arguments to create many UserFavorites.
     * @example
     * // Create many UserFavorites
     * const userFavorite = await prisma.userFavorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFavoriteCreateManyArgs>(args?: SelectSubset<T, UserFavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFavorites and returns the data saved in the database.
     * @param {UserFavoriteCreateManyAndReturnArgs} args - Arguments to create many UserFavorites.
     * @example
     * // Create many UserFavorites
     * const userFavorite = await prisma.userFavorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFavorites and only return the `id`
     * const userFavoriteWithIdOnly = await prisma.userFavorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFavorite.
     * @param {UserFavoriteDeleteArgs} args - Arguments to delete one UserFavorite.
     * @example
     * // Delete one UserFavorite
     * const UserFavorite = await prisma.userFavorite.delete({
     *   where: {
     *     // ... filter to delete one UserFavorite
     *   }
     * })
     * 
     */
    delete<T extends UserFavoriteDeleteArgs>(args: SelectSubset<T, UserFavoriteDeleteArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFavorite.
     * @param {UserFavoriteUpdateArgs} args - Arguments to update one UserFavorite.
     * @example
     * // Update one UserFavorite
     * const userFavorite = await prisma.userFavorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFavoriteUpdateArgs>(args: SelectSubset<T, UserFavoriteUpdateArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFavorites.
     * @param {UserFavoriteDeleteManyArgs} args - Arguments to filter UserFavorites to delete.
     * @example
     * // Delete a few UserFavorites
     * const { count } = await prisma.userFavorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFavoriteDeleteManyArgs>(args?: SelectSubset<T, UserFavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFavorites
     * const userFavorite = await prisma.userFavorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFavoriteUpdateManyArgs>(args: SelectSubset<T, UserFavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavorites and returns the data updated in the database.
     * @param {UserFavoriteUpdateManyAndReturnArgs} args - Arguments to update many UserFavorites.
     * @example
     * // Update many UserFavorites
     * const userFavorite = await prisma.userFavorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFavorites and only return the `id`
     * const userFavoriteWithIdOnly = await prisma.userFavorite.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserFavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFavorite.
     * @param {UserFavoriteUpsertArgs} args - Arguments to update or create a UserFavorite.
     * @example
     * // Update or create a UserFavorite
     * const userFavorite = await prisma.userFavorite.upsert({
     *   create: {
     *     // ... data to create a UserFavorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFavorite we want to update
     *   }
     * })
     */
    upsert<T extends UserFavoriteUpsertArgs>(args: SelectSubset<T, UserFavoriteUpsertArgs<ExtArgs>>): Prisma__UserFavoriteClient<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteCountArgs} args - Arguments to filter UserFavorites to count.
     * @example
     * // Count the number of UserFavorites
     * const count = await prisma.userFavorite.count({
     *   where: {
     *     // ... the filter for the UserFavorites we want to count
     *   }
     * })
    **/
    count<T extends UserFavoriteCountArgs>(
      args?: Subset<T, UserFavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserFavoriteAggregateArgs>(args: Subset<T, UserFavoriteAggregateArgs>): Prisma.PrismaPromise<GetUserFavoriteAggregateType<T>>

    /**
     * Group by UserFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavoriteGroupByArgs} args - Group by arguments.
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
      T extends UserFavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFavoriteGroupByArgs['orderBy'] }
        : { orderBy?: UserFavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserFavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFavorite model
   */
  readonly fields: UserFavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFavorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserFavorite model
   */
  interface UserFavoriteFieldRefs {
    readonly id: FieldRef<"UserFavorite", 'String'>
    readonly userId: FieldRef<"UserFavorite", 'String'>
    readonly productId: FieldRef<"UserFavorite", 'String'>
    readonly createdAt: FieldRef<"UserFavorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFavorite findUnique
   */
  export type UserFavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite findUniqueOrThrow
   */
  export type UserFavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite findFirst
   */
  export type UserFavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorites.
     */
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite findFirstOrThrow
   */
  export type UserFavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorite to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorites.
     */
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite findMany
   */
  export type UserFavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorites to fetch.
     */
    where?: UserFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorites to fetch.
     */
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFavorites.
     */
    cursor?: UserFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorites.
     */
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * UserFavorite create
   */
  export type UserFavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFavorite.
     */
    data: XOR<UserFavoriteCreateInput, UserFavoriteUncheckedCreateInput>
  }

  /**
   * UserFavorite createMany
   */
  export type UserFavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFavorites.
     */
    data: UserFavoriteCreateManyInput | UserFavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFavorite createManyAndReturn
   */
  export type UserFavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many UserFavorites.
     */
    data: UserFavoriteCreateManyInput | UserFavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavorite update
   */
  export type UserFavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFavorite.
     */
    data: XOR<UserFavoriteUpdateInput, UserFavoriteUncheckedUpdateInput>
    /**
     * Choose, which UserFavorite to update.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite updateMany
   */
  export type UserFavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFavorites.
     */
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which UserFavorites to update
     */
    where?: UserFavoriteWhereInput
    /**
     * Limit how many UserFavorites to update.
     */
    limit?: number
  }

  /**
   * UserFavorite updateManyAndReturn
   */
  export type UserFavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * The data used to update UserFavorites.
     */
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which UserFavorites to update
     */
    where?: UserFavoriteWhereInput
    /**
     * Limit how many UserFavorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFavorite upsert
   */
  export type UserFavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFavorite to update in case it exists.
     */
    where: UserFavoriteWhereUniqueInput
    /**
     * In case the UserFavorite found by the `where` argument doesn't exist, create a new UserFavorite with this data.
     */
    create: XOR<UserFavoriteCreateInput, UserFavoriteUncheckedCreateInput>
    /**
     * In case the UserFavorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFavoriteUpdateInput, UserFavoriteUncheckedUpdateInput>
  }

  /**
   * UserFavorite delete
   */
  export type UserFavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    /**
     * Filter which UserFavorite to delete.
     */
    where: UserFavoriteWhereUniqueInput
  }

  /**
   * UserFavorite deleteMany
   */
  export type UserFavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorites to delete
     */
    where?: UserFavoriteWhereInput
    /**
     * Limit how many UserFavorites to delete.
     */
    limit?: number
  }

  /**
   * UserFavorite without action
   */
  export type UserFavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
  }


  /**
   * Model UserSearchHistory
   */

  export type AggregateUserSearchHistory = {
    _count: UserSearchHistoryCountAggregateOutputType | null
    _min: UserSearchHistoryMinAggregateOutputType | null
    _max: UserSearchHistoryMaxAggregateOutputType | null
  }

  export type UserSearchHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    term: string | null
    searchedAt: Date | null
  }

  export type UserSearchHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    term: string | null
    searchedAt: Date | null
  }

  export type UserSearchHistoryCountAggregateOutputType = {
    id: number
    userId: number
    term: number
    searchedAt: number
    _all: number
  }


  export type UserSearchHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    term?: true
    searchedAt?: true
  }

  export type UserSearchHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    term?: true
    searchedAt?: true
  }

  export type UserSearchHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    term?: true
    searchedAt?: true
    _all?: true
  }

  export type UserSearchHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSearchHistory to aggregate.
     */
    where?: UserSearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSearchHistories to fetch.
     */
    orderBy?: UserSearchHistoryOrderByWithRelationInput | UserSearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSearchHistories
    **/
    _count?: true | UserSearchHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSearchHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSearchHistoryMaxAggregateInputType
  }

  export type GetUserSearchHistoryAggregateType<T extends UserSearchHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSearchHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSearchHistory[P]>
      : GetScalarType<T[P], AggregateUserSearchHistory[P]>
  }




  export type UserSearchHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSearchHistoryWhereInput
    orderBy?: UserSearchHistoryOrderByWithAggregationInput | UserSearchHistoryOrderByWithAggregationInput[]
    by: UserSearchHistoryScalarFieldEnum[] | UserSearchHistoryScalarFieldEnum
    having?: UserSearchHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSearchHistoryCountAggregateInputType | true
    _min?: UserSearchHistoryMinAggregateInputType
    _max?: UserSearchHistoryMaxAggregateInputType
  }

  export type UserSearchHistoryGroupByOutputType = {
    id: string
    userId: string
    term: string
    searchedAt: Date
    _count: UserSearchHistoryCountAggregateOutputType | null
    _min: UserSearchHistoryMinAggregateOutputType | null
    _max: UserSearchHistoryMaxAggregateOutputType | null
  }

  type GetUserSearchHistoryGroupByPayload<T extends UserSearchHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSearchHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSearchHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSearchHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserSearchHistoryGroupByOutputType[P]>
        }
      >
    >


  export type UserSearchHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    term?: boolean
    searchedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSearchHistory"]>

  export type UserSearchHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    term?: boolean
    searchedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSearchHistory"]>

  export type UserSearchHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    term?: boolean
    searchedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSearchHistory"]>

  export type UserSearchHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    term?: boolean
    searchedAt?: boolean
  }

  export type UserSearchHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "term" | "searchedAt", ExtArgs["result"]["userSearchHistory"]>
  export type UserSearchHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSearchHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSearchHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSearchHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSearchHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      term: string
      searchedAt: Date
    }, ExtArgs["result"]["userSearchHistory"]>
    composites: {}
  }

  type UserSearchHistoryGetPayload<S extends boolean | null | undefined | UserSearchHistoryDefaultArgs> = $Result.GetResult<Prisma.$UserSearchHistoryPayload, S>

  type UserSearchHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSearchHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSearchHistoryCountAggregateInputType | true
    }

  export interface UserSearchHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSearchHistory'], meta: { name: 'UserSearchHistory' } }
    /**
     * Find zero or one UserSearchHistory that matches the filter.
     * @param {UserSearchHistoryFindUniqueArgs} args - Arguments to find a UserSearchHistory
     * @example
     * // Get one UserSearchHistory
     * const userSearchHistory = await prisma.userSearchHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSearchHistoryFindUniqueArgs>(args: SelectSubset<T, UserSearchHistoryFindUniqueArgs<ExtArgs>>): Prisma__UserSearchHistoryClient<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSearchHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSearchHistoryFindUniqueOrThrowArgs} args - Arguments to find a UserSearchHistory
     * @example
     * // Get one UserSearchHistory
     * const userSearchHistory = await prisma.userSearchHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSearchHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSearchHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSearchHistoryClient<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSearchHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchHistoryFindFirstArgs} args - Arguments to find a UserSearchHistory
     * @example
     * // Get one UserSearchHistory
     * const userSearchHistory = await prisma.userSearchHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSearchHistoryFindFirstArgs>(args?: SelectSubset<T, UserSearchHistoryFindFirstArgs<ExtArgs>>): Prisma__UserSearchHistoryClient<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSearchHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchHistoryFindFirstOrThrowArgs} args - Arguments to find a UserSearchHistory
     * @example
     * // Get one UserSearchHistory
     * const userSearchHistory = await prisma.userSearchHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSearchHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSearchHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSearchHistoryClient<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSearchHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSearchHistories
     * const userSearchHistories = await prisma.userSearchHistory.findMany()
     * 
     * // Get first 10 UserSearchHistories
     * const userSearchHistories = await prisma.userSearchHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSearchHistoryWithIdOnly = await prisma.userSearchHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSearchHistoryFindManyArgs>(args?: SelectSubset<T, UserSearchHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSearchHistory.
     * @param {UserSearchHistoryCreateArgs} args - Arguments to create a UserSearchHistory.
     * @example
     * // Create one UserSearchHistory
     * const UserSearchHistory = await prisma.userSearchHistory.create({
     *   data: {
     *     // ... data to create a UserSearchHistory
     *   }
     * })
     * 
     */
    create<T extends UserSearchHistoryCreateArgs>(args: SelectSubset<T, UserSearchHistoryCreateArgs<ExtArgs>>): Prisma__UserSearchHistoryClient<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSearchHistories.
     * @param {UserSearchHistoryCreateManyArgs} args - Arguments to create many UserSearchHistories.
     * @example
     * // Create many UserSearchHistories
     * const userSearchHistory = await prisma.userSearchHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSearchHistoryCreateManyArgs>(args?: SelectSubset<T, UserSearchHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSearchHistories and returns the data saved in the database.
     * @param {UserSearchHistoryCreateManyAndReturnArgs} args - Arguments to create many UserSearchHistories.
     * @example
     * // Create many UserSearchHistories
     * const userSearchHistory = await prisma.userSearchHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSearchHistories and only return the `id`
     * const userSearchHistoryWithIdOnly = await prisma.userSearchHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSearchHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSearchHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSearchHistory.
     * @param {UserSearchHistoryDeleteArgs} args - Arguments to delete one UserSearchHistory.
     * @example
     * // Delete one UserSearchHistory
     * const UserSearchHistory = await prisma.userSearchHistory.delete({
     *   where: {
     *     // ... filter to delete one UserSearchHistory
     *   }
     * })
     * 
     */
    delete<T extends UserSearchHistoryDeleteArgs>(args: SelectSubset<T, UserSearchHistoryDeleteArgs<ExtArgs>>): Prisma__UserSearchHistoryClient<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSearchHistory.
     * @param {UserSearchHistoryUpdateArgs} args - Arguments to update one UserSearchHistory.
     * @example
     * // Update one UserSearchHistory
     * const userSearchHistory = await prisma.userSearchHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSearchHistoryUpdateArgs>(args: SelectSubset<T, UserSearchHistoryUpdateArgs<ExtArgs>>): Prisma__UserSearchHistoryClient<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSearchHistories.
     * @param {UserSearchHistoryDeleteManyArgs} args - Arguments to filter UserSearchHistories to delete.
     * @example
     * // Delete a few UserSearchHistories
     * const { count } = await prisma.userSearchHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSearchHistoryDeleteManyArgs>(args?: SelectSubset<T, UserSearchHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSearchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSearchHistories
     * const userSearchHistory = await prisma.userSearchHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSearchHistoryUpdateManyArgs>(args: SelectSubset<T, UserSearchHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSearchHistories and returns the data updated in the database.
     * @param {UserSearchHistoryUpdateManyAndReturnArgs} args - Arguments to update many UserSearchHistories.
     * @example
     * // Update many UserSearchHistories
     * const userSearchHistory = await prisma.userSearchHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSearchHistories and only return the `id`
     * const userSearchHistoryWithIdOnly = await prisma.userSearchHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSearchHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSearchHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSearchHistory.
     * @param {UserSearchHistoryUpsertArgs} args - Arguments to update or create a UserSearchHistory.
     * @example
     * // Update or create a UserSearchHistory
     * const userSearchHistory = await prisma.userSearchHistory.upsert({
     *   create: {
     *     // ... data to create a UserSearchHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSearchHistory we want to update
     *   }
     * })
     */
    upsert<T extends UserSearchHistoryUpsertArgs>(args: SelectSubset<T, UserSearchHistoryUpsertArgs<ExtArgs>>): Prisma__UserSearchHistoryClient<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSearchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchHistoryCountArgs} args - Arguments to filter UserSearchHistories to count.
     * @example
     * // Count the number of UserSearchHistories
     * const count = await prisma.userSearchHistory.count({
     *   where: {
     *     // ... the filter for the UserSearchHistories we want to count
     *   }
     * })
    **/
    count<T extends UserSearchHistoryCountArgs>(
      args?: Subset<T, UserSearchHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSearchHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSearchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSearchHistoryAggregateArgs>(args: Subset<T, UserSearchHistoryAggregateArgs>): Prisma.PrismaPromise<GetUserSearchHistoryAggregateType<T>>

    /**
     * Group by UserSearchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSearchHistoryGroupByArgs} args - Group by arguments.
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
      T extends UserSearchHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSearchHistoryGroupByArgs['orderBy'] }
        : { orderBy?: UserSearchHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSearchHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSearchHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSearchHistory model
   */
  readonly fields: UserSearchHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSearchHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSearchHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserSearchHistory model
   */
  interface UserSearchHistoryFieldRefs {
    readonly id: FieldRef<"UserSearchHistory", 'String'>
    readonly userId: FieldRef<"UserSearchHistory", 'String'>
    readonly term: FieldRef<"UserSearchHistory", 'String'>
    readonly searchedAt: FieldRef<"UserSearchHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSearchHistory findUnique
   */
  export type UserSearchHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserSearchHistory to fetch.
     */
    where: UserSearchHistoryWhereUniqueInput
  }

  /**
   * UserSearchHistory findUniqueOrThrow
   */
  export type UserSearchHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserSearchHistory to fetch.
     */
    where: UserSearchHistoryWhereUniqueInput
  }

  /**
   * UserSearchHistory findFirst
   */
  export type UserSearchHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserSearchHistory to fetch.
     */
    where?: UserSearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSearchHistories to fetch.
     */
    orderBy?: UserSearchHistoryOrderByWithRelationInput | UserSearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSearchHistories.
     */
    cursor?: UserSearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSearchHistories.
     */
    distinct?: UserSearchHistoryScalarFieldEnum | UserSearchHistoryScalarFieldEnum[]
  }

  /**
   * UserSearchHistory findFirstOrThrow
   */
  export type UserSearchHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserSearchHistory to fetch.
     */
    where?: UserSearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSearchHistories to fetch.
     */
    orderBy?: UserSearchHistoryOrderByWithRelationInput | UserSearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSearchHistories.
     */
    cursor?: UserSearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSearchHistories.
     */
    distinct?: UserSearchHistoryScalarFieldEnum | UserSearchHistoryScalarFieldEnum[]
  }

  /**
   * UserSearchHistory findMany
   */
  export type UserSearchHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserSearchHistories to fetch.
     */
    where?: UserSearchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSearchHistories to fetch.
     */
    orderBy?: UserSearchHistoryOrderByWithRelationInput | UserSearchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSearchHistories.
     */
    cursor?: UserSearchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSearchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSearchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSearchHistories.
     */
    distinct?: UserSearchHistoryScalarFieldEnum | UserSearchHistoryScalarFieldEnum[]
  }

  /**
   * UserSearchHistory create
   */
  export type UserSearchHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSearchHistory.
     */
    data: XOR<UserSearchHistoryCreateInput, UserSearchHistoryUncheckedCreateInput>
  }

  /**
   * UserSearchHistory createMany
   */
  export type UserSearchHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSearchHistories.
     */
    data: UserSearchHistoryCreateManyInput | UserSearchHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSearchHistory createManyAndReturn
   */
  export type UserSearchHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many UserSearchHistories.
     */
    data: UserSearchHistoryCreateManyInput | UserSearchHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSearchHistory update
   */
  export type UserSearchHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSearchHistory.
     */
    data: XOR<UserSearchHistoryUpdateInput, UserSearchHistoryUncheckedUpdateInput>
    /**
     * Choose, which UserSearchHistory to update.
     */
    where: UserSearchHistoryWhereUniqueInput
  }

  /**
   * UserSearchHistory updateMany
   */
  export type UserSearchHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSearchHistories.
     */
    data: XOR<UserSearchHistoryUpdateManyMutationInput, UserSearchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UserSearchHistories to update
     */
    where?: UserSearchHistoryWhereInput
    /**
     * Limit how many UserSearchHistories to update.
     */
    limit?: number
  }

  /**
   * UserSearchHistory updateManyAndReturn
   */
  export type UserSearchHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * The data used to update UserSearchHistories.
     */
    data: XOR<UserSearchHistoryUpdateManyMutationInput, UserSearchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UserSearchHistories to update
     */
    where?: UserSearchHistoryWhereInput
    /**
     * Limit how many UserSearchHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSearchHistory upsert
   */
  export type UserSearchHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSearchHistory to update in case it exists.
     */
    where: UserSearchHistoryWhereUniqueInput
    /**
     * In case the UserSearchHistory found by the `where` argument doesn't exist, create a new UserSearchHistory with this data.
     */
    create: XOR<UserSearchHistoryCreateInput, UserSearchHistoryUncheckedCreateInput>
    /**
     * In case the UserSearchHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSearchHistoryUpdateInput, UserSearchHistoryUncheckedUpdateInput>
  }

  /**
   * UserSearchHistory delete
   */
  export type UserSearchHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryInclude<ExtArgs> | null
    /**
     * Filter which UserSearchHistory to delete.
     */
    where: UserSearchHistoryWhereUniqueInput
  }

  /**
   * UserSearchHistory deleteMany
   */
  export type UserSearchHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSearchHistories to delete
     */
    where?: UserSearchHistoryWhereInput
    /**
     * Limit how many UserSearchHistories to delete.
     */
    limit?: number
  }

  /**
   * UserSearchHistory without action
   */
  export type UserSearchHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryInclude<ExtArgs> | null
  }


  /**
   * Model UserProductClick
   */

  export type AggregateUserProductClick = {
    _count: UserProductClickCountAggregateOutputType | null
    _min: UserProductClickMinAggregateOutputType | null
    _max: UserProductClickMaxAggregateOutputType | null
  }

  export type UserProductClickMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    sourcePage: string | null
    clickedAt: Date | null
  }

  export type UserProductClickMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    sourcePage: string | null
    clickedAt: Date | null
  }

  export type UserProductClickCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    sourcePage: number
    clickedAt: number
    _all: number
  }


  export type UserProductClickMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    sourcePage?: true
    clickedAt?: true
  }

  export type UserProductClickMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    sourcePage?: true
    clickedAt?: true
  }

  export type UserProductClickCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    sourcePage?: true
    clickedAt?: true
    _all?: true
  }

  export type UserProductClickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProductClick to aggregate.
     */
    where?: UserProductClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProductClicks to fetch.
     */
    orderBy?: UserProductClickOrderByWithRelationInput | UserProductClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProductClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProductClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProductClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProductClicks
    **/
    _count?: true | UserProductClickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProductClickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProductClickMaxAggregateInputType
  }

  export type GetUserProductClickAggregateType<T extends UserProductClickAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProductClick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProductClick[P]>
      : GetScalarType<T[P], AggregateUserProductClick[P]>
  }




  export type UserProductClickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProductClickWhereInput
    orderBy?: UserProductClickOrderByWithAggregationInput | UserProductClickOrderByWithAggregationInput[]
    by: UserProductClickScalarFieldEnum[] | UserProductClickScalarFieldEnum
    having?: UserProductClickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProductClickCountAggregateInputType | true
    _min?: UserProductClickMinAggregateInputType
    _max?: UserProductClickMaxAggregateInputType
  }

  export type UserProductClickGroupByOutputType = {
    id: string
    userId: string
    productId: string
    sourcePage: string
    clickedAt: Date
    _count: UserProductClickCountAggregateOutputType | null
    _min: UserProductClickMinAggregateOutputType | null
    _max: UserProductClickMaxAggregateOutputType | null
  }

  type GetUserProductClickGroupByPayload<T extends UserProductClickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProductClickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProductClickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProductClickGroupByOutputType[P]>
            : GetScalarType<T[P], UserProductClickGroupByOutputType[P]>
        }
      >
    >


  export type UserProductClickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    sourcePage?: boolean
    clickedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProductClick"]>

  export type UserProductClickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    sourcePage?: boolean
    clickedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProductClick"]>

  export type UserProductClickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    sourcePage?: boolean
    clickedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProductClick"]>

  export type UserProductClickSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    sourcePage?: boolean
    clickedAt?: boolean
  }

  export type UserProductClickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "sourcePage" | "clickedAt", ExtArgs["result"]["userProductClick"]>
  export type UserProductClickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProductClickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProductClickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProductClickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProductClick"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      sourcePage: string
      clickedAt: Date
    }, ExtArgs["result"]["userProductClick"]>
    composites: {}
  }

  type UserProductClickGetPayload<S extends boolean | null | undefined | UserProductClickDefaultArgs> = $Result.GetResult<Prisma.$UserProductClickPayload, S>

  type UserProductClickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProductClickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProductClickCountAggregateInputType | true
    }

  export interface UserProductClickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProductClick'], meta: { name: 'UserProductClick' } }
    /**
     * Find zero or one UserProductClick that matches the filter.
     * @param {UserProductClickFindUniqueArgs} args - Arguments to find a UserProductClick
     * @example
     * // Get one UserProductClick
     * const userProductClick = await prisma.userProductClick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProductClickFindUniqueArgs>(args: SelectSubset<T, UserProductClickFindUniqueArgs<ExtArgs>>): Prisma__UserProductClickClient<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProductClick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProductClickFindUniqueOrThrowArgs} args - Arguments to find a UserProductClick
     * @example
     * // Get one UserProductClick
     * const userProductClick = await prisma.userProductClick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProductClickFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProductClickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProductClickClient<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProductClick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductClickFindFirstArgs} args - Arguments to find a UserProductClick
     * @example
     * // Get one UserProductClick
     * const userProductClick = await prisma.userProductClick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProductClickFindFirstArgs>(args?: SelectSubset<T, UserProductClickFindFirstArgs<ExtArgs>>): Prisma__UserProductClickClient<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProductClick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductClickFindFirstOrThrowArgs} args - Arguments to find a UserProductClick
     * @example
     * // Get one UserProductClick
     * const userProductClick = await prisma.userProductClick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProductClickFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProductClickFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProductClickClient<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProductClicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductClickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProductClicks
     * const userProductClicks = await prisma.userProductClick.findMany()
     * 
     * // Get first 10 UserProductClicks
     * const userProductClicks = await prisma.userProductClick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProductClickWithIdOnly = await prisma.userProductClick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProductClickFindManyArgs>(args?: SelectSubset<T, UserProductClickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProductClick.
     * @param {UserProductClickCreateArgs} args - Arguments to create a UserProductClick.
     * @example
     * // Create one UserProductClick
     * const UserProductClick = await prisma.userProductClick.create({
     *   data: {
     *     // ... data to create a UserProductClick
     *   }
     * })
     * 
     */
    create<T extends UserProductClickCreateArgs>(args: SelectSubset<T, UserProductClickCreateArgs<ExtArgs>>): Prisma__UserProductClickClient<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProductClicks.
     * @param {UserProductClickCreateManyArgs} args - Arguments to create many UserProductClicks.
     * @example
     * // Create many UserProductClicks
     * const userProductClick = await prisma.userProductClick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProductClickCreateManyArgs>(args?: SelectSubset<T, UserProductClickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProductClicks and returns the data saved in the database.
     * @param {UserProductClickCreateManyAndReturnArgs} args - Arguments to create many UserProductClicks.
     * @example
     * // Create many UserProductClicks
     * const userProductClick = await prisma.userProductClick.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProductClicks and only return the `id`
     * const userProductClickWithIdOnly = await prisma.userProductClick.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProductClickCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProductClickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProductClick.
     * @param {UserProductClickDeleteArgs} args - Arguments to delete one UserProductClick.
     * @example
     * // Delete one UserProductClick
     * const UserProductClick = await prisma.userProductClick.delete({
     *   where: {
     *     // ... filter to delete one UserProductClick
     *   }
     * })
     * 
     */
    delete<T extends UserProductClickDeleteArgs>(args: SelectSubset<T, UserProductClickDeleteArgs<ExtArgs>>): Prisma__UserProductClickClient<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProductClick.
     * @param {UserProductClickUpdateArgs} args - Arguments to update one UserProductClick.
     * @example
     * // Update one UserProductClick
     * const userProductClick = await prisma.userProductClick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProductClickUpdateArgs>(args: SelectSubset<T, UserProductClickUpdateArgs<ExtArgs>>): Prisma__UserProductClickClient<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProductClicks.
     * @param {UserProductClickDeleteManyArgs} args - Arguments to filter UserProductClicks to delete.
     * @example
     * // Delete a few UserProductClicks
     * const { count } = await prisma.userProductClick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProductClickDeleteManyArgs>(args?: SelectSubset<T, UserProductClickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProductClicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductClickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProductClicks
     * const userProductClick = await prisma.userProductClick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProductClickUpdateManyArgs>(args: SelectSubset<T, UserProductClickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProductClicks and returns the data updated in the database.
     * @param {UserProductClickUpdateManyAndReturnArgs} args - Arguments to update many UserProductClicks.
     * @example
     * // Update many UserProductClicks
     * const userProductClick = await prisma.userProductClick.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProductClicks and only return the `id`
     * const userProductClickWithIdOnly = await prisma.userProductClick.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProductClickUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProductClickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProductClick.
     * @param {UserProductClickUpsertArgs} args - Arguments to update or create a UserProductClick.
     * @example
     * // Update or create a UserProductClick
     * const userProductClick = await prisma.userProductClick.upsert({
     *   create: {
     *     // ... data to create a UserProductClick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProductClick we want to update
     *   }
     * })
     */
    upsert<T extends UserProductClickUpsertArgs>(args: SelectSubset<T, UserProductClickUpsertArgs<ExtArgs>>): Prisma__UserProductClickClient<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProductClicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductClickCountArgs} args - Arguments to filter UserProductClicks to count.
     * @example
     * // Count the number of UserProductClicks
     * const count = await prisma.userProductClick.count({
     *   where: {
     *     // ... the filter for the UserProductClicks we want to count
     *   }
     * })
    **/
    count<T extends UserProductClickCountArgs>(
      args?: Subset<T, UserProductClickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProductClickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProductClick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductClickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProductClickAggregateArgs>(args: Subset<T, UserProductClickAggregateArgs>): Prisma.PrismaPromise<GetUserProductClickAggregateType<T>>

    /**
     * Group by UserProductClick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductClickGroupByArgs} args - Group by arguments.
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
      T extends UserProductClickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProductClickGroupByArgs['orderBy'] }
        : { orderBy?: UserProductClickGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProductClickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProductClickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProductClick model
   */
  readonly fields: UserProductClickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProductClick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProductClickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserProductClick model
   */
  interface UserProductClickFieldRefs {
    readonly id: FieldRef<"UserProductClick", 'String'>
    readonly userId: FieldRef<"UserProductClick", 'String'>
    readonly productId: FieldRef<"UserProductClick", 'String'>
    readonly sourcePage: FieldRef<"UserProductClick", 'String'>
    readonly clickedAt: FieldRef<"UserProductClick", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProductClick findUnique
   */
  export type UserProductClickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickInclude<ExtArgs> | null
    /**
     * Filter, which UserProductClick to fetch.
     */
    where: UserProductClickWhereUniqueInput
  }

  /**
   * UserProductClick findUniqueOrThrow
   */
  export type UserProductClickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickInclude<ExtArgs> | null
    /**
     * Filter, which UserProductClick to fetch.
     */
    where: UserProductClickWhereUniqueInput
  }

  /**
   * UserProductClick findFirst
   */
  export type UserProductClickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickInclude<ExtArgs> | null
    /**
     * Filter, which UserProductClick to fetch.
     */
    where?: UserProductClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProductClicks to fetch.
     */
    orderBy?: UserProductClickOrderByWithRelationInput | UserProductClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProductClicks.
     */
    cursor?: UserProductClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProductClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProductClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProductClicks.
     */
    distinct?: UserProductClickScalarFieldEnum | UserProductClickScalarFieldEnum[]
  }

  /**
   * UserProductClick findFirstOrThrow
   */
  export type UserProductClickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickInclude<ExtArgs> | null
    /**
     * Filter, which UserProductClick to fetch.
     */
    where?: UserProductClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProductClicks to fetch.
     */
    orderBy?: UserProductClickOrderByWithRelationInput | UserProductClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProductClicks.
     */
    cursor?: UserProductClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProductClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProductClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProductClicks.
     */
    distinct?: UserProductClickScalarFieldEnum | UserProductClickScalarFieldEnum[]
  }

  /**
   * UserProductClick findMany
   */
  export type UserProductClickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickInclude<ExtArgs> | null
    /**
     * Filter, which UserProductClicks to fetch.
     */
    where?: UserProductClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProductClicks to fetch.
     */
    orderBy?: UserProductClickOrderByWithRelationInput | UserProductClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProductClicks.
     */
    cursor?: UserProductClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProductClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProductClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProductClicks.
     */
    distinct?: UserProductClickScalarFieldEnum | UserProductClickScalarFieldEnum[]
  }

  /**
   * UserProductClick create
   */
  export type UserProductClickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProductClick.
     */
    data: XOR<UserProductClickCreateInput, UserProductClickUncheckedCreateInput>
  }

  /**
   * UserProductClick createMany
   */
  export type UserProductClickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProductClicks.
     */
    data: UserProductClickCreateManyInput | UserProductClickCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProductClick createManyAndReturn
   */
  export type UserProductClickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * The data used to create many UserProductClicks.
     */
    data: UserProductClickCreateManyInput | UserProductClickCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProductClick update
   */
  export type UserProductClickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProductClick.
     */
    data: XOR<UserProductClickUpdateInput, UserProductClickUncheckedUpdateInput>
    /**
     * Choose, which UserProductClick to update.
     */
    where: UserProductClickWhereUniqueInput
  }

  /**
   * UserProductClick updateMany
   */
  export type UserProductClickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProductClicks.
     */
    data: XOR<UserProductClickUpdateManyMutationInput, UserProductClickUncheckedUpdateManyInput>
    /**
     * Filter which UserProductClicks to update
     */
    where?: UserProductClickWhereInput
    /**
     * Limit how many UserProductClicks to update.
     */
    limit?: number
  }

  /**
   * UserProductClick updateManyAndReturn
   */
  export type UserProductClickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * The data used to update UserProductClicks.
     */
    data: XOR<UserProductClickUpdateManyMutationInput, UserProductClickUncheckedUpdateManyInput>
    /**
     * Filter which UserProductClicks to update
     */
    where?: UserProductClickWhereInput
    /**
     * Limit how many UserProductClicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProductClick upsert
   */
  export type UserProductClickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProductClick to update in case it exists.
     */
    where: UserProductClickWhereUniqueInput
    /**
     * In case the UserProductClick found by the `where` argument doesn't exist, create a new UserProductClick with this data.
     */
    create: XOR<UserProductClickCreateInput, UserProductClickUncheckedCreateInput>
    /**
     * In case the UserProductClick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProductClickUpdateInput, UserProductClickUncheckedUpdateInput>
  }

  /**
   * UserProductClick delete
   */
  export type UserProductClickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickInclude<ExtArgs> | null
    /**
     * Filter which UserProductClick to delete.
     */
    where: UserProductClickWhereUniqueInput
  }

  /**
   * UserProductClick deleteMany
   */
  export type UserProductClickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProductClicks to delete
     */
    where?: UserProductClickWhereInput
    /**
     * Limit how many UserProductClicks to delete.
     */
    limit?: number
  }

  /**
   * UserProductClick without action
   */
  export type UserProductClickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickInclude<ExtArgs> | null
  }


  /**
   * Model CategoryProducts
   */

  export type AggregateCategoryProducts = {
    _count: CategoryProductsCountAggregateOutputType | null
    _min: CategoryProductsMinAggregateOutputType | null
    _max: CategoryProductsMaxAggregateOutputType | null
  }

  export type CategoryProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryProductsCountAggregateOutputType = {
    id: number
    name: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryProductsMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryProductsMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryProductsCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryProducts to aggregate.
     */
    where?: CategoryProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryProducts to fetch.
     */
    orderBy?: CategoryProductsOrderByWithRelationInput | CategoryProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryProducts
    **/
    _count?: true | CategoryProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryProductsMaxAggregateInputType
  }

  export type GetCategoryProductsAggregateType<T extends CategoryProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryProducts[P]>
      : GetScalarType<T[P], AggregateCategoryProducts[P]>
  }




  export type CategoryProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryProductsWhereInput
    orderBy?: CategoryProductsOrderByWithAggregationInput | CategoryProductsOrderByWithAggregationInput[]
    by: CategoryProductsScalarFieldEnum[] | CategoryProductsScalarFieldEnum
    having?: CategoryProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryProductsCountAggregateInputType | true
    _min?: CategoryProductsMinAggregateInputType
    _max?: CategoryProductsMaxAggregateInputType
  }

  export type CategoryProductsGroupByOutputType = {
    id: string
    name: string
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: CategoryProductsCountAggregateOutputType | null
    _min: CategoryProductsMinAggregateOutputType | null
    _max: CategoryProductsMaxAggregateOutputType | null
  }

  type GetCategoryProductsGroupByPayload<T extends CategoryProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryProductsGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryProductsGroupByOutputType[P]>
        }
      >
    >


  export type CategoryProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | CategoryProducts$ProductArgs<ExtArgs>
    _count?: boolean | CategoryProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryProducts"]>

  export type CategoryProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoryProducts"]>

  export type CategoryProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categoryProducts"]>

  export type CategoryProductsSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["categoryProducts"]>
  export type CategoryProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | CategoryProducts$ProductArgs<ExtArgs>
    _count?: boolean | CategoryProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryProducts"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categoryProducts"]>
    composites: {}
  }

  type CategoryProductsGetPayload<S extends boolean | null | undefined | CategoryProductsDefaultArgs> = $Result.GetResult<Prisma.$CategoryProductsPayload, S>

  type CategoryProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryProductsCountAggregateInputType | true
    }

  export interface CategoryProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryProducts'], meta: { name: 'CategoryProducts' } }
    /**
     * Find zero or one CategoryProducts that matches the filter.
     * @param {CategoryProductsFindUniqueArgs} args - Arguments to find a CategoryProducts
     * @example
     * // Get one CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryProductsFindUniqueArgs>(args: SelectSubset<T, CategoryProductsFindUniqueArgs<ExtArgs>>): Prisma__CategoryProductsClient<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryProducts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryProductsFindUniqueOrThrowArgs} args - Arguments to find a CategoryProducts
     * @example
     * // Get one CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryProductsClient<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductsFindFirstArgs} args - Arguments to find a CategoryProducts
     * @example
     * // Get one CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryProductsFindFirstArgs>(args?: SelectSubset<T, CategoryProductsFindFirstArgs<ExtArgs>>): Prisma__CategoryProductsClient<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryProducts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductsFindFirstOrThrowArgs} args - Arguments to find a CategoryProducts
     * @example
     * // Get one CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryProductsClient<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.findMany()
     * 
     * // Get first 10 CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryProductsWithIdOnly = await prisma.categoryProducts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryProductsFindManyArgs>(args?: SelectSubset<T, CategoryProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryProducts.
     * @param {CategoryProductsCreateArgs} args - Arguments to create a CategoryProducts.
     * @example
     * // Create one CategoryProducts
     * const CategoryProducts = await prisma.categoryProducts.create({
     *   data: {
     *     // ... data to create a CategoryProducts
     *   }
     * })
     * 
     */
    create<T extends CategoryProductsCreateArgs>(args: SelectSubset<T, CategoryProductsCreateArgs<ExtArgs>>): Prisma__CategoryProductsClient<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryProducts.
     * @param {CategoryProductsCreateManyArgs} args - Arguments to create many CategoryProducts.
     * @example
     * // Create many CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryProductsCreateManyArgs>(args?: SelectSubset<T, CategoryProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryProducts and returns the data saved in the database.
     * @param {CategoryProductsCreateManyAndReturnArgs} args - Arguments to create many CategoryProducts.
     * @example
     * // Create many CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryProducts and only return the `id`
     * const categoryProductsWithIdOnly = await prisma.categoryProducts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoryProducts.
     * @param {CategoryProductsDeleteArgs} args - Arguments to delete one CategoryProducts.
     * @example
     * // Delete one CategoryProducts
     * const CategoryProducts = await prisma.categoryProducts.delete({
     *   where: {
     *     // ... filter to delete one CategoryProducts
     *   }
     * })
     * 
     */
    delete<T extends CategoryProductsDeleteArgs>(args: SelectSubset<T, CategoryProductsDeleteArgs<ExtArgs>>): Prisma__CategoryProductsClient<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryProducts.
     * @param {CategoryProductsUpdateArgs} args - Arguments to update one CategoryProducts.
     * @example
     * // Update one CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryProductsUpdateArgs>(args: SelectSubset<T, CategoryProductsUpdateArgs<ExtArgs>>): Prisma__CategoryProductsClient<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryProducts.
     * @param {CategoryProductsDeleteManyArgs} args - Arguments to filter CategoryProducts to delete.
     * @example
     * // Delete a few CategoryProducts
     * const { count } = await prisma.categoryProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryProductsDeleteManyArgs>(args?: SelectSubset<T, CategoryProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryProductsUpdateManyArgs>(args: SelectSubset<T, CategoryProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryProducts and returns the data updated in the database.
     * @param {CategoryProductsUpdateManyAndReturnArgs} args - Arguments to update many CategoryProducts.
     * @example
     * // Update many CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoryProducts and only return the `id`
     * const categoryProductsWithIdOnly = await prisma.categoryProducts.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoryProducts.
     * @param {CategoryProductsUpsertArgs} args - Arguments to update or create a CategoryProducts.
     * @example
     * // Update or create a CategoryProducts
     * const categoryProducts = await prisma.categoryProducts.upsert({
     *   create: {
     *     // ... data to create a CategoryProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryProducts we want to update
     *   }
     * })
     */
    upsert<T extends CategoryProductsUpsertArgs>(args: SelectSubset<T, CategoryProductsUpsertArgs<ExtArgs>>): Prisma__CategoryProductsClient<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductsCountArgs} args - Arguments to filter CategoryProducts to count.
     * @example
     * // Count the number of CategoryProducts
     * const count = await prisma.categoryProducts.count({
     *   where: {
     *     // ... the filter for the CategoryProducts we want to count
     *   }
     * })
    **/
    count<T extends CategoryProductsCountArgs>(
      args?: Subset<T, CategoryProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryProductsAggregateArgs>(args: Subset<T, CategoryProductsAggregateArgs>): Prisma.PrismaPromise<GetCategoryProductsAggregateType<T>>

    /**
     * Group by CategoryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductsGroupByArgs} args - Group by arguments.
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
      T extends CategoryProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryProductsGroupByArgs['orderBy'] }
        : { orderBy?: CategoryProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryProducts model
   */
  readonly fields: CategoryProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends CategoryProducts$ProductArgs<ExtArgs> = {}>(args?: Subset<T, CategoryProducts$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CategoryProducts model
   */
  interface CategoryProductsFieldRefs {
    readonly id: FieldRef<"CategoryProducts", 'String'>
    readonly name: FieldRef<"CategoryProducts", 'String'>
    readonly status: FieldRef<"CategoryProducts", 'Boolean'>
    readonly createdAt: FieldRef<"CategoryProducts", 'DateTime'>
    readonly updatedAt: FieldRef<"CategoryProducts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CategoryProducts findUnique
   */
  export type CategoryProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryProductsInclude<ExtArgs> | null
    /**
     * Filter, which CategoryProducts to fetch.
     */
    where: CategoryProductsWhereUniqueInput
  }

  /**
   * CategoryProducts findUniqueOrThrow
   */
  export type CategoryProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryProductsInclude<ExtArgs> | null
    /**
     * Filter, which CategoryProducts to fetch.
     */
    where: CategoryProductsWhereUniqueInput
  }

  /**
   * CategoryProducts findFirst
   */
  export type CategoryProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryProductsInclude<ExtArgs> | null
    /**
     * Filter, which CategoryProducts to fetch.
     */
    where?: CategoryProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryProducts to fetch.
     */
    orderBy?: CategoryProductsOrderByWithRelationInput | CategoryProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryProducts.
     */
    cursor?: CategoryProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryProducts.
     */
    distinct?: CategoryProductsScalarFieldEnum | CategoryProductsScalarFieldEnum[]
  }

  /**
   * CategoryProducts findFirstOrThrow
   */
  export type CategoryProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryProductsInclude<ExtArgs> | null
    /**
     * Filter, which CategoryProducts to fetch.
     */
    where?: CategoryProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryProducts to fetch.
     */
    orderBy?: CategoryProductsOrderByWithRelationInput | CategoryProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryProducts.
     */
    cursor?: CategoryProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryProducts.
     */
    distinct?: CategoryProductsScalarFieldEnum | CategoryProductsScalarFieldEnum[]
  }

  /**
   * CategoryProducts findMany
   */
  export type CategoryProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryProductsInclude<ExtArgs> | null
    /**
     * Filter, which CategoryProducts to fetch.
     */
    where?: CategoryProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryProducts to fetch.
     */
    orderBy?: CategoryProductsOrderByWithRelationInput | CategoryProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryProducts.
     */
    cursor?: CategoryProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryProducts.
     */
    distinct?: CategoryProductsScalarFieldEnum | CategoryProductsScalarFieldEnum[]
  }

  /**
   * CategoryProducts create
   */
  export type CategoryProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryProducts.
     */
    data: XOR<CategoryProductsCreateInput, CategoryProductsUncheckedCreateInput>
  }

  /**
   * CategoryProducts createMany
   */
  export type CategoryProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryProducts.
     */
    data: CategoryProductsCreateManyInput | CategoryProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryProducts createManyAndReturn
   */
  export type CategoryProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * The data used to create many CategoryProducts.
     */
    data: CategoryProductsCreateManyInput | CategoryProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryProducts update
   */
  export type CategoryProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryProducts.
     */
    data: XOR<CategoryProductsUpdateInput, CategoryProductsUncheckedUpdateInput>
    /**
     * Choose, which CategoryProducts to update.
     */
    where: CategoryProductsWhereUniqueInput
  }

  /**
   * CategoryProducts updateMany
   */
  export type CategoryProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryProducts.
     */
    data: XOR<CategoryProductsUpdateManyMutationInput, CategoryProductsUncheckedUpdateManyInput>
    /**
     * Filter which CategoryProducts to update
     */
    where?: CategoryProductsWhereInput
    /**
     * Limit how many CategoryProducts to update.
     */
    limit?: number
  }

  /**
   * CategoryProducts updateManyAndReturn
   */
  export type CategoryProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * The data used to update CategoryProducts.
     */
    data: XOR<CategoryProductsUpdateManyMutationInput, CategoryProductsUncheckedUpdateManyInput>
    /**
     * Filter which CategoryProducts to update
     */
    where?: CategoryProductsWhereInput
    /**
     * Limit how many CategoryProducts to update.
     */
    limit?: number
  }

  /**
   * CategoryProducts upsert
   */
  export type CategoryProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryProducts to update in case it exists.
     */
    where: CategoryProductsWhereUniqueInput
    /**
     * In case the CategoryProducts found by the `where` argument doesn't exist, create a new CategoryProducts with this data.
     */
    create: XOR<CategoryProductsCreateInput, CategoryProductsUncheckedCreateInput>
    /**
     * In case the CategoryProducts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryProductsUpdateInput, CategoryProductsUncheckedUpdateInput>
  }

  /**
   * CategoryProducts delete
   */
  export type CategoryProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryProductsInclude<ExtArgs> | null
    /**
     * Filter which CategoryProducts to delete.
     */
    where: CategoryProductsWhereUniqueInput
  }

  /**
   * CategoryProducts deleteMany
   */
  export type CategoryProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryProducts to delete
     */
    where?: CategoryProductsWhereInput
    /**
     * Limit how many CategoryProducts to delete.
     */
    limit?: number
  }

  /**
   * CategoryProducts.Product
   */
  export type CategoryProducts$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * CategoryProducts without action
   */
  export type CategoryProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProducts
     */
    select?: CategoryProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryProducts
     */
    omit?: CategoryProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryProductsInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Product?: boolean | Brand$ProductArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | Brand$ProductArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends Brand$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Brand$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly updatedAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.Product
   */
  export type Brand$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    title: string | null
    status: boolean | null
    category_product_id: string | null
    seller_user_id: string | null
    brand_id: string | null
    thumbnail: string | null
    warrantyInformation: string | null
    aiSummary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    title: string | null
    status: boolean | null
    category_product_id: string | null
    seller_user_id: string | null
    brand_id: string | null
    thumbnail: string | null
    warrantyInformation: string | null
    aiSummary: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    status: number
    category_product_id: number
    seller_user_id: number
    brand_id: number
    thumbnail: number
    warrantyInformation: number
    aiSummary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    status?: true
    category_product_id?: true
    seller_user_id?: true
    brand_id?: true
    thumbnail?: true
    warrantyInformation?: true
    aiSummary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    status?: true
    category_product_id?: true
    seller_user_id?: true
    brand_id?: true
    thumbnail?: true
    warrantyInformation?: true
    aiSummary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    status?: true
    category_product_id?: true
    seller_user_id?: true
    brand_id?: true
    thumbnail?: true
    warrantyInformation?: true
    aiSummary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    title: string
    status: boolean
    category_product_id: string
    seller_user_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    aiSummary: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    category_product_id?: boolean
    seller_user_id?: boolean
    brand_id?: boolean
    thumbnail?: boolean
    warrantyInformation?: boolean
    aiSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryProducts?: boolean | CategoryProductsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    ProductVariation?: boolean | Product$ProductVariationArgs<ExtArgs>
    UserFavorite?: boolean | Product$UserFavoriteArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    category_product_id?: boolean
    seller_user_id?: boolean
    brand_id?: boolean
    thumbnail?: boolean
    warrantyInformation?: boolean
    aiSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryProducts?: boolean | CategoryProductsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    category_product_id?: boolean
    seller_user_id?: boolean
    brand_id?: boolean
    thumbnail?: boolean
    warrantyInformation?: boolean
    aiSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryProducts?: boolean | CategoryProductsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    status?: boolean
    category_product_id?: boolean
    seller_user_id?: boolean
    brand_id?: boolean
    thumbnail?: boolean
    warrantyInformation?: boolean
    aiSummary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "status" | "category_product_id" | "seller_user_id" | "brand_id" | "thumbnail" | "warrantyInformation" | "aiSummary" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryProducts?: boolean | CategoryProductsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    ProductVariation?: boolean | Product$ProductVariationArgs<ExtArgs>
    UserFavorite?: boolean | Product$UserFavoriteArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryProducts?: boolean | CategoryProductsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryProducts?: boolean | CategoryProductsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      categoryProducts: Prisma.$CategoryProductsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      brand: Prisma.$BrandPayload<ExtArgs>
      ProductVariation: Prisma.$ProductVariationPayload<ExtArgs>[]
      UserFavorite: Prisma.$UserFavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      status: boolean
      category_product_id: string
      seller_user_id: string
      brand_id: string
      thumbnail: string
      warrantyInformation: string
      aiSummary: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoryProducts<T extends CategoryProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryProductsDefaultArgs<ExtArgs>>): Prisma__CategoryProductsClient<$Result.GetResult<Prisma.$CategoryProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ProductVariation<T extends Product$ProductVariationArgs<ExtArgs> = {}>(args?: Subset<T, Product$ProductVariationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserFavorite<T extends Product$UserFavoriteArgs<ExtArgs> = {}>(args?: Subset<T, Product$UserFavoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'Boolean'>
    readonly category_product_id: FieldRef<"Product", 'String'>
    readonly seller_user_id: FieldRef<"Product", 'String'>
    readonly brand_id: FieldRef<"Product", 'String'>
    readonly thumbnail: FieldRef<"Product", 'String'>
    readonly warrantyInformation: FieldRef<"Product", 'String'>
    readonly aiSummary: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.ProductVariation
   */
  export type Product$ProductVariationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationInclude<ExtArgs> | null
    where?: ProductVariationWhereInput
    orderBy?: ProductVariationOrderByWithRelationInput | ProductVariationOrderByWithRelationInput[]
    cursor?: ProductVariationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariationScalarFieldEnum | ProductVariationScalarFieldEnum[]
  }

  /**
   * Product.UserFavorite
   */
  export type Product$UserFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    cursor?: UserFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariation
   */

  export type AggregateProductVariation = {
    _count: ProductVariationCountAggregateOutputType | null
    _avg: ProductVariationAvgAggregateOutputType | null
    _sum: ProductVariationSumAggregateOutputType | null
    _min: ProductVariationMinAggregateOutputType | null
    _max: ProductVariationMaxAggregateOutputType | null
  }

  export type ProductVariationAvgAggregateOutputType = {
    discountPercentage: Decimal | null
    price: Decimal | null
    quantity: number | null
  }

  export type ProductVariationSumAggregateOutputType = {
    discountPercentage: Decimal | null
    price: Decimal | null
    quantity: number | null
  }

  export type ProductVariationMinAggregateOutputType = {
    id: string | null
    title: string | null
    discountPercentage: Decimal | null
    price: Decimal | null
    quantity: number | null
    description: string | null
    product_id: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    discountPercentage: Decimal | null
    price: Decimal | null
    quantity: number | null
    description: string | null
    product_id: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariationCountAggregateOutputType = {
    id: number
    title: number
    discountPercentage: number
    price: number
    quantity: number
    description: number
    product_id: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductVariationAvgAggregateInputType = {
    discountPercentage?: true
    price?: true
    quantity?: true
  }

  export type ProductVariationSumAggregateInputType = {
    discountPercentage?: true
    price?: true
    quantity?: true
  }

  export type ProductVariationMinAggregateInputType = {
    id?: true
    title?: true
    discountPercentage?: true
    price?: true
    quantity?: true
    description?: true
    product_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariationMaxAggregateInputType = {
    id?: true
    title?: true
    discountPercentage?: true
    price?: true
    quantity?: true
    description?: true
    product_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariationCountAggregateInputType = {
    id?: true
    title?: true
    discountPercentage?: true
    price?: true
    quantity?: true
    description?: true
    product_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductVariationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariation to aggregate.
     */
    where?: ProductVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariations to fetch.
     */
    orderBy?: ProductVariationOrderByWithRelationInput | ProductVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariations
    **/
    _count?: true | ProductVariationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariationMaxAggregateInputType
  }

  export type GetProductVariationAggregateType<T extends ProductVariationAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariation[P]>
      : GetScalarType<T[P], AggregateProductVariation[P]>
  }




  export type ProductVariationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariationWhereInput
    orderBy?: ProductVariationOrderByWithAggregationInput | ProductVariationOrderByWithAggregationInput[]
    by: ProductVariationScalarFieldEnum[] | ProductVariationScalarFieldEnum
    having?: ProductVariationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariationCountAggregateInputType | true
    _avg?: ProductVariationAvgAggregateInputType
    _sum?: ProductVariationSumAggregateInputType
    _min?: ProductVariationMinAggregateInputType
    _max?: ProductVariationMaxAggregateInputType
  }

  export type ProductVariationGroupByOutputType = {
    id: string
    title: string
    discountPercentage: Decimal
    price: Decimal
    quantity: number
    description: string
    product_id: string
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductVariationCountAggregateOutputType | null
    _avg: ProductVariationAvgAggregateOutputType | null
    _sum: ProductVariationSumAggregateOutputType | null
    _min: ProductVariationMinAggregateOutputType | null
    _max: ProductVariationMaxAggregateOutputType | null
  }

  type GetProductVariationGroupByPayload<T extends ProductVariationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariationGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariationGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    discountPercentage?: boolean
    price?: boolean
    quantity?: boolean
    description?: boolean
    product_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ReviewProduct?: boolean | ProductVariation$ReviewProductArgs<ExtArgs>
    productVariationImages?: boolean | ProductVariation$productVariationImagesArgs<ExtArgs>
    CartItem?: boolean | ProductVariation$CartItemArgs<ExtArgs>
    _count?: boolean | ProductVariationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariation"]>

  export type ProductVariationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    discountPercentage?: boolean
    price?: boolean
    quantity?: boolean
    description?: boolean
    product_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariation"]>

  export type ProductVariationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    discountPercentage?: boolean
    price?: boolean
    quantity?: boolean
    description?: boolean
    product_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariation"]>

  export type ProductVariationSelectScalar = {
    id?: boolean
    title?: boolean
    discountPercentage?: boolean
    price?: boolean
    quantity?: boolean
    description?: boolean
    product_id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductVariationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "discountPercentage" | "price" | "quantity" | "description" | "product_id" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["productVariation"]>
  export type ProductVariationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    ReviewProduct?: boolean | ProductVariation$ReviewProductArgs<ExtArgs>
    productVariationImages?: boolean | ProductVariation$productVariationImagesArgs<ExtArgs>
    CartItem?: boolean | ProductVariation$CartItemArgs<ExtArgs>
    _count?: boolean | ProductVariationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductVariationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductVariationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariation"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      ReviewProduct: Prisma.$ReviewProductPayload<ExtArgs>[]
      productVariationImages: Prisma.$productVariationImagesPayload<ExtArgs>[]
      CartItem: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      discountPercentage: Prisma.Decimal
      price: Prisma.Decimal
      quantity: number
      description: string
      product_id: string
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productVariation"]>
    composites: {}
  }

  type ProductVariationGetPayload<S extends boolean | null | undefined | ProductVariationDefaultArgs> = $Result.GetResult<Prisma.$ProductVariationPayload, S>

  type ProductVariationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductVariationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariationCountAggregateInputType | true
    }

  export interface ProductVariationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariation'], meta: { name: 'ProductVariation' } }
    /**
     * Find zero or one ProductVariation that matches the filter.
     * @param {ProductVariationFindUniqueArgs} args - Arguments to find a ProductVariation
     * @example
     * // Get one ProductVariation
     * const productVariation = await prisma.productVariation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariationFindUniqueArgs>(args: SelectSubset<T, ProductVariationFindUniqueArgs<ExtArgs>>): Prisma__ProductVariationClient<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductVariationFindUniqueOrThrowArgs} args - Arguments to find a ProductVariation
     * @example
     * // Get one ProductVariation
     * const productVariation = await prisma.productVariation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariationFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariationClient<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariationFindFirstArgs} args - Arguments to find a ProductVariation
     * @example
     * // Get one ProductVariation
     * const productVariation = await prisma.productVariation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariationFindFirstArgs>(args?: SelectSubset<T, ProductVariationFindFirstArgs<ExtArgs>>): Prisma__ProductVariationClient<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariationFindFirstOrThrowArgs} args - Arguments to find a ProductVariation
     * @example
     * // Get one ProductVariation
     * const productVariation = await prisma.productVariation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariationFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariationClient<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariations
     * const productVariations = await prisma.productVariation.findMany()
     * 
     * // Get first 10 ProductVariations
     * const productVariations = await prisma.productVariation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariationWithIdOnly = await prisma.productVariation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariationFindManyArgs>(args?: SelectSubset<T, ProductVariationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariation.
     * @param {ProductVariationCreateArgs} args - Arguments to create a ProductVariation.
     * @example
     * // Create one ProductVariation
     * const ProductVariation = await prisma.productVariation.create({
     *   data: {
     *     // ... data to create a ProductVariation
     *   }
     * })
     * 
     */
    create<T extends ProductVariationCreateArgs>(args: SelectSubset<T, ProductVariationCreateArgs<ExtArgs>>): Prisma__ProductVariationClient<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariations.
     * @param {ProductVariationCreateManyArgs} args - Arguments to create many ProductVariations.
     * @example
     * // Create many ProductVariations
     * const productVariation = await prisma.productVariation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariationCreateManyArgs>(args?: SelectSubset<T, ProductVariationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariations and returns the data saved in the database.
     * @param {ProductVariationCreateManyAndReturnArgs} args - Arguments to create many ProductVariations.
     * @example
     * // Create many ProductVariations
     * const productVariation = await prisma.productVariation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariations and only return the `id`
     * const productVariationWithIdOnly = await prisma.productVariation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariationCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariation.
     * @param {ProductVariationDeleteArgs} args - Arguments to delete one ProductVariation.
     * @example
     * // Delete one ProductVariation
     * const ProductVariation = await prisma.productVariation.delete({
     *   where: {
     *     // ... filter to delete one ProductVariation
     *   }
     * })
     * 
     */
    delete<T extends ProductVariationDeleteArgs>(args: SelectSubset<T, ProductVariationDeleteArgs<ExtArgs>>): Prisma__ProductVariationClient<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariation.
     * @param {ProductVariationUpdateArgs} args - Arguments to update one ProductVariation.
     * @example
     * // Update one ProductVariation
     * const productVariation = await prisma.productVariation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariationUpdateArgs>(args: SelectSubset<T, ProductVariationUpdateArgs<ExtArgs>>): Prisma__ProductVariationClient<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariations.
     * @param {ProductVariationDeleteManyArgs} args - Arguments to filter ProductVariations to delete.
     * @example
     * // Delete a few ProductVariations
     * const { count } = await prisma.productVariation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariationDeleteManyArgs>(args?: SelectSubset<T, ProductVariationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariations
     * const productVariation = await prisma.productVariation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariationUpdateManyArgs>(args: SelectSubset<T, ProductVariationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariations and returns the data updated in the database.
     * @param {ProductVariationUpdateManyAndReturnArgs} args - Arguments to update many ProductVariations.
     * @example
     * // Update many ProductVariations
     * const productVariation = await prisma.productVariation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariations and only return the `id`
     * const productVariationWithIdOnly = await prisma.productVariation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductVariationUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductVariationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariation.
     * @param {ProductVariationUpsertArgs} args - Arguments to update or create a ProductVariation.
     * @example
     * // Update or create a ProductVariation
     * const productVariation = await prisma.productVariation.upsert({
     *   create: {
     *     // ... data to create a ProductVariation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariation we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariationUpsertArgs>(args: SelectSubset<T, ProductVariationUpsertArgs<ExtArgs>>): Prisma__ProductVariationClient<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariationCountArgs} args - Arguments to filter ProductVariations to count.
     * @example
     * // Count the number of ProductVariations
     * const count = await prisma.productVariation.count({
     *   where: {
     *     // ... the filter for the ProductVariations we want to count
     *   }
     * })
    **/
    count<T extends ProductVariationCountArgs>(
      args?: Subset<T, ProductVariationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariationAggregateArgs>(args: Subset<T, ProductVariationAggregateArgs>): Prisma.PrismaPromise<GetProductVariationAggregateType<T>>

    /**
     * Group by ProductVariation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariationGroupByArgs} args - Group by arguments.
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
      T extends ProductVariationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariationGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductVariationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariation model
   */
  readonly fields: ProductVariationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ReviewProduct<T extends ProductVariation$ReviewProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariation$ReviewProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productVariationImages<T extends ProductVariation$productVariationImagesArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariation$productVariationImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CartItem<T extends ProductVariation$CartItemArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariation$CartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductVariation model
   */
  interface ProductVariationFieldRefs {
    readonly id: FieldRef<"ProductVariation", 'String'>
    readonly title: FieldRef<"ProductVariation", 'String'>
    readonly discountPercentage: FieldRef<"ProductVariation", 'Decimal'>
    readonly price: FieldRef<"ProductVariation", 'Decimal'>
    readonly quantity: FieldRef<"ProductVariation", 'Int'>
    readonly description: FieldRef<"ProductVariation", 'String'>
    readonly product_id: FieldRef<"ProductVariation", 'String'>
    readonly status: FieldRef<"ProductVariation", 'Boolean'>
    readonly createdAt: FieldRef<"ProductVariation", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductVariation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariation findUnique
   */
  export type ProductVariationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariation to fetch.
     */
    where: ProductVariationWhereUniqueInput
  }

  /**
   * ProductVariation findUniqueOrThrow
   */
  export type ProductVariationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariation to fetch.
     */
    where: ProductVariationWhereUniqueInput
  }

  /**
   * ProductVariation findFirst
   */
  export type ProductVariationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariation to fetch.
     */
    where?: ProductVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariations to fetch.
     */
    orderBy?: ProductVariationOrderByWithRelationInput | ProductVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariations.
     */
    cursor?: ProductVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariations.
     */
    distinct?: ProductVariationScalarFieldEnum | ProductVariationScalarFieldEnum[]
  }

  /**
   * ProductVariation findFirstOrThrow
   */
  export type ProductVariationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariation to fetch.
     */
    where?: ProductVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariations to fetch.
     */
    orderBy?: ProductVariationOrderByWithRelationInput | ProductVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariations.
     */
    cursor?: ProductVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariations.
     */
    distinct?: ProductVariationScalarFieldEnum | ProductVariationScalarFieldEnum[]
  }

  /**
   * ProductVariation findMany
   */
  export type ProductVariationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariations to fetch.
     */
    where?: ProductVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariations to fetch.
     */
    orderBy?: ProductVariationOrderByWithRelationInput | ProductVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariations.
     */
    cursor?: ProductVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariations.
     */
    distinct?: ProductVariationScalarFieldEnum | ProductVariationScalarFieldEnum[]
  }

  /**
   * ProductVariation create
   */
  export type ProductVariationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariation.
     */
    data: XOR<ProductVariationCreateInput, ProductVariationUncheckedCreateInput>
  }

  /**
   * ProductVariation createMany
   */
  export type ProductVariationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariations.
     */
    data: ProductVariationCreateManyInput | ProductVariationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariation createManyAndReturn
   */
  export type ProductVariationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * The data used to create many ProductVariations.
     */
    data: ProductVariationCreateManyInput | ProductVariationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariation update
   */
  export type ProductVariationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariation.
     */
    data: XOR<ProductVariationUpdateInput, ProductVariationUncheckedUpdateInput>
    /**
     * Choose, which ProductVariation to update.
     */
    where: ProductVariationWhereUniqueInput
  }

  /**
   * ProductVariation updateMany
   */
  export type ProductVariationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariations.
     */
    data: XOR<ProductVariationUpdateManyMutationInput, ProductVariationUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariations to update
     */
    where?: ProductVariationWhereInput
    /**
     * Limit how many ProductVariations to update.
     */
    limit?: number
  }

  /**
   * ProductVariation updateManyAndReturn
   */
  export type ProductVariationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * The data used to update ProductVariations.
     */
    data: XOR<ProductVariationUpdateManyMutationInput, ProductVariationUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariations to update
     */
    where?: ProductVariationWhereInput
    /**
     * Limit how many ProductVariations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariation upsert
   */
  export type ProductVariationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariation to update in case it exists.
     */
    where: ProductVariationWhereUniqueInput
    /**
     * In case the ProductVariation found by the `where` argument doesn't exist, create a new ProductVariation with this data.
     */
    create: XOR<ProductVariationCreateInput, ProductVariationUncheckedCreateInput>
    /**
     * In case the ProductVariation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariationUpdateInput, ProductVariationUncheckedUpdateInput>
  }

  /**
   * ProductVariation delete
   */
  export type ProductVariationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationInclude<ExtArgs> | null
    /**
     * Filter which ProductVariation to delete.
     */
    where: ProductVariationWhereUniqueInput
  }

  /**
   * ProductVariation deleteMany
   */
  export type ProductVariationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariations to delete
     */
    where?: ProductVariationWhereInput
    /**
     * Limit how many ProductVariations to delete.
     */
    limit?: number
  }

  /**
   * ProductVariation.ReviewProduct
   */
  export type ProductVariation$ReviewProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
    where?: ReviewProductWhereInput
    orderBy?: ReviewProductOrderByWithRelationInput | ReviewProductOrderByWithRelationInput[]
    cursor?: ReviewProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewProductScalarFieldEnum | ReviewProductScalarFieldEnum[]
  }

  /**
   * ProductVariation.productVariationImages
   */
  export type ProductVariation$productVariationImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesInclude<ExtArgs> | null
    where?: productVariationImagesWhereInput
    orderBy?: productVariationImagesOrderByWithRelationInput | productVariationImagesOrderByWithRelationInput[]
    cursor?: productVariationImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariationImagesScalarFieldEnum | ProductVariationImagesScalarFieldEnum[]
  }

  /**
   * ProductVariation.CartItem
   */
  export type ProductVariation$CartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * ProductVariation without action
   */
  export type ProductVariationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariation
     */
    select?: ProductVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductVariation
     */
    omit?: ProductVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariationInclude<ExtArgs> | null
  }


  /**
   * Model productVariationImages
   */

  export type AggregateProductVariationImages = {
    _count: ProductVariationImagesCountAggregateOutputType | null
    _min: ProductVariationImagesMinAggregateOutputType | null
    _max: ProductVariationImagesMaxAggregateOutputType | null
  }

  export type ProductVariationImagesMinAggregateOutputType = {
    id: string | null
    link: string | null
    product_variation_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariationImagesMaxAggregateOutputType = {
    id: string | null
    link: string | null
    product_variation_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariationImagesCountAggregateOutputType = {
    id: number
    link: number
    product_variation_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductVariationImagesMinAggregateInputType = {
    id?: true
    link?: true
    product_variation_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariationImagesMaxAggregateInputType = {
    id?: true
    link?: true
    product_variation_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariationImagesCountAggregateInputType = {
    id?: true
    link?: true
    product_variation_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductVariationImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productVariationImages to aggregate.
     */
    where?: productVariationImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productVariationImages to fetch.
     */
    orderBy?: productVariationImagesOrderByWithRelationInput | productVariationImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productVariationImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productVariationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productVariationImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productVariationImages
    **/
    _count?: true | ProductVariationImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariationImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariationImagesMaxAggregateInputType
  }

  export type GetProductVariationImagesAggregateType<T extends ProductVariationImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariationImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariationImages[P]>
      : GetScalarType<T[P], AggregateProductVariationImages[P]>
  }




  export type productVariationImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productVariationImagesWhereInput
    orderBy?: productVariationImagesOrderByWithAggregationInput | productVariationImagesOrderByWithAggregationInput[]
    by: ProductVariationImagesScalarFieldEnum[] | ProductVariationImagesScalarFieldEnum
    having?: productVariationImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariationImagesCountAggregateInputType | true
    _min?: ProductVariationImagesMinAggregateInputType
    _max?: ProductVariationImagesMaxAggregateInputType
  }

  export type ProductVariationImagesGroupByOutputType = {
    id: string
    link: string
    product_variation_id: string
    createdAt: Date
    updatedAt: Date
    _count: ProductVariationImagesCountAggregateOutputType | null
    _min: ProductVariationImagesMinAggregateOutputType | null
    _max: ProductVariationImagesMaxAggregateOutputType | null
  }

  type GetProductVariationImagesGroupByPayload<T extends productVariationImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariationImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariationImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariationImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariationImagesGroupByOutputType[P]>
        }
      >
    >


  export type productVariationImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    product_variation_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariationImages"]>

  export type productVariationImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    product_variation_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariationImages"]>

  export type productVariationImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    product_variation_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariationImages"]>

  export type productVariationImagesSelectScalar = {
    id?: boolean
    link?: boolean
    product_variation_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type productVariationImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "link" | "product_variation_id" | "createdAt" | "updatedAt", ExtArgs["result"]["productVariationImages"]>
  export type productVariationImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }
  export type productVariationImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }
  export type productVariationImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
  }

  export type $productVariationImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productVariationImages"
    objects: {
      productVariation: Prisma.$ProductVariationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      link: string
      product_variation_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productVariationImages"]>
    composites: {}
  }

  type productVariationImagesGetPayload<S extends boolean | null | undefined | productVariationImagesDefaultArgs> = $Result.GetResult<Prisma.$productVariationImagesPayload, S>

  type productVariationImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productVariationImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductVariationImagesCountAggregateInputType | true
    }

  export interface productVariationImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productVariationImages'], meta: { name: 'productVariationImages' } }
    /**
     * Find zero or one ProductVariationImages that matches the filter.
     * @param {productVariationImagesFindUniqueArgs} args - Arguments to find a ProductVariationImages
     * @example
     * // Get one ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productVariationImagesFindUniqueArgs>(args: SelectSubset<T, productVariationImagesFindUniqueArgs<ExtArgs>>): Prisma__productVariationImagesClient<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductVariationImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productVariationImagesFindUniqueOrThrowArgs} args - Arguments to find a ProductVariationImages
     * @example
     * // Get one ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productVariationImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, productVariationImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productVariationImagesClient<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariationImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationImagesFindFirstArgs} args - Arguments to find a ProductVariationImages
     * @example
     * // Get one ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productVariationImagesFindFirstArgs>(args?: SelectSubset<T, productVariationImagesFindFirstArgs<ExtArgs>>): Prisma__productVariationImagesClient<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductVariationImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationImagesFindFirstOrThrowArgs} args - Arguments to find a ProductVariationImages
     * @example
     * // Get one ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productVariationImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, productVariationImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__productVariationImagesClient<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductVariationImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.findMany()
     * 
     * // Get first 10 ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariationImagesWithIdOnly = await prisma.productVariationImages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productVariationImagesFindManyArgs>(args?: SelectSubset<T, productVariationImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductVariationImages.
     * @param {productVariationImagesCreateArgs} args - Arguments to create a ProductVariationImages.
     * @example
     * // Create one ProductVariationImages
     * const ProductVariationImages = await prisma.productVariationImages.create({
     *   data: {
     *     // ... data to create a ProductVariationImages
     *   }
     * })
     * 
     */
    create<T extends productVariationImagesCreateArgs>(args: SelectSubset<T, productVariationImagesCreateArgs<ExtArgs>>): Prisma__productVariationImagesClient<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductVariationImages.
     * @param {productVariationImagesCreateManyArgs} args - Arguments to create many ProductVariationImages.
     * @example
     * // Create many ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productVariationImagesCreateManyArgs>(args?: SelectSubset<T, productVariationImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariationImages and returns the data saved in the database.
     * @param {productVariationImagesCreateManyAndReturnArgs} args - Arguments to create many ProductVariationImages.
     * @example
     * // Create many ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariationImages and only return the `id`
     * const productVariationImagesWithIdOnly = await prisma.productVariationImages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productVariationImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, productVariationImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductVariationImages.
     * @param {productVariationImagesDeleteArgs} args - Arguments to delete one ProductVariationImages.
     * @example
     * // Delete one ProductVariationImages
     * const ProductVariationImages = await prisma.productVariationImages.delete({
     *   where: {
     *     // ... filter to delete one ProductVariationImages
     *   }
     * })
     * 
     */
    delete<T extends productVariationImagesDeleteArgs>(args: SelectSubset<T, productVariationImagesDeleteArgs<ExtArgs>>): Prisma__productVariationImagesClient<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductVariationImages.
     * @param {productVariationImagesUpdateArgs} args - Arguments to update one ProductVariationImages.
     * @example
     * // Update one ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productVariationImagesUpdateArgs>(args: SelectSubset<T, productVariationImagesUpdateArgs<ExtArgs>>): Prisma__productVariationImagesClient<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductVariationImages.
     * @param {productVariationImagesDeleteManyArgs} args - Arguments to filter ProductVariationImages to delete.
     * @example
     * // Delete a few ProductVariationImages
     * const { count } = await prisma.productVariationImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productVariationImagesDeleteManyArgs>(args?: SelectSubset<T, productVariationImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariationImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productVariationImagesUpdateManyArgs>(args: SelectSubset<T, productVariationImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariationImages and returns the data updated in the database.
     * @param {productVariationImagesUpdateManyAndReturnArgs} args - Arguments to update many ProductVariationImages.
     * @example
     * // Update many ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductVariationImages and only return the `id`
     * const productVariationImagesWithIdOnly = await prisma.productVariationImages.updateManyAndReturn({
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
    updateManyAndReturn<T extends productVariationImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, productVariationImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductVariationImages.
     * @param {productVariationImagesUpsertArgs} args - Arguments to update or create a ProductVariationImages.
     * @example
     * // Update or create a ProductVariationImages
     * const productVariationImages = await prisma.productVariationImages.upsert({
     *   create: {
     *     // ... data to create a ProductVariationImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariationImages we want to update
     *   }
     * })
     */
    upsert<T extends productVariationImagesUpsertArgs>(args: SelectSubset<T, productVariationImagesUpsertArgs<ExtArgs>>): Prisma__productVariationImagesClient<$Result.GetResult<Prisma.$productVariationImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductVariationImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationImagesCountArgs} args - Arguments to filter ProductVariationImages to count.
     * @example
     * // Count the number of ProductVariationImages
     * const count = await prisma.productVariationImages.count({
     *   where: {
     *     // ... the filter for the ProductVariationImages we want to count
     *   }
     * })
    **/
    count<T extends productVariationImagesCountArgs>(
      args?: Subset<T, productVariationImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariationImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariationImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariationImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductVariationImagesAggregateArgs>(args: Subset<T, ProductVariationImagesAggregateArgs>): Prisma.PrismaPromise<GetProductVariationImagesAggregateType<T>>

    /**
     * Group by ProductVariationImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productVariationImagesGroupByArgs} args - Group by arguments.
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
      T extends productVariationImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productVariationImagesGroupByArgs['orderBy'] }
        : { orderBy?: productVariationImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productVariationImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariationImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productVariationImages model
   */
  readonly fields: productVariationImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productVariationImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productVariationImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productVariation<T extends ProductVariationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariationDefaultArgs<ExtArgs>>): Prisma__ProductVariationClient<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the productVariationImages model
   */
  interface productVariationImagesFieldRefs {
    readonly id: FieldRef<"productVariationImages", 'String'>
    readonly link: FieldRef<"productVariationImages", 'String'>
    readonly product_variation_id: FieldRef<"productVariationImages", 'String'>
    readonly createdAt: FieldRef<"productVariationImages", 'DateTime'>
    readonly updatedAt: FieldRef<"productVariationImages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * productVariationImages findUnique
   */
  export type productVariationImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesInclude<ExtArgs> | null
    /**
     * Filter, which productVariationImages to fetch.
     */
    where: productVariationImagesWhereUniqueInput
  }

  /**
   * productVariationImages findUniqueOrThrow
   */
  export type productVariationImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesInclude<ExtArgs> | null
    /**
     * Filter, which productVariationImages to fetch.
     */
    where: productVariationImagesWhereUniqueInput
  }

  /**
   * productVariationImages findFirst
   */
  export type productVariationImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesInclude<ExtArgs> | null
    /**
     * Filter, which productVariationImages to fetch.
     */
    where?: productVariationImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productVariationImages to fetch.
     */
    orderBy?: productVariationImagesOrderByWithRelationInput | productVariationImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productVariationImages.
     */
    cursor?: productVariationImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productVariationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productVariationImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productVariationImages.
     */
    distinct?: ProductVariationImagesScalarFieldEnum | ProductVariationImagesScalarFieldEnum[]
  }

  /**
   * productVariationImages findFirstOrThrow
   */
  export type productVariationImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesInclude<ExtArgs> | null
    /**
     * Filter, which productVariationImages to fetch.
     */
    where?: productVariationImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productVariationImages to fetch.
     */
    orderBy?: productVariationImagesOrderByWithRelationInput | productVariationImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productVariationImages.
     */
    cursor?: productVariationImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productVariationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productVariationImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productVariationImages.
     */
    distinct?: ProductVariationImagesScalarFieldEnum | ProductVariationImagesScalarFieldEnum[]
  }

  /**
   * productVariationImages findMany
   */
  export type productVariationImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesInclude<ExtArgs> | null
    /**
     * Filter, which productVariationImages to fetch.
     */
    where?: productVariationImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productVariationImages to fetch.
     */
    orderBy?: productVariationImagesOrderByWithRelationInput | productVariationImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productVariationImages.
     */
    cursor?: productVariationImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productVariationImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productVariationImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productVariationImages.
     */
    distinct?: ProductVariationImagesScalarFieldEnum | ProductVariationImagesScalarFieldEnum[]
  }

  /**
   * productVariationImages create
   */
  export type productVariationImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a productVariationImages.
     */
    data: XOR<productVariationImagesCreateInput, productVariationImagesUncheckedCreateInput>
  }

  /**
   * productVariationImages createMany
   */
  export type productVariationImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productVariationImages.
     */
    data: productVariationImagesCreateManyInput | productVariationImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productVariationImages createManyAndReturn
   */
  export type productVariationImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * The data used to create many productVariationImages.
     */
    data: productVariationImagesCreateManyInput | productVariationImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * productVariationImages update
   */
  export type productVariationImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a productVariationImages.
     */
    data: XOR<productVariationImagesUpdateInput, productVariationImagesUncheckedUpdateInput>
    /**
     * Choose, which productVariationImages to update.
     */
    where: productVariationImagesWhereUniqueInput
  }

  /**
   * productVariationImages updateMany
   */
  export type productVariationImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productVariationImages.
     */
    data: XOR<productVariationImagesUpdateManyMutationInput, productVariationImagesUncheckedUpdateManyInput>
    /**
     * Filter which productVariationImages to update
     */
    where?: productVariationImagesWhereInput
    /**
     * Limit how many productVariationImages to update.
     */
    limit?: number
  }

  /**
   * productVariationImages updateManyAndReturn
   */
  export type productVariationImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * The data used to update productVariationImages.
     */
    data: XOR<productVariationImagesUpdateManyMutationInput, productVariationImagesUncheckedUpdateManyInput>
    /**
     * Filter which productVariationImages to update
     */
    where?: productVariationImagesWhereInput
    /**
     * Limit how many productVariationImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * productVariationImages upsert
   */
  export type productVariationImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the productVariationImages to update in case it exists.
     */
    where: productVariationImagesWhereUniqueInput
    /**
     * In case the productVariationImages found by the `where` argument doesn't exist, create a new productVariationImages with this data.
     */
    create: XOR<productVariationImagesCreateInput, productVariationImagesUncheckedCreateInput>
    /**
     * In case the productVariationImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productVariationImagesUpdateInput, productVariationImagesUncheckedUpdateInput>
  }

  /**
   * productVariationImages delete
   */
  export type productVariationImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesInclude<ExtArgs> | null
    /**
     * Filter which productVariationImages to delete.
     */
    where: productVariationImagesWhereUniqueInput
  }

  /**
   * productVariationImages deleteMany
   */
  export type productVariationImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productVariationImages to delete
     */
    where?: productVariationImagesWhereInput
    /**
     * Limit how many productVariationImages to delete.
     */
    limit?: number
  }

  /**
   * productVariationImages without action
   */
  export type productVariationImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productVariationImages
     */
    select?: productVariationImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productVariationImages
     */
    omit?: productVariationImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productVariationImagesInclude<ExtArgs> | null
  }


  /**
   * Model ReviewProduct
   */

  export type AggregateReviewProduct = {
    _count: ReviewProductCountAggregateOutputType | null
    _avg: ReviewProductAvgAggregateOutputType | null
    _sum: ReviewProductSumAggregateOutputType | null
    _min: ReviewProductMinAggregateOutputType | null
    _max: ReviewProductMaxAggregateOutputType | null
  }

  export type ReviewProductAvgAggregateOutputType = {
    rating: Decimal | null
  }

  export type ReviewProductSumAggregateOutputType = {
    rating: Decimal | null
  }

  export type ReviewProductMinAggregateOutputType = {
    id: string | null
    rating: Decimal | null
    comment: string | null
    country: string | null
    product_variation_id: string | null
    reviewer_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewProductMaxAggregateOutputType = {
    id: string | null
    rating: Decimal | null
    comment: string | null
    country: string | null
    product_variation_id: string | null
    reviewer_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewProductCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    photos: number
    country: number
    product_variation_id: number
    reviewer_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewProductAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewProductSumAggregateInputType = {
    rating?: true
  }

  export type ReviewProductMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    country?: true
    product_variation_id?: true
    reviewer_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewProductMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    country?: true
    product_variation_id?: true
    reviewer_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewProductCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    photos?: true
    country?: true
    product_variation_id?: true
    reviewer_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewProduct to aggregate.
     */
    where?: ReviewProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewProducts to fetch.
     */
    orderBy?: ReviewProductOrderByWithRelationInput | ReviewProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewProducts
    **/
    _count?: true | ReviewProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewProductMaxAggregateInputType
  }

  export type GetReviewProductAggregateType<T extends ReviewProductAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewProduct[P]>
      : GetScalarType<T[P], AggregateReviewProduct[P]>
  }




  export type ReviewProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewProductWhereInput
    orderBy?: ReviewProductOrderByWithAggregationInput | ReviewProductOrderByWithAggregationInput[]
    by: ReviewProductScalarFieldEnum[] | ReviewProductScalarFieldEnum
    having?: ReviewProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewProductCountAggregateInputType | true
    _avg?: ReviewProductAvgAggregateInputType
    _sum?: ReviewProductSumAggregateInputType
    _min?: ReviewProductMinAggregateInputType
    _max?: ReviewProductMaxAggregateInputType
  }

  export type ReviewProductGroupByOutputType = {
    id: string
    rating: Decimal
    comment: string
    photos: string[]
    country: string | null
    product_variation_id: string
    reviewer_id: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewProductCountAggregateOutputType | null
    _avg: ReviewProductAvgAggregateOutputType | null
    _sum: ReviewProductSumAggregateOutputType | null
    _min: ReviewProductMinAggregateOutputType | null
    _max: ReviewProductMaxAggregateOutputType | null
  }

  type GetReviewProductGroupByPayload<T extends ReviewProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewProductGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewProductGroupByOutputType[P]>
        }
      >
    >


  export type ReviewProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    photos?: boolean
    country?: boolean
    product_variation_id?: boolean
    reviewer_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewProduct"]>

  export type ReviewProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    photos?: boolean
    country?: boolean
    product_variation_id?: boolean
    reviewer_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewProduct"]>

  export type ReviewProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    photos?: boolean
    country?: boolean
    product_variation_id?: boolean
    reviewer_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewProduct"]>

  export type ReviewProductSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    photos?: boolean
    country?: boolean
    product_variation_id?: boolean
    reviewer_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "photos" | "country" | "product_variation_id" | "reviewer_id" | "createdAt" | "updatedAt", ExtArgs["result"]["reviewProduct"]>
  export type ReviewProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariation?: boolean | ProductVariationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewProduct"
    objects: {
      productVariation: Prisma.$ProductVariationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: Prisma.Decimal
      comment: string
      photos: string[]
      country: string | null
      product_variation_id: string
      reviewer_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reviewProduct"]>
    composites: {}
  }

  type ReviewProductGetPayload<S extends boolean | null | undefined | ReviewProductDefaultArgs> = $Result.GetResult<Prisma.$ReviewProductPayload, S>

  type ReviewProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewProductCountAggregateInputType | true
    }

  export interface ReviewProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewProduct'], meta: { name: 'ReviewProduct' } }
    /**
     * Find zero or one ReviewProduct that matches the filter.
     * @param {ReviewProductFindUniqueArgs} args - Arguments to find a ReviewProduct
     * @example
     * // Get one ReviewProduct
     * const reviewProduct = await prisma.reviewProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewProductFindUniqueArgs>(args: SelectSubset<T, ReviewProductFindUniqueArgs<ExtArgs>>): Prisma__ReviewProductClient<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewProductFindUniqueOrThrowArgs} args - Arguments to find a ReviewProduct
     * @example
     * // Get one ReviewProduct
     * const reviewProduct = await prisma.reviewProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewProductClient<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewProductFindFirstArgs} args - Arguments to find a ReviewProduct
     * @example
     * // Get one ReviewProduct
     * const reviewProduct = await prisma.reviewProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewProductFindFirstArgs>(args?: SelectSubset<T, ReviewProductFindFirstArgs<ExtArgs>>): Prisma__ReviewProductClient<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewProductFindFirstOrThrowArgs} args - Arguments to find a ReviewProduct
     * @example
     * // Get one ReviewProduct
     * const reviewProduct = await prisma.reviewProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewProductClient<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewProducts
     * const reviewProducts = await prisma.reviewProduct.findMany()
     * 
     * // Get first 10 ReviewProducts
     * const reviewProducts = await prisma.reviewProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewProductWithIdOnly = await prisma.reviewProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewProductFindManyArgs>(args?: SelectSubset<T, ReviewProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewProduct.
     * @param {ReviewProductCreateArgs} args - Arguments to create a ReviewProduct.
     * @example
     * // Create one ReviewProduct
     * const ReviewProduct = await prisma.reviewProduct.create({
     *   data: {
     *     // ... data to create a ReviewProduct
     *   }
     * })
     * 
     */
    create<T extends ReviewProductCreateArgs>(args: SelectSubset<T, ReviewProductCreateArgs<ExtArgs>>): Prisma__ReviewProductClient<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewProducts.
     * @param {ReviewProductCreateManyArgs} args - Arguments to create many ReviewProducts.
     * @example
     * // Create many ReviewProducts
     * const reviewProduct = await prisma.reviewProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewProductCreateManyArgs>(args?: SelectSubset<T, ReviewProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewProducts and returns the data saved in the database.
     * @param {ReviewProductCreateManyAndReturnArgs} args - Arguments to create many ReviewProducts.
     * @example
     * // Create many ReviewProducts
     * const reviewProduct = await prisma.reviewProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewProducts and only return the `id`
     * const reviewProductWithIdOnly = await prisma.reviewProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewProduct.
     * @param {ReviewProductDeleteArgs} args - Arguments to delete one ReviewProduct.
     * @example
     * // Delete one ReviewProduct
     * const ReviewProduct = await prisma.reviewProduct.delete({
     *   where: {
     *     // ... filter to delete one ReviewProduct
     *   }
     * })
     * 
     */
    delete<T extends ReviewProductDeleteArgs>(args: SelectSubset<T, ReviewProductDeleteArgs<ExtArgs>>): Prisma__ReviewProductClient<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewProduct.
     * @param {ReviewProductUpdateArgs} args - Arguments to update one ReviewProduct.
     * @example
     * // Update one ReviewProduct
     * const reviewProduct = await prisma.reviewProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewProductUpdateArgs>(args: SelectSubset<T, ReviewProductUpdateArgs<ExtArgs>>): Prisma__ReviewProductClient<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewProducts.
     * @param {ReviewProductDeleteManyArgs} args - Arguments to filter ReviewProducts to delete.
     * @example
     * // Delete a few ReviewProducts
     * const { count } = await prisma.reviewProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewProductDeleteManyArgs>(args?: SelectSubset<T, ReviewProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewProducts
     * const reviewProduct = await prisma.reviewProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewProductUpdateManyArgs>(args: SelectSubset<T, ReviewProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewProducts and returns the data updated in the database.
     * @param {ReviewProductUpdateManyAndReturnArgs} args - Arguments to update many ReviewProducts.
     * @example
     * // Update many ReviewProducts
     * const reviewProduct = await prisma.reviewProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewProducts and only return the `id`
     * const reviewProductWithIdOnly = await prisma.reviewProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewProduct.
     * @param {ReviewProductUpsertArgs} args - Arguments to update or create a ReviewProduct.
     * @example
     * // Update or create a ReviewProduct
     * const reviewProduct = await prisma.reviewProduct.upsert({
     *   create: {
     *     // ... data to create a ReviewProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewProduct we want to update
     *   }
     * })
     */
    upsert<T extends ReviewProductUpsertArgs>(args: SelectSubset<T, ReviewProductUpsertArgs<ExtArgs>>): Prisma__ReviewProductClient<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewProductCountArgs} args - Arguments to filter ReviewProducts to count.
     * @example
     * // Count the number of ReviewProducts
     * const count = await prisma.reviewProduct.count({
     *   where: {
     *     // ... the filter for the ReviewProducts we want to count
     *   }
     * })
    **/
    count<T extends ReviewProductCountArgs>(
      args?: Subset<T, ReviewProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewProductAggregateArgs>(args: Subset<T, ReviewProductAggregateArgs>): Prisma.PrismaPromise<GetReviewProductAggregateType<T>>

    /**
     * Group by ReviewProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewProductGroupByArgs} args - Group by arguments.
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
      T extends ReviewProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewProductGroupByArgs['orderBy'] }
        : { orderBy?: ReviewProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewProduct model
   */
  readonly fields: ReviewProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productVariation<T extends ProductVariationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariationDefaultArgs<ExtArgs>>): Prisma__ProductVariationClient<$Result.GetResult<Prisma.$ProductVariationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewProduct model
   */
  interface ReviewProductFieldRefs {
    readonly id: FieldRef<"ReviewProduct", 'String'>
    readonly rating: FieldRef<"ReviewProduct", 'Decimal'>
    readonly comment: FieldRef<"ReviewProduct", 'String'>
    readonly photos: FieldRef<"ReviewProduct", 'String[]'>
    readonly country: FieldRef<"ReviewProduct", 'String'>
    readonly product_variation_id: FieldRef<"ReviewProduct", 'String'>
    readonly reviewer_id: FieldRef<"ReviewProduct", 'String'>
    readonly createdAt: FieldRef<"ReviewProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"ReviewProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewProduct findUnique
   */
  export type ReviewProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
    /**
     * Filter, which ReviewProduct to fetch.
     */
    where: ReviewProductWhereUniqueInput
  }

  /**
   * ReviewProduct findUniqueOrThrow
   */
  export type ReviewProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
    /**
     * Filter, which ReviewProduct to fetch.
     */
    where: ReviewProductWhereUniqueInput
  }

  /**
   * ReviewProduct findFirst
   */
  export type ReviewProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
    /**
     * Filter, which ReviewProduct to fetch.
     */
    where?: ReviewProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewProducts to fetch.
     */
    orderBy?: ReviewProductOrderByWithRelationInput | ReviewProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewProducts.
     */
    cursor?: ReviewProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewProducts.
     */
    distinct?: ReviewProductScalarFieldEnum | ReviewProductScalarFieldEnum[]
  }

  /**
   * ReviewProduct findFirstOrThrow
   */
  export type ReviewProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
    /**
     * Filter, which ReviewProduct to fetch.
     */
    where?: ReviewProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewProducts to fetch.
     */
    orderBy?: ReviewProductOrderByWithRelationInput | ReviewProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewProducts.
     */
    cursor?: ReviewProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewProducts.
     */
    distinct?: ReviewProductScalarFieldEnum | ReviewProductScalarFieldEnum[]
  }

  /**
   * ReviewProduct findMany
   */
  export type ReviewProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
    /**
     * Filter, which ReviewProducts to fetch.
     */
    where?: ReviewProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewProducts to fetch.
     */
    orderBy?: ReviewProductOrderByWithRelationInput | ReviewProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewProducts.
     */
    cursor?: ReviewProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewProducts.
     */
    distinct?: ReviewProductScalarFieldEnum | ReviewProductScalarFieldEnum[]
  }

  /**
   * ReviewProduct create
   */
  export type ReviewProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewProduct.
     */
    data: XOR<ReviewProductCreateInput, ReviewProductUncheckedCreateInput>
  }

  /**
   * ReviewProduct createMany
   */
  export type ReviewProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewProducts.
     */
    data: ReviewProductCreateManyInput | ReviewProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewProduct createManyAndReturn
   */
  export type ReviewProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewProducts.
     */
    data: ReviewProductCreateManyInput | ReviewProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewProduct update
   */
  export type ReviewProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewProduct.
     */
    data: XOR<ReviewProductUpdateInput, ReviewProductUncheckedUpdateInput>
    /**
     * Choose, which ReviewProduct to update.
     */
    where: ReviewProductWhereUniqueInput
  }

  /**
   * ReviewProduct updateMany
   */
  export type ReviewProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewProducts.
     */
    data: XOR<ReviewProductUpdateManyMutationInput, ReviewProductUncheckedUpdateManyInput>
    /**
     * Filter which ReviewProducts to update
     */
    where?: ReviewProductWhereInput
    /**
     * Limit how many ReviewProducts to update.
     */
    limit?: number
  }

  /**
   * ReviewProduct updateManyAndReturn
   */
  export type ReviewProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * The data used to update ReviewProducts.
     */
    data: XOR<ReviewProductUpdateManyMutationInput, ReviewProductUncheckedUpdateManyInput>
    /**
     * Filter which ReviewProducts to update
     */
    where?: ReviewProductWhereInput
    /**
     * Limit how many ReviewProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewProduct upsert
   */
  export type ReviewProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewProduct to update in case it exists.
     */
    where: ReviewProductWhereUniqueInput
    /**
     * In case the ReviewProduct found by the `where` argument doesn't exist, create a new ReviewProduct with this data.
     */
    create: XOR<ReviewProductCreateInput, ReviewProductUncheckedCreateInput>
    /**
     * In case the ReviewProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewProductUpdateInput, ReviewProductUncheckedUpdateInput>
  }

  /**
   * ReviewProduct delete
   */
  export type ReviewProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
    /**
     * Filter which ReviewProduct to delete.
     */
    where: ReviewProductWhereUniqueInput
  }

  /**
   * ReviewProduct deleteMany
   */
  export type ReviewProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewProducts to delete
     */
    where?: ReviewProductWhereInput
    /**
     * Limit how many ReviewProducts to delete.
     */
    limit?: number
  }

  /**
   * ReviewProduct without action
   */
  export type ReviewProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
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
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | Profile$UserArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Profile$UserArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
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
    User<T extends Profile$UserArgs<ExtArgs> = {}>(args?: Subset<T, Profile$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
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
   * Profile.User
   */
  export type Profile$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
    status: boolean | null
    profileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
    status: boolean | null
    profileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    email: number
    password: number
    status: number
    profileId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    Product?: boolean | User$ProductArgs<ExtArgs>
    PersonalData?: boolean | User$PersonalDataArgs<ExtArgs>
    Address?: boolean | User$AddressArgs<ExtArgs>
    ReviewProduct?: boolean | User$ReviewProductArgs<ExtArgs>
    CartItem?: boolean | User$CartItemArgs<ExtArgs>
    UserFavorite?: boolean | User$UserFavoriteArgs<ExtArgs>
    UserSearchHistory?: boolean | User$UserSearchHistoryArgs<ExtArgs>
    UserProductClick?: boolean | User$UserProductClickArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "email" | "password" | "status" | "profileId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    Product?: boolean | User$ProductArgs<ExtArgs>
    PersonalData?: boolean | User$PersonalDataArgs<ExtArgs>
    Address?: boolean | User$AddressArgs<ExtArgs>
    ReviewProduct?: boolean | User$ReviewProductArgs<ExtArgs>
    CartItem?: boolean | User$CartItemArgs<ExtArgs>
    UserFavorite?: boolean | User$UserFavoriteArgs<ExtArgs>
    UserSearchHistory?: boolean | User$UserSearchHistoryArgs<ExtArgs>
    UserProductClick?: boolean | User$UserProductClickArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      Product: Prisma.$ProductPayload<ExtArgs>[]
      PersonalData: Prisma.$PersonalDataPayload<ExtArgs> | null
      Address: Prisma.$AddressPayload<ExtArgs>[]
      ReviewProduct: Prisma.$ReviewProductPayload<ExtArgs>[]
      CartItem: Prisma.$CartItemPayload<ExtArgs>[]
      UserFavorite: Prisma.$UserFavoritePayload<ExtArgs>[]
      UserSearchHistory: Prisma.$UserSearchHistoryPayload<ExtArgs>[]
      UserProductClick: Prisma.$UserProductClickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lastName: string
      email: string
      password: string
      status: boolean
      profileId: string
      createdAt: Date
      updatedAt: Date
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
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends User$ProductArgs<ExtArgs> = {}>(args?: Subset<T, User$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PersonalData<T extends User$PersonalDataArgs<ExtArgs> = {}>(args?: Subset<T, User$PersonalDataArgs<ExtArgs>>): Prisma__PersonalDataClient<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Address<T extends User$AddressArgs<ExtArgs> = {}>(args?: Subset<T, User$AddressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReviewProduct<T extends User$ReviewProductArgs<ExtArgs> = {}>(args?: Subset<T, User$ReviewProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CartItem<T extends User$CartItemArgs<ExtArgs> = {}>(args?: Subset<T, User$CartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserFavorite<T extends User$UserFavoriteArgs<ExtArgs> = {}>(args?: Subset<T, User$UserFavoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserSearchHistory<T extends User$UserSearchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$UserSearchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSearchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserProductClick<T extends User$UserProductClickArgs<ExtArgs> = {}>(args?: Subset<T, User$UserProductClickArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductClickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Boolean'>
    readonly profileId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.Product
   */
  export type User$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.PersonalData
   */
  export type User$PersonalDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataInclude<ExtArgs> | null
    where?: PersonalDataWhereInput
  }

  /**
   * User.Address
   */
  export type User$AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * User.ReviewProduct
   */
  export type User$ReviewProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewProduct
     */
    select?: ReviewProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewProduct
     */
    omit?: ReviewProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewProductInclude<ExtArgs> | null
    where?: ReviewProductWhereInput
    orderBy?: ReviewProductOrderByWithRelationInput | ReviewProductOrderByWithRelationInput[]
    cursor?: ReviewProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewProductScalarFieldEnum | ReviewProductScalarFieldEnum[]
  }

  /**
   * User.CartItem
   */
  export type User$CartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * User.UserFavorite
   */
  export type User$UserFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorite
     */
    select?: UserFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorite
     */
    omit?: UserFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavoriteInclude<ExtArgs> | null
    where?: UserFavoriteWhereInput
    orderBy?: UserFavoriteOrderByWithRelationInput | UserFavoriteOrderByWithRelationInput[]
    cursor?: UserFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavoriteScalarFieldEnum | UserFavoriteScalarFieldEnum[]
  }

  /**
   * User.UserSearchHistory
   */
  export type User$UserSearchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSearchHistory
     */
    select?: UserSearchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSearchHistory
     */
    omit?: UserSearchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSearchHistoryInclude<ExtArgs> | null
    where?: UserSearchHistoryWhereInput
    orderBy?: UserSearchHistoryOrderByWithRelationInput | UserSearchHistoryOrderByWithRelationInput[]
    cursor?: UserSearchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSearchHistoryScalarFieldEnum | UserSearchHistoryScalarFieldEnum[]
  }

  /**
   * User.UserProductClick
   */
  export type User$UserProductClickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductClick
     */
    select?: UserProductClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductClick
     */
    omit?: UserProductClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductClickInclude<ExtArgs> | null
    where?: UserProductClickWhereInput
    orderBy?: UserProductClickOrderByWithRelationInput | UserProductClickOrderByWithRelationInput[]
    cursor?: UserProductClickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProductClickScalarFieldEnum | UserProductClickScalarFieldEnum[]
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
   * Model PersonalData
   */

  export type AggregatePersonalData = {
    _count: PersonalDataCountAggregateOutputType | null
    _min: PersonalDataMinAggregateOutputType | null
    _max: PersonalDataMaxAggregateOutputType | null
  }

  export type PersonalDataMinAggregateOutputType = {
    id: string | null
    cpf: string | null
    birthDate: Date | null
    phone: string | null
    gender: $Enums.Gender | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonalDataMaxAggregateOutputType = {
    id: string | null
    cpf: string | null
    birthDate: Date | null
    phone: string | null
    gender: $Enums.Gender | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonalDataCountAggregateOutputType = {
    id: number
    cpf: number
    birthDate: number
    phone: number
    gender: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonalDataMinAggregateInputType = {
    id?: true
    cpf?: true
    birthDate?: true
    phone?: true
    gender?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonalDataMaxAggregateInputType = {
    id?: true
    cpf?: true
    birthDate?: true
    phone?: true
    gender?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonalDataCountAggregateInputType = {
    id?: true
    cpf?: true
    birthDate?: true
    phone?: true
    gender?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonalDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalData to aggregate.
     */
    where?: PersonalDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalData to fetch.
     */
    orderBy?: PersonalDataOrderByWithRelationInput | PersonalDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalData
    **/
    _count?: true | PersonalDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalDataMaxAggregateInputType
  }

  export type GetPersonalDataAggregateType<T extends PersonalDataAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalData[P]>
      : GetScalarType<T[P], AggregatePersonalData[P]>
  }




  export type PersonalDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalDataWhereInput
    orderBy?: PersonalDataOrderByWithAggregationInput | PersonalDataOrderByWithAggregationInput[]
    by: PersonalDataScalarFieldEnum[] | PersonalDataScalarFieldEnum
    having?: PersonalDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalDataCountAggregateInputType | true
    _min?: PersonalDataMinAggregateInputType
    _max?: PersonalDataMaxAggregateInputType
  }

  export type PersonalDataGroupByOutputType = {
    id: string
    cpf: string
    birthDate: Date
    phone: string
    gender: $Enums.Gender
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PersonalDataCountAggregateOutputType | null
    _min: PersonalDataMinAggregateOutputType | null
    _max: PersonalDataMaxAggregateOutputType | null
  }

  type GetPersonalDataGroupByPayload<T extends PersonalDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalDataGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalDataGroupByOutputType[P]>
        }
      >
    >


  export type PersonalDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    birthDate?: boolean
    phone?: boolean
    gender?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalData"]>

  export type PersonalDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    birthDate?: boolean
    phone?: boolean
    gender?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalData"]>

  export type PersonalDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    birthDate?: boolean
    phone?: boolean
    gender?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalData"]>

  export type PersonalDataSelectScalar = {
    id?: boolean
    cpf?: boolean
    birthDate?: boolean
    phone?: boolean
    gender?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonalDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "birthDate" | "phone" | "gender" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["personalData"]>
  export type PersonalDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonalDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonalDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PersonalDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalData"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cpf: string
      birthDate: Date
      phone: string
      gender: $Enums.Gender
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["personalData"]>
    composites: {}
  }

  type PersonalDataGetPayload<S extends boolean | null | undefined | PersonalDataDefaultArgs> = $Result.GetResult<Prisma.$PersonalDataPayload, S>

  type PersonalDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalDataCountAggregateInputType | true
    }

  export interface PersonalDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalData'], meta: { name: 'PersonalData' } }
    /**
     * Find zero or one PersonalData that matches the filter.
     * @param {PersonalDataFindUniqueArgs} args - Arguments to find a PersonalData
     * @example
     * // Get one PersonalData
     * const personalData = await prisma.personalData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalDataFindUniqueArgs>(args: SelectSubset<T, PersonalDataFindUniqueArgs<ExtArgs>>): Prisma__PersonalDataClient<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalDataFindUniqueOrThrowArgs} args - Arguments to find a PersonalData
     * @example
     * // Get one PersonalData
     * const personalData = await prisma.personalData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalDataFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalDataClient<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDataFindFirstArgs} args - Arguments to find a PersonalData
     * @example
     * // Get one PersonalData
     * const personalData = await prisma.personalData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalDataFindFirstArgs>(args?: SelectSubset<T, PersonalDataFindFirstArgs<ExtArgs>>): Prisma__PersonalDataClient<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDataFindFirstOrThrowArgs} args - Arguments to find a PersonalData
     * @example
     * // Get one PersonalData
     * const personalData = await prisma.personalData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalDataFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalDataClient<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalData
     * const personalData = await prisma.personalData.findMany()
     * 
     * // Get first 10 PersonalData
     * const personalData = await prisma.personalData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalDataWithIdOnly = await prisma.personalData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalDataFindManyArgs>(args?: SelectSubset<T, PersonalDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalData.
     * @param {PersonalDataCreateArgs} args - Arguments to create a PersonalData.
     * @example
     * // Create one PersonalData
     * const PersonalData = await prisma.personalData.create({
     *   data: {
     *     // ... data to create a PersonalData
     *   }
     * })
     * 
     */
    create<T extends PersonalDataCreateArgs>(args: SelectSubset<T, PersonalDataCreateArgs<ExtArgs>>): Prisma__PersonalDataClient<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalData.
     * @param {PersonalDataCreateManyArgs} args - Arguments to create many PersonalData.
     * @example
     * // Create many PersonalData
     * const personalData = await prisma.personalData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalDataCreateManyArgs>(args?: SelectSubset<T, PersonalDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalData and returns the data saved in the database.
     * @param {PersonalDataCreateManyAndReturnArgs} args - Arguments to create many PersonalData.
     * @example
     * // Create many PersonalData
     * const personalData = await prisma.personalData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalData and only return the `id`
     * const personalDataWithIdOnly = await prisma.personalData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalDataCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalData.
     * @param {PersonalDataDeleteArgs} args - Arguments to delete one PersonalData.
     * @example
     * // Delete one PersonalData
     * const PersonalData = await prisma.personalData.delete({
     *   where: {
     *     // ... filter to delete one PersonalData
     *   }
     * })
     * 
     */
    delete<T extends PersonalDataDeleteArgs>(args: SelectSubset<T, PersonalDataDeleteArgs<ExtArgs>>): Prisma__PersonalDataClient<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalData.
     * @param {PersonalDataUpdateArgs} args - Arguments to update one PersonalData.
     * @example
     * // Update one PersonalData
     * const personalData = await prisma.personalData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalDataUpdateArgs>(args: SelectSubset<T, PersonalDataUpdateArgs<ExtArgs>>): Prisma__PersonalDataClient<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalData.
     * @param {PersonalDataDeleteManyArgs} args - Arguments to filter PersonalData to delete.
     * @example
     * // Delete a few PersonalData
     * const { count } = await prisma.personalData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalDataDeleteManyArgs>(args?: SelectSubset<T, PersonalDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalData
     * const personalData = await prisma.personalData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalDataUpdateManyArgs>(args: SelectSubset<T, PersonalDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalData and returns the data updated in the database.
     * @param {PersonalDataUpdateManyAndReturnArgs} args - Arguments to update many PersonalData.
     * @example
     * // Update many PersonalData
     * const personalData = await prisma.personalData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalData and only return the `id`
     * const personalDataWithIdOnly = await prisma.personalData.updateManyAndReturn({
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
    updateManyAndReturn<T extends PersonalDataUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalData.
     * @param {PersonalDataUpsertArgs} args - Arguments to update or create a PersonalData.
     * @example
     * // Update or create a PersonalData
     * const personalData = await prisma.personalData.upsert({
     *   create: {
     *     // ... data to create a PersonalData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalData we want to update
     *   }
     * })
     */
    upsert<T extends PersonalDataUpsertArgs>(args: SelectSubset<T, PersonalDataUpsertArgs<ExtArgs>>): Prisma__PersonalDataClient<$Result.GetResult<Prisma.$PersonalDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDataCountArgs} args - Arguments to filter PersonalData to count.
     * @example
     * // Count the number of PersonalData
     * const count = await prisma.personalData.count({
     *   where: {
     *     // ... the filter for the PersonalData we want to count
     *   }
     * })
    **/
    count<T extends PersonalDataCountArgs>(
      args?: Subset<T, PersonalDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonalDataAggregateArgs>(args: Subset<T, PersonalDataAggregateArgs>): Prisma.PrismaPromise<GetPersonalDataAggregateType<T>>

    /**
     * Group by PersonalData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDataGroupByArgs} args - Group by arguments.
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
      T extends PersonalDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalDataGroupByArgs['orderBy'] }
        : { orderBy?: PersonalDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonalDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalData model
   */
  readonly fields: PersonalDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PersonalData model
   */
  interface PersonalDataFieldRefs {
    readonly id: FieldRef<"PersonalData", 'String'>
    readonly cpf: FieldRef<"PersonalData", 'String'>
    readonly birthDate: FieldRef<"PersonalData", 'DateTime'>
    readonly phone: FieldRef<"PersonalData", 'String'>
    readonly gender: FieldRef<"PersonalData", 'Gender'>
    readonly userId: FieldRef<"PersonalData", 'String'>
    readonly createdAt: FieldRef<"PersonalData", 'DateTime'>
    readonly updatedAt: FieldRef<"PersonalData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PersonalData findUnique
   */
  export type PersonalDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataInclude<ExtArgs> | null
    /**
     * Filter, which PersonalData to fetch.
     */
    where: PersonalDataWhereUniqueInput
  }

  /**
   * PersonalData findUniqueOrThrow
   */
  export type PersonalDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataInclude<ExtArgs> | null
    /**
     * Filter, which PersonalData to fetch.
     */
    where: PersonalDataWhereUniqueInput
  }

  /**
   * PersonalData findFirst
   */
  export type PersonalDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataInclude<ExtArgs> | null
    /**
     * Filter, which PersonalData to fetch.
     */
    where?: PersonalDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalData to fetch.
     */
    orderBy?: PersonalDataOrderByWithRelationInput | PersonalDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalData.
     */
    cursor?: PersonalDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalData.
     */
    distinct?: PersonalDataScalarFieldEnum | PersonalDataScalarFieldEnum[]
  }

  /**
   * PersonalData findFirstOrThrow
   */
  export type PersonalDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataInclude<ExtArgs> | null
    /**
     * Filter, which PersonalData to fetch.
     */
    where?: PersonalDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalData to fetch.
     */
    orderBy?: PersonalDataOrderByWithRelationInput | PersonalDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalData.
     */
    cursor?: PersonalDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalData.
     */
    distinct?: PersonalDataScalarFieldEnum | PersonalDataScalarFieldEnum[]
  }

  /**
   * PersonalData findMany
   */
  export type PersonalDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataInclude<ExtArgs> | null
    /**
     * Filter, which PersonalData to fetch.
     */
    where?: PersonalDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalData to fetch.
     */
    orderBy?: PersonalDataOrderByWithRelationInput | PersonalDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalData.
     */
    cursor?: PersonalDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalData.
     */
    distinct?: PersonalDataScalarFieldEnum | PersonalDataScalarFieldEnum[]
  }

  /**
   * PersonalData create
   */
  export type PersonalDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalData.
     */
    data: XOR<PersonalDataCreateInput, PersonalDataUncheckedCreateInput>
  }

  /**
   * PersonalData createMany
   */
  export type PersonalDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalData.
     */
    data: PersonalDataCreateManyInput | PersonalDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalData createManyAndReturn
   */
  export type PersonalDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalData.
     */
    data: PersonalDataCreateManyInput | PersonalDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalData update
   */
  export type PersonalDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalData.
     */
    data: XOR<PersonalDataUpdateInput, PersonalDataUncheckedUpdateInput>
    /**
     * Choose, which PersonalData to update.
     */
    where: PersonalDataWhereUniqueInput
  }

  /**
   * PersonalData updateMany
   */
  export type PersonalDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalData.
     */
    data: XOR<PersonalDataUpdateManyMutationInput, PersonalDataUncheckedUpdateManyInput>
    /**
     * Filter which PersonalData to update
     */
    where?: PersonalDataWhereInput
    /**
     * Limit how many PersonalData to update.
     */
    limit?: number
  }

  /**
   * PersonalData updateManyAndReturn
   */
  export type PersonalDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * The data used to update PersonalData.
     */
    data: XOR<PersonalDataUpdateManyMutationInput, PersonalDataUncheckedUpdateManyInput>
    /**
     * Filter which PersonalData to update
     */
    where?: PersonalDataWhereInput
    /**
     * Limit how many PersonalData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalData upsert
   */
  export type PersonalDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalData to update in case it exists.
     */
    where: PersonalDataWhereUniqueInput
    /**
     * In case the PersonalData found by the `where` argument doesn't exist, create a new PersonalData with this data.
     */
    create: XOR<PersonalDataCreateInput, PersonalDataUncheckedCreateInput>
    /**
     * In case the PersonalData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalDataUpdateInput, PersonalDataUncheckedUpdateInput>
  }

  /**
   * PersonalData delete
   */
  export type PersonalDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataInclude<ExtArgs> | null
    /**
     * Filter which PersonalData to delete.
     */
    where: PersonalDataWhereUniqueInput
  }

  /**
   * PersonalData deleteMany
   */
  export type PersonalDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalData to delete
     */
    where?: PersonalDataWhereInput
    /**
     * Limit how many PersonalData to delete.
     */
    limit?: number
  }

  /**
   * PersonalData without action
   */
  export type PersonalDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalData
     */
    select?: PersonalDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalData
     */
    omit?: PersonalDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDataInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    cep: string | null
    state: string | null
    city: string | null
    street: string | null
    number: string | null
    complement: string | null
    isDefault: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    cep: string | null
    state: string | null
    city: string | null
    street: string | null
    number: string | null
    complement: string | null
    isDefault: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    cep: number
    state: number
    city: number
    street: number
    number: number
    complement: number
    isDefault: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    cep?: true
    state?: true
    city?: true
    street?: true
    number?: true
    complement?: true
    isDefault?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    cep?: true
    state?: true
    city?: true
    street?: true
    number?: true
    complement?: true
    isDefault?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    cep?: true
    state?: true
    city?: true
    street?: true
    number?: true
    complement?: true
    isDefault?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement: string | null
    isDefault: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    isDefault?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    isDefault?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    isDefault?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    isDefault?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cep" | "state" | "city" | "street" | "number" | "complement" | "isDefault" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cep: string
      state: string
      city: string
      street: string
      number: string
      complement: string | null
      isDefault: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly cep: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'String'>
    readonly complement: FieldRef<"Address", 'String'>
    readonly isDefault: FieldRef<"Address", 'Boolean'>
    readonly userId: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
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


  export const CartItemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    userId: 'userId',
    productVariationId: 'productVariationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const UserFavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    createdAt: 'createdAt'
  };

  export type UserFavoriteScalarFieldEnum = (typeof UserFavoriteScalarFieldEnum)[keyof typeof UserFavoriteScalarFieldEnum]


  export const UserSearchHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    term: 'term',
    searchedAt: 'searchedAt'
  };

  export type UserSearchHistoryScalarFieldEnum = (typeof UserSearchHistoryScalarFieldEnum)[keyof typeof UserSearchHistoryScalarFieldEnum]


  export const UserProductClickScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    sourcePage: 'sourcePage',
    clickedAt: 'clickedAt'
  };

  export type UserProductClickScalarFieldEnum = (typeof UserProductClickScalarFieldEnum)[keyof typeof UserProductClickScalarFieldEnum]


  export const CategoryProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryProductsScalarFieldEnum = (typeof CategoryProductsScalarFieldEnum)[keyof typeof CategoryProductsScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    status: 'status',
    category_product_id: 'category_product_id',
    seller_user_id: 'seller_user_id',
    brand_id: 'brand_id',
    thumbnail: 'thumbnail',
    warrantyInformation: 'warrantyInformation',
    aiSummary: 'aiSummary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductVariationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    discountPercentage: 'discountPercentage',
    price: 'price',
    quantity: 'quantity',
    description: 'description',
    product_id: 'product_id',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductVariationScalarFieldEnum = (typeof ProductVariationScalarFieldEnum)[keyof typeof ProductVariationScalarFieldEnum]


  export const ProductVariationImagesScalarFieldEnum: {
    id: 'id',
    link: 'link',
    product_variation_id: 'product_variation_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductVariationImagesScalarFieldEnum = (typeof ProductVariationImagesScalarFieldEnum)[keyof typeof ProductVariationImagesScalarFieldEnum]


  export const ReviewProductScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    photos: 'photos',
    country: 'country',
    product_variation_id: 'product_variation_id',
    reviewer_id: 'reviewer_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewProductScalarFieldEnum = (typeof ReviewProductScalarFieldEnum)[keyof typeof ReviewProductScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    status: 'status',
    profileId: 'profileId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PersonalDataScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    birthDate: 'birthDate',
    phone: 'phone',
    gender: 'gender',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonalDataScalarFieldEnum = (typeof PersonalDataScalarFieldEnum)[keyof typeof PersonalDataScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    cep: 'cep',
    state: 'state',
    city: 'city',
    street: 'street',
    number: 'number',
    complement: 'complement',
    isDefault: 'isDefault',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


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


  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    userId?: StringFilter<"CartItem"> | string
    productVariationId?: StringFilter<"CartItem"> | string
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    productVariation?: XOR<ProductVariationScalarRelationFilter, ProductVariationWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    productVariationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    productVariation?: ProductVariationOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_productVariationId?: CartItemUserIdProductVariationIdCompoundUniqueInput
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    quantity?: IntFilter<"CartItem"> | number
    userId?: StringFilter<"CartItem"> | string
    productVariationId?: StringFilter<"CartItem"> | string
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    productVariation?: XOR<ProductVariationScalarRelationFilter, ProductVariationWhereInput>
  }, "id" | "userId_productVariationId">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    productVariationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CartItem"> | string
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    userId?: StringWithAggregatesFilter<"CartItem"> | string
    productVariationId?: StringWithAggregatesFilter<"CartItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
  }

  export type UserFavoriteWhereInput = {
    AND?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    OR?: UserFavoriteWhereInput[]
    NOT?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    id?: StringFilter<"UserFavorite"> | string
    userId?: StringFilter<"UserFavorite"> | string
    productId?: StringFilter<"UserFavorite"> | string
    createdAt?: DateTimeFilter<"UserFavorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type UserFavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type UserFavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_productId?: UserFavoriteUserIdProductIdCompoundUniqueInput
    AND?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    OR?: UserFavoriteWhereInput[]
    NOT?: UserFavoriteWhereInput | UserFavoriteWhereInput[]
    userId?: StringFilter<"UserFavorite"> | string
    productId?: StringFilter<"UserFavorite"> | string
    createdAt?: DateTimeFilter<"UserFavorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "userId_productId">

  export type UserFavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    _count?: UserFavoriteCountOrderByAggregateInput
    _max?: UserFavoriteMaxOrderByAggregateInput
    _min?: UserFavoriteMinOrderByAggregateInput
  }

  export type UserFavoriteScalarWhereWithAggregatesInput = {
    AND?: UserFavoriteScalarWhereWithAggregatesInput | UserFavoriteScalarWhereWithAggregatesInput[]
    OR?: UserFavoriteScalarWhereWithAggregatesInput[]
    NOT?: UserFavoriteScalarWhereWithAggregatesInput | UserFavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFavorite"> | string
    userId?: StringWithAggregatesFilter<"UserFavorite"> | string
    productId?: StringWithAggregatesFilter<"UserFavorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserFavorite"> | Date | string
  }

  export type UserSearchHistoryWhereInput = {
    AND?: UserSearchHistoryWhereInput | UserSearchHistoryWhereInput[]
    OR?: UserSearchHistoryWhereInput[]
    NOT?: UserSearchHistoryWhereInput | UserSearchHistoryWhereInput[]
    id?: StringFilter<"UserSearchHistory"> | string
    userId?: StringFilter<"UserSearchHistory"> | string
    term?: StringFilter<"UserSearchHistory"> | string
    searchedAt?: DateTimeFilter<"UserSearchHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSearchHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    term?: SortOrder
    searchedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSearchHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSearchHistoryWhereInput | UserSearchHistoryWhereInput[]
    OR?: UserSearchHistoryWhereInput[]
    NOT?: UserSearchHistoryWhereInput | UserSearchHistoryWhereInput[]
    userId?: StringFilter<"UserSearchHistory"> | string
    term?: StringFilter<"UserSearchHistory"> | string
    searchedAt?: DateTimeFilter<"UserSearchHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserSearchHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    term?: SortOrder
    searchedAt?: SortOrder
    _count?: UserSearchHistoryCountOrderByAggregateInput
    _max?: UserSearchHistoryMaxOrderByAggregateInput
    _min?: UserSearchHistoryMinOrderByAggregateInput
  }

  export type UserSearchHistoryScalarWhereWithAggregatesInput = {
    AND?: UserSearchHistoryScalarWhereWithAggregatesInput | UserSearchHistoryScalarWhereWithAggregatesInput[]
    OR?: UserSearchHistoryScalarWhereWithAggregatesInput[]
    NOT?: UserSearchHistoryScalarWhereWithAggregatesInput | UserSearchHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSearchHistory"> | string
    userId?: StringWithAggregatesFilter<"UserSearchHistory"> | string
    term?: StringWithAggregatesFilter<"UserSearchHistory"> | string
    searchedAt?: DateTimeWithAggregatesFilter<"UserSearchHistory"> | Date | string
  }

  export type UserProductClickWhereInput = {
    AND?: UserProductClickWhereInput | UserProductClickWhereInput[]
    OR?: UserProductClickWhereInput[]
    NOT?: UserProductClickWhereInput | UserProductClickWhereInput[]
    id?: StringFilter<"UserProductClick"> | string
    userId?: StringFilter<"UserProductClick"> | string
    productId?: StringFilter<"UserProductClick"> | string
    sourcePage?: StringFilter<"UserProductClick"> | string
    clickedAt?: DateTimeFilter<"UserProductClick"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProductClickOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sourcePage?: SortOrder
    clickedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProductClickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserProductClickWhereInput | UserProductClickWhereInput[]
    OR?: UserProductClickWhereInput[]
    NOT?: UserProductClickWhereInput | UserProductClickWhereInput[]
    userId?: StringFilter<"UserProductClick"> | string
    productId?: StringFilter<"UserProductClick"> | string
    sourcePage?: StringFilter<"UserProductClick"> | string
    clickedAt?: DateTimeFilter<"UserProductClick"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserProductClickOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sourcePage?: SortOrder
    clickedAt?: SortOrder
    _count?: UserProductClickCountOrderByAggregateInput
    _max?: UserProductClickMaxOrderByAggregateInput
    _min?: UserProductClickMinOrderByAggregateInput
  }

  export type UserProductClickScalarWhereWithAggregatesInput = {
    AND?: UserProductClickScalarWhereWithAggregatesInput | UserProductClickScalarWhereWithAggregatesInput[]
    OR?: UserProductClickScalarWhereWithAggregatesInput[]
    NOT?: UserProductClickScalarWhereWithAggregatesInput | UserProductClickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProductClick"> | string
    userId?: StringWithAggregatesFilter<"UserProductClick"> | string
    productId?: StringWithAggregatesFilter<"UserProductClick"> | string
    sourcePage?: StringWithAggregatesFilter<"UserProductClick"> | string
    clickedAt?: DateTimeWithAggregatesFilter<"UserProductClick"> | Date | string
  }

  export type CategoryProductsWhereInput = {
    AND?: CategoryProductsWhereInput | CategoryProductsWhereInput[]
    OR?: CategoryProductsWhereInput[]
    NOT?: CategoryProductsWhereInput | CategoryProductsWhereInput[]
    id?: StringFilter<"CategoryProducts"> | string
    name?: StringFilter<"CategoryProducts"> | string
    status?: BoolFilter<"CategoryProducts"> | boolean
    createdAt?: DateTimeFilter<"CategoryProducts"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryProducts"> | Date | string
    Product?: ProductListRelationFilter
  }

  export type CategoryProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type CategoryProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryProductsWhereInput | CategoryProductsWhereInput[]
    OR?: CategoryProductsWhereInput[]
    NOT?: CategoryProductsWhereInput | CategoryProductsWhereInput[]
    status?: BoolFilter<"CategoryProducts"> | boolean
    createdAt?: DateTimeFilter<"CategoryProducts"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryProducts"> | Date | string
    Product?: ProductListRelationFilter
  }, "id" | "name">

  export type CategoryProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryProductsCountOrderByAggregateInput
    _max?: CategoryProductsMaxOrderByAggregateInput
    _min?: CategoryProductsMinOrderByAggregateInput
  }

  export type CategoryProductsScalarWhereWithAggregatesInput = {
    AND?: CategoryProductsScalarWhereWithAggregatesInput | CategoryProductsScalarWhereWithAggregatesInput[]
    OR?: CategoryProductsScalarWhereWithAggregatesInput[]
    NOT?: CategoryProductsScalarWhereWithAggregatesInput | CategoryProductsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CategoryProducts"> | string
    name?: StringWithAggregatesFilter<"CategoryProducts"> | string
    status?: BoolWithAggregatesFilter<"CategoryProducts"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CategoryProducts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CategoryProducts"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    Product?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    Product?: ProductListRelationFilter
  }, "id" | "name">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringWithAggregatesFilter<"Brand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    status?: BoolFilter<"Product"> | boolean
    category_product_id?: StringFilter<"Product"> | string
    seller_user_id?: StringFilter<"Product"> | string
    brand_id?: StringFilter<"Product"> | string
    thumbnail?: StringFilter<"Product"> | string
    warrantyInformation?: StringFilter<"Product"> | string
    aiSummary?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    categoryProducts?: XOR<CategoryProductsScalarRelationFilter, CategoryProductsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    ProductVariation?: ProductVariationListRelationFilter
    UserFavorite?: UserFavoriteListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    category_product_id?: SortOrder
    seller_user_id?: SortOrder
    brand_id?: SortOrder
    thumbnail?: SortOrder
    warrantyInformation?: SortOrder
    aiSummary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryProducts?: CategoryProductsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    brand?: BrandOrderByWithRelationInput
    ProductVariation?: ProductVariationOrderByRelationAggregateInput
    UserFavorite?: UserFavoriteOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    status?: BoolFilter<"Product"> | boolean
    category_product_id?: StringFilter<"Product"> | string
    seller_user_id?: StringFilter<"Product"> | string
    brand_id?: StringFilter<"Product"> | string
    thumbnail?: StringFilter<"Product"> | string
    warrantyInformation?: StringFilter<"Product"> | string
    aiSummary?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    categoryProducts?: XOR<CategoryProductsScalarRelationFilter, CategoryProductsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    ProductVariation?: ProductVariationListRelationFilter
    UserFavorite?: UserFavoriteListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    category_product_id?: SortOrder
    seller_user_id?: SortOrder
    brand_id?: SortOrder
    thumbnail?: SortOrder
    warrantyInformation?: SortOrder
    aiSummary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    status?: BoolWithAggregatesFilter<"Product"> | boolean
    category_product_id?: StringWithAggregatesFilter<"Product"> | string
    seller_user_id?: StringWithAggregatesFilter<"Product"> | string
    brand_id?: StringWithAggregatesFilter<"Product"> | string
    thumbnail?: StringWithAggregatesFilter<"Product"> | string
    warrantyInformation?: StringWithAggregatesFilter<"Product"> | string
    aiSummary?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductVariationWhereInput = {
    AND?: ProductVariationWhereInput | ProductVariationWhereInput[]
    OR?: ProductVariationWhereInput[]
    NOT?: ProductVariationWhereInput | ProductVariationWhereInput[]
    id?: StringFilter<"ProductVariation"> | string
    title?: StringFilter<"ProductVariation"> | string
    discountPercentage?: DecimalFilter<"ProductVariation"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"ProductVariation"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"ProductVariation"> | number
    description?: StringFilter<"ProductVariation"> | string
    product_id?: StringFilter<"ProductVariation"> | string
    status?: BoolFilter<"ProductVariation"> | boolean
    createdAt?: DateTimeFilter<"ProductVariation"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariation"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    ReviewProduct?: ReviewProductListRelationFilter
    productVariationImages?: ProductVariationImagesListRelationFilter
    CartItem?: CartItemListRelationFilter
  }

  export type ProductVariationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    discountPercentage?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    description?: SortOrder
    product_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    ReviewProduct?: ReviewProductOrderByRelationAggregateInput
    productVariationImages?: productVariationImagesOrderByRelationAggregateInput
    CartItem?: CartItemOrderByRelationAggregateInput
  }

  export type ProductVariationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductVariationWhereInput | ProductVariationWhereInput[]
    OR?: ProductVariationWhereInput[]
    NOT?: ProductVariationWhereInput | ProductVariationWhereInput[]
    title?: StringFilter<"ProductVariation"> | string
    discountPercentage?: DecimalFilter<"ProductVariation"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"ProductVariation"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"ProductVariation"> | number
    description?: StringFilter<"ProductVariation"> | string
    product_id?: StringFilter<"ProductVariation"> | string
    status?: BoolFilter<"ProductVariation"> | boolean
    createdAt?: DateTimeFilter<"ProductVariation"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariation"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    ReviewProduct?: ReviewProductListRelationFilter
    productVariationImages?: ProductVariationImagesListRelationFilter
    CartItem?: CartItemListRelationFilter
  }, "id">

  export type ProductVariationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    discountPercentage?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    description?: SortOrder
    product_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductVariationCountOrderByAggregateInput
    _avg?: ProductVariationAvgOrderByAggregateInput
    _max?: ProductVariationMaxOrderByAggregateInput
    _min?: ProductVariationMinOrderByAggregateInput
    _sum?: ProductVariationSumOrderByAggregateInput
  }

  export type ProductVariationScalarWhereWithAggregatesInput = {
    AND?: ProductVariationScalarWhereWithAggregatesInput | ProductVariationScalarWhereWithAggregatesInput[]
    OR?: ProductVariationScalarWhereWithAggregatesInput[]
    NOT?: ProductVariationScalarWhereWithAggregatesInput | ProductVariationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductVariation"> | string
    title?: StringWithAggregatesFilter<"ProductVariation"> | string
    discountPercentage?: DecimalWithAggregatesFilter<"ProductVariation"> | Decimal | DecimalJsLike | number | string
    price?: DecimalWithAggregatesFilter<"ProductVariation"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"ProductVariation"> | number
    description?: StringWithAggregatesFilter<"ProductVariation"> | string
    product_id?: StringWithAggregatesFilter<"ProductVariation"> | string
    status?: BoolWithAggregatesFilter<"ProductVariation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductVariation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductVariation"> | Date | string
  }

  export type productVariationImagesWhereInput = {
    AND?: productVariationImagesWhereInput | productVariationImagesWhereInput[]
    OR?: productVariationImagesWhereInput[]
    NOT?: productVariationImagesWhereInput | productVariationImagesWhereInput[]
    id?: StringFilter<"productVariationImages"> | string
    link?: StringFilter<"productVariationImages"> | string
    product_variation_id?: StringFilter<"productVariationImages"> | string
    createdAt?: DateTimeFilter<"productVariationImages"> | Date | string
    updatedAt?: DateTimeFilter<"productVariationImages"> | Date | string
    productVariation?: XOR<ProductVariationScalarRelationFilter, ProductVariationWhereInput>
  }

  export type productVariationImagesOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrder
    product_variation_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productVariation?: ProductVariationOrderByWithRelationInput
  }

  export type productVariationImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productVariationImagesWhereInput | productVariationImagesWhereInput[]
    OR?: productVariationImagesWhereInput[]
    NOT?: productVariationImagesWhereInput | productVariationImagesWhereInput[]
    link?: StringFilter<"productVariationImages"> | string
    product_variation_id?: StringFilter<"productVariationImages"> | string
    createdAt?: DateTimeFilter<"productVariationImages"> | Date | string
    updatedAt?: DateTimeFilter<"productVariationImages"> | Date | string
    productVariation?: XOR<ProductVariationScalarRelationFilter, ProductVariationWhereInput>
  }, "id">

  export type productVariationImagesOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrder
    product_variation_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: productVariationImagesCountOrderByAggregateInput
    _max?: productVariationImagesMaxOrderByAggregateInput
    _min?: productVariationImagesMinOrderByAggregateInput
  }

  export type productVariationImagesScalarWhereWithAggregatesInput = {
    AND?: productVariationImagesScalarWhereWithAggregatesInput | productVariationImagesScalarWhereWithAggregatesInput[]
    OR?: productVariationImagesScalarWhereWithAggregatesInput[]
    NOT?: productVariationImagesScalarWhereWithAggregatesInput | productVariationImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"productVariationImages"> | string
    link?: StringWithAggregatesFilter<"productVariationImages"> | string
    product_variation_id?: StringWithAggregatesFilter<"productVariationImages"> | string
    createdAt?: DateTimeWithAggregatesFilter<"productVariationImages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"productVariationImages"> | Date | string
  }

  export type ReviewProductWhereInput = {
    AND?: ReviewProductWhereInput | ReviewProductWhereInput[]
    OR?: ReviewProductWhereInput[]
    NOT?: ReviewProductWhereInput | ReviewProductWhereInput[]
    id?: StringFilter<"ReviewProduct"> | string
    rating?: DecimalFilter<"ReviewProduct"> | Decimal | DecimalJsLike | number | string
    comment?: StringFilter<"ReviewProduct"> | string
    photos?: StringNullableListFilter<"ReviewProduct">
    country?: StringNullableFilter<"ReviewProduct"> | string | null
    product_variation_id?: StringFilter<"ReviewProduct"> | string
    reviewer_id?: StringFilter<"ReviewProduct"> | string
    createdAt?: DateTimeFilter<"ReviewProduct"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewProduct"> | Date | string
    productVariation?: XOR<ProductVariationScalarRelationFilter, ProductVariationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewProductOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    photos?: SortOrder
    country?: SortOrderInput | SortOrder
    product_variation_id?: SortOrder
    reviewer_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productVariation?: ProductVariationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewProductWhereInput | ReviewProductWhereInput[]
    OR?: ReviewProductWhereInput[]
    NOT?: ReviewProductWhereInput | ReviewProductWhereInput[]
    rating?: DecimalFilter<"ReviewProduct"> | Decimal | DecimalJsLike | number | string
    comment?: StringFilter<"ReviewProduct"> | string
    photos?: StringNullableListFilter<"ReviewProduct">
    country?: StringNullableFilter<"ReviewProduct"> | string | null
    product_variation_id?: StringFilter<"ReviewProduct"> | string
    reviewer_id?: StringFilter<"ReviewProduct"> | string
    createdAt?: DateTimeFilter<"ReviewProduct"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewProduct"> | Date | string
    productVariation?: XOR<ProductVariationScalarRelationFilter, ProductVariationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewProductOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    photos?: SortOrder
    country?: SortOrderInput | SortOrder
    product_variation_id?: SortOrder
    reviewer_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewProductCountOrderByAggregateInput
    _avg?: ReviewProductAvgOrderByAggregateInput
    _max?: ReviewProductMaxOrderByAggregateInput
    _min?: ReviewProductMinOrderByAggregateInput
    _sum?: ReviewProductSumOrderByAggregateInput
  }

  export type ReviewProductScalarWhereWithAggregatesInput = {
    AND?: ReviewProductScalarWhereWithAggregatesInput | ReviewProductScalarWhereWithAggregatesInput[]
    OR?: ReviewProductScalarWhereWithAggregatesInput[]
    NOT?: ReviewProductScalarWhereWithAggregatesInput | ReviewProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewProduct"> | string
    rating?: DecimalWithAggregatesFilter<"ReviewProduct"> | Decimal | DecimalJsLike | number | string
    comment?: StringWithAggregatesFilter<"ReviewProduct"> | string
    photos?: StringNullableListFilter<"ReviewProduct">
    country?: StringNullableWithAggregatesFilter<"ReviewProduct"> | string | null
    product_variation_id?: StringWithAggregatesFilter<"ReviewProduct"> | string
    reviewer_id?: StringWithAggregatesFilter<"ReviewProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReviewProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReviewProduct"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    name?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    User?: UserListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    User?: UserListRelationFilter
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringWithAggregatesFilter<"Profile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    profileId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    Product?: ProductListRelationFilter
    PersonalData?: XOR<PersonalDataNullableScalarRelationFilter, PersonalDataWhereInput> | null
    Address?: AddressListRelationFilter
    ReviewProduct?: ReviewProductListRelationFilter
    CartItem?: CartItemListRelationFilter
    UserFavorite?: UserFavoriteListRelationFilter
    UserSearchHistory?: UserSearchHistoryListRelationFilter
    UserProductClick?: UserProductClickListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    Product?: ProductOrderByRelationAggregateInput
    PersonalData?: PersonalDataOrderByWithRelationInput
    Address?: AddressOrderByRelationAggregateInput
    ReviewProduct?: ReviewProductOrderByRelationAggregateInput
    CartItem?: CartItemOrderByRelationAggregateInput
    UserFavorite?: UserFavoriteOrderByRelationAggregateInput
    UserSearchHistory?: UserSearchHistoryOrderByRelationAggregateInput
    UserProductClick?: UserProductClickOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    profileId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    Product?: ProductListRelationFilter
    PersonalData?: XOR<PersonalDataNullableScalarRelationFilter, PersonalDataWhereInput> | null
    Address?: AddressListRelationFilter
    ReviewProduct?: ReviewProductListRelationFilter
    CartItem?: CartItemListRelationFilter
    UserFavorite?: UserFavoriteListRelationFilter
    UserSearchHistory?: UserSearchHistoryListRelationFilter
    UserProductClick?: UserProductClickListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    status?: BoolWithAggregatesFilter<"User"> | boolean
    profileId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PersonalDataWhereInput = {
    AND?: PersonalDataWhereInput | PersonalDataWhereInput[]
    OR?: PersonalDataWhereInput[]
    NOT?: PersonalDataWhereInput | PersonalDataWhereInput[]
    id?: StringFilter<"PersonalData"> | string
    cpf?: StringFilter<"PersonalData"> | string
    birthDate?: DateTimeFilter<"PersonalData"> | Date | string
    phone?: StringFilter<"PersonalData"> | string
    gender?: EnumGenderFilter<"PersonalData"> | $Enums.Gender
    userId?: StringFilter<"PersonalData"> | string
    createdAt?: DateTimeFilter<"PersonalData"> | Date | string
    updatedAt?: DateTimeFilter<"PersonalData"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PersonalDataOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PersonalDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    userId?: string
    AND?: PersonalDataWhereInput | PersonalDataWhereInput[]
    OR?: PersonalDataWhereInput[]
    NOT?: PersonalDataWhereInput | PersonalDataWhereInput[]
    birthDate?: DateTimeFilter<"PersonalData"> | Date | string
    phone?: StringFilter<"PersonalData"> | string
    gender?: EnumGenderFilter<"PersonalData"> | $Enums.Gender
    createdAt?: DateTimeFilter<"PersonalData"> | Date | string
    updatedAt?: DateTimeFilter<"PersonalData"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "cpf" | "userId">

  export type PersonalDataOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonalDataCountOrderByAggregateInput
    _max?: PersonalDataMaxOrderByAggregateInput
    _min?: PersonalDataMinOrderByAggregateInput
  }

  export type PersonalDataScalarWhereWithAggregatesInput = {
    AND?: PersonalDataScalarWhereWithAggregatesInput | PersonalDataScalarWhereWithAggregatesInput[]
    OR?: PersonalDataScalarWhereWithAggregatesInput[]
    NOT?: PersonalDataScalarWhereWithAggregatesInput | PersonalDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalData"> | string
    cpf?: StringWithAggregatesFilter<"PersonalData"> | string
    birthDate?: DateTimeWithAggregatesFilter<"PersonalData"> | Date | string
    phone?: StringWithAggregatesFilter<"PersonalData"> | string
    gender?: EnumGenderWithAggregatesFilter<"PersonalData"> | $Enums.Gender
    userId?: StringWithAggregatesFilter<"PersonalData"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PersonalData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PersonalData"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    cep?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    complement?: StringNullableFilter<"Address"> | string | null
    isDefault?: BoolFilter<"Address"> | boolean
    userId?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    cep?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    complement?: StringNullableFilter<"Address"> | string | null
    isDefault?: BoolFilter<"Address"> | boolean
    userId?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    cep?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
    number?: StringWithAggregatesFilter<"Address"> | string
    complement?: StringNullableWithAggregatesFilter<"Address"> | string | null
    isDefault?: BoolWithAggregatesFilter<"Address"> | boolean
    userId?: StringWithAggregatesFilter<"Address"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type CartItemCreateInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartItemInput
    productVariation: ProductVariationCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: string
    quantity: number
    userId: string
    productVariationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartItemNestedInput
    productVariation?: ProductVariationUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    productVariationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateManyInput = {
    id?: string
    quantity: number
    userId: string
    productVariationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    productVariationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserFavoriteInput
    product: ProductCreateNestedOneWithoutUserFavoriteInput
  }

  export type UserFavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
  }

  export type UserFavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserFavoriteNestedInput
    product?: ProductUpdateOneRequiredWithoutUserFavoriteNestedInput
  }

  export type UserFavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteCreateManyInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
  }

  export type UserFavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchHistoryCreateInput = {
    id?: string
    term: string
    searchedAt?: Date | string
    user: UserCreateNestedOneWithoutUserSearchHistoryInput
  }

  export type UserSearchHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    term: string
    searchedAt?: Date | string
  }

  export type UserSearchHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserSearchHistoryNestedInput
  }

  export type UserSearchHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchHistoryCreateManyInput = {
    id?: string
    userId: string
    term: string
    searchedAt?: Date | string
  }

  export type UserSearchHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductClickCreateInput = {
    id?: string
    productId: string
    sourcePage: string
    clickedAt?: Date | string
    user: UserCreateNestedOneWithoutUserProductClickInput
  }

  export type UserProductClickUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    sourcePage: string
    clickedAt?: Date | string
  }

  export type UserProductClickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sourcePage?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserProductClickNestedInput
  }

  export type UserProductClickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sourcePage?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductClickCreateManyInput = {
    id?: string
    userId: string
    productId: string
    sourcePage: string
    clickedAt?: Date | string
  }

  export type UserProductClickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sourcePage?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductClickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sourcePage?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryProductsCreateInput = {
    id?: string
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductCreateNestedManyWithoutCategoryProductsInput
  }

  export type CategoryProductsUncheckedCreateInput = {
    id?: string
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutCategoryProductsInput
  }

  export type CategoryProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateManyWithoutCategoryProductsNestedInput
  }

  export type CategoryProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutCategoryProductsNestedInput
  }

  export type CategoryProductsCreateManyInput = {
    id?: string
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    title: string
    status?: boolean
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryProducts: CategoryProductsCreateNestedOneWithoutProductInput
    user: UserCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
    ProductVariation?: ProductVariationCreateNestedManyWithoutProductInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    title: string
    status?: boolean
    category_product_id: string
    seller_user_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductVariation?: ProductVariationUncheckedCreateNestedManyWithoutProductInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryProducts?: CategoryProductsUpdateOneRequiredWithoutProductNestedInput
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    ProductVariation?: ProductVariationUpdateManyWithoutProductNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    category_product_id?: StringFieldUpdateOperationsInput | string
    seller_user_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductVariation?: ProductVariationUncheckedUpdateManyWithoutProductNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    title: string
    status?: boolean
    category_product_id: string
    seller_user_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    category_product_id?: StringFieldUpdateOperationsInput | string
    seller_user_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariationCreateInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductVariationInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutProductVariationInput
    productVariationImages?: productVariationImagesCreateNestedManyWithoutProductVariationInput
    CartItem?: CartItemCreateNestedManyWithoutProductVariationInput
  }

  export type ProductVariationUncheckedCreateInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    product_id: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutProductVariationInput
    productVariationImages?: productVariationImagesUncheckedCreateNestedManyWithoutProductVariationInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutProductVariationInput
  }

  export type ProductVariationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductVariationNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutProductVariationNestedInput
    productVariationImages?: productVariationImagesUpdateManyWithoutProductVariationNestedInput
    CartItem?: CartItemUpdateManyWithoutProductVariationNestedInput
  }

  export type ProductVariationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutProductVariationNestedInput
    productVariationImages?: productVariationImagesUncheckedUpdateManyWithoutProductVariationNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutProductVariationNestedInput
  }

  export type ProductVariationCreateManyInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    product_id: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productVariationImagesCreateInput = {
    id?: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariation: ProductVariationCreateNestedOneWithoutProductVariationImagesInput
  }

  export type productVariationImagesUncheckedCreateInput = {
    id?: string
    link: string
    product_variation_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type productVariationImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariation?: ProductVariationUpdateOneRequiredWithoutProductVariationImagesNestedInput
  }

  export type productVariationImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    product_variation_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productVariationImagesCreateManyInput = {
    id?: string
    link: string
    product_variation_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type productVariationImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productVariationImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    product_variation_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewProductCreateInput = {
    id?: string
    rating: Decimal | DecimalJsLike | number | string
    comment: string
    photos?: ReviewProductCreatephotosInput | string[]
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariation: ProductVariationCreateNestedOneWithoutReviewProductInput
    user: UserCreateNestedOneWithoutReviewProductInput
  }

  export type ReviewProductUncheckedCreateInput = {
    id?: string
    rating: Decimal | DecimalJsLike | number | string
    comment: string
    photos?: ReviewProductCreatephotosInput | string[]
    country?: string | null
    product_variation_id: string
    reviewer_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: StringFieldUpdateOperationsInput | string
    photos?: ReviewProductUpdatephotosInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariation?: ProductVariationUpdateOneRequiredWithoutReviewProductNestedInput
    user?: UserUpdateOneRequiredWithoutReviewProductNestedInput
  }

  export type ReviewProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: StringFieldUpdateOperationsInput | string
    photos?: ReviewProductUpdatephotosInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    product_variation_id?: StringFieldUpdateOperationsInput | string
    reviewer_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewProductCreateManyInput = {
    id?: string
    rating: Decimal | DecimalJsLike | number | string
    comment: string
    photos?: ReviewProductCreatephotosInput | string[]
    country?: string | null
    product_variation_id: string
    reviewer_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: StringFieldUpdateOperationsInput | string
    photos?: ReviewProductUpdatephotosInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: StringFieldUpdateOperationsInput | string
    photos?: ReviewProductUpdatephotosInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    product_variation_id?: StringFieldUpdateOperationsInput | string
    reviewer_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataCreateNestedOneWithoutUserInput
    Address?: AddressCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutUserInput
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataUncheckedCreateNestedOneWithoutUserInput
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutUserInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryUncheckedCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUpdateOneWithoutUserNestedInput
    Address?: AddressUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUncheckedUpdateOneWithoutUserNestedInput
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalDataCreateInput = {
    id?: string
    cpf: string
    birthDate: Date | string
    phone: string
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPersonalDataInput
  }

  export type PersonalDataUncheckedCreateInput = {
    id?: string
    cpf: string
    birthDate: Date | string
    phone: string
    gender: $Enums.Gender
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPersonalDataNestedInput
  }

  export type PersonalDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalDataCreateManyInput = {
    id?: string
    cpf: string
    birthDate: Date | string
    phone: string
    gender: $Enums.Gender
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    id?: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement?: string | null
    isDefault?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyInput = {
    id?: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement?: string | null
    isDefault?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductVariationScalarRelationFilter = {
    is?: ProductVariationWhereInput
    isNot?: ProductVariationWhereInput
  }

  export type CartItemUserIdProductVariationIdCompoundUniqueInput = {
    userId: string
    productVariationId: string
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    productVariationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    productVariationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    productVariationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    quantity?: SortOrder
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

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type UserFavoriteUserIdProductIdCompoundUniqueInput = {
    userId: string
    productId: string
  }

  export type UserFavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSearchHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    term?: SortOrder
    searchedAt?: SortOrder
  }

  export type UserSearchHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    term?: SortOrder
    searchedAt?: SortOrder
  }

  export type UserSearchHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    term?: SortOrder
    searchedAt?: SortOrder
  }

  export type UserProductClickCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sourcePage?: SortOrder
    clickedAt?: SortOrder
  }

  export type UserProductClickMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sourcePage?: SortOrder
    clickedAt?: SortOrder
  }

  export type UserProductClickMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    sourcePage?: SortOrder
    clickedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CategoryProductsScalarRelationFilter = {
    is?: CategoryProductsWhereInput
    isNot?: CategoryProductsWhereInput
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type ProductVariationListRelationFilter = {
    every?: ProductVariationWhereInput
    some?: ProductVariationWhereInput
    none?: ProductVariationWhereInput
  }

  export type UserFavoriteListRelationFilter = {
    every?: UserFavoriteWhereInput
    some?: UserFavoriteWhereInput
    none?: UserFavoriteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductVariationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    category_product_id?: SortOrder
    seller_user_id?: SortOrder
    brand_id?: SortOrder
    thumbnail?: SortOrder
    warrantyInformation?: SortOrder
    aiSummary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    category_product_id?: SortOrder
    seller_user_id?: SortOrder
    brand_id?: SortOrder
    thumbnail?: SortOrder
    warrantyInformation?: SortOrder
    aiSummary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    category_product_id?: SortOrder
    seller_user_id?: SortOrder
    brand_id?: SortOrder
    thumbnail?: SortOrder
    warrantyInformation?: SortOrder
    aiSummary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ReviewProductListRelationFilter = {
    every?: ReviewProductWhereInput
    some?: ReviewProductWhereInput
    none?: ReviewProductWhereInput
  }

  export type ProductVariationImagesListRelationFilter = {
    every?: productVariationImagesWhereInput
    some?: productVariationImagesWhereInput
    none?: productVariationImagesWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type ReviewProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productVariationImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    discountPercentage?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    description?: SortOrder
    product_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariationAvgOrderByAggregateInput = {
    discountPercentage?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ProductVariationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    discountPercentage?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    description?: SortOrder
    product_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    discountPercentage?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    description?: SortOrder
    product_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariationSumOrderByAggregateInput = {
    discountPercentage?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type productVariationImagesCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    product_variation_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productVariationImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    product_variation_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productVariationImagesMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    product_variation_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ReviewProductCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    photos?: SortOrder
    country?: SortOrder
    product_variation_id?: SortOrder
    reviewer_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewProductAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewProductMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    country?: SortOrder
    product_variation_id?: SortOrder
    reviewer_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewProductMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    country?: SortOrder
    product_variation_id?: SortOrder
    reviewer_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewProductSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type PersonalDataNullableScalarRelationFilter = {
    is?: PersonalDataWhereInput | null
    isNot?: PersonalDataWhereInput | null
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type UserSearchHistoryListRelationFilter = {
    every?: UserSearchHistoryWhereInput
    some?: UserSearchHistoryWhereInput
    none?: UserSearchHistoryWhereInput
  }

  export type UserProductClickListRelationFilter = {
    every?: UserProductClickWhereInput
    some?: UserProductClickWhereInput
    none?: UserProductClickWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSearchHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProductClickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type PersonalDataCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonalDataMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonalDataMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutCartItemInput = {
    create?: XOR<UserCreateWithoutCartItemInput, UserUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartItemInput
    connect?: UserWhereUniqueInput
  }

  export type ProductVariationCreateNestedOneWithoutCartItemInput = {
    create?: XOR<ProductVariationCreateWithoutCartItemInput, ProductVariationUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ProductVariationCreateOrConnectWithoutCartItemInput
    connect?: ProductVariationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type UserUpdateOneRequiredWithoutCartItemNestedInput = {
    create?: XOR<UserCreateWithoutCartItemInput, UserUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartItemInput
    upsert?: UserUpsertWithoutCartItemInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartItemInput, UserUpdateWithoutCartItemInput>, UserUncheckedUpdateWithoutCartItemInput>
  }

  export type ProductVariationUpdateOneRequiredWithoutCartItemNestedInput = {
    create?: XOR<ProductVariationCreateWithoutCartItemInput, ProductVariationUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: ProductVariationCreateOrConnectWithoutCartItemInput
    upsert?: ProductVariationUpsertWithoutCartItemInput
    connect?: ProductVariationWhereUniqueInput
    update?: XOR<XOR<ProductVariationUpdateToOneWithWhereWithoutCartItemInput, ProductVariationUpdateWithoutCartItemInput>, ProductVariationUncheckedUpdateWithoutCartItemInput>
  }

  export type UserCreateNestedOneWithoutUserFavoriteInput = {
    create?: XOR<UserCreateWithoutUserFavoriteInput, UserUncheckedCreateWithoutUserFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFavoriteInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutUserFavoriteInput = {
    create?: XOR<ProductCreateWithoutUserFavoriteInput, ProductUncheckedCreateWithoutUserFavoriteInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserFavoriteInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserFavoriteNestedInput = {
    create?: XOR<UserCreateWithoutUserFavoriteInput, UserUncheckedCreateWithoutUserFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFavoriteInput
    upsert?: UserUpsertWithoutUserFavoriteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserFavoriteInput, UserUpdateWithoutUserFavoriteInput>, UserUncheckedUpdateWithoutUserFavoriteInput>
  }

  export type ProductUpdateOneRequiredWithoutUserFavoriteNestedInput = {
    create?: XOR<ProductCreateWithoutUserFavoriteInput, ProductUncheckedCreateWithoutUserFavoriteInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserFavoriteInput
    upsert?: ProductUpsertWithoutUserFavoriteInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutUserFavoriteInput, ProductUpdateWithoutUserFavoriteInput>, ProductUncheckedUpdateWithoutUserFavoriteInput>
  }

  export type UserCreateNestedOneWithoutUserSearchHistoryInput = {
    create?: XOR<UserCreateWithoutUserSearchHistoryInput, UserUncheckedCreateWithoutUserSearchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSearchHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserSearchHistoryNestedInput = {
    create?: XOR<UserCreateWithoutUserSearchHistoryInput, UserUncheckedCreateWithoutUserSearchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSearchHistoryInput
    upsert?: UserUpsertWithoutUserSearchHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSearchHistoryInput, UserUpdateWithoutUserSearchHistoryInput>, UserUncheckedUpdateWithoutUserSearchHistoryInput>
  }

  export type UserCreateNestedOneWithoutUserProductClickInput = {
    create?: XOR<UserCreateWithoutUserProductClickInput, UserUncheckedCreateWithoutUserProductClickInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProductClickInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserProductClickNestedInput = {
    create?: XOR<UserCreateWithoutUserProductClickInput, UserUncheckedCreateWithoutUserProductClickInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProductClickInput
    upsert?: UserUpsertWithoutUserProductClickInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProductClickInput, UserUpdateWithoutUserProductClickInput>, UserUncheckedUpdateWithoutUserProductClickInput>
  }

  export type ProductCreateNestedManyWithoutCategoryProductsInput = {
    create?: XOR<ProductCreateWithoutCategoryProductsInput, ProductUncheckedCreateWithoutCategoryProductsInput> | ProductCreateWithoutCategoryProductsInput[] | ProductUncheckedCreateWithoutCategoryProductsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryProductsInput | ProductCreateOrConnectWithoutCategoryProductsInput[]
    createMany?: ProductCreateManyCategoryProductsInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryProductsInput = {
    create?: XOR<ProductCreateWithoutCategoryProductsInput, ProductUncheckedCreateWithoutCategoryProductsInput> | ProductCreateWithoutCategoryProductsInput[] | ProductUncheckedCreateWithoutCategoryProductsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryProductsInput | ProductCreateOrConnectWithoutCategoryProductsInput[]
    createMany?: ProductCreateManyCategoryProductsInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdateManyWithoutCategoryProductsNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryProductsInput, ProductUncheckedCreateWithoutCategoryProductsInput> | ProductCreateWithoutCategoryProductsInput[] | ProductUncheckedCreateWithoutCategoryProductsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryProductsInput | ProductCreateOrConnectWithoutCategoryProductsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryProductsInput | ProductUpsertWithWhereUniqueWithoutCategoryProductsInput[]
    createMany?: ProductCreateManyCategoryProductsInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryProductsInput | ProductUpdateWithWhereUniqueWithoutCategoryProductsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryProductsInput | ProductUpdateManyWithWhereWithoutCategoryProductsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryProductsNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryProductsInput, ProductUncheckedCreateWithoutCategoryProductsInput> | ProductCreateWithoutCategoryProductsInput[] | ProductUncheckedCreateWithoutCategoryProductsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryProductsInput | ProductCreateOrConnectWithoutCategoryProductsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryProductsInput | ProductUpsertWithWhereUniqueWithoutCategoryProductsInput[]
    createMany?: ProductCreateManyCategoryProductsInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryProductsInput | ProductUpdateWithWhereUniqueWithoutCategoryProductsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryProductsInput | ProductUpdateManyWithWhereWithoutCategoryProductsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryProductsCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryProductsCreateWithoutProductInput, CategoryProductsUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryProductsCreateOrConnectWithoutProductInput
    connect?: CategoryProductsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProductInput = {
    create?: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductInput
    connect?: UserWhereUniqueInput
  }

  export type BrandCreateNestedOneWithoutProductInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    connect?: BrandWhereUniqueInput
  }

  export type ProductVariationCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariationCreateWithoutProductInput, ProductVariationUncheckedCreateWithoutProductInput> | ProductVariationCreateWithoutProductInput[] | ProductVariationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariationCreateOrConnectWithoutProductInput | ProductVariationCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariationCreateManyProductInputEnvelope
    connect?: ProductVariationWhereUniqueInput | ProductVariationWhereUniqueInput[]
  }

  export type UserFavoriteCreateNestedManyWithoutProductInput = {
    create?: XOR<UserFavoriteCreateWithoutProductInput, UserFavoriteUncheckedCreateWithoutProductInput> | UserFavoriteCreateWithoutProductInput[] | UserFavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutProductInput | UserFavoriteCreateOrConnectWithoutProductInput[]
    createMany?: UserFavoriteCreateManyProductInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type ProductVariationUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariationCreateWithoutProductInput, ProductVariationUncheckedCreateWithoutProductInput> | ProductVariationCreateWithoutProductInput[] | ProductVariationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariationCreateOrConnectWithoutProductInput | ProductVariationCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariationCreateManyProductInputEnvelope
    connect?: ProductVariationWhereUniqueInput | ProductVariationWhereUniqueInput[]
  }

  export type UserFavoriteUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserFavoriteCreateWithoutProductInput, UserFavoriteUncheckedCreateWithoutProductInput> | UserFavoriteCreateWithoutProductInput[] | UserFavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutProductInput | UserFavoriteCreateOrConnectWithoutProductInput[]
    createMany?: UserFavoriteCreateManyProductInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryProductsUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CategoryProductsCreateWithoutProductInput, CategoryProductsUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryProductsCreateOrConnectWithoutProductInput
    upsert?: CategoryProductsUpsertWithoutProductInput
    connect?: CategoryProductsWhereUniqueInput
    update?: XOR<XOR<CategoryProductsUpdateToOneWithWhereWithoutProductInput, CategoryProductsUpdateWithoutProductInput>, CategoryProductsUncheckedUpdateWithoutProductInput>
  }

  export type UserUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductInput
    upsert?: UserUpsertWithoutProductInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductInput, UserUpdateWithoutProductInput>, UserUncheckedUpdateWithoutProductInput>
  }

  export type BrandUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    upsert?: BrandUpsertWithoutProductInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductInput, BrandUpdateWithoutProductInput>, BrandUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariationUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariationCreateWithoutProductInput, ProductVariationUncheckedCreateWithoutProductInput> | ProductVariationCreateWithoutProductInput[] | ProductVariationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariationCreateOrConnectWithoutProductInput | ProductVariationCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariationUpsertWithWhereUniqueWithoutProductInput | ProductVariationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariationCreateManyProductInputEnvelope
    set?: ProductVariationWhereUniqueInput | ProductVariationWhereUniqueInput[]
    disconnect?: ProductVariationWhereUniqueInput | ProductVariationWhereUniqueInput[]
    delete?: ProductVariationWhereUniqueInput | ProductVariationWhereUniqueInput[]
    connect?: ProductVariationWhereUniqueInput | ProductVariationWhereUniqueInput[]
    update?: ProductVariationUpdateWithWhereUniqueWithoutProductInput | ProductVariationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariationUpdateManyWithWhereWithoutProductInput | ProductVariationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariationScalarWhereInput | ProductVariationScalarWhereInput[]
  }

  export type UserFavoriteUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutProductInput, UserFavoriteUncheckedCreateWithoutProductInput> | UserFavoriteCreateWithoutProductInput[] | UserFavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutProductInput | UserFavoriteCreateOrConnectWithoutProductInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutProductInput | UserFavoriteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserFavoriteCreateManyProductInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutProductInput | UserFavoriteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutProductInput | UserFavoriteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type ProductVariationUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariationCreateWithoutProductInput, ProductVariationUncheckedCreateWithoutProductInput> | ProductVariationCreateWithoutProductInput[] | ProductVariationUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariationCreateOrConnectWithoutProductInput | ProductVariationCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariationUpsertWithWhereUniqueWithoutProductInput | ProductVariationUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariationCreateManyProductInputEnvelope
    set?: ProductVariationWhereUniqueInput | ProductVariationWhereUniqueInput[]
    disconnect?: ProductVariationWhereUniqueInput | ProductVariationWhereUniqueInput[]
    delete?: ProductVariationWhereUniqueInput | ProductVariationWhereUniqueInput[]
    connect?: ProductVariationWhereUniqueInput | ProductVariationWhereUniqueInput[]
    update?: ProductVariationUpdateWithWhereUniqueWithoutProductInput | ProductVariationUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariationUpdateManyWithWhereWithoutProductInput | ProductVariationUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariationScalarWhereInput | ProductVariationScalarWhereInput[]
  }

  export type UserFavoriteUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutProductInput, UserFavoriteUncheckedCreateWithoutProductInput> | UserFavoriteCreateWithoutProductInput[] | UserFavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutProductInput | UserFavoriteCreateOrConnectWithoutProductInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutProductInput | UserFavoriteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserFavoriteCreateManyProductInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutProductInput | UserFavoriteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutProductInput | UserFavoriteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductVariationInput = {
    create?: XOR<ProductCreateWithoutProductVariationInput, ProductUncheckedCreateWithoutProductVariationInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductVariationInput
    connect?: ProductWhereUniqueInput
  }

  export type ReviewProductCreateNestedManyWithoutProductVariationInput = {
    create?: XOR<ReviewProductCreateWithoutProductVariationInput, ReviewProductUncheckedCreateWithoutProductVariationInput> | ReviewProductCreateWithoutProductVariationInput[] | ReviewProductUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: ReviewProductCreateOrConnectWithoutProductVariationInput | ReviewProductCreateOrConnectWithoutProductVariationInput[]
    createMany?: ReviewProductCreateManyProductVariationInputEnvelope
    connect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
  }

  export type productVariationImagesCreateNestedManyWithoutProductVariationInput = {
    create?: XOR<productVariationImagesCreateWithoutProductVariationInput, productVariationImagesUncheckedCreateWithoutProductVariationInput> | productVariationImagesCreateWithoutProductVariationInput[] | productVariationImagesUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: productVariationImagesCreateOrConnectWithoutProductVariationInput | productVariationImagesCreateOrConnectWithoutProductVariationInput[]
    createMany?: productVariationImagesCreateManyProductVariationInputEnvelope
    connect?: productVariationImagesWhereUniqueInput | productVariationImagesWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutProductVariationInput = {
    create?: XOR<CartItemCreateWithoutProductVariationInput, CartItemUncheckedCreateWithoutProductVariationInput> | CartItemCreateWithoutProductVariationInput[] | CartItemUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductVariationInput | CartItemCreateOrConnectWithoutProductVariationInput[]
    createMany?: CartItemCreateManyProductVariationInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type ReviewProductUncheckedCreateNestedManyWithoutProductVariationInput = {
    create?: XOR<ReviewProductCreateWithoutProductVariationInput, ReviewProductUncheckedCreateWithoutProductVariationInput> | ReviewProductCreateWithoutProductVariationInput[] | ReviewProductUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: ReviewProductCreateOrConnectWithoutProductVariationInput | ReviewProductCreateOrConnectWithoutProductVariationInput[]
    createMany?: ReviewProductCreateManyProductVariationInputEnvelope
    connect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
  }

  export type productVariationImagesUncheckedCreateNestedManyWithoutProductVariationInput = {
    create?: XOR<productVariationImagesCreateWithoutProductVariationInput, productVariationImagesUncheckedCreateWithoutProductVariationInput> | productVariationImagesCreateWithoutProductVariationInput[] | productVariationImagesUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: productVariationImagesCreateOrConnectWithoutProductVariationInput | productVariationImagesCreateOrConnectWithoutProductVariationInput[]
    createMany?: productVariationImagesCreateManyProductVariationInputEnvelope
    connect?: productVariationImagesWhereUniqueInput | productVariationImagesWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductVariationInput = {
    create?: XOR<CartItemCreateWithoutProductVariationInput, CartItemUncheckedCreateWithoutProductVariationInput> | CartItemCreateWithoutProductVariationInput[] | CartItemUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductVariationInput | CartItemCreateOrConnectWithoutProductVariationInput[]
    createMany?: CartItemCreateManyProductVariationInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProductUpdateOneRequiredWithoutProductVariationNestedInput = {
    create?: XOR<ProductCreateWithoutProductVariationInput, ProductUncheckedCreateWithoutProductVariationInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductVariationInput
    upsert?: ProductUpsertWithoutProductVariationInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductVariationInput, ProductUpdateWithoutProductVariationInput>, ProductUncheckedUpdateWithoutProductVariationInput>
  }

  export type ReviewProductUpdateManyWithoutProductVariationNestedInput = {
    create?: XOR<ReviewProductCreateWithoutProductVariationInput, ReviewProductUncheckedCreateWithoutProductVariationInput> | ReviewProductCreateWithoutProductVariationInput[] | ReviewProductUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: ReviewProductCreateOrConnectWithoutProductVariationInput | ReviewProductCreateOrConnectWithoutProductVariationInput[]
    upsert?: ReviewProductUpsertWithWhereUniqueWithoutProductVariationInput | ReviewProductUpsertWithWhereUniqueWithoutProductVariationInput[]
    createMany?: ReviewProductCreateManyProductVariationInputEnvelope
    set?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    disconnect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    delete?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    connect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    update?: ReviewProductUpdateWithWhereUniqueWithoutProductVariationInput | ReviewProductUpdateWithWhereUniqueWithoutProductVariationInput[]
    updateMany?: ReviewProductUpdateManyWithWhereWithoutProductVariationInput | ReviewProductUpdateManyWithWhereWithoutProductVariationInput[]
    deleteMany?: ReviewProductScalarWhereInput | ReviewProductScalarWhereInput[]
  }

  export type productVariationImagesUpdateManyWithoutProductVariationNestedInput = {
    create?: XOR<productVariationImagesCreateWithoutProductVariationInput, productVariationImagesUncheckedCreateWithoutProductVariationInput> | productVariationImagesCreateWithoutProductVariationInput[] | productVariationImagesUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: productVariationImagesCreateOrConnectWithoutProductVariationInput | productVariationImagesCreateOrConnectWithoutProductVariationInput[]
    upsert?: productVariationImagesUpsertWithWhereUniqueWithoutProductVariationInput | productVariationImagesUpsertWithWhereUniqueWithoutProductVariationInput[]
    createMany?: productVariationImagesCreateManyProductVariationInputEnvelope
    set?: productVariationImagesWhereUniqueInput | productVariationImagesWhereUniqueInput[]
    disconnect?: productVariationImagesWhereUniqueInput | productVariationImagesWhereUniqueInput[]
    delete?: productVariationImagesWhereUniqueInput | productVariationImagesWhereUniqueInput[]
    connect?: productVariationImagesWhereUniqueInput | productVariationImagesWhereUniqueInput[]
    update?: productVariationImagesUpdateWithWhereUniqueWithoutProductVariationInput | productVariationImagesUpdateWithWhereUniqueWithoutProductVariationInput[]
    updateMany?: productVariationImagesUpdateManyWithWhereWithoutProductVariationInput | productVariationImagesUpdateManyWithWhereWithoutProductVariationInput[]
    deleteMany?: productVariationImagesScalarWhereInput | productVariationImagesScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutProductVariationNestedInput = {
    create?: XOR<CartItemCreateWithoutProductVariationInput, CartItemUncheckedCreateWithoutProductVariationInput> | CartItemCreateWithoutProductVariationInput[] | CartItemUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductVariationInput | CartItemCreateOrConnectWithoutProductVariationInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductVariationInput | CartItemUpsertWithWhereUniqueWithoutProductVariationInput[]
    createMany?: CartItemCreateManyProductVariationInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductVariationInput | CartItemUpdateWithWhereUniqueWithoutProductVariationInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductVariationInput | CartItemUpdateManyWithWhereWithoutProductVariationInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type ReviewProductUncheckedUpdateManyWithoutProductVariationNestedInput = {
    create?: XOR<ReviewProductCreateWithoutProductVariationInput, ReviewProductUncheckedCreateWithoutProductVariationInput> | ReviewProductCreateWithoutProductVariationInput[] | ReviewProductUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: ReviewProductCreateOrConnectWithoutProductVariationInput | ReviewProductCreateOrConnectWithoutProductVariationInput[]
    upsert?: ReviewProductUpsertWithWhereUniqueWithoutProductVariationInput | ReviewProductUpsertWithWhereUniqueWithoutProductVariationInput[]
    createMany?: ReviewProductCreateManyProductVariationInputEnvelope
    set?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    disconnect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    delete?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    connect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    update?: ReviewProductUpdateWithWhereUniqueWithoutProductVariationInput | ReviewProductUpdateWithWhereUniqueWithoutProductVariationInput[]
    updateMany?: ReviewProductUpdateManyWithWhereWithoutProductVariationInput | ReviewProductUpdateManyWithWhereWithoutProductVariationInput[]
    deleteMany?: ReviewProductScalarWhereInput | ReviewProductScalarWhereInput[]
  }

  export type productVariationImagesUncheckedUpdateManyWithoutProductVariationNestedInput = {
    create?: XOR<productVariationImagesCreateWithoutProductVariationInput, productVariationImagesUncheckedCreateWithoutProductVariationInput> | productVariationImagesCreateWithoutProductVariationInput[] | productVariationImagesUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: productVariationImagesCreateOrConnectWithoutProductVariationInput | productVariationImagesCreateOrConnectWithoutProductVariationInput[]
    upsert?: productVariationImagesUpsertWithWhereUniqueWithoutProductVariationInput | productVariationImagesUpsertWithWhereUniqueWithoutProductVariationInput[]
    createMany?: productVariationImagesCreateManyProductVariationInputEnvelope
    set?: productVariationImagesWhereUniqueInput | productVariationImagesWhereUniqueInput[]
    disconnect?: productVariationImagesWhereUniqueInput | productVariationImagesWhereUniqueInput[]
    delete?: productVariationImagesWhereUniqueInput | productVariationImagesWhereUniqueInput[]
    connect?: productVariationImagesWhereUniqueInput | productVariationImagesWhereUniqueInput[]
    update?: productVariationImagesUpdateWithWhereUniqueWithoutProductVariationInput | productVariationImagesUpdateWithWhereUniqueWithoutProductVariationInput[]
    updateMany?: productVariationImagesUpdateManyWithWhereWithoutProductVariationInput | productVariationImagesUpdateManyWithWhereWithoutProductVariationInput[]
    deleteMany?: productVariationImagesScalarWhereInput | productVariationImagesScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutProductVariationNestedInput = {
    create?: XOR<CartItemCreateWithoutProductVariationInput, CartItemUncheckedCreateWithoutProductVariationInput> | CartItemCreateWithoutProductVariationInput[] | CartItemUncheckedCreateWithoutProductVariationInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductVariationInput | CartItemCreateOrConnectWithoutProductVariationInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductVariationInput | CartItemUpsertWithWhereUniqueWithoutProductVariationInput[]
    createMany?: CartItemCreateManyProductVariationInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductVariationInput | CartItemUpdateWithWhereUniqueWithoutProductVariationInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductVariationInput | CartItemUpdateManyWithWhereWithoutProductVariationInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type ProductVariationCreateNestedOneWithoutProductVariationImagesInput = {
    create?: XOR<ProductVariationCreateWithoutProductVariationImagesInput, ProductVariationUncheckedCreateWithoutProductVariationImagesInput>
    connectOrCreate?: ProductVariationCreateOrConnectWithoutProductVariationImagesInput
    connect?: ProductVariationWhereUniqueInput
  }

  export type ProductVariationUpdateOneRequiredWithoutProductVariationImagesNestedInput = {
    create?: XOR<ProductVariationCreateWithoutProductVariationImagesInput, ProductVariationUncheckedCreateWithoutProductVariationImagesInput>
    connectOrCreate?: ProductVariationCreateOrConnectWithoutProductVariationImagesInput
    upsert?: ProductVariationUpsertWithoutProductVariationImagesInput
    connect?: ProductVariationWhereUniqueInput
    update?: XOR<XOR<ProductVariationUpdateToOneWithWhereWithoutProductVariationImagesInput, ProductVariationUpdateWithoutProductVariationImagesInput>, ProductVariationUncheckedUpdateWithoutProductVariationImagesInput>
  }

  export type ReviewProductCreatephotosInput = {
    set: string[]
  }

  export type ProductVariationCreateNestedOneWithoutReviewProductInput = {
    create?: XOR<ProductVariationCreateWithoutReviewProductInput, ProductVariationUncheckedCreateWithoutReviewProductInput>
    connectOrCreate?: ProductVariationCreateOrConnectWithoutReviewProductInput
    connect?: ProductVariationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewProductInput = {
    create?: XOR<UserCreateWithoutReviewProductInput, UserUncheckedCreateWithoutReviewProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewProductInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewProductUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductVariationUpdateOneRequiredWithoutReviewProductNestedInput = {
    create?: XOR<ProductVariationCreateWithoutReviewProductInput, ProductVariationUncheckedCreateWithoutReviewProductInput>
    connectOrCreate?: ProductVariationCreateOrConnectWithoutReviewProductInput
    upsert?: ProductVariationUpsertWithoutReviewProductInput
    connect?: ProductVariationWhereUniqueInput
    update?: XOR<XOR<ProductVariationUpdateToOneWithWhereWithoutReviewProductInput, ProductVariationUpdateWithoutReviewProductInput>, ProductVariationUncheckedUpdateWithoutReviewProductInput>
  }

  export type UserUpdateOneRequiredWithoutReviewProductNestedInput = {
    create?: XOR<UserCreateWithoutReviewProductInput, UserUncheckedCreateWithoutReviewProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewProductInput
    upsert?: UserUpsertWithoutReviewProductInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewProductInput, UserUpdateWithoutReviewProductInput>, UserUncheckedUpdateWithoutReviewProductInput>
  }

  export type UserCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput> | UserCreateWithoutProfileInput[] | UserUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | UserCreateOrConnectWithoutProfileInput[]
    createMany?: UserCreateManyProfileInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput> | UserCreateWithoutProfileInput[] | UserUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | UserCreateOrConnectWithoutProfileInput[]
    createMany?: UserCreateManyProfileInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput> | UserCreateWithoutProfileInput[] | UserUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | UserCreateOrConnectWithoutProfileInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProfileInput | UserUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserCreateManyProfileInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProfileInput | UserUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProfileInput | UserUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput> | UserCreateWithoutProfileInput[] | UserUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | UserCreateOrConnectWithoutProfileInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProfileInput | UserUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserCreateManyProfileInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProfileInput | UserUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProfileInput | UserUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type PersonalDataCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonalDataCreateWithoutUserInput, PersonalDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonalDataCreateOrConnectWithoutUserInput
    connect?: PersonalDataWhereUniqueInput
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type ReviewProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewProductCreateWithoutUserInput, ReviewProductUncheckedCreateWithoutUserInput> | ReviewProductCreateWithoutUserInput[] | ReviewProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewProductCreateOrConnectWithoutUserInput | ReviewProductCreateOrConnectWithoutUserInput[]
    createMany?: ReviewProductCreateManyUserInputEnvelope
    connect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutUserInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type UserFavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type UserSearchHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSearchHistoryCreateWithoutUserInput, UserSearchHistoryUncheckedCreateWithoutUserInput> | UserSearchHistoryCreateWithoutUserInput[] | UserSearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSearchHistoryCreateOrConnectWithoutUserInput | UserSearchHistoryCreateOrConnectWithoutUserInput[]
    createMany?: UserSearchHistoryCreateManyUserInputEnvelope
    connect?: UserSearchHistoryWhereUniqueInput | UserSearchHistoryWhereUniqueInput[]
  }

  export type UserProductClickCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProductClickCreateWithoutUserInput, UserProductClickUncheckedCreateWithoutUserInput> | UserProductClickCreateWithoutUserInput[] | UserProductClickUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductClickCreateOrConnectWithoutUserInput | UserProductClickCreateOrConnectWithoutUserInput[]
    createMany?: UserProductClickCreateManyUserInputEnvelope
    connect?: UserProductClickWhereUniqueInput | UserProductClickWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type PersonalDataUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonalDataCreateWithoutUserInput, PersonalDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonalDataCreateOrConnectWithoutUserInput
    connect?: PersonalDataWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type ReviewProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewProductCreateWithoutUserInput, ReviewProductUncheckedCreateWithoutUserInput> | ReviewProductCreateWithoutUserInput[] | ReviewProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewProductCreateOrConnectWithoutUserInput | ReviewProductCreateOrConnectWithoutUserInput[]
    createMany?: ReviewProductCreateManyUserInputEnvelope
    connect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type UserFavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
  }

  export type UserSearchHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSearchHistoryCreateWithoutUserInput, UserSearchHistoryUncheckedCreateWithoutUserInput> | UserSearchHistoryCreateWithoutUserInput[] | UserSearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSearchHistoryCreateOrConnectWithoutUserInput | UserSearchHistoryCreateOrConnectWithoutUserInput[]
    createMany?: UserSearchHistoryCreateManyUserInputEnvelope
    connect?: UserSearchHistoryWhereUniqueInput | UserSearchHistoryWhereUniqueInput[]
  }

  export type UserProductClickUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProductClickCreateWithoutUserInput, UserProductClickUncheckedCreateWithoutUserInput> | UserProductClickCreateWithoutUserInput[] | UserProductClickUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductClickCreateOrConnectWithoutUserInput | UserProductClickCreateOrConnectWithoutUserInput[]
    createMany?: UserProductClickCreateManyUserInputEnvelope
    connect?: UserProductClickWhereUniqueInput | UserProductClickWhereUniqueInput[]
  }

  export type ProfileUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type PersonalDataUpdateOneWithoutUserNestedInput = {
    create?: XOR<PersonalDataCreateWithoutUserInput, PersonalDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonalDataCreateOrConnectWithoutUserInput
    upsert?: PersonalDataUpsertWithoutUserInput
    disconnect?: PersonalDataWhereInput | boolean
    delete?: PersonalDataWhereInput | boolean
    connect?: PersonalDataWhereUniqueInput
    update?: XOR<XOR<PersonalDataUpdateToOneWithWhereWithoutUserInput, PersonalDataUpdateWithoutUserInput>, PersonalDataUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type ReviewProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewProductCreateWithoutUserInput, ReviewProductUncheckedCreateWithoutUserInput> | ReviewProductCreateWithoutUserInput[] | ReviewProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewProductCreateOrConnectWithoutUserInput | ReviewProductCreateOrConnectWithoutUserInput[]
    upsert?: ReviewProductUpsertWithWhereUniqueWithoutUserInput | ReviewProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewProductCreateManyUserInputEnvelope
    set?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    disconnect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    delete?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    connect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    update?: ReviewProductUpdateWithWhereUniqueWithoutUserInput | ReviewProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewProductUpdateManyWithWhereWithoutUserInput | ReviewProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewProductScalarWhereInput | ReviewProductScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutUserInput | CartItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutUserInput | CartItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutUserInput | CartItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type UserFavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutUserInput | UserFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutUserInput | UserFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutUserInput | UserFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type UserSearchHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSearchHistoryCreateWithoutUserInput, UserSearchHistoryUncheckedCreateWithoutUserInput> | UserSearchHistoryCreateWithoutUserInput[] | UserSearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSearchHistoryCreateOrConnectWithoutUserInput | UserSearchHistoryCreateOrConnectWithoutUserInput[]
    upsert?: UserSearchHistoryUpsertWithWhereUniqueWithoutUserInput | UserSearchHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSearchHistoryCreateManyUserInputEnvelope
    set?: UserSearchHistoryWhereUniqueInput | UserSearchHistoryWhereUniqueInput[]
    disconnect?: UserSearchHistoryWhereUniqueInput | UserSearchHistoryWhereUniqueInput[]
    delete?: UserSearchHistoryWhereUniqueInput | UserSearchHistoryWhereUniqueInput[]
    connect?: UserSearchHistoryWhereUniqueInput | UserSearchHistoryWhereUniqueInput[]
    update?: UserSearchHistoryUpdateWithWhereUniqueWithoutUserInput | UserSearchHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSearchHistoryUpdateManyWithWhereWithoutUserInput | UserSearchHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSearchHistoryScalarWhereInput | UserSearchHistoryScalarWhereInput[]
  }

  export type UserProductClickUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProductClickCreateWithoutUserInput, UserProductClickUncheckedCreateWithoutUserInput> | UserProductClickCreateWithoutUserInput[] | UserProductClickUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductClickCreateOrConnectWithoutUserInput | UserProductClickCreateOrConnectWithoutUserInput[]
    upsert?: UserProductClickUpsertWithWhereUniqueWithoutUserInput | UserProductClickUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProductClickCreateManyUserInputEnvelope
    set?: UserProductClickWhereUniqueInput | UserProductClickWhereUniqueInput[]
    disconnect?: UserProductClickWhereUniqueInput | UserProductClickWhereUniqueInput[]
    delete?: UserProductClickWhereUniqueInput | UserProductClickWhereUniqueInput[]
    connect?: UserProductClickWhereUniqueInput | UserProductClickWhereUniqueInput[]
    update?: UserProductClickUpdateWithWhereUniqueWithoutUserInput | UserProductClickUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProductClickUpdateManyWithWhereWithoutUserInput | UserProductClickUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProductClickScalarWhereInput | UserProductClickScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type PersonalDataUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PersonalDataCreateWithoutUserInput, PersonalDataUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonalDataCreateOrConnectWithoutUserInput
    upsert?: PersonalDataUpsertWithoutUserInput
    disconnect?: PersonalDataWhereInput | boolean
    delete?: PersonalDataWhereInput | boolean
    connect?: PersonalDataWhereUniqueInput
    update?: XOR<XOR<PersonalDataUpdateToOneWithWhereWithoutUserInput, PersonalDataUpdateWithoutUserInput>, PersonalDataUncheckedUpdateWithoutUserInput>
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type ReviewProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewProductCreateWithoutUserInput, ReviewProductUncheckedCreateWithoutUserInput> | ReviewProductCreateWithoutUserInput[] | ReviewProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewProductCreateOrConnectWithoutUserInput | ReviewProductCreateOrConnectWithoutUserInput[]
    upsert?: ReviewProductUpsertWithWhereUniqueWithoutUserInput | ReviewProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewProductCreateManyUserInputEnvelope
    set?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    disconnect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    delete?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    connect?: ReviewProductWhereUniqueInput | ReviewProductWhereUniqueInput[]
    update?: ReviewProductUpdateWithWhereUniqueWithoutUserInput | ReviewProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewProductUpdateManyWithWhereWithoutUserInput | ReviewProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewProductScalarWhereInput | ReviewProductScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutUserInput | CartItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutUserInput | CartItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutUserInput | CartItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type UserFavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput> | UserFavoriteCreateWithoutUserInput[] | UserFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavoriteCreateOrConnectWithoutUserInput | UserFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: UserFavoriteUpsertWithWhereUniqueWithoutUserInput | UserFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavoriteCreateManyUserInputEnvelope
    set?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    disconnect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    delete?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    connect?: UserFavoriteWhereUniqueInput | UserFavoriteWhereUniqueInput[]
    update?: UserFavoriteUpdateWithWhereUniqueWithoutUserInput | UserFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavoriteUpdateManyWithWhereWithoutUserInput | UserFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
  }

  export type UserSearchHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSearchHistoryCreateWithoutUserInput, UserSearchHistoryUncheckedCreateWithoutUserInput> | UserSearchHistoryCreateWithoutUserInput[] | UserSearchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSearchHistoryCreateOrConnectWithoutUserInput | UserSearchHistoryCreateOrConnectWithoutUserInput[]
    upsert?: UserSearchHistoryUpsertWithWhereUniqueWithoutUserInput | UserSearchHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSearchHistoryCreateManyUserInputEnvelope
    set?: UserSearchHistoryWhereUniqueInput | UserSearchHistoryWhereUniqueInput[]
    disconnect?: UserSearchHistoryWhereUniqueInput | UserSearchHistoryWhereUniqueInput[]
    delete?: UserSearchHistoryWhereUniqueInput | UserSearchHistoryWhereUniqueInput[]
    connect?: UserSearchHistoryWhereUniqueInput | UserSearchHistoryWhereUniqueInput[]
    update?: UserSearchHistoryUpdateWithWhereUniqueWithoutUserInput | UserSearchHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSearchHistoryUpdateManyWithWhereWithoutUserInput | UserSearchHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSearchHistoryScalarWhereInput | UserSearchHistoryScalarWhereInput[]
  }

  export type UserProductClickUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProductClickCreateWithoutUserInput, UserProductClickUncheckedCreateWithoutUserInput> | UserProductClickCreateWithoutUserInput[] | UserProductClickUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductClickCreateOrConnectWithoutUserInput | UserProductClickCreateOrConnectWithoutUserInput[]
    upsert?: UserProductClickUpsertWithWhereUniqueWithoutUserInput | UserProductClickUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProductClickCreateManyUserInputEnvelope
    set?: UserProductClickWhereUniqueInput | UserProductClickWhereUniqueInput[]
    disconnect?: UserProductClickWhereUniqueInput | UserProductClickWhereUniqueInput[]
    delete?: UserProductClickWhereUniqueInput | UserProductClickWhereUniqueInput[]
    connect?: UserProductClickWhereUniqueInput | UserProductClickWhereUniqueInput[]
    update?: UserProductClickUpdateWithWhereUniqueWithoutUserInput | UserProductClickUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProductClickUpdateManyWithWhereWithoutUserInput | UserProductClickUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProductClickScalarWhereInput | UserProductClickScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPersonalDataInput = {
    create?: XOR<UserCreateWithoutPersonalDataInput, UserUncheckedCreateWithoutPersonalDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalDataInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type UserUpdateOneRequiredWithoutPersonalDataNestedInput = {
    create?: XOR<UserCreateWithoutPersonalDataInput, UserUncheckedCreateWithoutPersonalDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalDataInput
    upsert?: UserUpsertWithoutPersonalDataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonalDataInput, UserUpdateWithoutPersonalDataInput>, UserUncheckedUpdateWithoutPersonalDataInput>
  }

  export type UserCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type UserCreateWithoutCartItemInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataCreateNestedOneWithoutUserInput
    Address?: AddressCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartItemInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataUncheckedCreateNestedOneWithoutUserInput
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryUncheckedCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartItemInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartItemInput, UserUncheckedCreateWithoutCartItemInput>
  }

  export type ProductVariationCreateWithoutCartItemInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductVariationInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutProductVariationInput
    productVariationImages?: productVariationImagesCreateNestedManyWithoutProductVariationInput
  }

  export type ProductVariationUncheckedCreateWithoutCartItemInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    product_id: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutProductVariationInput
    productVariationImages?: productVariationImagesUncheckedCreateNestedManyWithoutProductVariationInput
  }

  export type ProductVariationCreateOrConnectWithoutCartItemInput = {
    where: ProductVariationWhereUniqueInput
    create: XOR<ProductVariationCreateWithoutCartItemInput, ProductVariationUncheckedCreateWithoutCartItemInput>
  }

  export type UserUpsertWithoutCartItemInput = {
    update: XOR<UserUpdateWithoutCartItemInput, UserUncheckedUpdateWithoutCartItemInput>
    create: XOR<UserCreateWithoutCartItemInput, UserUncheckedCreateWithoutCartItemInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartItemInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartItemInput, UserUncheckedUpdateWithoutCartItemInput>
  }

  export type UserUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUpdateOneWithoutUserNestedInput
    Address?: AddressUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUncheckedUpdateOneWithoutUserNestedInput
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductVariationUpsertWithoutCartItemInput = {
    update: XOR<ProductVariationUpdateWithoutCartItemInput, ProductVariationUncheckedUpdateWithoutCartItemInput>
    create: XOR<ProductVariationCreateWithoutCartItemInput, ProductVariationUncheckedCreateWithoutCartItemInput>
    where?: ProductVariationWhereInput
  }

  export type ProductVariationUpdateToOneWithWhereWithoutCartItemInput = {
    where?: ProductVariationWhereInput
    data: XOR<ProductVariationUpdateWithoutCartItemInput, ProductVariationUncheckedUpdateWithoutCartItemInput>
  }

  export type ProductVariationUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductVariationNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutProductVariationNestedInput
    productVariationImages?: productVariationImagesUpdateManyWithoutProductVariationNestedInput
  }

  export type ProductVariationUncheckedUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutProductVariationNestedInput
    productVariationImages?: productVariationImagesUncheckedUpdateManyWithoutProductVariationNestedInput
  }

  export type UserCreateWithoutUserFavoriteInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataCreateNestedOneWithoutUserInput
    Address?: AddressCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutUserInput
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserFavoriteInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataUncheckedCreateNestedOneWithoutUserInput
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutUserInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryUncheckedCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserFavoriteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserFavoriteInput, UserUncheckedCreateWithoutUserFavoriteInput>
  }

  export type ProductCreateWithoutUserFavoriteInput = {
    id?: string
    title: string
    status?: boolean
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryProducts: CategoryProductsCreateNestedOneWithoutProductInput
    user: UserCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
    ProductVariation?: ProductVariationCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserFavoriteInput = {
    id?: string
    title: string
    status?: boolean
    category_product_id: string
    seller_user_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductVariation?: ProductVariationUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserFavoriteInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserFavoriteInput, ProductUncheckedCreateWithoutUserFavoriteInput>
  }

  export type UserUpsertWithoutUserFavoriteInput = {
    update: XOR<UserUpdateWithoutUserFavoriteInput, UserUncheckedUpdateWithoutUserFavoriteInput>
    create: XOR<UserCreateWithoutUserFavoriteInput, UserUncheckedCreateWithoutUserFavoriteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserFavoriteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserFavoriteInput, UserUncheckedUpdateWithoutUserFavoriteInput>
  }

  export type UserUpdateWithoutUserFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUpdateOneWithoutUserNestedInput
    Address?: AddressUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUncheckedUpdateOneWithoutUserNestedInput
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutUserFavoriteInput = {
    update: XOR<ProductUpdateWithoutUserFavoriteInput, ProductUncheckedUpdateWithoutUserFavoriteInput>
    create: XOR<ProductCreateWithoutUserFavoriteInput, ProductUncheckedCreateWithoutUserFavoriteInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutUserFavoriteInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutUserFavoriteInput, ProductUncheckedUpdateWithoutUserFavoriteInput>
  }

  export type ProductUpdateWithoutUserFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryProducts?: CategoryProductsUpdateOneRequiredWithoutProductNestedInput
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    ProductVariation?: ProductVariationUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    category_product_id?: StringFieldUpdateOperationsInput | string
    seller_user_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductVariation?: ProductVariationUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutUserSearchHistoryInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataCreateNestedOneWithoutUserInput
    Address?: AddressCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutUserInput
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSearchHistoryInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataUncheckedCreateNestedOneWithoutUserInput
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutUserInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSearchHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSearchHistoryInput, UserUncheckedCreateWithoutUserSearchHistoryInput>
  }

  export type UserUpsertWithoutUserSearchHistoryInput = {
    update: XOR<UserUpdateWithoutUserSearchHistoryInput, UserUncheckedUpdateWithoutUserSearchHistoryInput>
    create: XOR<UserCreateWithoutUserSearchHistoryInput, UserUncheckedCreateWithoutUserSearchHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSearchHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSearchHistoryInput, UserUncheckedUpdateWithoutUserSearchHistoryInput>
  }

  export type UserUpdateWithoutUserSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUpdateOneWithoutUserNestedInput
    Address?: AddressUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSearchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUncheckedUpdateOneWithoutUserNestedInput
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserProductClickInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataCreateNestedOneWithoutUserInput
    Address?: AddressCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutUserInput
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserProductClickInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataUncheckedCreateNestedOneWithoutUserInput
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutUserInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserProductClickInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProductClickInput, UserUncheckedCreateWithoutUserProductClickInput>
  }

  export type UserUpsertWithoutUserProductClickInput = {
    update: XOR<UserUpdateWithoutUserProductClickInput, UserUncheckedUpdateWithoutUserProductClickInput>
    create: XOR<UserCreateWithoutUserProductClickInput, UserUncheckedCreateWithoutUserProductClickInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProductClickInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProductClickInput, UserUncheckedUpdateWithoutUserProductClickInput>
  }

  export type UserUpdateWithoutUserProductClickInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUpdateOneWithoutUserNestedInput
    Address?: AddressUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserProductClickInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUncheckedUpdateOneWithoutUserNestedInput
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductCreateWithoutCategoryProductsInput = {
    id?: string
    title: string
    status?: boolean
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
    ProductVariation?: ProductVariationCreateNestedManyWithoutProductInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryProductsInput = {
    id?: string
    title: string
    status?: boolean
    seller_user_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductVariation?: ProductVariationUncheckedCreateNestedManyWithoutProductInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryProductsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryProductsInput, ProductUncheckedCreateWithoutCategoryProductsInput>
  }

  export type ProductCreateManyCategoryProductsInputEnvelope = {
    data: ProductCreateManyCategoryProductsInput | ProductCreateManyCategoryProductsInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryProductsInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryProductsInput, ProductUncheckedUpdateWithoutCategoryProductsInput>
    create: XOR<ProductCreateWithoutCategoryProductsInput, ProductUncheckedCreateWithoutCategoryProductsInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryProductsInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryProductsInput, ProductUncheckedUpdateWithoutCategoryProductsInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryProductsInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryProductsInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    status?: BoolFilter<"Product"> | boolean
    category_product_id?: StringFilter<"Product"> | string
    seller_user_id?: StringFilter<"Product"> | string
    brand_id?: StringFilter<"Product"> | string
    thumbnail?: StringFilter<"Product"> | string
    warrantyInformation?: StringFilter<"Product"> | string
    aiSummary?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductCreateWithoutBrandInput = {
    id?: string
    title: string
    status?: boolean
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryProducts: CategoryProductsCreateNestedOneWithoutProductInput
    user: UserCreateNestedOneWithoutProductInput
    ProductVariation?: ProductVariationCreateNestedManyWithoutProductInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: string
    title: string
    status?: boolean
    category_product_id: string
    seller_user_id: string
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductVariation?: ProductVariationUncheckedCreateNestedManyWithoutProductInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type CategoryProductsCreateWithoutProductInput = {
    id?: string
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryProductsUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryProductsCreateOrConnectWithoutProductInput = {
    where: CategoryProductsWhereUniqueInput
    create: XOR<CategoryProductsCreateWithoutProductInput, CategoryProductsUncheckedCreateWithoutProductInput>
  }

  export type UserCreateWithoutProductInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    PersonalData?: PersonalDataCreateNestedOneWithoutUserInput
    Address?: AddressCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutUserInput
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    PersonalData?: PersonalDataUncheckedCreateNestedOneWithoutUserInput
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutUserInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryUncheckedCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
  }

  export type BrandCreateWithoutProductInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandCreateOrConnectWithoutProductInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
  }

  export type ProductVariationCreateWithoutProductInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ReviewProduct?: ReviewProductCreateNestedManyWithoutProductVariationInput
    productVariationImages?: productVariationImagesCreateNestedManyWithoutProductVariationInput
    CartItem?: CartItemCreateNestedManyWithoutProductVariationInput
  }

  export type ProductVariationUncheckedCreateWithoutProductInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutProductVariationInput
    productVariationImages?: productVariationImagesUncheckedCreateNestedManyWithoutProductVariationInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutProductVariationInput
  }

  export type ProductVariationCreateOrConnectWithoutProductInput = {
    where: ProductVariationWhereUniqueInput
    create: XOR<ProductVariationCreateWithoutProductInput, ProductVariationUncheckedCreateWithoutProductInput>
  }

  export type ProductVariationCreateManyProductInputEnvelope = {
    data: ProductVariationCreateManyProductInput | ProductVariationCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserFavoriteCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserFavoriteInput
  }

  export type UserFavoriteUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UserFavoriteCreateOrConnectWithoutProductInput = {
    where: UserFavoriteWhereUniqueInput
    create: XOR<UserFavoriteCreateWithoutProductInput, UserFavoriteUncheckedCreateWithoutProductInput>
  }

  export type UserFavoriteCreateManyProductInputEnvelope = {
    data: UserFavoriteCreateManyProductInput | UserFavoriteCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryProductsUpsertWithoutProductInput = {
    update: XOR<CategoryProductsUpdateWithoutProductInput, CategoryProductsUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryProductsCreateWithoutProductInput, CategoryProductsUncheckedCreateWithoutProductInput>
    where?: CategoryProductsWhereInput
  }

  export type CategoryProductsUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryProductsWhereInput
    data: XOR<CategoryProductsUpdateWithoutProductInput, CategoryProductsUncheckedUpdateWithoutProductInput>
  }

  export type CategoryProductsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryProductsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutProductInput = {
    update: XOR<UserUpdateWithoutProductInput, UserUncheckedUpdateWithoutProductInput>
    create: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductInput, UserUncheckedUpdateWithoutProductInput>
  }

  export type UserUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    PersonalData?: PersonalDataUpdateOneWithoutUserNestedInput
    Address?: AddressUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PersonalData?: PersonalDataUncheckedUpdateOneWithoutUserNestedInput
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BrandUpsertWithoutProductInput = {
    update: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
  }

  export type BrandUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariationUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariationWhereUniqueInput
    update: XOR<ProductVariationUpdateWithoutProductInput, ProductVariationUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariationCreateWithoutProductInput, ProductVariationUncheckedCreateWithoutProductInput>
  }

  export type ProductVariationUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariationWhereUniqueInput
    data: XOR<ProductVariationUpdateWithoutProductInput, ProductVariationUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariationUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariationScalarWhereInput
    data: XOR<ProductVariationUpdateManyMutationInput, ProductVariationUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariationScalarWhereInput = {
    AND?: ProductVariationScalarWhereInput | ProductVariationScalarWhereInput[]
    OR?: ProductVariationScalarWhereInput[]
    NOT?: ProductVariationScalarWhereInput | ProductVariationScalarWhereInput[]
    id?: StringFilter<"ProductVariation"> | string
    title?: StringFilter<"ProductVariation"> | string
    discountPercentage?: DecimalFilter<"ProductVariation"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"ProductVariation"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"ProductVariation"> | number
    description?: StringFilter<"ProductVariation"> | string
    product_id?: StringFilter<"ProductVariation"> | string
    status?: BoolFilter<"ProductVariation"> | boolean
    createdAt?: DateTimeFilter<"ProductVariation"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariation"> | Date | string
  }

  export type UserFavoriteUpsertWithWhereUniqueWithoutProductInput = {
    where: UserFavoriteWhereUniqueInput
    update: XOR<UserFavoriteUpdateWithoutProductInput, UserFavoriteUncheckedUpdateWithoutProductInput>
    create: XOR<UserFavoriteCreateWithoutProductInput, UserFavoriteUncheckedCreateWithoutProductInput>
  }

  export type UserFavoriteUpdateWithWhereUniqueWithoutProductInput = {
    where: UserFavoriteWhereUniqueInput
    data: XOR<UserFavoriteUpdateWithoutProductInput, UserFavoriteUncheckedUpdateWithoutProductInput>
  }

  export type UserFavoriteUpdateManyWithWhereWithoutProductInput = {
    where: UserFavoriteScalarWhereInput
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyWithoutProductInput>
  }

  export type UserFavoriteScalarWhereInput = {
    AND?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
    OR?: UserFavoriteScalarWhereInput[]
    NOT?: UserFavoriteScalarWhereInput | UserFavoriteScalarWhereInput[]
    id?: StringFilter<"UserFavorite"> | string
    userId?: StringFilter<"UserFavorite"> | string
    productId?: StringFilter<"UserFavorite"> | string
    createdAt?: DateTimeFilter<"UserFavorite"> | Date | string
  }

  export type ProductCreateWithoutProductVariationInput = {
    id?: string
    title: string
    status?: boolean
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryProducts: CategoryProductsCreateNestedOneWithoutProductInput
    user: UserCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductVariationInput = {
    id?: string
    title: string
    status?: boolean
    category_product_id: string
    seller_user_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductVariationInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductVariationInput, ProductUncheckedCreateWithoutProductVariationInput>
  }

  export type ReviewProductCreateWithoutProductVariationInput = {
    id?: string
    rating: Decimal | DecimalJsLike | number | string
    comment: string
    photos?: ReviewProductCreatephotosInput | string[]
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewProductInput
  }

  export type ReviewProductUncheckedCreateWithoutProductVariationInput = {
    id?: string
    rating: Decimal | DecimalJsLike | number | string
    comment: string
    photos?: ReviewProductCreatephotosInput | string[]
    country?: string | null
    reviewer_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewProductCreateOrConnectWithoutProductVariationInput = {
    where: ReviewProductWhereUniqueInput
    create: XOR<ReviewProductCreateWithoutProductVariationInput, ReviewProductUncheckedCreateWithoutProductVariationInput>
  }

  export type ReviewProductCreateManyProductVariationInputEnvelope = {
    data: ReviewProductCreateManyProductVariationInput | ReviewProductCreateManyProductVariationInput[]
    skipDuplicates?: boolean
  }

  export type productVariationImagesCreateWithoutProductVariationInput = {
    id?: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type productVariationImagesUncheckedCreateWithoutProductVariationInput = {
    id?: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type productVariationImagesCreateOrConnectWithoutProductVariationInput = {
    where: productVariationImagesWhereUniqueInput
    create: XOR<productVariationImagesCreateWithoutProductVariationInput, productVariationImagesUncheckedCreateWithoutProductVariationInput>
  }

  export type productVariationImagesCreateManyProductVariationInputEnvelope = {
    data: productVariationImagesCreateManyProductVariationInput | productVariationImagesCreateManyProductVariationInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutProductVariationInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutProductVariationInput = {
    id?: string
    quantity: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutProductVariationInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductVariationInput, CartItemUncheckedCreateWithoutProductVariationInput>
  }

  export type CartItemCreateManyProductVariationInputEnvelope = {
    data: CartItemCreateManyProductVariationInput | CartItemCreateManyProductVariationInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutProductVariationInput = {
    update: XOR<ProductUpdateWithoutProductVariationInput, ProductUncheckedUpdateWithoutProductVariationInput>
    create: XOR<ProductCreateWithoutProductVariationInput, ProductUncheckedCreateWithoutProductVariationInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductVariationInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductVariationInput, ProductUncheckedUpdateWithoutProductVariationInput>
  }

  export type ProductUpdateWithoutProductVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryProducts?: CategoryProductsUpdateOneRequiredWithoutProductNestedInput
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    category_product_id?: StringFieldUpdateOperationsInput | string
    seller_user_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ReviewProductUpsertWithWhereUniqueWithoutProductVariationInput = {
    where: ReviewProductWhereUniqueInput
    update: XOR<ReviewProductUpdateWithoutProductVariationInput, ReviewProductUncheckedUpdateWithoutProductVariationInput>
    create: XOR<ReviewProductCreateWithoutProductVariationInput, ReviewProductUncheckedCreateWithoutProductVariationInput>
  }

  export type ReviewProductUpdateWithWhereUniqueWithoutProductVariationInput = {
    where: ReviewProductWhereUniqueInput
    data: XOR<ReviewProductUpdateWithoutProductVariationInput, ReviewProductUncheckedUpdateWithoutProductVariationInput>
  }

  export type ReviewProductUpdateManyWithWhereWithoutProductVariationInput = {
    where: ReviewProductScalarWhereInput
    data: XOR<ReviewProductUpdateManyMutationInput, ReviewProductUncheckedUpdateManyWithoutProductVariationInput>
  }

  export type ReviewProductScalarWhereInput = {
    AND?: ReviewProductScalarWhereInput | ReviewProductScalarWhereInput[]
    OR?: ReviewProductScalarWhereInput[]
    NOT?: ReviewProductScalarWhereInput | ReviewProductScalarWhereInput[]
    id?: StringFilter<"ReviewProduct"> | string
    rating?: DecimalFilter<"ReviewProduct"> | Decimal | DecimalJsLike | number | string
    comment?: StringFilter<"ReviewProduct"> | string
    photos?: StringNullableListFilter<"ReviewProduct">
    country?: StringNullableFilter<"ReviewProduct"> | string | null
    product_variation_id?: StringFilter<"ReviewProduct"> | string
    reviewer_id?: StringFilter<"ReviewProduct"> | string
    createdAt?: DateTimeFilter<"ReviewProduct"> | Date | string
    updatedAt?: DateTimeFilter<"ReviewProduct"> | Date | string
  }

  export type productVariationImagesUpsertWithWhereUniqueWithoutProductVariationInput = {
    where: productVariationImagesWhereUniqueInput
    update: XOR<productVariationImagesUpdateWithoutProductVariationInput, productVariationImagesUncheckedUpdateWithoutProductVariationInput>
    create: XOR<productVariationImagesCreateWithoutProductVariationInput, productVariationImagesUncheckedCreateWithoutProductVariationInput>
  }

  export type productVariationImagesUpdateWithWhereUniqueWithoutProductVariationInput = {
    where: productVariationImagesWhereUniqueInput
    data: XOR<productVariationImagesUpdateWithoutProductVariationInput, productVariationImagesUncheckedUpdateWithoutProductVariationInput>
  }

  export type productVariationImagesUpdateManyWithWhereWithoutProductVariationInput = {
    where: productVariationImagesScalarWhereInput
    data: XOR<productVariationImagesUpdateManyMutationInput, productVariationImagesUncheckedUpdateManyWithoutProductVariationInput>
  }

  export type productVariationImagesScalarWhereInput = {
    AND?: productVariationImagesScalarWhereInput | productVariationImagesScalarWhereInput[]
    OR?: productVariationImagesScalarWhereInput[]
    NOT?: productVariationImagesScalarWhereInput | productVariationImagesScalarWhereInput[]
    id?: StringFilter<"productVariationImages"> | string
    link?: StringFilter<"productVariationImages"> | string
    product_variation_id?: StringFilter<"productVariationImages"> | string
    createdAt?: DateTimeFilter<"productVariationImages"> | Date | string
    updatedAt?: DateTimeFilter<"productVariationImages"> | Date | string
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductVariationInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductVariationInput, CartItemUncheckedUpdateWithoutProductVariationInput>
    create: XOR<CartItemCreateWithoutProductVariationInput, CartItemUncheckedCreateWithoutProductVariationInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductVariationInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductVariationInput, CartItemUncheckedUpdateWithoutProductVariationInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductVariationInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductVariationInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: StringFilter<"CartItem"> | string
    quantity?: IntFilter<"CartItem"> | number
    userId?: StringFilter<"CartItem"> | string
    productVariationId?: StringFilter<"CartItem"> | string
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
  }

  export type ProductVariationCreateWithoutProductVariationImagesInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductVariationInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutProductVariationInput
    CartItem?: CartItemCreateNestedManyWithoutProductVariationInput
  }

  export type ProductVariationUncheckedCreateWithoutProductVariationImagesInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    product_id: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutProductVariationInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutProductVariationInput
  }

  export type ProductVariationCreateOrConnectWithoutProductVariationImagesInput = {
    where: ProductVariationWhereUniqueInput
    create: XOR<ProductVariationCreateWithoutProductVariationImagesInput, ProductVariationUncheckedCreateWithoutProductVariationImagesInput>
  }

  export type ProductVariationUpsertWithoutProductVariationImagesInput = {
    update: XOR<ProductVariationUpdateWithoutProductVariationImagesInput, ProductVariationUncheckedUpdateWithoutProductVariationImagesInput>
    create: XOR<ProductVariationCreateWithoutProductVariationImagesInput, ProductVariationUncheckedCreateWithoutProductVariationImagesInput>
    where?: ProductVariationWhereInput
  }

  export type ProductVariationUpdateToOneWithWhereWithoutProductVariationImagesInput = {
    where?: ProductVariationWhereInput
    data: XOR<ProductVariationUpdateWithoutProductVariationImagesInput, ProductVariationUncheckedUpdateWithoutProductVariationImagesInput>
  }

  export type ProductVariationUpdateWithoutProductVariationImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductVariationNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutProductVariationNestedInput
    CartItem?: CartItemUpdateManyWithoutProductVariationNestedInput
  }

  export type ProductVariationUncheckedUpdateWithoutProductVariationImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutProductVariationNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutProductVariationNestedInput
  }

  export type ProductVariationCreateWithoutReviewProductInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductVariationInput
    productVariationImages?: productVariationImagesCreateNestedManyWithoutProductVariationInput
    CartItem?: CartItemCreateNestedManyWithoutProductVariationInput
  }

  export type ProductVariationUncheckedCreateWithoutReviewProductInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    product_id: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariationImages?: productVariationImagesUncheckedCreateNestedManyWithoutProductVariationInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutProductVariationInput
  }

  export type ProductVariationCreateOrConnectWithoutReviewProductInput = {
    where: ProductVariationWhereUniqueInput
    create: XOR<ProductVariationCreateWithoutReviewProductInput, ProductVariationUncheckedCreateWithoutReviewProductInput>
  }

  export type UserCreateWithoutReviewProductInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataCreateNestedOneWithoutUserInput
    Address?: AddressCreateNestedManyWithoutUserInput
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewProductInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataUncheckedCreateNestedOneWithoutUserInput
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryUncheckedCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewProductInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewProductInput, UserUncheckedCreateWithoutReviewProductInput>
  }

  export type ProductVariationUpsertWithoutReviewProductInput = {
    update: XOR<ProductVariationUpdateWithoutReviewProductInput, ProductVariationUncheckedUpdateWithoutReviewProductInput>
    create: XOR<ProductVariationCreateWithoutReviewProductInput, ProductVariationUncheckedCreateWithoutReviewProductInput>
    where?: ProductVariationWhereInput
  }

  export type ProductVariationUpdateToOneWithWhereWithoutReviewProductInput = {
    where?: ProductVariationWhereInput
    data: XOR<ProductVariationUpdateWithoutReviewProductInput, ProductVariationUncheckedUpdateWithoutReviewProductInput>
  }

  export type ProductVariationUpdateWithoutReviewProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductVariationNestedInput
    productVariationImages?: productVariationImagesUpdateManyWithoutProductVariationNestedInput
    CartItem?: CartItemUpdateManyWithoutProductVariationNestedInput
  }

  export type ProductVariationUncheckedUpdateWithoutReviewProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariationImages?: productVariationImagesUncheckedUpdateManyWithoutProductVariationNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutProductVariationNestedInput
  }

  export type UserUpsertWithoutReviewProductInput = {
    update: XOR<UserUpdateWithoutReviewProductInput, UserUncheckedUpdateWithoutReviewProductInput>
    create: XOR<UserCreateWithoutReviewProductInput, UserUncheckedCreateWithoutReviewProductInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewProductInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewProductInput, UserUncheckedUpdateWithoutReviewProductInput>
  }

  export type UserUpdateWithoutReviewProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUpdateOneWithoutUserNestedInput
    Address?: AddressUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUncheckedUpdateOneWithoutUserNestedInput
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataCreateNestedOneWithoutUserInput
    Address?: AddressCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutUserInput
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataUncheckedCreateNestedOneWithoutUserInput
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutUserInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryUncheckedCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserCreateManyProfileInputEnvelope = {
    data: UserCreateManyProfileInput | UserCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutProfileInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProfileInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateManyWithWhereWithoutProfileInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProfileInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    profileId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateWithoutUserInput = {
    id?: string
    title: string
    status?: boolean
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryProducts: CategoryProductsCreateNestedOneWithoutProductInput
    brand: BrandCreateNestedOneWithoutProductInput
    ProductVariation?: ProductVariationCreateNestedManyWithoutProductInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    status?: boolean
    category_product_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductVariation?: ProductVariationUncheckedCreateNestedManyWithoutProductInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PersonalDataCreateWithoutUserInput = {
    id?: string
    cpf: string
    birthDate: Date | string
    phone: string
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalDataUncheckedCreateWithoutUserInput = {
    id?: string
    cpf: string
    birthDate: Date | string
    phone: string
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonalDataCreateOrConnectWithoutUserInput = {
    where: PersonalDataWhereUniqueInput
    create: XOR<PersonalDataCreateWithoutUserInput, PersonalDataUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateWithoutUserInput = {
    id?: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewProductCreateWithoutUserInput = {
    id?: string
    rating: Decimal | DecimalJsLike | number | string
    comment: string
    photos?: ReviewProductCreatephotosInput | string[]
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariation: ProductVariationCreateNestedOneWithoutReviewProductInput
  }

  export type ReviewProductUncheckedCreateWithoutUserInput = {
    id?: string
    rating: Decimal | DecimalJsLike | number | string
    comment: string
    photos?: ReviewProductCreatephotosInput | string[]
    country?: string | null
    product_variation_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewProductCreateOrConnectWithoutUserInput = {
    where: ReviewProductWhereUniqueInput
    create: XOR<ReviewProductCreateWithoutUserInput, ReviewProductUncheckedCreateWithoutUserInput>
  }

  export type ReviewProductCreateManyUserInputEnvelope = {
    data: ReviewProductCreateManyUserInput | ReviewProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutUserInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariation: ProductVariationCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutUserInput = {
    id?: string
    quantity: number
    productVariationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateOrConnectWithoutUserInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput>
  }

  export type CartItemCreateManyUserInputEnvelope = {
    data: CartItemCreateManyUserInput | CartItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutUserFavoriteInput
  }

  export type UserFavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    createdAt?: Date | string
  }

  export type UserFavoriteCreateOrConnectWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    create: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteCreateManyUserInputEnvelope = {
    data: UserFavoriteCreateManyUserInput | UserFavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSearchHistoryCreateWithoutUserInput = {
    id?: string
    term: string
    searchedAt?: Date | string
  }

  export type UserSearchHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    term: string
    searchedAt?: Date | string
  }

  export type UserSearchHistoryCreateOrConnectWithoutUserInput = {
    where: UserSearchHistoryWhereUniqueInput
    create: XOR<UserSearchHistoryCreateWithoutUserInput, UserSearchHistoryUncheckedCreateWithoutUserInput>
  }

  export type UserSearchHistoryCreateManyUserInputEnvelope = {
    data: UserSearchHistoryCreateManyUserInput | UserSearchHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProductClickCreateWithoutUserInput = {
    id?: string
    productId: string
    sourcePage: string
    clickedAt?: Date | string
  }

  export type UserProductClickUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    sourcePage: string
    clickedAt?: Date | string
  }

  export type UserProductClickCreateOrConnectWithoutUserInput = {
    where: UserProductClickWhereUniqueInput
    create: XOR<UserProductClickCreateWithoutUserInput, UserProductClickUncheckedCreateWithoutUserInput>
  }

  export type UserProductClickCreateManyUserInputEnvelope = {
    data: UserProductClickCreateManyUserInput | UserProductClickCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>
  }

  export type PersonalDataUpsertWithoutUserInput = {
    update: XOR<PersonalDataUpdateWithoutUserInput, PersonalDataUncheckedUpdateWithoutUserInput>
    create: XOR<PersonalDataCreateWithoutUserInput, PersonalDataUncheckedCreateWithoutUserInput>
    where?: PersonalDataWhereInput
  }

  export type PersonalDataUpdateToOneWithWhereWithoutUserInput = {
    where?: PersonalDataWhereInput
    data: XOR<PersonalDataUpdateWithoutUserInput, PersonalDataUncheckedUpdateWithoutUserInput>
  }

  export type PersonalDataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalDataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: StringFilter<"Address"> | string
    cep?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    complement?: StringNullableFilter<"Address"> | string | null
    isDefault?: BoolFilter<"Address"> | boolean
    userId?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
  }

  export type ReviewProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewProductWhereUniqueInput
    update: XOR<ReviewProductUpdateWithoutUserInput, ReviewProductUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewProductCreateWithoutUserInput, ReviewProductUncheckedCreateWithoutUserInput>
  }

  export type ReviewProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewProductWhereUniqueInput
    data: XOR<ReviewProductUpdateWithoutUserInput, ReviewProductUncheckedUpdateWithoutUserInput>
  }

  export type ReviewProductUpdateManyWithWhereWithoutUserInput = {
    where: ReviewProductScalarWhereInput
    data: XOR<ReviewProductUpdateManyMutationInput, ReviewProductUncheckedUpdateManyWithoutUserInput>
  }

  export type CartItemUpsertWithWhereUniqueWithoutUserInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutUserInput, CartItemUncheckedUpdateWithoutUserInput>
    create: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutUserInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutUserInput, CartItemUncheckedUpdateWithoutUserInput>
  }

  export type CartItemUpdateManyWithWhereWithoutUserInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    update: XOR<UserFavoriteUpdateWithoutUserInput, UserFavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<UserFavoriteCreateWithoutUserInput, UserFavoriteUncheckedCreateWithoutUserInput>
  }

  export type UserFavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFavoriteWhereUniqueInput
    data: XOR<UserFavoriteUpdateWithoutUserInput, UserFavoriteUncheckedUpdateWithoutUserInput>
  }

  export type UserFavoriteUpdateManyWithWhereWithoutUserInput = {
    where: UserFavoriteScalarWhereInput
    data: XOR<UserFavoriteUpdateManyMutationInput, UserFavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSearchHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSearchHistoryWhereUniqueInput
    update: XOR<UserSearchHistoryUpdateWithoutUserInput, UserSearchHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserSearchHistoryCreateWithoutUserInput, UserSearchHistoryUncheckedCreateWithoutUserInput>
  }

  export type UserSearchHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSearchHistoryWhereUniqueInput
    data: XOR<UserSearchHistoryUpdateWithoutUserInput, UserSearchHistoryUncheckedUpdateWithoutUserInput>
  }

  export type UserSearchHistoryUpdateManyWithWhereWithoutUserInput = {
    where: UserSearchHistoryScalarWhereInput
    data: XOR<UserSearchHistoryUpdateManyMutationInput, UserSearchHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSearchHistoryScalarWhereInput = {
    AND?: UserSearchHistoryScalarWhereInput | UserSearchHistoryScalarWhereInput[]
    OR?: UserSearchHistoryScalarWhereInput[]
    NOT?: UserSearchHistoryScalarWhereInput | UserSearchHistoryScalarWhereInput[]
    id?: StringFilter<"UserSearchHistory"> | string
    userId?: StringFilter<"UserSearchHistory"> | string
    term?: StringFilter<"UserSearchHistory"> | string
    searchedAt?: DateTimeFilter<"UserSearchHistory"> | Date | string
  }

  export type UserProductClickUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProductClickWhereUniqueInput
    update: XOR<UserProductClickUpdateWithoutUserInput, UserProductClickUncheckedUpdateWithoutUserInput>
    create: XOR<UserProductClickCreateWithoutUserInput, UserProductClickUncheckedCreateWithoutUserInput>
  }

  export type UserProductClickUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProductClickWhereUniqueInput
    data: XOR<UserProductClickUpdateWithoutUserInput, UserProductClickUncheckedUpdateWithoutUserInput>
  }

  export type UserProductClickUpdateManyWithWhereWithoutUserInput = {
    where: UserProductClickScalarWhereInput
    data: XOR<UserProductClickUpdateManyMutationInput, UserProductClickUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProductClickScalarWhereInput = {
    AND?: UserProductClickScalarWhereInput | UserProductClickScalarWhereInput[]
    OR?: UserProductClickScalarWhereInput[]
    NOT?: UserProductClickScalarWhereInput | UserProductClickScalarWhereInput[]
    id?: StringFilter<"UserProductClick"> | string
    userId?: StringFilter<"UserProductClick"> | string
    productId?: StringFilter<"UserProductClick"> | string
    sourcePage?: StringFilter<"UserProductClick"> | string
    clickedAt?: DateTimeFilter<"UserProductClick"> | Date | string
  }

  export type UserCreateWithoutPersonalDataInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    Address?: AddressCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutUserInput
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPersonalDataInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    Address?: AddressUncheckedCreateNestedManyWithoutUserInput
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutUserInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryUncheckedCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPersonalDataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonalDataInput, UserUncheckedCreateWithoutPersonalDataInput>
  }

  export type UserUpsertWithoutPersonalDataInput = {
    update: XOR<UserUpdateWithoutPersonalDataInput, UserUncheckedUpdateWithoutPersonalDataInput>
    create: XOR<UserCreateWithoutPersonalDataInput, UserUncheckedCreateWithoutPersonalDataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonalDataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonalDataInput, UserUncheckedUpdateWithoutPersonalDataInput>
  }

  export type UserUpdateWithoutPersonalDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    Address?: AddressUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonalDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAddressInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutUserInput
    Product?: ProductCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataCreateNestedOneWithoutUserInput
    ReviewProduct?: ReviewProductCreateNestedManyWithoutUserInput
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Product?: ProductUncheckedCreateNestedManyWithoutUserInput
    PersonalData?: PersonalDataUncheckedCreateNestedOneWithoutUserInput
    ReviewProduct?: ReviewProductUncheckedCreateNestedManyWithoutUserInput
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    UserFavorite?: UserFavoriteUncheckedCreateNestedManyWithoutUserInput
    UserSearchHistory?: UserSearchHistoryUncheckedCreateNestedManyWithoutUserInput
    UserProductClick?: UserProductClickUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type UserUpsertWithoutAddressInput = {
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
    Product?: ProductUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUpdateOneWithoutUserNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUncheckedUpdateOneWithoutUserNestedInput
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductCreateManyCategoryProductsInput = {
    id?: string
    title: string
    status?: boolean
    seller_user_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    ProductVariation?: ProductVariationUpdateManyWithoutProductNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    seller_user_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductVariation?: ProductVariationUncheckedUpdateManyWithoutProductNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    seller_user_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyBrandInput = {
    id?: string
    title: string
    status?: boolean
    category_product_id: string
    seller_user_id: string
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryProducts?: CategoryProductsUpdateOneRequiredWithoutProductNestedInput
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    ProductVariation?: ProductVariationUpdateManyWithoutProductNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    category_product_id?: StringFieldUpdateOperationsInput | string
    seller_user_id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductVariation?: ProductVariationUncheckedUpdateManyWithoutProductNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    category_product_id?: StringFieldUpdateOperationsInput | string
    seller_user_id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariationCreateManyProductInput = {
    id?: string
    title: string
    discountPercentage: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    description: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFavoriteCreateManyProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ProductVariationUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewProduct?: ReviewProductUpdateManyWithoutProductVariationNestedInput
    productVariationImages?: productVariationImagesUpdateManyWithoutProductVariationNestedInput
    CartItem?: CartItemUpdateManyWithoutProductVariationNestedInput
  }

  export type ProductVariationUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutProductVariationNestedInput
    productVariationImages?: productVariationImagesUncheckedUpdateManyWithoutProductVariationNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutProductVariationNestedInput
  }

  export type ProductVariationUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserFavoriteNestedInput
  }

  export type UserFavoriteUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewProductCreateManyProductVariationInput = {
    id?: string
    rating: Decimal | DecimalJsLike | number | string
    comment: string
    photos?: ReviewProductCreatephotosInput | string[]
    country?: string | null
    reviewer_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type productVariationImagesCreateManyProductVariationInput = {
    id?: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateManyProductVariationInput = {
    id?: string
    quantity: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewProductUpdateWithoutProductVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: StringFieldUpdateOperationsInput | string
    photos?: ReviewProductUpdatephotosInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewProductNestedInput
  }

  export type ReviewProductUncheckedUpdateWithoutProductVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: StringFieldUpdateOperationsInput | string
    photos?: ReviewProductUpdatephotosInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reviewer_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewProductUncheckedUpdateManyWithoutProductVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: StringFieldUpdateOperationsInput | string
    photos?: ReviewProductUpdatephotosInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    reviewer_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productVariationImagesUpdateWithoutProductVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productVariationImagesUncheckedUpdateWithoutProductVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productVariationImagesUncheckedUpdateManyWithoutProductVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUpdateWithoutProductVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutProductVariationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyProfileInput = {
    id?: string
    name: string
    lastName: string
    email: string
    password: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUpdateOneWithoutUserNestedInput
    Address?: AddressUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    PersonalData?: PersonalDataUncheckedUpdateOneWithoutUserNestedInput
    Address?: AddressUncheckedUpdateManyWithoutUserNestedInput
    ReviewProduct?: ReviewProductUncheckedUpdateManyWithoutUserNestedInput
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutUserNestedInput
    UserSearchHistory?: UserSearchHistoryUncheckedUpdateManyWithoutUserNestedInput
    UserProductClick?: UserProductClickUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyUserInput = {
    id?: string
    title: string
    status?: boolean
    category_product_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    aiSummary?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateManyUserInput = {
    id?: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewProductCreateManyUserInput = {
    id?: string
    rating: Decimal | DecimalJsLike | number | string
    comment: string
    photos?: ReviewProductCreatephotosInput | string[]
    country?: string | null
    product_variation_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartItemCreateManyUserInput = {
    id?: string
    quantity: number
    productVariationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFavoriteCreateManyUserInput = {
    id?: string
    productId: string
    createdAt?: Date | string
  }

  export type UserSearchHistoryCreateManyUserInput = {
    id?: string
    term: string
    searchedAt?: Date | string
  }

  export type UserProductClickCreateManyUserInput = {
    id?: string
    productId: string
    sourcePage: string
    clickedAt?: Date | string
  }

  export type ProductUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryProducts?: CategoryProductsUpdateOneRequiredWithoutProductNestedInput
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    ProductVariation?: ProductVariationUpdateManyWithoutProductNestedInput
    UserFavorite?: UserFavoriteUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    category_product_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductVariation?: ProductVariationUncheckedUpdateManyWithoutProductNestedInput
    UserFavorite?: UserFavoriteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    category_product_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    warrantyInformation?: StringFieldUpdateOperationsInput | string
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewProductUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: StringFieldUpdateOperationsInput | string
    photos?: ReviewProductUpdatephotosInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariation?: ProductVariationUpdateOneRequiredWithoutReviewProductNestedInput
  }

  export type ReviewProductUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: StringFieldUpdateOperationsInput | string
    photos?: ReviewProductUpdatephotosInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    product_variation_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewProductUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: StringFieldUpdateOperationsInput | string
    photos?: ReviewProductUpdatephotosInput | string[]
    country?: NullableStringFieldUpdateOperationsInput | string | null
    product_variation_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariation?: ProductVariationUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productVariationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productVariationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutUserFavoriteNestedInput
  }

  export type UserFavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSearchHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    term?: StringFieldUpdateOperationsInput | string
    searchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductClickUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sourcePage?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductClickUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sourcePage?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductClickUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sourcePage?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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