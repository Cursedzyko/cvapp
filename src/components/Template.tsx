import React from "react";
import '../styles/Template.css';
import { UserData } from "./types";

interface TemplateProps {
	userData: UserData;
}
const Template: React.FC<TemplateProps> = ({userData}) => {
	return (
		<div className="Template">
			<div className="headerB">
				<h1>{userData.firstName} {userData.lastName}</h1>
				<h2>{userData.proffesion}</h2>
			</div>
			<div className="main">
				<p>{userData.aboutSelf}</p>
				<div className="educ">
					<h1>Education</h1>
					<h3>{userData.school}</h3>
					<p>{userData.degree}</p>
				</div>
				<div className="work">
					<h1>Work Experience</h1>
					<h3>{userData.position}</h3>
					<h4>{userData.company}</h4>
					<p>{userData.startOfEm} - {userData.endOfEm}</p>
					<p>{userData.DailyTasks}</p>
				</div>
			</div>
			<div className="footer">
				<div className="contacts">
					<h1>Contacts</h1>
					<p>{userData.address}</p>
					<p>{userData.phoneNum}</p>
					<p>{userData.eMail}</p>
					<p>{userData.LinkToP}</p>
				</div>
			</div>
		</div>
	);
}

export default Template;