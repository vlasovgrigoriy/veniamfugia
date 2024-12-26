// Assume vega is already included in your project, and it has an isArray method.
if (vega.isArray(range)) {
    console.log("The variable 'range' is an array.");
    // Perform actions specific to when 'range' is an array
    range.forEach(function(item) {
        console.log(item);
    });
} else {
    console.log("The variable 'range' is not an array.");
    // Handle the case where 'range' is not an array
}
