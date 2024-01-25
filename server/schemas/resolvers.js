const { Book, User } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async () => {
            return User.findOne({ username })
        }
    },

    Mutation: {
        addUser: async () => {
            const user =await User.create(args);
            const token = signToken(user)

            return {token, user}
        }
    }
}

module.exports = resolvers;