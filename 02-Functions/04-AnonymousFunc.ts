// TS can also infer the type in Anonymous Function

const colors = ["Red", "Green", "Blue"];
colors.map(color => {
    // TS can infer the type 'string' automatically
    // return color.toFixed()  this is not a valid string method, hence not allowed
    return color.toLowerCase();
});
