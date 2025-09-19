import { GraphQLClient } from 'graphql-request'
export function request ({ query, variables, includeDrafts, excludeInvalid }) {
  const headers = {
    authorization: 'Bearer 84799e49b3c7e8b2e626a9af5b4221'
  }
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true'
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true'
  }
  const client = new GraphQLClient('https://graphql.datocms.com', { headers })
  return client.request(query, variables)
}
