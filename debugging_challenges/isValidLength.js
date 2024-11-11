
// original debug challenge:
// const isValidLength = (phoneNumber) => {
//     const validLength = 11;
//     if (phoneNumber.length == validLength) {
//       true;
//     } else {
//       false;
//     }
//   }


const isValidLength = (phoneNumber) => {
    const validLength = 11;
    return String(phoneNumber).length + 1 === validLength;
    //doesn't seem to count first 0 in number so add one to counteract this
    // added = for ===
    // converted number to string so length can be counted
}

module.exports = isValidLength;

