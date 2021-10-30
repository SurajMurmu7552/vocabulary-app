import { gql } from "@apollo/client";

export const ADD_DATA = gql`
  mutation Mutation($addDataId: String) {
    addData(id: $addDataId) {
      results {
        id
        language
        word
      }
    }
  }
`;
