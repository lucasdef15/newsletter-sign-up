import styled from 'styled-components';
import FormSection from './FormSection';
import ilustration from '../assets/images/ilustration.svg';

const Wrapper = styled.div`
  width: 100vw;
  max-width: 904px;
  min-width: 730px;
  margin-inline: auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: var(--border-radius-1);
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  box-shadow: 0px 8px 0px #000000;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    min-height: 100vh;
    min-width: 100vw;
    border-radius: 0px;
    padding: 0px;
  }
`;

const SvgWrapper = styled.div`
  width: 400px;
  height: 593px;
  background-image: url(${ilustration});
  border-radius: var(--border-radius-2);

  @media (max-width: 768px) {
    width: 100%;
    height: 282px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 0px 0px 20px 20px;
    overflow: hidden;
  }
`;

export default function Newsletter() {
  return (
    <Wrapper>
      <FormSection />
      <SvgWrapper />
    </Wrapper>
  );
}
