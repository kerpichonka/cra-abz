const validateName = (name) => {
  return name.length >= 2 && name.length <= 60;
}

const validateEmail = (email) => {
  const pattern = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/
  // const pattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$)/
  return pattern.test(email);
}

const validatePhone = (phone) => {
  const pattern = /^[\+]{0,1}380([0-9]{9})$/;
  return pattern.test(phone);
}

const validateFile = async (file) => {
  if (!file)
    return false;

  const isValidSize = checkImageSize(file)
  const isValidDimensions = await checkImageDimensions(file)

  return isValidSize && isValidDimensions
}

// Файл должен быть меньше 5 МБ
const checkImageSize = image => {
  const size = image.size / 1024;
  const limit = 5 * 1024;
  if (size > limit) {
    return false;
  }

  return true
}

// Размер картинки не больше 70 x 70
const checkImageDimensions = image => new Promise((res) => {
  let img = new Image()
  img.src = URL.createObjectURL(image)
  
  img.onload = () => {
    if (img.width > 70 || img.height > 70)
    {
      return res(false)
    }

    return res(true)
  }
})

export {
  validateName,
  validateEmail,
  validatePhone,
  validateFile
}