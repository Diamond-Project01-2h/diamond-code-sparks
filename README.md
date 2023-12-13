#### **Project Documentation**

#### **Title: Project #1 - Website Landing Page, Navigation, and Accessibility**

![Shape1](RackMultipart20231213-1-czfq8r_html_237499165a11f2b9.gif)

#### **Project Teaching Assistants:**

- **Ahmed Waseem**
- **Yanna Lin**

#### **Team Information:**

- **Team Number** : 1
- **Division** : Diamond

#### **Project Timeline:**

- **Date Started** : November 1, 2023
- **Date Delivered** : December 6, 2023

#### **Project Leadership:**

- **Product Manager** :
  - **Name** : Julien Samuel Guimez
  - **Phone** : (352) 336-7272
  - **Email** : jguimez@ufl.edu
- **Scrum Master** :
  - **Name** : Mehron Talebi
  - **Phone** : (954) 568-9596
  - **Email** : mtalebi@ufl.edu

#### **Development Team:**

- **Ricardo Nivar-Cortes**
  - **Phone** : (386) 951-9860
  - **Email** : rnivarcortes@ufl.edu
- **Sebastian Lopez**
  - **Phone** : (305) 965-5250
  - **Email** : slopez4@ufl.edu
- **Nicole Meers**
  - **Phone** : (555) 555-5555
  - **Email** : meers.nicole@ufl.edu

### **Table of Contents**

1. **Product Overview**
  - 1 Project Description
  - 2 Major Features
    - 2.1 Completed Features
    - 2.2 Proposed Features
  - 3 Project Resources
2. **Product Planning**
  - 1 About the User Stories Creation Process
    - 1.1 Process of Creating User Stories
    - 1.2 Reflection on Changes in User Stories
3. **Technical Specifications**
  - 1 Development Technology Stack
    - 1.1 React
    - 1.2 Node.js
    - 1.3 Additional Libraries
  - 2 Package Management
  - 3 External Libraries & APIs
  - 4 User Interface Styling
  - 5 Asset Management
  - 6 Additional Technical Details
4. **Product and Feature Design**
  - 1 Accessible Landing Page Design
  - 2 Enhanced Home Page Content and Visuals
  - 3 New Website Logo Design
  - 4 Redesigned Header and Footer
  - 5 Development of Home Component in React JSX
  - 6 Integration Testing and Code Reviews
  - 7 Language Translation Functionality
  - 8 FAQ, Help/Contact, and About Pages
5. **Testing Information**
  - 1 Description of Testing: Manual & Visual Tests
  - 2 Locations of Tests
  - 3 Description of Frontend Test
    - 3.1 Known Frontend Bugs
6. **Deployment and Running Instructions**
  - 1 Prerequisites
  - 2 Platform-Specific Instructions
    - 2.1 For Linux
    - 2.2 For Windows
    - 2.3 For macOS
    - 2.4 General Notes

### **Product Overview**

#### **Project Description**

The project focused on redesigning the landing page, adding static pages like Help, FAQ, and About, and enhancing accessibility through language translation and text scaling features.

#### **Major Features**

1. **Completed Features** :
  - **Website Styling** : Updated the website and landing page design.
  - **Navigation Bar** : Overhauled for improved user navigation.
  - **Logo** : Redesigned to align with updated branding.
  - **Static Pages** : Added Help, FAQ, and About pages.
  - **Language Translation** : Integrated for multilingual support.
  - **Text Scaling** : Implemented to allow users to adjust text size.
2. **Proposed Features** (now completed):
  - All the above-listed features were initially proposed and have been successfully implemented in the project.

#### **Project Resources**

