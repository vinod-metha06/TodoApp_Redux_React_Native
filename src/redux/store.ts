import { configureStore } from "@reduxjs/toolkit";
import  {todoreducer}  from "./reducer";

export const store=configureStore({reducer:todoreducer});