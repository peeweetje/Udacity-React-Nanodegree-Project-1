import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowBack from '../../icons/arrow-back.svg'

export const SearchBooksBar = styled.div`
 position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
`
export const CloseSearch = styled(Link)`
display: block;
  top: 1.25rem;
  left: 1rem;
  width: 3.125rem;
  height: 3.375rem;
  background: #eee;
  background-image: url(${ArrowBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1.75rem;
  font-size: 0;
`

export const SearchBooksInputWrapper = styled.div`
 flex: 1;
 background: #03a9f4;

input {
  width: 100%;
  padding: 1rem 0.625rem;
  font-size: 1.25rem;
  border: none;
  outline: none; 
}
`
export const SearchBooksResults = styled.div`
padding: 5rem 0.625rem 1.25rem;
`