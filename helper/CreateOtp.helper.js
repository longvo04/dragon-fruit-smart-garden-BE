module.exports = (length) => {
    const string = '0123456789';
    let OTP = '';

    for (let i = 0; i < length; i++) {
        OTP += string[Math.floor(Math.random() * string.length)];
    }

    return OTP;
};