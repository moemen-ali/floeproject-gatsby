import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const News = () => (
    <Layout>
      <SEO title="Resources" />
      
            <div id="content" class="floe-content">
                <div class="flc-toc-tocContainer toc"> </div>

                <div class="floe-resources">

                    <div class="floe-resources-buttons">
                        <button class="flc-resources-showAll">expand all</button>
                        &nbsp;&nbsp;
                        <button class="flc-resources-hideAll">hide all</button>
                    </div>

                    <ul class="floe-resources-main">

                        <li class="floe-resources-category">
                            <h2 class="floe-resource-title"><button aria-expanded="false" class="flc-resources-toggleItem"><span class="arrow"></span> Learning to Learn</button></h2>
                            <div class="floe-resources-content">
                                <p>We all learn differently. How can we develop greater understanding of our own learning styles and preferences, and learn to better understand the learning styles and preferences of others?
                                </p>
                                <ul class="floe-resources-items">
                                    <li><a href="https://stories.floeproject.org/storyBrowse.html">Stories About Learning to Learn</a>
                                        <p>See a diverse collection of stories about current barriers, challenges, successes and exclusionary situations that we all experience in our learning journeys.
                                        </p>
                                    </li>
                                    <li>
                                        <a href="https://wiki.fluidproject.org/display/fluid/%28Floe%29+Preference+Exploration+and+Self-Assessment">My Life Long Learning Lab (MyL3)</a>
                                        <p>MyL3 enables learners to keep track of their progress, and personalize their learning goals and learning experience through self-reflection. <a href="https://docs.google.com/document/d/1oIqIgJ3H7R_sj7ybrUYq-QZj0Zs-kU3wjUa_rNrHVZM/edit">See the evolution</a> of the tools and the <a href="https://files.inclusivedesign.ca/s/Irsq4w24gFgEGqF#pdfviewer">current designs</a>.
                                        </p>
                                    </li>
                                    <li>
                                        <a href="http://openresearch.ocadu.ca/id/eprint/2152/1/Treviranus_LearningDifferencesinClassroom_2018.pdf">Learning Differences &amp; Digital Equity in the Classroom (2018)</a>
                                        <p>Read about digital equity in the classroom for students with learning differences, as well as the role of technology in the provision of equitable education for the full diversity of students.
                                        </p>
                                    </li>
                                    <li>
                                        <a href="https://handbook.floeproject.org/CreatingInclusiveLearningExperiences.html">Inclusive Learning Experiences</a>
                                        <p>Learn about building positive and constructive environments for self-learning and self-reflection with learners who have diverse learning needs and preferences.
                                        </p>
                                    </li>
                                    <li>
                                        <a href="http://openresearch.ocadu.ca/id/eprint/1202/1/Treviranus_Value_2010.pdf">The Value of Imperfection: the Wabi-Sabi Principle in Aesthetics and Learning (2010)</a>
                                        <p>This paper explores the importance of imperfection, mistakes, problems, disagreement, and the incomplete for engaged learning, and relinquishing notions of perfection, acknowledging that learners learn differently and we need diverse learners.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="floe-resources-category">
                            <h2 class="floe-resource-title"><button aria-expanded="false" class="flc-resources-toggleItem"><span class="arrow"></span> Multimodal Presentation, Content Adaptation and Personal Preferences</button></h2>
                            <div class="floe-resources-content">
                                <p>Digital design offers diverse possibilities for transformation and adaptation of learning content. How do we leverage these possibilities in envisioning, building and evolving tools for learning to support diverse learning needs?</p>
                                <ul class="floe-resources-items">
                                    <li><a href="https://www.youtube.com/watch?v=63DqNgxtsrA">User Interface Options Video (2017)</a>
                                        <p>Learn about the Fluid Project's User Interface Options (UIO) component, how it enables people to personalise web content to meet their unique needs, and how to integrate it into a site. A beta version of a <a href="https://chrome.google.com/webstore/detail/ui-options-plus-uio%2B/okenndailhmikjjfcnmolpaefecbpaek">Chrome browser extension</a> is now available, enabling UIO to transform content of web pages that do not have a direct integration of UIO.
                                        </p>
                                    </li>
                                    <li><a href="http://www.alanharnum.ca/post/2017-06-01-multimodal-design-for-inclusion/">Multimodal Design   Patterns for Inclusion &amp; Accessibility</a>
                                        <p>A presentation from the 2017 University of Guelph Accessibility Conference discussing multimodality as a tool for building inclusive experiences and shifting perceptions.
                                        </p>
                                    </li>
                                    <li><a href="https://youtu.be/NNwc0VYRhUU">Nexus Science Lab Video (2017)</a>
                                        <p>See how sensors commonly found in a science lab can be connected to accessible, sonified graphs using the <a href="https://wiki.gpii.net/w/Nexus_API">Nexus, a system that connects disparate technologies</a>, enabling new and inclusive interactions that can be used to visualize and sonify data as it is gathered.
                                        </p>
                                    </li>
                                    <li><a href="https://youtu.be/7R_pz2Fz4qE">Nexus Inclusive Music Creation Video (2016)</a>
                                        <p>See a demonstration of the Nexus being used to inclusively create music using various inputs including a head tracker.
                                        </p>
                                    </li>
                                    <li><a href="https://wiki.fluidproject.org/display/fluid/%28Floe%29+Sonification">Sonification</a>
                                        <p>Try the <a href="https://build.fluidproject.org/chartAuthoring/demos/">inclusive chart authoring tool</a> that automatically sonifies data using the sonification framework that provides a set of tools to help web developers more easily create sound-based representations of interactive data.
                                        </p>
                                    </li>
                                    <li><a href="http://www.ppig.org/library/paper/harmonious-authorship-different-representations">Harmonious Authorship from Different Representations (2015)</a>
                                        <p>“We describe the Infusion system, which is a library, language system or integration domain implemented in JavaScript, as well as a mentality and model for thinking about the ex- pression of end-user applications. We promise that this system will bring together the worlds of different kinds of users engaged in different tasks at different times, and allow them shared authorial access to the same artefacts which are presented to each in a notation appropriate for them.”
                                        </p>
                                    </li>
                                    <li><a href="https://gpii.net/sites/gpii.net/files/uploads/attachments/node/44/2011_aegis-creating_a_global_public_inclusive_infrastructure-final.doc">Creating a Global Public Inclusive Infrastructure (2011)</a>
                                        <p>The Global Public Inclusive Infrastructure ensures that everyone who faces accessibility barriers due to disability, literacy or aging, regardless of economic resources, can access and use the Internet and all its information, communities, and services for education, employment, daily living, civic participation, health and safety.
                                        </p>
                                    </li>
                                    <li><a href="https://build.fluidproject.org/first-discovery/demos/">First Discovery</a>
                                        <p>This tool walks the people through a step by step process of discovering, declaring and storing digital preferences.
                                        </p>
                                    </li>
                                    <li><a href="https://wiki.fluidproject.org/display/fluid/Discovery+Cats+-+First+Discovery">Discovery Cats</a>
                                        <p>See some playful designs for setting user preferences and check out the <a href="https://github.com/fluid-lab/Discovery-Cat">student project</a> that turned this into a game.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="floe-resources-category">
                            <h2 class="floe-resource-title"><button aria-expanded="false" class="flc-resources-toggleItem"><span class="arrow"></span> Social Justice, Activism and Digital Equity</button></h2>
                            <div class="floe-resources-content">
                                <p>Technology can be leveraged to advocate for social justice, build community and affect change in the world. How do we consciously approach the design of technology for social justice to maximize its reach, adaptability and inclusiveness?</p>
                                <ul class="floe-resources-items">
                                    <li><a href="http://pub.rehabmagazine.ca/publication/?i=462308&ver=html5&p=10">Digital Inclusion (2017)</a>
                                        <p>Read about digital inclusion in ‘The bad news, the good news and what to do about it’</p>
                                    </li>
                                    <li><a href="http://designjusticenetwork.org/">Design Justice Network</a>
                                        <p>“Design justice rethinks design processes, centers people who are normally marginalized by design, and uses collaborative, creative practices to address the deepest challenges our communities face.”
                                        </p>
                                    </li>
                                    <li><a href="http://onlinelibrary.wiley.com/doi/10.1002/bsl.2105/full">Leveraging the Web as a Platform for Economic Inclusion (2014)</a>
                                        <p>This paper describes an international initiative that leverages the internet to address the economic exclusion of people with disabilities and maps out how this may help to address the broader issues of our current markets, education, employment, and financial systems.
                                        </p>
                                    </li>
                                    <li><a href="https://stories.floeproject.org/">Storytelling Tool</a>
                                        <p>See the in progress development of the learning reflections site that collects stories about learning to learn.
                                        </p>
                                    </li>
                                    <li><a href="https://sojustrepairit.org/">Social Justice Repair Kit</a>
                                        <p>Explore the Social Justice Repair Kit project that is working on engaging diverse youth with learning differences in social justice initiatives.
                                        </p>
                                    </li>
                                    <li><a href="https://bodiesintranslation.wordpress.com/">Bodies in Translation (BiT)</a>
                                        <p>This project aims to create collaborative partnerships between artists, arts organizations, activists, scholars, and educators. It cultivates activist art produced by disabled, d/Deaf, fat, Mad, and E/elder people with the goal of expanding understandings of vitality and advancing social justice.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="floe-resources-category">
                            <h2 class="floe-resource-title"><button aria-expanded="false" class="flc-resources-toggleItem"><span class="arrow"></span> Inclusive Design Practice</button></h2>
                            <div class="floe-resources-content">
                                <p>Inclusive design is a diverse, evolving set of practices and insights. What have we learned, and where is our learning taking us?</p>
                                <ul class="floe-resources-items">
                                    <li><a href="https://handbook.floeproject.org/">Inclusive Learning Design Handbook</a>
                                        <p>The Floe Inclusive Learning Design Handbook is a free Open Educational Resource (OER) designed to assist teachers, content creators, web developers, and others in creating adaptable and personalizable educational resources that can meet the needs of learners with a diversity of learning styles.
                                        </p>
                                    </li>
                                    <li><a href="http://openresearch.ocadu.ca/id/eprint/2193/1/Treviranus_UnitoPaper_2018.pdf">Realizing the Potential of Inclusive Education (2018)</a>
                                        <p>Learn about Inclusive Design and its applications to education.
                                        </p>
                                    </li>
                                    <li><a href="https://medium.com/ontariodigital/if-you-want-the-best-design-ask-strangers-to-help-e37bdb73567">If You Want the Best Design, Ask Strangers to Help (2018)</a>
                                        <p>This article provides inspiration for the future of design in the Ontario government.
                                        </p>
                                    </li>
                                    <li><a href="https://guide.inclusivedesign.ca/">The Inclusive Design Guide</a>
                                        <p>This ever-evolving guide can be applied to digital design as well as to the design of services, the built environment and physical products. It can be applied to processes like workshops, meetings, conferences, and our daily interactions with one another.
                                        </p>
                                    </li>
                                    <li><a href="http://quantization.ca/podcast/episode-one-inclusive-education/">Inclusive Education Podcast (2016)</a>
                                        <p>The first episode of the Quantization podcast which talks about visible and invisible barriers that exist in our lives focusses on inclusive education.
                                        </p>
                                    </li>
                                    <li><a href="https://cities.inclusivedesign.ca/resources/">Co-Design Toolkit</a>
                                        <p>The <a href="https://guide.inclusivedesign.ca/practices/PracticeCoDesign.html">practice of co-design</a> allows users to become active participants in the design process by facilitating their direct input
                                            into the creation of solutions that meet their needs, rather than limiting users to the role of research subjects or consultants.
                                            This toolkit provides guidance on planning, executing and facilitating a co-design process based on goals, context and resources. Explore
                                            <a href= "https://wiki.fluidproject.org/display/fluid/Inclusive+Design%2C+Co-Design%2C+and+Co-Creation+Resources">more resources about co-design</a>.
                                        </p>
                                    </li>
                                    <li><a href="https://wiki.fluidproject.org/pages/viewpage.action?pageId=80674818">Inclusive Design Mapping Tool</a>
                                        <p>This tool aims to help design and development teams to map out their product and user needs and identify the existing gaps. Users are encouraged to adapt this tool based on their project needs and goals.
                                        </p>
                                    </li>
                                    <li><a href="https://docs.google.com/document/d/1FXPRpp6oafkjaGrcbp4RcVFf3mumyk7dQorMY9_zLhc/edit">Imagine Your Dream Neighbourhood Facilitation Guide</a>
                                        <p>Practice co-design with elementary and middle school students using this guide which includes instructions for several city design activities.
                                        </p>
                                    </li>
                                    <li><a href="https://pdfs.semanticscholar.org/f9bc/a101763769a22df0733bc3388bc2fa3df30c.pdf#page=494">Inclusive E-learning (2006)</a>
                                        <p>An early vision for inclusive e-learning that continues to be relevant today.
                                        </p>
                                    </li>
                                    <li><a href="https://www.microsoft.com/design/inclusive/">Microsoft Inclusive Toolkit</a>
                                        <p>This toolkit is a comprehensive resource for any inclusive session to practice new skills, develop new concepts, or create a prototype. This toolkit is made to be retrofitted to a design team’s goals.
                                        </p>
                                    </li>
                                    <li><a href="https://www.designcouncil.org.uk/sites/default/files/asset/document/the-principles-of-inclusive-design.pdf">Design Council’s Principles of Inclusive Design</a>
                                        <p>This document is the government advisor on building inclusive architecture, urban design and public space.
                                        </p>
                                    </li>
                                    <li><a href="https://adod.idrc.ocadu.ca/">Accessible Digital Office Document (ADOD) Project</a>
                                        <p>This project helps individuals and organizations to create accessible office documents and choose accessible office applications for their needs. The guidance is based primarily on WCAG 2.0 and ATAG 1.0.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="floe-resources-category">
                            <h2 class="floe-resource-title"><button aria-expanded="false" class="flc-resources-toggleItem"><span class="arrow"></span> Privacy, Power and Autonomy</button></h2>
                            <div class="floe-resources-content">
                                <p>New technologies are impacting education, the economy and the wider world. How do we safeguard values such as privacy and autonomy with promising but challenging technologies such as AI, and avoid entrenching unjust systems in technology?</p>
                                <ul class="floe-resources-items">
                                    <li><a href="https://workology.com/ep-121-artificial-intelligence-discrimination/">How Artificial Intelligence Creates Discrimination in #HR &amp; #Recruiting Podcast (2017)</a>
                                        <p>A podcast looking at the inclusiveness of machine learning technology and exploring the implications for people with disabilities.
                                        </p>
                                    </li>
                                    <li><a href="https://deep.idrc.ocadu.ca/">Designing Enabling Economies and Policies (DEEP)</a>
                                        <p>DEEP is an annual think tank that aims to make meaningful change by bringing together a diversity of fresh perspectives, new ideas, with seasoned experience, and insight gained from failures and successes. See the <a href="https://docs.google.com/document/d/1UYGW8MzbqXwg7OoABd94b9_BrqsX1QyOYnv4evDwbys/edit?usp=sharing">notes from the 2017 conference</a>
                                        </p>
                                    </li>
                                    <li><a href="http://www.cbc.ca/radio/spark/362-machine-learning-outliers-smart-device-ownership-and-more-1.4279433/ai-s-problem-with-disability-and-diversity-1.4279444">AI's Problem with Disability and Diversity Podcast (2017)</a>
                                        <p>The Spark radio show explores issues with artificial intelligence.
                                        </p>
                                    </li>
                                    <li><a href="https://points.datasociety.net/beyond-the-rhetoric-of-algorithmic-solutionism-8e0f9cdada53">Beyond the Rhetoric of Algorithmic Solutionism (2018)</a>
                                        <p>A short review of the book “Automating Inequality: How High-Tech Tools Profile, Police, and Punish the Poor”
                                        </p>
                                    </li>
                                    <li><a href="https://platform.coop/">Platform Cooperativism</a>
                                        <p>Platform cooperativism aims to build a fairer future of work. Rooted in social justice and democratic ownership, co-op members, technologists, unionists, and freelancers create a concrete near-future alternative to the extractive sharing economy. Listen to the <a href="http://quantization.ca/podcast/episode-five-platform-cooperativism/">Quantization podcast episode on platform cooperativism</a> (2017) and see the <a href="https://wiki.fluidproject.org/display/fluid/Platform+Cooperativism">Fluid project's ongoing involvement</a>.
                                        </p>
                                    </li>
                                    <li><a href="https://wiki.fluidproject.org/x/mICcC">Platform Co-ops Explained</a>
                                        <p>An infographic/brochure illustrating the concepts of platform cooperativism.
                                        </p>
                                    </li>
                                    <li><a href="http://hackeducation.com/2017/12/23/top-ed-tech-trends-social-emotional-learning">Education Technology and the New Behaviorism (2017)</a>
                                        <p>Ed-tech writer Audrey Watters summarizes and critiques recent trends in AI, algorithms and other technological developments in education.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="floe-resources-category">
                            <h2 class="floe-resource-title"><button aria-expanded="false" class="flc-resources-toggleItem"><span class="arrow"></span> Inclusive Technology for Learning</button></h2>
                            <div class="floe-resources-content">
                                <p>Articles on the possibilities of inclusive learning technologies, and selected examples.</p>
                                <ul class="floe-resources-items">
                                    <li><a href="https://phet.colorado.edu/en/accessibility/prototypes">Interactive Simulations for Science and Math</a>
                                        <p>Play with PhET’s fun, free, interactive, research-based science and mathematics simulations. Some sims such as <a href="https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_en.html">John Travoltage</a> support keyboard-only access, audio description and sonification.
                                        </p>
                                    </li>
                                    <li><a href="https://snow.idrc.ocadu.ca/">SNOW - Access to education using technology</a>
                                        <p>Get information and training geared to educators, parents and students with disabilities on technologies for learning both in and out of the classroom.
                                        </p>
                                    </li>
                                    <li><a href="http://cisl.cast.org/">Center on Inclusive Software for Learning (CISL) Digital Tools</a>
                                        <p>This suite of tools are designed to support the diverse needs of today’s learners. A demo of
                                            <a href="http://cisl-demo.cast.org/index.html">the reader</a> is available.
                                        </p>
                                    </li>
                                    <li><a href="http://www.ppig.org/sites/default/files/2014-PPIG-25th-Lewis.pdf">Work in Progress Report: Nonvisual Visual Programming (2014)</a>
                                        <p>“Visual programming systems are widely used to introduce children and other learners to programming, but they cannot be used by blind people. Inspired by the ideas of blind computer scientist T.V.Raman, the Noodle system provides nonvisual access to a dataflow programming system, a popular model for visual programming systems.”
                                        </p>
                                    </li>
                                    <li><a href="http://sonify.psych.gatech.edu/">Georgia Tech Sonification Lab</a>
                                        <p>“The Sonification Lab focuses on the development and evaluation of auditory and multimodal interfaces, and the cognitive, psychophysical and practical aspects of auditory displays, paying particular attention to sonification.”
                                        </p>
                                    </li>
                                    <li><a href="http://www.ppig.org/library/paper/nonvisual-interface-blocks-language">A Nonvisual Interface for a Blocks Language (2016)</a>
                                        <p>“We are building a nonvisual interface to a blocks language. We present a pseudospatial interface for the language, similar to that of Noodle, and compare it with other approaches to accessibility for blocks languages.”
                                        </p>
                                    </li>
                                    <li><a href="https://amara.org/en/">Amara Video Captioning</a>
                                        <p>Use Amara's technology to caption and subtitle any video for free.</p>
                                    </li>
                                    <li><a href="https://pressbooks.com/">Pressbooks</a>
                                        <p>Pressbooks easy-to-use book writing software enables people to create books in all the formats needed for publishing.
                                        </p>
                                    </li>
                                    <li><a href="http://www.jstor.org/stable/pdf/jeductechsoci.9.4.215.pdf">Interoperability for Individual Learner Centred Accessibility for Web-based Educational Systems (2006)</a>
                                        <p>This paper describes the AccessForAll accessibility strategy for delivering accessible computer based resources to individual learners based on their specified needs and preferences in the circumstances in which they are operating. Many of the resources presented here are based on this original work.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="floe-resources-category">
                            <h2 class="floe-resource-title"><button aria-expanded="false" class="flc-resources-toggleItem"><span class="arrow"></span> Finding Open Educational Resources</button></h2>
                            <div class="floe-resources-content">
                                <p>These sites offer OER-specific resources, such as directories or authoring tools.</p>
                                <ul class="floe-resources-items">
                                    <li><a href="https://cnx.org/">Connexions</a>
                                        <p>Discover learning materials in an Open Space. View and share free educational material in small modules that can be organized as courses, books, reports or other academic assignments.
                                        </p>
                                    </li>
                                    <li><a href="https://www.engageny.org/">EngageNY</a>
                                        <p>Current materials and resources related to the implementation of the New York State P-12 Common Core Learning Standards (CCLS), Teacher and Leader Effectiveness (TLE), and Data-Driven Instruction (DDI). EngageNY is dedicated to providing educators across New York State with real-time, professional learning tools and resources to support educators in reaching the State’s vision for a college and career ready education for all students.
                                        </p>
                                    </li>
                                    <li><a href="https://extend-bank.ecampusontario.ca/">Extend Activity Bank</a>
                                        <p>The Extend Activity Bank explores the skills, knowledge, and attributes required to extend and transform teaching and learning practices and to enrich professional development. The intent of these resources is to provide the basis for more deliberate course design and digital pedagogical practice.
                                        </p>
                                    </li>
                                    <li><a href="http://www.gooru.org/">Gooru</a>
                                        <p>Gooru is an educational technology non-profit that is dedicated to improving learning outcomes for all students by making education equally accessible and empowering. Gooru is creating technology that enables educators and researchers to “open-source” effective practices and content to improve learning outcomes for all.
                                        </p>
                                    </li>
                                    <li><a href="http://www.k12.com/">K-12</a>
                                        <p>K12 is a leading online learning provider serving K–12 online schools. The K12 program is offered through tuition-free online public schools* and online private schools.
                                        </p>
                                    </li>
                                    <li><a href="https://www.merlot.org/merlot/index.htm">Multimedia Educational Resource for Learning and Online Teaching (MERLOT)</a>
                                        <p>MERLOT is a curated collection of free and open online teaching, learning, and faculty development services contributed and used by an international education community.
                                        </p>
                                    </li>
                                    <li><a href="https://www.oercommons.org/">OER Commons</a>
                                        <p>OER Commons is a public digital library of open educational resources. Explore, create, and collaborate with educators around the world to improve curriculum.
                                        </p>
                                    </li>
                                    <li><a href="https://oerpub.org/">OER Pub</a>
                                        <p>OERPub is creating innovative open-source tools for authoring, adapting, remixing and publishing open education resources and then delivering them to the web, mobile, tablet and print.
                                        </p>
                                    </li>
                                    <li><a href="http://www.oeconsortium.org/">Open Education Consortium</a>
                                        <p>A global network of educational institutions, individuals and organizations that support an approach to education based on openness, including collaboration, innovation and collective development and use of open educational materials. The Open Education Consortium is a non-profit, social benefit organization registered in the United States and operating worldwide.
                                        </p>
                                    </li>
                                    <li><a href="https://florida.theorangegrove.org/og/home.do">The Orange Grove</a>
                                        <p>Florida’s open educational resource repository.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

    </Layout>
  )
  
  export default News
  