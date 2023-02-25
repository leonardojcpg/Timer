import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const StartCountdownButton = styled.button`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;
  background: ${(props) => props.theme['green-500']};

  color: ${(props) => props.theme['grey-100']};

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }

  &:not(:disabled):hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

export const StopCountdownButton = styled.button`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;
  background: ${(props) => props.theme['red-500']};

  color: ${(props) => props.theme['grey-100']};

  &:hover {
    background: ${(props) => props.theme['red-700']};
  }

  &:not(:disabled):hover {
    opacity: 0.7;
    cursor: pointer;
  }
`
