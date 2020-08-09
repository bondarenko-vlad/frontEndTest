import React from 'react';

import {useState} from 'react'
import {NavLink} from 'react-router-dom'



function Test(props) {
  let data = {
    testName:'Тест на знание javascript',
    questions:{
      title:['Как можно объявить переменную?', 'Функция - это...', 'Что из этого метод массива?', 'Как объявить функцию?', 'Можно ли с помощью js менять css?'],
      variants:[[{variant:'const', flag:true}, {variant:'int', flag:false}, {variant:'${}', flag:false}],
              [{variant:'Объект', flag:true}, {variant:'Тип данных', flag:false}, {variant:'Матрица', flag:false}],
              [{variant:'parseInt()', flag:false}, {variant:'map()', flag:true}, {variant:'arrayTransform()', flag:false}],
              [{variant:'function name{ }', flag:false}, {variant:'let name ={}', flag:false}, {variant:'let name=()=>{}', flag:true}],
              [{variant:'Нет', flag:false}, {variant:'Да', flag:true}]


            ],
    },

  }
  let [count, getCount] = useState(0)
    let [askNumber, nextAsk] = useState(0)




  return (

  <div className='data'>
  { askNumber == data.questions.title.length ?
      <p>Правильных ответов: <span>{count}</span> из {data.questions.title.length} <br/>
        <NavLink className='link' to='/home'>Перейти к выбору тестов</NavLink>
       </p> :
        <div>
       <b><p className='title'>{data.testName}</p></b>
      <p className='numQ'>Вопрос номер <span>{askNumber+1}</span> из  {data.questions.title.length}</p>
    <p> {data.questions.title[askNumber]}</p>

        {data.questions.variants[askNumber]
        .map( e => <p className='answer' onClick={()=> {
          nextAsk(askNumber+1)
          e.flag ? getCount(count+1) : console.log(count)

        }}> {e.variant}</p> )}

            </div>

   }


    </div>
  );
}
export default Test
