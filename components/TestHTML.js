import React from 'react';
import {useState} from 'react'
import {NavLink} from 'react-router-dom'



function TestHtml(props) {
  let data = {
    testName:'Тест на знание HTML',
    questions:{
      title:['Что из этого контейнер?', 'Как обозначаются комментарии? ', 'Какой тег выведет курсив?',
       'Какой тег пишут в head?', 'Обязательно ли ставить alt в img?'],
      variants:[[{variant:'div', flag:true}, {variant:'a', flag:false}, {variant:'link', flag:false}],
              [{variant:'/*...*/', flag:false}, {variant:'<!--...-->', flag:true}, {variant:'// ...', flag:false}],
              [{variant:'a', flag:false}, {variant:'em', flag:true}, {variant:'cursive', flag:false}],
              [{variant:'div', flag:false}, {variant:'form', flag:false}, {variant:'title', flag:true}],
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
export default TestHtml
