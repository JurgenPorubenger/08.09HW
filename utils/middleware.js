module.exports.time=function (req, res, next) {
    console.log(new Date);
    next();
};