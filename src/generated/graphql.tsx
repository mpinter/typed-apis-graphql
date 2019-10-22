import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  UUID: any,
};

/** Personal account */
export type Account = {
   __typename?: 'Account',
  account_limit?: Maybe<Amount>,
  available_balance: Amount,
  balance: Amount,
  bic: Scalars['String'],
  bookings: Array<Booking>,
  cards: Array<Card>,
  closure_reasons: Array<Scalars['String']>,
  iban: Scalars['String'],
  id: Scalars['ID'],
  locking_reasons: Array<Scalars['String']>,
  locking_status: Scalars['String'],
  person_id: Scalars['String'],
  reservations: Array<Reservation>,
  sepa_credit_transfer?: Maybe<SepaCreditTransfer>,
  standing_order?: Maybe<StandingOrder>,
  standing_orders: Array<StandingOrder>,
  status: Scalars['String'],
  type: Scalars['String'],
};


/** Personal account */
export type AccountBookingsArgs = {
  page_number?: Maybe<Scalars['Int']>,
  page_size?: Maybe<Scalars['Int']>,
  search?: Maybe<Scalars['String']>
};


/** Personal account */
export type AccountSepa_Credit_TransferArgs = {
  id?: Maybe<Scalars['String']>
};


/** Personal account */
export type AccountStanding_OrderArgs = {
  id?: Maybe<Scalars['String']>
};

export type Address = {
   __typename?: 'Address',
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  line_1?: Maybe<Scalars['String']>,
  line_2?: Maybe<Scalars['String']>,
  postal_code?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
};

export type Amount = {
   __typename?: 'Amount',
  currency: Scalars['String'],
  unit: Scalars['String'],
  value: Scalars['Int'],
};

/** 
 * Bookings are representations of the movement of funds on the account. When payment instructions are executed or a
 *     payment is received by solarisBank, a booking is posted on the account. The id of the transaction is included in the
 *     transaction_id. Bookings contain important information about the payment instruction and affect the balance calculation.
 *     https://docs.solarisbank.de/core/api/v1/#bookings
 **/
export type Booking = {
   __typename?: 'Booking',
  amount: Amount,
  booking_date: Scalars['String'],
  booking_type: Scalars['String'],
  creation_date: Scalars['String'],
  creditor_identifier?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  end_to_end_id?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  is_goal?: Maybe<Scalars['Boolean']>,
  mandate_reference?: Maybe<Scalars['String']>,
  meta_info?: Maybe<Scalars['String']>,
  recipient_bic?: Maybe<Scalars['String']>,
  recipient_iban: Scalars['String'],
  recipient_name: Scalars['String'],
  reconciliation_id?: Maybe<Scalars['String']>,
  recorded_at: Scalars['String'],
  return_transaction_id?: Maybe<Scalars['String']>,
  sender_bic?: Maybe<Scalars['String']>,
  sender_iban?: Maybe<Scalars['String']>,
  sender_name: Scalars['String'],
  sepa_charges?: Maybe<Amount>,
  sepa_return_code?: Maybe<Scalars['String']>,
  sepa_return_reason?: Maybe<Scalars['String']>,
  sepa_return_reason_definition?: Maybe<Scalars['String']>,
  transaction_id?: Maybe<Scalars['String']>,
  valuta_date: Scalars['String'],
};

/** Card */
export type Card = {
   __typename?: 'Card',
  account_id: Scalars['ID'],
  business_id?: Maybe<Scalars['ID']>,
  card_not_present_limits?: Maybe<CardLimits>,
  card_present_limits?: Maybe<CardLimits>,
  expiration_date?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  person_id: Scalars['ID'],
  representation?: Maybe<Representation>,
  status: Scalars['String'],
  type: Scalars['String'],
};

export type CardLimit = {
   __typename?: 'CardLimit',
  max_amount_cents?: Maybe<Scalars['Int']>,
  max_transactions?: Maybe<Scalars['Int']>,
};

export type CardLimits = {
   __typename?: 'CardLimits',
  daily: CardLimit,
  monthly: CardLimit,
};

/** 
 * A separate authorization flow which consists in providing a unique id and url in the response payload of
 *     a data change request. This URL must be used to /authorize and /confirm the data change.
 **/
export type ChangeRequest = {
   __typename?: 'ChangeRequest',
  id: Scalars['ID'],
  status: Scalars['String'],
  updated_at: Scalars['String'],
  url: Scalars['String'],
};

