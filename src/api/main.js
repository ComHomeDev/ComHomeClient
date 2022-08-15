import request from "./core";

export const getPostList = (category) => {
  return request({ url: `/${category}_list` });
};

export const getExhibitList = () => {
  return request({ url: `/exhibition` });
};
export const createPost = (category, data) => {
  console.log(data);
  let number = "";
  request({
    method: "post",
    url: `/${category}/post`,
    data: data,
  }).then((response) => {
    number = response.no;
  });
  return number;
};

export const readPost = (category, no, userId) => {
  return request({
    url: `/${category}_detail/${no.toString()}?iduser=${userId}`,
  });
};

export const updatePost = (category, data) => {
  console.log(data);
  request({
    method: "post",
    url: `/${category}_edit/update`,
    data: data,
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

export const getSubscription = (user) => {
  return request({
    url: `/`,
    params: {
      iduser: user.toString(),
    },
  });
};

export const postSubscription = (user, subscription, isSubscribe) => {
  request({
    method: "post",
    url: `/pushSubscription`,
    data: {
      iduser: user.toString(),
      subscription,
      bool: isSubscribe,
    },
  });
};

export const postBoardSubscription = (user, type) => {
  request({
    method: "post",
    url: `/pushSubscription/sub`,
    data: {
      iduser: user.toString(),
      type: type,
    },
  });
};

export const postBoardUnsubscription = (user, type) => {
  request({
    method: "post",
    url: `/pushSubscription/sub_cancel`,
    data: {
      iduser: user.toString(),
      type: type,
    },
  });
};

export const createComment = (postData, commentData) => {
  request({
    method: "post",
    url: `/edu_contest_comment/post`,
    data: {
      iduser: postData.iduser.toString(),
      content: commentData.text,
      edu_contest_no: postData.no.toString(), //글 아이디
      my_secret_check_box: commentData.check, //비밀 체크 여부
      my_anon_checkbox: commentData.anon,
    },
  }).then((response) => {
    return response;
  });
};

export const updateComment = (commentNo, commentData) => {
  request({
    method: "post",
    url: `/edu_contest_comment_edit/update`,
    data: {
      no: commentNo.toString(), //댓글 아이디
      content: commentData, //수정된 내용,
    },
  }).then((response) => {
    return response;
  });
};

export const deleteComment = (commentNo) => {
  request({
    method: "post",
    url: `/edu_contest_comment_edit/delete`,
    data: {
      no: commentNo.toString(), //댓글 아이디
    },
  }).then((response) => {
    return response;
  });
};

export const createRecomment = (commentNo, commentData) => {
  request({
    method: "post",
    url: `/edu_contest_comment/rec_update`,
    data: {
      no: commentNo.toString(), //댓글의 아이디
      content: commentData,
    },
  }).then((response) => {
    return response;
  });
};

export const deleteRecomment = (commentNo) => {
  request({
    method: "post",
    url: `/edu_contest_comment/rec_delete`,
    data: {
      no: commentNo.toString(), //댓글의 아이디
    },
  }).then((response) => {
    return response;
  });
};

export const postScrap = (data) => {
  request({
    method: "post",
    url: `/scrap/${data.board}`,
    data: {
      iduser: data.userId, //data.userId
      no: data.no, //게시글의 아이디
      type: data.board,
      title: data.title,
    },
  }).then((response) => {
    return response;
  });
};

export const postUnscrap = (data) => {
  request({
    method: "post",
    url: `/scrap/${data.board}_cancel`,
    data: {
      iduser: data.userId, //data.userId
      no: data.no, //게시글의 아이디
      type: data.board,
    },
  }).then((response) => {
    return response;
  });
};

export const getMypage = (userId) => {
  return request({
    url: `/mypage?iduser=${userId}`,
  });
};
