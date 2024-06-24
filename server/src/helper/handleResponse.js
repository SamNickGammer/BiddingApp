const {StatusCodes, ReasonPhrases} = require('http-status-codes')

const Success = (response, message) =>
    response
        .status(StatusCodes.OK)
        .send(message || {message: ReasonPhrases.OK})

const BadRequest = (response, message) =>
    response
        .status(StatusCodes.BAD_REQUEST)
        .send(message || {message: ReasonPhrases.BAD_REQUEST})

const NotFound = (response, message) =>
    response
        .status(StatusCodes.NOT_FOUND)
        .send(message || {message: ReasonPhrases.NOT_FOUND})

const InternalServerError = (response, message) =>
    response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(message || {message: ReasonPhrases.INTERNAL_SERVER_ERROR})

module.exports = {
    Success,
    BadRequest,
    NotFound,
    InternalServerError
}