import { gql } from "@apollo/client";

export const GET_ALL_DATA = gql`
  query Query {
    getAllData {
      results {
        id
        language
        word
        lexicalEntries {
          entries {
            senses {
              definitions
            }
          }
          lexicalCategory {
            text
            id
          }
        }
      }
    }
  }
`;

export const GET_SINGLE_DATA = gql`
  query Query($getSingleDataId: String) {
    getSingleData(id: $getSingleDataId) {
      results {
        id
        language
        word
        lexicalEntries {
          lexicalCategory {
            text
            id
          }
          text
          entries {
            etymologies
            senses {
              definitions
              etymologies
              examples {
                definitions
                text
              }
              shortDefinitions
            }
          }
        }
      }
    }
  }
`;
