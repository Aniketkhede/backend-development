// const Asynchandler = (fn) => (err,req,res,next) => {
//     try {
//         Promise.resolve(err,req,res,next).
//         then().
//         catch()
//     } catch (error) {
        
//     }
// }

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        new Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }