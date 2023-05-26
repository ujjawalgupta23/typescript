/**
 * Void is return type of function that don't return anything.
 * TS can infer this type,
 * but sometimes it may want us to annotate function with void return type explicitly
 */

function greet(name: string): void {
    console.log(`Hi ${name}`);
    // return '' // now I cannot return something, as I have explicitly defined the return type
}
