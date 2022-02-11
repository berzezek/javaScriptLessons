let x = 5;
// if (x < 3) {
//     console.log("False");
// } else if (x > 5) {
//     console.log("False too!");
// } else {
//     console.log("TRUE!");
// }

// (x < 3) ? console.log("True") : console.log("False");

// switch (x) {
//     case x < 3:
//         console.log('False');
//         break;
//     case x > 5:
//         console.log('False too');
//         break;
//     default:
//         console.log('Default');
// }

// while (x > 0) {
//     console.log(x);
//     x--;
// }

do {
    console.log(x);
    x--;
}
while (x > 0);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}