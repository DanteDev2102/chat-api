const statusMessages = {
    200: 'done',
    201: 'created',
    400: 'invalid format',
    500: 'internal error'
};

exports.success = function(req, res, msg, status) {
    let statusCode = status;
    let statusMessage = msg;

    if (!status) status = 200;
    if (!msg) statusMessage = statusMessages[status];

    res.status(statusCode).send({ error: '', body: statusMessage });
};

exports.error = function(req, res, err, status = 500, details) {
 

    console.error(`[response error] ${statusMessages[status]}`);
    res.status(status).send({ error: err, body: '' });
};