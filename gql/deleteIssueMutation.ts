import { gql } from 'urql'

export const DeleteIssueMutation = gql`
  mutation DeleteIssue($input: DeleteIssueInput!) {
    deleteIssue(input: $input) {
      id
    }
  }
`
