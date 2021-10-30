const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  metadata: {},
  results: [
    {
      id: String,
      language: String,
      lexicalEntries: [
        {
          entries: [
            {
              etymologies: [String],

              senses: [
                {
                  definitions: [String],

                  etymologies: [String],
                  examples: [
                    {
                      definitions: [String],

                      text: String,
                    },
                  ],

                  shortDefinitions: [String],
                },
              ],
            },
          ],

          lexicalCategory: {
            id: String,
            text: String,
          },

          text: String,
        },
      ],

      word: String,
    },
  ],
});

module.exports = mongoose.model("data", dataSchema);
