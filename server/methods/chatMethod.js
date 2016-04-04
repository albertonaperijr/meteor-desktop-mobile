/**
 *
 * Chat Methods
 * Create Update Delete
 *
 **/

Meteor.methods({

    /**
     * Create Chat
     **/
    createChat: function(otherUserId) {
        let MethodName = 'CreateChat |';
        console.log(MethodName, otherUserId);

        let future = new Future();

        if (!Meteor.userId()) {
            console.error(MethodName, 'Null userId |', CodeUtil.UNAUTHORIZED_ACCESS);
            throw new Meteor.Error(CodeUtil.UNAUTHORIZED_ACCESS);
        } else if (!otherUserId) {
            console.error(MethodName, 'Null otherUserId |', Meteor.userId(), '|', CodeUtil.INVALID_PARAMETER);
            throw new Meteor.Error(CodeUtil.INVALID_PARAMETER);
        } else if (otherUserId === Meteor.userId()) {
            console.error(MethodName, 'Same user |', Meteor.userId(), '|', CodeUtil.UNAUTHORIZED_ACCESS);
            throw new Meteor.Error(CodeUtil.UNAUTHORIZED_ACCESS);
        } else {
            let otherUser = Meteor.users.findOne(otherUserId);
            if (!otherUser) {
                console.error(MethodName, 'Null otherUser |', Meteor.userId(), '|', CodeUtil.INVALID_PARAMETER);
                throw new Meteor.Error(CodeUtil.INVALID_PARAMETER);
            } else {
                let chat = {
                    userIds: [Meteor.userId(), otherUserId],
                    createdAt: new Date()
                };

                // Validate Fields
                check(chat, ChatSchema);

                Chats.insert(chat, function(error, result) {
                    if (error) {
                        console.error(MethodName, 'Error creating chat |', Meteor.userId(), '| error : ', error, '|', CodeUtil.CREATE_CHAT_ERROR);
                        throw new Meteor.Error(CodeUtil.CREATE_CHAT_ERROR, error);
                    } else {
                        console.info(MethodName, 'Success creating chat |', Meteor.userId(), '|', CodeUtil.CREATE_CHAT_SUCCESS);
                        return future.return({
                            _id: result,
                            returnCode: CodeUtil.CREATE_CHAT_SUCCESS
                        });
                    }
                });
            }
        }

        return future.wait();
    },

    /**
     * Update Chat
     **/
    updateChat: function(chat) {
        let MethodName = 'UpdateChat |';
        console.log(MethodName, chat);

        let future = new Future();

        if (!Meteor.userId()) {
            console.error(MethodName, 'Null userId |', CodeUtil.UNAUTHORIZED_ACCESS);
            throw new Meteor.Error(CodeUtil.UNAUTHORIZED_ACCESS);
        } else if (!chat) {
            console.error(MethodName, 'Null chat |', Meteor.userId(), '|', CodeUtil.INVALID_PARAMETER);
            throw new Meteor.Error(CodeUtil.INVALID_PARAMETER);
        } else if (!chat._id) {
            console.error(MethodName, 'Null _id |', Meteor.userId(), '|', CodeUtil.INVALID_PARAMETER);
            throw new Meteor.Error(CodeUtil.INVALID_PARAMETER);
        } else if (!_.include(chat.userIds, Meteor.userId())) {
            console.error(MethodName, 'Unauthorized access |', Meteor.userId(), '|', CodeUtil.UNAUTHORIZED_ACCESS);
            throw new Meteor.Error(CodeUtil.UNAUTHORIZED_ACCESS);
        } else {
            // Validate Fields
            check(chat, ChatSchema);

            Chats.update(chat._id, {
                $set: chat
            }, function(error, result) {
                if (error) {
                    console.error(MethodName, 'Error updating chat |', Meteor.userId(), '| error : ', error, '|', CodeUtil.UPDATE_CHAT_ERROR);
                    throw new Meteor.Error(CodeUtil.UPDATE_CHAT_ERROR, error);
                } else {
                    console.info(MethodName, 'Success updating chat |', Meteor.userId(), '|', CodeUtil.UPDATE_CHAT_SUCCESS);
                    return future.return({
                        _id: result,
                        returnCode: CodeUtil.UPDATE_CHAT_SUCCESS
                    });
                }
            });
        }

        return future.wait();
    },

    /**
     * Update Chat Last Message
     **/
    updateChatLastMessage: function(message) {
        let MethodName = 'UpdateChatLastMessage |';
        console.log(MethodName, message);

        let future = new Future();

        if (!Meteor.userId()) {
            console.error(MethodName, 'Null userId |', CodeUtil.UNAUTHORIZED_ACCESS);
            throw new Meteor.Error(CodeUtil.UNAUTHORIZED_ACCESS);
        } else if (!message) {
            console.error(MethodName, 'Null chat |', Meteor.userId(), '|', CodeUtil.INVALID_PARAMETER);
            throw new Meteor.Error(CodeUtil.INVALID_PARAMETER);
        } else if (!message._id || !message.chatId) {
            console.error(MethodName, 'Null _id or null chatId |', Meteor.userId(), '|', CodeUtil.INVALID_PARAMETER);
            throw new Meteor.Error(CodeUtil.INVALID_PARAMETER);
        } else {
            let chat = Chats.findOne(message.chatId);
            if (!chat) {
                console.error(MethodName, 'Null chat |', Meteor.userId(), '|', CodeUtil.INVALID_PARAMETER);
                throw new Meteor.Error(CodeUtil.INVALID_PARAMETER);
            } else if (!_.include(chat.userIds, Meteor.userId())) {
                console.error(MethodName, 'Unauthorized access |', Meteor.userId(), '|', CodeUtil.UNAUTHORIZED_ACCESS);
                throw new Meteor.Error(CodeUtil.UNAUTHORIZED_ACCESS);
            } else {
                // Validate Fields
                check(chat, ChatSchema);

                Chats.update(message.chatId, {
                    $set: {
                        lastMessage: message
                    }
                }, function(error, result) {
                    if (error) {
                        console.error(MethodName, 'Error updating chat last message |', Meteor.userId(), '| error : ', error, '|', CodeUtil.UPDATE_CHAT_ERROR);
                        throw new Meteor.Error(CodeUtil.UPDATE_CHAT_ERROR, error);
                    } else {
                        console.info(MethodName, 'Success updating chat last message |', Meteor.userId(), '|', CodeUtil.UPDATE_CHAT_SUCCESS);
                        return future.return({
                            _id: result,
                            returnCode: CodeUtil.UPDATE_CHAT_SUCCESS
                        });
                    }
                });
            }
        }

        return future.wait();
    },

    /**
     * Remove Chat
     **/
    removeChat: function(chatId) {
        let MethodName = 'RemoveChat |';
        console.log(MethodName, chatId);

        let future = new Future();

        if (!Meteor.userId()) {
            console.error(MethodName, 'Null userId |', CodeUtil.UNAUTHORIZED_ACCESS);
            throw new Meteor.Error(CodeUtil.UNAUTHORIZED_ACCESS);
        } else if (!chatId) {
            console.error(MethodName, 'Null chatId |', Meteor.userId(), '|', CodeUtil.INVALID_PARAMETER);
            throw new Meteor.Error(CodeUtil.INVALID_PARAMETER);
        } else {
            let chat = Chats.findOne(chatId);
            if (!chat) {
                console.error(MethodName, 'Null chat |', Meteor.userId(), '|', CodeUtil.INVALID_PARAMETER);
                throw new Meteor.Error(CodeUtil.INVALID_PARAMETER);
            } else if (!_.include(chat.userIds, Meteor.userId())) {
                console.error(MethodName, 'Unauthorized access |', Meteor.userId(), '|', CodeUtil.UNAUTHORIZED_ACCESS);
                throw new Meteor.Error(CodeUtil.UNAUTHORIZED_ACCESS);
            } else {
                let messagesCount = Messages.find({
                    chatId: chatId
                }, {
                    limit: 1
                }).count();
                console.log(MethodName, 'messagesCount', messagesCount);
                if (messagesCount > 0) {
                    Meteor.call('removeMessagesByChatId', chatId, function(error, response) {
                        if (error) {
                            console.error(MethodName, 'Error deleting message |', Meteor.userId(), '| error : ', error, '|', CodeUtil.DELETE_MESSAGE_ERROR);
                            throw new Meteor.Error(CodeUtil.DELETE_MESSAGE_ERROR);
                        } else {
                            Chats.remove({
                                _id: chatId
                            }, function(error) {
                                if (error) {
                                    console.error(MethodName, 'Error deleting chat |', Meteor.userId(), '| error : ', error, '|', CodeUtil.DELETE_CHAT_ERROR);
                                    throw new Meteor.Error(CodeUtil.DELETE_CHAT_ERROR, error);
                                } else {
                                    console.info(MethodName, 'Success deleting chat |', Meteor.userId(), '|', CodeUtil.DELETE_CHAT_SUCCESS);
                                    return future.return({
                                        returnCode: CodeUtil.DELETE_CHAT_SUCCESS
                                    });
                                }
                            });
                        }
                    });
                } else {
                    Chats.remove({
                        _id: chatId
                    }, function(error) {
                        if (error) {
                            console.error(MethodName, 'Error deleting chat |', Meteor.userId(), '| error : ', error, '|', CodeUtil.DELETE_CHAT_ERROR);
                            throw new Meteor.Error(CodeUtil.DELETE_CHAT_ERROR, error);
                        } else {
                            console.info(MethodName, 'Success deleting chat |', Meteor.userId(), '|', CodeUtil.DELETE_CHAT_SUCCESS);
                            return future.return({
                                returnCode: CodeUtil.DELETE_CHAT_SUCCESS
                            });
                        }
                    });
                }
            }
        }

        return future.wait();
    },

    /**
     * Remove All Chats
     **/
    removeAllChats: function() {
        let MethodName = 'RemoveAllChats |';
        console.log(MethodName, Meteor.user());

        let future = new Future();

        if (!Meteor.userId()) {
            console.error(MethodName, 'Null userId |', CodeUtil.UNAUTHORIZED_ACCESS);
            throw new Meteor.Error(CodeUtil.UNAUTHORIZED_ACCESS);
        } else if (!Meteor.user().roles) {
            console.error(MethodName, 'Unauthorized access |', Meteor.userId(), '|', CodeUtil.UNAUTHORIZED_ACCESS);
            throw new Meteor.Error(CodeUtil.UNAUTHORIZED_ACCESS);
        } else if (Meteor.user().roles.indexOf('admin') < 0) {
            console.error(MethodName, 'Unauthorized access |', Meteor.userId(), '|', CodeUtil.UNAUTHORIZED_ACCESS);
            throw new Meteor.Error(CodeUtil.UNAUTHORIZED_ACCESS);
        } else {
            Chats.remove({}, function(error) {
                if (error) {
                    console.error(MethodName, 'Error deleting all chats |', Meteor.userId(), '| error : ', error, '|', CodeUtil.DELETE_CHAT_ERROR);
                    throw new Meteor.Error(CodeUtil.DELETE_CHAT_ERROR, error);
                } else {
                    console.info(MethodName, 'Success deleting all chats |', Meteor.userId(), '|', CodeUtil.DELETE_CHAT_SUCCESS);
                    return future.return({
                        returnCode: CodeUtil.DELETE_CHAT_SUCCESS
                    });
                }
            });
        }

        return future.wait();
    }
});
