import { baseApi } from "../baseApi";

export const extendedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query<any, any>({
      query: ({ courseId, moduleId }) => ({
        url: `/api/v1/course/${courseId}/module-exercises/${moduleId}`,
        method: "get",
      }),
      providesTags: ["messages"],
    }),
    sendMessage: builder.mutation<any, any>({
      query: ({ id, token, phone, message }) => ({
        url: `waInstance${id}/sendMessage/${token}`,
        method: "POST",
        data: { chatId: `${phone}@c.us`, message },
      }),
    }),
  }),
});

export const { useGetMessagesQuery, useSendMessageMutation } = extendedApi;
