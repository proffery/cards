/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/v1/auth/login": {
    /**
     * Sign in using email and password. Must have an account to do so.
     * @description Sign in using email and password. Must have an account to do so.
     */
    post: operations["AuthController_login"];
  };
  "/v1/auth/logout": {
    /**
     * Sign current user out
     * @description Sign current user out
     */
    post: operations["AuthController_logout"];
  };
  "/v1/auth/me": {
    /**
     * Current user data
     * @description Retrieve current user data.
     */
    get: operations["AuthController_getUserData"];
    /**
     * Update user data
     * @description Update current user data.
     */
    patch: operations["AuthController_updateUserData"];
  };
  "/v1/auth/recover-password": {
    /**
     * Send password recovery email
     * @description Send password recovery email
     */
    post: operations["AuthController_recoverPassword"];
  };
  "/v1/auth/refresh-token": {
    /**
     * Deprecated, use v2
     * @deprecated
     * @description Deprecated, use v2
     */
    post: operations["AuthController_refreshToken"];
  };
  "/v1/auth/resend-verification-email": {
    /**
     * Send verification email again
     * @description Send verification email again
     */
    post: operations["AuthController_resendVerificationEmail"];
  };
  "/v1/auth/reset-password/{token}": {
    /**
     * Reset password
     * @description Reset password
     */
    post: operations["AuthController_resetPassword"];
  };
  "/v1/auth/sign-up": {
    /**
     * Create a new user account
     * @description Create a new user account
     */
    post: operations["AuthController_registration"];
  };
  "/v1/auth/verify-email": {
    /**
     * Verify user email
     * @description Verify user email
     */
    post: operations["AuthController_confirmRegistration"];
  };
  "/v1/cards/{id}": {
    /**
     * Delete card by id
     * @description Delete card by id
     */
    delete: operations["CardsController_remove"];
    /**
     * Get card by id
     * @description Get card by id
     */
    get: operations["CardsController_findOne"];
    /**
     * Update card
     * @description Update partial card data
     */
    patch: operations["CardsController_update"];
  };
  "/v1/decks": {
    /**
     * Paginated decks list
     * @deprecated
     * @description Deprecated. Use v2 in combination with /min-max-cards request
     */
    get: operations["DecksController_findAllV1"];
    /**
     * Create a deck
     * @description Create a deck
     */
    post: operations["DecksController_create"];
  };
  "/v1/decks/{id}": {
    /**
     * Delete a deck
     * @description Delete a deck
     */
    delete: operations["DecksController_remove"];
    /**
     * Retrieve a deck by id
     * @description Retrieve a deck by id
     */
    get: operations["DecksController_findOne"];
    /**
     * Update a deck
     * @description Update a deck
     */
    patch: operations["DecksController_update"];
  };
  "/v1/decks/{id}/cards": {
    /**
     * Retrieve cards in a deck
     * @description Retrieve paginated cards in a deck
     */
    get: operations["DecksController_findCardsInDeck"];
    /**
     * Create a card
     * @description Create card in a deck
     */
    post: operations["DecksController_createCardInDeck"];
  };
  "/v1/decks/{id}/learn": {
    /**
     * Retrieve a random card
     * @description Retrieve a random card in a deck. The cards priority is based on the grade
     */
    get: operations["DecksController_findRandomCardInDeck"];
    /**
     * Save the grade of a card
     * @description Save the grade of a card
     */
    post: operations["DecksController_saveGrade"];
  };
  "/v1/users": {
    delete: operations["UsersController_removeAll"];
    get: operations["UsersController_findAll"];
    post: operations["UsersController_create"];
  };
  "/v1/users/{id}": {
    delete: operations["UsersController_remove"];
  };
  "/v2/auth/refresh-token": {
    /**
     * Get new access token using refresh token
     * @description Get new access token using refresh token
     */
    post: operations["AuthController_refreshTokenV2"];
  };
  "/v2/decks": {
    /**
     * Paginated decks list
     * @description Retrieve paginated decks list.
     */
    get: operations["DecksController_findAllV2"];
  };
  "/v2/decks/min-max-cards": {
    /**
     * Minimum and maximum amount of cards in a deck
     * @description Retrieve the minimum and maximum amount of cards in a deck.
     */
    get: operations["DecksController_findMinMaxCards"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  headers: never;
  parameters: never;
  pathItems: never;
  requestBodies: never;
  responses: never;
  schemas: {
    Card: {
      answer: string;
      answerImg: string;
      answerVideo: string;
      /** Format: date-time */
      created: string;
      deckId: string;
      id: string;
      question: string;
      questionImg: string;
      questionVideo: string;
      shots: number;
      /** Format: date-time */
      updated: string;
      userId: string;
    };
    CardWithGrade: {
      answer: string;
      answerImg: string;
      answerVideo: string;
      /** Format: date-time */
      created: string;
      deckId: string;
      grade: number;
      id: string;
      question: string;
      questionImg: string;
      questionVideo: string;
      shots: number;
      /** Format: date-time */
      updated: string;
      userId: string;
    };
    CreateCardRequest: {
      answer: string;
      answerImg?: string;
      answerVideo?: string;
      question: string;
      questionImg?: string;
      questionVideo?: string;
    };
    CreateDeckRequest: {
      /**
       * Format: binary
       * @description Cover image (has to be sent inside FormData, does NOT accept base64)
       */
      cover?: string;
      /** @description Private decks are not visible to other users */
      isPrivate?: boolean;
      name: string;
    };
    CreateUserRequest: {
      /** @description User's email address */
      email: string;
      name: string;
      password: string;
    };
    Deck: {
      cardsCount: number;
      cover: null | string;
      /** Format: date-time */
      created: string;
      id: string;
      isPrivate: boolean;
      name: string;
      /** Format: date-time */
      updated: string;
      userId: string;
    };
    DeckAuthor: {
      id: string;
      name: string;
    };
    DeckWithAuthor: {
      author: components["schemas"]["DeckAuthor"];
      cardsCount: number;
      cover: null | string;
      /** Format: date-time */
      created: string;
      id: string;
      isPrivate: boolean;
      name: string;
      /** Format: date-time */
      updated: string;
      userId: string;
    };
    EmailVerificationRequest: {
      code: string;
    };
    LoginRequest: {
      email: string;
      password: string;
      rememberMe: boolean;
    };
    LoginResponse: {
      accessToken: string;
      refreshToken: string;
    };
    MinMaxCards: {
      max: number;
      min: number;
    };
    PaginatedCardsWithGrade: {
      items: components["schemas"]["CardWithGrade"][];
      pagination: components["schemas"]["Pagination"];
    };
    PaginatedDecks: {
      items: components["schemas"]["DeckWithAuthor"][];
      pagination: components["schemas"]["Pagination"];
    };
    PaginatedDecksWithMaxCardsCount: {
      items: components["schemas"]["DeckWithAuthor"][];
      maxCardsCount: number;
      pagination: components["schemas"]["Pagination"];
    };
    Pagination: {
      currentPage: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
    RecoverPasswordRequest: {
      /** @description User's email address */
      email: string;
      /**
       * @description HTML template to be sent in the email;
       *  ##name## will be replaced with the user's name;
       *  ##token## will be replaced with the password recovery token
       * @example <h1>Hi, ##name##</h1><p>Click <a href="##token##">here</a> to recover your password</p>
       */
      html?: string;
      /** @description Email subject */
      subject?: string;
    };
    RegistrationRequest: {
      email: string;
      /**
       * @description HTML template to be sent in the email;
       *  ##name## will be replaced with the user's name;
       *  ##token## will be replaced with the password recovery token
       * @example <b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="http://localhost:3000/confirm-email/##token##">Confirm email</a>. If it doesn't work, copy and paste the following link in your browser:<br/>http://localhost:3000/confirm-email/##token##
       */
      html?: string;
      name?: string;
      password: string;
      /**
       * @description Whether to send a confirmation email or not.
       * Defaults to false
       * @example false
       */
      sendConfirmationEmail?: boolean;
      /** @description Email subject */
      subject?: string;
    };
    ResendVerificationEmailRequest: {
      /**
       * @description HTML template to be sent in the email;
       *  ##name## will be replaced with the user's name;
       *  ##token## will be replaced with the password recovery token
       * @example <b>Hello, ##name##!</b><br/>Please confirm your email by clicking on the link below:<br/><a href="http://localhost:3000/confirm-email/##token##">Confirm email</a>. If it doesn't work, copy and paste the following link in your browser:<br/>http://localhost:3000/confirm-email/##token##
       */
      html?: string;
      /** @description Email subject */
      subject?: string;
      userId: string;
    };
    ResetPasswordRequest: {
      password: string;
    };
    SaveGradeRequest: {
      cardId: string;
      grade: number;
    };
    UpdateCardRequest: {
      answer?: string;
      /** Format: binary */
      answerImg?: string;
      answerVideo?: string;
      question?: string;
      /** Format: binary */
      questionImg?: string;
      questionVideo?: string;
    };
    UpdateDeckRequest: {
      /**
       * Format: binary
       * @description Cover image (has to be sent inside FormData, does NOT accept base64)
       */
      cover?: string;
      isPrivate?: boolean;
      name?: string;
    };
    UpdateUserRequest: {
      /** Format: binary */
      avatar?: File;
      name?: string;
    };
    User: {
      /** Format: binary */
      avatar: string;
      /** Format: date-time */
      created: string;
      email: string;
      id: string;
      isEmailVerified: boolean;
      name: string;
      /** Format: date-time */
      updated: string;
    };
  };
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Verify user email
   * @description Verify user email
   */
  AuthController_confirmRegistration: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["EmailVerificationRequest"];
      };
    };
    responses: {
      /** @description Email verified successfully */
      204: {
        content: never;
      };
      /** @description Email has already been verified */
      400: {
        content: never;
      };
      /** @description User not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Current user data
   * @description Retrieve current user data.
   */
  AuthController_getUserData: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description User not found */
      400: {
        content: never;
      };
      /** @description Not logged in */
      401: {
        content: never;
      };
    };
  };
  /**
   * Sign in using email and password. Must have an account to do so.
   * @description Sign in using email and password. Must have an account to do so.
   */
  AuthController_login: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginRequest"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["LoginResponse"];
        };
      };
      /** @description Invalid credentials */
      401: {
        content: never;
      };
    };
  };
  /**
   * Sign current user out
   * @description Sign current user out
   */
  AuthController_logout: {
    responses: {
      /** @description Logged out successfully */
      204: {
        content: never;
      };
      /** @description Not logged in */
      401: {
        content: never;
      };
    };
  };
  /**
   * Send password recovery email
   * @description Send password recovery email
   */
  AuthController_recoverPassword: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RecoverPasswordRequest"];
      };
    };
    responses: {
      /** @description Password recovery email sent successfully */
      204: {
        content: never;
      };
      /** @description Email has already been verified */
      400: {
        content: never;
      };
      /** @description User not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Deprecated, use v2
   * @deprecated
   * @description Deprecated, use v2
   */
  AuthController_refreshToken: {
    responses: {
      /** @description New tokens generated successfully */
      204: {
        content: never;
      };
      /** @description Invalid or missing refreshToken */
      401: {
        content: never;
      };
    };
  };
  /**
   * Get new access token using refresh token
   * @description Get new access token using refresh token
   */
  AuthController_refreshTokenV2: {
    responses: {
      /** @description New tokens generated successfully */
      200: {
        content: never;
      };
      /** @description Invalid or missing refreshToken */
      401: {
        content: never;
      };
    };
  };
  /**
   * Create a new user account
   * @description Create a new user account
   */
  AuthController_registration: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegistrationRequest"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description Email already exists */
      400: {
        content: never;
      };
    };
  };
  /**
   * Send verification email again
   * @description Send verification email again
   */
  AuthController_resendVerificationEmail: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["ResendVerificationEmailRequest"];
      };
    };
    responses: {
      /** @description Verification email sent successfully */
      204: {
        content: never;
      };
      /** @description Email has already been verified */
      400: {
        content: never;
      };
      /** @description User not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Reset password
   * @description Reset password
   */
  AuthController_resetPassword: {
    parameters: {
      path: {
        token: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ResetPasswordRequest"];
      };
    };
    responses: {
      /** @description Password reset successfully */
      204: {
        content: never;
      };
      /** @description Password is required */
      400: {
        content: never;
      };
      /** @description Incorrect or expired password reset token */
      404: {
        content: never;
      };
    };
  };
  /**
   * Update user data
   * @description Update current user data.
   */
  AuthController_updateUserData: {
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["UpdateUserRequest"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description User not found */
      400: {
        content: never;
      };
      /** @description Not logged in */
      401: {
        content: never;
      };
    };
  };
  /**
   * Get card by id
   * @description Get card by id
   */
  CardsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CardWithGrade"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
      /** @description Card not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Delete card by id
   * @description Delete card by id
   */
  CardsController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description New tokens generated successfully */
      204: {
        content: never;
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
      /** @description Card not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Update card
   * @description Update partial card data
   */
  CardsController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["UpdateCardRequest"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Card"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
      /** @description Card not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Create a deck
   * @description Create a deck
   */
  DecksController_create: {
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["CreateDeckRequest"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["DeckWithAuthor"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
    };
  };
  /**
   * Create a card
   * @description Create card in a deck
   */
  DecksController_createCardInDeck: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["CreateCardRequest"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["Card"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
      /** @description Deck not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Paginated decks list
   * @deprecated
   * @description Deprecated. Use v2 in combination with /min-max-cards request
   */
  DecksController_findAllV1: {
    parameters: {
      query?: {
        /** @description Filter by deck authorId */
        authorId?: string;
        currentPage?: number;
        itemsPerPage?: number;
        maxCardsCount?: number;
        minCardsCount?: number;
        /** @description Search by deck name */
        name?: string;
        /**
         * @description A string that represents the name of the field to order by and the order direction.
         * The format is: "field_name-order_direction".
         * Available directions: "asc" and "desc".
         * @example name-desc
         */
        orderBy?: "author.name-asc" | "author.name-desc" | "cardsCount-asc" | "cardsCount-desc" | "created-asc" | "created-desc" | "name-asc" | "name-desc" | "null" | "updated-asc" | "updated-desc";
      };
    };
    responses: {
      206: {
        content: {
          "application/json": components["schemas"]["PaginatedDecksWithMaxCardsCount"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
    };
  };
  /**
   * Paginated decks list
   * @description Retrieve paginated decks list.
   */
  DecksController_findAllV2: {
    parameters: {
      query?: {
        /** @description Filter by deck authorId */
        authorId?: string;
        currentPage?: number;
        itemsPerPage?: number;
        maxCardsCount?: number;
        minCardsCount?: number;
        /** @description Search by deck name */
        name?: string;
        /**
         * @description A string that represents the name of the field to order by and the order direction.
         * The format is: "field_name-order_direction".
         * Available directions: "asc" and "desc".
         * @example name-desc
         */
        orderBy?: "author.name-asc" | "author.name-desc" | "cardsCount-asc" | "cardsCount-desc" | "created-asc" | "created-desc" | "name-asc" | "name-desc" | "null" | "updated-asc" | "updated-desc";
      };
    };
    responses: {
      206: {
        content: {
          "application/json": components["schemas"]["PaginatedDecks"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
    };
  };
  /**
   * Retrieve cards in a deck
   * @description Retrieve paginated cards in a deck
   */
  DecksController_findCardsInDeck: {
    parameters: {
      path: {
        id: string;
      };
      query?: {
        answer?: string;
        currentPage?: number;
        itemsPerPage?: number;
        orderBy?: null | string;
        question?: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedCardsWithGrade"];
        };
      };
    };
  };
  /**
   * Minimum and maximum amount of cards in a deck
   * @description Retrieve the minimum and maximum amount of cards in a deck.
   */
  DecksController_findMinMaxCards: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["MinMaxCards"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
    };
  };
  /**
   * Retrieve a deck by id
   * @description Retrieve a deck by id
   */
  DecksController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["DeckWithAuthor"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
    };
  };
  /**
   * Retrieve a random card
   * @description Retrieve a random card in a deck. The cards priority is based on the grade
   */
  DecksController_findRandomCardInDeck: {
    parameters: {
      path: {
        id: string;
      };
      query?: {
        previousCardId?: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CardWithGrade"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
    };
  };
  /**
   * Delete a deck
   * @description Delete a deck
   */
  DecksController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description Deck deleted */
      200: {
        content: {
          "application/json": components["schemas"]["Deck"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
      /** @description Deck not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Save the grade of a card
   * @description Save the grade of a card
   */
  DecksController_saveGrade: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SaveGradeRequest"];
      };
    };
    responses: {
      /** @description A new random card in the deck. Will never return the same card that was sent */
      200: {
        content: {
          "application/json": components["schemas"]["CardWithGrade"];
        };
      };
      /** @description Grade saved */
      204: {
        content: never;
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
      /** @description Card not found */
      404: {
        content: never;
      };
    };
  };
  /**
   * Update a deck
   * @description Update a deck
   */
  DecksController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["UpdateDeckRequest"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["DeckWithAuthor"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: never;
      };
      /** @description Deck not found */
      404: {
        content: never;
      };
    };
  };
  UsersController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateUserRequest"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": Record<string, never>;
        };
      };
    };
  };
  UsersController_findAll: {
    responses: {
      200: {
        content: {
          "application/json": Record<string, never>;
        };
      };
    };
  };
  UsersController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": boolean;
        };
      };
    };
  };
  UsersController_removeAll: {
    responses: {
      200: {
        content: never;
      };
    };
  };
}
