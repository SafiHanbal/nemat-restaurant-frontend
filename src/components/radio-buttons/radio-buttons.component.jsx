import {
  Container,
  Label,
  RadioButton,
  Checkmark,
} from './radio-buttons.styles';

const RadioButtons = ({ name, info, handleChange }) => {
  return (
    <Container>
      {info.map((item) => (
        <Label key={item.value}>
          <RadioButton
            type="radio"
            name={name}
            value={item.value}
            onChange={handleChange}
          />
          <Checkmark />
          <p className="paragraph">{item.name}</p>
        </Label>
      ))}
    </Container>
  );
};

export default RadioButtons;
