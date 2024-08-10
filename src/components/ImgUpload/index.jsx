import { Container } from './styles';
import { PiUploadSimple } from "react-icons/pi";


export function ImgUpload({ image, alt, handleChangeImage, descriptionUpload, ...rest }) {
  return (
    <Container {...rest}>
      <input
        id="image_plate"
        type="file"
        onChange={handleChangeImage}
      />
      
      <label htmlFor="image_plate">
        <PiUploadSimple />
        <div className="description_upload">{descriptionUpload}</div>
        <div className="truncated-text">{image}</div>
      </label>

    </Container>
  )
}