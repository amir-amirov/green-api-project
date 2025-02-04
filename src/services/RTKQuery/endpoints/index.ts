import { baseApi } from "../baseApi";

export const extendedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query<any, any>({
      query: ({ id, token }) => ({
        url: `waInstance${id}/receiveNotification/${token}`,
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
      //   invalidatesTags: ["messages"],
    }),
    deleteFromQueue: builder.mutation<any, any>({
      query: ({ id, token, receiptId }) => ({
        url: `waInstance${id}/deleteNotification/${token}/${receiptId}`,
        method: "DELETE",
      }),
      //   invalidatesTags: ["messages"],
    }),
    setSetting: builder.mutation<any, any>({
      query: ({ id, token }) => ({
        url: `/waInstance${id}/setSettings/${token}`,
        method: "POST",
        data: {
          webhookUrl: "",
          outgoingWebhook: "yes",
          stateWebhook: "yes",
          incomingWebhook: "yes",
        },
      }),
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useSendMessageMutation,
  useDeleteFromQueueMutation,
  useSetSettingMutation,
} = extendedApi;