export type Contact = {
   __typename?: 'Contact',
  iban: Scalars['String'],
  id: Scalars['UUID'],
  name: Scalars['String'],
};

export enum EmploymentStatus {
  Employed = 'EMPLOYED',
  Unemployed = 'UNEMPLOYED',
  PublicSectorEmployee = 'PUBLIC_SECTOR_EMPLOYEE',
  ProfessionalSoldier = 'PROFESSIONAL_SOLDIER',
  Freelancer = 'FREELANCER',
  Housework = 'HOUSEWORK',
  Apprentice = 'APPRENTICE',
  Management = 'MANAGEMENT',
  Retired = 'RETIRED',
  Student = 'STUDENT',
  SelfEmployed = 'SELF_EMPLOYED',
  MilitaryOrCommunityService = 'MILITARY_OR_COMMUNITY_SERVICE'
}

export type Goal = {
   __typename?: 'Goal',
  account: Account,
  active: Scalars['Boolean'],
  id: Scalars['UUID'],
  name: Scalars['String'],
  personality: Scalars['String'],
  recurrent_saving?: Maybe<StandingOrder>,
  target_amount: Scalars['Int'],
};

/** Identification process of a person */
export type Identification = {
   __typename?: 'Identification',
  completed_at?: Maybe<Scalars['String']>,
  estimated_waiting_time?: Maybe<Scalars['String']>,
  failure_reason?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  method: Scalars['String'],
  proof_of_address_issued_at?: Maybe<Scalars['String']>,
  proof_of_address_type?: Maybe<Scalars['String']>,
  reference?: Maybe<Scalars['String']>,
  status: Scalars['String'],
  url?: Maybe<Scalars['String']>,
};

/** Root of all mutations. */
export type MutationRoot = {
   __typename?: 'MutationRoot',
  activateCard: Card,
  authorizeChangeRequest: ChangeRequest,
  authorizeCreditTransfer: SepaCreditTransfer,
  blockCard: Card,
  cancelStandingOrder: ChangeRequest,
  changeCardLimits: CardLimits,
  changeCardPin: ChangeRequest,
  changePassword?: Maybe<Scalars['Boolean']>,
  checkPassword: Scalars['Boolean'],
  checkVerificationCode?: Maybe<VerificationCodeResult>,
  closeCard: Card,
  closeGoal?: Maybe<Scalars['Boolean']>,
  confirmChangeRequest: ChangeRequest,
  confirmCreditTransfer: SepaCreditTransfer,
  createAccountForPerson: Account,
  createCard: Card,
  createContact: Contact,
  createCreditTransfer: SepaCreditTransfer,
  createGoal?: Maybe<Goal>,
  createIdentification: Identification,
  createPerson: Person,
  createPrimaryAccount?: Maybe<Account>,
  createStandingOrder: ChangeRequest,
  createTaxIdentification: TaxIdentification,
  createUser: Scalars['String'],
  deleteContact?: Maybe<Scalars['Boolean']>,
  editContact?: Maybe<Scalars['Boolean']>,
  loginUser: Scalars['String'],
  reportTransaction?: Maybe<Scalars['Boolean']>,
  requestIdentification: Identification,
  resetPassword?: Maybe<Scalars['Boolean']>,
  resetPasswordEmail?: Maybe<Scalars['Boolean']>,
  unblockCard: Card,
  updateFcmToken?: Maybe<Scalars['Boolean']>,
  updateGoal?: Maybe<Scalars['Boolean']>,
  updateStandingOrder: ChangeRequest,
};


