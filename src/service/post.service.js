import appelAxios from "../requette";

const b = document.cookie
  .split(";")
  .map(cookie => cookie.split("="))
  .reduce(
    (accumulator, [key, value]) => ({
      ...accumulator,
      [key.trim()]: decodeURIComponent(value),
    }),
    {}
  );

class postService {
  getAllPost() {
    return appelAxios.get("/posts");
  }
  getOnePost(data) {
    return appelAxios.post("/post/:id", data, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + b.token,
      },
    });
  }

  // createPost (data) {
  //     return appelAxios.post("/post/", data)
  // }
  getOneUser(data) {
    return appelAxios.post("/users", data, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + b.token,
      },
    });
  }
  getAOneComment(data) {
    return appelAxios.post("/post", data, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + b.token,
      },
    });
  }
  createComment(data) {
    const postData = new FormData();
    postData.append("fk_postId", data.fk_postId);
    postData.append("content", data.content);
    postData.append("title", data.title);
    postData.append("image", data.image_url);
    postData.append("UsersCom", data.UsersCom);
    return appelAxios.post("post/comments", postData);
  }
  adminC(data) {
    return appelAxios.post("/admin", data, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + b.token,
      },
    });
  }
  deletePost(data) {
    return appelAxios.post("/delete", data, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + b.token,
      },
    });
  }
  deleteCom(data) {
    return appelAxios.post("/delete/com", data, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + b.token,
      },
    });
  }
  deleteUser(data) {
    return appelAxios.post("/delete/user", data, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + b.token,
      },
    });
  }
  createPost(data) {
    const postData = new FormData();
    postData.append("title", data.title);
    postData.append("Users_Id", data.Users_Id);
    postData.append("image", data.image_url);
    postData.append("message", data.message);
    console.log(data.image_url);
    return appelAxios.post("/upload", postData, {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: "Bearer " + b.token,
      },
    });
  }

  updatePost(data) {
    const postData = new FormData();
    postData.append("title", data.title);
    postData.append("id", data.id);
    postData.append("image", data.image_url);
    postData.append("message", data.message);
    return appelAxios.put(`/post/${data.id}/modify`, postData, {
    
    });
  }
}
export default new postService();
