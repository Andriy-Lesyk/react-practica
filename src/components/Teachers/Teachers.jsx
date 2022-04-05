import React from 'react'
import { Title, TeacherList, Teacher, Name, Info, Skill, Btn } from "./Teachers.styles"
import { BsEmojiSmile } from "react-icons/bs"
import Paper from "../Paper/Paper"
import Button from "../Button/Button"
import tutors from "../../data/university.json"

function Teachers() {
    const click = () => { 
        console.log('hello')
    }
    return (
      <div>
            <Title><BsEmojiSmile />ПРЕПОДАВАТЕЛИ</Title>
                <TeacherList>
                {tutors.tutors.map(({ firstName, lastName, patronymic, phone, email, city, options, id }) =>
                    <Paper  key={id} gap={22}>
                        <Teacher >
                            <Name>{firstName} {lastName} {patronymic}
                            </Name>
                            <Info> {phone} {email} {city}</Info>
                            <Skill> {options}</Skill>   
                        </Teacher>
                        </Paper>
                    )}
                    
            </TeacherList>
            <Btn>ДОБАВИТЬ УЧИТЕЛЯ</Btn>
            <Button text={"Добавить Город"} OnClick={click}/>
            
      </div>
  )
}

export default Teachers


/*import React, { Component} from 'react'
import { Title, TeacherList, Teacher, Name, Info, Skill, Btn } from "./Teachers.styles"
import { BsEmojiSmile } from "react-icons/bs"
import Paper from "../Paper/Paper"
import Form from "../Form/Form"
import Button from "../Button/Button"
import tutors from "../../data/university.json"

export default class Teachers extends Component {
    click = () => {
        console.log('hello')
    }
    render() {
        return (
            <div>
                <Title><BsEmojiSmile />ПРЕПОДАВАТЕЛИ</Title>
                <TeacherList>
                    {tutors.tutors.map(({ firstName, lastName, patronymic, phone, email, city, options, id }) =>
                        <Paper key={id} gap={22}>
                            <Teacher >
                                <Name>{firstName} {lastName} {patronymic}
                                </Name>
                                <Info> {phone} {email} {city}</Info>
                                <Skill> {options}</Skill>
                            </Teacher>
                        </Paper>
                    )}
                    
                </TeacherList>
                <Btn>ДОБАВИТЬ УЧИТЕЛЯ</Btn>
                <Button text={"Добавить Город"} OnClick={this.click} />
                <Form />
            </div>
        )
    }

}*/