1. **GitHub Repository** :[View Code](https://github.com/Diamond-Project01-2h/diamond-code-sparks.git)
2. **Project Board** :[View Progress](https://github.com/orgs/Diamond-Project01-2h/projects/2)

### **Product Planning**

### **2.1 About the User Stories Creation Process**

#### **a. Process of Creating User Stories**

The initial process for creating user stories involved a series of strategic steps:

1. **Team Brainstorming** : Our team, consisting of members with diverse skills and perspectives, engaged in brainstorming sessions to identify key functionalities and user needs.
2. **Identifying User Personas** : We identified various user personas, such as students, teachers, administrators, and researchers, to ensure our stories covered a broad spectrum of potential users.
3. **Drafting Stories** : Each story was drafted to represent a specific user interaction or requirement, focusing on what the user wants to achieve and why.
4. **Incorporating Technical Insights** : Team members with technical expertise provided insights on feasibility and implementation, ensuring the stories were grounded in practicality.
5. **Client and Stakeholder Feedback** : Initial user stories were reviewed in light of client expectations and stakeholder requirements, making necessary adjustments to align with their vision.

#### **b. Reflection on Changes in User Stories**

Over the course of the project, our user stories evolved in several ways:

1. **Increasing Specificity** : We refined our stories to a deeper level of specificity. Initially broad user stories were broken down into more detailed and actionable items. This shift allowed for clearer development goals and more precise resource allocation.
2. **Adapting to User Feedback** : Based on continuous feedback from user testing sessions, some user stories were modified to better align with real user experiences and expectations. This included changes in the user interface, functionality, and accessibility features.
3. **Scrapping and Adding Stories** :
  - **Scrapping** : Some user stories were scrapped as we progressed, primarily due to overlapping functionalities or changes in project scope. For instance, certain features initially thought to be essential were found redundant or less impactful upon deeper analysis.
  - **New Stories** : New stories emerged, particularly in response to evolving user needs and technological advancements. For example, we introduced stories focusing on mobile accessibility and integration with newer educational tools, reflecting the changing digital landscape.
4. **Technical Feasibility Adjustments** : Some stories were adjusted for technical feasibility. As we delved deeper into the development phase, certain proposed features faced constraints due to technical limitations or resource availability, leading to modifications in the original stories.
5. **Aligning with Project Evolution** : As the project's scope and objectives evolved, so did our user stories. This was a natural progression reflecting our growing understanding of the project, user needs, and technical capabilities. We continually reassessed and realigned our stories to ensure they remained relevant and actionable.

### **Technical Specifications**

#### **1. Development Technology Stack**

- **React** :
  - **Usage** : Used as the primary library for building the user interface of the web application, focusing on single-page application capabilities.
  - **Version** : 17.0.2
  - **Key Features Implemented** : Utilized React Hooks for state and lifecycle features, React Router for navigation, and context API for managing global state.
- **Node.js** :
  - **Version** : 20.6.0
  - **Role** : Served as the JavaScript runtime environment for developing server-side tools and scripts.
- **Additional Libraries** :
  - **Redux** : For state management across the application.
  - **Axios** : For handling HTTP requests to external services, including the Azure Translation API.

#### **2. Package Management**

- **Yarn (Yarnpkg)**:
  - **Usage** : Used for managing project dependencies and ensuring consistent installations across environments.
  - **Version** : 1.22.21
  - **Benefits** : Offered faster package installations, more secure dependency management, and reliable lockfiles.

#### **3. External Libraries & APIs**

- **Azure Translation API** :
  - **Purpose** : Integrated to provide real-time language translation capabilities in the application.
  - **Integration Details** : Connected via RESTful API calls, handling dynamic content translation based on user preferences.
- **UI Styling with CSS & LESS** :
  - **CSS** : Version CSS3
    - **Usage** : Main technology for styling web components, focusing on responsiveness and user-friendly interfaces.
  - **LESS Preprocessor** :
    - **Role** : Used to extend the capabilities of CSS with variables, mixins, and functions, leading to more efficient style management.
    - **Implementation** : LESS files compiled into CSS during the build process using tools like Webpack.

#### **4. User Interface Styling**

- **Styling Files Location** :
  - **Directory** : "client/src/components","client/src/views"
  - **File Types** : .less files primarily, compiled into CSS.
  - **GitHub Location** :
    - [Components Link](https://github.com/Diamond-Project01-2h/diamond-code-sparks/tree/ab5bc11c5ce3ac405ab24436b20730830571f9f3/client/src/components)
    - [Views Link](https://github.com/Diamond-Project01-2h/diamond-code-sparks/tree/ab5bc11c5ce3ac405ab24436b20730830571f9f3/client/src/views)
  - **Contributors** : Mehron Talebi, Sebastian Lopez, Ricardo Nivar-Cortes, and additional team members.

#### **5. Asset Management**

- **Images and Assets** :
  - **Storage Location** : Located in the client/src/assets folder.
  - **Organization** : Categorized by asset type (e.g., images, icons, videos) for efficient reference and loading within the application.
- **Large File Storage** :
  - **Solution Used** : Azure Blob Storage
  - **Purpose** : Hosted large files like tutorial videos, ensuring fast loading times and reduced load on the main server.

#### **6. Additional Technical Details**

- **Code Quality and Practices** :
  - **Standards Adhered To** : Followed best practices for React development, including modular component design and proper use of React hooks.
  - **Documentation** : Comprehensive inline documentation and README files for setup and deployment instructions.
- **Future Recommendations** :
  - **Potential Features** : Enhancements in user personalization and interactive features.
  - **Optimization Opportunities** : Potential for performance optimization in image loading and state management.

### **Product and Feature Design**

1. **Accessible Landing Page Design**
  - **Technical Details** :
    - Emphasis on ADA compliance, focusing on color contrast, text size adjustability, and navigational ease.
    - Iterative design of wireframes prioritizing user-friendly layouts and inclusivity.
  - **Implementation** : Integrated into the Home.jsx component using React JSX for dynamic content.

![](RackMultipart20231213-1-czfq8r_html_10dbd18cd9fda10a.png)

1. **Enhanced Home Page Content and Visuals**
  - **Technical Details** :
    - Diverse content for different user groups, enhanced with engaging visuals and interactive elements.
    - Inclusion of animations and image assets for a visually appealing experience.
  - **Implementation** : Content adaptability and responsiveness implemented in Home.jsx.

![](RackMultipart20231213-1-czfq8r_html_8908ab8eaad7c15a.png)

![](RackMultipart20231213-1-czfq8r_html_beece4d942fa1e63.png)

1. **New Website Logo Design**
  - **Technical Details** :
    - Design aligned with the website's branding and aesthetic theme.
    - Positioned in the website's header for consistent visual identity.
  - **Implementation** : Logo used in scalable format (SVG or high-quality image).
  - **Screenshot** : [Insert screenshot showing the website header with the new logo].
2. **Redesigned Header and Footer**
  - **Technical Details** :
    - Header with dropdown menu for improved navigation.
    - Footer redesigned for enhanced interaction and accessibility.
  - **Implementation** : Styled with CSS3 and LESS, ensuring responsive design.

![](RackMultipart20231213-1-czfq8r_html_cf3c59ad6e66ed7f.png)

![](RackMultipart20231213-1-czfq8r_html_5d23982943517b30.png)

1. **Development of Home Component in React JSX**
  - **Technical Details** :
    - Incorporated initial ADA-compliant design elements.
    - Featured sections for dynamic content like news or user-specific information.
  - **Implementation** : Structured and updated using React JSX.
2. **Integration Testing and Code Reviews**
  - **Technical Details** :
    - Ensured integration of new features and overall functionality.
    - Manual and static testing, including component-level unit tests and holistic integration tests.
  - **Implementation** : Testing outcomes refined and optimized the features.
3. **Language Translation Functionality**
  - **Technical Details** :
    - Integrated to provide multilingual support, enhancing the application's accessibility for diverse users.
    - Connected via API calls, handling dynamic content translation.
  - **Implementation** : Embedded within various components of the application for real-time language switching.
  - **Screenshot** : [Insert screenshot showing language translation options].
4. **FAQ, Help/Contact, and About Pages**
  - **Technical Details** :
    - FAQ page developed to address common user inquiries, using an interactive and easy-to-navigate layout.
    - Help/Contact page designed for user support, featuring dynamic contact forms and help guides.
    - About page created to convey the mission, vision, and team information of the project.
  - **Implementation** : Each page designed with user engagement and information clarity in mind, using React components for dynamic content management.

![](RackMultipart20231213-1-czfq8r_html_95664bdf378cc6bb.png) ![](RackMultipart20231213-1-czfq8r_html_91a87abb11056f0d.png)

### **5. Testing Information**

#### **5.1 Description of Testing: Manual & Visual Tests**

Our testing strategy focused on comprehensive manual and visual methods to ensure functionality and user experience standards were met for all features. Key stages included:

- **Functionality Testing** : Each feature was manually tested for core functionality. This included checking interactive elements, data entry in forms, and seamless navigation.
- **Visual Consistency Check** : The application's layout and styling were verified across different browsers and devices to ensure visual consistency.
- **Accessibility Compliance** : Special attention was given to ADA compliance, focusing on color contrast, keyboard navigation, and screen reader compatibility.
- **Content Verification** : All textual content, images, and links were checked for accuracy and relevance.
- **Error Handling** : Simulated erroneous user inputs and unexpected user actions to check the application's response and feedback mechanisms.
- **Language Translation Testing** : Tested the language translation feature across various languages for accuracy and responsiveness.

Console logging was extensively utilized to identify and document specific issues during testing.

#### **5.2 Locations of Tests**

Testing was conducted in a staging environment, closely mirroring the production environment, allowing for accurate assessment of the application's real-world performance.

#### **5.3 Description of Frontend Test**

Frontend testing was methodically executed as follows:

1. **UI Element Interactions** :
  - Tested all buttons, forms, and dropdowns for correct functioning.
  - Verified form validations and submission behaviors.
2. **Responsive Design Testing** :
  - Utilized browser tools to simulate different screen sizes.
  - Checked adaptive behavior of layout elements and text.
  - Ensured interactive elements remain functional across resolutions.
3. **Load Performance** :
  - Measured page load times on various devices.
  - Monitored the loading of dynamic content like images and videos.
  - Checked for optimization issues impacting performance.
4. **Cross-Browser Testing** :
  - Tested the application on Chrome, Firefox, Safari, and Edge.
  - Ensured feature functionality and consistency in layout and styling across browsers.
5. **Accessibility Assessment** :
  - Employed tools like WAVE for accessibility issue identification.
  - Conducted keyboard-only navigation and screen reader tests.

**Team Responsibility** : Frontend testing was led by the UI/UX team, focusing on different aspects of frontend development.

##### **Known Frontend Bugs:**

- **Layout Discrepancies on Older Mobile Devices** : Inconsistencies in rendering on older mobile models.
- **Translation Lag in High-Content Pages** : Occasional delays in translating content on densely populated pages.
- **Dropdown Navigation Glitches** : Intermittent issues with dropdown menu responsiveness.

### **Deployment and Running Instructions for the Frontend**

#### **Prerequisites**

1. **Install Node.js and NPM** :
  - Ensure Node.js and NPM (Node Package Manager) are installed on your system. NPM is included with Node.js.
  - Download and install the latest version of Node.js from[Node.js official website](https://nodejs.org/).
2. **Install Yarn** :
  - Once Node.js is installed, install Yarn using NPM by running npm install --global yarn in your terminal.

#### **Platform-Specific Instructions**

##### **For Linux:**

1. **Open Terminal**.
2. **Clone the Project Repository** (if not already done):
  - Use git clone [repository URL] to clone the project repository to your local machine.
3. **Navigate to the Client Directory** :
  - Change to the project directory (e.g., cd path/to/project).
  - Then, move into the client directory (e.g., cd client).
4. **Install Dependencies** :
  - Run yarnpkg install to install all the required dependencies.
5. **Start the Application** :
  - Execute yarnpkg start to run the application.
  - The application should now be accessible in your web browser at localhost:3000 or another specified port.

##### **For Windows:**

1. **Open Command Prompt or PowerShell**.
2. **Clone and Navigate** :
  - Similar steps as Linux for cloning and navigating to the client directory.
3. **Install Dependencies** :
  - Use yarn install to install the dependencies.
4. **Start the Application** :
  - Run yarn start to start the application.
  - Access the application as mentioned above.

##### **For macOS:**

1. **Open Terminal**.
2. **Clone and Navigate** :
  - Follow the same steps as Linux/Windows for cloning the repository and navigating.
3. **Install Dependencies** :
  - Run yarn to install the necessary dependencies.
4. **Start the Application** :
  - Use yarn start to start the application.
  - The application will be accessible in the browser as mentioned.

#### **General Notes:**

- **Environment Variables** : If the application requires environment variables, set them up before starting the app. This can be done in a .env file in the root of the client directory.
- **Ports** : The application will generally run on localhost:3000, but this can vary. Check the terminal output for the exact URL.
- **Browser Compatibility** : Ensure the browser used for testing is up to date for the best experience.