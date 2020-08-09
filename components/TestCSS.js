import React from 'react';
import {useState} from 'react'
import {NavLink} from 'react-router-dom'



function TestCss(props) {
  let data = {
    testName:'Тест на знание CSS',
    questions:{
      title:['Какой размер теста по умолчанию в теге <p>', 'Сколько значений принимает свойство border?',
       'Какого из данных свойств не существует?', 'С помощью чего можно менять стили в зависимости от параметров устройства? С помощью...',
        'Можно ли разделять css по разным файлам?'],
      variants:[[{variant:'16px', flag:true}, {variant:'15px', flag:false}, {variant:'14px', flag:false}],
              [{variant:'3', flag:true}, {variant:'1', flag:false}, {variant:'2', flag:false}],
              [{variant:'border-top-right', flag:false}, {variant:'border-top-bottom', flag:true}, {variant:'border-top-left', flag:false}],
              [ {variant:'псевдоклассов', flag:false}, {variant:'медиазапросов', flag:true}],
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
export default TestCss
