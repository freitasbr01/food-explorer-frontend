import { Container } from './styles';
import { PiUploadSimple } from "react-icons/pi";


export function ImgUpload({ descriptionUpload, ...rest }) {
  return (
    <Container {...rest}>

      <input id="upload" type="file" />
      
      <label htmlFor="upload">
      <PiUploadSimple />
        {descriptionUpload}
      </label>

    </Container>
  )
}