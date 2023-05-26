/**
 * Never type represents values that never occur.
 * We might use it to annotate a function that always throws an exception,
 * or a function that never stops executing
 *
 * Void returns undefined or null, which still is a value.
 * With 'never', a function doesn't even finish executing'
 */

function makeError(msg: string): never {
    // return msg // this is not allowed
    throw new Error(msg);
}

function gameLoop(): never {
    // return ''  // not allowed
    while (true) {
        console.log("Game Running");
    }
}
