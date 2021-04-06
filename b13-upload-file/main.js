
const btnSelectFile = document.querySelector('.js-select-file');

// Trong React dùng useRef
const inputFile = document.querySelector('.js-input-file');

const imgEl = document.querySelector('.js-preview-image');
const uploadBtnEl = document.querySelector('.js-upload-avatar');
let currentUser = null;

btnSelectFile.addEventListener('click', function(evt) {
  inputFile.click();
})

const avatarUpload = {
  file: null,
  base64: ''
}

inputFile.addEventListener('change', function(evt) {
  const listFiles = evt.target.files;
  const file = listFiles[0];

  if (!file) {
    return;
  }

  // Kiểm tra type có phải là image hay không? file.type

  // Kiểm tra dung lượng file.size vượt quá giới hạn hay không?

  // Khi có Object File làm 2 việc
  // 1. Convert về dạng mã hoá base64 để user xem trước hình ảnh
  // 2. Khi người dùng nhấn nút submit -> Mới Gọi API

  const reader = new FileReader();

  reader.addEventListener("load", function (evt) {
    const imageUrlBase64 = evt.target.result;
    imgEl.src = imageUrlBase64;
    avatarUpload.file = file;
    avatarUpload.base64 = imageUrlBase64;
  }, false);

  reader.readAsDataURL(file);
})

// Setup Axios
const baseURL = 'http://learning-reactjs.xyz/wp-api/wp-json';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sZWFybmluZy1yZWFjdGpzLnh5elwvd3AtYXBpIiwiaWF0IjoxNjE3NzE3ODgzLCJuYmYiOjE2MTc3MTc4ODMsImV4cCI6MTYxODMyMjY4MywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.agVDCJ8Wj0SxVDcHpMHc7huZ_utoKlfop7eGnMC1RN0';

const api = {
  call() {
    return axios.create({
      baseURL,
    });
  },
  callWithToken() {
    return axios.create({
      baseURL,
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
}

api
  .callWithToken()
  .get('/wp/v2/users/me')
  .then(resUser => {
    currentUser = resUser.data;
  })

uploadBtnEl.addEventListener('click', async function() {
  if (!avatarUpload.file || !avatarUpload.base64) {
    return;
  }

  // Gọi API

  try {
    const formData = new FormData(); 

    formData.append('file', avatarUpload.file)
    const mediaIdOld = currentUser.simple_local_avatar.media_id;
    
    await api.callWithToken().delete(`/wp/v2/media/${mediaIdOld}?force=true`);
    const responseMedia = await api.callWithToken().post('/wp/v2/media', formData);
    const mediaId = responseMedia.data.id;
    const responseUser = await api.callWithToken().put('/wp/v2/users/me', {
      description: "06/04/2021 Demo thay đổi thông tin mô tả và avatar",
      simple_local_avatar: {
        media_id: mediaId
      }
    })
    console.log('responseUser', responseUser);
  } catch(err) {
    console.log('err', err);
  }
})