const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single thought by its _id
  getThoughtById(req, res) {
    Thought.findById(req.params.thoughtId)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a new thought
  createThought(req, res) {
    console.log('Request body:', req.body); // Log request body
    Thought.create(req.body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        })
        .then((dbUserData) => {
            if (!dbUserData) {
                console.log('User not found:', req.body.userId); // Log user not found
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log('Error:', err); // Log error
            res.status(500).json(err);
        });
},

  // createThought(req, res) {
  //   Thought.create(req.body)
  //     .then(({ _id }) => {
  //       return User.findOneAndUpdate(
  //         { _id: req.body.userId },
  //         { $push: { thoughts: _id } },
  //         { new: true }
  //       );
  //     })
  //     .then((dbUserData) => {
  //       if (!dbUserData) {
  //         res.status(404).json({ message: 'No user found with this id!' });
  //         return;
  //       }
  //       res.json(dbUserData);
  //     })
  //     .catch((err) => res.status(500).json(err));
  // },

  // Update a thought by its _id
  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true, runValidators: true })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a thought by its _id
  deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.thoughtId)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json({ message: 'Thought deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },

  // Add a reaction to a thought
addReaction(req, res) {
  console.log(req.body);
  Thought.findByIdAndUpdate(
    req.params.thoughtId,
    { $push: { reactions: req.body } },
    { new: true, runValidators: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},


  // Delete a reaction from a thought
  deleteReaction(req, res) {
    console.log("Thought ID:", req.params.thoughtId);
    console.log("Reaction ID:", req.params.reactionId);
  
    Thought.findByIdAndDelete(
      { _id: req.params.thoughtId, 'reactions.reactionId': req.params.reactionId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    )
      .then((thought) => {
        console.log("Updated thought:", thought);
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought);
      })
      .catch((err) => {
        console.log("Error:", err);
        res.status(500).json(err);
      });
  },
};
