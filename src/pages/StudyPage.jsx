import React, { useState } from 'react';
import { Book, GraduationCap, FileText, ChevronRight } from 'lucide-react';
import NavigationButtons from '../components/layout/NavigationButtons';

const AcademicDashboard = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

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
        {
          title: 'Learning Theories',
          content:  `Throughout this course, my understanding of learning theories has evolved significantly, 
                   particularly in ways that will impact my future work in technology development. By studying 
                   various theoretical frameworks, I've gained crucial insights into how different individuals 
                   acquire and process knowledge - understanding that will directly influence how I approach 
                   software development for educational purposes. When I begin developing educational technology 
                   solutions in my future role, I'll be able to consider important aspects like cognitive load 
                   theory when designing user interfaces, and constructivist principles when creating interactive 
                   features. This foundation in learning theories will give me a significant advantage in the 
                   educational technology sector, as I'll be able to create solutions that not only function 
                   well technically but are also grounded in proven educational principles.`
        },
        {
          title: 'Thematic Analysis & Academic Writing',
          content: `My journey with thematic analysis and academic writing has been transformative. Through 
                   analyzing research papers and conducting literature reviews, I've developed a systematic 
                   approach to understanding the educational technology landscape. This skill has been particularly 
                   valuable as I've learned that thorough background research is the crucial first step in 
                   building effective technology solutions. The process has taught me to identify key themes 
                   and patterns across multiple research papers, synthesize findings, and understand how existing 
                   solutions have approached similar challenges. The academic writing component has helped me 
                   articulate complex ideas clearly, which will be essential when proposing and documenting 
                   technology solutions in my future career.`
        },
        {
          title: 'Teamwork',
          content: `I found the collaborative aspects of this course to be impactful in preparation for my future as a developer. In software development, 
                   working in teams is inevitable, and this course has given me valuable experience in 
                   navigating different perspectives and approaches. Working with classmates has shown 
                   me the importance of clear communication and the value of diverse viewpoints in 
                   creating effective solutions. These teamwork experiences have been particularly 
                   relevant as they mirror the kind of cross-functional collaboration I'll encounter 
                   in my future role as a developer, where clear communication and ability to work 
                   with different perspectives are crucial for project success.`
        }
      ]
    },
    {
      id: 2,
      name: 'TIA132 H24 Digital tools for communication and learning',
      instructor: 'Johan Lundin, Sofia Serholt and Marie Utterberg Modén',
      semester: 'Spring 2024',
      takeaways: [
        {
          title: 'Design',
          content: `...`
        },
        {
          title: 'Design',
          content: `...`
        }
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
                  <div className="mt-4 space-y-6">
                    {course.takeaways.map((takeaway, index) => (
                      <div key={index} className="pl-6">
                        <h4 className="font-semibold text-lg mb-2">{takeaway.title}</h4>
                        <p className="text-gray-700 pl-4 border-l-2 border-primary-200">
                          {takeaway.content}
                        </p>
                      </div>
                    ))}
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

        {/* Navigation Section */}
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