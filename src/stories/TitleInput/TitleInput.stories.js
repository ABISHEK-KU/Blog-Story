import React from "react";
import TitleInput from "./TitleInput";

export default {
    title:'TitleInput',
    component:TitleInput
}

export const Small = () => <TitleInput size='small'/>
export const Medium = () => <TitleInput size='medium' />
export const Large = () => <TitleInput size='large'/>