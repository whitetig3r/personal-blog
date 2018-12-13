import gql from 'graphql-tag'

export const fetch_post = gql`query{
  posts{
    title
    author
    postpreview
    publishdate
    article
  }
}`

export const fetch_specific_post = gql`query ($title: String){
  posts(where:{
    title: $title
  }){
    title
    author
    postpreview
    publishdate
    imageHeaderLink
    article
  }
}`