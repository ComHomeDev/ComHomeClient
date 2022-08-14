import request from "./core";

export const getPostList = (category) => {
  return request({ url: `/${category}_list` });
};

export const getSubscription = () => {
  return request({ url: `/` });
};

export const createPost = (category, data) => {
  request({
    method: "post",
    url: `/${category}_write`,
    data: {
      title: data.title,
      content: data.content,
    },
  });
};

export const createCouncilPost = (category, data) => {
  request({
    method: "post",
    url: `/${category}/post`,
    data: {
      id: data.id,
      title: data.title,
      content: data.content,
      files: { img: null, file: null },
    },
  }).then((response) => {
    return response.data;
  });
};

export const readPost = (category, no) => {
  return request({
    url: `/${category}_detail/${no.toString()}`,
  });
};

export const updatePost = (category, data) => {
  console.log(data);
  request({
    method: "post",
    url: `/${category}_edit/update`,
    data: {
      no: data.no,
      title: data.title,
      content: data.content,
    },
  });
};

export const deletePost = (category, data) => {
  request({
    method: "post",
    url: `/${category}_edit/delete`,
    data: {
      no: data,
    },
  });
};

export const getFiles = (filename) => {
  return request({ url: `/download/${filename}` });
};

export const getPublicKey = () => {
  return request({ url: `/publicKey` });
};

export const postSubscription = (user, subscription) => {
  request({
    method: "post",
    url: `/pushSubscription`,
    data: {
      iduser: user,
      subscription,
    },
  });
};

export const postBoardSubscription = (user, board, isSubscribe) => {
  request({
    method: "post",
    url: `/pushSubscription`,
    data: {
      iduser: user,
      board: board,
      isSubscribe: isSubscribe,
    },
  });
};

export const createComment = (postData, commentData) => {
  request({
    method: "post",
    url: `/api/edu_contest_comment_write`,
    data: {
      iduser: postData.iduser,
      content: commentData.text,
      edu_contest_no: postData.no, //글 아이디
      my_secret_check_box: commentData.check, //비밀 체크 여부
      my_anon_checkbox: commentData.anon,
    },
  }).then((response) => {
    return response;
  });
};
