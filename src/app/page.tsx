"use client";
import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import POTMCard from "@/components/POTMCard/POTMCard";
import Events from "@/components/Events/Events";
import Announcements from "@/components/Announcements/Announcements";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <POTMCard player={"Sgt_Chedders"}></POTMCard>
      <Events></Events>
      <Announcements></Announcements>
    </>
  );
}
