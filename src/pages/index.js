import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Paving the way toward inclusive Open Education Resources" />

    <div id="content" class="floe-content floe-story">
      <div class="flc-toc-tocContainer toc"> </div>

      <div class="row">


        <div class="columns large-6 small-12">

          <h2>Designing for Diverse Learners.</h2>
          <p>FLOE provides the resources to personalize how we each learn and to address barriers to learning.
          Learners learn differently, and today’s society needs diverse, self-aware, life-long learners.
          FLOE supports learners, educators and curriculum producers in achieving one-size-fits-one learning design
          for the full diversity of learners, leveraging the variants made possible by
                                <a href="http://www.hewlett.org/programs/education/open-educational-resources">Open Education Resources</a> (OER).</p>
          <p>FLOE is led by the <a href="http://idrc.ocadu.ca">Inclusive Design Research Centre</a>
                                and applies <a href="http://idrc.ocad.ca/index.php/resources/idrc-online/library-of-papers/443-whatisinclusivedesign">Inclusive Design</a> to open learning.</p>
        </div>

        <div class="columns large-6 small-12">
          <h2>Watching a video in a loud room, reading in Braille, writing using an alternative keyboard or learning a new language?</h2>
          <p>Being able to transform, augment, and select alternative educational resources to fit individual needs is essential for
          an inclusive learning experience. Open Educational Resources (OERs) are free and open for use and reuse in teaching,
          learning and research. The OER ecosystem can provide an ever-increasing pool of alternative ways to learn.
                            FLOE helps to build knowledge about what works best for each learner.</p>
        </div>

      </div>

      <div class="row">
        <div class="columns large-6 small-12">
          <div class="floe-image floe-image-UIO"></div>
          <h2>Want to select, refine and apply your preferences?</h2>
          <p>Preference editing tools help learners personalize their learning experience.
                               <a href="http://build.fluidproject.org/infusion/demos/prefsFramework/">UI Options</a>
                               allows selection and fine-tuning of preferences. <a href="./ui-options.html">Learn more</a> about adding it to your site or application.</p>
        </div>

        <div class="columns large-6 small-12">
          <div class="floe-image floe-image-exploreTool"></div>
          <h2>Not sure how you learn best?</h2>
          <div>
            <p>The <a href="https://build.fluidproject.org/first-discovery/demos/">First Discovery Tool</a>
                                    helps newcomers learn about what kinds of personalizations are possible, and what might work for them.</p>
            <p>The <a href="http://build.fluidproject.org/prefsEditors/demos/explorationTool/">Preference Exploration Tool</a>
                                    offers a set of starter preferences to try - from reading content aloud so it's easier to follow along,
                                    to enhancing keyboard interactions so it's easier to use.</p>
            <p>The <a href="https://wiki.fluidproject.org/x/CQHBAg">My Lifelong Learning Lab</a>
                                    helps learners keep track of their progress, and personalize their learning goals and
                                    learning experience through self-reflection.</p>
          </div>
        </div>
      </div>

      <div class="row floe-close-top">
        <div class="columns large-6 small-12 large-order-1 small-order-2">
          <p class="floe-space-above">The
                               <a href="prefsEditors.html" name="link-to-screen-cast">Preference Management Tools</a>
                               support portable preferences - you can apply preferences across devices, resources and
                               learning applications using the <a href="http://gpii.net">Global Public Inclusive Infrastructure</a>.
                               The GPII <a href="security.html">security architecture</a> gives you complete control over
                               who has access to your preferences.
                            </p>
        </div>

        <div class="columns large-6 small-12 large-order-2 small-order-1">
          <div class="floe-image floe-image-cloud"></div>
        </div>
      </div>

      <div class="row">
        <div class="columns large-6 small-12 large-order-1 small-order-2">
          <div class="floe-image floe-image-videoPlayer"></div>
        </div>

        <div class="columns large-6 small-12 large-order-2 small-order-1">
          <h2>Looking for help making rich content more inclusive?</h2>
          <p>The
                            <a href="http://build.fluidproject.org/videoPlayer/demos/Mammals.html">HTML5 Video Player</a>
                            offers full keyboard access, captions, transcripts, descriptions and responds to personal user preferences.
                            Learners can request missing captions, descriptions and transcripts, or create them.</p>
          <p>Floe is also developing a
                            <a href="https://wiki.fluidproject.org/display/fluid/%28Floe%29+Sonification">sonification framework</a>
                            that will help OER developers more easily create sound-based representations of interactive data
                            that can increase comprehension and reinforce learning.
                            </p>
          <p>The <a href="http://build.fluidproject.org/chartAuthoring/demos/">Chart Authoring</a> tool demonstrates
                            how audio can enhance comprehension of data.
                            </p>
        </div>
      </div>
      <div class="row">
        <div class="columns large-6 small-12  large-order-1 small-order-2">
          <div class="floe-image floe-image-preferenceIcons"></div>
        </div>


        <div class="columns large-6 small-12 large-order-2 small-order-1">
          <h2>Need guidance in designing accessible resources?</h2>
          <p>The <a href="http://handbook.floeproject.org/">Inclusive Learning Design Handbook</a>
                            is an expanding source of guidance, tools and tips for producing inclusively designed learning resources,
                            including guidelines for creating
                            <a href="http://handbook.floeproject.org/InclusiveEPUB3.html">inclusive EPUB 3 resources</a>,
                            <a href="http://handbook.floeproject.org/AccessibleStandardizedTesting.html">accessible standardized tests</a>, and
                            <a href="http://handbook.floeproject.org/WebGamesAndSimulations.html">inclusive web games and simulations</a>.</p>

          <p>Floe has created <a href="http://guide.inclusivedesign.ca/">The Inclusive
                            Design Guide</a> - an engaging and evolving resource for learning about and applying Inclusive Design principles, practices,
                            and tools to the design process.
                            </p>

          <p>The <a href="http://metadata.floeproject.org/demos/metadata/">Metadata Editor</a>
                            makes it simple to provide useful labels regarding the learner preferences the resource can meet,
                            and supports authors in adding accessibility features.
                            The <a href="http://metadata.floeproject.org/demos/feedback/">Feedback Tool</a>
                            allows users to help in the refinement of content and its metadata.</p>
          <p>Floe has added a <a href="https://github.com/fluid-project/infusion-docs/blob/master/src/documents/TextToSpeechAPI.md">text-to-speech component</a>
                            to the Infusion JavaScript framework. The component uses browser-based speech synthesis
                            to provide self-voicing capabilities to web resources.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h2>See Also</h2>
          <a href="http://wiki.fluidproject.org/display/fluid/Floe">Floe Wiki</a>
          <p>Resource for Floe design, development & project planning</p>
          <a href="https://github.com/fluid-project/">Floe on Github</a>
          <p>Repository of all Floe source code</p>
        </div>
      </div>
    </div>

    <div class="floe-bottom-content">
      <div class="floe-content row">
        <div class="columns large-6 small-12">
          <div>

            <h3>Partnerships</h3>
            <dl>
              <dt><a href="http://phet.colorado.edu//">PhET</a></dt>
              <dd>Floe is working with PhET to improve the accessibility of their interactive simulations, <a href="https://wiki.fluidproject.org/x/AgDsAg">improving designs for accessibility</a>.</dd>
              <dt><a href="http://outside-in.idrc.ocadu.ca/">Outside-IN</a></dt>
              <dd>Outside-IN provides individualized youth training and mentorship programs. Floe is working with Outside-IN, creating tools to support youth engagement.</dd>
              <dt><a href="http://raisingthefloor.org/">Raising the Floor</a></dt>
              <dd><a href="http://gpii.net/">The Global Public Inclusive Infrastructure (GPII)</a>, a project of Raising the Floor, is building upon the foundation of Learner Options to create preference editing tools. This global project makes extensive use of <a href="https://github.com/fluid-project/infusion-docs/">Fluid Infusion</a>.</dd>
              <dt><a href="http://wiki.gpii.net/index.php/Developer_Space">Prosperity4All Developer Space</a></dt>
              <dd>Floe is working with the GPII on the development of the Prosperity4All Developer Space (D-Space), which will support developers in finding, using, and contributing to inclusive software development.</dd>
              <dt><a href="https://pressbooks.com/">Pressbooks</a></dt>
              <dd>Collaborating on accessible content and themes</dd>
              <dt><a href="http://www.oercommons.org">OER Commons</a></dt>
              <dd>OER Commons has integrated Learner Options across their entire site and has also integrated the Floe designs for content authoring in Open Author.</dd>
              <dt><a href="http://oerpub.org/">OERPUB</a></dt>
              <dd>OERPUB is using the Floe Video Player and Metadata Author to create rich, customizable learning content.</dd>
              <dt><a href="http://cnx.org/">Connexions</a></dt><dd></dd>
              <dt><a href="http://www.merlot.org/merlot/index.htm">MERLOT</a></dt><dd></dd>
              <dt><a href="http://www.ocwconsortium.org/">Open Courseware Consortium</a></dt><dd></dd>
            </dl>
          </div>
        </div>

        <div class="columns large-6 small-12">
          <div>
            <div class="floe-front-news">
              <h3>News</h3>

              <h4><a href="./news/2019-11-05-Design-2-Align.html">Design-2-Align curriculum alignment in crisis contexts</a></h4>
              <time class="floe-date" datetime="2019-11-05">November 5, 2019</time>
              <p>
                In October the IDRC participated in a three-day hackathon in San Francisco focused on aligning
                primary and secondary curriculum in crisis contexts.
                                </p>
              <p><a href="./news/2019-11-05-Design-2-Align.html">Read more: Design-2-Align curriculum alignment in crisis contexts</a></p>

              <h4><a href="./news/2019-10-23-SJRK-F2F.html">Stories from the Social Justice Repair Kit</a></h4>
              <time class="floe-date" datetime="2019-10-23">October 23, 2019</time>
              <p>
                On October 17th, the
                                    <a href="https://www.sojustrepairit.org/">Social Justice Repair Kit</a>
                                    project met to reflect on the past three years of work, creating
                                    <a href="http://stories.sojustrepairit.org/">stories</a> to capture their experiences on the project.
                                </p>
              <p><a href="./news/2019-10-23-SJRK-F2F.html">Read more: Stories from the Social Justice Repair Kit</a></p>

              <h4><a href="./news/2019-08-12-Coding-Prototype-Co-design.html">Co-design at Summer Coding Camps</a></h4>
              <time class="floe-date" datetime="2019-08-12">August 12, 2019</time>
              <p>
                Floe participated in Summer Coding Camps where students used a coding environment prototype,
                markers, paint and robots to create artworks.
                                </p>
              <p><a href="./news/2019-08-12-Coding-Prototype-Co-design.html">Read more: Co-design at Summer Coding Camps</a></p>

              <h4><a href="./news/2019-07-02-Guelph-accessibility-conference.html">Floe at the University of Guelph Accessibility Conference</a></h4>
              <time class="floe-date" datetime="2019-07-02">July 2, 2019</time>
              <p>
                On May 28 and 29, Floe made an appearance at the 2019 <a href="https://opened.uoguelph.ca/accessibility-conference">Accessibility Conference</a> put on by <a href="https://opened.uoguelph.ca/">Open Learning and Educational Support</a> at the <a href="https://opened.uoguelph.ca/">University of Guelph</a>.
                                </p>
              <p><a href="./news/2019-07-02-Guelph-accessibility-conference.html">Read more: Floe at the University of Guelph Accessibility Conference</a></p>
            </div>
          </div>
        </div>



      </div>
    </div>

  </Layout>
)

export default IndexPage
