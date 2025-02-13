import { create } from "zustand";
import axiosInstance from "./lib/axios";
import toast from "react-hot-toast";


export const useStore = create((set, get) => ({
  authUser: null,
  totalIncome:null,
  totalBudget:null,
  totalExpense:null,
  setUser : (userdata) => {set((state) => ({ authUser: userdata }))},
  getMonthly: async () => {
    const data = await axiosInstance.get("/expenseRoute/getmonthly")
    console.log(data);
    set({totalIncome:data.data.totalIncome})
    set({totalBudget:data.data.totalBudget})
    set({totalExpense:data.data.totalExpense})
  }
  
  // checkAuth: async () => {
  //   try {
  //     const res = await axiosInstance.get("/auth/check");

  //     set({ authUser: res.data });
  //   } catch (error) {
  //     console.log("Error in checkAuth:", error);
  //     set({ authUser: null });
  //   } finally {
  //     set({ isCheckingAuth: false });
  //   }
  // },

  // signup: async (data) => {
  //   set({ isSigningUp: true });
  //   try {
  //     const res = await axiosInstance.post("/auth/signup", data);
  //     set({ authUser: res.data });
  //     toast.success("Account created successfully");
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   } finally {
  //     set({ isSigningUp: false });
  //   }
  // },

  // login: async (data) => {
  //   set({ isLoggingIn: true });
  //   try {
  //     const res = await axiosInstance.post("/auth/login", data);
  //     set({ authUser: res.data });
  //     toast.success("Logged in successfully");

  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   } finally {
  //     set({ isLoggingIn: false });
  //   }
  // },

//   logout: async () => {
//     try {
//       await axiosInstance.post("/auth/logout");
//       set({ authUser: null });
//       toast.success("Logged out successfully");
//       get().disconnectSocket();
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   },

//   updateProfile: async (data) => {
//     set({ isUpdatingProfile: true });
//     try {
//       const res = await axiosInstance.put("/auth/update-profile", data);
//       set({ authUser: res.data });
//       toast.success("Profile updated successfully");
//     } catch (error) {
//       console.log("error in update profile:", error);
//       toast.error(error.response.data.message);
//     } finally {
//       set({ isUpdatingProfile: false });
//     }
//   },

//   connectSocket: () => {
//     const { authUser } = get();
//     if (!authUser || get().socket?.connected) return;

//     const socket = io(BASE_URL, {
//       query: {
//         userId: authUser._id,
//       },
//     });
//     socket.connect();

//     set({ socket: socket });

//     socket.on("getOnlineUsers", (userIds) => {
//       set({ onlineUsers: userIds });
//     });
//   },
//   disconnectSocket: () => {
//     if (get().socket?.connected) get().socket.disconnect();
//   },
}));