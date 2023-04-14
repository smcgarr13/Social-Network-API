const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
    createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toLocaleDateString(),
  },
    username: {
    type: String,
    required: true,
  },
    reactions: [ReactionSchema],
});

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

ThoughtSchema.set('toObject', { getters: true });
ThoughtSchema.set('toJSON', { getters: true });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;