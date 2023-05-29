import styled from 'styled-components';
import SuccessIcon from './SuccessIcon';
import { useNavigate } from 'react-router-dom';

const ThankyouWrapper = styled.div`
  width: 470px;
  background-color: #ffffff;
  border-radius: var(--border-radius-1);
  padding: 65px;
  display: grid;

  h2 {
    font-size: 45px;
    margin-top: 2rem;
    margin-bottom: 1.3rem;
  }
  p {
    font-size: 0.9rem;
  }
  button {
    width: 100%;
    height: 10%;
    padding: 16px 0;
    border-radius: var(--border-radius-3);
    border: none;
    background-color: #151515;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1.3rem;
    align-self: flex-end;
  }
  @media (max-width: 600px) {
    height: 100vh;
    width: 100vw;
    border-radius: 0px;
    padding: 20px;
    padding-top: 10rem;
  }
`;

const ButtonWrapper = styled.div`
  align-self: end;
`;

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <ThankyouWrapper>
      <div>
        <SuccessIcon />
        <h2>Thanks for subscription!</h2>
        <p>
          A confirmation email has been sent to{' '}
          <strong>ash@loremcompany.com</strong>. Please open it and click the
          button inside to confirm your subscription
        </p>
      </div>
      <ButtonWrapper>
        <button onClick={() => navigate('/')}>Dismiss message</button>
      </ButtonWrapper>
    </ThankyouWrapper>
  );
}
