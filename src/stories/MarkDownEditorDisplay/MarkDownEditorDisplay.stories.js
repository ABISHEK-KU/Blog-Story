import React from "react";
import MarkDownEditorDisplay from './MarkDownEditorDisplay';

export default {
    title:'MarkDownEditorDisplay',
    component:MarkDownEditorDisplay
}

export const Small = () => <MarkDownEditorDisplay size='small'/>
export const Medium = () => <MarkDownEditorDisplay size='medium'/>
export const Large = () => <MarkDownEditorDisplay size='large'/>
