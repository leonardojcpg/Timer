import styled from 'styled-components'

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
