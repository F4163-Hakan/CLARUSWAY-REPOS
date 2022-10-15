import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  console.log(name, img, options);
  return (
    <Container style={{ background: "peachpuff" }} className="p-4 rounded-2">
      <Container>
        <Image src={img} width="70%"></Image>
        <h3 className="display-6">{name}</h3>
      </Container>
    </Container>
  );
};

export default Language;
