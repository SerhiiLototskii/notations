import React from 'react'
import {action} from '@storybook/addon-actions'
import {Notation} from "./notation";
import {v1} from "uuid";

export default {
    title: 'Notation Stories',
    component: Notation
}

const removeCallback = action('Remove Button inside Notation clicked');
const changeDescriptionCallback = action('Status changed inside Notation');
const changeTitleCallback = action('Title changed inside Notation');

export const NotationBaseExample = (props: any) => {
    return (
        <div>
           <Notation notationsTitle={'Сегодня отличная погода'}
                     description={'Отличный шанс побывать на природе'}
                     notationId={v1()}
                     removeNotation={removeCallback}
                     changeNotationTitle={changeTitleCallback}
                     changeNotationDescription={changeDescriptionCallback}/>
           <Notation notationsTitle={'Концерт Макса Коржа в варшаве'}
                     description={'Через три дня концерт, мы с друзьями уже купили билеты и завтра выезжаем'}
                     notationId={v1()}
                     removeNotation={removeCallback}
                     changeNotationTitle={changeTitleCallback}
                     changeNotationDescription={changeDescriptionCallback}/>
        </div>)
}
