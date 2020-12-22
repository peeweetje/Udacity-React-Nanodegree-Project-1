import styled from 'styled-components'


export const BookShelfs = styled.div`
 padding: 0 0.625rem 1.25rem;

 @media (min-width: 37.5rem) {
    padding: 0 1.25rem 2.5rem;
}
`
export const BookShelfTitle = styled.h2`
border-bottom: 0.0625rem solid #03a9f4;
`
export const BookShelfBooks = styled.div`
text-align: center;
`
export const BooksGrid = styled.ol`
 list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
  padding: 0.625rem 0.9375rem;
  text-align: left;
}
`