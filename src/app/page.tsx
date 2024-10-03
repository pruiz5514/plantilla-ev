"use client"
import { increment } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  return (
    <main>
      <h1>total: {count}</h1>
      <Button onClick={()=> dispatch(increment())}>Increment</Button>
      <Input placeholder='Correo electronico' type='email' name='email'/>
    </main>
  );
}