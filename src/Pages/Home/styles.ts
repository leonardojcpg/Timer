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

export const FormContainer = styled.div`
  width: 100%;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['grey-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['grey-500']};
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['grey-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['grey-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  background: transparent;
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  background: transparent;
  width: 4rem;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['grey-100']};
  width: 100%;
  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['grey-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 6rem;
  overflow: hidden;
  justify-content: center;
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
    cursor: not-allowed;
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
    cursor: not-allowed;
  }
`
