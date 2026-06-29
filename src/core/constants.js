/**
 * OFC Fantasy Calculator
 * Core constants.
 *
 * This file contains only immutable data.
 * No business logic is allowed here.
 */

export const CARD_COUNT = 54;
export const REAL_CARD_COUNT = 52;

export const JOKER1 = 52;
export const JOKER2 = 53;

export const MIN_HAND_CARDS = 14;
export const MAX_HAND_CARDS = 17;

export const TOP_SIZE = 3;
export const MIDDLE_SIZE = 5;
export const BOTTOM_SIZE = 5;

export const SUIT = Object.freeze({
    SPADES: 0,
    HEARTS: 1,
    DIAMONDS: 2,
    CLUBS: 3
});

export const SUIT_CHAR = Object.freeze([
    "S",
    "H",
    "D",
    "C"
]);

export const RANK = Object.freeze({
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    ACE: 14
});

export const RANK_CHAR = Object.freeze([
    "",
    "",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A"
]);

export const HAND = Object.freeze({
    HIGH_CARD: 0,
    PAIR: 1,
    TWO_PAIR: 2,
    TRIPS: 3,
    STRAIGHT: 4,
    FLUSH: 5,
    FULL_HOUSE: 6,
    QUADS: 7,
    STRAIGHT_FLUSH: 8,
    ROYAL_FLUSH: 9
});

export const SOLVER_MODE = Object.freeze({
    FANTASY: 0,
    MAX_POINTS: 1
});

/**
 * Card rank by card index.
 *
 * Example:
 * index 0  -> 2♠
 * index 12 -> A♠
 * index 13 -> 2♥
 */
export const CARD_RANK = new Uint8Array(CARD_COUNT);

/**
 * Card suit by card index.
 */
export const CARD_SUIT = new Uint8Array(CARD_COUNT);

/**
 * Human-readable card text.
 */
export const CARD_TEXT = new Array(CARD_COUNT);

/**
 * Bit mask for every card.
 *
 * Will be heavily used by Solver.
 */
export const CARD_MASK = new Array(CARD_COUNT);

(function initialize() {

    let index = 0;

    for (let suit = 0; suit < 4; suit++) {

        for (let rank = 2; rank <= 14; rank++) {

            CARD_RANK[index] = rank;
            CARD_SUIT[index] = suit;

            CARD_TEXT[index] =
                RANK_CHAR[rank] +
                SUIT_CHAR[suit];

            CARD_MASK[index] =
                1n << BigInt(index);

            index++;
        }

    }

    CARD_TEXT[JOKER1] = "J1";
    CARD_TEXT[JOKER2] = "J2";

    CARD_MASK[JOKER1] =
        1n << BigInt(JOKER1);

    CARD_MASK[JOKER2] =
        1n << BigInt(JOKER2);

})();