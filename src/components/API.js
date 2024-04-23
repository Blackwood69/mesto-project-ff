const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-11",
    headers: {
      authorization: "e6c162f3-390b-4ee4-adf5-c00ed65f45ca",
      "Content-Type": "application/json",
    },
  };
  
  function response(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`HTTP error! Status: ${res.status}`);
  }
  
  function getUserInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    })
    .then(response);
  }
  
  function getCard() {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    })
    .then(response);
  }
  
  function patchUserInfo(userName, userAbout) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      }),
    })
    .then(response);
  }
  
  function patchAvatar(avatarURL) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        avatar: avatarURL,
      }),
    })
    .then(response);
  }
  
  function postNewCard(nameCard, linkCard) {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: nameCard,
        link: linkCard,
      }),
    })
    .then(response);
  }
  
  function putLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: config.headers,
    })
    .then(response);
  }
  
  function deleteOwnCard(cardId) {
      return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: config.headers,
      })
      .then(response);
    }
  
  function deleteLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    })
    .then(response);
  }
  
  export { getUserInfo, getCard, patchUserInfo, patchAvatar, postNewCard, deleteOwnCard, putLike, deleteLike };