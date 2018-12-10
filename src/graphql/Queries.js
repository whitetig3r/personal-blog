import gql from 'graphql-tag'

export const fetch_post = gql`query{
    posts{
        title
        postpreview
        author
        publishdate
        article
    }
}`