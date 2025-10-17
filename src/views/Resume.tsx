import { Component } from 'preact';
import View from '../components/view/View';
import ResumeRole from '../components/resume/Role';

export default class Resume extends Component {
  render () {
    return (
      <View name='resume'>
        <h1>resume</h1>

        <h2>skills</h2>
        <h3>technical languages</h3>
        <p>TypeScript, JavaScript, HTML, CSS, Markdown, Swift, Rust, Python, LaTeX, C, Kotlin, Java, Haskell</p>
        <h3>technical competencies</h3>
        <p>Git/GitHub, StencilJS, design systems, UX design, Figma, StorybookJS, ReactJS, digital accessibility, REST APIs, documentation, shell scripting</p>
        <h3>certifications/credentials</h3>
        <p><a href='https://www.credly.com/badges/e917c2ce-68ec-461c-babe-b98a153fbd65/linked_in_profile' target='_blank'>GitHub Foundations</a>, United Airlines <a href='https://www.credly.com/badges/175dd419-27a9-46f1-8f95-e384974c9759/linked_in_profile' target='_blank'>Leadership Institute - Credential II</a></p>
        <h3>human languages</h3>
        <p>English, Spanish, Ancient Greek, Modern Greek, Latin</p>
        <h3>other skills <small><em>some more special than others and in no particular order</em></small></h3>
        <p>Communication, organization, event planning, writing, editing, teaching, research, Microsoft Office, public speaking, figuring out public transit systems, biking, doing crosswords, running scavenger hunts</p>

        <h2>work experience</h2>
        <ResumeRole company='United Airlines' title='.NET Developer - Pilot Records' startDate='August 2025' endDate='September 2025'>
          <ul>
            <li>Supported .NET upgrades on Pilot Records, an internal application for the Flight Operations team</li>
            <li>Consolidated necessary software requests and initial setup instructions into a guide that accelerated the onboarding process</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='United Airlines' title='Early Career Digital Leadership Program Associate' startDate='August 2023' endDate='August 2025'>
          <p><em>Rotation 4: iOS Developer - ORION Design System</em> (February 2025 - August 2025)</p>
          <ul>
            <li>Conducted UX research with iOS developers working on employee-facing products to evaluate their desires for an official ORION iOS library</li>
            <li>Architected an iOS-specific version of the ORION component library compatible with both SwiftUI and UIKit</li>
            <li>Contributed documentation and automated process improvements to better support developers using the web library</li>
          </ul>
          <p><em>Rotation 3: UX Designer - CoreUX</em> (August 2024 - February 2025)</p>
          <ul>
            <li>Created and updated Figma designs for a <a href='https://www.united.com/en/us/fly/travel/trip-planning/travel-add-ons.html' target='_blank'>variety</a> <a href='https://www.united.com/en/us/fly/travel/inflight/basic-economy.html' target='_blank'>of</a> <a href='https://www.united.com/en/us/fly/new-united-fleet-experience.html' target='_blank'>informational</a> <a href='https://www.united.com/en/us/fly/travel/inflight/starlink-wifi.html' target='_blank'>pages</a> <a href='https://www.united.com/en/us/fly/travel/airport/united-club-membership.html' target='_blank'>on</a> <a href='https://www.united.com/en/us/fly/company/company-info/awards.html' target='_blank'>the</a>  <a href='https://www.united.com/' target='_blank'>United website</a> in collaboration with strategists, copywriters, and developers</li>
            <li>Leveraged Atmos, United's customer-facing design system, to ensure adherence to brand guidelines as well as design consistency and accessibility</li>
            <li>Designed and prototyped a novel proof of concept for the United app in conjunction with a team of stakeholders that could generate up to $12.6M in annual revenue</li>
          </ul>
          <p><em>Rotation 2: Associate Threat Detection Engineer - Cyber Defense</em> (February 2024 - August 2024)</p>
          <ul>
            <li>Researched Threat Detection-as-Code solutions that integrate the Splunk API and GitHub Actions</li>
            <li>Developed a proof of concept for a bespoke Detection-as-Code solution that improved team efficiency using Python, GitHub Actions, and the Splunk API</li>
            <li>Attended Splunk .conf24 and Splunk University App Developer Bootcamp</li>
          </ul>
          <p><em>Rotation 1: UI Developer - ORION Design System</em> (August 2023 - February 2024)</p>
          <ul>
            <li>Developed and updated web components using TypeScript, HTML, and CSS to enhance ORION, an internal design system for employee-facing applications</li>
            <li>Updated existing components to improve functionality</li>
            <li>Participated in planning future development of the design system</li>
            <li>Gave presentations on ORION to a variety of audiences, raising awareness of design system best practices and time saving possibilities</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='The University of Chicago Department of Computer Science' title='Teaching Assistant' startDate='March 2023' endDate='May 2023'>
          <p>Worked as a Teaching Assistant for the second course of the new introductory computer science sequence (CMSC 14200). In this role, I:</p>
          <ul>
            <li>Led weekly discussion sections with students</li>
            <li>Held office hours twice a week</li>
            <li>Graded student work</li>
            <li>Collaborated with a team of instructors, TAs, and graders to improve the course</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='United Airlines' title='Digital Technology Intern' startDate='June 2022' endDate='September 2022'>
          <ul>
            <li>Developed application using Kotlin for in-terminal airport kiosks in collaboration with other developers</li>
            <li>Collaborated with fellow interns on a case study project to advance United’s business strategy and presented it to the Digital Technology division</li>
            <li>Developed a proof of concept application for the kiosks to better support visually impaired customers</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='International Thespian Festival' title='Teaching Artist' startDate='June 2022'>
          <ul>
            <li>Designed and taught "Take Out the Trash: Writing Badly to Write Well", a playwriting workshop</li>
            <li>Designed and taught "Beyond the Bootleg: Archiving for High School Theatre", a theatrical archiving workshop</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='The University of Chicago Department of History' title='Research Assistant' startDate='September 2021' endDate='March 2022'>
          <p>Under the guidance of Profs. John Clegg (UChicago) and Adaner Usmani (Harvard) as part of their History of Prisons and Punishment project, I:</p>
          <ul>
            <li>Collected data on American mass incarceration</li>
            <li>Researched ancient Greek prisons and prison systems</li>
            <li>Computationally processed large, multinational datasets</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='United Airlines' title='Digital Technology Intern' startDate='June 2021' endDate='September 2021'>
          <ul>
            <li>Developed UI and other elements of the Travel Ready Center in Kotlin for United’s Android mobile app</li>
            <li>Collaborated with other interns on a case study project to advance United’s business strategy and presented it to the Digital Technology division, ultimately winning the case study competition</li>
            <li>Developed a proof of concept for an innovative new feature in United’s Android mobile app to improve usability</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='Court Theatre' title='College Research in the Arts, Social Sciences, and Humanities Scholar' startDate='January 2021' endDate='June 2021'> 
          <ul>
            <li>Curated a digital archive documenting the effects of the events of 2020 on <a href='https://www.courttheatre.org/' target='_blank'>Court Theatre</a> in collaboration with the <a href='https://www.hrc.utexas.edu/' target='_blank'>Harry Ransom Center</a>’s <a href='https://www.hrc.utexas.edu/theatre2020/' target='_blank'><em>Theatre 2020</em></a> Project</li>
            <li>Worked with Court Theatre resident dramaturg Nora Titone to develop a plan for document collection and ultimately collected over 400 digital artifacts</li>
            <li>Presented <a href='https://drive.google.com/file/d/1N0gFJNCyW9sTvk1D_jHR61sXlnW8AJ0U/view?usp=sharing' target='_blank'>my research</a> at the 2021 University of Chicago Undergraduate Research Symposium</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='Court Theatre' title='Virtual Programming Technical Intern' startDate='October 2020' endDate='December 2020'>
          <ul>
            <li>Assisted actors and speakers in setting up technical equipment for Zoom and Streamyard</li>
            <li>Troubleshot Zoom and Streamyard recording sessions and livestreams</li>
            <li>Sanitized technical equipment</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='Court Theatre' title='Events and Fundraising Intern' startDate='October 2019' endDate='May 2020'>
          <ul>
            <li>Assisted in planning and executing events</li>
            <li>Wrote auction solicitation emails </li>
            <li>Managed attendance records in SRO and Court server</li>
            <li>Organized event decor storage</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='F.A.C.T. Camp' title='Organizer' startDate='January 2019' endDate='June 2019'>
          <ul>
            <li>Applied for and received grant funding from the National Center for Women and Information Technology</li>
            <li>Developed computer science curricula </li>
            <li>Hired counselors</li>
            <li>Marketed camp through social media and outreach to local schools</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='App Camp for Girls' title='Lead Developer Intern' startDate='June 2017' endDate='July 2018'>
          <ul>
            <li>Assisted in teaching iOS development to middle school girls</li>
            <li>Developed apps for applications for the Worldwide Developer Conference</li>
            <li>Wrote two algorithms for the camp curriculum</li>
          </ul>
        </ResumeRole>

        <h2>education</h2>
        <p><strong>The University of Chicago</strong>, Chicago, Illinois
        <br />
        <strong>A.B. Classical Studies (with honors), A.B. Computer Science</strong>, June 2023</p>
        
        <h2>research</h2>
        <p>
          <strong>Trismegistos</strong>, <a href='https://www.trismegistos.org/god/' target='_blank'>TM Gods</a> Database Co-Designer (September 2022 - May 2023)
        </p>
        <ul><li>Co-designed a first-of-its-kind database of Greek, Roman, and Egyptian gods for my undergraduate thesis in Classical Studies</li></ul>

        <h2>leadership/service</h2>
        <ResumeRole company='The University of Chicago Scavenger Hunt' title='Webmaster and Judge' startDate='June 2022' endDate='present'>
          <ul>
            <li>In conjunction with a collective of judges, I coordinate and run the world's largest annual scavenger hunt</li>
            <li>Redesigned the <a href='https://scavhunt.uchicago.edu/' target='_blank'>Scavenger Hunt website</a></li>
            <li>Maintain Scavenger Hunt website</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='United Airlines' title='ECDLP Hub Frontend Developer' startDate='February 2024' endDate='August 2025'>
          <ul>
            <li>Collaborated with a cross-functional team to develop a React.js website that centralizes program information</li>
            <li>Advocated for stronger adoption of the ORION design system and supported its implementation across the website</li>
            <li>Refactored all components on the site to enhance functionality and organization in preparation for dark mode</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='United Airlines' title='Innovate Welcome Lead' startDate='September 2023' endDate='August 2024'>
          <ul>
            <li>Sent incoming ECDLP associates and interns Slack and email communications and guides to ECDLP and the internship, improving pre-hire preparation for a professional work environment</li>
            <li>Wrote a detailed housing guide for both Chicago and Houston to support incoming associates new to either city</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='United Airlines' title='DT Intern Case Study Lead' startDate='March 2024' endDate='August 2024'>
          <p>In conjunction with another Case Study Lead, I:</p>
          <ul>
            <li>Collected seven unique business problems for intern teams to solve</li>
            <li>Managed a team of ECDLP associates that directly supported intern teams</li>
            <li>Planned and executed a half-day event in which over 40 interns presented solutions to real-world business problems in teams</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='The Section Six' title='Editor-in-Chief (August 2022 - June 2023), Co-Editor-in-Chief (June 2021 - August 2022), Managing Editor' startDate='March 2020' endDate='June 2021'>
          <ul>
            <li>Revived the Hitchcock House annual after a 104-year hiatus</li>
            <li>Led team of editors in creating a dorm annual</li>
            <li>Recruited new editors</li>
            <li>Ran editor meetings</li>
            <li>Wrote and edited profiles of residents in Snell-Hitchcock Hall and other content</li>
            <li>Drafted emails to promote participation in and submissions to the annual</li>
            <li>Organized structure of annual in collaboration with fellow editors</li>
            <li>Reformatted digital annual for printing</li>
            <li>Kept minutes at editor meetings</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='University Theater Committee' title='Secretary' startDate='March 2021' endDate='March 2022'>
          <ul>
            <li>Served as a member of UChicago's <a href='https://ut.uchicago.edu/' target='_blank'>University Theater</a> Executive Committee</li>
            <li>Founded University Theater’s Staged Readings program</li>
            <li>Took minutes at Committee meetings</li>
            <li>Maintained the University Theater website</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='Court Theatre' title='Strategic Planning Committe Member' startDate='June 2021' endDate='November 2021'>
          <ul>
            <li>Represented all students at the University of Chicago as a member of the University subcommittee</li>
            <li>Helped plan initiatives for Court Theatre to engage members of the University of Chicago community</li>
          </ul>
        </ResumeRole>
        <ResumeRole company='The Chicago Maroon' title='Head Arts Editor (June 2021 - November 2021), Deputy Arts Editor (February 2021 - June 2021), Associate Arts Editor' startDate='May 2020' endDate='February 2021'>
          <ul>
            <li>Laid out Arts articles in Adobe InDesign</li>
            <li>Coordinated section pitches</li>
            <li>Managed Arts communications, including email and social media</li>
            <li>Edited article submissions</li>
            <li>Wrote articles on Chicago theatre and UChicago theatre</li>
          </ul>
        </ResumeRole>

        <h2>awards and recognition</h2>
        <p>
          <strong>Harper Award for Exceptional Performance in a Course</strong> - <em>The University of Chicago, June 2023</em>
          <br />
          Awarded for exceptional work in CMSC 20370: Inclusive Technology: Designing for Underserved and Marginalized Populations, for which I designed and prototyped an application for users lacking mobility in one hand inspired by my own experiences with a sprained wrist.
        </p>
        <p>
          <strong>HITEC Scholar</strong> - <em>The HITEC Foundation, 2019 - 2022</em>
          <br />
          Scholarship awarded to exceptional Hispanic students pursuing technical degrees.
        </p>
        <p><strong>University of Chicago National Merit Scholar</strong> - <em>The University of Chicago & National Merit Corporation, 2019</em></p>
        <p>
          <strong>Thespian Playworks Finalist</strong> - <em>International Thespian Society, 2019</em>
          <br />
          One of four student playwrights selected nationally to workshop and present an original short play at the 2019 International Thespian Festival.
        </p>
        <p>
          <strong>NCWIT Aspirations in Computing Award National Honorable Mention</strong> - <em>The National Center for Women and Information Technology, 2019</em>
          <br />
          Award for my work in computer science and advocacy for women in computer science.
        </p>
        <p>
          <strong>National Hispanic Scholar</strong> - <em>National Hispanic Recognition Program, 2018</em>
        </p>
      </View>
    );
  }
}