import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import iconList from '../assets/images/icon-list.svg';

const FormWrapper = styled.section`
  width: 376px;
  margin-top: 32.5px;
  margin-left: 30px;

  @media (max-width: 768px) {
    width: 100vw;
    max-width: 470px;
    min-width: 350px;
    margin-left: 0;
    margin-inline: auto;
    padding: 1rem 2rem 2rem 2rem;
  }

  h1 {
    font-family: inherit;
    font-size: 56px;
    line-height: 30px;
    font-weight: bold;
    color: #151515;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 45px;
      margin-top: 0;
    }
  }
  p {
    font-family: inherit;
    font-size: 1rem;
    line-height: 24px;
    font-weight: 400;
    color: #151515;
    margin-bottom: 24px;
  }
  ul {
    padding: 0;
    margin-bottom: 40px;
  }
  ul li {
    background: url(${iconList}) no-repeat left center;
    background-size: 21px;
    padding: 5px 10px 10px 37px;
    list-style: none;
    margin: 0;
    vertical-align: middle;

    @media (max-width: 768px) {
      padding: 10px 5px 5px 37px;
    }
  }
  label {
    color: #242742;
    font-weight: bold;
    font-size: 12px;
  }

  button {
    width: 100%;
    border: none;
    font-family: inherit;
    font-weight: bold;
    font-size: clamp(0.9rem, 1vw, 1rem);
    padding: 1.25em 4.1875em;
    background-color: #151515;
    color: #ffffff;
    border-radius: var(--border-radius-3);
    white-space: nowrap;
    cursor: pointer;
    :hover {
      background: linear-gradient(45deg, #1b7a6f, #1dbba9);
    }
  }
`;

const Input = styled.input`
  margin: 8px 0 24px 0;
  width: 100%;
  padding: 16px 24px;
  border-radius: var(--border-radius-3);
  border: 1px solid ${(props) => (props.error ? '#ff6155' : '#c5c5ca')};
  background-color: ${(props) => (props.error ? '#ff60551a' : 'transparent')};
  color: ${(props) => (props.error ? '#ff6155' : '#151515')};
  font-size: 1rem;
  :focus {
    outline: 1px solid ${(props) => (props.error ? '#ff6155' : '#151515')};
  }
  ::placeholder {
    color: ${(props) => (props.error ? '#ff6155' : '#c5c5ca')};
    font-size: 1rem;
  }
`;

const ErrorStyle = styled.small`
  color: #ff6155;
  font-weight: bold;
  float: right;
`;

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Valid email required')
    .required('This field is required'),
});

export default function FormSection() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    navigate('/thankyou');
  };

  return (
    <FormWrapper>
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>Email address</label>
        {errors.email && <ErrorStyle>{errors.email.message}</ErrorStyle>}
        <Input
          {...register('email')}
          type='text'
          placeholder='email@company.com'
          error={errors.email ? true : false}
        />

        <button>Subscribe to monthly newsletter</button>
      </form>
    </FormWrapper>
  );
}
