/**
 * Enums allows us to define a set of named constants.
 * We can give these constants numeric or string values.
 */

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isShipped(status: OrderStatus) {
    return status === OrderStatus.SHIPPED;
}

isShipped(OrderStatus.SHIPPED);

// Enum of Strings
enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 234, // this is also valid
}

ArrowKeys.RIGHT; // 'right'

// Also check how Enum is converted to JS
// if we use const enum OrderStatus

// In JS
// var ArrowKeys;
// (function (ArrowKeys) {
//     ArrowKeys["UP"] = "up";
//     ArrowKeys["DOWN"] = "down";
//     ArrowKeys["LEFT"] = "left";
//     ArrowKeys["RIGHT"] = "right";
// })(ArrowKeys || (ArrowKeys = {}));

// In JS - with const
const order = { orderNum: 1234, status: 2 /* OrderStatus1.DELIVERED */ };
