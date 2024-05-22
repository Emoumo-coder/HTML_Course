let userName = "Umar";

for (let i = 0; i < userName.length; i++) {
    // Determine which character to print
    if (i === 2) {
        continue;
    }

    // first character accessor approach
    // console.log(userName.charAt(i));
    // second character access approach
    // console.log(i);
    console.log(userName[i]);
}