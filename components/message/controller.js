const store = require('./store');
const { socket } = require('../../socket');
const {
    port,
    host,
    publicRoute,
    filesRoute
} = require('../../config.js');

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error(
                '[messageController] no have user or message'
            );
            reject('Invalid Data');
            return false;
        }

        let fileUrl = '';
        if (file) {
            fileUrl = `${host}:${port}${publicRoute}${filesRoute}/${file.filename}`;
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        };

        store.add(fullMessage);

        socket.io.emit('message', fullMessage);

        resolve(fullMessage);
    });
}

function getMessages(filterChat) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterChat));
    });
}

function updateMessage(id, message) {
    return new Promise(async(resolve, reject) => {
        console.log(id);
        console.log(message);
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }

        const result = await store.updateText(id, message);

        resolve(result);
    });
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Invalid ID');
            return false;
        }

        store
            .remove(id)
            .then(() => {
                resolve();
            })
            .catch((e) => {
                reject(e);
            });
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};