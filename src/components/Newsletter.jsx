import styled from 'styled-components';
import FormSection from './FormSection';

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

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100vh;
    min-width: 100vw;
    border-radius: 0px;
    padding: 0px;
  }
`;

const SvgWrapper = styled.div`
  width: 400px;
  height: 593px;
  background-image: url('/src/assets/images/ilustration.svg');
  border-radius: var(--border-radius-2);

  @media (max-width: 768px) {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 282px;
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
