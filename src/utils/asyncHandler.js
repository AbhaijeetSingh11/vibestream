const asyncHandler = (func) => async(req, res, next) => {
    try {
        await func(req, res, next);
    } catch (error) {
        res.send(error.code || 500).json({
            success : false,
            messaeg : error.message
        })
    }
}