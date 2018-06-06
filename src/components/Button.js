import styled from 'styled-components';

export default styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 1rem;
  background: ${props => (props.primary ? props.theme.primary : 'transparent')};
  color: ${props =>
    props.primary ? props.theme.secondary : props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: box-shadow ease 0.3s, opacity ease 0.3s;

  &:hover {
    box-shadow: 2px 5px 12px rgba(0, 0, 0, 0.15);
    opacity: 0.7;
  }
`;
