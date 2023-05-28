/* To enable watch mode, to auto-compile after saving
   tsc -w OR tsc --watch
* If we want to compile all TS files inside a directory at one go
    tsc

* If we want some specific files to be executed,
    in tsconfig.json, outside the 'compilerOptions' Object,
    add 'files' object with array of file names to be executed
*/

/**
 * We compile our files in a separate directory named 'dist',
 * so all the TS files will be compiled to js in dist folder,
 * in tsconfig, compilerOptions, mark "outDir": "./dist"
 */

/**
 * If we want to specify, which version of JS, our TS should be converted to,
 * so in tsconfig, compilerOptions, set target -> 'desired JS version'
 */

/**
 * In tsconfig, if strict flag is true, then it enables
 * wide range of type checking behavior that results in stronger guarantees
 * of program correctness.
 */

interface Dog {
    name: string;
    weight: number;
    age: number;
}

const rio: Dog = {
    name: "Rio",
    weight: 20,
    age: 4,
};
