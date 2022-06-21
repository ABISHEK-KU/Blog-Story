import React from "react";
import MarkDownViewer from './MarkDownViewer';

export default {
    title: 'MarkDownViewer',
    component: MarkDownViewer
}

export const Small = () => <MarkDownViewer size='small' />
export const Medium = () => <MarkDownViewer size='medium' />
export const Large = () => <MarkDownViewer size='large' />
