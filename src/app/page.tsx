"use client";
import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import POTMCard from "@/components/POTMCard/POTMCard";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <POTMCard player={"Sgt_Chedders"}></POTMCard>
    </>
  );
}
