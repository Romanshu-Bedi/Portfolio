import { useState } from 'react';
import Globe from 'react-globe.gl';
import Tech from '../components/Tech.jsx'; // Adjust path as needed
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('bediromanshu@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 h-full">
        {/* Grid 1: About Me */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Romanshu Bedi</p>
              <p className="grid-subtext">
                With a strong passion for coding, I have honed my skills in both frontend and backend development,
                creating dynamic and responsive websites through hands-on projects and continuous learning. I specialize
                in leveraging modern technologies and frameworks to build user-friendly and scalable applications.
                Beyond development, I enjoy solving complex problems, optimizing systems, and exploring innovative
                solutions to enhance user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 2: Relevant Coursework */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Relevant Coursework</p>
              <ul className="grid-subtext list-disc pl-5">
                <li>Data Structures and Algorithms</li>
                <li>Machine Learning</li>
                <li>Web Application and Architecture</li>
                <li>Human-Computer Interaction (UI/UX)</li>
                <li>File and Database Management (SQL and MongoDB)</li>
                <li>Search and Planning in Artificial Intelligence</li>
                <li>Introduction to Software Engineering (Java)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Grid 4: Upcoming Projects */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">

            {/* Content */}
            <div className="pt-8"> {/* Added padding at the top */}
              <h2 className="text-white text-3xl font-bold mb-6"> {/* Increased font size */}
                Upcoming Projects
              </h2>

              {/* Project 1 */}
              <div className="bg-black/60 p-4 rounded-xl w-[calc(100%+2rem)] -ml-4 mb-4">
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold">
                    SayIt: Language Detection and Translation
                  </h3>
                  <ul className="text-gray-300 text-sm list-disc list-inside">
                    <li>Instant language detection</li>
                    <li>Real-time translations, even offline</li>
                    <li>Effortless cross-cultural communication</li>
                    <li>Multilingual support for over 100 languages</li>
                  </ul>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-black/60 p-4 rounded-xl w-[calc(100%+2rem)] -ml-4">
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold">
                    Podcastr - AI Podcast Platform
                  </h3>
                  <ul className="text-gray-300 text-sm list-disc list-inside">
                    <li className="text-gray-300 text-sm leading-6">
                      Seamless podcast creation with diverse voiceovers
                    </li>
                    <li className="text-gray-300 text-sm leading-6">
                      AI-powered text-to-multiple-voices generation
                    </li>
                    <li className="text-gray-300 text-sm leading-6">
                      Automated transcription of episodes for accessibility
                    </li>
                  </ul>
                </div>
              </div>

              {/* Button */}
              <div className="w-full mt-10">
                <a href="#projects" className="block">
                  <Button
                    name="View All Projects"
                    isBeam
                    containerClass="w-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 5: Technologies Used */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div>
              <p className="grid-headtext">Technologies Used</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn’t just my profession—it’s my
                passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>

              <div className="mt-4">
                <Tech />
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  bediromanshu@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;