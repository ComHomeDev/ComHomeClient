import request from "./core";

export const getPostList = (category) => {
  console.log(category);
  return request({ url: `/${category}_list` });
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
      title: data.title,
      content: data.content,
      files: { img: null, file: null },
    },
  });
};

export const readPost = (category, no) => {
  return request({
    url: `/${category}_detail/${no.toString()}`,
  });
};

export const updatePost = (category, data) => {
  request({
    method: "post",
    url: `/${category}_edit/update`,
    data: {
      title: data.title,
      content: data.content,
    },
  });
};

export const deletePost = (category, data) => {
  request({
    method: "post",
    url: `/${category}_edit/delete`,
    data: {},
  });
};

export const getFiles = (filename) => {
  return request({ url: `/download/${filename}` });
};