/** Root of all mutations. */
export type MutationRootActivateCardArgs = {
  card_id?: Maybe<Scalars['String']>,
  verification_token?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootAuthorizeChangeRequestArgs = {
  change_request_id?: Maybe<Scalars['String']>,
  delivery_method?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootAuthorizeCreditTransferArgs = {
  account_id?: Maybe<Scalars['String']>,
  delivery_method?: Maybe<Scalars['String']>,
  transfer_id?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootBlockCardArgs = {
  card_id?: Maybe<Scalars['ID']>
};


/** Root of all mutations. */
export type MutationRootCancelStandingOrderArgs = {
  account_id: Scalars['ID'],
  id: Scalars['ID']
};


/** Root of all mutations. */
export type MutationRootChangeCardLimitsArgs = {
  card_id?: Maybe<Scalars['String']>,
  card_presence?: Maybe<Scalars['String']>,
  max_daily_amount_cents?: Maybe<Scalars['Int']>,
  max_daily_transactions?: Maybe<Scalars['Int']>,
  max_monthly_amount_cents?: Maybe<Scalars['Int']>,
  max_monthly_transactions?: Maybe<Scalars['Int']>
};


/** Root of all mutations. */
export type MutationRootChangeCardPinArgs = {
  card_id?: Maybe<Scalars['String']>,
  pin?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootChangePasswordArgs = {
  new_password: Scalars['String'],
  old_password: Scalars['String']
};


/** Root of all mutations. */
export type MutationRootCheckPasswordArgs = {
  password: Scalars['String']
};


/** Root of all mutations. */
export type MutationRootCheckVerificationCodeArgs = {
  code: Scalars['String'],
  email: Scalars['String']
};


/** Root of all mutations. */
export type MutationRootCloseCardArgs = {
  card_id?: Maybe<Scalars['ID']>
};


/** Root of all mutations. */
export type MutationRootCloseGoalArgs = {
  id: Scalars['UUID']
};


/** Root of all mutations. */
export type MutationRootConfirmChangeRequestArgs = {
  authorization_token?: Maybe<Scalars['String']>,
  change_request_id?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootConfirmCreditTransferArgs = {
  account_id?: Maybe<Scalars['String']>,
  authorization_token?: Maybe<Scalars['String']>,
  transfer_id?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootCreateCardArgs = {
  account_id?: Maybe<Scalars['String']>,
  line_1?: Maybe<Scalars['String']>,
  pin?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootCreateContactArgs = {
  iban: Scalars['String'],
  name: Scalars['String']
};


/** Root of all mutations. */
export type MutationRootCreateCreditTransferArgs = {
  account_id?: Maybe<Scalars['String']>,
  amount?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  iban?: Maybe<Scalars['String']>,
  recipient_name?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootCreateGoalArgs = {
  name: Scalars['String'],
  personality: Scalars['String'],
  target_amount: Scalars['Int']
};


/** Root of all mutations. */
export type MutationRootCreatePersonArgs = {
  birth_date?: Maybe<Scalars['String']>,
  employment_status?: Maybe<EmploymentStatus>,
  fatca_relevant?: Maybe<Scalars['Boolean']>,
  first_name?: Maybe<Scalars['String']>,
  last_name?: Maybe<Scalars['String']>,
  terms_conditions_signed_at?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootCreateStandingOrderArgs = {
  account_id: Scalars['ID'],
  amount: Scalars['Int'],
  description?: Maybe<Scalars['String']>,
  first_execution_date: Scalars['String'],
  iban: Scalars['String'],
  recipient_name: Scalars['String'],
  reoccurrence: StandingOrderReoccurrence
};


/** Root of all mutations. */
export type MutationRootCreateTaxIdentificationArgs = {
  country: Scalars['String'],
  reason_description?: Maybe<Scalars['String']>,
  reason_no_tin?: Maybe<Scalars['String']>,
  tin?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootCreateUserArgs = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootDeleteContactArgs = {
  id: Scalars['UUID']
};


/** Root of all mutations. */
export type MutationRootEditContactArgs = {
  iban?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
  name?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootLoginUserArgs = {
  email: Scalars['String'],
  fcm_token?: Maybe<Scalars['String']>,
  password: Scalars['String']
};


/** Root of all mutations. */
export type MutationRootReportTransactionArgs = {
  booking_id: Scalars['String'],
  note?: Maybe<Scalars['String']>,
  owner_iban: Scalars['String'],
  partner_iban?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootRequestIdentificationArgs = {
  identification_id?: Maybe<Scalars['String']>
};


/** Root of all mutations. */
export type MutationRootResetPasswordArgs = {
  code: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


/** Root of all mutations. */
export type MutationRootResetPasswordEmailArgs = {
  email: Scalars['String']
};


/** Root of all mutations. */
export type MutationRootUnblockCardArgs = {
  card_id?: Maybe<Scalars['ID']>
};


/** Root of all mutations. */
export type MutationRootUpdateFcmTokenArgs = {
  fcm_token: Scalars['String']
};


/** Root of all mutations. */
export type MutationRootUpdateGoalArgs = {
  id: Scalars['UUID'],
  name?: Maybe<Scalars['String']>,
  personality?: Maybe<Scalars['String']>,
  target_amount?: Maybe<Scalars['Int']>
};


/** Root of all mutations. */
export type MutationRootUpdateStandingOrderArgs = {
  account_id: Scalars['ID'],
  amount?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  reoccurrence?: Maybe<StandingOrderReoccurrence>
};

/** A (non-legal) entity from Solaris API */
export type Person = {
   __typename?: 'Person',
  account?: Maybe<Account>,
  accounts: Array<Account>,
  address: Address,
  birth_city?: Maybe<Scalars['String']>,
  birth_country?: Maybe<Scalars['String']>,
  birth_date?: Maybe<Scalars['String']>,
  birth_name?: Maybe<Scalars['String']>,
  business_purpose?: Maybe<Scalars['String']>,
  contact_address: Address,
  email?: Maybe<Scalars['String']>,
  employment_status?: Maybe<EmploymentStatus>,
  fatca_crs_confirmed_at?: Maybe<Scalars['String']>,
  fatca_relevant?: Maybe<Scalars['Boolean']>,
  first_name: Scalars['String'],
  flagged_by_compliance?: Maybe<Scalars['Boolean']>,
  goal?: Maybe<Goal>,
  goals: Array<Goal>,
  id: Scalars['ID'],
  identification?: Maybe<Identification>,
  identifications: Array<Identification>,
  industry?: Maybe<Scalars['String']>,
  industry_key?: Maybe<Scalars['String']>,
  job_title?: Maybe<Scalars['String']>,
  last_name: Scalars['String'],
  mobile_number?: Maybe<Scalars['String']>,
  nationality?: Maybe<Scalars['String']>,
  primary_account?: Maybe<Account>,
  salutation?: Maybe<Scalars['String']>,
  tax_identifications: Array<Maybe<TaxIdentification>>,
  tax_information?: Maybe<TaxInformation>,
  terms_conditions_signed_at?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


/** A (non-legal) entity from Solaris API */
export type PersonAccountArgs = {
  id?: Maybe<Scalars['String']>
};


/** A (non-legal) entity from Solaris API */
export type PersonGoalArgs = {
  id?: Maybe<Scalars['UUID']>
};


/** A (non-legal) entity from Solaris API */
export type PersonIdentificationArgs = {
  id?: Maybe<Scalars['String']>
};

/** Root of all queries. */
export type QueryRoot = {
   __typename?: 'QueryRoot',
  emailValid?: Maybe<Scalars['Boolean']>,
  person: Person,
  personByEmail?: Maybe<Person>,
  testNotification?: Maybe<Scalars['Boolean']>,
  user: User,
};


/** Root of all queries. */
export type QueryRootEmailValidArgs = {
  email?: Maybe<Scalars['String']>
};


/** Root of all queries. */
export type QueryRootPersonByEmailArgs = {
  email?: Maybe<Scalars['String']>
};


/** Root of all queries. */
export type QueryRootTestNotificationArgs = {
  body?: Maybe<Scalars['String']>,
  device_key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>
};

export type Representation = {
   __typename?: 'Representation',
  formatted_expiration_date?: Maybe<Scalars['String']>,
  line_1: Scalars['String'],
  masked_pan?: Maybe<Scalars['String']>,
};

/** 
 * A reservation is a temporary fund block applied to a specific account in order to restrict the usage of funds,
 *     reserved as a deposit for an operation which already happened or as a block for an operation that is waiting to
 *     happen. Reservations are taken into account in balance types which are related to the disposable funds on account.
 *     They are therefore taken into account in payment acceptance checks.
 *     https://docs.solarisbank.de/core/api/v1/#reservations
 **/
export type Reservation = {
   __typename?: 'Reservation',
  amount: Amount,
  description?: Maybe<Scalars['String']>,
  expired_at?: Maybe<Scalars['String']>,
  expires_at: Scalars['String'],
  id: Scalars['ID'],
  meta_info?: Maybe<Scalars['String']>,
  reference?: Maybe<Scalars['String']>,
  reservation_type: Scalars['String'],
  resolved_at?: Maybe<Scalars['String']>,
  status: Scalars['String'],
};

/** 
 * A Credit Transfer is the SEPA standard to push currency from a solarisBank account to a receiving account that is
 *    also part of the SEPA scheme. It is final the moment it reaches our servers and is accepted as a valid request.
 *    In other words, it is final once it has been successfully authorized (see Authorization). This applies to all
 *    transactions using SEPA Credit Transfers as an underlying mechanism, such as timed orders and standing orders.
 **/
export type SepaCreditTransfer = {
   __typename?: 'SepaCreditTransfer',
  amount?: Maybe<Amount>,
  batch_id?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['String']>,
  /** SEPA string, max 140 char */
  description?: Maybe<Scalars['String']>,
  /** SEPA string, max 35 char, no whitespace char. */
  end_to_end_id?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  recipient_bic?: Maybe<Scalars['String']>,
  recipient_iban: Scalars['String'],
  /** string, max 70 char */
  recipient_name: Scalars['String'],
  /** max 35 characters */
  reference: Scalars['String'],
  status?: Maybe<Scalars['String']>,
};

export type StandingOrder = {
   __typename?: 'StandingOrder',
  amount: Amount,
  description?: Maybe<Scalars['String']>,
  end_to_end_id?: Maybe<Scalars['String']>,
  executions?: Maybe<Array<Maybe<StandingOrderExecution>>>,
  first_execution_date: Scalars['String'],
  id: Scalars['ID'],
  is_goal?: Maybe<Scalars['Boolean']>,
  last_execution_date?: Maybe<Scalars['String']>,
  month_end_execution?: Maybe<Scalars['Boolean']>,
  next_occurrence?: Maybe<Scalars['String']>,
  partner_id?: Maybe<Scalars['String']>,
  recipient_bic?: Maybe<Scalars['String']>,
  recipient_iban: Scalars['String'],
  recipient_name: Scalars['String'],
  reference: Scalars['String'],
  reoccurrence?: Maybe<StandingOrderReoccurrence>,
  status: Scalars['String'],
};

export type StandingOrderExecution = {
   __typename?: 'StandingOrderExecution',
  amount: Amount,
  batch_id?: Maybe<Scalars['String']>,
  created_at: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  end_to_end_id?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  recipient_bic?: Maybe<Scalars['String']>,
  recipient_iban: Scalars['String'],
  recipient_name: Scalars['String'],
  reference: Scalars['String'],
  status: Scalars['String'],
};

export enum StandingOrderReoccurrence {
  Monthly = 'MONTHLY',
  Quarterly = 'QUARTERLY',
  EverySixMonths = 'EVERY_SIX_MONTHS',
  Annually = 'ANNUALLY'
}

/** Root of all subscriptions. */
export type SubscriptionRoot = {
   __typename?: 'SubscriptionRoot',
  bookings: Booking,
};


/** Root of all subscriptions. */
export type SubscriptionRootBookingsArgs = {
  account_id: Scalars['String']
};

export type TaxIdentification = {
   __typename?: 'TaxIdentification',
  country: Scalars['String'],
  id: Scalars['String'],
  reason_description?: Maybe<Scalars['String']>,
  reason_no_tin?: Maybe<Scalars['String']>,
  tin?: Maybe<Scalars['String']>,
};

export type TaxInformation = {
   __typename?: 'TaxInformation',
  marital_status?: Maybe<Scalars['String']>,
  tax_assessment?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  contact?: Maybe<Contact>,
  contacts: Array<Contact>,
  contactsByIban: Array<Contact>,
  email: Scalars['String'],
  id: Scalars['UUID'],
  person?: Maybe<Person>,
  solaris_id?: Maybe<Scalars['String']>,
};


export type UserContactArgs = {
  id: Scalars['UUID']
};


export type UserContactsArgs = {
  search?: Maybe<Scalars['String']>
};


export type UserContactsByIbanArgs = {
  iban: Scalars['String']
};


/** Only returns things that are public: validity and attempts left */
export type VerificationCodeResult = {
   __typename?: 'VerificationCodeResult',
  attempts_left?: Maybe<Scalars['Int']>,
  valid: Scalars['Boolean'],
};

export type TestQueryQueryVariables = {};


export type TestQueryQuery = (
  { __typename?: 'QueryRoot' }
  & { person: (
    { __typename?: 'Person' }
    & Pick<Person, 'birth_city' | 'id'>
  ) }
);


export const TestQueryDocument = gql`
    query TestQuery {
  person {
    birth_city
    id
  }
}
    `;

/**
 * __useTestQueryQuery__
 *
 * To run a query within a React component, call `useTestQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TestQueryQuery, TestQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<TestQueryQuery, TestQueryQueryVariables>(TestQueryDocument, baseOptions);
      }
export function useTestQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TestQueryQuery, TestQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TestQueryQuery, TestQueryQueryVariables>(TestQueryDocument, baseOptions);
        }
export type TestQueryQueryHookResult = ReturnType<typeof useTestQueryQuery>;
export type TestQueryLazyQueryHookResult = ReturnType<typeof useTestQueryLazyQuery>;
export type TestQueryQueryResult = ApolloReactCommon.QueryResult<TestQueryQuery, TestQueryQueryVariables>;