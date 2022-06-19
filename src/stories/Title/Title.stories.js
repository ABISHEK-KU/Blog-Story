import React, { Component } from "react";
import Title from "./Title";

export default {
    title:'Title',
    component:Title
}

export const Small = () => <Title size='small'/>
export const Medium = () => <Title size='medium' />
export const Large = () => <Title size='large'/>