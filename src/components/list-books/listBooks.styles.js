import styled from 'styled-components'
import AddIcon from '../../icons/add.svg'

export const ListBooksContents = styled.div`
 padding: 0 0 5rem;
  flex: 1;
`

export const OpenSearch = styled.div`
 position: fixed;
 right: 1.5625rem;
 bottom: 1.5625rem;

  a {
  display: block;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  background:#4b5179;
  background-image: url(${AddIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.75rem;
  box-shadow: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16), 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.23);
  font-size: 0;
}
`