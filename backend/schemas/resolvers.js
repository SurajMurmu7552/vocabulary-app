const DataModel = require("../models/dataModel");

// mod.cjs
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const resolvers = {
  Query: {
    async getAllData() {
      try {
        const data = await DataModel.find({});
        if (data.length > 0) {
          return data;
        }
      } catch (error) {
        console.log(error);
        return null;
      }
    },

    async getSingleData(parent, args) {
      try {
        const parameters = {
          results: {
            $elemMatch: { id: args.id },
          },
        };

        const data = await DataModel.findOne(parameters);
        if (data) {
          return data;
        }
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },

  Mutation: {
    async addData(parent, args) {
      try {
        if (!args.id) {
          return null;
        }

        const parameters = {
          results: {
            $elemMatch: { id: args.id },
          },
        };

        const alreadyExist = await DataModel.findOne(parameters);

        if (!alreadyExist) {
          const options = {
            method: "GET",
            headers: {
              ContentType: "application/json",
              app_id: "2ec0e426",
              app_key: "e49cd0b155af8ae4a5a8b7185a893d94",
            },
          };

          const endpoint = "entries",
            language_code = "en-us",
            word_id = args.id;

          const url =
            "https://od-api.oxforddictionaries.com/api/v2/" +
            endpoint +
            "/" +
            language_code +
            "/" +
            word_id.toLowerCase();

          const request = await fetch(url, options);

          const data = await request.json();

          if (data.results.length > 0) {
            const createData = await DataModel.create(data);
            return createData;
          } else {
            return null;
          }
        }
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
};

module.exports = resolvers;
