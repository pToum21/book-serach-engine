const { Book, User } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async () => {
            return User.findOne({ username })
        }
    },

    Mutation: {
        addUser: async (_, args) => {
            const user =await User.create(args);
            const token = signToken(user)

            return {token, user}
        }
    }
}

module.exports = resolvers;