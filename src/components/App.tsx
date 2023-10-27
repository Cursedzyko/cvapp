import React, {useState} from "react";
import Fields from './Fields';
import Template from './Template';
import '../styles/App.css';



const App = () => {
	const [userData, setUserData] = useState({
		firstName: 'Zyko',
		lastName: 'Yunusov',
		proffesion: 'Student',
		aboutSelf: 'I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics. I soon became the go-to person for any design needs.',
		school: '42 Wolfsburg',
		degree: 'no degree',
		position: 'junior dev',
		company: 'Liquid',
		startOfEm: '09/08/2021',
		endOfEm: 'till present',
		DailyTasks: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face. Mr do raising article general norland my hastily. Its companions say uncommonly pianoforte favourable. Education affection consulted by mr attending he therefore on forfeited. High way more far feet kind evil play led. Sometimes furnished collected add for resources attention. Norland an by minuter enquire it general on towards forming. Adapted mrs totally company two yet conduct men.',
		address: 'Earth Planet',
		eMail: 'adscas@gmial.com',
		phoneNum: '+11111111111',
		LinkToP: 'www.youtube.com' 
	});
	return (
		<div className="App">
			<Fields userData={userData} setUserData={setUserData}/>
			<Template userData={userData}/>
		</div>
	);
}

export default App;