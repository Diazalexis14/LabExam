import React, {useState}  from 'react';
import {SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const App =() => {
  const  [currentSection, setCurrentSection] = useState('name');

  const resumeContent = {
    imageUrl: require('./image.jpg'),

name : 'Alexis A. Diaz',
course: "Bachelor of Science in Information Technology",
education: {
elementary:'Malinta elementary School',
elementaryYear: '2013',
highSchool: 'Malinta National highSchool',
highSchoolYear: '2017',
college: 'Global Reciprocal Colleges',
collegeYear: '2025',
  },
  about: 'I am a dedicated and curious individual with a passion for learning and exploring new ideas. With a background in Graphic designing, Networking, I am driven by the desire to understand the world around me and make meaningful contributions. I thrive in environments that challenge me to think critically and creatively, always seeking opportunities for growth and self-improvementA dedicated and results-oriented professional with over [X years] of experience in [industry/field]. Known for my strong problem-solving skills, attention to detail, and ability to thrive in fast-paced environments. I excel in [specific skills or areas of expertise, e.g., project management, data analysis, customer service] and have a proven track record of delivering high-quality results. I am passionate about [relevant industry/field] and continuously strive to expand my knowledge and skills to stay ahead of industry trends. A team player with excellent communication skills, I am adept at collaborating with cross-functional teams to achieve common goals. Looking to leverage my experience and expertise to contribute effectively to [company/organization name] and drive success.',
  contacts:
  {
    mobile: '09611284663',
    email: 'diazalexis1415@gmail.com',
  },
  };
  const handlePress = ()=> {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
        return 'education';
        case 'education':
        return 'about';
        case 'about':
        return 'contacts';
        case 'contacts':
        return 'name';
        default:
        return 'name';
         
      }}
    );
};
return (
  <SafeAreaView style = {{flex: 1}}>
    <ScrollView contentStyle = {styles.container}>
     <TouchableOpacity onPress = {handlePress} style ={styles.contentContainer}>
      {
        currentSection === 'name' && (
          <>
          <Image source ={resumeContent.imageUrl}style ={styles.image}/>
          <View style = {styles.textContainer}>
          <Text style ={styles.header}>{resumeContent.name}</Text>
          <Text style ={styles.info}>{resumeContent.course}</Text>
          </View>
          </>
        )}
      {
         currentSection === 'education' && (
          <View style = {styles.textContainer}>
          <Text style ={styles.header0}>Education</Text>
          <Text style ={styles.projectitle}>{'\n'} College:{'\n'}</Text>
          <Text style = {styles.info0}>{resumeContent.education.college} - {resumeContent.education.collegeYear}</Text>
          <Text style ={styles.projectitle}>{'\n'}HighSchool:{'\n'}</Text>
          <Text style = {styles.info0}>{resumeContent.education.highSchool} - {resumeContent.education.highSchoolYear}</Text>
          <Text style ={styles.projectitle}>{'\n'}Elementary:{'\n'}</Text>
          <Text style = {styles.info0}>{resumeContent.education.elementary} - {resumeContent.education.elementaryYear}</Text>
          </View>
        )}
        {
         currentSection === 'about' && (
          <View style = {styles.textContainer}>
          <Text style ={styles.header1}>About me:{'\n'}</Text>
          <Text style = {styles.about}>{resumeContent.about}</Text>
          </View>
        )}
        {
         currentSection === 'contacts' && (
          <View style = {styles.contactContainer}>
          <Text style ={styles.header1}>Contact me:{'\n'}</Text>
          <Text style = {styles.info1}>{'\n'} Mobile: {resumeContent.contacts.mobile}{'\n'} Email: {resumeContent.contacts.email}</Text>
          </View>
        )}
        </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
 },
 image: {
   alignSelf:'center',
   marginBottom: 20,
   height: 200,
   width: 200,
   margin: 100,
 },
 header: {
   fontSize: 20,
   fontWeight: 'bold',
   textAlign: 'center',
 },
 header1:{
   fontSize: 20,
   fontWeight: 'bold',
   marginTop: 50,
   textAlign: 'left',
 },
 info: {
   fontSize: 20,
   alignSelf: 'center',
   textAlign: 'center',
 },
 info1: {
   fontSize: 20,
   alignSelf: 'flex-start',
   textAlign: 'left',
 },
 about: {
   fontSize: 20,
   textAlign: 'strecth',
 },
 projectitle: {
   fontSize: 20,
   fontWeight: 'bold',
   marginBottom: 10,
   textAlign: 'left',
 },
 info0: {
   fontSize: 15,
   alignSelf: 'flex-start',
   textAlign: 'center',
 },
 header0:{
fontSize: 20,
   fontWeight: 'bold',
   textAlign: 'center',
   marginTop: 50,
 }

})
export default App;
