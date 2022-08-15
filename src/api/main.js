import request from "./core";
import format from "date-fns/format";

export const getPostList = (category) => {
  return request({ url: `/${category}_list` });
};

export const getExhibitList = () => {
  return request({ url: `/exhibition_list` });
};
export const createPost = (category, data) => {
  let number = "";
  request({
    method: "post",
    url: `/${category}/post`,
    data: {
      iduser: "111865899156782818991", //data.id.toString(),
      title: data.inputs.title,
      content: data.inputs.content,
      team: data.inputs.team,
      award: data.inputs.award,
      keyword: data.inputs.keyword,
      stack: data.inputs.stack,
      contestName: data.inputs.contestName,
      link_github: data.inputs.link_github,
      link_service: data.inputs.link_service,
      start_date: format(data.inputs.start_date, "yyyy-MM-dd"), //학생회
      end_date: format(data.inputs.end_date, "yyyy-MM-dd"),
      files: { img: undefined, file: undefined },
    },
  }).then((response) => {
    number = response.no;
  });
  return number;
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
      no: data.inputs.no.toString(),
      title: data.inputs.title,
      content: data.inputs.content,
      award: data.inputs.award,
      keyword: data.inputs.keyword,
      stack: data.inputs.stack,
      contestName: data.inputs.contestName,
      link_github: data.inputs.link_github,
      link_service: data.inputs.link_service,
      start_date: data.inputs.start_date, //학생회
      end_date: data.inputs.end_date,
      files: { img: undefined, file: undefined },
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

export const getSubscription = (user) => {
  return request({
    url: `/`,
    params: {
      iduser: "111865899156782818991",
    },
  });
};

export const postSubscription = (user, subscription, isSubscribe) => {
  request({
    method: "post",
    url: `/pushSubscription`,
    data: {
      iduser: "111865899156782818991",
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
      iduser: "111865899156782818991",
      type: type,
    },
  });
};

export const postBoardUnsubscription = (user, type) => {
  request({
    method: "post",
    url: `/pushSubscription/sub_cancel`,
    data: {
      iduser: "111865899156782818991",
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
