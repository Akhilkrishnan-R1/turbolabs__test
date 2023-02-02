{/*graphql queries*/}
import { gql } from "@apollo/client";

{/*Query to get list of all characters*/}
export const GET_CHARACTERS = gql`
query GetCharacters($filter: FilterCharacter, $page: Int) {
    characters(filter: $filter, page: $page) {
      info {
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;


{/*Query to get list of all episodes*/}
export const GET_EPISODES = gql`
query GetEpisodes($filter: FilterEpisode, $page: Int) {
    episodes(filter: $filter, page: $page) {
      info {
        pages
      }
      results {
        id
        name
        episode
        air_date
      }
    }
  }
`;


{/*Query to get details of a single character*/}
export const GET_SINGLE_CHARACTER = gql`
query GetSingleCharacter($characterId: ID!) {
    character(id: $characterId) {
      name
      image
      species
      status
      gender
      episode {
        id
        name
        episode
        air_date
      }
      location {
        name
      }
      origin {
        name
      }
    }
  }
`;


{/*Query to get details of a single episode*/}
export const GET_SINGLE_EPISODE = gql`
query GetSingleEpisode($episodeId: ID!) {
    episode(id: $episodeId) {
      name
      episode
      air_date
      characters {
        image
        id
        name
      }
    }
  }
`;