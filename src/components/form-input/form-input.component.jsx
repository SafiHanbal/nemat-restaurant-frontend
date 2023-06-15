import { Container, Label, Input, ErrorText } from './form-input.styles';

const FormInput = ({ label, error, ...inputProps }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input {...inputProps} />
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default FormInput;
