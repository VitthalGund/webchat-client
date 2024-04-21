import axios from "axios";

export const api = axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
});

export const login = async (data: { email: string; password: string }) => {
  try {
    const resp = await api.post(
      "/login/",
      {
        ...data,
      },
      {
        headers: { "Content-Type": "application/json" },
        // withCredentials: true,
      }
    );
    console.log(resp);
    return resp;
  } catch (error: any) {
    return error;
  }
};
export const register = async (data: {
  name: string;
  username: string;
  email: string;
  password1: string;
  password2: string;
  AdminAccount: string;
}) => {
  try {
    console.log("data");
    const resp = await api.post(
      "/register/",
      {
        ...data,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    console.log(resp);
    return resp;
  } catch (error: any) {
    return error;
  }
};

export const createRoom = async (
  token: string,
  data: {
    host: number;
    topic: string;
    name: string;
    description: string;
  }
) => {
  try {
    const resp = await api.post(
      `/create-room/`,
      {
        ...data,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(resp);
    return resp;
  } catch (error: any) {
    return error;
  }
};

export const updateRoomAPI = async (
  id: number,
  token: string,
  data: {
    topic: string;
    name: string;
    description: string;
  }
) => {
  console.log("updated data: ", data);
  try {
    const resp = await api.put(
      `/update-room/${id}/`,
      {
        ...data,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(resp);
    return resp;
  } catch (error: any) {
    return error;
  }
};

export const getAllRooms = async () => {
  try {
    const resp = await api.get("/rooms/");
    return resp;
  } catch (error: any) {
    return error.messsage;
  }
};
export const getAllRoomsCount = async () => {
  try {
    const resp = await api.get("/count/");
    return resp;
  } catch (error: any) {
    return error;
  }
};

export const getRoom = async (id: number, token: string) => {
  try {
    const resp = await api.get(`/room/${id}`, {
      // withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(resp.data);
    return resp;
  } catch (error: any) {
    return error;
  }
};
export const getTopics = async () => {
  try {
    const resp = await api.get(`/topics/`, {});
    return resp;
  } catch (error: any) {
    return error;
  }
};

export const deleteMessage = async (id: number, token: string) => {
  try {
    const resp = await api.delete(`/delete-message/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return resp;
  } catch (error: any) {
    return error;
  }
};

export const deleteRoom = async (id: number, token: string) => {
  try {
    console.log({ token, id });
    const resp = await api.delete(`/delete-room/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return resp;
  } catch (error: any) {
    return error;
  }
};

export const craeteMessage = async (
  id: number,
  token: string,
  data: { user_id: number; body: string }
) => {
  try {
    console.log({ id, token, data });
    const resp = await api.post(
      `/send/${id}/ `,
      {
        ...data,
      },
      {
        withCredentials: false,
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return resp;
  } catch (error: any) {
    return error;
  }
};
