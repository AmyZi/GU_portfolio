import React, { useState } from 'react';
import { Book, GraduationCap, FileText, ChevronRight } from 'lucide-react';
import NavigationButtons from '../components/layout/NavigationButtons';


const AcademicDashboard = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Sample data - replace with your actual content
  const researchInterests = [
    'Educational Software Design'
  ];

  const courses = [
    {
      id: 1,
      name: 'PDA675 H24 Technology, Knowledge and Learning: An Introduction',
      instructor: 'Ewa Skantz, Annika Lantz-Andersson',
      semester: 'Fall 2024',
      takeaways: [
        'Learning Theories',
        'Thematic Analysis, Acedemic Writing',
        'Teamwork',
      ]
    },
    {
      id: 2,
      name: 'TIA132 H24 Digital tools for communication and learning',
      instructor: 'Johan Lundin, Sofia Serholt and Marie Utterberg Modén',
      semester: 'Spring 2024',
      takeaways: [
        'Fundamentals of statistical inference',
        'Implementation of classical ML algorithms',
        'Model selection and validation techniques',
        'Practical data analysis skills'
      ]
    }
  ];

  const papers = [
    {
      title: 'Novel Approaches to Transfer Learning',
      authors: 'Smith et al.',
      conference: 'ICML 2023',
      notes: 'Key paper in understanding modern transfer learning techniques'
    },
    {
      title: 'Attention Mechanisms in NLP',
      authors: 'Johnson et al.',
      conference: 'NeurIPS 2023',
      notes: 'Fundamental paper for understanding attention architecture'
    }
  ];

  return (
    <div className="page-content max-w-6xl mx-auto p-6">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-8">Academic Dashboard</h1>
        
        {/* Research Interests Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Book className="w-6 h-6" />
              Research Interests
            </h2>
          </div>
          <div className="pl-2">
            <ul className="list-disc pl-6 space-y-2">
              {researchInterests.map((interest, index) => (
                <li key={index} className="text-lg">{interest}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Courses Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Courses
            </h2>
          </div>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="border rounded-lg p-4">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                >
                  <div>
                    <h3 className="text-lg font-semibold">{course.name}</h3>
                    <p className="text-sm text-gray-600">
                      {course.instructor} - {course.semester}
                    </p>
                  </div>
                  <ChevronRight 
                    className={`w-5 h-5 transform transition-transform ${
                      selectedCourse === course.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
                
                {selectedCourse === course.id && (
                  <div className="mt-4 pl-4 border-l-2 border-primary-200">
                    <h4 className="font-medium mb-2">Key Takeaways:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {course.takeaways.map((takeaway, index) => (
                        <li key={index}>{takeaway}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Papers Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Papers
            </h2>
          </div>
          <div className="space-y-4">
            {papers.map((paper, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold">{paper.title}</h3>
                <p className="text-sm text-gray-600">{paper.authors}</p>
                <p className="text-sm text-gray-600">{paper.conference}</p>
                <p className="mt-2">{paper.notes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Single Navigation Section */}
        <div className="mt-8">
          <NavigationButtons 
            prev="/about" 
            next="/" 
            isLastSlide={true} 
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicDashboard;