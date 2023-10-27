import React from "react";
import '../styles/Fields.css';
import { UserData } from "./types";

const Headerbox = () => {
	return (
		<div className="HeaderBox">
			<div className="DownloadPart">
				<h1>Resume.oi</h1>
				<div className="IconBox">
					<button>
							Here will be image
					</button>
					<button>
						Here will be image
					</button>
				</div>
			</div>
			<div className="Auth">
				<span>Created By</span>
				<a href="https://github.com/Cursedzyko">
					<p>Img</p>	
					<span>Zafarbek Yunusov</span>
				</a>
			</div>
		</div>
	);
}

// const ColorsBox = () => {
// 	return (
// 		<div className="ColorsBox">
// 			<div className="topColors">
// 				<h2>

// 					"Colors"</h2>
// 			</div>
// 			<div className="bottomColors">
// 			</div>
// 		</div>
// 	);
// }

const PersonalInfo: React.FC<PersonalInfoProps> = ({userData, setUserData})  => {
	return (
		<div className="PersonalInfo">
			{/* <img src="./pd.png" alt="Personal Data" /> */}
			<h2>
				<svg viewBox="0 0 576 512" className="PD">
    				<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>    
				</svg>
				Personal Data
			</h2>
			<div className="FullName">
				<input type="text" 
						placeholder="First Name" 
						maxLength={15}
						onChange={(e) => setUserData(prevState =>({...prevState, firstName: e.target.value}))}/>
				<input type="text" 
				placeholder="Last Name" 
				maxLength={13} 
				onChange={(e) => setUserData(prevState => ({
					...prevState, lastName: e.target.value
				}))}/>
			</div>
			<div className="bottomPInfo">
				<input type="text" 
				placeholder="Proffesion" 
				maxLength={15}
				onChange={(e) => setUserData(prevState => ({
					...prevState, proffesion: e.target.value
				}))}/>
				{/* imgplaceholder */}
				<div></div>
				<textarea placeholder="Tell something about yourself" 
				maxLength={520} 
				cols={30} 
				rows={6}
				onChange={(e) => setUserData(prevState => ({
					...prevState, aboutSelf: e.target.value
				}))}></textarea>
			</div>
		</div>
	);
}

const Education: React.FC<EducationProps> = ({userData, setUserData}) => {
	return (
		<div className="Education">
			<h2>
			<svg xmlns="http://www.w3.org/2000/svg" className="ED" viewBox="0 0 640 512">
				<path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
			</svg>
				Education
			</h2>
			<input type="text" placeholder="School" 
			onChange={(e) => setUserData(prevState => ({
				...prevState, school: e.target.value
			}))}/>
			<input type="text" placeholder="Degree" 
			onChange={(e) => setUserData(prevState => ({
				...prevState, degree: e.target.value
			}))}/>
		</div>
	);
}

const WorkEx : React.FC<WordExProps>= ({userData, setUserData}) => {
	return (
		<div className="WorkEx">
			<h2>
			<svg xmlns="http://www.w3.org/2000/svg" className="WE"  viewBox="0 0 512 512">
				<path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/>
			</svg>
				Work Experience</h2>
			<input type="text" placeholder="Position" 
			onChange={(e) => setUserData(prevState => ({
				...prevState, position: e.target.value
			}))}/>
			<input type="text" placeholder="Company" 
			onChange={(e) => setUserData(prevState => ({
				...prevState, company: e.target.value
			}))}/>
			<input type="text" placeholder="Start of employment" 
			onChange={(e) => setUserData(prevState => ({
				...prevState, startOfEm: e.target.value
			}))}/>
			<input type="text" placeholder="End of employment"
			onChange={(e) => setUserData(prevState => ({
				...prevState, endOfEm: e.target.value
			}))}/>
			<textarea  placeholder="Yout main occupation, daily task and work held" 
			cols={30} 
			rows={6}
			maxLength={520}
			onChange={(e) => setUserData(prevState => ({
				...prevState, DailyTasks: e.target.value
			}))}></textarea>
		</div>
	);
}

const Contacts : React.FC<ContactsProps> = ({userData, setUserData}) => {
	return (
		<div className="Contacts">
			<h2>
			<svg xmlns="http://www.w3.org/2000/svg" className="CO" viewBox="0 0 512 512">
				<path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"/>
			</svg>
				Contacts
			</h2>
			<input type="text" placeholder="Address" 
			onChange={(e) => setUserData(prevState => ({
				...prevState, address: e.target.value
			}))}/>
			<div className="middleCon">
				<input type="text" placeholder="E-Mail" 
				onChange={(e) => setUserData(prevState => ({
					...prevState, eMail: e.target.value
				}))}/>
				<input type="text" placeholder="Phone number" 
				onChange={(e) => setUserData(prevState => ({
					...prevState, phoneNum: e.target.value
				}))}/>
			</div>
			<input type="text" placeholder="Link to portfolio" 
			onChange={(e) => setUserData(prevState => ({
				...prevState, LinkToP: e.target.value
			}))}/>
		</div>
	);
}

interface ContactsProps {
	userData: UserData;
	setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

interface WordExProps {
	userData: UserData;
	setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

interface EducationProps {
	userData: UserData;
	setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

interface PersonalInfoProps {
	userData: UserData;
	setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

interface FieldsProps {
	userData: UserData;
	setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}


const Fields: React.FC<FieldsProps> = ({userData, setUserData})  => {
	return (
		<div className="Fields">
			<Headerbox />
			{/* <ColorsBox /> */}
			<PersonalInfo userData={userData} setUserData={setUserData} />
			<Education userData={userData} setUserData={setUserData}/>
			<WorkEx userData={userData} setUserData={setUserData}/>
			<Contacts userData={userData} setUserData={setUserData}/>
		</div>
	);
}

export default Fields;